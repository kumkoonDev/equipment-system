<script setup lang="ts">
const months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
const m = ref('ตุลาคม')
const rows = [{ d: '1', out: 3, back: 1 }, { d: '2', out: 2, back: 2 }, { d: '3', out: 1, back: 0 }]
const cols = [{ key: 'd', label: 'วันที่' }, { key: 'out', label: 'ปริมาณการยืม', align: 'center' }, { key: 'back', label: 'ปริมาณการคืน', align: 'center' }]
</script>
<template>
  <div class="page">
    <div class="panel"><h3>เดือน</h3><div class="chips"><label v-for="x in months" :key="x"><input type="radio" v-model="m" :value="x" />{{ x }}</label><label><input type="radio" v-model="m" value="all" />ดูข้อมูลทั้งปี</label></div></div>
    <DataTable :cols="cols" :rows="rows" />
    <div class="form-grid"><div class="stat s3">รวมยืม<b>{{ rows.reduce((a, r) => a + r.out, 0) }}</b></div><div class="stat s3">รวมคืน<b>{{ rows.reduce((a, r) => a + r.back, 0) }}</b></div></div>
    <div class="row"><button class="btn bad">ล้างข้อมูลสถิติปัจจุบัน</button><button class="btn">เพิ่มข้อมูลวันที่</button><button class="btn pri">พิมพ์สถิติรายเดือน</button><button class="btn">ประมวลสถิติทั้งปี</button></div>
    <p class="note">หลังจากล้างข้อมูลแล้ว ให้ใส่วันเริ่มของเดือนที่เปิดภาคเรียนในปีการศึกษาใหม่ รูปแบบ เดือน/วันที่/ปี เช่น 5/1/09 แล้วกดเพิ่มข้อมูลวันที่</p>
  </div>
</template>
