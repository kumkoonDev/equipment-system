<script setup lang="ts">
const rows = reactive(members.map(m => ({ ...m, level: m.grp.split('/')[0], room: m.grp.split('/')[1], from: '', to: '' })))
const view = ref<'form' | 'table'>('form')
const i = ref(0), q1 = ref(''), q2 = ref('')
const cur = computed(() => rows[i.value]!)
const shown = computed(() => rows.filter(r => r.id.includes(q1.value) && r.name.includes(q2.value)))
const go = (n: number) => (i.value = Math.min(rows.length - 1, Math.max(0, n)))
const cols = [{ key: 'id', label: 'เลขประจำตัว' }, { key: 'no', label: 'เลขที่' }, { key: 'pre', label: 'คำนำหน้าชื่อ' }, { key: 'name', label: 'ชื่อ - ชื่อสกุล' }, { key: 'grp', label: 'ชั้น- ห้อง' }, { key: 'member', label: 'สมาชิก' }, { key: 'loans', label: 'จำนวนอุปกรณ์ที่ยืม', align: 'center' }]
</script>
<template>
  <div class="page">
    <div class="panel"><div class="row"><Field label="ค้นหา เลขประจำตัว" v-model="q1" /><Field label="ชื่อ - ชื่อสกุล" v-model="q2" /><div class="grow" />
      <div class="seg"><button :class="{ on: view === 'form' }" @click="view = 'form'">ฟอร์ม</button><button :class="{ on: view === 'table' }" @click="view = 'table'">ตาราง</button></div></div></div>
    <div v-if="view === 'form'" class="panel"><h3>ข้อมูลนักเรียน</h3><div class="form-grid">
      <div class="s3"><Field label="เลขประจำตัว" v-model="cur.id" /></div><div class="s3"><Field label="คำนำหน้าชื่อ" v-model="cur.pre" /></div><div class="s6"><Field label="ชื่อ - สกุล" v-model="cur.name" /></div>
      <div class="s3"><Field label="ชั้น / ห้อง" v-model="cur.grp" /></div><div class="s3"><Field label="เลขที่" v-model="cur.no" /></div><div class="s3"><Field label="ระดับชั้น" v-model="cur.level" ro /></div><div class="s3"><Field label="ห้อง" v-model="cur.room" ro /></div>
      <div class="s3"><Field label="สมาชิก"><select v-model="cur.member"><option>T</option><option>F</option></select></Field></div>
      <div class="s3"><Field label="จำนวนอุปกรณ์ที่ยืม" v-model="cur.loans" ro /></div><div class="s3"><Field label="วันเข้าเป็นสมาชิก" v-model="cur.from" /></div><div class="s3"><Field label="วันสิ้นสุดสมาชิก" v-model="cur.to" /></div>
      <div class="s12 muted">F = ไม่ได้เป็นสมาชิก , T = เป็นสมาชิก</div></div></div>
    <DataTable v-else :cols="cols" :rows="shown" />
    <div class="panel"><div class="row">
      <span class="muted">จำนวนนักเรียนทั้งหมด <b style="font-size:22px;color:var(--ink)">{{ rows.length }}</b> คน</span>
      <div class="row"><button class="btn" @click="go(i - 1)">◀</button><button class="btn" @click="go(i + 1)">▶</button></div><div class="grow" />
      <button class="btn pri">เพิ่ม</button><button class="btn">บันทึกการแก้ไข</button><button class="btn bad">ลบ</button><button class="btn bad">ลบข้อมูลนักเรียนทั้งหมด</button></div>
      <div class="row" style="margin-top:12px"><button class="btn">สมัครสมาชิกรายคน</button><button class="btn bad">ยกเลิกสมาชิกรายคน</button><button class="btn">สมัครสมาชิกทั้งหมด</button><button class="btn bad">ยกเลิกสมาชิกทั้งหมด</button></div></div>
  </div>
</template>
