import React, {useState, useEffect} from 'react'
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Location = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let {name, type, dimension} = info;
  let api = `https://rickandmortyapi.com/api/location/${id}`;
  useEffect(() => {
    (async function(){
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      let a = await Promise.all(
        data.residents.map((b) => {
          return fetch(b).then((res) => res.json());
        })
      );
      setResults(a);
    })()
  },[api]);
  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center text-secondary mb-3  pt-5 mt-5">
          Location name : {" "}
          <span className="text-info">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center text-secondary">
          Dimension : <span className="text-info">{dimension === "" ? "Unknown" : dimension}</span>
        </h5>
        <h6 className="text-center text-secondary">
          Type : <span className="text-info">{type === "" ? "Unknown" : type}</span>
        </h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <div className="text-center fw-bold fs-4 mb-4 text-info">
          Pick Locations
          </div>
          <InputGroup setID={setID} name="Location" total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location;