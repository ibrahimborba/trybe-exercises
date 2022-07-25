USE hr;

SELECT MAX(salary) FROM employees;

SELECT MAX(salary) - MIN(salary) FROM employees;

SELECT job_id, AVG(salary)
  FROM employees
 GROUP BY job_id
 ORDER BY AVG(salary) DESC;

SELECT SUM(salary) FROM employees;

SELECT ROUND(MAX(salary),2), ROUND(MIN(salary),2), ROUND(SUM(salary),2), ROUND(AVG(salary),2) 
  FROM employees;

SELECT COUNT(job_id) 
  FROM employees
 WHERE job_id = 'IT_PROG';
 
SELECT job_id, SUM(salary)
  FROM employees
 WHERE job_id = 'IT_PROG';

SELECT job_id, AVG(salary)
  FROM employees
 WHERE job_id <> 'IT_PROG'
 GROUP BY job_id
 ORDER BY AVG(salary) DESC;

SELECT department_id, AVG(salary), COUNT(employee_id)
  FROM employees
 WHERE job_id <> 'IT_PROG'
 GROUP BY department_id
HAVING COUNT(employee_id) > 10;

SELECT REPLACE(phone_number, '515', '777') FROM employees;

SELECT *
  FROM employees
 WHERE CHAR_LENGTH(first_name) > 8;

SELECT employee_id, first_name, DAY(hire_date) 
  FROM employees;

SELECT UCASE(first_name)
  FROM employees;

SELECT last_name, hire_date
  FROM employees
 WHERE MONTH(hire_date) = '7'
   AND YEAR(hire_date) = '1987';

SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) AS working_for
  FROM employees;