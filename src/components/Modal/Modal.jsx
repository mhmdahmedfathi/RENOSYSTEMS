import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import styles from "./Modal.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import useInput from "../../stateManagement/useInput";
import Alert from "@mui/material/Alert";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#F8FAFB",
  boxShadow: 24,
};

export default function AddUser({ openModal, setOpenModal }) {
  const handleClose = () => setOpenModal(false);
  const [usergroup, setUserGroup] = useState("");
  const [profile, setProfile] = useState("");

  const {
    value: name,
    error: validName,
    handleChange: changeName,
    handleReset: resetName,
  } = useInput((value) => value.length < 3);

  const {
    value: username,
    error: validUser,
    handleChange: changeUser,
    handleReset: resetUser,
  } = useInput((value) => value.length < 3);

  const {
    value: email,
    error: validEmail,
    handleChange: changeEmail,
    handleReset: resetEmail,
  } = useInput((value) => !value.includes("@"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      validEmail ||
      validName ||
      validUser ||
      profile === "" ||
      usergroup === ""
    ) {
      alert("make sure everything is typed correctly");
      return;
    }

    const new_user = {
      email,
      fullname: name,
      username,
      usergroup,
      profile,
    };

    try {
      await axios.post("http://localhost:8080/api/users/add", new_user);
      handleClose();
    } catch (error) {
      alert("this email or username is exists , please try to change them");
    }
  };

  const reset_input = (e) => {
    e.preventDefault();
    resetEmail();
    resetName();
    resetUser();
    setUserGroup("");
    setProfile("");
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div
              className={
                styles["header"] +
                " flex-horizontal JustifyBetween remove-align"
              }
            >
              Add New User
              <div onClick={handleClose}>
                <CloseIcon className={styles["icon"]} />
              </div>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit}>
              <div className={styles["field"]}>
                {validName && (
                  <Alert severity="error">
                    Make sure you have typed valid name
                  </Alert>
                )}
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={styles["input"]}
                  placeholder="Enter full name"
                  onChange={changeName}
                  value={name}
                />
              </div>
              <div className={styles["field"]}>
                {validUser && (
                  <Alert severity="error">
                    Make sure you have typed valid user name
                  </Alert>
                )}
                <label htmlFor="user">User Name</label>
                <input
                  type="text"
                  name="user"
                  id="user"
                  className={styles["input"]}
                  placeholder="Enter username"
                  onChange={changeUser}
                  value={username}
                />
              </div>
              <div className={styles["field"]}>
                {validEmail && (
                  <Alert severity="error">
                    Make sure you have typed valid Email
                  </Alert>
                )}
                <label htmlFor="name">Email Address</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={styles["input"]}
                  placeholder="Enter user email address"
                  onChange={changeEmail}
                  value={email}
                />
              </div>
              <div className={styles["field"]}>
                <label htmlFor="name">User Group</label>
                <select
                  className={styles["select-input"]}
                  name="User Group"
                  id=""
                  placeholder="Choose User Group"
                  onChange={(e) => setUserGroup(e.target.value)}
                  value={usergroup}
                >
                  <option
                    value=""
                    className={styles["default"]}
                    unselectable
                    hidden
                  >
                    Choose User Group
                  </option>
                  <option value="Headoffice">Head Office</option>
                  <option value="Office">Office</option>
                  <option value="Manager">Manager</option>
                  <option value="user">user</option>
                </select>
              </div>
              <div className={styles["field"]}>
                <label htmlFor="name">Assign Profile</label>
                <select
                  className={styles["select-input"]}
                  name="User Group"
                  id=""
                  placeholder="Choose Profile"
                  onChange={(e) => setProfile(e.target.value)}
                  value={profile}
                >
                  <option
                    value=""
                    className={styles["default"]}
                    unselectable
                    hidden
                  >
                    Choose Profile
                  </option>
                  <option value="Profile1">Profile 1</option>
                  <option value="Profile2">Profile 2</option>
                </select>
              </div>
              <hr />
              <div
                className={
                  styles["button-group"] +
                  " remove-align flex-horizontal JustifyBetween "
                }
              >
                <button onClick={reset_input} className={styles["button-link"]}>
                  Reset fields
                </button>
                <div>
                  <button
                    onClick={handleClose}
                    className={styles["cancel-button"]}
                  >
                    Cancel
                  </button>
                  <button className={styles["add-button"]}>Add User</button>
                </div>
              </div>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
