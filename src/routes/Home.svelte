<script>
    import {link} from 'svelte-spa-router'
    import { onMount } from "svelte";
    import { planets, loadingPlanets } from "../store";

    onMount(async () => {
        await planets.listPlanets();
    });

    const listPlanets = async () => {
        await planets.listPlanets();
    };
</script>

<section>
    <button on:click={listPlanets}>List Planets</button>
    {#if $loadingPlanets}
        <p>Loading...</p>
    {:else}
        <div
            style="display: flex; justify-content: center; padding 20px"
        >
            {#each $planets as planet}
                <div
                    style="margin: 5px; border: 1px solid #bdbdbd; padding: 5px;"
                >
                    <p>Name: {planet.name}</p>
                    <p> Climate: { planet.climate }</p>
                    <p> Terrain: { planet.terrain }</p>
                    <a href={`/planet/${planet.id}`} use:link style="color: yellow">Details</a>
                </div>
            {/each}
        </div>
    {/if}
</section>
