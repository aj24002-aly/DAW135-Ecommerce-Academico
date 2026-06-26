package backend.dto;

import lombok.Data;

@Data
public class InscripcionDTO {

    private Long estudianteId;
    private Long productoId;
    private String fechaInscripcion;
    private String estado;
    private Integer progreso;
}