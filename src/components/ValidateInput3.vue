<template>
  <div>
    <div class="validate-input-container pb-3">
      <input
        type="text"
        class="form-control"
        :class="{ 'is-invalid': inputRef.error }"
        :value="inputRef.val"
        @blur="vaildateInput"
        @input="vaildateValue"
      />
      <span v-if="inputRef.error" class="invalid-feedback">{{
        inputRef.message
      }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import { RuleProp } from "../common/RuleProp";
const emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
export type RulesProp = RuleProp[];
export default defineComponent({
  name: "ValidateInput3.vue",
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String,
  },

  setup(props, context) {
    const inputRef = reactive({
      val: props.modelValue || "",
      message: "",
      error: false,
    });
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value;
      inputRef.val = targetValue;
      context.emit("update:modelValue", targetValue);
    };
    const vaildateInput = () => {
      if (props.rules) {
        console.log(props.rules);
        const allPassed = props.rules.every((rule) => {
          let passed = true;
          inputRef.message = rule.message;

          switch (rule.type) {
            case "required":
              passed = inputRef.val.trim() !== "";
              break;
            case "email":
              passed = emailReg.test(inputRef.val);
              break;
            default:
              break;
          }
          return passed;
        });
        inputRef.error = !allPassed;
      }
    };
    return {
      inputRef,
      vaildateInput,
    };
  },
});
</script>

<style></style>
