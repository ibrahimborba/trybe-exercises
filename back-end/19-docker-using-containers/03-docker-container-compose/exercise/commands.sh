#Exercise 1 -Create a volume from httpd Apache image
docker run -d --name site-trybe -p 4545:80 -v $(pwd):/usr/local/apache2/htdocs/ httpd:2.4
#Path
http://localhost:4545/missao_trybe.html
#Inspect and check Source in Mount
docker inspect site-trybe

#Exercise 2, 3 and 4 - Up a ghost blog with Docker Compose
docker-compose up -d --build