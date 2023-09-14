import styles from "./TableOptions.module.scss";
import edit from "../../assets/edit.svg";
import block from "../../assets/block.svg";
import lock from "../../assets/lock.svg";
import moreOptions from "../../assets/more-option.svg";
import download from "../../assets/download.svg";
import axios from "axios";

const TableOptions = (props) => {
  const { num,users,checked } = props;

  const handle_assign= async()=>{
    const ids = []
    users.forEach((user,index)=>{
      if(checked[index] === true){
        ids.push(user._id)
      }
    })
    await axios.put("http://localhost:8080/api/users/assign",{ids})
    alert("Users Edited Successfully")
    window.location.reload();
  }

  return (
    <div className="flex-horizontal JustifyBetween max-size">
      <div className="flex-horizontal">
        <div>
          <div className={styles["selected-num"]}>{num} selected</div>
        </div>
        <div>
          <button>
            <img width={"20px"} src={edit} />
          </button>
          <button>
            <img width={"20px"} src={block} />
          </button>
          <button>
            <img width={"20px"} src={lock} />
          </button>
          <button>Assign to Profile</button>
          <button className={styles["button-active"]} onClick={handle_assign} >Assign to Manager Group</button>
          <button>
            <img width={"20px"} src={moreOptions} />
          </button>
          <button className={styles["button-link"]}>Unselect all</button>
        </div>
      </div>
      <div>
        <button className={styles["button-download"]}>
          <img width={"20px"} src={download} />
        </button>
      </div>
    </div>
  );
};

export default TableOptions;
