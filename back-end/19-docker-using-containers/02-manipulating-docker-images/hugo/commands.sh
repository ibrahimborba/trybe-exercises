#Create image
docker build -t site-hugo .

#Create container
docker run -p 1234:80 -d --name meu-container site-hugo

#Create image with multiple stages
docker build -t multi-stage-site-hugo .