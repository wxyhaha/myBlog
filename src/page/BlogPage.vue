<template>
  <div class="pageWrapper">
    <div class="pageContent">
      <div class="sideBar">
        <div :class="{sideBarItem:true,activeSideBarItem:activeSortItem.value===item.value}" v-for="(item,index) in sideBarValue" :key="index" @click="handleSort(item)">
          <i :class='item.icon'/>
          <span>{{ item.title }}</span>
        </div>
      </div>
      <div class="docListContent">
        <div class="docItem" v-for="(item,index) in activeSortList" :key="index">
          <div class="subInfo">
            <i class='iconfont icon-js'/>
            <span>JavaScript</span>
          </div>
          <div class="title">{{ item.title }}</div>
          <div class="subInfo">
            <i class='iconfont icon-createTime'/>
            <span>{{ item.createTime }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const sideBarValue=ref([
  {title:'全部分类',icon:'iconfont icon-allSort',value:'all'},
  {title:'JavaScript',icon:'iconfont icon-js',value:'js'},
  {title:'HTML',icon:'iconfont icon-html',value:'html'},
  {title:'CSS',icon:'iconfont icon-css',value:'css'},
  {title:'Vue',icon:'iconfont icon-vue',value:'vue'},
  {title:'React',icon:'iconfont icon-react',value:'react'},
])

const activeSortItem=ref(sideBarValue.value[0])

const activeSortList=ref([
  {title:'JavaScript数据类型判断方法',createTime:'2024-1-5 16:10:00'},
  {title:'第二篇博客',createTime:'2024-1-6 12:15:00'}
])

const handleSort=(item)=>{
  activeSortItem.value=item
}

</script>

<style scoped lang="scss">
.pageWrapper {
  width: 100%;
  height: calc(100% - 100px);
  padding-top: 30px;
  display: flex;
  justify-content: center;
}
.pageContent{
  width: 80%;
  height: 100%;
  display: flex;
}
.sideBar{
  width: 300px;
  height: 100%;
}
.sideBarItem{
  padding-left: 20px;
  height: 50px;
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
  border-radius: 5px 0 0 5px;

  >i{
    margin-right: 8px;
    font-size: 18px;
  }

  &:hover{
    background-color: white;
    transition: background-color,0.3s;
  }
}
.activeSideBarItem{
  background-color: white;
}

.docListContent{
  height: calc(100% - 60px);
  width: calc(100% - 400px);
  padding: 30px 50px;
  background-color: white;
  border-radius: 5px;
}

.docItem{
  height: 100px;
  padding: 15px 0;
  border-bottom: 1px dashed #5c5c5c;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.subInfo{
  font-size: 12px;
  color: #777777;
  >i{
    font-size: 11.5px;
    margin-right: 5px;
  }
}
.title{
  font-size: 24px;
  font-weight: 750;
}
</style>