<template>
  <div class="home">
    <div class="g-header">
      <div>
        <span class="fa fa-search"></span>
        <input type="text"
               placeholder="搜搜你想要的游戏">
      </div>
      <span class="fa fa-commenting"></span>
    </div>
    <!--轮播图-->
    <div class="g-lunbo">
      <div class="swiper-container lun1">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../assets/img/2/1.jpg"
                 alt="1" /></div>
          <div class="swiper-slide"><img src="../assets/img/2/2.jpg"
                 alt="1" /></div>
          <div class="swiper-slide"><img src="../assets/img/2/3.jpg"
                 alt="1" /></div>
          <div class="swiper-slide"><img src="../assets/img/2/4.jpg"
                 alt="1" /></div>
          <div class="swiper-slide"><img src="../assets/img/2/5.jpg"
                 alt="1" /></div>
          <div class="swiper-slide"><img src="../assets/img/2/6.jpg"
                 alt="1" /></div>
          <div class="swiper-slide"><img src="../assets/img/2/7.jpg"
                 alt="1" /></div>
          <div class="swiper-slide"><img src="../assets/img/2/8.jpg"
                 alt="1" /></div>
        </div>
        <div class="swiper-pagination fyq1"></div>
      </div>
    </div>
    <!--分类-->
    <div class="g-type">
      <a href="javascript:void(0)">
        <img src="../assets/img/3/1.png"
             alt="1" />
        <p>活动</p>
      </a>
      <a href="javascript:void(0)">
        <img src="../assets/img/3/2.png"
             alt="1" />
        <p>优惠</p>
      </a>
      <a href="javascript:void(0)">
        <img src="../assets/img/3/3.png"
             alt="1" />
        <p>周边</p>
      </a>
      <a href="javascript:void(0)">
        <img src="../assets/img/3/4.png"
             alt="1" />
        <p>厂商目录</p>
      </a>
    </div>
    <!--分割线-->
    <div class="fgx"></div>
    <!--上新-->
    <div class="g-sx g-wp">
      <h3>【上新】杉果新游速递</h3>
      <div class="m-gun1  m-gun wrapper">
        <ul ref="ulwidth1"
            class="content">
          <li v-for="(item,index) in gamelist0.slice(0,4)"
              ref="liwidth1"
              :key="index"><img :src='item.pic'
                 alt=""
                 :data-id="item.id"
                 onclick="oli(this)">
            <div>
              <p>{{item.name}}</p>
              <p>￥{{item.price}}.00</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--分割线-->
    <div class="fgx"></div>
    <!--预售-->
    <div class="g-ys g-wp">
      <h3>【预售】惊喜即将开放</h3>
      <div class="m-gun2  m-gun wrapper">
        <ul ref="ulwidth2"
            class="content">
          <li v-for="(item,index) in gamelist0.slice(4,8)"
              :key="index"><img :src='item.pic'
                 alt=""
                 :data-id="item.id"
                 onclick="oli(this)">
            <div>
              <p>{{item.name}}</p>
              <p>￥{{item.price}}.00</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--分割线-->
    <div class="fgx"></div>
    <!--促销-->
    <div class="g-cx g-wp">
      <h3>【促销】超值游戏折扣</h3>
      <div class="m-gun3 m-gun wrapper">
        <ul ref="ulwidth3"
            class="content">
          <li v-for="(item,index) in gamelist0.slice(8,12)"
              :key="index"><img :src='item.pic'
                 alt=""
                 :data-id="item.id"
                 onclick="oli(this)">
            <div>
              <p>{{item.name}}</p>
              <p>￥{{item.price}}.00</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--分割线-->
    <div class="fgx"></div>
    <!--排序-->
    <div class="g-link">
      <a href="javascript:void(0)"
         class="active">最新</a>
      <a href="javascript:void(0)">价格升序</a>
      <a href="javascript:void(0)">价格降序</a>
      <a href="javascript:void(0)">预售</a>
      <a href="javascript:void(0)">分数</a>
    </div>
    <!--物品内容-->
    <div class="g-main">
      <div class="m-item"
           v-for="(item,index) in gamelist"
           :key="index">
        <img :src='item.pic'
             alt=""
             :data-id="item.id"
             onclick="oli(this)" />
        <div>
          <h5>
            <span>{{item.edition}}</span>
            {{item.name}}
          </h5>
          <span>{{item.type}}</span>
          <span>¥{{item.price}}.00/
            <span>已售:{{item.sales}}份</span>
          </span>
        </div>
        <div>{{item.score}}</div>
      </div>
    </div>
    <!--尾部 -->
  </div>
