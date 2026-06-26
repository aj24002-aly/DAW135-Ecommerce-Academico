package backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductoDTO {

    private Long id;
    private String nombre;
    private String instructor;
    private String categoria;
    private String estado;
    private Integer duracion;
    private Double precio;
    private String descripcion;
}