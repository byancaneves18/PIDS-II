package com.equanime.equanime.api;

import java.sql.SQLException;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import com.equanime.equanime.config.MailDispatch;
import com.equanime.equanime.controllers.UsuarioController;
import com.equanime.equanime.models.Usuario;

@Service
public class ApiRecuperar {
	
	@Autowired
	UsuarioController user;
	@Autowired
	MailDispatch mailDispatch = new MailDispatch();
	
	private JavaMailSender javaMailSender;
	
	public boolean RecuperarUsuario(Usuario user) throws MessagingException, MailException, InterruptedException {
		
		try {
			mailDispatch.sendNotificaitoin(user, this.EscreverMensagemDeRecuperacao(user), "Recuperação de senha Equânime");
			return true;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;
	}
	
	
	//Escreve a mensagem que aparecerá no E-mail
		private String EscreverMensagemDeRecuperacao(Usuario usuario) throws SQLException {
			
			String mensagem;
			String novaSenha = GerarSenhaDeUsuario(8,usuario);
			
			//TODO encapsular Mensagem padrao no banco de dados se der certo
			mensagem = "Ola Caro(a) "+usuario.getNome()+", a sua nova senha do Equânime é : "+novaSenha;
			
			return mensagem;
			
		}
		
		
		//Gera uma senha com a quantidade de caracteres fornecida
		private String GerarSenhaDeUsuario(int qtdeCaracteres,Usuario usuario ) throws SQLException {
			
			String novasenha;
			
		    String[] caracteres = { "0", "1", "b", "2", "4", "5", "6", "7", "8",
		                "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
		                "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
		                "x", "y", "z"};
		    
			StringBuilder senha = new StringBuilder();

	        for (int i = 0; i < qtdeCaracteres; i++) {
	            int posicao = (int) (Math.random() * caracteres.length);
	            senha.append(caracteres[posicao]);
	        }
	        
	        novasenha = senha.toString();
	        
	        usuario.setSenha(novasenha);
	        
	        try {
	        	//Salva nova senha no banco
	        	user.save(usuario);
	        
	        }catch (Exception e) {
				// TODO: handle exception
			}
	        
	        //TODO escrever senha no banco de dados
	        System.out.println("Nova senha:" + novasenha);
	        return novasenha;
			
		}
}
