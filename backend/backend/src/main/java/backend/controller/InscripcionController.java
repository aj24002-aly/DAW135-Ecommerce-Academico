package backend.controller;

import backend.dto.InscripcionDTO;
import backend.entity.Inscripcion;
import backend.service.InscripcionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inscripciones")
@RequiredArgsConstructor
@CrossOrigin("*")
public class InscripcionController {

    private final InscripcionService service;

    @GetMapping
    public List<Inscripcion> listar() {
        return service.listar();
    }

    @PostMapping
    public Inscripcion crear(@RequestBody InscripcionDTO dto) {
        return service.guardar(dto);
    }

    @PutMapping("/{id}")
    public Inscripcion actualizar(
            @PathVariable Long id,
            @RequestBody InscripcionDTO dto) {

        return service.actualizar(id, dto);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        service.eliminar(id);
    }
}