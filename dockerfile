# ใช้ Node.js base image สำหรับ build
FROM node:16 AS build-stage

# กำหนด working directory ใน container
WORKDIR /Frontend

# คัดลอกไฟล์ package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอก source code ทั้งหมด
COPY . .

# สร้าง production build
RUN npm run build

# ใช้ Nginx base image สำหรับ deploy
FROM nginx:stable AS production-stage

# คัดลอก build files ไปยัง Nginx
COPY --from=build-stage /app/build /usr/share/nginx/html

# เปิด port 80
EXPOSE 80

# รัน Nginx
CMD ["nginx", "-g", "daemon off;"]
