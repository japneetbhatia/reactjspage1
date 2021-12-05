import React from 'react'
import "./Form.css"

function Form() {
    return (
        <div className="container">            
                <form className="form-wrapper">
                    <div className="name">
                        <label className="label">
                            Contact Name<span className="mandatory">*</span>
                        </label>
                        <input className="input" type="tel" />
                    </div>
                    <div className="name">
                        <label className="label">
                            Contat Number<span className="mandatory">*</span>
                        </label>
                        <input className="input" type="text" />
                    </div>
                    <div className="name">
                        <label className="label">
                            Contact Email<span className="mandatory">*</span>
                        </label>
                        <input className="input" type="email" />
                    </div>                  
                </form>
        </div>
    )
}

export default Form
