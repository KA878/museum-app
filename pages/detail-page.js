const submitComment = function() {
    event.preventDefault();
    const inputField = document.getElementById('name');
    const name = inputField.value;
    
    const msgInput = document.getElementById('msg');
    const msg = msgInput.value;
    const comment = document.createElement('section');
    const dispInput = document.createElement('h3');
    const dispMsg = document.createElement('p');
    
    const h3 = name;
    const p = msg;

    

    console.log(name);
    console.log(msg);
    console.log(h3 + ' said: ');
    console.log(' " ' + p + ' " ');   
    
    comment.class = ('comment');
    console.log(comment.class);  
    
    comment.appendChild(dispInput);   
    comment.appendChild(dispMsg);
    console.log(comment);
     
    
}
