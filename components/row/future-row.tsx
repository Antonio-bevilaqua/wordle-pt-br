import useGameManager from '@/hooks/use-game-manager';
import LetterInput from '../letter-input';

const FutureRow = () => {
    const { state } = useGameManager();

    return (
        <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${state.gameWord.length}, minmax(0, 1fr))` }}>
            {Array.from({ length: state.gameWord.length }).map((_, letterIndex) => {
                return (
                    <LetterInput key={`letter-future-${letterIndex}`}
                        value={''}
                        readOnly={true}
                    />
                );
            })}
        </div>
    )
}

export default FutureRow;