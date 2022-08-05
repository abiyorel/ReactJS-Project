import React from 'react'

const FilterBTN = ({name, index, items, task, setPageNumber}) => {
    return (
        <div>
            <style jsx>
                {`
                .a:checked + label{
                    background-color: #4D5656;
                    color: white;
                }
                input[type="radio"] {
                    display: none;
                }`}
            </style>
        <div className="form-check">
        <input onClick={() => {
            setPageNumber(1);
            task(items);
        }} className="form-check-input a" type="radio" name={name} id={`${name}-${index}`} />
        <label class="btn btn-outline-secondary" for={`${name}-${index}`}>{items}</label>
        </div>
        </div>
    );
};

export default FilterBTN;