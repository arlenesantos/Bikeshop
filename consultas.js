const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "senhapostgre",
    host: "localhost",
    port: 5432,
    database: "bikeshop",
});

const consultarTiendas = async () => {
    try {
        let resultado = await pool.query(`SELECT store_name, store_id FROM stores ORDER BY store_name ASC `);
        return resultado.rows;
        
    } catch (error) {
        throw error;
        
    }
};

const consultarCategorias = async () => {
    try {
        let resultado = await pool.query(`SELECT category_name, category_id FROM categories ORDER BY category_name ASC`);
        return resultado.rows;
        
    } catch (error) {
        throw error;
        
    }
};

const consultarMarcas = async () => {
    try {
        let resultado = await pool.query(`SELECT brand_name, brand_id FROM brands ORDER BY brand_name ASC`);
        return resultado.rows;
        
    } catch (error) {
        throw error;
        
    }
}

const mostrarInventario = async (tienda, categoria, marca) => {
    const query = {
        text: `
        SELECT stores.store_name, products.product_id, products.product_name, stocks.quantity
        FROM products
        INNER JOIN stocks ON products.product_id = stocks.product_id
        INNER JOIN stores ON stocks.store_id = stores.store_id
        INNER JOIN categories ON products.category_id = categories.category_id
        INNER JOIN brands ON products.brand_id = brands.brand_id
        WHERE stores.store_id = $1 AND categories.category_id = $2 AND brands.brand_id = $3
        ORDER BY products.product_name ASC;`,
        values: [tienda, categoria, marca]
    }
    try {
        let resultado = await pool.query(query);
        return resultado.rows;
        
    } catch (error) {
        throw error;
        
    }
}


module.exports = {
    consultarTiendas,
    consultarCategorias,
    consultarMarcas,
    mostrarInventario,
}