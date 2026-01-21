<script setup lang="ts">
import type { BcWorkflow } from "@vanillabp/bc-types";

defineProps<{
  workflow: BcWorkflow
}>()
</script>

<template>
  <div class="greetings">
    <h3>
      Loan Approval ({{ workflow.bpmnProcessId }})
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
