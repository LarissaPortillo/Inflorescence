const React = require("react");

class SignUp extends React.Component{
    render(){
        return(
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="http://fonts.cdnfonts.com/css/drugs" rel="stylesheet"></link>
                <title>Create Login</title>
            </head>
            <body>
                <div>
                    <form action='/' method='POST'>
                        Username: <input type='text' name='username'></input>
                        Password: <input type='text' name='password'></input>
                        <input type='submit' name='' value='Create Login'></input>
                    </form>
                </div>
            </body>
            </html>
        );
    }
}


module.exports = SignUp;