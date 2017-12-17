import { Actor } from './Actor';


export class Film {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public pictureUrl: string,
        public actors: Actor[],
        public isFavorite: boolean
    ) { }
}
