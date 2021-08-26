package com.example.alex.coindog.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class WalletDTO {

  private Long id;
  private Long dogeCoin;
  private Long btcCoin;
  private Long ethCoin;
  private Long ltcCoin;
  private Long cash;

}
