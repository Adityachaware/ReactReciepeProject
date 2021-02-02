import React from 'react'

const RECIEPEITEM = ({res}) => {
    return (
        <div className="col-md-3">
            <div className="card">
            <img src={res.recipe.image}/>
          </div>
          <div className="card">
            <div className="card-body">{res.recipe.label}</div>
          </div>
        </div>
    )
}

export default RECIEPEITEM
