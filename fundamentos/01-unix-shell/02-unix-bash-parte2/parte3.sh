#!/bin/bash

#Exercício 1
ps

#Exercício 2
sleep 30 &

#Exercício 3
ps
kill %1

#Exercício 4
sleep 30
bg %1

#Exercício 5
sleep 300 &

#Exercício 6
sleep 200
^Z
sleep 100
^Z

#Exercício 7
jobs
fg %1
^Z

#Exercício 8
bg %3

#Exercício 9
kill %1
kill %2
kill %3


