# Pull NodeJS Image (14.17 LTS)
FROM --platform=linux/x86_64 node:14.17-alpine3.11

# Set working directory
WORKDIR /app

# Adding node_modules bin to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i --silent

# Add app
COPY . ./

# Start app
CMD ["npm", "start"]

# Build Command
# docker build -t maximaumn:mxm21-client-app .
# Run command (M1):
# docker run -d -it -p --platform linux/amd64 3003:3003/tcp --name mxm21-client-app mxm21:client-app  