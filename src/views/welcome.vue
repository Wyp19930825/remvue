<template>
  <div class="g-layout">
    <!--上方logo-->
    <div class="f-logo">
      <img src="../assets/img/logo/logo.png"
           alt="1" />
    </div>
    <!--中间字-->
    <div class="f-img">
      <img src="../assets/img/logo/1.png"
           alt="1" />
      <img src="../assets/img/logo/2.png"
           alt="1" />
    </div>
    <!--下方欢迎语-->
    <div class="f-font">
      畅玩正版 尽在杉果
    </div>
  </div>
</template>
<script>
export default {
  created() {
    
  },
  mounted() {
    this.jump()
  },
  methods: {
   jump(){
      let time = setInterval(()=> {
        clearInterval(time)
        this.$router.push({ path: '/home' })
      }, 5000)
   }
  }
}
</script>
<style lang='less'>
@u:37.5rem;
.stop{
  animation-fill-mode: forwards;
}
.g-layout{
  width: 750/@u;
  background-color: #fcfcfc;
  height: 100%;
  position: relative;
  .f-logo{
    position: absolute;
    width: 138/@u;
    height: 198/@u;
    top: 453/@u;
    left: 307/@u;
    opacity: 0;
    animation: op 1s 1s;
    .stop;
    >img{
      width: 100%;
    }
  }
  .f-img{
    position: absolute;
    top: 721/@u;
    width: 750/@u;
    height: 88/@u;
    display: flex;
    justify-content: space-between;
    >img:first-child{
      left: 0rem;
      width: 86/@u;
      transform: translateX(0rem);
      animation: ml 1s 2s;
      opacity: 0;
      .stop;
    }
    >img:last-child{
      right: 0rem;
      width: 86/@u;
      transform: translateX(0rem);
      animation: mr 1s 2s;
      opacity: 0;
      .stop;
    }
  }
  .f-font{
    font-size: 33/@u;
    position: absolute;
    left: 242/@u;
    top: 1376/@u;
    padding-bottom: 103/@u;
    transform: translateY(0rem);
    animation: mf 1s 3s;
    opacity: 0;
    .stop;
  }
}

@keyframes op {
  100%{
    opacity: 1;
  }
}
@keyframes ml {
  100%{
    transform: translateX(281/@u);
    opacity: 1;
  }
}
@keyframes mr {
  100%{
    transform: translateX(-281/@u);
    opacity: 1;
  }
}
@keyframes mf {
  100%{
    transform: translateY(-100/@u);
    opacity: 1;
  }
}
</style>