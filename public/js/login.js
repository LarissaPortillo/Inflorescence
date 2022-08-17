const form = document.querySelector('form');
const usernameError = document.querySelector('.username.error');
const passwordError = document.querySelector('.password.error');


form.addEventListener('submit', async (e)=>{
    e.preventDefault(); //prevents page refreshers from happening
    
    //reset errors
    usernameError.textContent = '';
    passwordError.textContent = '';

    //get values
    const username = form.username.value;
    const password = form.password.value;
    try{
        const res = await fetch('/login',{
        method: 'POST',
        body: JSON.stringify({username,password}),
        headers: { 'Content-Type':'application/json'}
        });
            const data = await res.json();
            console.log(data);
            if(data.errors){
                usernameError.textContent = data.errors.username;
                passwordError.textContent = data.errors.password;
            }
            if(data.user){
                location.assign('/');
            }
    }
    catch(err){
        console.log(err);
    }
    
});

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }