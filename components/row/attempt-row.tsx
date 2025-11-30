import useGameManager from '@/hooks/use-game-manager';
import React, { useEffect } from 'react'
import LetterInput from '../letter-input';
import { GameStatus } from '@/providers/game.provider';

const AttemptRow = () => {
    const { state, updateActualWord, updateGridWord } = useGameManager();
    const wordLength = state.gameWord.length;

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (state.gameStatus !== GameStatus.PLAYING) return;
            if (event.key === 'Backspace') {
                updateActualWord(state.actualWord.slice(0, -1));
            } else if (event.key === 'Enter') {
                if (state.actualWord.length === wordLength) {
                    updateGridWord();
                }
            } else if (/^[a-zA-Z]$/.test(event.key) && state.actualWord.length < wordLength) {
                updateActualWord(state.actualWord + event.key.toUpperCase());
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [state, updateActualWord, updateGridWord, wordLength]);

    return (
        <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${wordLength}, minmax(0, 1fr))` }}>
            {Array.from({ length: wordLength }).map((_, letterIndex) => {
                return (
                    <LetterInput key={`letter-${state.attemptIndex}-${letterIndex}`}
                        value={state.actualWord[letterIndex] ?? ''}
                        readOnly={true}
                    />
                );
            })}
        </div>
    )
}

export default AttemptRow