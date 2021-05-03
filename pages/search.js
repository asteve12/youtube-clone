import React, { useState, useEffect } from "react";
//component
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Content from "../component/Content";

//simple  bar
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

function Search(props) {
  const [searchPage, setSearchPage] = useState(true);
  return (
    <SimpleBar style={{ maxHeight: "100vh", overflowX: "hidden" }}>
      <Header></Header>
      <div className="row  " style={{ height: "100%" }}>
        <Sidebar></Sidebar>
        <Content searchPage={searchPage}></Content>
      </div>
    </SimpleBar>
  );
}

export default Search;
