
const multiply = (num, base) => {
    if (!Number(num) || !Number(base)) {
        return;
    }
    return num * base;
}

module.exports = {
    multiply
}