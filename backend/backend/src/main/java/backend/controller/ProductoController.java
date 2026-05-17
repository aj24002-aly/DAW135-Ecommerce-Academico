package backend.controller;

import backend.dto.ProductoDTO;
import backend.service.ProductoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/productos")
@Tag(name = "Productos", description = "Operaciones sobre productos")
public class ProductoController {

    private final ProductoService service;

    public ProductoController(ProductoService service) {
        this.service = service;
    }

    // GET ALL
    @GetMapping
    @Operation(summary = "Listar todos los productos")
    public List<ProductoDTO> obtenerTodos() {
        return service.obtenerTodos();
    }

    // GET BY ID
    @GetMapping("/{id}")
    @Operation(summary = "Obtener producto por ID")
    public ProductoDTO obtenerPorId(@PathVariable Long id) {
        return service.obtenerPorId(id);
    }

    // POST
    @PostMapping
    @Operation(summary = "Crear producto")
    public ProductoDTO crear(@RequestBody ProductoDTO dto) {
        return service.crear(dto);
    }

    // PUT
    @PutMapping("/{id}")
    @Operation(summary = "Actualizar producto")
    public ProductoDTO actualizar(@PathVariable Long id, @RequestBody ProductoDTO dto) {
        return service.actualizar(id, dto);
    }

    // DELETE
    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar producto")
    public void eliminar(@PathVariable Long id) {
        service.eliminar(id);
    }
}