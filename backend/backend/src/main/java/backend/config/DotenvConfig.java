package backend.config;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DotenvConfig {

    static {
        Dotenv dotenv = Dotenv.load();

        System.setProperty("DB_USER", dotenv.get("DB_USER"));
        System.setProperty("DB_PASS", dotenv.get("DB_PASS"));
        System.setProperty("DB_NAME", dotenv.get("DB_NAME"));
    }
}