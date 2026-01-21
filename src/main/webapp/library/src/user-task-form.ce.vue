<script setup lang="ts">
import LoanApproval from "@/loan-approval/UserTaskForms.vue";
import type { BcUserTask } from "@vanillabp/bc-types";
import { computed } from "vue";

const props = defineProps<{
  userTask: any
}>()

const userTask = computed<BcUserTask>(() => {
  if (typeof props.userTask === "string") {
    return JSON.parse(props.userTask) as BcUserTask;
  }
  return props.userTask as BcUserTask;
})
</script>

<template>
  <LoanApproval v-if="userTask.bpmnProcessId === 'loan_approval'" :user-task="userTask"></LoanApproval>
  <div v-else>Unknown BPMN process ID '{{ userTask.bpmnProcessId }}'!</div>
</template>

<style scoped>
</style>
