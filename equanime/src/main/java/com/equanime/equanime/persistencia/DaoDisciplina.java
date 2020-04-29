package com.equanime.equanime.persistencia;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.equanime.equanime.models.ModeloDisciplina;



public class DaoDisciplina {

	private static String TabelaNome = "disciplina";

	public void criar(ModeloDisciplina disciplina) throws SQLException {
		
		
		String sql = "insert into "+ TabelaNome +" (nome,id_periodo)  values(?,?)";
		PreparedStatement pst = ConexaoPostgres.getInstance().getPreparedStatement(sql);
		
	
		pst.setString(1, disciplina.getNome());
		pst.setInt(2, disciplina.getId_periodo());
		
		pst.executeUpdate();
		pst.close();
	}
	
	public void editar(ModeloDisciplina disciplina) throws SQLException {
		
		String sql = "update "+TabelaNome+" set nome = ?,id_periodo = ? where id_disciplina = ?  ";
		PreparedStatement pst = ConexaoPostgres.getInstance().getPreparedStatement(sql);
		
		
		pst.setString(1, disciplina.getNome());
		pst.setInt(2, disciplina.getId_periodo());
		pst.setInt(3, disciplina.getId_disciplina());
		
		pst.executeUpdate();
		pst.close();
	}
	
	public void excluir(int id_disciplina) throws SQLException {
		String sql = "delete from " +TabelaNome+ " where id_disciplina = ?";
		PreparedStatement pst = ConexaoPostgres.getInstance().getPreparedStatement(sql);
		
		
		pst.setInt(1, id_disciplina);
		
		pst.executeUpdate();
		pst.close();
	}
	
	public ModeloDisciplina exibir(int id_disciplina) throws SQLException {
		
		String sql = "select * from "+TabelaNome+" where id_disciplina = ? ";
		PreparedStatement pst = ConexaoPostgres.getInstance().getPreparedStatement(sql);
		pst.setInt(1, id_disciplina);
		
		ResultSet rs = pst.executeQuery();
		rs.next();
		return new ModeloDisciplina(rs.getInt("id_disciplina"),rs.getInt("id_periodo"),rs.getString("nome"));
	
	}
	
	public List<ModeloDisciplina> listar() throws SQLException {
		
		String sql = "select * from "+TabelaNome;
		PreparedStatement pst = ConexaoPostgres.getInstance().getPreparedStatement(sql);
		
		ResultSet rs =  pst.executeQuery();
		 
		List<ModeloDisciplina> listaDeDisciplinas = new ArrayList<>();
		
		 while (rs.next()) {
			 ModeloDisciplina disciplina = new ModeloDisciplina(rs.getInt("id_disciplina"),rs.getInt("id_periodo"),rs.getString("nome"));
			 listaDeDisciplinas.add(disciplina);
		 }
		
		return listaDeDisciplinas;		
	}

	public static String getTabelaNome() {
		return TabelaNome;
	}

	public static void setTabelaNome(String tabelaNome) {
		TabelaNome = tabelaNome;
	}
	
	
	
}
