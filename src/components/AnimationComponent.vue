<template>
    <div class="card">
        <p><span>HOVER ME</span></p>
        <p><span>HOVER ME</span></p>
        <p><span>HOVER ME</span></p>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
#b0 {
  animation: b0 10s infinite ease;
  transform-origin: 250px 250px;
}

#b1 {
  animation: b1 10s infinite ease;
}

#b2 {
  animation: b2 10s infinite ease;
}

#b3 {
  animation: b3 10s infinite ease;
}

#b4 {
  animation: b4 10s infinite ease;
}

@keyframes b0 {
  0% {
    transform: rotate(0);
  }

  25% {
    transform: rotate(-90deg);
  }

  50% {
    transform: rotate(-180deg);
  }

  75% {
    transform: rotate(-270deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}

@keyframes b1 {
  0% {
    transform: translate(0, 0);
  }

  25% {
    transform: translate(0, 355px);
  }

  50% {
    transform: translate(355px, 355px);
  }

  75% {
    transform: translate(355px, 0);
  }

  100% {
    transform: translate(0, 0);
  }
}

@keyframes b2 {
  0% {
    transform: translate(0, 0);
  }

  25% {
    transform: translate(-355px, 0);
  }

  50% {
    transform: translate(-355px, 355px);
  }

  75% {
    transform: translate(0, 355px);
  }

  100% {
    transform: translate(0, 0);
  }
}

@keyframes b3 {
  0% {
    transform: translate(0, 0);
  }

  25% {
    transform: translate(0, -355px);
  }

  50% {
    transform: translate(-355px, -355px);
  }

  75% {
    transform: translate(-355px, 0);
  }

  100% {
    transform: translate(0, 0);
  }
}

@keyframes b4 {
  0% {
    transform: translate(0, 0);
  }

  25% {
    transform: translate(355px, 0);
  }

  50% {
    transform: translate(355px, -355px);
  }

  75% {
    transform: translate(0, -355px);
  }

  100% {
    transform: translate(0, 0);
  }
}
</style>