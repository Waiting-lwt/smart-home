<template>
  <div class="container">
    <span class="button">远程开门</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
  width: 200px;
  height: 100%;
  margin: 0 auto 0;
  -webkit-perspective: 1000;
  -webkit-backface-visibility: hidden;
  background: #fff;
}

.button {
  position: relative;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  // margin-top: -50px;
  display: block;
  width: 100px;
  height: 100px;
  font-size: 1em;
  font-weight: light;
  font-family: 'Trebuchet MS', sans-serif;
  text-transform: uppercase;
  text-align: center;
  line-height: 100px;
  // letter-spacing: -1px;
  color: white;
  border: none;
  border-radius: 50%;
  background: #5a99d4;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(#5a99d4, .5);
  user-select: none;
}
.button:hover {
  animation: pulse 1.5s  infinite;
}
.button:active {
  animation: push 0.1s 1 forwards;
}

@keyframes push {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  70% {
    transform: scale(1.2);
    box-shadow: 0 0 0 50px rgba(#5a99d4, 0);
  }
    100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(#5a99d4, 0);
  }
}
</style>