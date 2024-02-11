


export function closestPowerOf2(teams: number): number {
    let n = 1;
    while (2**n < teams) {
        n += 1;
    }
    return 2**n;
}