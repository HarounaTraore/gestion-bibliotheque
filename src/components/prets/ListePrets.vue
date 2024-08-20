<template>
  <div class="container">
    <h2>Liste des prets</h2>
    <table class="table text-center table-hover">
      <thead>
        <tr>
          <th>Id</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pret in prets" :key="pret.id">
          <td>{{ pret.id }}</td>
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
      nouveau Prêt
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
          <strong>Id Livre:</strong> {{ pretSelectionne.idLivre }}
        </p>
        <p class="card-text">
          <strong>Id Membre:</strong> {{ pretSelectionne.idMembre }}
        </p>
        <p class="card-text">
          <strong>Date du prêt:</strong> {{ pretSelectionne.datePret }}
        </p>
        <p class="card-text">
          <strong>Date de retour:</strong> {{ pretSelectionne.dateRetour }}
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
  {
    id: 1,
    idLivre: 1,
    idMembre: 1,
    datePret: "2024-08-05",
    dateRetour: "2024-08-10",
  },
  {
    id: 2,
    idLivre: 2,
    idMembre: 2,
    datePret: "2024-08-05",
    dateRetour: "2024-08-10",
  },
  {
    id: 3,
    idLivre: 3,
    idMembre: 3,
    datePret: "2024-08-05",
    dateRetour: "2024-08-10",
  },
  {
    id: 4,
    idLivre: 4,
    idMembre: 4,
    datePret: "2024-08-05",
    dateRetour: "2024-08-10",
  },
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
  
  <style >
.tableau {
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-content: center;
}
</style>
  