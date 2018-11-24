import { filmsToWatch } from './const';
import Film from '@/interfaces/film';

const adapter = (film: Film) => JSON.stringify({
    name: film.name,
    watched: false,
});

export default function removeFilmFromWatched(film: Film): Promise<any> {
    return fetch(filmsToWatch + `/${film.id}.json`, {
        method: 'put',
        body: adapter(film),
    }).then((response) => response.json());
}
