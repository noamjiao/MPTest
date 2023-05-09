import React, { useState } from 'react';
import './FullNamePhoneForm.css';

const FullNamePhoneForm = () => {
    const [input, setInput] = useState({ fullName: '', phoneNumber: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleInputChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const isValidPhoneNumber = (phoneNumber) => {
        return /^\d{10,11}$/.test(phoneNumber);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { fullName, phoneNumber } = input;
        const nameParts = fullName.trim().split(/\s+/);

        if (nameParts.length < 2) {
            setErrorMessage('* must be your first and last name');
            setSuccess(false);
            return;
        }

        if (!isValidPhoneNumber(phoneNumber)) {
            setErrorMessage('* numbers only (ex. 1231231234)');
            setSuccess(false);
            return;
        }

        setErrorMessage('');
        setSuccess(true);
    };

    return (
        <div className="FullNamePhoneForm">
            {success ? (
                <div className="success-screen">
                    <h2>Success!</h2>
                    <p>Welcome, {input.fullName}.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={input.fullName}
                        onChange={handleInputChange}
                        required
                    />
                    <br />
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={input.phoneNumber}
                        onChange={handleInputChange}
                        required
                    />
                    <br />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default FullNamePhoneForm;
