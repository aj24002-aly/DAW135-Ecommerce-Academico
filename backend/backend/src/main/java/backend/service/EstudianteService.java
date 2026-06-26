package backend.service;

import backend.dto.EstudianteDTO;
import backend.entity.Estudiante;
import backend.repository.EstudianteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EstudianteService {

    private final EstudianteRepository repository;

    public List<Estudiante> listar() {
        return repository.findAll();
    }

    public Estudiante guardar(EstudianteDTO dto) {

        Estudiante estudiante = Estudiante.builder()
                .nombre(dto.getNombre())
                .apellido(dto.getApellido())
                .email(dto.getEmail())
                .telefono(dto.getTelefono())
                .estado(dto.getEstado())
                .fechaRegistro(dto.getFechaRegistro())
                .build();

        return repository.save(estudiante);
    }

    public Estudiante actualizar(Long id, EstudianteDTO dto){

        Estudiante estudiante = repository.findById(id)
                .orElseThrow();

        estudiante.setNombre(dto.getNombre());
        estudiante.setApellido(dto.getApellido());
        estudiante.setEmail(dto.getEmail());
        estudiante.setTelefono(dto.getTelefono());
        estudiante.setEstado(dto.getEstado());
        estudiante.setFechaRegistro(dto.getFechaRegistro());

        return repository.save(estudiante);
    }

    public void eliminar(Long id){
        repository.deleteById(id);
    }

}