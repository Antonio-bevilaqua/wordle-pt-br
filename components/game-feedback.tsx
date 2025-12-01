import useGameManager from '@/hooks/use-game-manager';
import { GameStatus } from '@/providers/game.provider';
import VirtualKeyboard from './virtual-keyboard';

const GameFeedback = () => {
    const { state, reset } = useGameManager();

    if (state.gameStatus === GameStatus.PLAYING) return <VirtualKeyboard />;

    return (
        <div className="flex flex-col items-center justify-center pt-4">
            {state.gameStatus === GameStatus.WON ? (
                <h1 className="text-2xl text-green-600 font-bold">PARABÉNS, VOCÊ GANHOU!</h1>
            ) : (
                <h1 className="text-2xl text-red-600 font-bold">QUE PENA, VOCÊ PERDEU!</h1>
            )}
            <p className="text-lg text-gray-700">A palavra era <strong>{state.gameWord}</strong></p>
            <button
                className="btn btn-primary mt-8 px-6 py-3 text-lg cursor-pointer animate-bounce font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
                onClick={reset}
            >
                Jogar Novamente
            </button>
        </div>
    );
}

export default GameFeedback;