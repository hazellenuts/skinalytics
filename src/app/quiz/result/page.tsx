"use client";

import { useSearchParams } from "next/navigation";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const scores = JSON.parse(searchParams.get("scores") || "[]");

  const [section1, section2] = scores;

  let result1 = section1 <= 10 ? "Pizza" : "Pasta";
  let result2 = section2 <= 10 ? "Donut" : "Bread";

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz Results</h1>
      <p>
        You prefer: <b>{result1}</b> and <b>{result2}</b>.
      </p>
      <div>
        <h2>Section Scores:</h2>
        <p>Section 1 score: <b>{section1}</b></p>
        <p>Section 2 score: <b>{section2}</b></p>
      </div>
    </div>
  );
}
