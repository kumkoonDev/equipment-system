<script setup lang="ts">
const sid = ref(''), eid = ref('')
const m = computed(() => members.find(x => x.id === sid.value))
const e = computed(() => equipment.find(x => x.reg === eid.value))
const list = ref<any[]>([])
const note = computed(() => (e.value && e.value.status !== 'ว่าง' ? 'อุปกรณ์ชิ้นนี้ถูกยืมอยู่' : m.value && m.value.member !== 'T' ? 'ผู้ใช้นี้ไม่ได้เป็นสมาชิก' : ''))
const ok = computed(() => m.value && e.value && !note.value)
const cols = [{ key: 'sid', label: 'เลขประจำตัว' }, { key: 'who', label: 'ชื่อ-นามสกุล ผู้ยืม' }, { key: 'reg', label: 'ทะเบียนรวม' }, { key: 'title', label: 'ชื่ออุปกรณ์' }, { key: 'out', label: 'วันยืม' }, { key: 'due', label: 'วันกำหนดส่ง' }]
function borrow() {
  const d = new Date(), due = new Date(Date.now() + 7 * 864e5), f = (x: Date) => x.toLocaleDateString('th-TH')
  list.value.unshift({ sid: m.value!.id, who: m.value!.name, reg: e.value!.reg, title: e.value!.title, out: f(d), due: f(due) })
  reset()
}
const reset = () => { sid.value = ''; eid.value = '' }
</script>
<template>
  <div class="page">
    <div class="scan">
      <Field label="ใส่เลขประจำตัวนักเรียน" v-model="sid" ph="เช่น 10001" />
      <Field label="ใส่ทะเบียนรวมอุปกรณ์" v-model="eid" ph="เช่น 00001" />
    </div>
    <div class="form-grid">
      <div class="panel s4"><h3>ข้อมูลนักเรียน</h3><div class="form-grid">
        <div class="s12"><Field label="เลขประจำตัว" :model-value="m?.id" ro /></div>
        <div class="s8"><Field label="ชื่อ" :model-value="m?.name" ro /></div><div class="s4"><Field label="ชั้น" :model-value="m?.grp" ro /></div></div></div>
      <div class="panel s8"><h3>ข้อมูลอุปกรณ์</h3><div class="form-grid">
        <div class="s4"><Field label="ทะเบียนรวม" :model-value="e?.reg" ro /></div><div class="s8"><Field label="ชื่ออุปกรณ์" :model-value="e?.title" ro /></div>
        <div class="s12"><Field label="ชื่อผู้แต่ง" :model-value="e?.author" ro /></div></div></div>
    </div>
    <div class="row"><button class="btn pri" :disabled="!ok" @click="borrow">ยืมอุปกรณ์</button><button class="btn" @click="reset">Reset</button><span v-if="note" class="note">{{ note }}</span></div>
    <div class="panel"><h3>รายการอุปกรณ์ที่ยืม</h3><DataTable :cols="cols" :rows="list" empty="สแกนบัตรและอุปกรณ์ด้านบนเพื่อเริ่มยืม" /></div>
  </div>
</template>
