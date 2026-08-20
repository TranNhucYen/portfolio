import React, { useEffect, useRef, useState } from 'react';

type HistoryItem = { type: 'input' | 'output'; text: string };

export function Terminal() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);

  const handleCommand = (command: string) => {
    if (!command.trim()) return;

    const newHistory: HistoryItem[] = [
      ...history,
      { type: 'input', text: command },
    ];

    // Mock responses
    if (command.trim() === 'ls') {
      newHistory.push({
        type: 'output',
        text: 'src  public  package.json  README.md',
      });
    } else {
      newHistory.push({
        type: 'output',
        text: `zsh: command not found: ${command}`,
      });
    }

    setHistory(newHistory);
  };

  useEffect(() => {
    if (bodyRef.current && history.length > 0) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

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
        className="p-3 flex-1 min-h-0 overflow-y-auto terminal-scrollbar"
      >
        {history.map((item, index) => (
          <div key={index} className="text-sm mb-1">
            {item.type === 'input' ? (
              <span>
                <span className="text-green-400">yen@dev &gt;</span> {item.text}
              </span>
            ) : (
              <span className="text-gray-300">{item.text}</span>
            )}
          </div>
        ))}
        <TerminalInput onCommand={handleCommand} />
      </div>
    </div>
  );
}

function TerminalInput({ onCommand }: { onCommand: (cmd: string) => void }) {
  const [input, setInput] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!input.trim()) return;
      onCommand(input);
      setInput('');
    }
  };

  return (
    <div className="text-sm flex mb-1">
      <span className="whitespace-nowrap">yen@dev &gt;</span>
      <input
        className="ml-2 bg-transparent outline-none flex-1 text-white"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
