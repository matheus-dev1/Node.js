CREATE DATABASE blog_node;

CREATE TABLE blog.postagens (
    id int not null auto_increment primary key,
    titulo varchar(80),
    descricao text
)