"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function QuizPage() {
  const router = useRouter();
  const [quizData, setQuizData] = useState<any>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [sectionScores, setSectionScores] = useState([0, 0]);
  const [sectionTotalScore, setSectionTotalScore] = useState([0, 0]);

  // Fetch quiz data from the JSON file
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch("/quiz.json");
        const data = await response.json();
        setQuizData(data);
      } catch (error) {
        console.error("Failed to fetch quiz data:", error);
      }
    };

    fetchQuizData();
  }, []);

  // Show loading state if data is not yet loaded
  if (!quizData) {
    return <div>Loading quiz...</div>;
  }

  const section = quizData.sections[currentSection];
  const question = section.questions[currentQuestion];

  const handleOptionSelect = (points: number) => {
    // Accumulate points for the current section
    setSectionTotalScore((prev) => {
      const newScores = [...prev];
      newScores[currentSection] += points; // Add points to the total score of the section
      return newScores;
    });

    handleNext();
  };

  const handleNext = () => {
    // If we are on the last question of the section, finalize the score before moving to the next
    if (currentQuestion === section.questions.length - 1) {
      if (currentSection === quizData.sections.length - 1) {
        router.push(
          `/quiz/result?scores=${encodeURIComponent(JSON.stringify(sectionTotalScore))}`
        );
      } else {
        setCurrentSection(currentSection + 1);
        setCurrentQuestion(0); // Start from the first question of the next section
      }
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setCurrentQuestion(quizData.sections[currentSection - 1].questions.length - 1); // Go to last question of previous section
    }
  };

  // Calculate the total number of questions in all sections
  const totalQuestions = quizData.sections.reduce((acc: any, section: { questions: string | any[]; }) => acc + section.questions.length, 0);

  // Calculate progress percentage
  const currentQuestionIndex = quizData.sections
    .slice(0, currentSection)
    .reduce((acc: any, section: { questions: string | any[]; }) => acc + section.questions.length, 0) + currentQuestion;
  const progress = (currentQuestionIndex / totalQuestions) * 100;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz</h1>
      <h2 className="text-xl font-semibold mb-2">{section.name}</h2>
      <h3 className="mb-4">{question.question}</h3>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-200 text-blue-600">
                Progress
              </span>
            </div>
          </div>
          <div className="flex mb-2">
            <div className="w-full bg-gray-200 rounded-full">
              <div
                className="bg-blue-500 text-xs leading-none py-1 text-center text-white font-bold rounded-full"
                style={{ width: `${progress}%` }}
              >
                {Math.round(progress)}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Questions and options */}
      <div className="space-y-2">
        {question.options.map((option: any, index: number) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(option.points)}
            className="block w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {option.text}
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentSection === 0 && currentQuestion === 0}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
