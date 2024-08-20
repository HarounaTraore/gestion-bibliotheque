<template>
  <div>
    <h2>Liste des prets</h2>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>titres</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pret in prets" :key="pret.id">
          <td>{{ pret.titre }}</td>
          <td>
            <button class="btn btn-sm m-2" @click="voirDetails(pret)">
              <i class="fas fa-eye"></i>
            </button>
            <button
              class="btn btn-warning btn-sm m-2"
              @click="ouvrirEdition(pret)"
            >
              <i class="fas fa-edit"></i>
            </button>
            <button
              class="btn btn-danger btn-sm"
              @click="supprimerPret(pret.id)"
            >
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <button class="btn btn-primary" @click="ajouterPret = !ajouterPret">
      Ajouter un pret
    </button>

    <AjouterPret v-if="ajouterPret" @pret-ajoute="ajouterPretAListe" />

    <ModifierPret
      v-if="pretAEditer"
      :pret="pretAEditer"
      @pret-modifie="mettreAJourPret"
    />

    <div v-if="pretSelectionne" class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">Détails du pret</h5>
        <p class="card-text"><strong>Id:</strong> {{ pretSelectionne.id }}</p>
        <p class="card-text">
          <strong>Titre:</strong> {{ pretSelectionne.titre }}
        </p>
        <p class="card-text">
          <strong>Email:</strong> {{ pretSelectionne.email }}
        </p>
        <button class="btn btn-secondary" @click="pretSelectionne = null">
          Fermer
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import AjouterPret from "./AjoutePret.vue";
import ModifierPret from "./ModifiePret.vue";

const prets = ref([
  { id: 2, livre: "Livre 3", email: "email 2" },
  { id: 3, livre: "Livre 3", email: "email 3" },
  { id: 1, livre: "Livre 1", email: "email 1" },
]);

const pretSelectionne = ref(null);

const voirDetails = (pret) => {
  pretSelectionne.value = pret;
};

const ouvrirEdition = (pret) => {
  pretAEditer.value = pret;
};

const supprimerPret = (id) => {
  prets.value = prets.value.filter((pret) => pret.id !== id);
};

const ajouterPret = ref(false);
const pretAEditer = ref(null);

const mettreAJourPret = (pretModifie) => {
  const index = prets.value.findIndex((pret) => pret.id === pretModifie.id);
  if (index !== -1) {
    prets.value[index] = pretModifie;
  }
  pretAEditer.value = null;
};

const ajouterPretAListe = (nouveaupret) => {
  prets.value.push(nouveaupret);
};
</script>
  
  <style scoped>
</style>
  