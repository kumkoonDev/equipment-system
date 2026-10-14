<script setup lang="ts">
const { org, province } = useAppConfig()
const n = { e: equipment.length, l: loans.length, m: members.length }
const tiles = [
  { to: '/borrow', t: 'ยืมอุปกรณ์', d: 'สแกนบัตรสมาชิกและอุปกรณ์' },
  { to: '/return', t: 'คืนอุปกรณ์', d: 'รับคืนและคิดค่าปรับ' },
  { to: '/search', t: 'สืบค้นอุปกรณ์', d: 'ค้นจากทะเบียน ชื่อ หรือคำสืบค้น' },
  { to: '/equipment', t: 'ข้อมูลอุปกรณ์', d: 'เพิ่ม แก้ไข และลบรายการ' }
]
</script>
<template>
  <div class="page">
    <section class="hero"><div><p>Equipment Borrowly System</p><h1>{{ org }}<br />{{ province }}</h1></div><span class="hero-orb" aria-hidden="true">↗</span></section>
    <div class="form-grid">
      <div class="stat s4"><b>{{ n.e }}</b>อุปกรณ์ทั้งหมด</div>
      <div class="stat s4"><b>{{ n.l }}</b>อุปกรณ์ที่ถูกยืมอยู่</div>
      <div class="stat s4"><b>{{ n.m }}</b>สมาชิกนักเรียน</div>
    </div>
    <div class="tiles"><NuxtLink v-for="x in tiles" :key="x.to" :to="x.to" class="tile"><b>{{ x.t }}</b><span>{{ x.d }}</span></NuxtLink></div>
  </div>
</template>
