import Film from '../interfaces/film';
import { filmsToWatch } from './const';

export default function getFilmsToWatch(): Promise<Film[]> {
    return fetch(filmsToWatch + '.json')
        .then((responseFilms) => responseFilms.json())
        .then((films) => {
            const ids = Object.keys(films);
            return Promise.resolve(
                ids.map(
                    (id): Film => {
                        return {
                            id,
                            name: films[id].name,
                            watched: films[id].watched,
                        };
                    },
                ),
            );
        });
}
