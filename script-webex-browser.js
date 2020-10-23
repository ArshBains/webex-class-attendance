var last_roll = 64

var participants = document.querySelectorAll(".styles-user-name-gpTpQ")
var names = []
for (i = 0; i < participants.length; i++) {
  names.push(document.querySelectorAll(".styles-user-name-gpTpQ")[i].innerText)
}
// console.log(names)
var roll_nos = []
var patt = /\d{1,}/;
for (i = 0; i < names.length; i++) {
 name = names[i]
 var roll_no = name.match(patt);
 if (roll_no === null){
   continue
 }
 // console.log(roll_no[0]);
 if (roll_no[0].length > 2) {
   roll_no[0] = roll_no[0].slice(-2,)
 }
 roll_nos.push(parseInt(roll_no[0]))
}
roll_nos.sort(function(a, b){return a-b})
roll_nos = roll_nos.filter(x => x <= last_roll)

var students = [...Array(last_roll + 1).keys()]
students.splice(0, 1);
// console.log(students);
for (i = 0; i < roll_nos.length; i++) {
  var index = students.indexOf(roll_nos[i]);
  students.splice(index, 1);
}
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
console.log(today);
console.log("P:" + roll_nos.length + "; A:" + students.length);
console.log("Present: " + roll_nos);
console.log("Absent: " + students);
