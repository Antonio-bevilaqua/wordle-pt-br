import { Color } from '@/components/letter-input';
import { StateContext } from '@/lib/types';
import React from 'react'

export enum GameStatus {
  PLAYING,
  WON,
  LOST,
};

export type GameContextType = {
  gameWord: string;
  actualWord: string;
  gridWords: string[][];
  gameStatus: GameStatus;
  attemptIndex: number;
  wordIndex: number;
  usedChars: Set<string>;
}

export const GameContext = React.createContext<StateContext<GameContextType>>(null);

const GameProvider = ({
  children,
  word,
  maxAttempts = 5,
}: {
  children: React.ReactNode;
  word: string;
  maxAttempts?: number;
}) => {
  const [state, setState] = React.useState<GameContextType>({
    gameWord: word,
    actualWord: '',
    gridWords: Array.from({ length: maxAttempts }, () => Array.from({ length: word.length }, () => '')),
    gameStatus: GameStatus.PLAYING,
    attemptIndex: 0,
    wordIndex: 0,
    usedChars: new Set(),
  });

  return (
    <GameContext.Provider value={{ state, setState }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider