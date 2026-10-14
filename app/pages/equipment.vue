<script setup lang="ts">
const F = [
  ['reg', 'เลขทะเบียนรวม', 3], ['cat', 'เลขทะเบียนหมวด', 3], ['grp', 'เลขหมู่อุปกรณ์', 3], ['type', 'รหัสประเภท', 3],
  ['isbn', 'ISBN หรือ ISSN', 3], ['vol', 'เล่มที่', 3], ['year', 'ปีที่พิมพ์', 3], ['pages', 'จำนวนหน้า', 3],
  ['date', 'วันนำเข้า', 3], ['from', 'ได้มาโดย', 3], ['memo', 'หมายเหตุ', 6],
  ['title', 'ชื่ออุปกรณ์', 12], ['author', 'ชื่อผู้แต่ง', 12], ['pub', 'สำนักพิมพ์', 6], ['place', 'สถานที่พิมพ์', 6],
  ['sub1', 'หัวเรื่อง 1', 6], ['sub2', 'หัวเรื่อง 2', 6], ['tags', 'แนว(คำ)สืบค้น', 12],
  ['cond', 'สถานภาพอุปกรณ์', 3], ['shelf', 'ที่อยู่อุปกรณ์ระดับ', 3], ['acode', 'รหัสเลขผู้แต่ง', 3], ['pic', 'ภาพประกอบ', 3],
  ['ed', 'พิมพ์ครั้งที่', 3], ['size', 'ขนาดอุปกรณ์', 3], ['qty', 'จำนวนนำเข้า', 3], ['price', 'ราคา / หน่วย', 3]
] as [string, string, number][]
const blank = Object.fromEntries(F.map(f => [f[0], ''])) as Record<string, any>
const rows = reactive(equipment.map(x => ({ ...blank, ...x, ban: 'No', qty: 1 })))
const view = ref<'form' | 'table'>('form')
const i = ref(0), q1 = ref(''), q2 = ref('')
const cur = computed(() => rows[i.value]!)
const shown = computed(() => rows.filter(r => r.reg.includes(q1.value) && r.title.includes(q2.value)))
const go = (n: number) => (i.value = Math.min(rows.length - 1, Math.max(0, n)))
const add = () => { rows.push({ ...blank, reg: String(rows.length + 1).padStart(5, '0'), ban: 'No', qty: 1 }); i.value = rows.length - 1; view.value = 'form' }
const del = () => { if (rows.length > 1) { rows.splice(i.value, 1); go(i.value) } }
const cols = [{ key: 'reg', label: 'ทะเบียนรวม' }, { key: 'isbn', label: 'ISBN' }, { key: 'title', label: 'ชื่ออุปกรณ์' }, { key: 'author', label: 'ชื่อผู้แต่ง' }, { key: 'tags', label: 'คำสืบค้น' }]
</script>
<template>
  <div class="page">
    <div class="panel"><div class="row"><Field label="ค้นหาจากเลขทะเบียนรวม" v-model="q1" /><Field label="ค้นหาจากชื่ออุปกรณ์" v-model="q2" /><div class="grow" />
      <div class="seg"><button :class="{ on: view === 'form' }" @click="view = 'form'">ฟอร์ม</button><button :class="{ on: view === 'table' }" @click="view = 'table'">ตาราง</button></div></div></div>
    <div v-if="view === 'form'" class="panel"><h3>เพิ่มข้อมูลอุปกรณ์</h3><div class="form-grid">
      <div v-for="f in F" :key="f[0]" :style="{ gridColumn: 'span ' + f[2] }"><Field :label="f[1]" v-model="cur[f[0]]" /></div>
      <div class="s3"><Field label="อุปกรณ์ห้ามยืม"><select v-model="cur.ban"><option>No</option><option>Yes</option></select></Field></div>
      <div class="s6 muted" style="align-self:end">ยืมได้ = No , ห้ามยืม = Yes</div></div></div>
    <DataTable v-else :cols="cols" :rows="shown" />
    <div class="panel"><div class="row">
      <span class="muted">จำนวนอุปกรณ์ทั้งหมด <b style="font-size:22px;color:var(--ink)">{{ rows.length }}</b> เล่ม</span>
      <div class="row"><button class="btn" :disabled="i === 0" @click="go(0)">⏮</button><button class="btn" :disabled="i === 0" @click="go(i - 1)">◀</button><button class="btn" :disabled="i === rows.length - 1" @click="go(i + 1)">▶</button><button class="btn" :disabled="i === rows.length - 1" @click="go(rows.length - 1)">⏭</button></div>
      <div class="grow" /><button class="btn pri" @click="add">เพิ่ม</button><button class="btn">ตกลง</button><button class="btn">ยกเลิก</button><button class="btn">COPY อุปกรณ์เล่มที่เหมือนกัน</button><button class="btn bad" @click="del">ลบ</button><button class="btn bad">ลบข้อมูลอุปกรณ์ทั้งหมด</button></div></div>
  </div>
</template>
