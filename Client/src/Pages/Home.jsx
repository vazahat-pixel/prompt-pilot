import React, { useState } from "react";
import PromptInput from "../components/PromptInput";

function Home() {
  const [result, setResult] = useState("");

  const handleGenerate = (prompt) => {
    // Temporary mock result (later connect API)
    setResult(`Professional Version: "${prompt}"`);
  };
  return (
    <div className="max-w-3xl mx-auto mt-16 text-center">
      <h1 className="text-4xl font-bold mb-6">
        PromptPilot - Your AI Prompt Enhancer
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Transform your simple ideas into professional prompts.
      </p>
      <PromptInput onGenerate={handleGenerate} />
      {result && <ResultCard text={result} />}
    </div>
  );
}

export default Home;
