#Create an image
docker build -t <image name> .

#Create new container with web server
docker run --rm -d -p 1234:80 --name meu-container meu-servidor-web