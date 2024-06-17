FROM node:20-alpine

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy local code to the container image
COPY . .

# Build the app
RUN npm run build

# Install serve to serve the app
RUN npm install -g serve

# Set the command to start the server
CMD ["serve", "-s", "build"]

# Expose the port the app runs on
EXPOSE 3000