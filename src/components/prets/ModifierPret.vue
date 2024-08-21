<template>
  <div v-if="pret">
    <h3>Modifier le prêt</h3>
    <form @submit.prevent="modifierPret">
      <div class="mb-3">
        <label for="idMembre" class="form-label">Id membre</label>
        <input
          type="text"
          id="idMembre"
          v-model="pretModifie.idMembre"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="idLivre" class="form-label">Id livre</label>
        <input
          type="text"
          id="idLivre"
          v-model="pretModifie.idLivre"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="datePret" class="form-label">Date du prêt</label>
        <input
          type="date"
          id="datePret"
          v-model="pretModifie.datePret"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="dateRetour" class="form-label">Date de retour</label>
        <input
          type="date"
          id="dateRetour"
          v-model="pretModifie.dateRetour"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Enregistrer</button>
    </form>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  pret: Object,
});

const emit = defineEmits(["pret-modifie"]);

const pretModifie = ref({ ...props.pret });

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
/* Ajoutez des styles spécifiques ici si nécessaire */
</style>
