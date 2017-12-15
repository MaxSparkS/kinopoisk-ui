import { Film } from './Film';


export class Actor {
    constructor(
        public id: number,
        public biography: string,
        public fullName: string,
        public pictureUrl: string,
        public dateBirth: Date,
        public films: Film[]
    ) { }
}
