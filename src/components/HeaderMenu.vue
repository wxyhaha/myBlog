<template>
  <div class="wrapper">
    <div style="font-size: 28px">BLANK</div>
    <div class="menuWrapper">
      <div @click="router.push('/blog')" :class="{menuItem:true,activeItem:useRoute().path==='/blog'}">
        <i class="iconfont icon-blog"/>
        <span>博客</span>
      </div>
      <div @click="router.push('/other')" :class="{menuItem:true,activeItem:useRoute().path==='/other'}">
        <i class="iconfont icon-other"/>
        <span>其他</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '../router';
import {useRoute} from 'vue-router';

console.log(useRoute().path)

</script>

<style scoped lang="scss">
.wrapper {
  width: 80%;
  height: 69.2px;
  background-color: #ffffff;
  border-bottom: 1px solid hsla(0, 0%, 91.8%, .8);
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.menuWrapper {
  height: 100%;
  display: flex;
  align-items: center;
}

.menuItem {
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  color: #5c5c5c;
  margin-right: 25px;

  &:hover{
    color: black;
  }

  > i {
    font-size: 18px;
    margin-right: 3px;
  }

  &:last-child{
    margin-right: 0;
  }
}

.activeItem {
  color: #2079eb;
  transition: color 0.1s;

  >span{
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
      position: absolute;
      content: "";
      height: 100%;
      width: 100%;
      border-bottom: 3px solid #2079eb;
      animation: 0.5s leftToRight;
    }
  }
}

@keyframes leftToRight {
  0% {
    opacity: 0;
    transform: translate3d(-60%, 0, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
</style>