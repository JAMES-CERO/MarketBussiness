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
                <h1> Places Index Page</h1>
                {designFormatted}
            </main>
        </Default>
    )
}

module.exports = Index