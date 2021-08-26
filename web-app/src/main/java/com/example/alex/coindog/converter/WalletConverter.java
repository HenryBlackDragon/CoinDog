package com.example.alex.coindog.converter;

import com.example.alex.coindog.dto.WalletDTO;
import com.example.alex.coindog.entity.Wallet;

public final class WalletConverter {

  private WalletConverter() {
    throw new UnsupportedOperationException();
  }

  public static WalletDTO convert(final Wallet wallet) {
    return WalletDTO.builder()
        .id(wallet.getId())
        .dogeCoin(wallet.getDogeCoin())
        .btcCoin(wallet.getBtcCoin())
        .ethCoin(wallet.getEthCoin())
        .ltcCoin(wallet.getLtcCoin())
        .cash(wallet.getCash())
        .build();
  }

  public static Wallet convert(final WalletDTO wallet) {
    return Wallet.builder()
        .id(wallet.getId())
        .dogeCoin(wallet.getDogeCoin())
        .btcCoin(wallet.getBtcCoin())
        .ethCoin(wallet.getEthCoin())
        .ltcCoin(wallet.getLtcCoin())
        .cash(wallet.getCash())
        .build();
  }
}
