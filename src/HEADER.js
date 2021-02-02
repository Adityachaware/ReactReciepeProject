import React from "react";

const HEADER = (props) => {

    const {search,handleInputChange,onSearchClick} = props;
  return (
    <div>
      <div className="container-fluid headercustom text-center">
        <div className="row h-100">
          <div className="col-sm-12 my-auto">
            <div className="display-1">Food Reciepe</div>
            <div className="input-group mb-3 w-50 mx-auto">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Reciepe to search..."
                value={search}
                onChange={handleInputChange}
              />
              <button class="input-group-text" type="submit" onClick={onSearchClick}>Enter Reciepe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HEADER;
