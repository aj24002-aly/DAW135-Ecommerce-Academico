package backend.config;

import io.swagger.v3.oas.models.*;
import io.swagger.v3.oas.models.info.*;
import org.springframework.context.annotation.*;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("DAW Ecommerce Académico API")
                        .version("1.0")
                        .description("API REST para la gestión de usuarios, productos educativos y pedidos dentro de un sistema de ecommerce académico."));
    }
}