<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <RouterLink class="nav-link" to="/"><img src="./assets/img.png" alt=""></RouterLink>
        
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item me-3">
              <RouterLink class="nav-link" to="/livres">Livres</RouterLink>
            </li>
            <li class="nav-item me-3">
              <RouterLink class="nav-link" to="/membres">Membres</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/prets">Prêts</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <div class="container contenu">
    <RouterView />
    
  </div>
</template>

<style scoped>
img{
  width: 70px;
}
</style> 


