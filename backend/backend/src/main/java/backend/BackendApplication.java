package backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import backend.repository.UsuarioRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.CommandLineRunner;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
@Bean
    CommandLineRunner testDB(UsuarioRepository repo) {
        return args -> {
            System.out.println("Usuarios en DB: " + repo.findAll());
        };
    }
}
