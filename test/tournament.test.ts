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

  beforeEach(() => {
    tourny = new Tournament<string>(players)
  });

  test("Get first round", () => {
    const rounds: Array<string> = tourny.getRound(1);
    expect(Array.isArray(rounds)).toBeTruthy();
    expect(rounds.length).toEqual(8);
  });

  test("Get second round", () => {
    const rounds: Array<string> = tourny.getRound(2);
    expect(Array.isArray(rounds)).toBeTruthy();
    expect(rounds.length).toEqual(8);
  });

  test("Get third round", () => {
    const rounds: Array<string> = tourny.getRound(3);
    expect(Array.isArray(rounds)).toBeTruthy();
    expect(rounds.length).toEqual(4);
  });

  test("Get fourth round", () => {
    const rounds: Array<string> = tourny.getRound(4);
    expect(Array.isArray(rounds)).toBeTruthy();
    expect(rounds.length).toEqual(2);
  });

  test("Get fifth round", () => {
    const rounds: Array<string> = tourny.getRound(5);
    expect(Array.isArray(rounds)).toBeTruthy();
    expect(rounds.length).toEqual(1);
  });

  test("Get negative round", () => {

  });

  test("Get non-existent round", () => {

  });
});

describe("Get match Iterator", () => {

});
