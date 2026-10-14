<script setup lang="ts">
defineProps<{ label: string; ph?: string; ro?: boolean }>()
const m = defineModel<string | number>()
</script>
<template>
  <label class="f"><span>{{ label }}</span><slot><input v-model="m" :placeholder="ph" :readonly="ro" :class="{ ro }" /></slot></label>
</template>
