// Array de objetos
const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: false},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 20, premium: true},
    {username: 'sergio58', age: 26, premium: true},
];
const premiumTrue = users.filter(function(users){
    return users.premium === true
});

for (let i = 0; i < premiumTrue.length; i++) {
    console.log(premiumTrue[i] + 'Usted es usuario Premium')
};


const premiumFalse = users.filter(function(users){
    return users.premium === false
});
console.log(premiumFalse);




