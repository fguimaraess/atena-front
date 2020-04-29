<template>
  <div>
    <div class="not-found">
      <div class="not-found-404">404</div>
      <p class="not-found-text">
        <strong>Ops!</strong> A página não pode ser encontrada!
      </p>
      <v-btn color="primary" class="ma-2 white--text" @click="$router.push('/')"
        >Home</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
}

.not-found-404 {
  font-size: 180px;
  font-weight: 800;
  color: #5c88da;
}

.not-found-text {
  font-size: 30px;
}
</style>
