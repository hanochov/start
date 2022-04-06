import React from "react";
import { useSelector } from "react-redux";

const ListView = () => {

    const currentColor = useSelector((state:any)=> state.gallery.currentColor)

  return (
    <div>
      <h1>List</h1>
      <h2>{currentColor}</h2>
    </div>
  );
};

export default ListView;
