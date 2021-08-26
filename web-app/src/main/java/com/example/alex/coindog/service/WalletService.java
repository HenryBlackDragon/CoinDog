package com.example.alex.coindog.service;

import com.example.alex.coindog.dto.WalletDTO;

public interface WalletService {

  WalletDTO getAccountWallet();

  void saveCoins(WalletDTO walletDTO);

}
