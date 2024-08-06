<script>
    import { onMount } from 'svelte';
    import { Router, Link, Route } from "svelte-routing"
    import Landing from './pages/sign/Landing.svelte';
    import Signup from './pages/sign/Signup.svelte';
    
    export let url = "";
  </script>
  
  <main>
    <Router {url}>
      <Route path="/" component={Landing} />
      <Route path="/signup" component={Signup} />
   </Router>
  </main>