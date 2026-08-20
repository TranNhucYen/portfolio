import React, { useState } from 'react';
import { useTerminal } from '../hooks/useTerminal';

export function Terminal() {
  const {
    history,
    hostname,
    bodyRef,
    inputRef,
    pathFolder,
    handleCommand,
    handleAutoComplete,
    handleFocusTerminal,
  } = useTerminal();

  return (
    <div className="bg-gray-800 text-white w-full h-full min-h-0 rounded-md font-mono flex flex-col overflow-hidden shadow-xs">
      {/* terminal header */}
      <div className="bg-gray-600 rounded-t-md flex items-center p-2 shrink-0">
        <div className="flex gap-2 flex-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-none">
          <p className="text-gray-300 text-sm font-semibold">Zsh</p>
        </div>
        <div className="flex-1"></div>
      </div>

      {/* terminal body */}
      <div
        ref={bodyRef}
        onClick={handleFocusTerminal}
        className="p-3 flex-1 min-h-0 overflow-y-auto terminal-scrollbar"
      >
        {history.map((item, index) => (
          <div key={index} className="text-sm mb-1">
            {item.type === 'input' ? (
              <span>
                <span className="text-green-400">{hostname}</span>{' '}
                <span className="text-blue-400">{item.path || '~'}</span> &gt;{' '}
                {item.text}
              </span>
            ) : (
              <span className="text-gray-300">{item.text}</span>
            )}
          </div>
        ))}
        <TerminalInput
          hostname={hostname}
          onCommand={handleCommand}
          onAutoComplete={handleAutoComplete}
          ref={inputRef}
          pathFolder={pathFolder}
        />
      </div>
    </div>
  );
}

function TerminalInput({
  hostname = 'yen@dev',
  onCommand,
  onAutoComplete,
  ref,
  pathFolder,
}: {
  hostname?: string;
  onCommand: (cmd: string) => void;
  onAutoComplete?: (input: string) => string;
  ref?: React.RefObject<HTMLInputElement | null>;
  pathFolder: string;
}) {
  const [input, setInput] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      if (onAutoComplete) {
        setInput(onAutoComplete(input));
      }
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!input.trim()) return;
      onCommand(input);
      setInput('');
    }
  };

  return (
    <div className="text-sm flex mb-1">
      <span className="whitespace-nowrap">
        <span className="text-green-400">{hostname}</span>{' '}
        <span className="text-blue-400">{pathFolder}</span> &gt;
      </span>
      <input
        ref={ref}
        className="ml-2 bg-transparent outline-none flex-1 text-white"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
