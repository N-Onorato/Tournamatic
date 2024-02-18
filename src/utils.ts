
type Match<T> = {
    first: T
    second: T
    winner: T | null
    meta?: Object
}


export function closestPowerOf2(teams: number): number {
    let n = 1;
    while (2**n < teams) {
        n += 1;
    }
    return 2**n;
}

export function makeMatches<T>(players: T[]): Match<T>[] {

}