Stappenplan mét token-validatie

// STAPPENPLAN PERSIST ON REFRESH
// - [X] Check of er een token in de local storage staat
// - [ ] BONUS: Schrijf een functie die checkt of de token nog geldig is:
//    - [ ] Decode de token en haal daar de expiratiedatum (UNIX timestamp) uit
//    - [ ] Maak een "nu" punt in JavaScript
//    - [ ] Zet deze JavaScript timestamp om naar een UNIX timestamp
//    - [ ] Trek deze data van elkaar af om te bepalen of de token nog geldig is
//    - [ ] Token nog geldig? Return true. Niet meer geldig? Return false.
// - [ ] Wanneer blijkt dat de token geldig is, halen we de gebruikerdata opnieuw op:
//    - [ ] Roep de bestaande functie fetchUserData aan en geef de token en id hieraan mee
//    - [ ] In die functie hebben we al geimplementeerd dat de status op done komt te staan
// - [ ] Geen gebruikersdata en ook geen geldige token? Dan zetten de we status op 'done'
// - [ ] Puntjes op de i: onze functie is een helperfunctie, dus die mag naar een apart mapje!

// STAPPENPLAN PERSIST ON REFRESH (9)
// - [X] Voeg een 'status'-key toe aan de Context-state
// - [X] Implementeer een mounting-effect in de context
// - [ ] Zorg ervoor dat er "Context wordt gerefresht"! wordt gelogd in de console wanneer je de applicatie ververst.
// - In dit mounting-effect doe je de volgende dingen:
//      [X] Check of er een JWT in de Local Storage aanwezig is
//      [X] Als dat zo is, decodeer je de token. We namelijk hebben de id van de gebruiker nodig!
//      [X] Gebruik deze id en de versleutelde token om een GET-request te doen naar het gebruikersgegevens-endpoint.
//      [X] Als dit succesvol is, gebruik je de response om de gebruikersgegevens in de Context-state te plaatsen. Bovendien zet je isAuth op true en de status op done.
//      [ ] Als dit niet succesvol is of er is geen token aanwezig, zet je de de user op null, isAuth op false en status op done
// - [ ] Zet een ternary operator in de return-statement van de Context. Render alleen de children wanneer de status op done staat, anders renderen we <p>Loading...</p>;
// - [ ] Schrijf een functie die checkt of de token geldig is en voeg deze toe aan jouw if-statement! (zie ander stappenplan)

En vergeet niet te checken of de applicatie niet volledig crasht als je de token handmatig uit de browser verwijderd hebt!!