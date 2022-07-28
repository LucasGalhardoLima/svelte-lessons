import PlanetDetails from "../routes/PlanetDetails.svelte";
import Home from "../routes/Home.svelte";

export const routes = {
    "/": Home,
    "/planet/:id": PlanetDetails,
};
