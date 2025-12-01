"use client";
import React from 'react'
import GameFeedback from '@/components/game-feedback';
import WordGrid from '@/components/word-grid'
import WordleTitle from '@/components/wordle-title';
import { getRandomWord } from '@/lib/words'
import GameProvider from '@/providers/game.provider'

const Page = () => {
    const [showInfo, setShowInfo] = React.useState(false);
    return (
        <GameProvider word={getRandomWord()}>
            <div className="flex flex-col items-center justify-center">
                <WordleTitle />
                <h4 className="text-lg font-bold text-gray-800 text-center">Tente adivinhar a palavra em 5 tentativas!</h4>
                <button onClick={() => setShowInfo(!showInfo)} className="cursor-pointer flex gap-1 items-center font-bold text-blue-600 hover:text-blue-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                    Regras
                </button>
                {showInfo && (
                    <div onClick={() => setShowInfo(false)} className="fixed top-0 left-0 h-screen w-screen bg-black/80 flex items-center justify-center p-4">
                        <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg p-6 max-w-md w-fit flex flex-col items-center">
                            <p className="text-sm text-gray-700 sm:text-base text-center">
                                Você tem 5 tentativas para adivinhar a palavra correta.
                                <br /><br />Letras <span className="text-gray-600 font-bold">cinzas</span> estão incorretas.
                                <br /><br />Letras <span className="text-yellow-600 font-bold">amarelas</span> estão na palavra, mas na posição errada.
                                <br /><br />Letras <span className="text-green-600 font-bold">verdes</span> estão na posição correta.
                                <br /><br />Digite a palavra e pressione enter para enviar sua tentativa.
                                <br /><br /><span className="font-bold">Boa sorte!</span>
                            </p>
                            <button onClick={() => setShowInfo(false)} className="btn btn-primary w-full mt-4 px-6 py-3 text-sm cursor-pointer font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
                                Fechar
                            </button>
                        </div>
                    </div>
                )}
                <WordGrid />
                <GameFeedback />
            </div>
        </GameProvider>
    )
}

export default Page