import useGameManager from '@/hooks/use-game-manager';
import LetterInput from '../letter-input';
import useGameFeedbackColors from '@/hooks/use-game-feedback-colors';

const FeedbackRow = ({ rowIndex }: { rowIndex: number }) => {
    const { state } = useGameManager();
    const getGameFeedbackColors = useGameFeedbackColors();
    const colors = getGameFeedbackColors(state.gridWords[rowIndex].join(''), state.gameWord);

    return (
        <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${state.gameWord.length}, minmax(0, 1fr))` }}>
            {Array.from({ length: state.gameWord.length }).map((_, letterIndex) => {
                return (
                    <LetterInput key={`letter-${rowIndex}-${letterIndex}`}
                        value={state.gridWords[rowIndex][letterIndex]}
                        color={colors[letterIndex]}
                        readOnly={true}
                    />
                );
            })}
        </div>
    )
}

export default FeedbackRow