import { Color } from "@/components/letter-input";
import { getRandomWord, words } from "@/lib/words";
import { GameContext, GameStatus } from "@/providers/game.provider";
import React from "react";

export default function useGameManager() {
    const { state, setState } = React.useContext(GameContext)!;

    const updateActualWord = (newWord: string) => {
        setState((prevState) => ({
            ...prevState,
            actualWord: newWord,
        }));
    }

    const updateGridWord = () => {
        if (state.actualWord.length !== state.gameWord.length) return;

        setState((prevState) => {
            const updatedWords = prevState.gridWords.map((wordArr, index) => {
                if (index === prevState.attemptIndex) {
                    return prevState.actualWord.split('');
                }
                return wordArr;
            });

            let gameStatus = prevState.gameStatus;
            if (prevState.actualWord === prevState.gameWord) {
                gameStatus = GameStatus.WON;
            } else if (prevState.attemptIndex + 1 >= prevState.gridWords.length) {
                gameStatus = GameStatus.LOST;
            }
            return {
                ...prevState,
                gameStatus: gameStatus,
                actualWord: '',
                attemptIndex: prevState.attemptIndex + 1,
                gridWords: updatedWords,
            };
        });
    }

    const reset = () => {
        setState((prevState) => ({
            ...prevState,
            actualWord: '',
            gridWords: Array.from({ length: prevState.gridWords.length }, () => Array.from({ length: prevState.gameWord.length }, () => '')),
            gameStatus: GameStatus.PLAYING,
            attemptIndex: 0,
            gameWord: getRandomWord()
        }));
    }

    return {
        state,
        updateGridWord,
        updateActualWord,
        reset,
    }
}