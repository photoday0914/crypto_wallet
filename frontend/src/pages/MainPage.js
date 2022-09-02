
import React, { useState } from 'react';
import etherLogo from "../ether_logo.png";

function MainPage() {

    const [balance, setBalance] = useState(0);
    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState(0);
    const [transactions, setTransactions] = useState([{ address: "asdf", amount: 10, status: "confirmed" }, { address: "asdf", amount: 10, status: "unconfirmed" }, { address: "asdf", amount: 10, status: "confirmed" }, { address: "asdf", amount: 10, status: "unconfirmed" }]);


    return (
        <div>
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a
                    className="navbar-brand col-sm-3 col-md-2 mr-0"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ethereum wallet
                </a>
            </nav>
            <div className="container-fluid mt-5 d-flex justify-content-center">
                <div className="row">
                    <main role="main" className="col-lg-12 d-flex text-center">
                        <div className="content mr-auto ml-auto" style={{ width: "500px" }}>
                            <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={etherLogo} width="150" />
                            </a>
                            <h1>Your balance is: {balance} _ Ether</h1>
                            <form onSubmit={(event) => {
                                event.preventDefault()
                                const recipient_address = recipient.value;
                                const transfer_amount = amount.value;
                                // const amount = window.web3.utils.toWei(this.amount.value, 'Ether')
                                // this.transfer(recipient, amount)

                                console.log(transfer_amount + "Ether is transmitted to address: " + recipient_address)
                            }}>
                                <div className="form-group mr-sm-2">
                                    <input
                                        id="recipient"
                                        type="text"
                                        ref={(input) => { setRecipient(input) }}
                                        className="form-control"
                                        placeholder="Recipient Address"
                                        required />
                                </div>
                                <div className="form-group mr-sm-2 mt-5">
                                    <input
                                        id="amount"
                                        type="text"
                                        ref={(input) => { setAmount(input) }}
                                        className="form-control"
                                        placeholder="Amount"
                                        required />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mt-5">Send</button>
                            </form>
                            <div className='mt-1'> Current fee: 234Gwei</div>
                            <table className="table mt-3">
                                <thead>
                                    <tr>
                                        <th scope="col">Recipient</th>
                                        <th scope="col">Value</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map((tx, key) => {
                                        return (
                                            <tr key={key} >
                                                <td>{tx.address}</td>
                                                <td>{tx.amount}</td>
                                                <td>{tx.status}</td>
                                                {/* <td>{tx.returnValues.to}</td>
                                                <td>{window.web3.utils.fromWei(tx.returnValues.value.toString(), 'Ether')}</td> */}
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default MainPage