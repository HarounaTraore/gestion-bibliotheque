<template>
    <div>
      <h2>Liste des Livres</h2>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livre in livres" :key="livre.id">
            <td>{{ livre.titre }}</td>
            <td>
              <button class="btn btn-sm" @click="voirDetails(livre)">
                <i class="fas fa-eye"></i> 
              </button>
              <button class="btn btn-warning btn-sm" @click="ouvrirEdition(livre)">
                <i class="fas fa-edit"></i> 
              </button>
              <button class="btn btn-danger btn-sm" @click="supprimerLivre(livre.id)">
                <i class="fas fa-trash"></i> 
              </button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <button class="btn btn-primary" @click="ajouterLivre = !ajouterLivre">Ajouter un livre</button>
  
      <AjouterLivre v-if="ajouterLivre" @livre-ajoute="ajouterLivreAListe" />
  
      <ModifierLivre v-if="livreAEditer" :livre="livreAEditer" @livre-modifie="mettreAJourLivre" />
  
      <div v-if="livreSelectionne" class="card mt-3">
        <div class="card-body">
          <h5 class="card-title">Détails du Livre</h5>
          <p class="card-text"><strong>Titre:</strong> {{ livreSelectionne.titre }}</p>
          <p class="card-text"><strong>Auteur:</strong> {{ livreSelectionne.auteur }}</p>
          <button class="btn btn-secondary" @click="livreSelectionne = null">Fermer</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import AjouterLivre from './AjouteLivre.vue';
  import ModifierLivre from './ModifieLivre.vue';
  
  const livres = ref([
    { id: 1, titre: 'Livre 1', auteur: 'Auteur 1' },
    { id: 2, titre: 'Livre 2', auteur: 'Auteur 2' },
  ]);
  
  const livreSelectionne = ref(null); 
  
  const voirDetails = (livre) => {
    livreSelectionne.value = livre; 
  };
  
  const ouvrirEdition = (livre) => {
    livreAEditer.value = livre; 
  };
  
  const supprimerLivre = (id) => {
    livres.value = livres.value.filter((livre) => livre.id !== id);
  };
  
  const ajouterLivre = ref(false); 
  const livreAEditer = ref(null); 
  
  const mettreAJourLivre = (livreModifie) => {
    const index = livres.value.findIndex((livre) => livre.id === livreModifie.id);
    if (index !== -1) {
      livres.value[index] = livreModifie; 
    }
    livreAEditer.value = null; 
  };
  
  const ajouterLivreAListe = (nouveauLivre) => {
    livres.value.push(nouveauLivre);
  };
  </script>
  
  <style scoped>

  </style>
  