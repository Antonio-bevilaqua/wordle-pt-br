import useGameManager from '@/hooks/use-game-manager';
import React from 'react'

const VirtualKeyboard = () => {
    const { updateGridWord, addChar, removeLastChar } = useGameManager();
    const keys = [
        'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F',
        'G', 'H', 'J', 'K', 'L', 'Ç', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'
    ];

    return (
        <div className="grid gap-1 md:gap-2 w-full max-w-md lg:max-w-3xl md:justify-center mt-12">
            <div className="grid grid-cols-8 w-full md:flex md:flex-wrap items-center justify-center gap-1 md:gap-2">
                {keys.map((key) => (
                    <button onClick={() => addChar(key)} key={key} className="
                        text-xs
                        w-full
                        h-6
                        text-center
                        flex
                        md:w-[60px]
                        md:h-[60px]
                        md:text-lg
                        bg-gray-400 
                        items-center
                        justify-center
                        rounded-md 
                        shadow-md 
                        cursor-pointer
                        hover:bg-gray-500
                        active:bg-gray-600
                        ">
                        {key}
                    </button>
                ))}
                <button onClick={() => removeLastChar()} className="
                        text-xs
                        col-span-2
                        h-6
                        text-center
                        flex
                        md:w-[60px]
                        md:h-[60px]
                        md:text-lg
                        flex-1
                        md:flex-none
                        lg:w-[calc(120px+0.5rem)]
                        bg-gray-400 
                        items-center
                        justify-center
                        rounded-md 
                        shadow-md 
                        cursor-pointer
                        hover:bg-gray-500
                        active:bg-gray-600
                        ">
                    ⟵
                </button>
                <button onClick={() => updateGridWord()} className="
                        text-xs
                        col-span-3
                        h-6
                        text-center
                        flex
                        md:w-32
                        md:h-[60px]
                        md:text-lg
                        flex-1
                        md:flex-none
                        lg:w-[calc(240px+1.5rem)]
                        bg-gray-400 
                        items-center
                        justify-center
                        rounded-md 
                        shadow-md 
                        cursor-pointer
                        hover:bg-gray-500
                        active:bg-gray-600
                        ">
                    ENTER ⮥
                </button>
            </div>
        </div>
    )
}

export default VirtualKeyboard