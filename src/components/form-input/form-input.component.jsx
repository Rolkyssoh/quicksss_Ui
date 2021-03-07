import React from 'react'; 
 
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, noWidth , ...otherProps}) => (
    <div className="group">
        <input 
            className={`${noWidth ? 'no-width' : 'form-input'}`} 
            onChange={handleChange}  {...otherProps}
        />
        {
            label ?  
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>)
            : null
        }
    </div> 
)

export default FormInput;