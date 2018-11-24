import { filmsToWatch } from './const';
import Film from '@/interfaces/film';

const adapter = (film: Film) => JSON.stringify({
    name: film.name,
    watched: true,
});

export default function addFilmToWatched(film: Film): Promise<any> {
    return fetch(filmsToWatch + `/${film.id}.json`, {
        method: 'put',
        body: adapter(film),
    }).then((response) => response.json());
}
