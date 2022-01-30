#!/bin/bash

#Exercício 1
cd unix_tests
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

#Exercício 2
cat countries.txt

#Exercício 3
less countries.txt

#Exercício 4
less countries.txt
/Zambia

#Exercício 5
grep Brazil countries.txt

#Exercício 6
grep -i brazil countries.txt

#Exercício 7
grep -iv fox phrases.txt

#Exercício 8
wc -w phrases.txt

#Exercício 9
wc -l phrases.txt

#Exercício 10
touch empty.tbt empty.pdf

#Exercício 11
ls

#Exercício 12
ls *.txt

#Exercício 13
ls *.{txt,tbt}

#Exercício 14
man ls