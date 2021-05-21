import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useQuery, useMutation } from "react-query";

import { Spinner } from "react-bootstrap";

import { API } from "../config/api";
import { Modal } from "react-bootstrap";

import { DeleteModal } from "../components/modal/DeleteModal";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    data: eventCard,
    error: eventCardError,
    loading: eventCardLoading,
    refetch: eventCardRefetch,
  } = useQuery("eventCardCache", async () => {
    return API.get("/");
  });

  const deleteLink = useMutation(async (id) => {
    await API.delete(`/${id}`);

    eventCardRefetch();
  });

  const clickToDelete = async (id) => {
    deleteLink.mutate(id);

    setShowModal(true);
  };

  console.log(eventCard?.data?.events);

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    eventCardRefetch();
  }, []);

  return (
    <div className="container row">
      {eventCardLoading ? (
        <Spinner animation="border" role="status" variant="warning">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : eventCard?.data?.events.length < 1 ? (
        <div className="mt-5 ml-3">
          <h1>No events yet</h1>
        </div>
      ) : (
        eventCard?.data?.events?.map((data) => (
          <div className="col-lg-4 col-md-6 mb-5">
            <Card
              eventData={data}
              key={data.id}
              clickToDelete={clickToDelete}
            />
          </div>
        ))
      )}
      <Modal show={showModal} onHide={closeModal} size="md">
        <Modal.Body>
          <DeleteModal />
        </Modal.Body>
      </Modal>
    </div>
  );
};
