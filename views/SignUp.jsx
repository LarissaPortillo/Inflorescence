const React = require("react");

class SignUp extends React.Component{
    render(){
        return(
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.cdnfonts.com/css/drugs" rel="stylesheet"></link>
                <title>SignUp</title>
            </head>
            <body>
                <div>
                    <form>
                        Name : <input type='text' name='name' required></input>
                        Username: <input type='text' name='username' required></input>
                        <div className='username error'></div>
                        Password: <input type='password' name='password' required></input>
                        <div className='password error'></div>
                        <input type='submit' name='' value='Sign Up'></input>
                    </form>
                </div>
                <script src='/js/signup.js'></script>
            </body>
            </html>
        );
    }
}


module.exports = SignUp;