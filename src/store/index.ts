import { defineStore } from "pinia"
import {sortList} from '../utils/index'

export const useDocsStore=defineStore('docsData',{
    state:()=>{
        return {
            docsCatalog:[]
        }
    },
    getters:{

    },
    actions:{
        getDocsCatalog(){
            const docsModule = import.meta.glob('/src/assets/docs/*.md');
            const resArr=[]
            for (const path in docsModule) {
                let infoArr= path.match(/\[(.*?)\]/g)
                infoArr=infoArr.map(match => match.replace(/\[|\]/g, ''))
                const typeInfo=sortList.find(e=>e.value===infoArr[1])
                const item={title:infoArr[0],typeInfo:typeInfo,createTime:infoArr[2],fullPath:path}
                resArr.push(item)
            }
            this.$state.docsCatalog=resArr
        },

    }

})