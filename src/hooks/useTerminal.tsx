import React, { useEffect, useRef, useState } from 'react';

export type HistoryItem = {
  type: 'input' | 'output';
  text: React.ReactNode;
  path?: string;
};

interface FileNode {
  type: 'file';
}

interface DirNode {
  type: 'dir';
  children: Record<string, FileSystemNode>;
}

type FileSystemNode = FileNode | DirNode;

// Virtual file system tree
const fileSystem: DirNode = {
  type: 'dir',
  children: {
    'server.js': { type: 'file' },
    'README.md': { type: 'file' },
    home: { type: 'dir', children: {} },
  },
};

// Format path segments into display string (e.g. '~' or '~/home')
function displayPath(segments: string[]): string {
  return segments.length === 0 ? '~' : `~/${segments.join('/')}`;
}

// Find a node in the file system tree by path segments
function getNode(segments: string[]): FileSystemNode | undefined {
  let node: FileSystemNode = fileSystem;
  for (const seg of segments) {
    if (node.type !== 'dir') return undefined;
    const next: FileSystemNode | undefined = node.children[seg];
    if (!next) return undefined;
    node = next;
  }
  return node;
}

// Resolve target path string relative to current directory
function resolvePath(
  current: string[],
  target: string,
): { segments: string[] } | { error: string } {
  const isAbsolute = target.startsWith('~') || target.startsWith('/');
  const cleanTarget = target.replace(/^~\/?/, '').replace(/^\//, '');
  const parts = cleanTarget.split('/').filter((p) => p !== '' && p !== '.');

  let segments: string[] = isAbsolute ? [] : [...current];

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part === '..') {
      if (segments.length > 0) segments.pop();
      continue;
    }

    const isLast = i === parts.length - 1;
    const currentNode: FileSystemNode | undefined = getNode(segments);
    if (!currentNode || currentNode.type !== 'dir') {
      return { error: `no such file or directory: ${cleanTarget}` };
    }

    const nextNode: FileSystemNode | undefined = currentNode.children[part];
    if (!nextNode) {
      return { error: `no such file or directory: ${part}` };
    }

    if (nextNode.type === 'file' && !isLast) {
      return { error: `not a directory: ${part}` };
    }

    segments = [...segments, part];
  }

  return { segments };
}

// Get file content for the cat command
function getFileContent(fileName: string): React.ReactNode {
  switch (fileName) {
    case 'README.md':
      return (
        <div className="space-y-1.5 my-1 text-gray-300">
          <p className="font-bold text-white text-base">
            Hi, I'm Tran Nhuc Yen
          </p>
          <p className="text-gray-300">
            Full-stack Developer passionate about building high-performance web
            applications and tools.
          </p>
          <div className="pt-1 space-y-1">
            <p className="text-gray-400 font-semibold">Links:</p>
            <p>
              * GitHub:{' '}
              <a
                href="https://github.com/TranNhucYen/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                https://github.com/TranNhucYen/portfolio
              </a>
            </p>
            <p>
              * Portfolio:{' '}
              <a
                href="https://github.com/TranNhucYen/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                https://github.com/TranNhucYen/portfolio
              </a>
            </p>
            <p>
              * Contact / Repo:{' '}
              <a
                href="https://github.com/TranNhucYen/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                https://github.com/TranNhucYen/portfolio
              </a>
            </p>
          </div>
        </div>
      );

    case 'server.js':
      return (
        <div className="text-gray-300">
          <p className="text-green-400">{'// Server configuration'}</p>
          <p>{"const express = require('express');"}</p>
          <p>{'const app = express();'}</p>
          <p>
            {
              "app.listen(3000, () => console.log('Server running on port 3000'));"
            }
          </p>
        </div>
      );

    default:
      return <span className="text-gray-500">(empty file)</span>;
  }
}

