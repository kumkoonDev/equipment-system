<script setup lang="ts">
const route = useRoute()
const { org } = useAppConfig()
const open = ref(false)
const nav = [
  { g: 'เกี่ยวกับโปรแกรม', items: [{ label: 'หน้าหลัก', to: '/' }] },
  { g: 'บริการ', items: [
    { label: 'ยืมอุปกรณ์', to: '/borrow' }, { label: 'คืนอุปกรณ์', to: '/return' }, { label: 'สืบค้นอุปกรณ์', to: '/search' },
    { label: 'อุปกรณ์ที่ยืมในวันนี้', to: '/loans/today' }, { label: 'อุปกรณ์ที่ยังไม่ได้คืน', to: '/loans/unreturned' }, { label: 'รายการอุปกรณ์ที่คืนแล้ว', to: '/loans/returned' }] },
  { g: 'ข้อมูล', items: [
    { label: 'ข้อมูลอุปกรณ์', to: '/equipment' }, { label: 'ข้อมูลสมาชิก', to: '/members' }, { label: 'การจัดการอุปกรณ์', to: '/manage' }, { label: 'สถิติการยืม-คืน', to: '/stats' }] },
  { g: 'พิมพ์ข้อมูล', items: [{ label: 'พิมพ์ Barcode', to: '/barcode' }, { label: 'รายงาน', to: '/reports' }] }
]
const title = computed(() => nav.flatMap(n => n.items).find(i => i.to === route.path)?.label ?? '')
const now = ref<Date | null>(null)
let t: any
onMounted(() => { now.value = new Date(); t = setInterval(() => (now.value = new Date()), 1000) })
onBeforeUnmount(() => clearInterval(t))
const date = computed(() => now.value?.toLocaleDateString('th-TH', { dateStyle: 'full' }) ?? '')
const time = computed(() => now.value?.toLocaleTimeString('th-TH', { hour12: false }) ?? '')
watch(() => route.path, () => (open.value = false))
</script>
<template>
  <div class="shell">
    <button v-if="open" class="side-backdrop" aria-label="ปิดเมนู" @click="open = false" />
    <aside class="side" :class="{ open }">
      <div class="brand">
        <img class="brand-mark" src="/images/kalasin-university-seal.webp" alt="ตรามหาวิทยาลัยกาฬสินธุ์" />
        <div><b>EquipFlow</b><small>{{ org }}</small></div>
      </div>
      <nav v-for="n in nav" :key="n.g">
        <h6>{{ n.g }}</h6>
        <NuxtLink v-for="i in n.items" :key="i.to" :to="i.to">{{ i.label }}</NuxtLink>
      </nav>
    </aside>
    <div class="main">
      <header class="top">
        <button class="menu-btn" @click="open = !open" :aria-expanded="open" aria-label="เมนู">☰</button>
        <div class="top-title"><span>ระบบจัดการอุปกรณ์</span><h2>{{ title }}</h2></div>
        <div class="clock"><span>{{ date }}</span><b>{{ time }}</b></div>
      </header>
      <main class="content"><slot /></main>
    </div>
  </div>
</template>
