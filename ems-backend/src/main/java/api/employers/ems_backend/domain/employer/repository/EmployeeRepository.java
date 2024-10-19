package api.employers.ems_backend.domain.employer.repository;

import api.employers.ems_backend.domain.employer.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
