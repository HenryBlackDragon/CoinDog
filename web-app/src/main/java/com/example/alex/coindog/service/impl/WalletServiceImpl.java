package com.example.alex.coindog.service.impl;

import com.example.alex.coindog.converter.WalletConverter;
import com.example.alex.coindog.dto.WalletDTO;
import com.example.alex.coindog.repository.WalletRepository;
import com.example.alex.coindog.service.WalletService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class WalletServiceImpl implements WalletService {

  private final WalletRepository walletRepository;

  @Override
  public WalletDTO getAccountWallet() {
    return WalletConverter.convert(walletRepository.findFirstByOrderByIdDesc());
  }

  @Override
  public void saveCoins(final WalletDTO walletDTO) {
    walletRepository.save(WalletConverter.convert(walletDTO));
    log.info("Data saved: {}", walletDTO);
  }
}
