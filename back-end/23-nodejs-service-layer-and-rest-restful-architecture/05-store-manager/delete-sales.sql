DELETE s, sp
	FROM StoreManager.sales AS s
 INNER JOIN StoreManager.sales_products AS sp
		ON s.id = sp.sale_id
 WHERE s.id = 1;
 
SELECT * FROM StoreManager.sales;