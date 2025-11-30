import { Color } from "@/components/letter-input";

export default function useGameFeedbackColors() {

    const getFeedbackWordColors = (actualWord: string, gameWord: string): Color[] => {
        let letters = actualWord.split('');
        let lettersToCheck: { [key: number]: string } = {};

        for (let i = 0; i < letters.length; i++) {
            lettersToCheck[i] = letters[i];
        }

        let checkedLetterCount: { [key: string]: number } = {};
        let colors = Array<Color>(letters.length).fill('gray');

        //checa primeiro as letras em posições corretas (verdes), removendo-as da lista de checagem
        //isso evita que letras verdes sejam marcadas como amarelas erroneamente
        for (let i = 0; i < letters.length; i++) {
            if (gameWord[i] === lettersToCheck[i]) {
                checkedLetterCount[lettersToCheck[i]] = (checkedLetterCount[lettersToCheck[i]] || 0) + 1;
                colors[i] = 'green';
                delete lettersToCheck[i];
            }
        }

        //checagem das letras que estão na palavra mas em posições erradas (amarelas)
        //caso a letra seja repetida na palavra, só marca como amarela se ainda existirem ocorrências não marcadas
        for (let key of Object.keys(lettersToCheck)) {
            const index = parseInt(key);
            const letter = lettersToCheck[index];

            if (gameWord.includes(letter)) {
                const totalLetterCount = gameWord.split('').filter(l => l === letter).length;
                const alreadyCheckedCount = checkedLetterCount[letter] || 0;
                if (alreadyCheckedCount < totalLetterCount) {
                    colors[index] = 'yellow';
                    checkedLetterCount[letter] = alreadyCheckedCount + 1;
                }
            }
        }

        return colors;
    }

    return getFeedbackWordColors;
}