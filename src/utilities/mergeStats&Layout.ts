type CountType = {
    [key: string]: number
}

export const mergeStats = (layout: Array<string>, stats: CountType, max: number) => {
    return layout.map(char => {
        if (Object.keys(stats).some(e => e === char.toLowerCase())) {
            return (stats[char.toLowerCase()])/max
        } else return 0;
    })
}