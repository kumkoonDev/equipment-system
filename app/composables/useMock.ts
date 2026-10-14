// ข้อมูลตัวอย่างสำหรับ UI เท่านั้น
export const equipment = [
  { reg: '00001', title: 'โน้ตบุ๊ก Lenovo ThinkPad E14', author: 'ฝ่ายไอที', pub: 'Lenovo', tags: 'คอมพิวเตอร์ , โน้ตบุ๊ก', price: 22900, date: '16/09/2568', status: 'ว่าง' },
  { reg: '00002', title: 'โปรเจกเตอร์ Epson EB-X06', author: 'ฝ่ายไอที', pub: 'Epson', tags: 'โสตทัศน์ , โปรเจกเตอร์', price: 15500, date: '16/09/2568', status: 'ว่าง' },
  { reg: '00003', title: 'กล้อง Canon EOS 200D', author: 'ฝ่ายสื่อ', pub: 'Canon', tags: 'กล้อง , ถ่ายภาพ', price: 18900, date: '18/06/2568', status: 'ถูกยืม' },
  { reg: '00004', title: 'ไมโครโฟนไร้สาย Shure', author: 'ฝ่ายสื่อ', pub: 'Shure', tags: 'เสียง , ไมค์', price: 7200, date: '18/06/2568', status: 'ว่าง' },
  { reg: '00005', title: 'ลำโพงบลูทูธ JBL PartyBox', author: 'ฝ่ายกิจกรรม', pub: 'JBL', tags: 'เสียง , ลำโพง', price: 9900, date: '16/09/2568', status: 'ถูกยืม' },
  { reg: '00006', title: 'ขาตั้งกล้อง Manfrotto', author: 'ฝ่ายสื่อ', pub: 'Manfrotto', tags: 'กล้อง , อุปกรณ์เสริม', price: 3200, date: '16/09/2568', status: 'ว่าง' }
]
export const members = [
  { id: '10001', pre: 'ด.ช.', name: 'สมชาย ใจดี', grp: '2/4', no: 1, loans: 0, member: 'T' },
  { id: '10002', pre: 'ด.ญ.', name: 'สมหญิง รักเรียน', grp: '2/7', no: 2, loans: 1, member: 'T' },
  { id: '10003', pre: 'ด.ช.', name: 'ธนา ศรีสุข', grp: '2/7', no: 3, loans: 1, member: 'T' },
  { id: '10004', pre: 'ด.ญ.', name: 'มาลี สุขใจ', grp: '2/8', no: 4, loans: 0, member: 'T' },
  { id: '10005', pre: 'ด.ช.', name: 'ปรีชา วงศ์ดี', grp: '2/1', no: 5, loans: 0, member: 'T' },
  { id: '10006', pre: 'ด.ญ.', name: 'อรทัย แสงทอง', grp: '2/3', no: 6, loans: 0, member: 'F' }
]
export const loans = [
  { reg: '00003', title: 'กล้อง Canon EOS 200D', who: 'สมหญิง รักเรียน', sid: '10002', cls: '2/7', out: '01/10/2569', due: '08/10/2569', late: 0 },
  { reg: '00005', title: 'ลำโพงบลูทูธ JBL PartyBox', who: 'ธนา ศรีสุข', sid: '10003', cls: '2/7', out: '18/09/2569', due: '25/09/2569', late: 8 }
]
export const returned = [
  { reg: '00001', title: 'โน้ตบุ๊ก Lenovo ThinkPad E14', who: 'สมชาย ใจดี', sid: '10001', cls: '2/4', out: '20/09/2569', ret: '27/09/2569' }
]
