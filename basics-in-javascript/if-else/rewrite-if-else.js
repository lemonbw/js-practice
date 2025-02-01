let message;
let login = prompt("Введите логин:");

// Basic construction

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// Rewrited construction

message = login == "Сотрудник" ? "Привет" : login == "Директор" ? "Здравствуйте" : login == "" ? "Нет логина" : "";

alert(message);
