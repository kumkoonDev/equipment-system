<script setup lang="ts">
const by = ref('id'), eb = ref('reg'), per = ref(16)
const sc = [{ key: 'grp', label: 'ชั้น/ห้อง' }, { key: 'no', label: 'เลขที่' }, { key: 'id', label: 'เลขประจำตัว' }, { key: 'name', label: 'ชื่อ - สกุล' }]
const ec = [{ key: 'reg', label: 'ทะเบียนรวม' }, { key: 'isbn', label: 'ISBN' }, { key: 'title', label: 'ชื่ออุปกรณ์' }]
const sel = ref<any[]>([]), esel = ref<any[]>([])
const ms = members, es = equipment
</script>
<template>
  <div class="page form-grid">
    <div class="panel s6"><h3>Barcode นักเรียน</h3><div class="chips"><label><input type="radio" v-model="by" value="id" />เลขประจำตัว</label><label><input type="radio" v-model="by" value="room" />ห้องเรียน</label></div>
      <div class="form-grid" style="margin:14px 0"><div class="s6"><Field label="เลขประจำตัวเริ่มต้น"><select><option v-for="m in ms" :key="m.id">{{ m.id }}</option></select></Field></div>
        <div class="s6"><Field label="เลขประจำตัวสุดท้าย"><select><option v-for="m in ms" :key="m.id">{{ m.id }}</option></select></Field></div>
        <div class="s12"><Field label="ห้องเรียน"><select><option>2/4</option><option>2/7</option></select></Field></div></div>
      <div class="row"><button class="btn pri" @click="sel = ms">คัดเลือกข้อมูลนักเรียน</button><button class="btn" :disabled="!sel.length">พิมพ์บาร์โค้ด</button><button class="btn" :disabled="!sel.length">พิมพ์บัตรสมาชิก</button></div>
      <DataTable style="margin:14px 0" :cols="sc" :rows="sel" /><p class="muted">จำนวนนักเรียน <b>{{ sel.length }}</b> คน</p></div>
    <div class="panel s6"><h3>Barcode อุปกรณ์</h3><div class="chips"><label><input type="radio" v-model="eb" value="reg" />เลือกจากทะเบียนรวม</label><label><input type="radio" v-model="eb" value="all" />เลือกทั้งหมด</label></div>
      <div class="form-grid" style="margin:14px 0"><div class="s6"><Field label="ทะเบียนรวมเริ่มต้น"><select><option v-for="e in es" :key="e.reg">{{ e.reg }}</option></select></Field></div>
        <div class="s6"><Field label="ทะเบียนรวมสุดท้าย"><select><option v-for="e in es" :key="e.reg">{{ e.reg }}</option></select></Field></div></div>
      <div class="chips" style="margin-bottom:14px"><label><input type="radio" v-model="per" :value="16" />16 ข้อมูล / หน้า</label><label><input type="radio" v-model="per" :value="32" />32 ข้อมูล / หน้า</label></div>
      <div class="row"><button class="btn pri" @click="esel = es">คัดเลือกข้อมูลอุปกรณ์</button><button class="btn" :disabled="!esel.length">พิมพ์</button></div>
      <DataTable style="margin:14px 0" :cols="ec" :rows="esel" /><p class="muted">จำนวนอุปกรณ์ <b>{{ esel.length }}</b> เล่ม</p></div>
  </div>
</template>
