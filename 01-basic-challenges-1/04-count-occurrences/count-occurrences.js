function countOccurrences(text, letter) {

    let count = 0;

        for (let i = 0; i <= text.length; i++){
        if (text[i]===letter){
            count = count + 1;
        }
    }

    return count
}

module.exports = countOccurrences;
