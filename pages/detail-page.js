const submitComment = function() {
    event.preventDefault();
    const inputField = document.getElementById('name');
    const name = inputField.value;
    
    const msgInput = document.getElementById('msg');
    const msg = msgInput.value;
    
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    console.log(name);
    console.log(msg);
    console.log(name + ' said: ');
    console.log(' " ' + msg + ' " ');   

    h3.innerHTML =  (name + ' said: ');
    p.innerHTML = msg;
    
    comment.class = ('comment');
    console.log(comment.class);  
    
    comment.appendChild(h3);   
    comment.appendChild(p);

    const commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);
    console.log(comment);
    
    //console.log(commentSection.name);
    //console.log(commentSection.msg);

    h3.value = null;
    p.value = null;

    
}