</template>

<script>
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import { gamesList, gamesList1 } from '../api'
export default {
  name: 'Home',
  data() {
    return {
      gamelist: [],
      gamelist0: [],
      gun: [
        { id: 1, title: '【上新】杉果新游速递' },
        { id: 2, title: '【预售】惊喜即将开放' },
        { id: 3, title: '【促销】超值游戏折扣' }
      ]
    }
  },
  mounted() {
    this.init()
    this.onc()
    this.scrollone()
    this.getajax(1)
    this.getajax1()
    window.onresize=()=>{
      this.getScroll()
    }
  },
  methods: {
    init() {
      var mySwiper1 = new Swiper('.lun1', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }, //可选选项，自动滑动

        pagination: {
          el: '.fyq1',
          clickable: true
        }
      })
      for (let i = 0; i < mySwiper1.pagination.bullets.length; i++) {
        mySwiper1.pagination.bullets[i].onmouseover = function() {
          this.click()
        }
      }
    },

    getScroll() {
      this.$nextTick(()=>{
         let lw = this.$refs.liwidth1[0].offsetWidth * 4
          for (let i = 0; i < document.querySelectorAll('.content').length; i++) {
        document.querySelectorAll('.content')[i].style.width = lw + 'px'
      }
      for (let i = 0; i < document.querySelectorAll('.wrapper').length; i++) {
       this.scroll= new BScroll(document.querySelectorAll('.wrapper')[i], {
          scrollX: true,
          scrollY: false
        })
      }
      })
    },
    onc() {
      let alist = document.querySelectorAll('.g-link>a')
      let that = this
      for (let i = 0; i < alist.length; i++) {
        alist[i].onclick = function() {
          for (var j = 0; j < alist.length; j++) {
            alist[j].className = ''
          }
          that.getajax(i + 1)
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
    async getajax(flag) {
      let games = await gamesList(flag)
      let res = games.data
      if (games.fn > 0) {
        this.gamelist = res
      }
    },
    async getajax1(flag) {
      let games1 = await gamesList1(flag)
      let res = games1.data
      if (games1.fn > 0) {
        this.gamelist0 = res
        this.getScroll()
      }
    },
    scrollone() {
      window.onscroll = function() {
        let s = $(window).scrollTop()
        if (s > 50 && s <= 150) {
          $('.g-header').css('background-color', 'rgba(33,33,33,0.4)')
        } else if (s > 150 && s <= 250) {
          $('.g-header').css('background-color', 'rgba(22,22,22,0.6)')
        } else if (s > 250 && s <= 350) {
          $('.g-header').css('background-color', 'rgba(11,11,11,0.8)')
        } else if (s > 350) {
          $('.g-header').css('background-color', 'rgba(0,0,0,1)')
        } else {
          $('.g-header').removeAttr('style')
        }
      }
    },
    oli(obj) {
      let id = obj.dataset.id
      window.location = 'xqy.html?id=' + id
    }
  }
} ///l
</script>
<style lang="less" scoped>
@u: 37.5rem;

/*<!--分割线-->*/
.fgx {
  width: 750 / @u;
  height: 18 / @u;
  background-color: #f5f5f5;
}
/*<!--导航栏-->*/
.g-header {
  z-index: 20;
  position: fixed;
  display: flex;
  width: 750 / @u;
  height: 80 / @u;
  background-color: rgba(0, 0, 0, 0);
  padding-top: 13 / @u;
  padding-left: 54 / @u;
  div {
    position: relative;
    width: 600 / @u;
    height: 54 / @u;
    background-color: rgba(244, 244, 244, 0.5);
    border-radius: 26 / @u;
    padding: 6 / @u 18 / @u;

    > span {
      display: inline-block;
      float: left;
      color: #cdcdcd;
      padding: 7 / @u 0;
      font-size: 28 / @u;
    }

    input {
      border: none;
      background-color: rgba(244, 244, 244, 0.5);
      outline: none;
      color: #ff4400;
      width: 93%;
      height: 100%;
      font-size: 25 / @u;
      border-radius: 8 / @u;
      float: right;

      &:focus {
        background-color: #333;
      }

      &::-webkit-input-placeholder {
        color: #cdcdcd;
      }
    }
  }

  > span {
    font-size: 30 / @u;
    color: #cdcdcd;
    padding-left: 17 / @u;
    padding-top: 12 / @u;
  }
}
/*<!--轮播图-->*/
.g-lunbo {
  width: 750 / @u;
  .lun1 {
    width: 100%;
    img {
      width: 100%;
      height: 368 / @u;
    }
    .fyq1 {
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
/*<!--分类-->*/
.g-type {
  width: 750 / @u;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 27 / @u;
  padding-top: 28 / @u;
  > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150 / @u;
    color: #989898;
    img {
      width: 80 / @u;
      height: 80 / @u;
    }
    > p {
      font-size: 20 / @u;
      margin-top: 25 / @u;
      text-align: center;
    }
  }
}
/*<!---->*/
.g-wp {
  width: 750 / @u;
  padding-top: 6 / @u;
  padding-left: 28 / @u;
  padding-bottom: 49 / @u;
  > h3 {
    font-size: 33 / @u;
  }
  .m-gun {
    width: 100%;
    overflow: hidden;
    > ul {
      margin-bottom: 0;
      display: flex;

      justify-content: space-around;
      > li {
        padding: 0 10 / @u;
        width: 328 / @u;
        > img {
          width: 304 / @u;
          height: 197 / @u;
          margin-top: 7 / @u;
        }
        > div {
          width: 302 / @u;
          padding-top: 17 / @u;
          > p:first-child {
            width: 100%;
            font-size: 23 / @u;
          }
          > p:last-child {
            margin-top: 11 / @u;
            margin-bottom: 0;
            font-size: 22 / @u;
            font-weight: bolder;
            letter-spacing: 2 / @u;
            color: #f95522;
          }
        }
      }
    }
  }
}

/*<!--排序-->*/
.g-link {
  background-color: #fff;
  width: 750 / @u;
  display: flex;
  justify-content: space-around;
  padding-top: 27 / @u;
  padding-bottom: 27 / @u;
  a {
    font-size: 27 / @u;
    color: #626262;
    text-decoration: none !important;
    -webkit-tap-highlight-color: transparent !important;
    &.active {
      color: #fa4912;
    }
  }
}
/*<!--物品内容-->*/
.g-main {
  padding-bottom: 90 / @u;
  z-index: -1;
  top: 161 / @u;
  background-color: #f5f5f5;
  margin-bottom: 4 / @u;
  .m-item {
    margin-bottom: 4 / @u;
    width: 750 / @u;
    height: 211 / @u;
    background-color: #fff;
    padding: 27 / @u;
    display: flex;
    justify-content: left;
    align-items: center;
    img {
      width: 263 / @u;
    }
    div:nth-of-type(1) {
      margin-left: 27 / @u;
      width: 300 / @u;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;

      h5 {
        margin-top: 3 / @u;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 23 / @u;
        margin-bottom: 26 / @u;
        span {
          display: inline-block;
          text-align: center;
          line-height: 26 / @u;
          padding: 4 / @u 10 / @u;
          color: #fff;
          font-size: 18 / @u;
          background-color: #0387d1;
          margin-right: 10 / @u;
        }
      }
      > span:nth-of-type(1) {
        font-size: 18 / @u;
        padding: 9 / @u 12 / @u;
        background-color: #f5f5f5;
        color: #6c6c6c;
        margin-bottom: 22 / @u;
      }
      > span:nth-of-type(2) {
        font-size: 22 / @u;
        color: #ff531d;
        span {
          font-size: 16 / @u;
          color: #ccc;
        }
      }
    }
    div:nth-of-type(2) {
      width: 90 / @u;
      height: 90 / @u;
      border-radius: 10 / @u;
      background-color: #faa81a;
      margin-left: 10 / @u;
      line-height: 90 / @u;
      text-align: center;
      font-size: 37 / @u;
      font-weight: bolder;
      color: #fff;
    }
  }
}
</style>