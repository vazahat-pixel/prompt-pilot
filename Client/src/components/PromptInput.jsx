import React, { useEffect, useState } from "react";
import { GenrateapiResponse } from "../api"; // <-- API helper

function PromptPilot() {
  const [input, setInput] = useState("");
  const [refinedPrompt, setRefinedPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleGenerate = async () => {
  //   if (!input.trim()) return;
  //   const result = await GenrateapiResponse(input);
  //   setRefinedPrompt(result);
  // };
  // Local storage key
  const HISTORY_KEY = "promptPilotHistory";
  const [history, setHistory] = useState([]);

  // Load history from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(HISTORY_KEY);
    if (stored) setHistory(JSON.parse(stored));
  }, []);

  // Save history to localStorage when it changes
  useEffect(() => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }, [history]);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    

    setLoading(true);
    setRefinedPrompt("Generating...");

    const result = await GenrateapiResponse(input);
    setRefinedPrompt(result);
    // Add to history
    setInput("");
    setLoading(false);
    setHistory([
      { input, output: result, timestamp: Date.now() },
      ...history.slice(0, 9), // Keep max 10 items
    ]);
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">🚀 PromptPilot AI</h1>
      <textarea
        className="w-full p-3 border rounded mb-3"
        rows="4"
        placeholder="Enter your raw idea..."
        value={input}
        onChange={(e) => setInput(e.target.value)  
         } 
      />

      <button
        onClick={handleGenerate}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Refine Prompt
      </button>

      {refinedPrompt && (
        <div className="mt-4 p-3 border rounded bg-gray-50 text-left">
          <h2 className="font-semibold mb-2">✨ Professional AI Prompt:</h2>
          <div className="flex items-center">
            <p className="flex-1">{refinedPrompt}</p>
            <button
              className="ml-2 px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
              onClick={() => {
                navigator.clipboard.writeText(refinedPrompt);
              }}
              title="Copy to clipboard"
            >
              Copy
            </button>
          </div>
        </div>
      )}
      {history.length > 0 && (
        <div className="mt-8 text-left">
          <h2 className="font-semibold mb-2">🕑 Recent History</h2>
          <ul className="space-y-3">
            {history.map((item, idx) => (
              <li key={item.timestamp} className="p-3 border rounded bg-gray-50">
                <div className="text-xs text-gray-500 mb-1">
                  {new Date(item.timestamp).toLocaleString()}
                </div>
                <div className="mb-1">
                  <span className="font-semibold">Input:</span> {item.input}
                </div>
                <div className="mb-1">
                  <span className="font-semibold">Output:</span> {item.output}
                </div>
                <button
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                  onClick={() => navigator.clipboard.writeText(item.output)}
                  title="Copy output"
                >
                  Copy Output
                </button>
                <button
                  className="ml-2 px-2 py-1 bg-red-200 rounded hover:bg-red-300 text-sm"
                  onClick={() =>
                    setHistory(history.filter((_, i) => i !== idx))
                  }
                  title="Delete entry"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PromptPilot;
