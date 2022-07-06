#Create an image
docker build -t <image name> .

#Create new container with web server
docker build -t meu-servidor-web .
docker run --rm -d -p 1234:80 --name meu-container meu-servidor-web


#Removing images
docker system prune -af
