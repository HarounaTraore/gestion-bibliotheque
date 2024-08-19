<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
   
      <!-- <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink> -->

  <RouterView />
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="./components/livres/ListeLivres.vue">Livres</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="./components/membres/ListeMembres.vue">Membres</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="./components/prets/ListePtrets.vue">Prêts</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
</template>

<style scoped>
</style>
