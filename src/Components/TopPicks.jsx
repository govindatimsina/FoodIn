import React, { useEffect, useState } from "react";
import { topPicksData } from "../Assets/data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function TopPicks() {
  const [WinWidth, setWinWidth] = useState(window.innerWidth);
  const getWinWidth = () => {
    setWinWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", getWinWidth);
    return () => {
      window.removeEventListener("resize", getWinWidth);
    };
  }, [WinWidth]);

  const cards = topPicksData.map((items) => {
    return (
      <SplideSlide className="m-auto">
        <Card
          style={{
            width: "auto",
            height: "auto",
            border: "none",
          }}
          className=" text-center p-3 m-auto"
        >
          <Card.Img
            variant="top"
            src={items.url}
            style={{ width: "150px", height: "150px", margin: "auto" }}
          />
          <Card.Body>
            <Card.Title>{items.name}</Card.Title>
            <Card.Text>${items.price}</Card.Text>
            <Button className="btn btn-success">Add to Cart</Button>
          </Card.Body>
        </Card>
      </SplideSlide>
    );
  });
  return (
    <div style={{ maxWidth: "1500px" }}>
      <h1 className="mt-5 text-center">Top Picks</h1>
      <Splide
        options={
          WinWidth < 500
            ? { perPage: 1 }
            : { perPage: 3, gap: "1rem", drag: "free" }
        }
        className="text-center"
      >
        {cards}
      </Splide>
    </div>
  );
}
