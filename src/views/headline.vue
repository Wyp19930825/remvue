<template>
  <div>
    <!--导航条-->
    <div class="g-header">
      <span>杉果头条</span>
      <span class="glyphicon glyphicon-comment"></span>
    </div>

    <!--轮播图-->
    <div class="g-lun">
      <div class="swiper-container lunbo">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../assets/img/4/1.png"
                 alt=""></div>
          <div class="swiper-slide"><img src="../assets/img/4/2.png"
                 alt=""></div>
          <div class="swiper-slide"><img src="../assets/img/4/3.png"
                 alt=""></div>
          <div class="swiper-slide"><img src="../assets/img/4/4.png"
                 alt=""></div>
          <div class="swiper-slide"><img src="../assets/img/4/5.png"
                 alt=""></div>
        </div>
        <div class="swiper-pagination fyq"></div>
      </div>
    </div>

    <!--分类-->
    <div class="g-type">
      <a href="javascript:void(0)"
         class="active">推荐</a>
      <a href="javascript:void(0)">资讯</a>
      <a href="javascript:void(0)">文章</a>
      <a href="javascript:void(0)">视频</a>
      <a href="javascript:void(0)">电台</a>
    </div>

    <!--所有项目-->
    <div class="g-main">
      <!--推荐-->
      <div class="g-tuijian">
        <div class="fgx" >
        </div>
        <div v-for="(item,index) in headlist" :key="index">
          <div>
            <img :src='item.pic'
                 alt="" />
            <p>{{item.header}}</p>
          </div>
          <div>
            <div>
              <img :src='item.tpic'
                   alt="">
              <span>{{item.uname}}</span>
              <span>{{item.date}}</span>
            </div>
            <span>{{item.desc}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import { toutiao } from '../api'
export default {
  data() {
    return {
      headlist: []
    }
  },
  mounted() {
    this.init(), this.ona(), this.aj()
  },
  methods: {
    init() {
      var mySwiper = new Swiper('.lunbo', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }, //可选选项，自动滑动
        pagination: {
          el: '.fyq',
          clickable: true
        }
      })

      for (let i = 0; i < mySwiper.pagination.bullets.length; i++) {
        mySwiper.pagination.bullets[i].onmouseover = function() {
          this.click()
        }
      }
    },
    ona() {
      let alist = document.querySelectorAll('.g-type>a')
      for (let i = 0; i < alist.length; i++) {
        alist[i].onclick = function() {
          for (var j = 0; j < alist.length; j++) {
            alist[j].className = ''
          }
          alist[i].className = 'active'
        }
      }
      $('.g-footer a').click(function() {
        $(this)
          .children()
          .css('color', '#fe5723')
        $(this)
          .siblings()
          .children()
          .css('color', '#a2a2a2')
      })
    },
    async aj() {
      let ttlist = await toutiao()
      let res = ttlist.data
      if (ttlist.fn > 0) {
        this.headlist = res
      }
    }
  }
}
</script>
<style lang='less' scoped>
@u: 37.5rem;
.fgx {
  width: 750 / @u;
  height: 2 / @u;
  background-color: #ccc;
  padding: 0 !important;
}

.active1 {
  color: #fe5622;
  border-bottom: 2 / @u solid #fe5622;
}
.active1 {
  color: #fe5622;
}
.g-header {
  z-index: 20;
  width: 750 / @u;
  padding: 30 / @u 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333333;
  position: fixed;
  > span:first-child {
    font-size: 34 / @u;
    padding-left: 304 / @u;
    color: #cccccc;
  }

  > span:last-child {
    float: right;
    font-size: 42 / @u;
    padding-right: 19 / @u;
    color: #cccccc;
  }
}

.g-lun {
  background-color: #fff;
  position: fixed;
  width: 750 / @u;
  padding: 135 / @u 27 / @u 27 / @u 27 / @u;

  .lunbo {
    width: 100%;

    > div {
      width: 100%;

      > div {
        width: 100%;

        > img {
          width: 694 / @u;
        }
      }
    }
    .fyq {
      .swiper-pagination-bullet {
        background-color: #fff;
        opacity: 1;
      }

      .swiper-pagination-bullet-active {
        background-color: #fe5722;
      }
    }
  }
}

.g-type {
  position: fixed;
  top: 370 / @u;
  width: 750 / @u;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  > a {
    width: 20%;
    font-size: 25 / @u;
    text-align: center;
    color: #000;
    padding-top: 24 / @u;
    padding-bottom: 27 / @u;

    &:focus {
      text-decoration: none;
    }

    &.active {
      color: #fe5622;
      border-bottom: 2 / @u solid #fe5622;
    }
  }
}

.g-main {
  width: 750 / @u;
  height: 100%;
  padding-top: 460 / @u;
  padding-bottom: 92 / @u;
  .g-tuijian {
    width: 750 / @u;

    > div {
      padding: 27 / @u;
      width: 100%;
      > div:first-child {
        width: 100%;

        > img {
          width: 100%;
        }

        > p {
          font-size: 32 / @u;
          padding-top: 26 / @u;
          letter-spacing: 1 / @u;
          font-weight: bold;
        }
      }
      > div:last-child {
        padding-top: 14 / @u;
        display: flex;
        justify-content: space-between;
        align-items: center;

        > div {
          display: flex;
          justify-content: space-around;
          align-items: center;

          img {
            width: 38 / @u;
            margin-right: 10 / @u;
          }

          > span:nth-of-type(1) {
            font-size: 24 / @u;
            margin-right: 20 / @u;
          }

          > span:nth-of-type(2) {
            color: #8d8d8d;
            font-size: 20 / @u;
          }
        }

        > span {
          font-size: 24 / @u;
          color: #4fa4d2;
        }
      }
    }
  }
}

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