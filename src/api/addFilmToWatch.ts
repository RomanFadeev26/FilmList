import { filmsToWatch } from './const';

const adapter = (name: string) => JSON.stringify({
    name,
    watched: false,
});

export default function addFilmToWatch(filmName: string): Promise<any> {
    return fetch(filmsToWatch + '.json', {
        method: 'post',
        body: adapter(filmName),
    }).then((response) => response.json());
}
