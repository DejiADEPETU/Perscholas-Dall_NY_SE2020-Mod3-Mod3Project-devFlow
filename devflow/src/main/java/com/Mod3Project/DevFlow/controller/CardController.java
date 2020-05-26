package com.Mod3Project.DevFlow.controller;

	import java.util.HashMap;
	import java.util.List;
	import java.util.Map;
	import javax.validation.Valid;
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.http.ResponseEntity;
	import org.springframework.ui.Model;
	import org.springframework.web.bind.annotation.DeleteMapping;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.PutMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RestController;
	import com.Mod3Project.DevFlow.exception.ResourceNotFoundException;
	import com.Mod3Project.DevFlow.model.Card;
	import com.Mod3Project.DevFlow.repository.CardRepository;

	@RestController
	@RequestMapping("/deji_api/v1")

	public class CardController {
		
		@Autowired
		private CardRepository cardRepository;

	    
	//  get all cards
	  @GetMapping("/cards")
	  public List<Card> getAllCards(Model model) {
	  	
	  return this.cardRepository.findAll();
	  
	}

	    
	//  get all cards by id
	  @GetMapping("/cards/{id}")
	  public ResponseEntity<Card> getCardById(@PathVariable(value = "id") Long cardId)
	      throws ResourceNotFoundException {
	      Card card = cardRepository.findById(cardId)
	        .orElseThrow(() -> new ResourceNotFoundException("Card not found for this id :: " + cardId));
	      return ResponseEntity.ok().body(card);
	  }

	  
	//  save card
	  @PostMapping("/cards")
	  public Card createCard(@Valid @RequestBody Card card) {
		  return cardRepository.save(card);
	  }
	  
	  
	//  Update Card
	  @PutMapping("/cards/{id}")
	  public ResponseEntity<Card> updateCard(@PathVariable(value = "id") Long cardId,
			  @Valid @RequestBody Card cardDetails)
		      throws ResourceNotFoundException {
		      Card card = cardRepository.findById(cardId)
		    		  .orElseThrow(()-> new ResourceNotFoundException("Card not found for this id :: " + cardId));
		     
		     card.setcardTitle(cardDetails.getcardTitle()); 
		     card.setcardOwner(cardDetails.getcardOwner());
		     card.setcardNote(cardDetails.getcardNote());
		     card.setcardStatusInFlow(cardDetails.getcardStatusInFlow()); 
		     card.setcardLogic(cardDetails.getcardLogic());
		     card.setcardMisc(cardDetails.getcardMisc());
		    
		    
		     final Card updatedCard = cardRepository.save(card);
		     
		     
		     return ResponseEntity.ok(updatedCard);
		      
		      }
	  
	  
	//  Delete Card
	  @DeleteMapping("/cards/{id}")
	  public Map<String, Boolean> deletedCard(@PathVariable(value = "id") Long cardId)
				      throws ResourceNotFoundException {
				      Card card = cardRepository.findById(cardId)
				    		  .orElseThrow(()-> new ResourceNotFoundException("Card not found for this id :: " + cardId));
	  
				      cardRepository.delete(card);
				      Map<String, Boolean> response = new HashMap<>();
				      
				      response.put("deleted card", Boolean.TRUE);
				      
				      return response;
	  
	  }
	  
	}
