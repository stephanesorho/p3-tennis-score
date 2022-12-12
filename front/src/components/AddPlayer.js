import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Players from "./Players.js";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import "./css/AddPlayer.css";

function AddPlayer() {
  const initialValues = { player: "", points: "", sets: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  let history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);

      const ids = uuid();
      let uniqueId = ids.slice(0, 8);

      console.log(formValues);

      let aPlayer = formValues.player,
        aPoints = formValues.points,
        aSets = formValues.sets;

      Players.push({
        id: uniqueId,
        Player: aPlayer,
        Points: aPoints,
        Sets: aSets,
      });

      history("/");
    }
  }, [formErrors, formValues, history, isSubmit]);

  const validate = (values) => {
    const errors = {};

    if (!values.player) {
      errors.player = "Player field is required!";
    }

    if (!values.points) {
      errors.points = "Points field is required!";
    } else if (
      values.points !== ("00" || "0") &&
      values.points !== "15" &&
      values.points !== "30" &&
      values.points !== "40"
    ) {
      errors.points = "Invalid points: Must be either 00 - 15 - 30 or 40!";
    }

    if (!values.sets) {
      errors.sets = "Sets field is required!";
    } else if (!Number.isInteger(parseInt(values.sets))) {
      errors.sets = "Invalid entry: must be an integer!";
    }

    return errors;
  };

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
          name="player"
          required
          value={formValues.player}
          onChange={handleChange}
        ></Form.Control>
        <p> {formErrors.player} </p>
        <Form.Group className="mb-3" controlId="formPoints"></Form.Group>
        <Form.Control
          type="text"
          placeholder="Enter Points"
          name="points"
          required
          value={formValues.points}
          onChange={handleChange}
        ></Form.Control>
        <p> {formErrors.points} </p>
        <Form.Group className="mb-3" controlId="formSets"></Form.Group>
        <Form.Control
          type="text"
          name="sets"
          placeholder="Enter Sets"
          value={formValues.sets}
          required
          onChange={handleChange}
        ></Form.Control>
        <p> {formErrors.sets} </p>
        <Container>
          <Button id="submit" onClick={(e) => handleSubmit(e)} type="submit">
            Submit
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

AddPlayer.propTypes = {};

export default AddPlayer;
