const React = require("react")
const Def = require('./Default')

function Error () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p> Oops!, sorry, We can't find this page</p>
                <img src="https://http.cat/404" alt="cat 404 error"></img>
            </main>
        </Def>
    )
}

export default Error