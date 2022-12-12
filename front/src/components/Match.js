import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Match.css";

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
      <div className="fragment">
        <Table>
          <thead>
            <tr>
              <th>
                <span>Players</span>
              </th>
              <th>
                <span>Points</span>
              </th>
              <th>
                <span>Sets</span>
              </th>
              <th>
                <span>Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {Players && Players.length > 0
              ? Players.map((item) => {
                  return (
                    <tr>
                      <td className="players">
                        <span>{item.Player}</span>
                      </td>
                      <td className="scores">
                        <span>{item.Points}</span>
                      </td>
                      <td className="scores">
                        <span>{item.Sets}</span>
                      </td>
                      <td>
                        <Link to={"/edit"}>
                          <Button
                            className="editButton"
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
                        &nbsp;
                        <Button
                          className="deleteButton"
                          onClick={() => handleDelete(item.id)}
                        >
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
          <Button id="add" size="lg">
            Add player
          </Button>
        </Link>
      </div>
    </Fragment>
  );
}

Match.propTypes = {};

export default Match;
