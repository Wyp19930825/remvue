<template>
  <div class="g-footer">
    <router-link to="/home">
      <span class="fa fa-building active"></span>
      <p class="active">商城</p>
    </router-link>
    <router-link to="/headline">
      <span class="fa fa-list-ol"></span>
      <p>头条</p>
    </router-link>
    <a href="buyCar.html">
      <span class="fa fa-shopping-cart"></span>
      <p>购物车</p>
    </a>
    <a href="my.html">
      <span class="fa fa-user"></span>
      <p>我的</p>
    </a>
  </div>
</template>
<script>
export default {}
</script>
<style lang='less'>
@u: 37.5rem;
.g-footer {
  height: 102 / @u;
  background-color: #333;
  position: fixed;
  bottom: 0;
  width: 750 / @u;
  display: flex;
  justify-content: space-around;
  padding-top: 12 / @u;

  a {
    height: 90 / @u;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:focus {
      text-decoration: none;
    }
    &:hover {
      text-decoration: none;
    }
    > i {
      font-size: 36 / @u;
      color: #a2a2a2;
    }
    .active {
      color: #fe5723;
    }
    p {
      margin-top: 20 / @u;
      font-size: 18 / @u;
      color: #a2a2a2;
    }
  }
}
</style>