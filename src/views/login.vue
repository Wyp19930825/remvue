<template>
  <div class="all">
    <!--导航栏-->
    <div class="g-header">
      <i class="fa fa-arrow-left back"
         @click="back"></i>
      <span>登录</span>
      <span id="zhuce"
            @click="regist">注册</span>
    </div>
    <!--图标-->
    <div class="g-main">
      <img src="../assets/img/logo/login.png"
           alt="">
    </div>
    <!--表单-->
    <div class="g-form">
      <form>
        <div class="user">
          <i class="fa fa-tablet"></i>
          <input type="text"
                 placeholder="请输入手机号/邮箱"
                 id="user">
        </div>
        <div class="pwd">
          <i class="fa fa-unlock-alt"></i>
          <input type="password"
                 placeholder="请输入密码"
                 id="pwd">
        </div>

        <input type="button"
               value="登录"
               id="btn"
               @click="btn">
        <p>手机号快捷登录</p>
      </form>
    </div>
  </div>
</template>
<script>

import { users } from '../api'
export default {
  methods: {
    back() {
      window.history.back()
    },
    regist() {
      this.$router.push({ path: '/regist' })
    },
    async btn() {
      var user = $('#user').val()
      var pwd = $('#pwd').val()
      let up = await users({ user, pwd })
      if (up.fn > 0) {
        this.$dialog.alert({
          message: '登录成功'
        })
        this.$router.push({ path: '/home' })
      } else {
        this.$dialog.alert({
          message: '登录失败'
        })
      }
    }
  }
}
</script>
<style lang='less' scoped>
.all {
  background: url(../assets/img/e8386721577c3d6b8c0908f76ac787da.jpg) no-repeat 0 104 / @u;
  background-size: 100% 100%;
}

@u: 37.5rem;
.g-header {
  width: 750 / @u;
  background-color: #333;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 32 / @u 0;

  > i {
    font-size: 30 / @u;
    color: #cdcdcd;
  }

  > span:nth-of-type(1) {
    font-size: 35 / @u;
    color: #cdcdcd;
  }

  > span:nth-of-type(2) {
    font-size: 24 / @u;
    color: #cdcdcd;
  }
}

.g-main {
  width: 750 / @u;
  padding-top: 83 / @u;
  padding-left: 264 / @u;
  padding-bottom: 100 / @u;

  img {
    width: 197 / @u;
  }
}

.g-form {
  padding-bottom: 300 / @u;
  width: 750 / @u;
  padding-left: 75 / @u;
  padding-right: 63 / @u;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      margin-bottom: 50 / @u;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      > i {
        font-size: 28 / @u;
        color: #909090;
      }

      > input {
        background-color: rgba(255, 255, 255, 0.5);
        padding-left: 8 / @u;
        width: 564 / @u;
        height: 60 / @u;
        outline: none;
        border: none;
        border-bottom: 2 / @u solid #000;
        font-size: 26 / @u;
        &::-webkit-input-placeholder {
          font-size: 26 / @u;
          color: #000;
        }
        &:focus {
          background-color: #fff;
        }
      }
    }
    > input {
      outline: none;
      margin-top: 140 / @u;
      font-size: 26 / @u;
      padding: 27 / @u 266 / @u;
      background-color: #fe5722;
      border: none;
      color: #fff;
    }
    > p {
      padding-top: 26 / @u;
      color: #fe5722;
      font-size: 26 / @u;
    }
  }
}
</style>