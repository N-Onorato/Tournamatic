import Tournament from "../src/Tournament"


function generateTeams(n: number) {
  return Array.from({length: n}, () => "team"+n)
}

const players = ["rangers", "guardians", "foragers", "punters",
                "fire starters", "bobcats", "cyotes", "Pathos",
              "cactuses", "needlers", "spankers", "spikers"]


describe("Tournament Byes Calculation", () => {
  test("evenly sized team", () => {
    const team = generateTeams(8);
    const t = new Tournament(team);
    expect(t.byes).toEqual(0)
  });

  test("unevenly sized team", () => {
    const team = generateTeams(12);
    const t = new Tournament(team);
    expect(t.byes).toEqual(4)
  });
});

describe("Get rounds", () => {
  let tourny: Tournament<string>;
});
