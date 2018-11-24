import { filmsToWatch } from './const';
export default function removeFilmToWatch(id: string): Promise<any> {
    return fetch(filmsToWatch + `/${id}.json`, {method: 'delete'})
                    .then((response) => response.json());
}
