-- b)	Se requiere un inventario de productos para mujeres (aquellos que dice Ladies en el nombre) ordenado por precio descendente. 


SELECT product_id, product_name, model_year, list_price
FROM products
WHERE product_name LIKE '%Ladies%'
ORDER BY list_price DESC;