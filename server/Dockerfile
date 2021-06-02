FROM node:14.17.0
WORKDIR /app
COPY package*.json ./
RUN npm install 

# copy from the current directory and in the current directory
COPY . .

ENV PORT=port
ENV MONGO_URL=uri

EXPOSE 8080

CMD ["npm","start"]

# docker run -d -p 8080:8080 node-docker