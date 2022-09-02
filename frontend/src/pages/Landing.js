import { Link } from "react-router-dom";
import axios from "axios";
import { sendEther, pushBlackList } from "../service/api";

export default function Landing() {
    function createWallet() {
        axios.get("http://localhost:3001/api/create-wallet").then((res) => {
            console.log(res.data);
            localStorage.setItem("Private Key", res.data.privateKey);
            localStorage.setItem("Wallet Address", res.data.address);
        });
    }

    function send() {
        // let privateKey = localStorage.getItem("Private Key");
        let privateKey =
            "bf1578f5b713ea14fb1675ae4aae47c425b71b06e4dde346e49ddf016a08bb61";
        sendEther(
            privateKey,
            "0x92713824d3b654aDED6609272B1C2631eFA89f7C",
            "0.001"
        );
    }

    function interact() {
        pushBlackList();
    }

    return (
        <>
            <h2>Landing</h2>
            <button onClick={createWallet}>Create Wallet</button>
            <button onClick={send}>Send Ether</button>
            <button onClick={interact}>Interact with Smart Contract</button>
        </>
    );
}
