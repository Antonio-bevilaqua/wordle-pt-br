import useGameManager from '@/hooks/use-game-manager';
import { useEffect } from 'react';
import LetterInput from '../letter-input';

const AttemptRow = () => {
    const { state, handleKeyboardEvent } = useGameManager();
    const wordLength = state.gameWord.length;

    useEffect(() => {
        window.addEventListener('keydown', handleKeyboardEvent);
        return () => {
            window.removeEventListener('keydown', handleKeyboardEvent);
        };
    }, [state, handleKeyboardEvent]);

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