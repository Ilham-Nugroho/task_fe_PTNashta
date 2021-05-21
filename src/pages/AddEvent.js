import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { Modal } from "react-bootstrap";

import { API } from "../config/api";
import { PublishModal } from "../components/modal/PublishModal";

export const AddEvent = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    data: eventHome,
    error: eventHomeError,
    loading: eventHomeLoading,
    refetch: eventHomeRefetch,
  } = useQuery("eventHomeCache", async () => {
    return API.get("/");
  });

  const [form, setForm] = useState({
    image: null,
    title: "",
    location: "",
    participant: "",
    note: "",
    data: "",
  });

  const { image, title, location, participant, note, date } = form;

  const createNewEvent = useMutation(async () => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const body = new FormData();

    body.append("title", title);
    body.append("location", location);
    body.append("participant", participant);
    body.append("note", note);
    body.append("date", date);
    body.append("image", image);

    const response = await API.post("/", body, config);

    return response;
  });

  console.log(createNewEvent);

  const handleChange = (event) => {
    const tempForm = { ...form };

    tempForm[event.target.name] =
      event.target.type === "file" ? event.target.files[0] : event.target.value;
    setForm(tempForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    createNewEvent.mutate();

    if (createNewEvent?.isSuccess == true) {
      setShowModal(true);
    }

    setForm({
      image: null,
      title: "",
      location: "",
      participant: "",
      note: "",
      date: "",
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    eventHomeRefetch();
  }, []);
  return (
    <div className="container row">
      <div className="col-lg-6" style={{ backgroundColor: "#FF9F00" }}>
        <h3 className="mt-4">+Add Event</h3>

        <form onSubmit={(event) => handleSubmit(event)}>
          {createNewEvent?.error?.response?.data && (
            <div class="alert alert-danger" role="alert">
              {createNewEvent?.error?.response?.data?.message}
            </div>
          )}
          <div>
            <div>
              <div className="row ">
                <div className="col-lg-6 mb-3">
                  <input
                    autocomplete="off"
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Title"
                    value={title}
                    onChange={(event) => handleChange(event)}
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <input
                    autocomplete="off"
                    type="text"
                    name="location"
                    className="form-control"
                    placeholder="Location"
                    value={location}
                    onChange={(event) => handleChange(event)}
                  />
                </div>
              </div>
              <div className="row ">
                <div className="col-lg-6 mb-3">
                  <input
                    autocomplete="off"
                    type="text"
                    name="participant"
                    className="form-control"
                    placeholder="Participant"
                    value={participant}
                    onChange={(event) => handleChange(event)}
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <input
                    autocomplete="off"
                    type="datetime-local"
                    name="date"
                    className="form-control"
                    placeholder="Date"
                    value={date}
                    onChange={(event) => handleChange(event)}
                  />
                </div>
              </div>
              <div>
                <textarea
                  autocomplete="off"
                  type="text"
                  name="note"
                  className="form-control mb-4"
                  placeholder="Note"
                  rows="4"
                  value={note}
                  onChange={(event) => handleChange(event)}
                />
              </div>
              <div>
                <input
                  type="file"
                  name="image"
                  onChange={(event) => handleChange(event)}
                />
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <button className="btn btn-lg form-btn" type="submit">
                Create Plan
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="d-flex col-lg-6" style={{ backgroundColor: "#ffefb8" }}>
        <div>
          <img
            src="/img/meeting.png"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
      <Modal show={showModal} onHide={closeModal} size="md">
        <Modal.Body>
          <PublishModal />
        </Modal.Body>
      </Modal>
    </div>
  );
};
