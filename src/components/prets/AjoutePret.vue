<template>
  <div>
    <h3>Ajouter un nouveau Pret</h3>
    <form @submit.prevent="ajouterPret">
      <div class="mb-3">
        <div class="mb-3">
          <label for="idPret" class="form-label">Id du Pret</label>
          <input
            type="number"
            class="form-control"
            v-model="nouveauPret.id"
            name="idPret"
            required
          />
        </div>

        <select name="idLivre" id="idLivre" v-model="nouveauPret.idLivre">
          <option value="">Choisir un livre</option>
          <option value="1">1</option>
          <option value="2">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>

      <div class="mb-3">
        <select
          name="idLivre"
          id="idLivre"
          v-model="nouveauPret.idMembre"
          required
        >
          <option value="">Id du memebre</option>
          <option value="1">1</option>
          <option value="2">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="datePret" class="form-label">Date du Prêt</label>
        <input
          type="date"
          class="form-control"
          name="datePret"
          v-model="nouveauPret.datePret"
          required
        />
      </div>
      <div class="mb-3">
        <label for="dateRetour" class="form-label">Date du Retour</label>
        <input
          type="date"
          class="form-control"
          name="dateRetour"
          v-model="nouveauPret.dateRetour"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Ajouter</button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits();

const nouveauPret = ref({
  id: "",
  idLivre: "",
  idMembre: "",
  datePret: "",
  dateRetour: "",
});

const ajouterPret = () => {
  const Pret = {
    ...nouveauPret.value,
  };

  emit("pret-ajoute", Pret);

  nouveauPret.value = {
    idLivre: "",
    idMembre: "",
  };
};
</script>

<style scoped>
</style>
