<template>
    <div v-if="livre">
      <h3>Modifier le Livre</h3>
      <form @submit.prevent="modifierLivre">
        <div class="mb-3">
          <label for="titre" class="form-label">Titre</label>
          <input type="text" id="titre" v-model="livreModifie.titre" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="auteur" class="form-label">Auteur</label>
          <input type="text" id="auteur" v-model="livreModifie.auteur" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">Enregistrer</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  
  const props = defineProps({
    livre: Object,
  });
  
  const livreModifie = ref({ ...props.livre });
  
  const emit = defineEmits(['livre-modifie']);
  
  watch(
    () => props.livre,
    (nouveauLivre) => {
      livreModifie.value = { ...nouveauLivre };
    }
  );
  
  const modifierLivre = () => {
    emit('livre-modifie', { ...livreModifie.value });
  };
  
  </script>
  
  <style scoped>
  
  </style>
  