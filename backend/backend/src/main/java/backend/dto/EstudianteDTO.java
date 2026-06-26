package backend.dto;

import lombok.Data;

@Data
public class EstudianteDTO {

    private String nombre;
    private String apellido;
    private String email;
    private String telefono;
    private String estado;
    private String fechaRegistro;

}