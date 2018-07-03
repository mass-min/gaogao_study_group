exports.add = function(a, b) {
    if (a !== undefined && a !== null && b !== undefined && b !== null) {
        return b + a;
    } else {
        throw new Error('Args should be numbers.');
    }
};

