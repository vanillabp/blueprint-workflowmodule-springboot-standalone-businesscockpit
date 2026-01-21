<script setup lang="ts">
import { DevShellApp } from '@vanillabp/bc-dev-shell-vue'
import UserTaskForm from '../../library/src/user-task-form.ce.vue'
import WorkflowPage from '../../library/src/workflow-page.ce.vue'
</script>

<template>
  <DevShellApp
    official-api-uri="/official-api/v1"
    :user-task-form="UserTaskForm"
    :workflow-page="WorkflowPage"
  />
</template>
