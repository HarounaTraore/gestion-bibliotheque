<template>
  <div v-if="membre">
    <h3>Modifier le membre</h3>
    <form @submit.prevent="modifierMembre">
      <div class="mb-3">
        <label for="nom" class="form-label">Nom</label>
        <input
          type="text"
          id="nom"
          v-model="membreModifie.nom"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="text"
          id="email"
          v-model="membreModifie.email"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Enregistrer les modifications
      </button>
    </form>
  </div>
</template>
  
  <script setup>
import { ref, watch } from "vue";

const props = defineProps({
  membre: Object,
});

const membreModifie = ref({ ...props.membre });

const emit = defineEmits(["membre-modifie"]);

watch(
  () => props.membre,
  (nouveauMembre) => {
    membreModifie.value = { ...nouveauMembre };
  }
);

const modifierMembre = () => {
  emit("membre-modifie", { ...membreModifie.value });
};
</script>
  
  <style scoped>
</style>
  