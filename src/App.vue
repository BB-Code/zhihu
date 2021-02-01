<template>
  <div>
    <GlobalHeader :user="user" />
    <Dropdown :title="测试" />
    <ColumnList :list="list" />
    <div class="mb-3">
      <label class="form-label">邮箱地址</label>
      <ValidateInput2 :rules="emailRules" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList from  './components/ColumnList.vue'
import GlobalHeader from './components/GlobalHeader.vue';
import Dropdown from './components/Dropdown.vue';
import {testData} from './mocks/testData';
import {testUser} from './mocks/testUser';
import store from './store/index';
import ValidateInput2, { RulesProp } from './components/ValidateInput2.vue';

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    Dropdown,
    ValidateInput2
  },
  setup(){
    const emailRules: RulesProp = [
      { type: 'required', message: 'email is not null' },
      { type: 'email', message: 'email format is not true'}
]
  },
  data(){
    return{
      list:testData,
      user:testUser,
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
