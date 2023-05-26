import React from 'react';
import QRCode from "qrcode.react";

const Practice = () => {
    return (
        <div>
            <div>
        <QRCode value="https://www.google.com/" style={{marginRight: 50 }} />
        <p>google</p>
    </div>
        </div>
    );
};

export default Practice;