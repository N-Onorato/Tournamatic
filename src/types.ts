import { Tournament } from './Tournament';
export {Tournament}

export type Match<T> = {
    first: T | null
    second: T | null
    winner: T | null
    meta?: Object
}