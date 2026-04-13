-- Crear base de datos
CREATE DATABASE ecommerce_academico;

-- Conectarse a la base de datos
\c ecommerce_academico;

-- Tabla usuarios
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    correo VARCHAR(100),
    password VARCHAR(255)
);

-- Tabla productos
CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion VARCHAR(100),
    precio DECIMAL(10,2),
    tipo VARCHAR(50)
);

-- Tabla pedidos
CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    usuario_id INT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10,2),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Tabla detalle_pedido
CREATE TABLE detalle_pedido (
    id SERIAL PRIMARY KEY,
    pedido_id INT,
    producto_id INT,
    cantidad INT,
    subtotal DECIMAL(10,2),
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);
