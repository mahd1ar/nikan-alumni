<template>
  <div
    class="inline-flex items-center justify-center gap-3 rounded bg-[#242F3F] p-2"
  >
    <div>
      <span class="loader"><span class="loader-inner"></span></span>
    </div>
  </div>
</template>

<style scoped>
.loader {
  display: inline-block;
  width: 28px;
  height: 28px;
  position: relative;
  border: 4px solid #fff;
  top: 50%;
  animation: loader 2s infinite ease;
}

.loader-inner {
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: #fff;
  animation: loader-inner 2s infinite ease-in;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(180deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-inner {
  0% {
    height: 0%;
  }

  25% {
    height: 0%;
  }

  50% {
    height: 100%;
  }

  75% {
    height: 100%;
  }

  100% {
    height: 0%;
  }
}
</style>
