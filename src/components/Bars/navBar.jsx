import menu from "../../assets/bars-solid.svg";
import LeftArrow from "../../assets/left-arrow.svg";
import question from "../../assets/question-circle.svg";
import notification from "../../assets/bell-fill.svg";
import messages from "../../assets/9-square-fill.svg";
import downArrow from "../../assets/down-arrow.svg";

import style from "./Navbar.module.scss";

const Navbar = (props) => {
  return (
    <div
      className={
        style["navbar-component"] +
        " flex-horizontal max-size bottom-border JustifyBetween remove-align"
      }
    >
      <div className=" flex-horizontal remove-align">
        <img className={style["left-icon"]} width={"25px"} src={LeftArrow} />
        <img width={"20px"} src={menu} />
        <label className={style["morning-label"] + " first-font padding0"}>
          <strong>Good Morning!</strong>
        </label>
        <label className={style["morning-label"] + " first-font padding0"}>
          Tue Jan 12, 2021 9:39 AM
        </label>
      </div>{" "}
      <div className=" flex-horizontal remove-align">
        <img width={"23px"} src={question} />
        <div className={style["icons-div"]}>
          <img width={"20px"} src={notification} />
          <img
            className={style["merge-icons-img"]}
            width={"15px"}
            src={messages}
          />
        </div>
        <label className={style["circle-name"] + " first-font padding0"}>
          Nader Amer
        </label>
        <div className={style["fill-circle"]}>
          <label className={style["fill-circle-label"]}>NA</label>
        </div>
        <img width={"35px"} src={downArrow} />
      </div>
    </div>
  );
};

export default Navbar;
