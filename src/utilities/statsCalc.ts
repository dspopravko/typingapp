type CountType = {
    [key: string]: number
}

export const getStats = (dataset: Array<string>): CountType => {
    const count: CountType = {};
    dataset.forEach((el) => {
        count[el] = count[el] + 1 || 1
    });
    return count
}