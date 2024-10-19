package api.employers.ems_backend.domain.employer.handler.exception.handler;


import api.employers.ems_backend.domain.employer.handler.exception.exception.DuplicateKeyException;
import api.employers.ems_backend.domain.employer.handler.exception.exception.ObjectNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.List;
import java.util.stream.Collectors;

@RestControllerAdvice
public class HanlderExceptions {

    @ExceptionHandler(ObjectNotFoundException.class)
    public ResponseEntity<String> objectNotFoundHandler(ObjectNotFoundException e) {

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }

    @ExceptionHandler(DuplicateKeyException.class)
    public ResponseEntity<String> duplicateKeyHandler(DuplicateKeyException e) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<List<ErrorFieldsDTO>> methodArgumentNotValidHandler(MethodArgumentNotValidException e) {

        List<FieldError> fieldErrors = e.getFieldErrors();

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                fieldErrors.stream()
                        .map(ErrorFieldsDTO::new)
                        .collect(Collectors.toList())
        );

    }


    private record ErrorFieldsDTO(String field, String message) {
        public ErrorFieldsDTO(FieldError fieldError) {
            this(fieldError.getField(), fieldError.getDefaultMessage());
        }
    }

}
