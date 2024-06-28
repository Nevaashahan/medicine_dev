# Use the official Node.js image as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Install serve globally
RUN npm install -g serve

# Copy the rest of the application code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Expose port 3005
EXPOSE 3005

# Set the command to serve the app on port 3005
CMD ["serve", "-s", "build", "-l", "3005"]
