const React = require("react")
import Default from "../Default"

function Index (data) {
   
        let designFormatted = data.design.map((design) => {
          return (
            <div className="col-6">
              <h2>{design.name}</h2>
              <img src={design.pic} alt={design.name}/>
            </div>
          )
        })

    return (
        <Default>
            <main>
                <h1> Index Page</h1>
               
                <hr/>
                <div className="row">
                    {designFormatted}
                </div>
            </main>
        </Default>
    )
}

module.exports = Index