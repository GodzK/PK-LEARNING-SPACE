# ใช้ Node.js เวอร์ชันที่เหมาะสม
FROM node:18-alpine AS build

# กำหนด working directory
WORKDIR /Frontend

# คัดลอกไฟล์ package.json และ package-lock.json
COPY package.json package-lock.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์ทั้งหมดไปยัง container
COPY . .

# สร้าง production build
RUN npm run build

# ใช้ nginx เพื่อเสิร์ฟไฟล์ static
FROM nginx:alpine

# คัดลอกไฟล์ build ไปยัง nginx
COPY --from=build /app/dist /usr/share/nginx/html

# เปิดพอร์ต 80
EXPOSE 80

# รัน nginx
CMD ["nginx", "-g", "daemon off;"]
