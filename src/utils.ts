
import {Match} from "./types"


export function closestPowerOf2(teams: number): number {
    let n = 1;
    while (2**n < teams) {
        n += 1;
    }
    return 2**n;
}

export function makeMatches<T>(players: (T|null)[]): (Match<T> | null)[] {
    let matches: Match<T>[] = []
    if(players.length % 2 === 0) {
        for (let n = 0; n < players.length; n += 2) {
            const first = players[n];
            const second = players[n+1]
            matches.push({first: first, second: second, winner: null, meta: {}})
        }
        return matches
    } else {
        throw {message: "Cannot create matches with uneven number players."}
    }
}