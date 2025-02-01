alert("Hello!");
const permission = confirm("Can I ask your name?");

if (permission === true) {
  const name = prompt("What is your name?");
  alert(`Nice to meet you ${name}!`);
} else {
  alert("Okay, have a nice day!");
}
