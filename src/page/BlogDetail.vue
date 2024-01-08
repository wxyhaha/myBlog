<template>
  <div class="pageWrapper">
    <div class="pageContent">
      <div class="markdownContentWrapper">
        <div id="markdownContent"/>
      </div>
      <div class="rightSideBar">
        <div class="sortInfo"></div>
        <div class="directory"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MarkdownIt from 'markdown-it'
import {useRoute} from "vue-router";
import {onMounted} from "vue";

const router=useRoute()

const md = new MarkdownIt();

let docPath=''
if (process.env.NODE_ENV === 'development') {
  docPath=router.query.path
} else {
  docPath=router.query.path?.replace('/public','')
}

onMounted(()=>{
  const mdDom=document.getElementById('markdownContent')
  mdDom.innerHTML=''
  fetch(docPath)
      .then(response => response.text())
      .then(data => {
        mdDom.innerHTML=md.render(data)
      });
})

</script>

<style lang="scss" scoped>
.pageWrapper {
  width: 100%;
  height: calc(100% - 100px);
  padding-top: 30px;
  display: flex;
  justify-content: center;
  overflow: auto;
}
.pageContent{
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.markdownContentWrapper{
  width: 70%;
  background-color: white;
  padding: 15px;
}

#markdownContent{
  width: calc(100% - 30px);
}
.rightSideBar{
  height: 100%;
  width: calc(30% - 50px);
  background-color: white;
}
</style>