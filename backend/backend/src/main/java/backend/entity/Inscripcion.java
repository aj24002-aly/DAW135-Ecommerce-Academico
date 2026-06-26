package backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "inscripciones")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Inscripcion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "estudiante_id")
    private Estudiante estudiante;

    @ManyToOne
    @JoinColumn(name = "producto_id")
    private Producto producto;

    private String fechaInscripcion;

    private String estado; // "Inscrito", "Completado", "Cancelado"

    private Integer progreso; // 0 - 100
}