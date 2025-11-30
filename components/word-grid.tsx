import useGameManager from '@/hooks/use-game-manager';
import WordGridRow from './row/word-grid-row';

const WordGrid = () => {
  const { state } = useGameManager();
  return (
    <div className="grid gap-1" style={{ gridTemplateRows: `repeat(${state.gridWords.length}, minmax(0, 1fr))` }}>
      {state.gridWords.map((_, rowIndex) => (
        <WordGridRow key={`row-${rowIndex}`} rowIndex={rowIndex} />
      ))}
    </div>
  );
}

export default WordGrid