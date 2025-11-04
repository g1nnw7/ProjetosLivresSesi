-- Banco de dados (versão aprimorada mas simples)
CREATE DATABASE bdd_sa;
USE bdd_sa;

-- Tabela de usuários (melhorada mas simples)
CREATE TABLE usuarios (
  id_usuario INT AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(100) NOT NULL,
  senha VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  UNIQUE (email)
);

-- Tabela de alimentos (com categorias básicas)
CREATE TABLE alimentos (
  id_alimento INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  categoria VARCHAR(30) NOT NULL, -- Ex: 'carboidrato', 'proteina', 'fruta'
  gramas INT NOT NULL,
  calorias DECIMAL(6,2) NOT NULL,
  proteinas DECIMAL(5,2) NOT NULL,
  carboidratos DECIMAL(5,2) NOT NULL,
  gorduras DECIMAL(5,2) NOT NULL,
  contem_gluten BOOLEAN DEFAULT FALSE,
  contem_lactose BOOLEAN DEFAULT FALSE
);

-- Tabela de planos (com pequenas melhorias)
CREATE TABLE planos (
  id_plano INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  idade INT NOT NULL,
  sexo VARCHAR(20) NOT NULL,
  altura INT NOT NULL,
  peso DECIMAL(5,2) NOT NULL,
  objetivo VARCHAR(50) NOT NULL, -- 'perda de peso', 'ganho de massa', 'manutencao'
  atividade VARCHAR(50) NOT NULL,
  condicoes VARCHAR(100),
  alergias VARCHAR(100),
  imc DECIMAL(5,2) NOT NULL,
  calorias INT NOT NULL,
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

SELECT * FROM alimentos;

-- Tabela de refeições (nova tabela simples)
CREATE TABLE refeicoes (
  id_refeicao INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL, -- 'Café da manhã', 'Almoço', etc
  descricao VARCHAR(200)
);

-- Tabela de plano_refeicao (relacionamento simples)
CREATE TABLE plano_refeicao (
  id_plano INT NOT NULL,
  id_refeicao INT NOT NULL,
  ordem INT NOT NULL,
  PRIMARY KEY (id_plano, id_refeicao),
  FOREIGN KEY (id_plano) REFERENCES planos(id_plano),
  FOREIGN KEY (id_refeicao) REFERENCES refeicoes(id_refeicao)
);

-- Tabela de refeicao_alimento (relacionamento simples)
CREATE TABLE refeicao_alimento (
  id_refeicao INT NOT NULL,
  id_alimento INT NOT NULL,
  quantidade INT NOT NULL,
  PRIMARY KEY (id_refeicao, id_alimento),
  FOREIGN KEY (id_refeicao) REFERENCES refeicoes(id_refeicao),
  FOREIGN KEY (id_alimento) REFERENCES alimentos(id_alimento)
);
-- Inserção dos dados básicos (mantendo seu estilo)
INSERT INTO alimentos (nome, categoria, gramas, calorias, proteinas, carboidratos, gorduras, contem_gluten, contem_lactose) VALUES
('Arroz integral', 'carboidrato', 100, 130, 2.6, 28, 1.0, FALSE, FALSE),
('Feijão carioca', 'proteina', 100, 76, 5.0, 13, 0.6, FALSE, FALSE),
('Peito de frango grelhado', 'proteina', 100, 165, 31, 0, 3.6, FALSE, FALSE),
('Salmão grelhado', 'proteina', 100, 208, 20, 0, 13.4, FALSE, FALSE),
('Ovo cozido', 'proteina', 50, 78, 6.3, 0.6, 5.3, FALSE, FALSE),
('Banana prata', 'fruta', 100, 89, 1.1, 23, 0.3, FALSE, FALSE),
('Arroz branco', 'carboidrato', 100, 130, 2.5, 28, 0.2, FALSE, FALSE),
('Feijão preto', 'proteina', 100, 140, 9, 23, 1.0, FALSE, FALSE),
('Macarrão', 'carboidrato', 100, 150, 5, 30, 0.6, TRUE, FALSE),
('Pão francês', 'carboidrato', 100, 270, 8, 50, 1.5, TRUE, FALSE),
('Leite integral', 'laticínio', 100, 61, 3.3, 4.9, 3.5, FALSE, TRUE),
('Manteiga', 'gordura', 100, 720, 0, 0, 81, FALSE, TRUE),
('Queijo muçarela', 'laticínio', 100, 320, 22, 1, 26, FALSE, TRUE),
('Presunto', 'proteina', 100, 130, 16, 2, 5, FALSE, TRUE),
('Ovo frito', 'proteina', 100, 190, 12, 1, 15, FALSE, FALSE),
('Café com açúcar', 'bebida', 100, 25, 0, 6, 0, FALSE, FALSE),
('Refrigerante', 'bebida', 100, 42, 0, 11, 0, FALSE, FALSE),
('Biscoito recheado', 'carboidrato', 100, 470, 6, 70, 21, TRUE, TRUE),
('Frango grelhado', 'proteina', 100, 165, 31, 0, 3, FALSE, FALSE),
('Batata doce', 'carboidrato', 100, 86, 1.6, 20, 0.2, FALSE, FALSE),
('Brócolis cozido', 'leguminosa', 100, 35, 2.8, 7, 0.3, FALSE, FALSE),
('Azeite de oliva', 'gordura', 100, 880, 0, 0, 100, FALSE, FALSE),
('Pão integral', 'carboidrato', 100, 250, 8, 40, 2, TRUE, FALSE),
('Banana', 'fruta', 100, 89, 1.1, 23, 0.3, FALSE, FALSE),
('Aveia em flocos', 'carboidrato', 100, 380, 13, 67, 7, TRUE, FALSE),
('Peito de peru', 'proteina', 100, 104, 22, 0.2, 2, FALSE, TRUE),
('Iogurte natural', 'laticínio', 100, 61, 3.5, 4.7, 3.4, FALSE, TRUE),
('Leite desnatado', 'laticínio', 100, 35, 3.2, 5, 1, FALSE, TRUE),
('Tilápia grelhada', 'proteina', 100, 130, 26, 0, 1.5, FALSE, FALSE),
('Quinoa cozida', 'carboidrato', 100, 120, 4.3, 21, 1.9, FALSE, FALSE),
('Tofu', 'proteina vegetal', 100, 76, 8.2, 1.5, 4.8, FALSE, FALSE),
('Abacate', 'fruta', 100, 160, 2, 9, 15, FALSE, FALSE),
('Maçã', 'fruta', 100, 52, 0.3, 14, 0.2, FALSE, FALSE),
('Cenoura crua', 'leguminosa', 100, 41, 0.9, 10, 0.2, FALSE, FALSE),
('Abobrinha cozida', 'leguminosa', 100, 17, 1.2, 3, 0.1, FALSE, FALSE),
('Tomate', 'legume', 100, 18, 0.9, 3.9, 0.2, FALSE, FALSE),
('Couve refogada', 'leguminosa', 100, 33, 2.9, 6.2, 0.3, FALSE, FALSE),
('Granola', 'carboidrato', 100, 470, 8, 64, 12, TRUE, FALSE),
('Amêndoas', 'oleaginosa', 100, 580, 21, 22, 49, FALSE, FALSE),
('Castanha de caju', 'oleaginosa', 100, 560, 15, 30, 43, FALSE, FALSE),
('Nozes', 'oleaginosa', 100, 650, 15, 14, 65, FALSE, FALSE),
('Leite de soja', 'bebida vegetal', 100, 33, 3.1, 3.4, 1.9, FALSE, FALSE),
('Whey protein', 'suplemento', 100, 400, 80, 8, 5, TRUE, TRUE),
('Batata inglesa', 'carboidrato', 100, 77, 1.9, 17, 0.2, FALSE, FALSE),
('Mandioca cozida', 'carboidrato', 100, 120, 0.5, 28, 0.3, FALSE, FALSE),
('Cuscuz', 'carboidrato', 100, 110, 3, 23, 1, TRUE, FALSE),
('Repolho cru', 'leguminosa', 100, 25, 1.2, 6, 0.1, FALSE, FALSE),
('Morango', 'fruta', 100, 32, 0.7, 8, 0.3, FALSE, FALSE),
('Melancia', 'fruta', 100, 30, 0.6, 8, 0.2, FALSE, FALSE),
('Pera', 'fruta', 100, 57, 0.4, 15, 0.1, FALSE, FALSE),
('Uva', 'fruta', 100, 69, 0.7, 18, 0.1, FALSE, FALSE),
('Ervilha cozida', 'leguminosa', 100, 84, 5.4, 14, 0.4, FALSE, FALSE),
('Grão-de-bico', 'leguminosa', 100, 160, 9, 27, 3, FALSE, FALSE),
('Lentilha cozida', 'leguminosa', 100, 116, 9, 20, 0.4, FALSE, FALSE),
('Hambúrguer caseiro', 'proteina', 100, 240, 20, 0, 18, FALSE, FALSE),
('Queijo cottage', 'laticínio', 100, 100, 11, 2, 4, FALSE, TRUE),
('Queijo minas', 'laticínio', 100, 330, 22, 1.5, 26, FALSE, TRUE),
('Queijo parmesão', 'laticínio', 100, 430, 36, 1, 29, FALSE, TRUE),
('Chocolate amargo 70%', 'doce', 100, 590, 7, 32, 42, TRUE, TRUE),
('Maçã gala', 'fruta', 100, 52, 0.4, 14, 0.2, FALSE, FALSE),
('Laranja', 'fruta', 100, 47, 0.9, 12, 0.2, FALSE, FALSE),
('Pêssego', 'fruta', 100, 39, 0.7, 10, 0.2, FALSE, FALSE),
('Abacaxi', 'fruta', 100, 50, 0.5, 13, 0.1, FALSE, FALSE),
('Uva roxa', 'fruta', 100, 69, 0.7, 18, 0.1, FALSE, FALSE),
('Carne moída bovina (cozida)', 'proteina', 100, 250, 26, 0, 15, FALSE, FALSE),
('Omelete simples', 'proteina', 100, 180, 11, 1, 14, FALSE, FALSE),
('Soja cozida', 'leguminosa', 100, 173, 16, 10, 9, FALSE, FALSE),
('Pipoca sem óleo', 'carboidrato', 100, 310, 10, 60, 5, TRUE, FALSE),
('Barra de cereal', 'carboidrato', 100, 400, 7, 65, 10, TRUE, TRUE),
('Iogurte de frutas', 'laticínio', 100, 78, 3.5, 12, 2.5, FALSE, TRUE);

INSERT INTO refeicoes (nome, descricao) VALUES
('Café da manhã', 'Refeição matinal'),
('Lanche da manhã', 'Pequeno lanche'),
('Almoço', 'Refeição principal'),
('Lanche da tarde', 'Lanche vespertino'),
('Jantar', 'Última refeição do dia');