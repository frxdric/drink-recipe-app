CREATE TABLE Dish (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) 
    description TEXT,
);

CREATE TABLE Recipe (
    id SERIAL PRIMARY KEY,
    dish_id INTEGER REFERENCES Dish(id) 
    title VARCHAR(255)
    instructions TEXT,
    ingredients TEXT,
);
