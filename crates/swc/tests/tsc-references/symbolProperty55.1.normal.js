//// [symbolProperty55.ts]
var obj = {
    [Symbol.iterator]: 0
};
(function(M) {
    var Symbol1;
    // The following should be of type 'any'. This is because even though obj has a property keyed by Symbol.iterator,
    // the key passed in here is the *wrong* Symbol.iterator. It is not the iterator property of the global Symbol.
    obj[Symbol1.iterator];
})(M || (M = {}));
var M;
