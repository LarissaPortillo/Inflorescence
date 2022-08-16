const React = require("react");

class Show extends React.Component{
    render(){
        const flower = this.props.flower;
        return(
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/css/show.css"></link>
                <script src="https://kit.fontawesome.com/398a8dbccf.js" crossorigin="anonymous"></script>
                <title>Show</title>
            </head>
            <body>
                <nav>
                    <a href='/' className="titleNav">I<span className="bckwrds">N</span>FLORESCE<span className="bckwrds">N</span>CE</a>
                    <a href='/logout' className="login">LOGOUT</a>
                </nav>
                <div className='container'>
                    <div className='left'>
                        <img src={flower.defaultPic} alt={flower.defaultAlt}></img>
                    </div>
                    <div className='right'>
                        <div className='name'>
                         <h1>{flower.name.charAt(0).toUpperCase()+flower.name.slice(1).toLowerCase()}</h1>   
                        </div>
                        <div className="price">
                            <h3>{`$ ${flower.price}`}</h3>
                        </div>
                        <div className='inventory'>
                            {flower.inventory===0? 'out of stock' : `Inventory: ${flower.inventory}` }
                        </div>
                        <div className="addCart">
                            {flower.inventory===0?  <button disabled='true' class="cBtn" id="nostock" >Sorry no stock</button>  : <button id="cartBtn">Add to Cart<i id="cart" class="fa fa-cart-plus" aria-hidden="true"></i></button> }  
                        </div>

                        <div className="description">
                            <h4>Product Info</h4>
                            <p>{`${flower.description}`}</p>
                        </div>
                        <div className="edr">
                           
                            <form action={`/flor/${flower.id}?_method=DELETE`} method='POST'>
                                <a href={`/flor/${flower.id}/edit`}><i className="fa fa-pencil" aria-hidden="true"></i></a>
                                <button className='del'type="submit"><i className="fa fa-trash" aria-hidden="true"></i></button>
                            </form>
                            <br></br>
                            <a href='/flor' className="back">Back to Home Page</a>
                        </div>
                       
                    </div>
                </div>
               
            </body>
            </html>
        );
    }
}


module.exports = Show;