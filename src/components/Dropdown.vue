<template>
  <div class="dropdown" ref="dropdownRef">
  <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">
    {{title}}
  </a>
  <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
       <div v-for="item in itemList" :key="item">
           <DropdownItem >
                <a href="#">{{item}}</a>
           </DropdownItem>
       </div>
  </ul>
</div>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue'
import DropdownItem from './DropdownItem.vue';
import useClickOutside from '../utils/useClickOutside'
export default defineComponent({
    name:'Dropdown',
    components:{
        DropdownItem
    },
    props:{
        title:{
            type: String,
            required: true
        }
    },
    data(){
        return {
            itemList:['新建文件','编辑资料']
        }
    },
    setup(){
        const dropdownRef = ref<null | HTMLElement>(null)
        const isOpen =  useClickOutside(dropdownRef)

         const toggleOpen = () => {

            isOpen.value = !isOpen.value
                         console.log(isOpen)
        }
        return {
            isOpen,
            toggleOpen,
            dropdownRef
        }
    }
})
</script>

<style>

</style>