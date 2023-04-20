const React = require('react')
import Default from './Default'

const Home = () => {
    return (
        <Default>
            <main>
               <h1 style={{'color': 'black'}}>
                    Welcome To the Market! - Home
              </h1>
              <a href="/design">
                    <button className="btn btn-primary">Design Page</button>
                </a>
                <a href="/checkout">
                    <button className="btn btn-primary">Checkout</button>
                </a>
                <hr/>
                <img src='/images/homeImg.png' alt='women-sit-enjoying-view' />
            </main>
        </Default>
    )
}

export default Home