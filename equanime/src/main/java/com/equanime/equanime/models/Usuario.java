package com.equanime.equanime.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="usuario")
public class Usuario implements Serializable {
	
	//private static final long serialVersionUID = -3009157732242241606L;
	/*public Usuario (String nome, String senha, Long cpf, String email,Integer papel, String cargaHoraria, String cidade) {
		this.nome = nome;
		this.senha = senha;
		this.cpf = cpf;
		this.email = email;
		this.papel = papel;
		this.cargaHoraria = cargaHoraria;
		this.cidade = cidade;
	}*/
	
	@Id
	@GeneratedValue
	private Long id;
	
	@Column(name= "nome")
	private String nome;
	
	@Column(name="senha")
	private String senha;
	
	@Column(name="cpf")
	private String cpf;
	
	@Column(name="email")
	private String email;
	
	@Column(name="carga_horaria")
	private Integer cargaHoraria;
	
	@Column(name="telefone")
	private String telefone;
	
	@Column(name="papel")
	private String papel;
	
	@Column(name="cidade")
	private String cidade;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPapel() {
		return papel;
	}

	public void setPapel(String papel) {
		this.papel = papel;
	}

	public Integer getCargaHoraria() {
		return cargaHoraria;
	}
	
	public void setCargaHoraria(Integer cargaHoraria) {
		this.cargaHoraria = cargaHoraria;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	


}
