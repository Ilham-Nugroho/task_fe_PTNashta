import React, { useEffect } from "react";
import { Table, Spinner } from "react-bootstrap";
import { useQuery, useMutation } from "react-query";

import { API } from "../config/api";

export const Dashboard = () => {
  const {
    data: event,
    error: eventError,
    loading: eventLoading,
    refetch,
  } = useQuery("eventCache", async () => {
    return API.get("/");
  });

  console.log(event?.data?.events);
  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="container">
      <Table bordered hover className="table">
        <thead
          className="text-align-center"
          style={{ backgroundColor: "#E5E5E5" }}
        >
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Location</th>
            <th>Date</th>
            <th>Participant</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "white" }}>
          {eventLoading ? (
            <Spinner animation="border" role="status" variant="warning">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            event?.data?.events?.map((data, index) => (
              <tr key={data?.id}>
                <td>{index + 1}</td>
                <td>{data?.title}</td>
                <td>{data?.location}</td>
                <td>{data?.date}</td>
                <td>{data?.participant}</td>
                <td>{data?.note}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};
