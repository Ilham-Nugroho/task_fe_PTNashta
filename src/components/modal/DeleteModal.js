import React from "react";
import { useHistory } from "react-router";

export const DeleteModal = (props) => {
  const { closeModal } = props;

  const history = useHistory();
  return (
    <div>
      <div className="mt-4 d-flex flex-column align-items-center justify-content-center">
        <p style={{ fontWeight: "600", fontSize: "20px" }}>
          Your Event Has Been Deleted!
        </p>
        <img src="/img/qcheck.png" style={{ width: "150px", height: "auto" }} />
      </div>
      <div className="mt-4 d-flex align-items-center justify-content-center">
        <button onClick={() => history.push("/")} className="btn modal-btn">
          <p
            style={{
              fontWeight: "600",
              fontSize: "20px",
              margin: "0px",
              padding: "0px",
            }}
          >
            CONFIRM
          </p>
        </button>
      </div>
    </div>
  );
};
