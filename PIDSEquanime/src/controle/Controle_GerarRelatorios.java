package controle;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;

import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;

//Necesssita das bibliotecas itext para funcionar, slfj4api e slfj4simple
public class Controle_GerarRelatorios {

	
	//falar pra usuário fechar o arquivo aberto no tratamento do erro
	public void CriarArquivoPDF(String path) throws FileNotFoundException{
		
		File file = new  File(path);
		FileOutputStream fos = new FileOutputStream(file);  
		PdfWriter pdfwriter = new PdfWriter(fos);
		PdfDocument pdfDocument = new PdfDocument(pdfwriter);
		Document document = new Document(pdfDocument);
		document.add(new Paragraph(GerarRelatorio()));
		document.close();
		
		
	}
	
	public void BuscarInformacoes() {}
	
	public String GerarRelatorio() {
		return "Pedido tal-------------------Atendido\n"+"Pedido tal-------------------Não Atendido\n"+"Pedido tal-------------------Não Atendido\n"+"Pedido tal-------------------Atendido\n";
		
	}
}
