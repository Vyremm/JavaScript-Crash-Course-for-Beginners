const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id:1,
        text: 'Dentist appointment',
        isCompleted: false
    }
];

const todoJson = JSON.stringify(todos);
console.log(todoJson);

//for
/* for(let i=0; i<10; i++){
    console.log(`For Loop Number: ${i}`);
} */

//while
/* let i=0;
while(i<10){
    console.log(`While Loop Number: ${i}`);
    i++;
} */

for(let i=0; i<todos.length; i++){
    console.log(todos[i].text);
} 

//alt
for(let todo of todos){
    console.log(todo.text)
}

//forEach, Map, filter
todos.forEach(function(todo){
    console.log(todo.text)
});

const todosText=todos.map(function(todo){
    return todo.text;
});
console.log(todosText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
}); //higher order array

console.log(todoCompleted);

