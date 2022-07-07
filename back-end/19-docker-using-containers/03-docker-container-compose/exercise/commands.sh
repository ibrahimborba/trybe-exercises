#Exercise 1 -Create a volume from httpd Apache image
docker run -d --name site-trybe -p 4545:80 -v /home/ibrahim/Documents/Trybe/trybe-exercises/back-end/19-docker-using-containers/03-docker-container-compose/exercise:/usr/local/apache2/htdocs/ httpd:2.4
#Path
http://localhost:4545/missao_trybe.html
#Inspect and check Source in Mount
docker inspect site-trybe

#Exercise 2 - Up a ghost blog with Docker Compose
docker-compose up -d --build