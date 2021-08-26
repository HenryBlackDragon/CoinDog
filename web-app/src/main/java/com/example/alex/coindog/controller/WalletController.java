package com.example.alex.coindog.controller;

import com.example.alex.coindog.dto.WalletDTO;
import com.example.alex.coindog.service.WalletService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/wallet")
public class WalletController {

  private final WalletService walletService;

  @GetMapping
  public ResponseEntity<?> getWallet() {
    return ResponseEntity.ok(walletService.getAccountWallet());
  }

  @PostMapping
  public ResponseEntity<?> saveWallet(@RequestBody WalletDTO walletDTO) {
    walletService.saveCoins(walletDTO);
    return ResponseEntity.ok().build();
  }

}
