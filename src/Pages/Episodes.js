import React, {useState, useEffect} from 'react'
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Episodes = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let {air_date, name} = info;
  let api = `https://rickandmortyapi.com/api/episode/${id}`;
  useEffect(() => {
    (async function(){
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      let a = await Promise.all(
        data.characters.map((b) => {
          return fetch(b).then((res) => res.json());
        })
      );
      setResults(a);
    })()
  },[api]);
  return (
    <div className="container">
      <div className="row mb-5">
        <h1 className="text-center text-secondary mb-3 pt-5 mt-5">
          Episode name : {" "}
          <span className="text-info">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center text-secondary">
          Air Date <span className="text-info">{air_date === "" ? "Unknown" : air_date}</span>
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <div className="text-center fw-bold fs-4 mb-4 text-info">
          Pick Episodes 
          </div>
          <InputGroup setID={setID} name="Episode" total={51} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episodes;