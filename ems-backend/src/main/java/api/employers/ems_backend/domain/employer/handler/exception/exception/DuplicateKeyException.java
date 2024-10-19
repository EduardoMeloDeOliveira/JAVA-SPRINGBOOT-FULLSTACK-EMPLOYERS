package api.employers.ems_backend.domain.employer.handler.exception.exception;

public class DuplicateKeyException extends RuntimeException {

    public DuplicateKeyException(String message) {
        super(message);
    }
}
