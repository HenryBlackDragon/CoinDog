package com.example.alex.coindog.config;

import com.example.alex.coindog.exception.CoinDogAppException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@Slf4j
public class AppExceptionHandler extends ResponseEntityExceptionHandler {

  @ExceptionHandler(Throwable.class)
  public ResponseEntity<CoinDogAppException> handleException(final Throwable exception) {
    log.error("Unexpected exception occurred: {}", exception.getMessage(), exception);
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
        .body(new CoinDogAppException(exception.getMessage()));
  }
}
