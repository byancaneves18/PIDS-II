package com.equanime.equanime.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.equanime.equanime.models.Usuario;

@Service
public class MailDispatch {

	   private JavaMailSender javaMailSender;

		@Autowired
		public MailDispatch(JavaMailSender javaMailSender){
			this.javaMailSender = javaMailSender;
		}

		public MailDispatch() {
			// TODO Auto-generated constructor stub
		}

		@Async
		public void sendNotificaitoin(Usuario user, String mensagem,String assunto) throws MailException, InterruptedException {

			System.out.println("Sleeping now...");
	        Thread.sleep(10000);

	        System.out.println("Enviando e-mail para: "+user.getEmail()+" ...");

	        SimpleMailMessage mail = new SimpleMailMessage();
			mail.setTo(user.getEmail());
			mail.setSubject(assunto);
			mail.setText(mensagem);
			javaMailSender.send(mail);

			System.out.println("Email enviado com sucesso!");
		}

		
}
