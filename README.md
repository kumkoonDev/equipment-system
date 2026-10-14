# ระบบบริหารงานอุปกรณ์ (Nuxt 4 — UI เท่านั้น)

## วิธีรัน
1. แตกไฟล์ zip ให้เรียบร้อย (ห้ามเปิดรันจากในไฟล์ zip)
2. ต้องใช้ Node.js 20.19 ขึ้นไป หรือ 22.12 ขึ้นไป
3. เปิดเทอร์มินัลในโฟลเดอร์โปรเจกต์ แล้วรัน
   ```
   npm install
   npm run dev
   ```
4. เปิด http://localhost:3000

## แก้ชื่อองค์กร / จังหวัด
แก้ที่ `app/app.config.ts`

## ถ้าเจอ error
- `ERR_LOAD_URL ~/assets/css/main.css` → ลบโฟลเดอร์ `.nuxt` และ `node_modules` แล้วรัน `npm install` ใหม่
- ตรวจเวอร์ชันด้วย `npx nuxt --version` (ควรขึ้นต้นด้วย 4)
"# equipment-system" 
