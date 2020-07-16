package com.equanime.equanime.controllers;

import java.io.Serializable;
import java.sql.SQLException;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.equanime.equanime.api.ApiRecuperar;
import com.equanime.equanime.config.MailDispatch;
import com.equanime.equanime.models.Usuario;
import com.equanime.equanime.repository.UsuarioRepository;
import com.sun.xml.bind.marshaller.Messages;

import javassist.tools.rmi.ObjectNotFoundException;

@RestController
public class RecuperarController {
	@Autowired
	UsuarioRepository userRep;
	
	@Autowired
	ApiRecuperar apiRecuperar;

	
	//	mailDispatch = new MailDispatch("equanimeapptest@gmail.com", "Equanime2019");//pode ser qualquer conta desde que seja gmail
	
	@RequestMapping(value="/recuperar", method = RequestMethod.POST)
	@ResponseBody
	public String RecuperarSenha(@RequestBody String value) throws MessagingException, org.json.simple.parser.ParseException, ObjectNotFoundException, MailException, InterruptedException {
		
		Usuario usuario = new Usuario();
		Iterable<Usuario> lista = userRep.findAll();
		
		JSONParser parser = new JSONParser();
		JSONObject json = (JSONObject) parser.parse(value);
		String  cpf;
		
		cpf = json.get("cpf").toString();

		for(Usuario obj: lista) {
			System.out.println("usuário: " + obj.getCpf());
			
			if(obj.getCpf().equals(cpf)) {
				
				if(apiRecuperar.RecuperarUsuario(obj)) {
					System.out.println("usuário: " + cpf);
					return "entrou na função e recuperou";
				}
				
			}else {
				System.out.println("Usuário não existe para recuperar a senha!" + cpf);
				return "não recuperou";
			}
		}
		return "não recuperou";
	}

	
}
