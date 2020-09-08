package com.equanime.equanime.persistencia;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class ConexaoPostgres {

	private static ConexaoPostgres instance;
	private Connection con; 

	public ConexaoPostgres() {
		
		try {
			Conectar("jdbc:postgresql://localhost:5433/postgres", "postgres", "");
		} catch (SQLException e) {
			e.printStackTrace();
			System.out.println("ERRO AO SE CONECTAR COM BANCO DE DADOS");
		}
	}
	
	public void Conectar(String endereco, String usuario, String senha) throws SQLException {
		con = DriverManager.getConnection(endereco,usuario,senha);
	}

	
	public PreparedStatement getPreparedStatement (String sql) throws SQLException {
		return this.con.prepareStatement(sql);
	}
	
	public static ConexaoPostgres getInstance() throws SQLException {
		if(instance==null) {
			instance = new ConexaoPostgres();
		}
		return instance;
	}
	
}
