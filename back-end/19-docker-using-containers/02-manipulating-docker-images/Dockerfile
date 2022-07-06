# FROM alpine:3.14
# CMD ["echo", "Eu sou uma pessoa estudante da Trybe!"]

FROM httpd:2.4
COPY index.html /usr/local/apache2/htdocs/
EXPOSE 80
CMD ["httpd-foreground"]