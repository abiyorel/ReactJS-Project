import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({setStatus, setGender, setSpecies, setPageNumber}) => {
  let clear=()=>{
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber("");
    window.location.reload(false);
  }
  return (
    <div className="col-lg-3 col-12 mb-4">
      <div className="text-center fw-bold fs-4 mb-2 text-info">Filters</div>
      <div onClick={clear} style={{ cursor: "pointer" }} className="text-center text-secondary  mb-3"><i class="fas fa-trash-alt"></i> Clear Filters</div>
      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Gender setPageNumber={setPageNumber} setGender={setGender} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
      </div>
    </div>
  )
}

export default Filters;