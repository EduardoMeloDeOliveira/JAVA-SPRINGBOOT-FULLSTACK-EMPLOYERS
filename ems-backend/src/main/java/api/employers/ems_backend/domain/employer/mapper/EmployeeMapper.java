package api.employers.ems_backend.domain.employer.mapper;

import api.employers.ems_backend.domain.employer.DTO.EmployeeRequestDTO;
import api.employers.ems_backend.domain.employer.entity.Employee;

public class EmployeeMapper {

    public static Employee dtoToEntity(EmployeeRequestDTO dtoData){
        return Employee.builder()
                .id(null)
                .firstName(dtoData.firstName())
                .lastName(dtoData.lastName())
                .email(dtoData.email())
                .build();
    }
}
