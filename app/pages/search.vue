<script setup lang="ts">
const modes = [['reg', 'ทะเบียนรวม'], ['title', 'ชื่ออุปกรณ์'], ['author', 'ชื่อผู้แต่ง'], ['tags', 'คำสืบค้น'], ['pub', 'สำนักพิมพ์'], ['all', 'แสดงทั้งหมด']]
const mode = ref('all'), q = ref(''), applied = ref({ mode: 'all', q: '' }), sel = ref(equipment[0]!)
const rows = computed(() => applied.value.mode === 'all' || !applied.value.q ? equipment : equipment.filter(r => String((r as any)[applied.value.mode]).includes(applied.value.q)))
const cols = [{ key: 'reg', label: 'ทะเบียนรวม' }, { key: 'title', label: 'ชื่ออุปกรณ์' }, { key: 'author', label: 'ชื่อผู้แต่ง' }, { key: 'tags', label: 'คำสืบค้น' }, { key: 'status', label: 'สถานะ' }]
</script>
<template>
  <div class="page">
    <div class="panel"><h3>เลือกรูปแบบการค้นหาจาก</h3>
      <div class="chips"><label v-for="m in modes" :key="m[0]"><input type="radio" v-model="mode" :value="m[0]" />{{ m[1] }}</label></div>
      <form class="row search-form" @submit.prevent="applied = { mode, q }"><input v-model="q" placeholder="พิมพ์คำที่ต้องการค้นหา" /><button class="btn pri">ค้นหา</button></form></div>
    <DataTable :cols="cols" :rows="rows"><template #reg="{ row }"><a href="#" @click.prevent="sel = row">{{ row.reg }}</a></template>
      <template #status="{ row }"><span class="badge" :class="{ warn: row.status !== 'ว่าง' }">{{ row.status }}</span></template></DataTable>
    <div class="panel"><h3>รายละเอียด</h3><div class="form-grid">
      <div class="s3"><Field label="เลขทะเบียนรวม" :model-value="sel.reg" ro /></div><div class="s9"><Field label="ชื่ออุปกรณ์" :model-value="sel.title" ro /></div>
      <div class="s6"><Field label="ชื่อผู้แต่ง" :model-value="sel.author" ro /></div><div class="s3"><Field label="สำนักพิมพ์" :model-value="sel.pub" ro /></div><div class="s3"><Field label="ราคา" :model-value="sel.price" ro /></div>
      <div class="s12"><Field label="คำสืบค้น" :model-value="sel.tags" ro /></div></div></div>
  </div>
</template>
