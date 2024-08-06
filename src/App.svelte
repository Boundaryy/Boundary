<script>
    import { Router, Route, Link, navigate } from "svelte-routing";
    import Landing from './pages/sign/Landing.svelte';
    import Signup from './pages/sign/Signup.svelte';
    import Signup2 from './pages/sign/Signuptwo.svelte';

    export let url = "";
</script>

<main>
    <Router {url}>
        <Route path="/" component={Landing} />
        <Route path="/signup" component={Signup} />
        <Route path="/signup2" component={Signup2} />
    </Router>
</main>
