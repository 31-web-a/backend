# Basamos nuestra imagen en una que ya tenga linux y node
FROM node:20-alpine3.20

# Definnimos la carpeta donde se va a trabajar y copiar todo
WORKDIR /api

# Primero copiamos package.json y package-lock.json al contendor
COPY package*.json ./

# Se instalan las dependencias dentro del contenedor 
RUN npm i

# Copiamos los archivos restantes (nuestro código) al contenedor
COPY . .

# Exponer un puerto a nuestra red local
EXPOSE 8000

# Ejecutamos nuestra API
CMD ["npm", "run", "start"]