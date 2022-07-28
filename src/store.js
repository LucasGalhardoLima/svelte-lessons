import { mande } from "mande";
import { writable } from "svelte/store";
const api = mande("https://swapi.dev/api/");

export const loadingPlanets = writable(false);
export const loadingPlanet = writable(false);

function createPlanets() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        listPlanets: async (/** @type {any} */ search) => {
            loadingPlanets.update((n) => (n = true));
            try {
                const response = await api.get(
                    `planets/${search ? `?search=${search}` : ""}`
                );
                // @ts-ignore
                const results = response?.results;
                console.log(results);
                update(
                    (n) =>
                        (n = results.map((item) => ({
                            ...item,
                            id: item.url.substring(
                                item.url.length - 2,
                                item.url.length - 1
                            ),
                        })))
                );
            } catch (error) {
                console.log(error);
            }
            loadingPlanets.update((n) => (n = false));
        },
    };
}

export const planets = createPlanets();

function createPlanet() {
    const { subscribe, set, update } = writable({
        name: '',
        climate: '',
        terrain: '',
        diameter: '',
        population: '',
        gravity: '',
        rotation_period: '',
        orbital_period: ''
    });

    return {
        subscribe,
        listPlanet: async (/** @type {any} */ id) => {
            loadingPlanet.update((n) => (n = true));
            try {
                const response = await api.get(`/planets/${id}/`);

                update((n) => Object.assign(n, response));
            } catch (error) {
                console.log(error);
            }
            loadingPlanet.update((n) => (n = false));
        },
    };
}

export const planet = createPlanet();
