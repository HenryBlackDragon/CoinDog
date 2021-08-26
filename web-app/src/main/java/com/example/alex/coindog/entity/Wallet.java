package com.example.alex.coindog.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "coin_account")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class Wallet {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  @Column(name = "doge_coin")
  private Long dogeCoin;
  @Column(name = "btc_coin")
  private Long btcCoin;
  @Column(name = "eth_coin")
  private Long ethCoin;
  @Column(name = "ltc_coin")
  private Long ltcCoin;
  private Long cash;

}
