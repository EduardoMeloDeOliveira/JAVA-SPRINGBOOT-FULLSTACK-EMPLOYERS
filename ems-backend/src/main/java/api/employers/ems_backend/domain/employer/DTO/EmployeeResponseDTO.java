package api.employers.ems_backend.domain.employer.DTO;

import api.employers.ems_backend.domain.employer.entity.Employee;

public record EmployeeResponseDTO (Long id, String firstName, String lastName, String email){

    public EmployeeResponseDTO (Employee employee){
        this(employee.getId(), employee.getFirstName(), employee.getLastName(), employee.getEmail());
    }
}
