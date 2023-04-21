const React = require("react")

function Default (html){
    return (
        <html>
            <head>
                <title> Hello You! </title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"/>
                <link rel="stylesheet" href='/css/App.css' />
            </head>
            <body>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img className="logoNavBar" src="/images/logoImg.png" alt="logoImg" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/design">
              Design Page
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/checkout">
              Checkout
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Back Home Page
            </a>
          </li>
        </ul>
      </div>
    </nav>

                {html.children}
            </body>
        </html>
    )
}

export default Default