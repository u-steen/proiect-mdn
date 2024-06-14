# Proiect MDS

### Structura (simplificată) fișierelor proiectului

- proiect-mdn-main
  - .github
    - workflows
      - tests.yml
  - backend
    - config
    - database
    - routes
    - src
  - frontend
    - node_modules
    - public
    - src
      - assets
      - components
        - Pages
        - Card
        - Cards
        - Deck
        - EndPage
        - EndTurnButton
        - Healthbar
        - HomePage
        - ManaBar
        - NotFoundPage
      - Game.jsx
      - index.css
      - main.jsx
      - test
        - Game.test.js


### Cum se ruleaza:

#### Front-end

1. Deschide terminal
2. `cd frontend` <- intra in folderul de frontend
3. `npm install` <- vom avea nevoie sa folosim npm
4. `npm run dev` <- start proiect
5. Click pe link-ul din terminal (localhost:xxxx)

#### Back-end

1. Deschide alt terminal ( nu inchideti terminalul deschis la frontend)
2. `cd backend` <- intra in folderul de backend
3. `npm init -y` <- generam un package.json pentru proiectul nostru in Nodejs
4. `npm install socker.io` <- avem nevoie de acest pachet
5. Si il activam cu `node server.js`


### Descriere

Aplicatia este un joc cu carti asemanator cu hearthstone, incepe in pagina principala unde avem un meniu cu butonul de start, setari, credite si exit. Jocul incepe fiecare jucator avand 5 carti, la fiecare runda jucatorul curent poate sa: aseze o carte, trage o carte, ataca o carte a adversarului, si sa isi termine tura. Fiecare actiune de asezare a unei carti sau de tragere va scadea din mana jucatorului, cand mana e 0 jucatorul nu va putea sa aseze/traga carti. Cand cartile se lupta o carte va pierde health in functie de puterea cartii atacante, daca puterea este mai mare decat hp-ul curent cartea va muri si player ul va pierde viata in functie de puterea cartii care a atacat. Daca un player doreste sa se dea batut va apasa pe butonul de resign/forfeit.

### User stories si backlog creation
![image](https://github.com/u-steen/proiect-mdn/assets/156594958/875208a5-5c6a-430a-aa45-3121a7066a17)
![image](https://github.com/u-steen/proiect-mdn/assets/156594958/921481f9-d04b-4258-96ea-500899f2ae85)
![image](https://github.com/u-steen/proiect-mdn/assets/156594958/a9e6aef9-bf89-4da8-a89a-f60197a80960)

### Diagrame
![image](https://github.com/u-steen/proiect-mdn/assets/156594958/4318de12-baf5-4367-9811-d0ba6b3722b1)


### Source control
Modificarile proiectului au fost gestionate in totalitate pe github.

#### Branches
![image](https://github.com/u-steen/proiect-mdn/assets/156594958/fe18c70a-d35d-482e-ad8f-8d8c79ba8d5f)

#### Merge/rebase
![image](https://github.com/u-steen/proiect-mdn/assets/156594958/4930ad52-7cdd-4f6a-8489-e80e87abf60a)

#### Pull requests
![image](https://github.com/u-steen/proiect-mdn/assets/156594958/d2f87494-b764-406f-b9b6-64ef75eb9ab5)


### Teste automate
Am incercat sa implementam testele automate dar nu au functionat, dar a mers daca faceam niste teste simple:
![image](https://github.com/u-steen/proiect-mdn/assets/156594958/81cc3585-060b-429c-86d8-bf67e546af62)


### Raportare bug si rezolvare cu pull request
#### NAN


### Refactoring prin Chat-GPT
(a fost folosit in mai multe ocazii dar singurul salvat este acesta)
![image](https://github.com/u-steen/proiect-mdn/assets/156594958/855de98a-64b7-4a9e-940f-eeb7ec79bb67)


### Cometarii cod
#### Codul este comentat in fiecare fisier pentru usurinta folosind Chat-GPT.

Exemplu pentru un program mic folosit in backend:
![image](https://github.com/u-steen/proiect-mdn/assets/156594958/1e343424-21e6-4d21-9964-c217edfc8853)
![image](https://github.com/u-steen/proiect-mdn/assets/156594958/0432211e-35a1-4bf7-8ab9-744ae29739d5)

Exemplu pentru main.jsx din frontend:
![image](https://github.com/u-steen/proiect-mdn/assets/156594958/17a61cb9-b61c-4791-937e-4eb7c8094c42)


### Design patterns
#### Cateva exeple:
##### 1. Folosirea separata a componentelor in react:
![image](https://github.com/u-steen/proiect-mdn/assets/156594958/7fd9e2b1-610a-4d65-a7de-8fc1afe87238)
##### 3. Utilizarera starilor:
![image](https://github.com/u-steen/proiect-mdn/assets/156594958/db69b81f-d161-469d-aa12-3d444b6c230e)
##### 4. Un fel de strategy pattern:
Functiile handleDraw, handleEndTurn, handleRemoveCard pot fi considerate o implementare a strategy pattern. Fiecare functie implementeaza o strategie diferita pentru gestionarea jocului, cum ar fi extragerea unei carti, terminarea turei sau eliminarea unei carti. ![image](https://github.com/u-steen/proiect-mdn/assets/156594958/af6ec3ff-efc5-4ed8-852e-f468ddc3dfd2)


## Demo:
https://youtu.be/p8pnDkGqMkA
