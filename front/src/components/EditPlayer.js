import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Players from "./Players.js";
import { useNavigate } from "react-router-dom";


/*
It was impressing that you were implementing the point storing system 
in the table using hooks instead of classes and 
handling the rendering of the page in a different way. 
Good job! 
*/



function EditPlayer() {
  const [id, setId] = useState("");
  const [player, setPlayer] = useState("");
  const [points, setPoints] = useState("");
  const [sets, setSets] = useState("");

  let history = useNavigate();

  var index = Players.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = Players[index];
    a.Player = player;
    a.Points = points;
    a.Sets = sets;

    history("/");
  };

  useEffect(() => {
    setPlayer(localStorage.getItem("Player"));
    setPoints(localStorage.getItem("Points"));
    setSets(localStorage.getItem("Player"));
    setId(localStorage.getItem("Id"));
  }, []);

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
        <Button onClick={(e) => handleSubmit(e)} type="update">
          Update
        </Button>
      </Form>
    </div>
  );
}

EditPlayer.propTypes = {};

export default EditPlayer;
