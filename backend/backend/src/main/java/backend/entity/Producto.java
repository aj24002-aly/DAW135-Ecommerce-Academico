package backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "productos")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private String instructor;

    private String categoria;

    private String estado;

    private Integer duracion;

    private Double precio;

    @Column(length = 1000)
    private String descripcion;
}