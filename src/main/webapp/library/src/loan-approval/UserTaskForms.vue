<script setup lang="ts">
import AssessRisk from "@/loan-approval/user-task-forms/AssessRisk.vue";
import type { BcUserTask } from "@vanillabp/bc-types";

defineProps<{
  userTask: BcUserTask
}>()
</script>

<template>
  <AssessRisk v-if="userTask.taskDefinition === 'assessRisk'" :user-task="userTask"></AssessRisk>
  <div v-else>Unknown task definition '{{ userTask.taskDefinition }}'!</div>
</template>

<style scoped>
</style>
