import React from 'react'
import "./kyc.css"
import Form from './Form'
import SidebarOption from "./SidebarOption"

function kyc() {
    const handleFormReloading = (e) => {
        e.preventDefault();
    }
    return (
        <div className="kyc">
            <div className="sidebar">
                <div className="heading">
                    <h2>KYC Form</h2>
                </div>
                <div className="para">
                    <p>Complete and submit the form <br /> to accept payments.</p>
                </div>
                <div className="button">
                <SidebarOption title="Contact" selected="true" />
                <SidebarOption title="Business Overview" />
                <SidebarOption title="Business Details" />
                </div>
            </div>
            <div className="main">
                <div className="header">
                    <h1>CONTACT INFO</h1>
                    <h2>X</h2>
                </div>
                <div className="form">
                    <Form />
                </div>
                <div className="line"></div>
                <div className="footer">
                    <button className="save" onClick={handleFormReloading}> <span className="savewriiten">Save </span></button>
                    <button className="savenext" onClick={handleFormReloading}> <span className="savenextwritten">Save & Next</span></button>
                </div>
            </div>
        </div>
    )
}

export default kyc
