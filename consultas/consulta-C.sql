-- c)	Se requiere un reporte con la cantidad de productos de cada categoría, ordenado de mayor a menor cantidad. 

SELECT categories.category_id, categories.category_name, COUNT(*)
FROM products
LEFT JOIN categories ON products.category_id = categories.category_id
GROUP BY categories.category_id
ORDER BY count DESC;
