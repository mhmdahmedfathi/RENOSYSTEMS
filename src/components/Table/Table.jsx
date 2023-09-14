import { useEffect, useState } from "react";
import styles from "./Table.module.scss";
import TableSearch from "./TableSearch";
import TableOptions from "./TableOptions";
import axios from "axios";

const Table = ({ modal }) => {
  const [num, setNum] = useState(0);
  const [users, setUsers] = useState([]);
  const [mainCheck, setMainCheck] = useState(false);
  const [checked, setChecked] = useState([]);
  const [searched, setSearched] = useState(users);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("http://localhost:8080/api/users");
      if (res.data.Users) {
        let new_users = {
          ...res.data.Users,
          label: "",
        };
        new_users = res.data.Users.map((user) => {
          let result = "";
          for (let i = 0; i < user.fullname.length; i++) {
            if (i === 0) {
              result += user.fullname.charAt(i).toUpperCase(); // Convert the first character to uppercase
            } else if (user.fullname.charAt(i - 1) === " ") {
              result += user.fullname.charAt(i).toUpperCase(); // Convert the character after a space to uppercase
            }
          }
          user.label = result;
          return user;
        });
        setUsers(new_users);
        setSearched(new_users);
      }
    };
    getUsers();
  }, [modal]);

  const set_num = () => {
    const count = checked.reduce((count, value) => count + (value ? 1 : 0), 0);
    setNum(count);
  };

  const change_check = (id) => {
    const updatedArray = [...checked];
    updatedArray[id] = checked[id] !== undefined ? !checked[id] : true;
    setChecked(updatedArray);
  };

  const toggle_all = () => {
    const updatedArray = [];
    users.forEach((user, id) => {
      updatedArray[id] = !mainCheck;
    });
    setChecked(updatedArray);
    setMainCheck(!mainCheck);
  };

  useEffect(() => {
    set_num();
  }, [checked]);

  return (
    <div className={styles["table"] + " flex-vertical max-size"}>
      <TableSearch search={setSearched} users={users} />
      <TableOptions num={num} users={users} checked={checked}  />
      {users.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onClick={toggle_all}
                  value={mainCheck}
                />
              </th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email Address</th>
              <th>Group</th>
              <th>Status</th>
              <th>Created On</th>
            </tr>
          </thead>
          <tbody>
            {searched.map((user, id) => (
              <tr key={id}>
                <td>
                  <input
                    type="checkbox"
                    name=""
                    id={id}
                    onClick={() => {
                      change_check(id);
                    }}
                    checked={checked[id]}
                  />
                </td>
                <td>
                  <div className="flex-horizontal">
                    <div className={styles["fill-circle"] + ` color-${id > 10 ? id % 10 + 1 : id + 1}`}>
                      <label
                        className={
                          user.label.length === 1
                            ? styles["fill-circle-label-1"]
                            : user.label.length === 2
                            ? styles["fill-circle-label-2"]
                            : styles["fill-circle-label-3"]
                        }
                      >
                        {user.label}
                      </label>
                    </div>
                    <label className={styles["fill-circle-name"]}>
                      {user.fullname}
                    </label>
                  </div>
                </td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.usergroup}</td>
                <td>
                  <select name="" id="">
                    <option value="">Inactive</option>
                    <option value="">active</option>
                  </select>
                </td>
                <td>{user.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {users.length === 0 && (
        <div className={styles["no-users"]}>
          No Users exists yet, try add some users
        </div>
      )}
    </div>
  );
};

export default Table;
