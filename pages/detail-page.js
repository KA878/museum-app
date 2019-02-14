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
    //console.log(name + ' said: ');
    //console.log(' " ' + msg + ' " ');   

    h3.innerHTML =  (name + ' said: ');
    p.innerHTML = msg;
    
    comment.class = ('comment');
    //console.log(comment.class);  
    
    comment.appendChild(h3);   
    comment.appendChild(p);

    const commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);
    //console.log(comment);
    
    //console.log(commentSection.name);
    //console.log(commentSection.msg);

    inputField.value = null;
    msgInput.value = null;

    const doesNotPassAllValidations = function () {
        //const longName = name.length;
        //const longMsg = msg.length;        
        
        if (!name || !msg) {
            alert("Don't forget to input your name and message");
            return true;
        }
        
        if (msg.length > 280) {
            alert('Your comment is too long!');
            return true;
        }

        else {
            return false;
        }
    }
    //doesNotPassAllValidations();
    if (doesNotPassAllValidations() === true) {
        return null;
    }
}
//console.log(name);
//console.log(msg);