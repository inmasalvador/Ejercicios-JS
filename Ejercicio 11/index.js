// Array de objetos
const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: false},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 20, premium: true},
    {username: 'sergio58', age: 26, premium: true},
];
const premiumTrue = users.filter(function(user){

    //con if comprobamos si el usuario es premium, 
    //si no cumple no entra en el if, ni se pinta por consola,
    //ni se guarda en premiumTrue 

    if(user.premium === true)
        console.log(user.username + 'es premium');
        return user
});


const premiumFalse = users.filter(function(users){
    return users.premium === false
});
console.log(premiumFalse);




