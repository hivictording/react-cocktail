import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ name, image }) => {
  return (
    <div className="col-10 col-md-6 col-lg-4 col-xl-3 mx-auto my-2">
      <Link to={`/cocktail/${name}`}>
        <div className="card">
          <img src={`${image}`} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title text-center text-muted">{name}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cocktail;
