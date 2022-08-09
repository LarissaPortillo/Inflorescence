const React = require("react");

class New extends React.Component{
    render(){
        return(
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>New</title>
            </head>
            <body>
                <div>
                    <form action='/flor' method='POST'>
                        Default image link: <input type='text' name='defaultPic'></input>
                        Name: <input type='text' name='name'></input>
                        Price: <input type='number' name='price' step="any" min="0"></input>
                        Inventory: <input type='number' name='inventory' min="0"></input>
                        Description: <input type='text' name='description'></input>
                        <input type='submit' name='' value='Create flower'></input>
                    </form>
                </div>
            </body>
            </html>
        );
    }
}


module.exports = New;