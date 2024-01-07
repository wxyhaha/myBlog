<template>
  <div class="pageWrapper">
    <div class="pageContent">
      <div class="sideBar">
        <div :class="{sideBarItem:true,activeSideBarItem:activeSortItem.value===item.value}" v-for="(item,index) in sortList" :key="index" @click="handleSort(item)">
          <i :class='item.icon'/>
          <span>{{ item.title }}</span>
        </div>
      </div>
      <div class="docListContent">
        <div class="docItem" v-for="(item,index) in onshowSortList" :key="index" @click="router.push({name:'blogDetail',state:{path:item.fullPath}})">
          <div class="subInfo">
            <i :class='item.typeInfo.icon'/>
            <span>{{ item.typeInfo.title }}</span>
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
import {useDocsStore} from "../store/index";
import {sortList} from '../utils/index'
import router from "../router/index";

const docsStore=useDocsStore()

const activeSortItem=ref(sortList[0])

const onshowSortList=ref(docsStore.docsCatalog)

const handleSort=(item)=>{
  activeSortItem.value=item
  onshowSortList.value=docsStore.docsCatalog.filter(e=>e.typeInfo.value===item.value)
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
  cursor: pointer;
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