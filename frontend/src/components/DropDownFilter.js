import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropDownFilter({ item }) {
  return (
    // <DropdownButton id="dropdown-basic-button" title="Dropdown button">
    //   <Dropdown.ItemText>{item.label}</Dropdown.ItemText>

    //   {item?.options?.map((txt) => {
    //     return <Dropdown.Item as="button">{txt.title}</Dropdown.Item>;
    //   })}
    // </DropdownButton>
    // <Dropdown>
    //   <Dropdown.Toggle variant="success" id="dropdown-basic">
    //     {item.label}
    //   </Dropdown.Toggle>

    //   <Dropdown.Menu>
    //     {item?.options?.map((txt) => {
    //       return <Dropdown.Item as="button">{txt.title}</Dropdown.Item>;
    //     })}
    //   </Dropdown.Menu>
    // </Dropdown>
    <div className="dropdown">
      <button
        className="btn btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          width: 300,
          height: 38,
          textAlign: 'left',
          fontSize: '1.5rem',
          border: '1px solid black',
        }}
      >
        {item.label}
      </button>
      <ul style={{ width: 317 }} className="dropdown-menu">
        {item?.options?.map((txt, index) => {
          return (
            <li key={index} className="filter-items">
              <a
                style={{ fontSize: '1.5rem' }}
                className="dropdown-item"
                href="#"
              >
                {txt.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DropDownFilter;
