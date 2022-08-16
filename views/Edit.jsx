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
                <link href="https://fonts.cdnfonts.com/css/drugs" rel="stylesheet"></link>
                <link rel="stylesheet" href="/css/new.css"></link>
                <title>Edit Product</title>
            </head>
            <body>
                <nav>
                    <a href='/' className="titleNav">I<span>N</span>FLORESCE<span>N</span>CE</a>
                    <a href='/logout' className="login">LOGOUT</a>
                </nav>
                <h2>Edit product.</h2>
                <div className='container'>
                    <form action={`/flor/${flower.id}/?_method=PUT`} method='POST'>
                        <ul>
                            <li>
                            <label for='defaultPic'>Default image link: </label><input type='text' name='defaultPic' value={flower.defaultPic}></input>
                                <span clasName='form'>Enter the image address (eg: https://blahblah.jpg)</span>                                           
                            </li>
                            <li>
                                <label for='name'>Name: </label> <input type='text' name='name' value={flower.name}></input>                        
                                <span clasName='form'>Enter name of the product</span>       
                            </li>
                            <li>
                                <label for='price'>Price:</label><input type='number' name='price' step="any" min="0" value={flower.price}></input>
                                <span clasName='form'>Enter the price of the product. Numbers only.</span>      
                            </li>
                            <li>
                                <label for='inventory'>Inventory:</label> <input type='number' name='inventory' min="0" value={flower.inventory}></input>
                                <span clasName='form'>Enter the amount of available product stock. Numbers only.</span> 
                            </li>
                            <li>
                                <label for='description'>Product Detail:</label> <input type='text' name='description' value={flower.description}></input> 
                                <span clasName='form' >Write a description of the product for customers to see.</span>               
                            </li>
                            <li>
                                <label for='defaultAlt'>Image description (image alt): </label><input type='text' name='defaultAlt' value={flower.defaultAlt}></input>
                                <span clasName='form'>Write a caption for the image. Customer's will not see this. </span>                    
                            </li> 
                            <li>
                                <input type='submit' name='' value='Edit flower'></input>                
                            </li>
                        </ul>
                        
                                 </form>
                </div>
            </body>
            </html>
        );
    }
}


module.exports = Edit;