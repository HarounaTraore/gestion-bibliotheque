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
            <button
              class="btn btn-sm m-2"
              @click="voirDetails(livre)"
              data-bs-toggle="modal"
              data-bs-target="#voirLivreModal">
              <i class="fas fa-eye"></i>
            </button>
            <button
              class="btn btn-warning btn-sm m-2"
              @click="ouvrirEdition(livre)"
              data-bs-toggle="modal"
              data-bs-target="#editerLivreModal">
              <i class="fas fa-edit"></i>
            </button>
            <button
              class="btn btn-danger btn-sm"
              @click="supprimerLivre(livre.id)">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <AjouterLivre v-if="ajouterLivre" @livre-ajoute="ajouterLivreAListe" />

    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#ajoutLivreModal">
      Ajouter un livre
    </button>
    <div
      class="modal fade"
      id="ajoutLivreModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ajoutLivreModalTitle"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <AjouterLivre @livre-ajoute="ajouterLivreAListe" />
          </div>
        </div>
      </div>
    </div>

   
<!-- 
    <ModifierLivre
      v-if="livreAEditer"
      :livre="livreAEditer"
      @livre-modifie="mettreAJourLivre"/> -->

      <div
      class="modal fade"
      id="editerLivreModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editerLivreModalTitle"
      aria-hidden="true"
    > <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editerLivreModalTitle">
              Modifier le Livre
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="sauvegarderModifications">
              <div class="mb-3">
                <label for="titre" class="form-label">Titre</label>
                <input
                  type="text"
                  class="form-control"
                  id="titre"
                  v-model="livreAEditer.titre"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="auteur" class="form-label">Auteur</label>
                <input
                  type="text"
                  class="form-control"
                  id="auteur"
                  v-model="livreAEditer.auteur"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Sauvegarder
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>


    <div
      class="modal fade"
      id="voirLivreModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="voirLivreModalTitle"
      aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="voirLivreModalTitle">
              Détails du Livre
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p><strong>Id:</strong> {{ livreSelectionne?.id }}</p>
            <p><strong>Titre:</strong> {{ livreSelectionne?.titre }}</p>
            <p><strong>Auteur:</strong> {{ livreSelectionne?.auteur }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</template>
  
  <script setup>
import { ref } from "vue";
import AjouterLivre from "./AjouteLivre.vue";
import ModifierLivre from "./ModifieLivre.vue";

const livres = ref([
  { id: 1, titre: "Livre 1", auteur: "Auteur 1" },
  { id: 2, titre: "Livre 2", auteur: "Auteur 2" },
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
  