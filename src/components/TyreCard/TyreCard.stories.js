import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

const stories = storiesOf("Tyre Card", module);

stories.addDecorator(withKnobs);

import TyreCard from "./TyreCard";
import "./TyreCard.css";

stories.add("tyre card with logo", () => (
  <TyreCard
    visibleLogo={boolean("Visible Logo", true)}
    logo={
      "http://www.carlogos.org/tire-brands-logos/Michelin-logo-4000x1000.png"
    }
    logoDesc="Michelin tyre"
    brand={text("Tyre Brand", "Michelin")}
    model={text("Tyre Model", "Energy XM2")}
    tyreLabel={text("Tyre Label", "185/60R15")}
    price={text("Tyre Price", "£65")}
    tyreImg={text(
      "Tyre Image",
      "https://tyrepricemalaysia.com.my/image/cache/catalog/tyre-price-malaysia-michelin-tyre-xm2-581x708.png"
    )}
    fuelRating={"A"}
    wetRating={"B"}
    noiseRating={"66"}
    speedRating={"Y"}
    loadRating={"91"}
  />
));
