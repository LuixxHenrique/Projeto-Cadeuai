# drop database CADEUAI;
create database CADEUAI;
use CADEUAI;

create table user_client(
	id varchar(255) not null,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    email varchar(255) not null,
    senha varchar(8) not null ,
    primary key(id)
);

CREATE TABLE KRCode (
	id int PRIMARY KEY auto_increment,
    code VARCHAR(100) NOT NULL
);

CREATE TABLE Setores (
    id INT auto_increment primary key,
    krcode int,
    nome VARCHAR(100) NOT NULL,
    FOREIGN KEY (krcode) REFERENCES KRCode(id)
);

CREATE TABLE Produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    setor_id INT,
    FOREIGN KEY (setor_id) REFERENCES Setores(id)
);

INSERT INTO KRCode (code) VALUE ('kr');

INSERT INTO Setores (krcode, nome) VALUES ( 1 , 'Eletrônicos');

INSERT INTO Produtos (nome, descricao, preco, setor_id) 
VALUES 
    ('Celular', 'Um celular top de linha', 999.99, 1),
    ('Notebook', 'Um notebook potente', 1999.99, 1),
    ('Smart TV', 'Uma TV inteligente de 50 polegadas', 799.99, 1),
    ('Tablet', 'Um tablet moderno com tela sensível ao toque', 499.99, 1),
    ('Home Theater', 'Um sistema de som de alta qualidade', 999.99, 1);

select * from user_client;
select * from KRcode;
select * from Produtos;
select * from Setores;

describe user_client;
describe KRcode;
describe Produtos;
describe Setores;