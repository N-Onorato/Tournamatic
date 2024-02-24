import { closestPowerOf2, makeMatches } from "./utils";
import { Match } from "./types"

type TournamentOptions = {
    
}



export default class Tournament<T> {
    private players: T[];
    private opts: TournamentOptions
    private round: number
    private byePlayers: (T | null)[]
    private nextRoundPlayers: (T | null)[]

    constructor(initial: Array<T>, options: TournamentOptions = {}) {
        this.players = initial
        this.opts = options
        this.round = 1
        this.byePlayers = []
        this.nextRoundPlayers = []
    }
 
    public get byes() : number {
        return closestPowerOf2(this.players.length) - this.players.length;
    }

    public getCurrentRound(): (Match<T> | null)[] {
        // Calculate the total number of slots in the first round
        const totalSlots = closestPowerOf2(this.players.length + this.byes);
        
        // If asking for the first round, return all players as they all "advance" to the second round
        if (this.round === 1) {
          this.byePlayers = this.players.splice(0, this.byes)
          return makeMatches(this.players.slice());
        }
    
        // Adjust for byes in the second round
        if (this.round === 2) {
          const round2Players = this.nextRoundPlayers.concat(this.byePlayers);
          return makeMatches(round2Players); // Assuming byes result in half the number of matches being reduced
        }
  
        // Create a mock array to represent matches, as we don't have actual match data
        // Each "match" is represented by a placeholder string for the sake of this example
        return makeMatches(this.nextRoundPlayers);
      }

    public setRoundResults(results: Match<T>[]) {
      this.nextRoundPlayers = results.map((match: Match<T>) => match.winner, results)
      this.round += 1
    }
    
}