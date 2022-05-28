import React from "react";

const divStyle = {
  color: "#000080",
  margin: "auto",
  display: "block",
  position: "absolute",
  padding: "12rem",
};

const PageNotFound = () => {
  return (
    <>
      <div style={divStyle}>
        <h1>
          <b>Грешка 404 </b> - Страницата не е намерена!
        </h1>
        <p>
          Oops! Изглежда сте се загубили! :) Причините може да са следните:
          <ul>
            <li>
              <i>Счупен линк</i>
            </li>
          </ul>
          <ul>
            <li>
              <i>Несъществуваща страница</i>
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              <i>Премахната страница</i>
            </li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default PageNotFound;
