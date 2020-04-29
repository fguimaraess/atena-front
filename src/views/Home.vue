<template>
  <div class="home">
    <div class="home-background">
    </div>
    <div class="home-content">
      Seja bem vindo à Atena!
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.home-background {
  position: absolute;
  width: 100%;
  height: 100vh;
  margin-top: -60px;
}

.home-background:before {
  content: "";
  background-image: url("") !important;
  top: -12px;
  right: 0;
  bottom: 0;
  left: -12px;
  opacity: 0.5;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.home-content {
  position: relative;
  left: 12px
}
</style>
