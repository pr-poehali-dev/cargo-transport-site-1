-- Создание таблицы для заявок клиентов
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    cargo_type VARCHAR(255),
    cargo_weight VARCHAR(100),
    loading_address TEXT,
    unloading_address TEXT,
    delivery_date DATE,
    comment TEXT,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание индекса для быстрого поиска по статусу и дате
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);