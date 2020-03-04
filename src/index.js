const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

const BINARY_MORSE_TABLE = {
    '10': '.',
    '11': '-',
    '00': '',
};

function decode(expr) {
    let letters = [];
    for (let i = 0; i < expr.length / 10; i++) {

        let letter = expr.slice(i * 10, (i + 1) * 10);

        if (letter === '**********') {
            letters.push(' ');
            continue;
        }

        let morse = [];
        for (let j = 0; j < 5; j++) {
            let element = letter.slice(j * 2, (j + 1) * 2);

            morse.push(BINARY_MORSE_TABLE[element]);
        }
        let morseLetter = morse.join('');
        letters.push(MORSE_TABLE[morseLetter]);
    }

    return letters.join('');
}

module.exports = {
    decode
};
