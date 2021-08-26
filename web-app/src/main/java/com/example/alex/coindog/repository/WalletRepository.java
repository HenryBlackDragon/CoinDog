package com.example.alex.coindog.repository;

import com.example.alex.coindog.entity.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WalletRepository extends JpaRepository<Wallet, Long> {

  Wallet findFirstByOrderByIdDesc();

}
