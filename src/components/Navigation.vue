<script setup lang="ts">
import {defineComponent, ref} from 'vue';
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons-vue';
import router from "../router";

defineComponent({
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
})
const current = ref<string[]>(['mail']);
const value = ref('')

function handleCilck({key}) {
  router.push(key)
}
</script>
<template>
  <div class="content">
    <div class="box">
      <div class="word">
        <h2>Wineshop!</h2>
      </div>
    </div>
    <div class="menu">
      <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          @click="handleCilck">
        <a-menu-item key="/home">
          <template #icon>
            <mail-outlined/>
          </template>
          首页
        </a-menu-item>
        <a-menu-item key="/order">
          <template #icon>
            <mail-outlined/>
          </template>
          预订酒店
        </a-menu-item>
        <a-menu-item key="/message">
          <template #icon>
            <mail-outlined/>
          </template>
          酒店资讯
        </a-menu-item>
        <a-menu-item key="/cooperation">
          <template #icon>
            <mail-outlined/>
          </template>
          业务合作
        </a-menu-item>
        <a-menu-item key="/about">
          <template #icon>
            <mail-outlined/>
          </template>
          关于我们
        </a-menu-item>
      </a-menu>
    </div>
    <div class="design">
      <div class="group">
        <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path
                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input placeholder="Search" type="search" class="input">
      </div>
    </div>
  </div>
</template>
<style lang="less">

//background: #ffffff;
#app {
  width: 100%;
  height: 100%;
  padding: 0px;

  .content {
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .menu {
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;

      .ant-menu {
        width: 600px;
        height: 40px;
        font-size: 13px;
        line-height: 40px;
        display: flex;
        justify-content: space-evenly;
        align-content: space-evenly;

        &:before {
          content: none;
        }
      }
    }

    .box {
      position: relative;
      width: 200px;
      height: 80px;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s;
      z-index: 1;

      &:before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 50px;
        width: 50%;
        height: 100%;
        text-decoration: none;
        background: #fff;
        border-radius: 8px;
        transform: skewX(15deg);
        transition: 0.5s;
        background: linear-gradient(315deg, #ffbc00, #ff0058);
      }

      &:hover:before {
        transform: skewX(0deg) scale(1.5);

      }

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 50px;
        width: 50%;
        height: 100%;
        background: #fff;
        border-radius: 8px;
        transform: skewX(15deg);
        transition: 0.5s;
        filter: blur(30px);
        background: linear-gradient(315deg, #ffbc00, #ff0058);
      }

      &:hover:after {
        transform: skewX(0deg) scale(1.5);
      }

      .word {
        position: relative;
        width: 180px;
        height: 70px;
        padding: 20px 40px;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        z-index: 1;
        transform: 0.5s;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;

        h2 {
          font-size: 20px;
          color: #fff;
          margin-bottom: 10px;
        }
      }
    }

    .design {
      height: 120px;
      display: flex;
      place-items: center;

      .group {
        display: flex;
        line-height: 28px;
        align-items: center;
        position: relative;
        max-width: 190px;

        input {
          width: 100%;
          height: 40px;
          line-height: 28px;
          padding: 0 1rem;
          padding-left: 2.5rem;
          border: 2px solid transparent;
          border-radius: 8px;
          outline: none;
          background-color: #f3f3f4;
          color: #0d0c22;
          transition: .3s ease;

          &:placeholder-shown {
            color: #9e9ea7;
          }

          &:focus, &:hover {
            outline: none;
            border-color: rgba(234, 76, 137, 0.4);
            background-color: #fff;
            box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
          }

        }

        .icon {
          position: absolute;
          left: 1rem;
          fill: #9e9ea7;
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
}

</style>
