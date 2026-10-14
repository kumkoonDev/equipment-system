<script setup lang="ts">
const acts = [['พิมพ์รายชื่ออุปกรณ์ขนาด A4'], ['พิมพ์รายชื่ออุปกรณ์ขนาด F4'], ['พิมพ์รายละเอียดอุปกรณ์'], ['รวมเงินค่าปรับ'], ['สำรองข้อมูลอุปกรณ์'], ['นำข้อมูลอุปกรณ์สำรองมาใช้'], ['ล้างค่าปรับอุปกรณ์ทั้งหมด', 1], ['ลบสถิติอุปกรณ์ที่ถูกยืม', 1]]
</script>
<template>
  <div class="page"><div class="panel"><h3>เครื่องมือจัดการอุปกรณ์</h3><div class="acts">
    <button v-for="a in acts" :key="a[0] as string" class="btn" :class="{ bad: a[1] }">{{ a[0] }}</button></div></div></div>
</template>
