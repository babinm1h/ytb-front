import millify from "millify"


export const roundNumber = (num: number) => {
    return millify(num, { precision: 1, space: false })
}