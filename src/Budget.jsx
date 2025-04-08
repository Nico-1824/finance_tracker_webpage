import App from "./App";
import "./Budget.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateBudget } from './util/helper.js';


let purchases = [
    
];



function Budget() {
    const [showModal, setShowModal] = useState(false);
    const [purchase, setPurchase] = useState('');
    const [cost, setCost] = useState('');
    const [date, setDate] = useState('');

    function handleAddPurchase() {
        const today = new Date().toISOString().split('T')[0];
        console.log(today)
        setDate(today)
        const newPurchase = {
            title: purchase,
            cost: cost,
            date: date
        }

        updateBudget(cost);
        purchases.push(newPurchase)
    }

    const navigate = useNavigate();

    return (
        <>
        
            {showModal && (
                <div id='overlay'>
                    <div id='modal'>
                        <div>
                            <h1>Add New Purchase</h1>
                            <input 
                            type="text" 
                            placeholder="Purchase Name" 
                            id="purchase"
                            value={purchase}
                            onChange={(e) => setPurchase(e.target.value)}></input>                        
                            <input 
                            type="text" 
                            placeholder="Cost" 
                            id="cost"
                            value={cost}
                            onChange={(e) => setCost(e.target.value)}></input>
                            <button
                            onClick={() => {
                                setShowModal(false);
                                handleAddPurchase();
                            }}>Submit</button>
                        </div>
                    </div>
                </div>
            )}
            <div className={showModal ? "blurred" : ""}>
                <header>
                    <nav>
                    <h1>Finance Tracker</h1>
                    <ul>
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/budget')}>Budget</li>
                        <li>Statistics</li>
                    </ul>
                    </nav>
                </header>
                <div id='body'>
                    <div id="options">
                        <button type="button" onClick={() => setShowModal(true)}>Add Purchase</button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>Purchases</td>
                                <td>Cost</td>
                                <td>Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                purchases.map(purchase => (
                                    <tr>
                                        <td>{purchase.title}</td>
                                        <td>{purchase.cost}</td>
                                        <td>{purchase.date}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};

export default Budget