import React from "react";
import "../App.css";
export default function QuickDelivery() {
  return (
    <div className="mainDelivery">
      <h3 className="mt-5 text-center">Quick Delivery App</h3>
      <div className="mainBox d-flex justify-content-center">
        <div className="imgBox">
          <img
            src="https://cdn.pixabay.com/photo/2016/12/20/22/32/holiday-shopping-1921658_1280.jpg"
            alt=""
            style={{ width: "100%" }}
            className="p-auto"
          />
        </div>
        <div className="textBox ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            nostrum totam? Ea ullam, dolores ab asperiores illum quas qui
            voluptate perspiciatis aspernatur quaerat voluptatum illo assumenda,
            dicta, minima sed libero cupiditate voluptas alias tempora ratione
            impedit ipsum architecto. Totam necessitatibus temporibus est,
            laudantium deleniti aliquam, laborum eius, in animi ullam minus
            eaque perferendis quas obcaecati placeat! Accusamus excepturi eaque
            officiis.
          </p>
          <button className="btn btn-success">Get the App</button>
        </div>
      </div>
    </div>
  );
}
