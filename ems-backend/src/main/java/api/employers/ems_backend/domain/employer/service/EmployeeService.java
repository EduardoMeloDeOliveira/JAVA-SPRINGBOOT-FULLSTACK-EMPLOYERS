package api.employers.ems_backend.domain.employer.service;

import api.employers.ems_backend.domain.employer.DTO.EmployeeRequestDTO;
import api.employers.ems_backend.domain.employer.DTO.EmployeeResponseDTO;
import api.employers.ems_backend.domain.employer.entity.Employee;
import api.employers.ems_backend.domain.employer.handler.exception.exception.DuplicateKeyException;
import api.employers.ems_backend.domain.employer.handler.exception.exception.ObjectNotFoundException;
import api.employers.ems_backend.domain.employer.mapper.EmployeeMapper;
import api.employers.ems_backend.domain.employer.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public EmployeeResponseDTO createEmployee(EmployeeRequestDTO employeeRequestDTO) {
        Employee employee = EmployeeMapper.dtoToEntity(employeeRequestDTO);
        if (employeeRepository.existsByEmail(employee.getEmail())) {
            throw new DuplicateKeyException("Email ja cadastrado");
        }
        employeeRepository.save(employee);
        return new EmployeeResponseDTO(employee);
    }

    public EmployeeResponseDTO getEmployeeById(Long id) {
        Optional<Employee> employee = employeeRepository.findById(id);

        if (employee.isPresent()) {
            return new EmployeeResponseDTO(employee.get());
        }

        throw new ObjectNotFoundException("Employee Not Found");
    }


    public List<EmployeeResponseDTO> getAllEmployees() {

        List<Employee> employees = employeeRepository.findAll();
        List<EmployeeResponseDTO> employeesDTO = new ArrayList<>();

        if (employees.isEmpty()) {
            return employeesDTO;
        }

        return employeesDTO = employees.stream()
                .map(emp -> new EmployeeResponseDTO(emp))
                .collect(Collectors.toList());

    }

    public EmployeeResponseDTO updateEmployee(Long id, EmployeeRequestDTO employeeRequestDTO) {
        Optional<Employee> employeeOpt = employeeRepository.findById(id);

        if (!employeeOpt.isPresent()) {
            throw new ObjectNotFoundException("Employee Not Found");
        }

        Employee employee = employeeOpt.get();

        employee.setFirstName(employeeRequestDTO.firstName());
        employee.setLastName(employeeRequestDTO.lastName());
        employee.setEmail(employeeRequestDTO.email());

        employeeRepository.save(employee);

        return new EmployeeResponseDTO(employee);

    }

    public void deleteEmployee(Long id) {
        Optional<Employee> employeeOpt = employeeRepository.findById(id);

        if (!employeeOpt.isPresent()) {
            throw new ObjectNotFoundException("Employee Not Found");
        }

        employeeRepository.deleteById(id);
    }
}
