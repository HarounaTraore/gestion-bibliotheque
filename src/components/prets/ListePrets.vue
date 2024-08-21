<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Liste des prêts</h2>
    <table class="table text-center table-hover">
      <thead class="table-dark">
        <tr>
          <th>Id</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pret in prets" :key="pret.id">
          <td>{{ pret.id }}</td>
          <td>
            <button
              class="btn btn-info btn-sm me-2"
              @click="voirDetails(pret)"
              data-bs-toggle="modal"
              data-bs-target="#voirPretModal"
            >
              <i class="fas fa-eye"></i>
            </button>
            <button
              class="btn btn-warning btn-sm me-2"
              @click="ouvrirEdition(pret)"
              data-bs-toggle="modal"
              data-bs-target="#editerPretModal"
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

    <button
      type="button"
      class="btn btn-primary mt-4"
      data-bs-toggle="modal"
      data-bs-target="#ajoutPretModal"
    >
      Nouveau Prêt
    </button>

    <!-- Modal pour ajouter un prêt -->
    <div
      class="modal fade"
      id="ajoutPretModal"
      tabindex="-1"
      aria-labelledby="ajoutPretModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ajoutPretModalTitle">
              Ajouter un Prêt
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <AjouterPret @pret-ajoute="ajouterPretAListe" />
          </div>
        </div>
      </div>
    </div>

    <!-- Modal pour modifier un prêt -->
    <div
      class="modal fade"
      id="editerPretModal"
      tabindex="-1"
      aria-labelledby="editerPretModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editerPretModalTitle">
              Modifier le Prêt
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <ModifierPret
              :pret="pretAEditer"
              @pret-modifie="sauvegarderModifications"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Modal pour voir les détails d'un prêt -->
    <div
      class="modal fade"
      id="voirPretModal"
      tabindex="-1"
      aria-labelledby="voirPretModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="voirPretModalTitle">Détails du Prêt</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p><strong>Id:</strong> {{ pretSelectionne?.id }}</p>
            <p><strong>Id Livre:</strong> {{ pretSelectionne?.idLivre }}</p>
            <p><strong>Id Membre:</strong> {{ pretSelectionne?.idMembre }}</p>
            <p>
              <strong>Date du prêt:</strong> {{ pretSelectionne?.datePret }}
            </p>
            <p>
              <strong>Date de retour:</strong> {{ pretSelectionne?.dateRetour }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AjouterPret from "./AjouterPret.vue";
import ModifierPret from "./ModifierPret.vue";

const prets = ref([
  // Données initiales pour les prêts
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
const pretAEditer = ref(null);

const voirDetails = (pret) => {
  pretSelectionne.value = pret;
};

const ouvrirEdition = (pret) => {
  pretAEditer.value = { ...pret };
};

const supprimerPret = (id) => {
  prets.value = prets.value.filter((pret) => pret.id !== id);
};

const ajouterPretAListe = (nouveauPret) => {
  nouveauPret.id = prets.value.length + 1;
  prets.value.push(nouveauPret);
};

const sauvegarderModifications = (modifications) => {
  const index = prets.value.findIndex((pret) => pret.id === modifications.id);
  if (index !== -1) {
    prets.value[index] = { ...modifications };
  }
};
</script>

<style scoped>
h2 {
  color: #495057;
}

.table-hover tbody tr:hover {
  background-color: #f1f1f1;
}

.btn {
  font-size: 0.875rem;
}

.modal-content {
  border-radius: 0.5rem;
}

.modal-header {
  background-color: #f8f9fa;
}

.modal-title {
  color: #343a40;
}
</style>
