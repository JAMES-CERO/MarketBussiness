
const React = require("react")
const Default = require('./Default')

function Error () {
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

export default Error