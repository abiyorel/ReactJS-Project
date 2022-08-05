import React from 'react'

const InputGroup = ({total, name, setID}) => {
    // console.log();
    return (
        <div class="input-group mb-3">
        <select 
        onChange={d => setID(d.target.value)}
        class="form-select" id={name}>
        <option value="1" selected>Choose...</option>
        {[...Array(total).keys()].map(c=>{
            return(
                <option value={c + 1}>{name} - {c + 1}</option>
            );
        })}
        </select>
        </div>
    );
};

export default InputGroup;