package com.Mod3Project.DevFlow.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Mod3Project.DevFlow.model.Card;

@Repository

public interface CardRepository extends JpaRepository<Card, Long>{

	
	
}


