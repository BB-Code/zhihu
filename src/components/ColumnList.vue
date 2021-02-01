<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            :src="column.avatar"
            :alt="column.title"
            class="rounded-circle border border-light w-25 my-3"
          />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { ColumnProps } from "../common/ColumnProps";
declare function require(string: any): string;
export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      //我们希望它是一个 ColomnProps 的数组，Array 是一个数组的构造函数不是类型，使用 PropType 这个方法，它接受一个泛型，让 Array 构造函数返回传入的泛型类型。
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  setup(props) {
    const columnList = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = require('../assets/avator.png')
        }
        return column
      })
    })
    return {
      columnList
    }
  },
});
</script>

<style></style>
