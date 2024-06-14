// Includem pachetul `mysql2` pentru a interacționa cu baza de date MySQL
const mysql = require('mysql2');

// Configurăm conexiunea la baza de date MySQL
const connection = mysql.createConnection({
  host: 'localhost',    // Adresa IP sau numele gazdei unde rulează serverul MySQL
  user: 'root',         // Numele utilizatorului pentru autentificare
  password: 'admin',    // Parola asociată utilizatorului
  database: 'cards_game'// Numele bazei de date la care vrem să ne conectăm
});

// Conectăm la serverul MySQL utilizând detaliile specificate mai sus
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err); // În caz de eroare la conectare, afișăm un mesaj de eroare
    return;
  }
  console.log('Connected to the MySQL database.'); // În caz de succes, afișăm un mesaj de confirmare
});

// Exportăm conexiunea pentru a putea fi folosită în alte module sau fișiere din aplicația noastră
module.exports = connection;
