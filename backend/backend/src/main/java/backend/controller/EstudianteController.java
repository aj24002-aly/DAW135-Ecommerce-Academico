package backend.controller;

import backend.dto.EstudianteDTO;
import backend.entity.Estudiante;
import backend.service.EstudianteService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/estudiantes")
@RequiredArgsConstructor
@CrossOrigin("*")
public class EstudianteController {

    private final EstudianteService service;

    @GetMapping
    public List<Estudiante> listar(){
        return service.listar();
    }

    @PostMapping
    public Estudiante crear(@RequestBody EstudianteDTO dto){
        return service.guardar(dto);
    }

    @PutMapping("/{id}")
    public Estudiante actualizar(
            @PathVariable Long id,
            @RequestBody EstudianteDTO dto){

        return service.actualizar(id,dto);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id){
        service.eliminar(id);
    }

}