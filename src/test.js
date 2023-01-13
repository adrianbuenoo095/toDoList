class Dictionary {
    constructor(wordsArray) {
        this.dict = wordsArray;
    }

    isInDict(word) {
        return this.dict.some((dictWird) => {
            const regexTemplete = word.replace('*', '.');
            const regex = new RegExp(`^${regexTemplete}`);
            return regex.test(dictWird);
        })
    }
}

const test = new Dictionary(['cat', 'car', 'bar'])
console.log(test.isInDict('cat'));