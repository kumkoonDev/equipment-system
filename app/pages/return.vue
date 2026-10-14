<script setup lang="ts">
const reg = ref('')
const l = computed(() => loans.find(x => x.reg === reg.value))
const done = ref<any[]>([])
const cols = [{ key: 'sid', label: 'เลขประจำตัว' }, { key: 'who', label: 'ชื่อผู้ยืม' }, { key: 'reg', label: 'ทะเบียนรวม' }, { key: 'title', label: 'ชื่ออุปกรณ์' }, { key: 'out', label: 'วันยืม' }, { key: 'due', label: 'กำหนดส่งคืน' }]
const fine = computed(() => (l.value ? l.value.late * 5 : 0))
function give() { done.value.unshift(l.value); reg.value = '' }
</script>
<template>
  <div class="page">
    <div class="scan"><Field label="ใส่ทะเบียนรวมอุปกรณ์ที่ต้องการคืน" v-model="reg" ph="เช่น 00003" /><div class="stat" style="align-self:end"><span class="muted">ค่าปรับ (บาท)</span><b>{{ fine }}</b></div></div>
    <div class="panel"><h3>รายละเอียดของอุปกรณ์ที่จะคืน</h3><div class="form-grid">
      <div class="s4"><Field label="เลขทะเบียนรวมอุปกรณ์" :model-value="l?.reg" ro /></div><div class="s8"><Field label="ชื่ออุปกรณ์" :model-value="l?.title" ro /></div>
      <div class="s4"><Field label="เลขประจำตัวผู้ยืม" :model-value="l?.sid" ro /></div><div class="s8"><Field label="ชื่อผู้ยืม" :model-value="l?.who" ro /></div>
      <div class="s6"><Field label="วันที่ยืม (วัน/เดือน/ปี)" :model-value="l?.out" ro /></div><div class="s6"><Field label="วันกำหนดคืน (วัน/เดือน/ปี)" :model-value="l?.due" ro /></div></div></div>
    <div class="row"><button class="btn pri" :disabled="!l" @click="give">คืนอุปกรณ์</button><button class="btn" @click="reg = ''">Reset</button></div>
    <div class="panel"><h3>คืนแล้วในรอบนี้</h3><DataTable :cols="cols" :rows="done" empty="ยังไม่มีการคืนอุปกรณ์" /></div>
  </div>
</template>
