import { Pokemon } from './pokemon'

export interface SearchResult {
    count: number,
    next: string,
    previous?: string,
    results: Pokemon[],
}