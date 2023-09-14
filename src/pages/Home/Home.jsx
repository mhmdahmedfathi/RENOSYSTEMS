import Sidebar from "../../components/Bars/sideBar";
import Navbar from "../../components/Bars/navBar";
import "../../components/Styles/global.scss";
import Header from "../../components/Header/header";
import Table from "../../components/Table/Table";
import AddUser from "../../components/Modal/Modal";
import { useState } from "react";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex-horizontal">
      <Sidebar />
      <div className="flex-vertical max-size">
        <Navbar />
        <Header setOpenModal={setOpenModal} />
        <Table modal={openModal} />
        <AddUser openModal={openModal} setOpenModal={setOpenModal} />
      </div>
    </div>
  );
};

export default Home;
