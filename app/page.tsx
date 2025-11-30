"use client";
import RowAnimation from "@/components/animation/row-animation";
import WordleTitle from "@/components/wordle-title";
import Link from "next/link";

export default function Home() {
  const numberOfRows = 6;
  return (
    <div className="flex flex-col items-center justify-center">
      <WordleTitle />
      <p className="mb-8 text-lg text-gray-700 sm:text-base">
        Clone do jogo Wordle com palavras em português do Brasil.
      </p>
      <div className="grid gap-1" style={{ gridTemplateRows: `repeat(${numberOfRows}, minmax(0, 1fr))` }}>
        {Array.from({ length: numberOfRows }).map((_, rowIndex) => (
          <RowAnimation key={`row-animation-${rowIndex}`} rowIndex={rowIndex} />
        ))}
      </div>
      <Link href="/jogo">
        <button className="btn btn-primary mt-8 px-6 py-3 text-lg cursor-pointer animate-bounce font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Jogar Agora
        </button>
      </Link>
    </div>
  );
}
