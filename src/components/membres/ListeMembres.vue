<template>
  <div>
    <h2>Liste des membres</h2>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Noms</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="membre in membres" :key="membre.id">
          <td>{{ membre.nom }}</td>
          <td>
            <button class="btn btn-sm m-2" @click="voirDetails(membre)">
              <i class="fas fa-eye"></i>
            </button>
            <button
              class="btn btn-warning btn-sm m-2"
              @click="ouvrirEdition(membre)"
            >
              <i class="fas fa-edit"></i>
            </button>
            <button
              class="btn btn-danger btn-sm"
              @click="supprimerMembre(membre.id)"
            >
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <button class="btn btn-primary" @click="ajouterMembre = !ajouterMembre">
      Ajouter un membre
    </button>

    <AjouterMembre v-if="ajouterMembre" @membre-ajoute="ajouterMembreAListe" />

    <ModifierMembre
      v-if="membreAEditer"
      :membre="membreAEditer"
      @membre-modifie="mettreAJourMembre"
    />

    <div v-if="membreSelectionne" class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">Détails du membre</h5>
        <p class="card-text"><strong>Id:</strong> {{ membreSelectionne.id }}</p>
        <p class="card-text">
          <strong>Nom:</strong> {{ membreSelectionne.nom }}
        </p>
        <p class="card-text">
          <strong>Email:</strong> {{ membreSelectionne.email }}
        </p>
        <button class="btn btn-secondary" @click="membreSelectionne = null">
          Fermer
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import AjouterMembre from "./AjouteMembre.vue";
import ModifierMembre from "./ModifieMembre.vue";

const membres = ref([
  { id: 1, nom: "membre 1", email: "email 1" },
  { id: 2, nom: "membre 2", email: "email 2" },
  { id: 3, nom: "membre 3", email: "email 3" },
]);

const membreSelectionne = ref(null);

const voirDetails = (membre) => {
  membreSelectionne.value = membre;
};

const ouvrirEdition = (membre) => {
  membreAEditer.value = membre;
};

const supprimerMembre = (id) => {
  membres.value = membres.value.filter((membre) => membre.id !== id);
};

const ajouterMembre = ref(false);
const membreAEditer = ref(null);

const mettreAJourMembre = (membreModifie) => {
  const index = membres.value.findIndex(
    (membre) => membre.id === membreModifie.id
  );
  if (index !== -1) {
    membres.value[index] = membreModifie;
  }
  membreAEditer.value = null;
};

const ajouterMembreAListe = (nouveauMembre) => {
  membres.value.push(nouveauMembre);
};
</script>
  
  <style scoped>
</style>
  