#!/bin/bash

#Exercício 1
cd unix_tests

#Exercício 2
cat > skills2.txt
Internet
Unix
Bash 
^D

#Exercício 3
cat >> skills2.txt
HTML
CSS
JavaScript
React
Node.JS 
^D

sort < skills2.txt

#Exercício 4
wc -l skills2.txt 

#Exercício 5
sort skills2.txt 

#Exercício 6
sort skills2.txt | head -3 > top_skills.txt

#Exercício 7
cat > phrases2.txt
The quick brown fox jumps over the lazy dog.
Almost before we knew it, we had left the ground.
Lorem ipsum dolor sit amet.
The five boxing wizards jump quickly.
Jackdaws love my big sphinx of quartz.
^D

#Exercício 7
grep -i br phrases2.txt | wc -l 

#Exercício 8
grep -iv br phrases2.txt | wc -l

#Exercício 9
cat >> phrases2.txt
Brazil
England

#Exercício 10
cat phrases2.txt countries.txt > bunch_of_things.txt

#Exercício 11
sort bunch_of_things.txt