import React from 'react';
import './App.css';
import  QRCode  from 'qrcode.react';

const GenerateQRCode = () => {
    return (
        <div className="codeWrapper">
             <div className="leftSection">
                <QRCode
                    id="123456"
                    value="123456"
                    size={290}
                    level={"H"}
                    includeMargin={true}
                />
             </div>
             <div className="rightSection">
                <div>Ticket Details</div>
             </div>
        </div>
    )
}

export default GenerateQRCode;