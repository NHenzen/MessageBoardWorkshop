# message-board
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Opdrachten

- **opdracht 1**
  - 
    - **A:** Plaats binnen de `<h6>` de titel van de message
    - **B:**  Plaats binnen de `<p>` de text van de message
    - **C:** Zorg ervoor dat je een list gaat maken van de `<div>` hieronder. Loop door de messages heen
      Daarna ga je in de div de `<message>` component neerzetten. Bind het message object en bind de key aan de message id.

- **opdracht 2**
  -
    	Voer pas opdracht 3 als opdracht 1 en 2 werken
    - **A:** Haal door middel van de getter alle messages op.
    - **B:** Plaats binnen de `<p>` de text van de message
    - **C:** Returneer de messages uit de state

- **opdracht 3**
  -
    - Gebruik de ES6 [`filter()`](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). functie waarbij je gaat filteren welke message titles overeenkomen met de search model. Vergeet in de `<template>` niet de messages te vervangen door `filteredMessages`
          tip: gebruik ook de ES6 functie "[`includes()`](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)".


- **opdracht 4**
  -
    - **A:** Maak zelf een nieuwe button met de label "Create" Koppel de functie `createNewMessage()` aan de nieuwe create button
    - **B:** Maak hier een mesage object m.b.v. de MyMessage class. Geef aan de constructor de newMessage title, newMessage text, en de user mee (in deze volgorde).
    - **C:** Roep hier de store action aan createMessage en geef message object mee.



## Links uit presentatie:
	vue syntax:
	https://vuejs.org/v2/guide/syntax.html
	
	vue list:
	https://vuejs.org/v2/guide/list.html
	
	vuex:
	https://vuex.vuejs.org/
	
	computed:
	https://vuejs.org/v2/guide/computed.html
	
	Quasar:
	https://quasar.dev/vue-components/
