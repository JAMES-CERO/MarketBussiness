const React = require("react")

function Default (html){
    return (
        <html>
            <head>
                <title> Hello You! </title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

export default Default