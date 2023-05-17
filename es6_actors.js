const academyMembers = [
    {
      memID: 101,
      name: 'Bob Brown',
      films: ['Bob I', 'Bob II', 'Bob III', 'Bob IV']
    },
    {
      memID: 142,
      name: 'Sallie Smith',
      films: ['A Good Day', 'A Better Day']
    },
    {
      memID: 187,
      name: 'Fred Flanders',
      films: ['Who is Fred?', 'Where is Fred?', 'What is Fred?', 'Why Fred?']
    },
    {
      memID: 203,
      name: 'Bobbie Boots',
      films: ['Walking Boots', 'Hiking Boots', 'Cowboy Boots']
    }
  ];
  // Who is the Academy Member whose ID is 187?
const memberWithId187 = academyMembers.find((member) => member.memID === 187)
console.log(memberWithId187.name);
console.log('----');
// Who has been in at least 3 films?

const beenIn3Films = academyMembers.filter((member) => member.films.length >=3);
beenIn3Films.forEach((member) =>{
console.log(member.name)});
console.log('----');
// Who has a name that starts with "Bob"?

const startsWithBob = academyMembers.filter((member) => member.name.startsWith("Bob"));
startsWithBob.forEach((member) => {
    console.log(member.name)
});
console.log('----');
 //Which Academy Members have been in a film that starts with "A"
 // Which Academy Members have been in a film that starts with "A"
const filmsStartsWithA = academyMembers.filter((member) => {
  return member.films.some((film) => film.startsWith("A"));
});

filmsStartsWithA.forEach((member) => {
  console.log(member.name);
});
