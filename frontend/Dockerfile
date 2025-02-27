FROM node:20-alpine 

RUN npm install -g npm@11.1.0

WORKDIR /app  

COPY package.json package-lock.json ./  
RUN npm install  
RUN npm -v && node -v

COPY . .

CMD ["npm", "run", "serve"]

# CMD ["sleep", "infinity"]