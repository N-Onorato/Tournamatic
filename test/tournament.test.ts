import Tournament from "../src/Tournament"


function generateTeams(n: number) {
  return Array.from({length: n}, () => "team"+n)
}

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
