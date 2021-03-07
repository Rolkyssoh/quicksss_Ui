import React from 'react';

import './form-select.styles.scss';

const FormSelect = ({label,placehoder,selectChange,val,options,datas,...othersProps}) => {
    console.log('option : ', datas)
    return(
        <div>
            <label>{label}</label>
            <select
                className="select"
                {...othersProps}
                onChange={selectChange}
            >
              <option  value="" disabled selected >{placehoder}</option>
              {
                  datas.map((data) => (
                    <option key={data.id} value={data.libelle}>{data.libelle}</option>
                  ))
              }
            </select>
        </div>
    )
};

export default FormSelect;