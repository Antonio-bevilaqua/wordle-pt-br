import LetterInput from './letter-input'

const WordleTitle = () => {
    return (
        <h1 className="mb-4 text-6xl font-bold text-gray-900 dark:text-white sm:text-5xl text-center">
            <LetterInput value="W" color="green" readOnly />
            <LetterInput value="O" color="yellow" readOnly />
            <LetterInput value="R" color="gray" readOnly />
            <LetterInput value="D" color="green" readOnly />
            <LetterInput value="L" color="yellow" readOnly />
            <LetterInput value="E" color="gray" readOnly />
        </h1>
    )
}

export default WordleTitle