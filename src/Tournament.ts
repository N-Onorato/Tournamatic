import { closestPowerOf2 } from "./utils";

type TournamentOptions = {
    
}


export default class Tournament<T> {
    private players: T[];
    private opts: TournamentOptions

    constructor(initial: Array<T>, options: TournamentOptions = {}) {
        this.players = initial
        this.opts = options;
    }
 
    public get byes() : Number {
        return closestPowerOf2(this.players.length) - this.players.length;
    }

    public get currentRound(): Array<Array<T>> {
        
    }
    
}