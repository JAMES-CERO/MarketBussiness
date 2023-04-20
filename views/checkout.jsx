const React = require("react")
import Default from "./Default"

const Checkout = () => {
    return (
        <Default>
            <main>
                <h1>Checkout Page</h1>
                <div className="container">
                    <div className="form-row">
                        <div >
                            <h2>Billing Details</h2>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputName">Name</label>
                                        <input type="text" className="form-control" id="inputName" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputLastName">Last Name</label>
                                        <input type="text" className="form-control" id="inputLastName" placeholder="Your Last Name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputAddress">Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputCity">City</label>
                                        <input type="text" className="form-control" id="inputCity" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputState">State</label>
                                        <select id="inputState" className="form-control">
                                            <option defaultValue>Choose...</option>
                                            <option>NJ</option>
                                            <option>NY</option>
                                            <option>WA</option>
                                            <option>CA</option>
                                            <option>PA</option>
                                            <option>TX</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="inputZip">Zip</label>
                                        <input type="text" className="form-control" id="inputZip" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputCreditCard">Credit Card</label>
                                        <input type="text" className="form-control" id="inputCreditCard" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="inputCVV">CVV</label>
                                        <input type="text" className="form-control" id="inputCVV" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="inputExpirationDate">Expiration Date</label>
                                        <input type="text" className="form-control" id="inputExpirationDate" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>

                        </div>
                        <div className="col-md-6">
                            <h2>Order Summary</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Wristband 1</td>
                                        <td>$10.00</td>
                                    </tr>
                                    <tr>
                                        <td>Wristband 2</td>
                                        <td>$15.00</td>
                                    </tr>
                                    <tr>
                                        <td>Wristband 3</td>
                                        <td>$20.00</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="d-flex justify-content-end">
                                <div className="total">Total: $45.00</div>
                            </div>
                            <button className="btn btn-primary w-100 mt-3">Complete Purchase</button>
                        </div>
                    </div>
                </div>
            </main>
        </Default>
    )
}

export default Checkout
