#first the node version
FROM node:22

#now the directory to build the project in
WORKDIR /app

# to copy the files in the /app folder
COPY . .

# to do npm install, we only do this once as it will only run before the 
#container is setup and whenever the container runs, then cmd will run
#it will unrealistic to do npm install every time so this command
RUN npm install

#to run when the container starts
CMD ["node", "index.js"]
