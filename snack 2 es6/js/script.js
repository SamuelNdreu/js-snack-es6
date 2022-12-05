//Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
//Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
//Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.



const students = {
    name : 'giacomo',
    surname : 'di belli',
    age : 33
}

for(let key in students){
    console.log(key, "=>",  students[key]);
}



const studentsArray = [
    {
        name : 'gina',
        surmane : 'va',
        age : 23
    },
    {
        name : 'gino',
        surmane : 'demo',
        age : 55
    }
]


for(i = 0; i < studentsArray.length; i++){
    for(key in studentsArray[i]){
        console.log(key, "=>", studentsArray[i][key])
    }
}
