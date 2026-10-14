<script setup lang="ts">
const type = computed(() => String(useRoute().params.type))
const C: Record<string, any> = {
  unreturned: { q: 'ใส่หมายเลขทะเบียนรวมอุปกรณ์ที่ต้องการค้นหา', rows: loans, last: ['due', 'วันกำหนดส่ง'], btns: ['พิมพ์รายชื่ออุปกรณ์ที่ยังไม่ได้คืน'] },
  today: { q: 'ค้นหาจากทะเบียนรวมหรือชื่ออุปกรณ์', rows: loans.slice(0, 1), last: ['due', 'กำหนดส่ง'], btns: ['Copy ข้อมูลอุปกรณ์ที่ยืมในวันนี้', 'พิมพ์ข้อมูลอุปกรณ์ที่ยืมในวันนี้', 'ล้างข้อมูล'] },
  returned: { q: 'ค้นหาตามชื่ออุปกรณ์', rows: returned, last: ['ret', 'วันส่งคืน'], btns: ['ลบข้อมูลอุปกรณ์ที่คืนแล้วทั้งหมด'] }
}
const c = computed(() => C[type.value] ?? C.unreturned)
const q = ref('')
const cols = computed(() => [{ key: 'reg', label: 'ทะเบียนรวม' }, { key: 'title', label: 'ชื่ออุปกรณ์' }, { key: 'who', label: 'ผู้ยืม' }, { key: 'sid', label: 'เลขประจำตัว' }, { key: 'cls', label: 'ชั้น' }, { key: 'out', label: 'วันยืม' }, { key: c.value.last[0], label: c.value.last[1] }])
const rows = computed(() => c.value.rows.filter((r: any) => r.reg.includes(q.value) || r.title.includes(q.value)))
</script>
<template>
  <div class="page">
    <div class="panel"><div class="row"><Field class="loan-query" :label="c.q" v-model="q" /><div class="grow" />
      <button v-for="(b, k) in c.btns" :key="b" class="btn" :class="{ pri: k === 0, bad: b.startsWith('ลบ') || b === 'ล้างข้อมูล' }">{{ b }}</button></div></div>
    <DataTable :cols="cols" :rows="rows">
      <template #due="{ row }">{{ row.due }} <span v-if="row.late" class="badge bad">เกิน {{ row.late }} วัน</span></template>
    </DataTable>
  </div>
</template>
