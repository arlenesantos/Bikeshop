-- e)	Se requiere un inventario para la tienda Santa Cruz Bike de los productos que tienen en existencia en la categoría Electric Bikes. 

SELECT stocks.product_id, products.product_name, SUM(stocks.quantity) AS total
FROM stocks
INNER JOIN products ON stocks.product_id = products.product_id
INNER JOIN categories ON products.category_id = categories.category_id
INNER JOIN stores ON stocks.store_id = stores.store_id
WHERE categories.category_name = 'Electric Bikes' AND stores.store_name = 'Santa Cruz Bikes'
GROUP BY stocks.product_id, products.product_name
ORDER BY products.product_name ASC;