function* generateSequence() {
    yield "Hello world";
    yield 2;
    // yield* generatorTester();
    yield normalFunction();
    return 3;
}

function* generatorTester() {
    yield "I am generator";

}
// let one = generateSequence;
// one.next().value;

// for (let value of generateSequence()) {
//     console.log(value);
// }

function normalFunction() {
    // for (const sequence of generateSequence()) {
    //     console.log(sequence);
    // }
}



function* generatorForLoop(num) {
    for (let i = 0; i < num; i += 1) {
        yield console.log(i);
    }
}

// const genForLoop = generatorForLoop(5);

// genForLoop.next(); // first console.log - 0
// genForLoop.next(); // 1
// genForLoop.next(); // 2
// genForLoop.next(); // 3
// genForLoop.next(); // 4



const handleClick = (e) => {
    const offClick = (evt) => {
        if (e !== evt) {
            menu.classList.toggle(OPEN_CLASS)
            document.removeEventListener("click", offClick)
        }
    }


}