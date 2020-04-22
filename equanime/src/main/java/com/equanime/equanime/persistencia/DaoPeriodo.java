package com.equanime.equanime.persistencia;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.equanime.equanime.models.ModeloPeriodo;

public class DaoPeriodo {

	private static String TabelaNome = "periodo";
	
	public List<ModeloPeriodo> listar() throws SQLException {
		
		String sql = "select * from "+TabelaNome;
		PreparedStatement pst = ConexaoPostgres.getInstance().getPreparedStatement(sql);
		
		ResultSet rs =  pst.executeQuery();
		 
		List<ModeloPeriodo> listaDePeriodos = new ArrayList<>();
		
		 while (rs.next()) {
			 ModeloPeriodo periodo = new ModeloPeriodo(rs.getInt("id_periodo"),rs.getString("periodo_semestre"));
			 listaDePeriodos.add(periodo);
		 }
		
		return listaDePeriodos;		
	}
	
	
	public ModeloPeriodo buscarPorId(String id) throws SQLException {
		
		
		String sql = "select * from "+TabelaNome+" Where id_periodo = "+id;
		PreparedStatement pst = ConexaoPostgres.getInstance().getPreparedStatement(sql);
		
		ResultSet rs =  pst.executeQuery();
		rs.next();
		return new ModeloPeriodo(rs.getInt("id_periodo"),rs.getString("periodo_semestre"));
				
	}
	
}
