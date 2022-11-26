import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Players from "./Players.js";
import { Link, useNavigate } from "react-router-dom";

function Match() {
  let history = useNavigate();

  const handleEdit = (id, player, points, sets) => {
    localStorage.setItem("Id", id);
    localStorage.setItem("Player", player);
    localStorage.setItem("Points", points);
    localStorage.setItem("Sets", sets);
  };

  const handleDelete = (id) => {
    var index = Players.map(function (e) {
      return e.id;
    }).indexOf(id);

    Players.splice(index, 1);

    history("/");
  };

  return (
    <Fragment>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Player</th>
            <th>Points</th>
            <th>Sets Won</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Players && Players.length > 0
            ? Players.map((item) => {
                return (
                  <tr>
                    <td>{item.Player}</td>
                    <td>{item.Points}</td>
                    <td>{item.Sets}</td>
                    <td>
                      <Link to={"/edit"}>
                        <Button
                          onClick={() =>
                            handleEdit(
                              item.id,
                              item.Player,
                              item.Points,
                              item.Sets
                            )
                          }
                        >
                          Edit
                        </Button>
                      </Link>
                      <Button onClick={() => handleDelete(item.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })
            : "No data available"}
        </tbody>
      </Table>
      <Link className="d-grid gap-2" to="/create">
        <Button size="lg">Add player</Button>
      </Link>
    </Fragment>
  );
}

Match.propTypes = {};

export default Match;
