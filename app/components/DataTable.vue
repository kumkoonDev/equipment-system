<script setup lang="ts">
defineProps<{ cols: { key: string; label: string; align?: string }[]; rows: Record<string, any>[]; empty?: string }>()
</script>
<template>
  <div class="tbl">
    <table>
      <thead><tr><th v-for="c in cols" :key="c.key" :class="c.align">{{ c.label }}</th></tr></thead>
      <tbody>
        <tr v-for="(r, i) in rows" :key="i">
          <td v-for="c in cols" :key="c.key" :class="c.align"><slot :name="c.key" :row="r">{{ r[c.key] }}</slot></td>
        </tr>
        <tr v-if="!rows.length"><td :colspan="cols.length" class="empty">{{ empty || 'ยังไม่มีรายการ' }}</td></tr>
      </tbody>
    </table>
  </div>
</template>
