const React = require('react')
import Default from './Default'

const Home = () => {
    return (
        <Default>
            <main>
               <h1 style={{'color': 'black'}}>
                    Welcome To the Market!
              </h1>
              <a href="/design">
                    <button className="btn btn-primary">Places Page</button>
                </a>
            </main>
        </Default>
    )
}

export default Home