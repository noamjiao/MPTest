import React from 'react';
import ReactDOM from 'react-dom';
import FullNamePhoneForm from '../react_components/FullNamePhoneForm';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    if (app) {
        ReactDOM.render(<FullNamePhoneForm />, app);
    }
});
