package teste;

import java.io.FileNotFoundException;
import java.util.Scanner;

import controle.Controle_GerarRelatorios;

public class Teste_gerarPDF {

	public static void main(String[] args) {
		
		System.out.println("----------------------Pressione enter para gerar um pdf----------------------\n\n\n");
		Scanner scanner = new Scanner(System.in);
		int i = scanner.nextInt();
		
		
		Controle_GerarRelatorios controle_GerarRelatorios = new Controle_GerarRelatorios();
		
		try {
			controle_GerarRelatorios.CriarArquivoPDF("Relatorio.pdf");
			System.out.println("----------------------DEU CERTO----------------------\n\n\n");
		} catch (FileNotFoundException e) {
			System.out.println("----------------------KIDS GRACA----------------------\n\n\n");
			e.printStackTrace();
		}
	/*	finally {
			System.out.println("----------------------DEU CERTO----------------------\n\n\n");
		}*/
		
		
		
	}
	
}
