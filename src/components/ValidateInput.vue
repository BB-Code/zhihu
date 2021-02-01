<template>
  <form action="">
    <div class="mb-3">
      <label for="inputEmail" class="form-label">邮箱地址</label>
      <input
        type="text"
        class="form-control"
        id="inputEmail"
        v-model="emailRef.val"
        @blur="validateEmail"
      />
      <div class="form-text" v-if="emailRef.error">{{ emailRef.message }}</div>
    </div>
    <div class="mb-3">
      <label for="inputPassword" class="form-label">密码</label>
      <input type="password" class="form-control" id="inputPassword" />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "ValidateInput ",
  setup() {

    const emailRef = reactive({
      val: "",
      message: "",
      error: false,
    });
   
    const emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    const validateEmail = () => {
      if (emailRef.val.trim() === "") {
        emailRef.error = true;
        emailRef.message = "cant not be empty";
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true;
        emailRef.message = "should be vaild email";
      }
      console.log(emailRef)
      console.log(validateEmail)
      return {
        emailRef,
        validateEmail,
      };
    };
  },
});
</script>

<style></style>
