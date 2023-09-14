import styles from "./header.module.scss";

const Header = ({ setOpenModal }) => {
  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <div
      className={styles["header"] + " flex-horizontal max-size JustifyBetween"}
    >
      <h2> User Management</h2>
      <button
        onClick={handleClick}
        type="button"
        className={styles["button"] + " btn btn-success"}
      >
        {" "}
        + Add New
      </button>
    </div>
  );
};

export default Header;
