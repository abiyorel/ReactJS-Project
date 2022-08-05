import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

const CardDetails = () => {
    let {id} = useParams();
    let [fetchedData, updateFetchedData] = useState([]);
    let {name, image, location, origin, gender, species, status, type} = fetchedData;
    // console.log(fetchedData);
    let api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
    (async function () {
    let data = await fetch(api).then((res) => res.json());
    updateFetchedData(data);
    })();
    }, [api]);
    
    return (
    <div className="container d-flex justify-content-center mb-4">
        <div className="d-flex flex-column gap-3">
            <h1 className="text-center text-secondary">{name}</h1>
            <img src={image} alt={name} className="img-fluid" />
            {(()=>{
                    if(status === "Alive"){
                        return(<div className="badge bg-success fs-5">{status}</div>);
                    }
                    else if(status === "Dead"){
                        return(<div className="badge bg-danger fs-5">{status}</div>);
                    }
                    else {
                        return(<div className="badge bg-secondary fs-5">{status}</div>);
                    }
                })()}
            <div className="content">
                <div className="">
                    <span className="fw-bold text-secondary">Gender : </span>
                    <span className="fw-semibold text-info">{gender}</span>
                </div>
                <div className="">
                    <span className="fw-bold text-secondary">Species : </span>
                    <span className="fw-semibold text-info">{species}</span>
                </div>
                <div className="">
                    <span className="fw-bold text-secondary">Type : </span>
                    <span className="fw-semibold text-info">{type === "" ? "Unknown" : type}</span>
                </div>
                <div className="">
                    <span className="fw-bold text-secondary">Origin : </span>
                    <span className="fw-semibold text-info">{origin?.name}</span>
                </div>
                <div className="">
                    <span className="fw-bold text-secondary">Location : </span>
                    <span className="fw-semibold text-info">{location?.name}</span>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CardDetails