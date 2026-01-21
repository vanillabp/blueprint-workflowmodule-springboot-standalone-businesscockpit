<script setup lang="ts">
import LoanApproval from "@/loan-approval/WorkflowPage.vue";
import { computed } from "vue";
import type { BcWorkflow } from "@vanillabp/bc-types";

const props = defineProps<{
  workflow: any
}>()

const workflow = computed<BcWorkflow>(() => {
  if (typeof props.workflow === "string") {
    return JSON.parse(props.workflow) as BcWorkflow;
  }
  return props.workflow as BcWorkflow;
})
</script>

<template>
  <LoanApproval v-if="workflow.bpmnProcessId === 'loan_approval'" :workflow="workflow"></LoanApproval>
  <div v-else>Unknown BPMN process ID '{{ workflow.bpmnProcessId }}'!</div>
</template>

<style scoped>
</style>
