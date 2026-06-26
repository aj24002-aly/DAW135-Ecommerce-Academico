package backend.service;

import backend.dto.ProductoDTO;
import backend.entity.Producto;
import backend.repository.ProductoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductoService {

    private final ProductoRepository repo;

    public ProductoService(ProductoRepository repo) {
        this.repo = repo;
    }

    // GET ALL
    public List<ProductoDTO> obtenerTodos() {
        return repo.findAll()
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    // GET BY ID
    public ProductoDTO obtenerPorId(Long id) {
        Producto p = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado"));
        return toDTO(p);
    }

    // CREATE
    public ProductoDTO crear(ProductoDTO dto) {
        Producto p = toEntity(dto);
        return toDTO(repo.save(p));
    }

    // UPDATE
    public ProductoDTO actualizar(Long id, ProductoDTO dto) {

        Producto p = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado"));

        p.setNombre(dto.getNombre());
        p.setInstructor(dto.getInstructor());
        p.setCategoria(dto.getCategoria());
        p.setEstado(dto.getEstado());
        p.setDuracion(dto.getDuracion());
        p.setPrecio(dto.getPrecio());
        p.setDescripcion(dto.getDescripcion());

        return toDTO(repo.save(p));
    }

    // DELETE
    public void eliminar(Long id) {
        repo.deleteById(id);
    }

    // DTO
    private ProductoDTO toDTO(Producto p) {

        ProductoDTO dto = new ProductoDTO();

        dto.setId(p.getId());
        dto.setNombre(p.getNombre());
        dto.setInstructor(p.getInstructor());
        dto.setCategoria(p.getCategoria());
        dto.setEstado(p.getEstado());
        dto.setDuracion(p.getDuracion());
        dto.setPrecio(p.getPrecio());
        dto.setDescripcion(p.getDescripcion());

        return dto;
    }

    // ENTITY
    private Producto toEntity(ProductoDTO dto) {

        Producto p = new Producto();

        p.setId(dto.getId());
        p.setNombre(dto.getNombre());
        p.setInstructor(dto.getInstructor());
        p.setCategoria(dto.getCategoria());
        p.setEstado(dto.getEstado());
        p.setDuracion(dto.getDuracion());
        p.setPrecio(dto.getPrecio());
        p.setDescripcion(dto.getDescripcion());

        return p;
    }
}