#!/bin/bash

#Parte 1
cd 02-git-github-entendendo-comandos

#Parte 2
git status
git add .
git commit -m "adiciona arquivo .txt"
git push

#Parte 3
git checkout -b trybe-skills-changes

#Parte 4
cat >> trybe-skills.txt
- HTML
- CSS
^D
git add trybe-skills.txt
git commit -m "adiciona novas skills"
git push -u origin trybe-skills-changes

#Parte 5
#abre Pull Request no GitHub

#Parte 6
git checkout master

#Parte 7
git branch
q

#Parte 8
git checkout -b trybe-skills-updates

#Parte 9
cat >> trybe-skills.txt
- JavaScript
^D
git add trybe-skills.txt
git commit -m "adiciona nova skill"
git push -u origin trybe-skills-updates
#abre Pull Request no GitHub

#Parte 10
#Faz merge nos Pull Request e verifica conflitos nos arquivos novos


