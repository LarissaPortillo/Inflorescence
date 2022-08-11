const React = require("react");

class Edit extends React.Component{
    render(){
        const flower = this.props.flower;
        return(
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Edit Product</title>
            </head>
            <body>
                <form action={`/flor/${flower.id}/?_method=PUT`} method='POST'>
                        Default image link: <input type='text' name='defaultPic' value={flower.defaultPic}></input>
                        Name: <input type='text' name='name' value={flower.name}></input>
                        Price: <input type='number' name='price' step="any" min="0" value={flower.price}></input>
                        Inventory: <input type='number' name='inventory' min="0" value={flower.inventory}></input>
                        Description: <input type='text' name='description' value={flower.description}></input>
                        <input type='submit' name='' value='Edit flower'></input>
                </form>
            </body>
            </html>
        );
    }
}


module.exports = Edit;