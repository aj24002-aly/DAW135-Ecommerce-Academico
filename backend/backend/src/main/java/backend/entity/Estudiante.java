package backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="estudiantes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Estudiante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private String apellido;

    @Column(unique = true)
    private String email;

    private String telefono;

    private String estado;

    private String fechaRegistro;
}