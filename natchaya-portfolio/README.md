# Natchaya Portfolio — Experience Details Edition

React + Vite portfolio, with four bilingual work-experience popups.

## What's changed
- Removed PROJECT MEDIA / empty image area **only** from the 4 experience popups.
- Full work responsibilities in Thai and English for Pavara Prosperity, Boonrawd Brewery, KKF Thailand and TTNetwork Integration.
- Kept project cards, project images/videos/YouTube popups, hard/soft skills charts, LINE QR placeholder, theme & language switch.
- Fixed React import in App.jsx to avoid `React is not defined` with classic JSX handling.

## Install safely on Windows
1. Back up your existing project including any custom assets.
2. Copy `src/App.jsx`, `src/data.js` and `src/styles.css` into `D:\MyPortfolio\natchaya-portfolio\src\`.
3. If other files are missing, copy the ZIP contents into the project root (NOT `dist`). Avoid overwriting custom `public/images` and `public/resumes`.
4. `npm install`, then `npm run dev`. Test `npm run build`.

Experience text lives in `src/data.js`. Dates and statements should be reviewed prior to publishing. The Boonrawd role is shown as Jul 2026 — 2026 because the previous portfolio used 2026 as its end year; revise if necessary.

For project visuals, put your own screenshots under `public/images`. SVG hero placeholders are included until actual images are provided.


## เพิ่มรูปหลายรูปใน Popup ผลงาน (Image Gallery)

1. สร้าง `public/images/projects/ai-vision/` แล้วคัดลอกรูป เช่น `image1.jpg`, `image2.jpg`, `image3.jpg` เข้าไป
2. เปิด `src/data.js` หาข้อมูลโปรเจกต์ AI Vision แล้วเปลี่ยน `images: []` เป็น:

```js
images: [
  'images/projects/ai-vision/image1.jpg',
  'images/projects/ai-vision/image2.jpg',
  'images/projects/ai-vision/image3.jpg',
],
```

3. รัน `npm install` และ `npm run dev` ในโฟลเดอร์หลัก (ห้ามรันใน `dist`). คลิกโปรเจกต์เพื่อดูรูปแบบ Slider เลื่อนได้ด้วยปุ่มซ้าย/ขวา, รูปย่อ, ลูกศรคีย์บอร์ด, และปัดนิ้วบนมือถือ
4. วิดีโอ MP4 อยู่ที่ `public/videos` และลิงก์ YouTube ยังคงแสดงใต้แกลเลอรีผ่าน `videos` / `youtube` ตามเดิม

รูปที่ไม่ได้แนบจริงจะไม่ถูกสร้างขึ้นเอง: โปรเจกต์ที่ยังไม่มี `images` จะแสดงกรอบคำแนะนำตามเดิม
