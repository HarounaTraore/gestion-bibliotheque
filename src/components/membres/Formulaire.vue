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
        placeholder="Entrer le nom du membre"
        name="nom"
      />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">email:</label>
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="Entrer l'email du memebre"
        name="email"
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
