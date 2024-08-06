<script>
    import { onMount } from 'svelte';
    import Landing from './sign/Landing.svelte';
    import Signup from './sign/Signup.svelte';
    
    let currentPage = 'landing'; 
    function changePage(page) {
      currentPage = page;
    }
  </script>
  
  <main>
    {#if currentPage === 'landing'}
      <Landing />
    {:else if currentPage === 'signup'}
      <Signup />
    {/if}
  </main>
  
  <style>
  </style>
  