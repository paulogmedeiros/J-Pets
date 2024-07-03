CREATE DATABASE DB_JPETS_PRD;
USE DB_JPETS_PRD;

CREATE TABLE login(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(60) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL,
    tipo CHAR(3) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE empresas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  login_id INT UNIQUE NOT NULL,
  foto_perfil VARCHAR(150),
  nome_fantasia VARCHAR(150) UNIQUE NOT NULL,
  cnpj CHAR(14) UNIQUE NOT NULL,
  cep  CHAR(8),
  rua  VARCHAR(150),  
  bairro  VARCHAR(100) ,
  cidade  VARCHAR(100),
  uf  CHAR(2),
  numero_residencia VARCHAR(10),
  latitude FLOAT UNIQUE,
  longetude FLOAT UNIQUE,
  telefone VARCHAR(20) UNIQUE,
  dia_semana_inicio VARCHAR(13),
  dia_semana_fim VARCHAR(13),
  hora_abertura CHAR(5),
  hora_fechamento CHAR(5),
  nome_cupom VARCHAR(50),
  porcentagem_cupom CHAR(3),
  status_pagamento BOOLEAN DEFAULT FALSE,
  status_ativo BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_login_empresas FOREIGN KEY (login_id) REFERENCES login(id)
);

CREATE TABLE tutores_pets(
  id INT PRIMARY KEY AUTO_INCREMENT,
  login_id INT UNIQUE ,
  nome VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_login_tutores_pets FOREIGN KEY (login_id) REFERENCES login(id)
);

CREATE TABLE cartoes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    numero_cartao CHAR(16) NOT NULL UNIQUE,
    nome_completo VARCHAR(100) NOT NULL,
    data_vencimento CHAR(5) NOT NULL,
    cvv CHAR(3) NOT NULL,
    valor_conta DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE avaliacoes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  tutor_pet_id INT NOT NULL,
  empresa_id INT NOT NULL,
  numero_avaliacao INT,
  comentario_tutores_pets VARCHAR(1000),
  comentario_empresa VARCHAR(1000) ,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_tutores_pets_avaliacoes FOREIGN KEY (tutor_pet_id) REFERENCES tutores_pets(id),
  CONSTRAINT fk_empresas_avaliacoes FOREIGN KEY (empresa_id) REFERENCES empresas(id)
);

CREATE TABLE favoritos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  tutor_pet_id INT NOT NULL,
  empresa_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_tutores_pets_favoritos FOREIGN KEY ( tutor_pet_id ) REFERENCES tutores_pets(id),
  CONSTRAINT fk_empresas_favoritos FOREIGN KEY ( empresa_id ) REFERENCES empresas(id)
);


CREATE TABLE animais (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE servicos(
  id INT PRIMARY KEY AUTO_INCREMENT,
  animal_id INT NOT NULL,
  nome VARCHAR(100) NOT NULL,
  tipo CHAR(3) DEFAULT 'SVC',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_animais_servicos FOREIGN KEY ( animal_id ) REFERENCES animais (id)
);

CREATE TABLE produtos(
  id INT PRIMARY KEY AUTO_INCREMENT,
  animal_id INT NOT NULL,
  nome VARCHAR(100) NOT NULL,
  tipo CHAR(3) DEFAULT 'PDT',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_animais_produtos FOREIGN KEY ( animal_id ) REFERENCES animais (id)
);

CREATE TABLE marcas(
  id INT PRIMARY KEY AUTO_INCREMENT,
  produto_id INT NOT NULL,
  nome VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_produtos_marcas FOREIGN KEY ( produto_id ) REFERENCES produtos(id)
);

CREATE TABLE modelos(
  id INT PRIMARY KEY AUTO_INCREMENT,
  marca_id INT NOT NULL,
  nome VARCHAR(300) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_marcas_modelos FOREIGN KEY ( marca_id ) REFERENCES marcas(id)
);


CREATE TABLE empresas_animais(
  id INT PRIMARY KEY AUTO_INCREMENT,
  empresa_id INT NOT NULL,
  animal_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_empresas_empresas_animais FOREIGN KEY ( empresa_id ) REFERENCES empresas(id),
  CONSTRAINT fk_animais_empresas_animais FOREIGN KEY ( animal_id ) REFERENCES animais(id)
);

CREATE TABLE empresas_servicos(
  id INT PRIMARY KEY AUTO_INCREMENT,
  servico_id INT NOT NULL,
  empresa_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_empresas_empresas_servicos FOREIGN KEY ( empresa_id ) REFERENCES empresas(id),
  CONSTRAINT fk_servicos_empresas_servicos FOREIGN KEY ( servico_id ) REFERENCES servicos(id)
);

CREATE TABLE empresas_produtos(
  id INT PRIMARY KEY AUTO_INCREMENT,
  produto_id INT NOT NULL,
  empresa_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_empresas_empresas_produtos FOREIGN KEY ( empresa_id ) REFERENCES empresas(id),
  CONSTRAINT fk_produtos_empresas_produtos  FOREIGN KEY ( produto_id ) REFERENCES produtos(id)
);

CREATE TABLE empresas_marcas(
  id INT PRIMARY KEY AUTO_INCREMENT,
  marca_id INT NOT NULL,
  empresa_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_empresas_empresas_marcas FOREIGN KEY ( empresa_id ) REFERENCES empresas(id),
  CONSTRAINT fk_marcas_empresas_marcas  FOREIGN KEY ( marca_id ) REFERENCES marcas(id)
);

CREATE TABLE empresas_modelos(
  id INT PRIMARY KEY AUTO_INCREMENT,
  modelo_id INT NOT NULL,
  empresa_id INT NOT NULL,
  estoque BOOLEAN NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_empresas_empresas_modelos FOREIGN KEY ( empresa_id ) REFERENCES empresas(id),
  CONSTRAINT fk_modelos_empresas_modelos  FOREIGN KEY ( modelo_id ) REFERENCES modelos(id)
);

INSERT INTO animais (id,nome) VALUES
(1,'Cachorro'),
(2,'Gato'),
(3,'Pássaro'),
(4,'Peixe');

INSERT INTO servicos (id,animal_id,nome) VALUES
(1,1,'Veterinário'),
(2,1,'Banho e Tosa'),
(3,1,'Adestrador'),
(4,1,'Hospedagem Pet'),
(5,1,'Dog Walker'),
(6,1,'Pet Sitter'),
(7,1,'Creche Pet'),
(8,1,'Spa');

INSERT INTO produtos (id,animal_id,nome) VALUE
(1,1,'ração');

INSERT INTO marcas (id,produto_id,nome) VALUE
(1,1,'Pedigree');

INSERT INTO modelos (id,marca_id,nome) VALUES
(1,1,'Nutrição Essencial Carne para Cães Adultos'),
(2,1,'Cães Adultos de Porte Pequeno e Mini Sabor Carne e Vegetais'),
(3,1,'Carne e Vegetais Cães Adultos Raças Médias e Grandes'); 

INSERT INTO login (email,senha,tipo) VALUE
('jpetsADM@gmail.com', '$2a$10$NyyziOJOwjTFb6QhCUUXlOMIHWMWNaYN4dHVjPoNxaF0qrehwLAg2', 'ADM');

INSERT INTO cartoes (numero_cartao,nome_completo,data_vencimento,cvv,valor_conta) VALUES
("5162924598813451","joão felipe silva","03/24","265",1234.56),
("4108634623561342","matheus costa","03/24","265",12.56),
("4392672037645123","marcelo ferreira","03/24","265",260.00);