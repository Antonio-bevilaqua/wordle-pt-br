"use client";
import GameFeedback from '@/components/game-feedback';
import WordGrid from '@/components/word-grid'
import WordleTitle from '@/components/wordle-title';
import { getRandomWord } from '@/lib/words'
import GameProvider from '@/providers/game.provider'

const page = () => {
    return (
        <GameProvider word={getRandomWord()}>
            <div className="flex flex-col items-center justify-center">
                <WordleTitle />
                <p className="mb-8 text-lg text-gray-700 sm:text-base">
                    Digite a palavra e pressione enter para enviar.
                </p>
                <WordGrid />
                <GameFeedback />
            </div>
        </GameProvider>
    )
}

export default page