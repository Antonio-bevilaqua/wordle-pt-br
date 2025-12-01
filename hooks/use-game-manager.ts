import { getRandomWord } from "@/lib/words";
import { GameContext, GameStatus } from "@/providers/game.provider";
import React from "react";

export default function useGameManager() {
    const { state, setState } = React.useContext(GameContext)!;

    const handleKeyboardEvent = (event: KeyboardEvent) => {
        if (state.gameStatus !== GameStatus.PLAYING) return;
        if (event.key === 'Backspace') {
            return removeLastChar();
        }

        if (event.key === 'Enter' && state.actualWord.length === state.gameWord.length) {
            return updateGridWord();
        }

        if (/^[a-zA-ZçÇ]$/.test(event.key) && state.actualWord.length < state.gameWord.length) {
            addChar(event.key);
        }
    };

    const removeLastChar = () => {
        setState((prevState) => ({
            ...prevState,
            actualWord: prevState.actualWord.slice(0, -1),
        }));
    }

    const addChar = (char: string) => {
        char = char.toUpperCase();
        setState((prevState) => {
            prevState.usedChars.add(char);
            return {
                ...prevState,
                actualWord: prevState.actualWord + char
            };
        });
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
        addChar,
        updateGridWord,
        handleKeyboardEvent,
        removeLastChar,
        reset,
    }
}