<script>
    import { routes } from "./router";
    import Router from "svelte-spa-router";
</script>

<main>
    <img
        alt="Vue logo"
        src="https://ovicio.com.br/wp-content/uploads/2022/02/20220204-ovicio-star-wars-logo-new-tall-730x365.jpg"
    />
    <Router {routes} />
</main>
