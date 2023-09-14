import reno from "../../assets/renosystem.png";
import upArrow from "../../assets/up-arrow.svg";
import drop from "../../assets/dropdown-1.svg";
import dashboard from "../../assets/dashboard.svg";
import { useState } from "react";
import "../Styles/DropDown/DropDown.scss";
import "./sideBar.scss";

const Sidebar = (props) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(true);
  const [open4, setOpen4] = useState(false);
  const [activeSection, setActiveSection] = useState({ id: 0 });

  return (
    <div className="sidebar flex-vertical">
      <div className="center">
        <img src={reno} width={"60%"} />
      </div>
      <div className="max-size">
        <input className="input " type="text" placeholder="Quick access" />
      </div>
      <div className="dashboard flex-horizontal">
        <img width={"35px"} src={dashboard} />
        <h5 className="padding0 first-font">Dashboard</h5>
      </div>
      <div className="max-size">
        <h5 className="second-font">Settings</h5>
        <div>
          <div
            onClick={() => {
              setOpen1(!open1);
            }}
            className={
              (open1 === true ? "dropdown-active " : "") + "dropdown max-size"
            }
          >
            <button
              className={(open1 === true ? "button-active " : "") + "dropbtn"}
            >
              ATM Settings
            </button>
            <img
              className={
                (open1 === true ? "icon rotate" : "icon") + " small-icons"
              }
              src={open1 === true ? upArrow : drop}
            />
          </div>
          <div
            onClick={() => {
              setOpen2(!open2);
            }}
            className={
              (open2 === true ? "dropdown-active " : "") + "dropdown max-size"
            }
          >
            <button
              className={(open2 === true ? "button-active " : "") + "dropbtn"}
            >
              Business Setup
            </button>
            <img
              className={
                (open2 === true ? "icon rotate" : "icon") + " small-icons"
              }
              src={open2 === true ? upArrow : drop}
            />{" "}
          </div>
          <div
            className={
              (open3 === true ? "dropdown-active " : "") + "flex-vertical"
            }
          >
            <div
              className="dropdown max-size"
              onClick={() => {
                setOpen3(!open3);
              }}
            >
              <button
                className={(open3 === true ? "button-active " : "") + "dropbtn"}
              >
                User Management
              </button>
              <img
                className={
                  (open3 === true ? "icon rotate" : "icon") + " small-icons"
                }
                src={open3 === true ? upArrow : drop}
              />{" "}
            </div>
            <div
              className={
                (open3 === true ? "active-div " : "") + "dropdown-content"
              }
            >
              <div
                onClick={() => {
                  if (activeSection && activeSection.id === 0) {
                    setActiveSection(false);
                    return;
                  }
                  setActiveSection({ id: 0 });
                }}
              >
                <h5
                  className={
                    (activeSection && activeSection.id === 0
                      ? "active-section "
                      : "") + "first-font content"
                  }
                >
                  Users
                </h5>
              </div>
              <div
                onClick={() => {
                  if (activeSection && activeSection.id === 1) {
                    setActiveSection(false);
                    return;
                  }
                  setActiveSection({ id: 1 });
                }}
              >
                <h5
                  className={
                    (activeSection && activeSection.id === 1
                      ? "active-section "
                      : "") + "first-font content"
                  }
                >
                  Profiles
                </h5>
              </div>
              <div
                onClick={() => {
                  if (activeSection && activeSection.id === 2) {
                    setActiveSection(false);
                    return;
                  }
                  setActiveSection({ id: 2 });
                }}
              >
                <h5
                  className={
                    (activeSection && activeSection.id === 2
                      ? "active-section "
                      : "") + "first-font content"
                  }
                >
                  Groups
                </h5>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setOpen4(!open4);
            }}
            className={
              (open4 === true ? "dropdown-active " : "") + "dropdown max-size"
            }
          >
            <button
              className={(open4 === true ? "button-active " : "") + "dropbtn"}
            >
              License Management
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
