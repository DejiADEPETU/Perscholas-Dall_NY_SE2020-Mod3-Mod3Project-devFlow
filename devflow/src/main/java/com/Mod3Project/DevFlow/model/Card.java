package com.Mod3Project.DevFlow.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cards") 

public class Card{

@Id
@GeneratedValue

@Column(name = "emp_id")
private long id;


@Column(name = "card_title")
private String cardTitle;

@Column(name = "card_owner")
private String cardOwner;


@Column(name = "card_note")
private String cardNote;

@Column(name = "card_class")
private String cardClass;

@Column(name = "card_status_in_flow")
private String cardStatusInFlow;

@Column(name = "card_logic")
private String cardLogic;

@Column(name = "card_misc")
private String cardMisc;

public Card() {
super();
}

public Card(String cardTitle, String cardOwner, String cardNote, String cardClass, String cardStatusInFlow, String cardLogic, String cardMisc ) {
super();
this.cardTitle = cardTitle;
this.cardOwner = cardOwner;
this.cardNote = cardNote;
this.cardClass = cardClass;
this.cardStatusInFlow = cardStatusInFlow;
this.cardLogic = cardLogic;
this.cardMisc = cardMisc;
}

public long getId() {
return id;
}
public void setId(long id) {
this.id = id;
}

public String getcardTitle() {
return cardTitle;
}
public void setcardTitle(String cardTitle) {
this.cardTitle = cardTitle;
}

public String cardOwner() {
return cardOwner;
}
public void setcardOwner(String cardOwner) {
this.cardOwner = cardOwner;
}


public String getcardNote() {
return cardNote;
}
public void setcardNote(String cardNote) {
this.cardNote = cardNote;
}

public String getcardClass() {
return cardClass;
}
public void setcardClass(String cardClass) {
this.cardClass = cardClass;
}

public String getcardStatusInFlow() {
return cardStatusInFlow;
}
public void setcardStatusInFlow(String cardStatusInFlow) {
this.cardStatusInFlow = cardStatusInFlow;
}

public String getcardLogic() {
return cardLogic;
}
public void setcardLogic(String cardLogic) {
this.cardLogic = cardLogic;
}

public String getcardMisc() {
return cardMisc;
}
public void setcardMisc(String cardMisc) {
this.cardMisc = cardMisc;
}


}