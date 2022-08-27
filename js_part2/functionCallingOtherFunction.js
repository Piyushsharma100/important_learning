const cutPieces = function (fruit) {
    return fruit * 4;
};
const fruitsProcessor = function (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitsProcessor(2, 3));