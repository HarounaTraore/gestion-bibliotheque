<template>
    <div v-if="pret">
      <h3>Modifier le pret</h3>
      <form @submit.prevent="modifierPret">
        <div class="mb-3">
          <label for="membre" class="form-label">Id membre</label>
          <input
            type="text"
            id="membre"
            v-model="pretModifie.idMembre"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <label for="livre" class="form-label">Id livre</label>
          <input
            type="text"
            id="livre"
            v-model="pretModifie.idLivre"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <label for="pret" class="form-label">Date du pret</label>
          <input
            type="date"
            id="pret"
            v-model="pretModifie.datePret"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <label for="retour" class="form-label">Date du retour</label>
          <input
            type="date"
            id="retour"
            v-model="pretModifie.dateRetour"
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Enregistrer
        </button>
      </form>
    </div>
  </template>
    
    <script setup>
  import { ref, watch } from "vue";
  
  const props = defineProps({
    pret: Object,
  });
  
  const pretModifie = ref({ ...props.pret });
  
  const emit = defineEmits(["pret-modifie"]);
  
  watch(
    () => props.pret,
    (nouveauPret) => {
      pretModifie.value = { ...nouveauPret };
    }
  );
  
  const modifierPret = () => {
    emit("pret-modifie", { ...pretModifie.value });
  };
  </script>
    
    <style scoped>
  </style>
    