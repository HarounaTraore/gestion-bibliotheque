<script setup>
</script>

<template>
  <form class="container p-4 mt-3 border border-primary">
    <div class="mb-3 mt-3">
      <label for="nom" class="form-label">Nom:</label>
      <input
        type="text"
        class="form-control"
        id="nom"
        placeholder="Entrer le nom du livre"
        name="nom"
      />
    </div>
    <div class="mb-3">
      <label for="hauteur" class="form-label">Hauteur:</label>
      <input
        type="text"
        class="form-control"
        id="hauteur"
        placeholder="Entrer l'auteur du livre"
        name="hauteur"
      />
    </div>
    <button type="submit" class="btn btn-primary">Soumettre</button>
  </form>
</template>

<style scoped>
form {
  width: 400px;
  border-radius: 5px;
}
</style>
