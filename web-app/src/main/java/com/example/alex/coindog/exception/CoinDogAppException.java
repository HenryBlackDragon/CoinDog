package com.example.alex.coindog.exception;

public class CoinDogAppException extends Exception {

  private final String reason;

  public CoinDogAppException(String message, String reason) {
    super(message);
    this.reason = reason;
  }

  public CoinDogAppException(String reason) {
    super(reason);
    this.reason = reason;
  }

  @Override
  public String getMessage() {
    return super.getMessage();
  }

  public String getReason() {
    return reason;
  }

}
