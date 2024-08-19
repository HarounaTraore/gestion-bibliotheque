<template>
    <div>
      <h3>Ajouter un nouveau livre</h3>
      <form @submit.prevent="ajouterLivre">
        <div class="mb-3">
          <label for="titre" class="form-label">Titre</label>
          <input type="text" class="form-control" id="titre" v-model="nouveauLivre.titre" required>
        </div>
        <div class="mb-3">
          <label for="auteur" class="form-label">Auteur</label>
          <input type="text" class="form-control" id="auteur" v-model="nouveauLivre.auteur" required>
        </div>
        <button type="submit" class="btn btn-primary">Ajouter</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const nouveauLivre = ref({
    titre: '',
    auteur: ''
  });
  
  const ajouterLivre = () => {
    console.log('Livre ajouté:', nouveauLivre.value);
    nouveauLivre.value = {
      titre: '',
      auteur: ''
    };
  };
  </script>
  
  <style scoped>
  
  </style>
  