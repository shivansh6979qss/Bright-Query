import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function DropDownFilter({ item }) {
  console.log(item);
  return (
    <div className="dropdown">
      <select class="form-select p-3 " id="inputGroupSelect01">
        {item?.options?.map((txt, index) => {
          return (
            <>
              <option>{txt.title}</option>
            </>
          );
        })}
      </select>
    </div>
  );
}

export default DropDownFilter;
