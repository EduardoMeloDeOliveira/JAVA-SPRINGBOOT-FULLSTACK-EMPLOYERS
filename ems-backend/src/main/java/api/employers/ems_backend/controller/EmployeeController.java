package api.employers.ems_backend.controller;

import api.employers.ems_backend.domain.employer.DTO.EmployeeRequestDTO;
import api.employers.ems_backend.domain.employer.DTO.EmployeeResponseDTO;
import api.employers.ems_backend.domain.employer.entity.Employee;
import api.employers.ems_backend.domain.employer.service.EmployeeService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/employers")
public class EmployeeController {


    @Autowired
    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<EmployeeResponseDTO> createEmployee(@RequestBody @Valid EmployeeRequestDTO employeeRequestDTO) {
        return ResponseEntity.created(null).body(employeeService.createEmployee(employeeRequestDTO));
    }


    @GetMapping("/{id}")
    public ResponseEntity<EmployeeResponseDTO> getEmployeeById(@PathVariable Long id) {
        EmployeeResponseDTO dto = employeeService.getEmployeeById(id);

        if (dto == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(dto);
    }

    @GetMapping
    public ResponseEntity<List<EmployeeResponseDTO>> getEmployees() {

        List<EmployeeResponseDTO> employeeResponseDTOS = employeeService.getAllEmployees();

        if (employeeResponseDTOS.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(employeeResponseDTOS);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EmployeeResponseDTO> updateEmployee
            (@PathVariable Long id,
             @RequestBody @Valid EmployeeRequestDTO employeeRequestDTO) {
        EmployeeResponseDTO dto = employeeService.updateEmployee(id, employeeRequestDTO);

        if (dto == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(dto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long id) {
        EmployeeResponseDTO employee = employeeService.getEmployeeById(id);

        if (employee == null) {
            return ResponseEntity.notFound().build();
        }

        employeeService.deleteEmployee(id);

        return ResponseEntity.noContent().build();

    }
}
