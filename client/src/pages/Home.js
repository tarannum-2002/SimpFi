import React from "react";
import * as Components from "./Components";
import { useState } from "react";
import Stock from "../images/stock.jpg";

function Home() {
  return (
    <div className="main">
      <Components.DivBox>
        <Components.Div>
          <Components.Heading>
            Business <br /> Budgeting <br /> With Us <br />
          </Components.Heading>
        </Components.Div>
        <img src="{Stock}" alt="stock market" />
      </Components.DivBox>

      <div className="content">
        <h2>Use our app to calculate and keep track of your expenses!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
          corrupti ex facilis ut fuga, qui odit temporibus dolor, vitae aliquam
          repudiandae maxime. A, sed. Repellendus dolores quaerat reiciendis
          recusandae earum? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Quia corrupti ex facilis ut fuga, qui odit temporibus dolor,
          vitae aliquam repudiandae maxime. A, sed. Repellendus dolores quaerat
          reiciendis recusandae earum?
        </p>
      </div>

      <div className="content1">
        <ul className="features">
          <li>
            <h3>Feature 1</h3>
            <br />
            <p>
              Quia corrupti ex facilis ut fuga, qui odit temporibus dolor, vitae
              aliquam repudiandae maxime. A, sed. Repellendus dolores quaerat
              reiciendis recusandae earum?
            </p>
          </li>
          <li>
            <h3>Feature 2</h3>
            <br />
            <p>
              Quia corrupti ex facilis ut fuga, qui odit temporibus dolor, vitae
              aliquam repudiandae maxime. A, sed. Repellendus dolores quaerat
              reiciendis recusandae earum?
            </p>
          </li>
          <li>
            <h3>Feature 3</h3>
            <br />
            <p>
              Quia corrupti ex facilis ut fuga, qui odit temporibus dolor, vitae
              aliquam repudiandae maxime. A, sed. Repellendus dolores quaerat
              reiciendis recusandae earum?
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
