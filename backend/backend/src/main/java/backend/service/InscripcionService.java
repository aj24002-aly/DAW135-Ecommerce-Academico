package backend.service;

import backend.dto.InscripcionDTO;
import backend.entity.Estudiante;
import backend.entity.Inscripcion;
import backend.entity.Producto;
import backend.repository.EstudianteRepository;
import backend.repository.InscripcionRepository;
import backend.repository.ProductoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InscripcionService {

    private final InscripcionRepository repository;
    private final EstudianteRepository estudianteRepository;
    private final ProductoRepository productoRepository;

    public List<Inscripcion> listar() {
        return repository.findAll();
    }

    public Inscripcion guardar(InscripcionDTO dto) {

        Estudiante estudiante = estudianteRepository.findById(dto.getEstudianteId())
                .orElseThrow(() -> new RuntimeException("Estudiante no encontrado: " + dto.getEstudianteId()));

        Producto producto = productoRepository.findById(dto.getProductoId())
                .orElseThrow(() -> new RuntimeException("Producto no encontrado: " + dto.getProductoId()));

        Inscripcion inscripcion = Inscripcion.builder()
                .estudiante(estudiante)
                .producto(producto)
                .fechaInscripcion(dto.getFechaInscripcion())
                .estado(dto.getEstado())
                .progreso(dto.getProgreso())
                .build();

        return repository.save(inscripcion);
    }

    public Inscripcion actualizar(Long id, InscripcionDTO dto) {

        Inscripcion inscripcion = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Inscripción no encontrada: " + id));

        Estudiante estudiante = estudianteRepository.findById(dto.getEstudianteId())
                .orElseThrow(() -> new RuntimeException("Estudiante no encontrado: " + dto.getEstudianteId()));

        Producto producto = productoRepository.findById(dto.getProductoId())
                .orElseThrow(() -> new RuntimeException("Producto no encontrado: " + dto.getProductoId()));

        inscripcion.setEstudiante(estudiante);
        inscripcion.setProducto(producto);
        inscripcion.setFechaInscripcion(dto.getFechaInscripcion());
        inscripcion.setEstado(dto.getEstado());
        inscripcion.setProgreso(dto.getProgreso());

        return repository.save(inscripcion);
    }

    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}