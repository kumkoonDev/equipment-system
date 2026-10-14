<script setup lang="ts">
const { org } = useAppConfig()
const tab = ref('list')
const tabs = [['list', 'รายการอุปกรณ์ทั้งหมด'], ['detail', 'รายละเอียดอุปกรณ์'], ['label', 'ป้ายอุปกรณ์'], ['stat', 'สถิติการยืมอุปกรณ์']]
const cols = [{ key: 'reg', label: 'ทะเบียนรวม' }, { key: 'title', label: 'ชื่ออุปกรณ์' }, { key: 'author', label: 'ชื่อผู้แต่ง' }, { key: 'pub', label: 'สำนักพิมพ์' }, { key: 'price', label: 'ราคา', align: 'right' }, { key: 'date', label: 'วันนำเข้า' }]
const e = equipment[0]!
const list = equipment
const stat = equipment.map((x, k) => ({ ...x, n: k % 3 }))
const print = () => window.print()
</script>
<template>
  <div class="page">
    <div class="row noprint"><div class="seg"><button v-for="t in tabs" :key="t[0]" :class="{ on: tab === t[0] }" @click="tab = t[0]!">{{ t[1] }}</button></div><div class="grow" /><button class="btn pri" @click="print">พิมพ์รายงาน</button></div>
    <div class="paper">
      <template v-if="tab === 'list'"><h3>รายการอุปกรณ์ทั้งหมด</h3><DataTable :cols="cols" :rows="list" /></template>
      <template v-else-if="tab === 'detail'"><div class="row"><b style="font-size:20px">รายละเอียดอุปกรณ์</b><div class="grow" /><b>{{ org }}</b></div>
        <div class="form-grid"><div class="s6"><Field label="เลขทะเบียนรวม" :model-value="e.reg" ro /></div><div class="s6"><Field label="ชื่ออุปกรณ์" :model-value="e.title" ro /></div>
          <div class="s6"><Field label="ชื่อผู้แต่ง" :model-value="e.author" ro /></div><div class="s6"><Field label="สำนักพิมพ์" :model-value="e.pub" ro /></div><div class="s6"><Field label="แนว(คำ)สืบค้น" :model-value="e.tags" ro /></div><div class="s6"><Field label="วันนำเข้า" :model-value="e.date" ro /></div></div></template>
      <div v-else-if="tab === 'label'" class="labels"><div v-for="x in list" :key="x.reg" class="label"><small>{{ x.reg }}</small><b>{{ x.title }}</b><span>ชื่อผู้แต่ง: {{ x.author }}</span><span>คำสืบค้น: {{ x.tags }}</span></div></div>
      <template v-else><h3>สถิติการยืมอุปกรณ์</h3><DataTable :cols="[{ key: 'reg', label: 'ทะเบียนรวม' }, { key: 'title', label: 'ชื่ออุปกรณ์' }, { key: 'n', label: 'สถิติการยืม(ครั้ง)', align: 'right' }]" :rows="stat" /></template>
    </div>
  </div>
</template>
