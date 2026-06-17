package backend.config;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DotenvConfig {

    static {
        Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();

        setIfPresent("DB_USER", dotenv.get("DB_USER"));
        setIfPresent("DB_PASS", dotenv.get("DB_PASS"));
        setIfPresent("DB_NAME", dotenv.get("DB_NAME"));
    }

    private static void setIfPresent(String key, String value) {
        if (value != null) {
            System.setProperty(key, value);
        }
    }
}