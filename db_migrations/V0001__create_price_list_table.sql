-- Создание таблицы для прайс-листа услуг грузоперевозок
CREATE TABLE IF NOT EXISTS price_list (
    id SERIAL PRIMARY KEY,
    service_name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    unit VARCHAR(50) DEFAULT 'руб.',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Добавление примеров услуг
INSERT INTO price_list (service_name, description, price, unit) VALUES
('Газель (3 тонны)', 'Стандартная грузоперевозка по городу', 1500.00, 'руб./час'),
('Камаз (10 тонн)', 'Крупногабаритные грузы', 3000.00, 'руб./час'),
('Грузчики', 'Погрузка и разгрузка', 500.00, 'руб./час'),
('Междугородние перевозки', 'За пределы города', 35.00, 'руб./км');