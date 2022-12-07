import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Players from "./Players.js";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

function AddPlayer() {
  const [player, setPlayer] = useState("");
  const [points, setPoints] = useState("");
  const [set, setSets] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(player, null, 2));
    alert(JSON.stringify(points, null, 2));
    alert(JSON.stringify(set, null, 2));

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = player,
      b = points,
      c = set;
    Players.push({ id: uniqueId, Player: a, Points: b, Sets: c });

    history("/");
  };

  return (
    <div>
      <Form className="d-grid gap-2">
        <Form.Group className="mb-3" controlId="formPlayer"></Form.Group>
        <Form.Control
          type="text"
          placeholder="Enter Player"
          required
          onChange={(e) => setPlayer(e.target.value)}
        ></Form.Control>
        <Form.Group className="mb-3" controlId="formPoints"></Form.Group>
        <Form.Control
          type="text"
          placeholder="Enter Points"
          required
          onChange={(e) => setPoints(e.target.value)}
        ></Form.Control>
        <Form.Group className="mb-3" controlId="formSets"></Form.Group>
        <Form.Control
          type="text"
          placeholder="Enter Sets"
          required
          onChange={(e) => setSets(e.target.value)}
        ></Form.Control>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

AddPlayer.propTypes = {};

export default AddPlayer;
