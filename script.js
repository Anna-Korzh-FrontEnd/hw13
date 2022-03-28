"use strict";

//1:


fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {

        if(response.ok === false){
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(users =>{

        console.log(users);
        for (let i = 0; i < users.length; i++){
            const{
                company: {name},
                } = users[i];
            if(name === "Johns Group"){
            
                return console.log(users[i]);
            }
        }
    } )
    .catch((error) => console.error("Error"));
















