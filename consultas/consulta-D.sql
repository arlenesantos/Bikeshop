-- d) Se requiere un reporte con la cantidad de inventario de productos por marca, ordenado descendentemente. 

SELECT products.brand_id, brands.brand_name, SUM(quantity) AS total
FROM stocks
INNER JOIN products ON stocks.product_id = products.product_id
INNER JOIN brands ON brands.brand_id = products.brand_id
GROUP BY products.brand_id, brands.brand_name
ORDER BY total DESC;