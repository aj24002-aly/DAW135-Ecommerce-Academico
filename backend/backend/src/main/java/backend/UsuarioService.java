package backend.service;

import backend.dto.UsuarioDTO;
import backend.entity.Usuario;
import backend.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UsuarioService {

    private final UsuarioRepository repo;

    public UsuarioService(UsuarioRepository repo) {
        this.repo = repo;
    }

    public List<UsuarioDTO> obtenerTodos() {
        return repo.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    public UsuarioDTO obtenerPorId(Long id) {
        Usuario u = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        return toDTO(u);
    }

    public UsuarioDTO crear(UsuarioDTO dto) {
        Usuario u = new Usuario();
        u.setNombre(dto.getNombre());
        u.setCorreo(dto.getCorreo());

        return toDTO(repo.save(u));
    }

    public UsuarioDTO actualizar(Long id, UsuarioDTO dto) {
        Usuario u = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        u.setNombre(dto.getNombre());
        u.setCorreo(dto.getCorreo());

        return toDTO(repo.save(u));
    }

    public void eliminar(Long id) {
        repo.deleteById(id);
    }

    private UsuarioDTO toDTO(Usuario u) {
        UsuarioDTO dto = new UsuarioDTO();
        dto.setId(u.getId());
        dto.setNombre(u.getNombre());
        dto.setCorreo(u.getCorreo());
        return dto;
    }
}
