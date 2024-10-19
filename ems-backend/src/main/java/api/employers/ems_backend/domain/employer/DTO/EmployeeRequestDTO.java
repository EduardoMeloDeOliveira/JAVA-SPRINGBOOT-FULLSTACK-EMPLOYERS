package api.employers.ems_backend.domain.employer.DTO;

import api.employers.ems_backend.domain.employer.entity.Employee;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;


public record EmployeeRequestDTO(

        Long id,

        @NotBlank
        String firstName,

        @NotBlank
        String lastName,

        @NotBlank
        @Email
        String email

) {

}
