# ใช้ Node.js เวอร์ชัน 12 เป็น base image
FROM node:12

# กำหนดไดเรกทอรีทำงาน
WORKDIR /Backend

# คัดลอกไฟล์ package.json และ package-lock.json (ถ้ามี)
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์ทั้งหมดจากโฟลเดอร์ปัจจุบันไปยัง container
COPY . .

# ตั้งค่าตัวแปรพอร์ตให้ container ใช้งาน
ENV PORT=7777

# เปิดพอร์ตให้ container สามารถรับการเชื่อมต่อได้
EXPOSE 7777

# คำสั่งเริ่มต้นเมื่อ container รัน
CMD ["npm", "start"]
