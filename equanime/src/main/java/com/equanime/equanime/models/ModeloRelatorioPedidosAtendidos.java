package com.equanime.equanime.models;

import java.util.ArrayList;
import java.util.List;

public class ModeloRelatorioPedidosAtendidos {

	List<String> linhas;
	
	
	
	public void novaLinha(String linha) {
		
		if(linhas == null) {
			
			linhas = new ArrayList<String>();
		}
		
		linhas.add(linha);
		
	}
	
	
	public String getLinha(int index){
		
		
		return linhas.get(index);
	}
	
	
	public List<String> getAllLinhas(){
		
		return linhas;
		
	}
	
	
}
