# PROJETO - ZOO FUNCTIONS

Esse projeto simula um sistema de relatório de um zoológico. O sistema possui informações a respeito dos animais presentes no zoológico, colaboradores, horários de funcionamento e uma tabela de preços que varia de acordo com a idade das pessoas que o visitam.
Assim, desenvolvi um conjunto de funções capazes de recuperar vários tipos de informações acerca do zoológico e de seu funcionamento. Foram desenvolvidas as seguintes funções: 
&nbsp;
## 1. getSpeciesByIds
Busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.
&nbsp;
## 2. getAnimalsOlderThan
A partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.
&nbsp;
## 3. getEmployeeByName
Busca das pessoas colaboradoras através do primeiro ou do último nome delas.
&nbsp;
## 4. getRelatedEmployees
Verifica se uma pessoa colaboradora é gerente ou não e utiliza a primeira função para apresentar: se for uma pessoa gerente, retorna um array contendo os nomes das pessoas colaboradoras que ela é responsável; se não for uma pessoa colaboradora gerente, será lançado um erro.
&nbsp;
## 5. countAnimals
Contabiliza a quantidade de animais de cada espécie.
&nbsp;
## 6. calculateEntry
Retorna um objeto com a contagem de acordo com os seguintes critérios de classificação de idade e a partir desse objeto retorna o valor total a ser cobrado.
&nbsp;
## 7. getAnimalMap
Mapeia geograficamente as espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e sexo.
&nbsp;
## 8. getSchedule
Disponibiliza as informações de horário dos animais em uma consulta para o usuário, que pode querer ter acesso ao cronograma da semana, de um dia ou de um animal em específico.
&nbsp;
## 9. getOldestFromFirstSpecies
Busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro.
&nbsp;
## 10. getEmployeesCoverage
Associa informações de cobertura das pessoas funcionárias.
&nbsp;