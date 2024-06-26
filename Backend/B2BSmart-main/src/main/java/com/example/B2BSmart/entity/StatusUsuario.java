package com.example.B2BSmart.entity;

public enum StatusUsuario {

	//Criando os tipos pre determinados para realizar o cadastro
	CLIENTE("cliente"), 
	FORNECEDOR("fornecedor");

	private String role;

	//Construtor para inserir as roles nas demais classes
	StatusUsuario(String role) {
		this.role = role;
	}
	
	//Metodo utilizado para pegar a role indicada
	public String getRole() {
		return role;
	}
}
