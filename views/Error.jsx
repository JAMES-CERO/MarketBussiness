
const React = require("react")
import Default from "./Default"

function error () {
    return (
        <Default>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
            
                <p> Oops!, sorry, We can't find this page</p>
                <img src="https://http.cat/404" alt="cat 404 error"></img>
            </main>
        </Default>
    )
}

export default error