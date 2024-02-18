import { closestPowerOf2 } from "./utils";

type TournamentOptions = {
    
}



export default class Tournament<T> {
    private players: T[];
    private opts: TournamentOptions
    private round: number
    private byePlayers: T[]

    constructor(initial: Array<T>, options: TournamentOptions = {}) {
        this.players = initial
        this.opts = options
        this.round = 1
        this.byePlayers = []
    }
 
    public get byes() : number {
        return closestPowerOf2(this.players.length) - this.players.length;
    }

    public getRound(): Array<T> {
        // Calculate the total number of slots in the first round
        const totalSlots = closestPowerOf2(this.players.length + this.byes);
        
        // If asking for the first round, return all players as they all "advance" to the second round
        if (this.round === 1) {
          this.byePlayers = make_matches(this.players.splice(0, this.byes))
          return this.players.slice();
        }
    
        // Calculate the number of matches in the requested round
        let matches = totalSlots / Math.pow(2, n - 1);
    
        // Adjust for byes in the second round
        if (n === 2) {
          matches -= this.byes / 2; // Assuming byes result in half the number of matches being reduced
        }
    
        // Create a mock array to represent matches, as we don't have actual match data
        // Each "match" is represented by a placeholder string for the sake of this example
        return new Array(matches).fill("Match Placeholder");
      }
    
}