// Custom hook for terminal state and commands
export function useTerminal() {
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: 'input', text: 'help', path: '~' },
    {
      type: 'output',
      text: 'Available commands: ls, cd, cat, node, whoami, help, clear',
    },
  ]);
  const hostname = 'yen@dev';

  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [pathSegments, setPathSegments] = useState<string[]>([]);
  const pathFolder = displayPath(pathSegments);

  // Execute terminal commands
  const handleCommand = (command: string) => {
    const trimmed = command.trim();
    if (!trimmed) return;

    const newHistory: HistoryItem[] = [
      ...history,
      { type: 'input', text: command, path: pathFolder },
    ];

    const parts = trimmed.split(/\s+/);
    const cmd = parts[0];
    const target = parts[1];

    switch (cmd) {
      case 'cd': {
        // Change directory
        if (parts.length > 2) {
          newHistory.push({ type: 'output', text: 'cd: too many arguments' });
        } else if (!target || target === '~' || target === '/') {
          setPathSegments([]);
        } else {
          const result = resolvePath(pathSegments, target);
          if ('error' in result) {
            newHistory.push({ type: 'output', text: `cd: ${result.error}` });
          } else {
            const targetNode = getNode(result.segments);
            if (targetNode?.type === 'file') {
              newHistory.push({
                type: 'output',
                text: `cd: not a directory: ${target}`,
              });
            } else {
              setPathSegments(result.segments);
            }
          }
        }
        break;
      }

      case 'cat': {
        // Read file content
        if (!target) {
          newHistory.push({
            type: 'output',
            text: 'cat: missing file operand',
          });
          break;
        }

        const result = resolvePath(pathSegments, target);
        if ('error' in result) {
          newHistory.push({
            type: 'output',
            text: `cat: ${target}: No such file or directory`,
          });
          break;
        }

        const node = getNode(result.segments);
        if (!node) {
          newHistory.push({
            type: 'output',
            text: `cat: ${target}: No such file or directory`,
          });
        } else if (node.type === 'dir') {
          newHistory.push({
            type: 'output',
            text: `cat: ${target}: Is a directory`,
          });
        } else {
          const fileName = result.segments[result.segments.length - 1];
          newHistory.push({ type: 'output', text: getFileContent(fileName) });
        }
        break;
      }

      case 'ls': {
        // List directory contents
        const currentNode = getNode(pathSegments);
        if (currentNode && currentNode.type === 'dir') {
          const entries = Object.entries(currentNode.children);
          const dirs = entries
            .filter(([, n]) => n.type === 'dir')
            .map(([name]) => name);
          const files = entries
            .filter(([, n]) => n.type === 'file')
            .map(([name]) => name);

          if (dirs.length > 0 || files.length > 0) {
            newHistory.push({
              type: 'output',
              text: (
                <span className="flex flex-wrap gap-x-4">
                  {dirs.map((dir) => (
                    <span key={dir} className="text-blue-400 font-semibold">
                      {dir}
                    </span>
                  ))}
                  {files.map((file) => (
                    <span key={file} className="text-gray-200">
                      {file}
                    </span>
                  ))}
                </span>
              ),
            });
          }
        }
        break;
      }

      case 'node': {
        if (!target) {
          newHistory.push({
            type: 'output',
            text: 'node: missing operand',
          });
        } else if (target === 'server.js') {
          newHistory.push({
            type: 'output',
            text: 'Server running on port 3000',
          });
        } else {
          newHistory.push({
            type: 'output',
            text: `Cannot find module '${target}'`,
          });
        }
        break;
      }

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: 'yen',
        });
        break;

      case 'help':
        // Show available commands
        newHistory.push({
          type: 'output',
          text: 'Available commands: ls, cd, cat, node, whoami, help, clear',
        });
        break;

      case 'clear':
        // Clear terminal history
        setHistory([]);
        return;

      default:
        // Unknown command
        newHistory.push({
          type: 'output',
          text: `zsh: command not found: ${command}`,
        });
    }

    setHistory(newHistory);
  };

  // Autocomplete file or directory name with Tab
  const handleAutoComplete = (currentInput: string): string => {
    const parts = currentInput.split(' ');
    if (parts.length !== 2) return currentInput;

    const [cmd, prefix] = parts;
    if (!['cd', 'cat', 'node'].includes(cmd)) return currentInput;

    const currentNode = getNode(pathSegments);
    if (!currentNode || currentNode.type !== 'dir') return currentInput;

    const entries = Object.entries(currentNode.children);
    const availableTargets =
      cmd === 'cd'
        ? entries
            .filter(([, node]) => node.type === 'dir')
            .map(([name]) => name)
        : entries
            .filter(([, node]) => node.type === 'file')
            .map(([name]) => name);

    const target = availableTargets.find((item) =>
      item.toLowerCase().startsWith(prefix.toLowerCase()),
    );

    return target ? `${cmd} ${target}` : currentInput;
  };

  // Auto-scroll to bottom on new history
  useEffect(() => {
    if (bodyRef.current && history.length > 0) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  // Focus the command input
  const handleFocusTerminal = () => {
    inputRef.current?.focus();
  };

  return {
    history,
    hostname,
    bodyRef,
    inputRef,
    pathFolder,
    handleCommand,
    handleAutoComplete,
    handleFocusTerminal,
  };
}
