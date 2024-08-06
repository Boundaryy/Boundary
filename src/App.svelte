<script>
    import { Router, Link, Route } from "svelte-routing";
    import Landing from "./pages/Landing.svelte";
    import Signup from "./pages/Signup.svelte";
  
    export let url = "";
</script>

<main>
<Router {url}>
    <Route path="/" component={Landing} />
    <Route path="/signup" component={Signup} />
</Router>
</main>


