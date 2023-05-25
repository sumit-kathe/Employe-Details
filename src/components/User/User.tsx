import { useContext } from "react";
import "./User.css";
import Employedetailcontax from "../contax-wrapper/Contaxwrapper";
import { NavLink } from "react-router-dom";
const User = () => {
  const { employe } = useContext(Employedetailcontax);

  console.log("user ke andar aya hu me contax ko lekar", employe);
  console.table(employe);

  const tablerow = employe.map((info) => {
    return (
      <>
        <tr key={info.id}>
          <td>{info.id}</td>
          <td>{info.firstName}</td>
          <td>{info.lastName}</td>
          <td>{info.domain}</td>
          <td>{info.email}</td>
          <td>
            <button  className="btnn">
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "active-class" : "normal";
                }}
                to="/Edit"
              >
                Edit Info.
              </NavLink>
            </button>
          </td>

          <td>
            <button  className="btnn">
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "active-class" : "normal";
                }}
                to="/View"
              >
                View Info.
              </NavLink>
            </button>
          </td>
        </tr>
      </>
    );
  });

  return (
    <>
      <div className="bodyy">
        <div>
          <button className="btn">ADD New Employe</button>
        </div>

        <div>
          <table>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Domain</th>
              <th>Email</th>
              <th >Edit Info</th>
              <th>View Detail Info</th>
            </tr>

            {tablerow}
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
