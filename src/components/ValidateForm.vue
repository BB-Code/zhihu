<template>
  <form action="" class="validate-form-container">
      <slot name="default"></slot>
      <div class="submit-area" @click.prevent="submitForm">
          <slot name="submit">
              <button type="submit"  class="btn btn-primary">提交</button>
          </slot>
      </div>
  </form>
</template>

<script lang="ts">
import {defineComponent, onMounted, onUnmounted} from 'vue'
import mitt from 'mitt'//新增
type ValidateFunc = () => boolean//新增
export const emitter = mitt()//新增
export default defineComponent({
    name:'ValidateForm',
    emits:['form-submit'],
    setup(props,context){
        let funcArr: ValidateFunc[] = [] //新增
        const submitForm= (()=>{
            const result = funcArr.map(func=>func()).every(result=>result) //新增
            //context.emit('form-submit',true);
            context.emit('form-submit',result);
        })
        //新增
        const callback = (func: ValidateFunc) =>{
            funcArr.push(func);
        }
         //新增
        emitter.on('form-item-created',callback)
         //新增
        onMounted(() => {
            //emitter.emit('form-item-created', validateInput)
        })
        //新增
        onUnmounted(()=>{
            emitter.off('form-item-created',callback)
            funcArr = []
        })
        return {
            submitForm
        }
    }
})
</script>

<style>

</style>