export const getRandomBetween = (from: number, to: number): number => {
    if (from >= to) {
        throw new Error("'From' should be less than 'to'");
    }
    const rnd: number = Math.random();
    const diff = to - from;
    return from + rnd * diff;
};

export const getRandomIndex = (length: number): number => {
    if (length === 0) {
        throw new Error('Invalid length 0');
    }
    const rnd: number = getRandomBetween(0, length);
    return Math.floor(rnd);
};

