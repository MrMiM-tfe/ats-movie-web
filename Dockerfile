# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Install dependencies
WORKDIR /app/front
RUN npm install

# Install dependencies
WORKDIR /app/backend
RUN npm install

# Set environment variables in the Docker image
ENV LOCAL_SERVER=localhost
ENV LOCAL_PORT=3001

RUN node index.js &

# Build the React application for production
WORKDIR /app/front
CMD ["npm", "run", "Build"]

