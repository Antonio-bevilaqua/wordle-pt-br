"use client";
import { getRandomWord } from '@/lib/words';
import React, { useEffect } from 'react'
import LetterInput, { Color } from '../letter-input';
import useGameFeedbackColors from '@/hooks/use-game-feedback-colors';

const RowAnimation = ({ rowIndex }: { rowIndex: number }) => {
  const getGameFeedbackColors = useGameFeedbackColors();
  const [state, setState] = React.useState<{ word: string; actualWord: string, colors: Color[] }>({
    word: getRandomWord(),
    actualWord: "ABCDE",
    colors: Array.from({ length: 5 }, () => 'gray'),
  });

  useEffect(() => {

    for (let i = 0; i < state.word.length; i++) {
      setTimeout(() => {
        setInterval(() => {
          setState((prevState) => {
            const validLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const newActualWordArray = prevState.actualWord.split('');
            newActualWordArray[i] = validLetters[Math.floor(Math.random() * validLetters.length)]
            let newActualWord = newActualWordArray.join('');
            const colors = getGameFeedbackColors(newActualWord, prevState.word);
            return {
              ...prevState,
              actualWord: newActualWord,
              colors: colors,
            };
          });
        }, 300);
      }, (i + 1) * 200)
    }
  }, [state.word.length]);

  return (
    <div suppressHydrationWarning={true} className="grid gap-1" style={{ gridTemplateColumns: `repeat(${state.word.length}, minmax(0, 1fr))` }}>
      {Array.from({ length: state.word.length }).map((_, letterIndex) => {
        return (
          <LetterInput key={`letter-${rowIndex}-${letterIndex}`}
            value={state.actualWord[letterIndex]}
            color={state.colors[letterIndex]}
            readOnly={true}
          />
        );
      })}
    </div>
  )
}

export default RowAnimation