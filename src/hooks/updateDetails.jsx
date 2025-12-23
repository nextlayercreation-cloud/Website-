import React, { useState } from 'react';
import { useAuth } from './AuthContext';

function UpdateDetails({ onClose }) {
    const { setCompanyName, setWhatsappNumber } = useAuth();
    const [companyName, setCompanyNameInput] = useState("");
    const [whatsappNumber, setWhatsappNumberInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (companyName=="" || whatsappNumber=="") {
            if(companyName=="" && whatsappNumber!="")
                setWhatsappNumber("+91"+whatsappNumber);
            else if(whatsappNumber=="" && companyName!="")
                setCompanyName(companyName);
            else if(companyName=="" && whatsappNumber=="")
                alert("Please fill at least one field to update details.");
        }
        else if(companyName!="" && whatsappNumber!=""){
            setCompanyName(companyName);
            setWhatsappNumber("+91"+whatsappNumber);
        }
        if (onClose) onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-card">
                <button className="modal-close" onClick={onClose}>&times;</button>
                <h2 className="modal-title">Update Details</h2>
                <form onSubmit={handleSubmit} className="modal-form">
                    <label className="form-label" htmlFor="companyName">Company Name</label>
                    <input
                        className="form-input"
                        type="text"
                        name="companyName"
                        id="companyName"
                        value={companyName}
                        onChange={e => setCompanyNameInput(e.target.value)}
                        placeholder="Enter company name"
                    />
                    <label className="form-label" htmlFor="whatsappNumber">WhatsApp Number</label>
                    <input
                        className="form-input"
                        type="tel"
                        name="whatsappNumber"
                        id="whatsappNumber"
                        value={whatsappNumber}
                        onChange={e => setWhatsappNumberInput(e.target.value)}
                        placeholder="Enter WhatsApp number"
                    />
                    <button className="btn-primary" type="submit">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateDetails;