import { GameContext } from '@/providers/game.provider';
import React, { useContext } from 'react'
import AttemptRow from './attempt-row';
import FeedbackRow from './feedback-row';
import FutureRow from './future-row';

const WordGridRow = ({
    rowIndex
}: {
    rowIndex: number;
}) => {
    const { state } = useContext(GameContext)!;

    if (rowIndex < state.attemptIndex) {
        return <FeedbackRow rowIndex={rowIndex} />;
    }

    if (rowIndex === state.attemptIndex) {
        return <AttemptRow />;
    }

    return <FutureRow />;
}

export default WordGridRow;