import React from "react";

const Card = ({ eventData, clickToDelete }) => {
  const { id, title, location, date, participant, note, image } = eventData;
  return (
    <div>
      <div className="card" key={id}>
        <div style={{ backgroundColor: "#ffefb8" }}>
          <img
            src={image}
            // src="/img/meeting.png"
            style={{ width: "100%", height: "200px", objectFit: "contain" }}
          />
        </div>
        <div
          style={{
            backgroundColor: "#faf6f0",
            padding: "10px",
            borderBottom: "solid 1px",
          }}
        >
          <div className="d-flex align-items-center">
            <img
              src="/img/navigate.png"
              style={{ width: "50px", height: "50px" }}
            />
            <h6>{location}</h6>
            {/* <h6>location</h6> */}
          </div>
          <div>
            <h4>{title}</h4>
            <h6>{date}</h6>
            {/* <h4>location</h4>
            <h6>location</h6> */}
          </div>
        </div>
        <div
          style={{ padding: "10px", backgroundColor: "#faf6f0" }}
          className="d-flex align-items-center"
        >
          <h6 style={{ marginBottom: "0px" }}>{participant}</h6>
          {/* <h6 style={{ marginBottom: "0px" }}>participant</h6> */}
        </div>

        <div style={{ backgroundColor: "#ffefb8", padding: "0px 10px" }}>
          <p style={{ marginBottom: "0px" }}>Note:</p>
          <span>
            <p>{note}</p>
            {/* <p>note</p> */}
          </span>
        </div>

        <div
          style={{ backgroundColor: "#ffefb8", paddingBottom: "5px" }}
          className="d-flex justify-content-center"
        >
          <button
            className="btn btn-md delete-btn"
            onClick={() => clickToDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
