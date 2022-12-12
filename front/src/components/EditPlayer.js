import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Players from "./Players.js";
import { useNavigate } from "react-router-dom";
import "./css/EditPlayer.css";

function EditPlayer() {
  const [id, setId] = useState("");
  const [player, setPlayer] = useState("");
  const [points, setPoints] = useState("");
  const [sets, setSets] = useState("");

  let history = useNavigate();

  var index = Players.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleUpdate = (e) => {
    e.preventDefault();

    let p = Players[index];
    p.Player = player;
    p.Points = points;
    p.Sets = sets;

    history("/");
  };

  useEffect(() => {
    setPlayer(localStorage.getItem("Player"));
    setPoints(localStorage.getItem("Points"));
    setSets(localStorage.getItem("Sets"));
    setId(localStorage.getItem("Id"));
  }, []);

  const handleCancel = (e) => {
    e.preventDefault();
    history("/");
  };

  return (
    <div>
      <Form className="d-grid gap-2">
        <Form.Group className="mb-3" controlId="formPlayer"></Form.Group>
        <Form.Control
          type="text"
          placeholder="Enter Player"
          value={player}
          required
          onChange={(e) => setPlayer(e.target.value)}
        ></Form.Control>
        <Form.Group className="mb-3" controlId="formPoints"></Form.Group>
        <Form.Control
          type="text"
          placeholder="Enter Points"
          value={points}
          required
          onChange={(e) => setPoints(e.target.value)}
        ></Form.Control>
        <Form.Group className="mb-3" controlId="formSets"></Form.Group>
        <Form.Control
          type="text"
          placeholder="Enter Sets"
          value={sets}
          required
          onChange={(e) => setSets(e.target.value)}
        ></Form.Control>
        <Container>
          <Button id="update" onClick={(e) => handleUpdate(e)} type="update">
            Update
          </Button>
          &nbsp;
          <Button id="cancel" onClick={(e) => handleCancel(e)} type="cancel">
            Cancel
          </Button>
        </Container>
      </Form>
    </div>
  );
}

EditPlayer.propTypes = {};

export default EditPlayer;
