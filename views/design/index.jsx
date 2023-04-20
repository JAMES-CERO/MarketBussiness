const React = require("react")
import Default from "../Default"

function Index (data) {
   
        let designFormatted = data.design.map((design) => {
          return (
            <div>
              <h2>{design.name}</h2>
              <img src={design.pic} alt={design.name}/>
            </div>
          )
        })

    return (
        <Default>
            <main>
                <h1> Index Page</h1>
                <a href="/">
                    <button className="btn btn-primary">Back Page</button>
                </a>
                {designFormatted}
            </main>
        </Default>
    )
}

module.exports = Index