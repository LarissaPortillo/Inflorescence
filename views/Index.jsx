const React = require('react');

class Index extends React.Component{
    render(){
        const { flower } = this.props;
        return(
            <html lang='en'>
            <head>
                <meta charSet='UTF-8' />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <link rel='stylesheet' href='/css/index.css'></link>
                <script src='https://kit.fontawesome.com/398a8dbccf.js' crossOrigin='anonymous'></script>
                <title>Index</title>
            </head>
            <body>
                <nav>
                    <a href='/' className='titleNav'>I<span className='bckwrds'>N</span>FLORESCE<span className='bckwrds'>N</span>CE</a>
                    <a href='/logout' className='login'>LOGOUT</a>
                    <a><i className='fa fa-shopping-cart' aria-hidden='true'></i></a>
                </nav>
                <div className='new'>
                    <a href='/flor/new' className='btn'>
                        <span className='text'>Text</span>
                        <span className='flip-front'>Create</span>
                        <span className='flip-back'>New Product</span>
                    </a>
                </div>
                
                <div className='container'>
                   {flower.map((f)=>{
                        return(
                            <div className='card'>
                                <div className='name'>{`${f.name}`}  </div>
                                <div className='divider'>_____</div>
                                <div className='price '>{`$ ${f.price}`}</div>
                                <a className='default' href={`/flor/${f.id}`}><img src={f.defaultPic} alt={f.defaultAlt}></img></a>
                                <div className='inventory'>{f.inventory===0 ? 'out of stock' : `Inventory: ${f.inventory}` }</div>
                                <div className='cartBtn'>{f.inventory===0 ?  <button disabled='true' className='cBtn' id='nostock' >Sorry no stock</button>  : <button id='cartBtn'>Add to Cart<i id='cart' className='fa fa-cart-plus' aria-hidden='true'></i></button> }</div>
                                
                                <div className='edit'> <a href={`/flor/${f.id}/edit`}><i className='fa fa-pencil' aria-hidden='true'></i></a></div>
                               
                                <div className='delete'>
                                    <form action={`/flor/${f.id}?_method=DELETE`} method='POST'>
                                        <button className='del'type='submit'><i className='fa fa-trash' aria-hidden='true'></i></button>
                                    </form>
                                </div>
                            </div>
                        )
                    })} 
                </div>
                    
            </body>
            </html>
        );
    }
}


module.exports = Index;