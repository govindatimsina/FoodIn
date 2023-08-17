import React, { useState } from "react";
import { mealData } from "../Assets/mealData";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css";
export default function Meal() {
  const [filteredMeals, setFilteredMeals] = useState(mealData);
  const filteredItems = (category) => {
    setFilteredMeals(
      mealData.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <div>
      <h1 className="mt-5 text-center">Our Meals</h1>
      <div className="d-flex justify-content-center">
        <button
          onClick={() => setFilteredMeals(mealData)}
          className="px-4 py-2 mx-2 border rounded border-success menuBtns"
        >
          All
        </button>
        <button
          onClick={() => filteredItems("pizza")}
          className="px-4 py-2  mx-2 border rounded border-success menuBtns"
        >
          Pizza
        </button>
        <button
          onClick={() => filteredItems("chicken")}
          className="px-4 py-2 mx-2 border rounded border-success menuBtns"
        >
          Chicken
        </button>
      </div>
      <div className="row m-auto">
        {filteredMeals.map((items) => {
          return (
            <div
              key={items.id}
              className="col-lg-3 col-md-4 col-sm-6 col-6 text-center d-flex justify-content-center g-2"
              style={{ border: "1px solid grey" }}
            >
              <Card style={{ border: "none", width: "100%" }} key={items.id}>
                <div className="text-center">
                  <Card.Img
                    variant="top"
                    src={items.url}
                    style={{
                      width: "160px",
                      height: "150px",
                      margin: "1rem",
                      padding: "0.2rem",
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{items.name}</Card.Title>
                  <Card.Text>NPR:{items.price}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button className="btn btn-success">Add to Cart</Button>
                </Card.Footer>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
