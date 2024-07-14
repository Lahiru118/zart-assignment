import React from "react";
import classes from "./Main.module.css";
import Greet from "../Greet/Greet";
import HotCollections from "../HotCollections/Hotcollection";
import Collections from "../Collections/Collections";

const Main = () => {
  return (
    <section className={classes.main}>
      <Greet />
      <HotCollections />
      <div className={classes.tableLarge}>
        <Collections />
      </div>
    </section>
  );
};

export default Main;
