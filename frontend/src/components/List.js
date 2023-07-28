import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { getdata } from "../redux/features/DataList";
import { setSearch } from "../redux/features/DataSearch";

import { GoOrganization } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { PiCaretUpDownDuotone } from "react-icons/pi";
import ModalDetails from "./ModalDetails";

const List = () => {
  const dispatch = useDispatch();
  const dataArray = useSelector((state) => state.data);
  const [showModal, setShowModal] = useState(false);
  console.log(dataArray);
  console.log(dataArray?.data?.root?.children);
  return (
    <div className="datalist">
      <table className="table datalist-container">
        <thead className="datalist-container-head">
          <tr className="datalist-container-row">
            <th scope="col">
              <PiCaretUpDownDuotone size={18} />
              Company
            </th>
            <th scope="col">
              <PiCaretUpDownDuotone size={18} />
              Status
            </th>
            <th scope="col">
              <PiCaretUpDownDuotone size={18} />
              Revenue
            </th>
            <th scope="col" className="mr-1">
              <PiCaretUpDownDuotone size={18} />
              Headcount
            </th>
          </tr>
        </thead>
        <tbody className="datalist-container-body">
          {dataArray &&
            dataArray?.data?.root?.children?.map((org, index) => {
              return (
                <tr key={index} className="datalist-container-row">
                  <td>
                    <div className="org-details">
                      <GoOrganization size={18} />
                      <div>
                        <ModalDetails />
                        <button
                          show={showModal}
                          setShow={(x) => setShowModal(x)}
                        >
                          {" "}
                          <h4 style={{ color: "#00bef3" }}>
                            {org.fields.bq_organization_name}
                          </h4>
                        </button>
                        <p>{org.fields.bq_organization_irs_sector_name}</p>
                        <p>BQ ID :{org.id.replace(/[^0-9]/g, "")}</p>
                        <p>
                          {org.fields.bq_organization_year_founded
                            ? `${org.fields.bq_organization_year_founded}`
                            : "N/A"}
                        </p>
                      </div>
                    </div>
                    <div className="org-details" style={{ width: "30vw" }}>
                      <FaLocationDot size={18} />{" "}
                      <p>
                        {org.fields.bq_organization_address1_line_1},
                        {org.fields.bq_organization_address1_city},
                        {org.fields.bq_organization_address1_state
                          ? `${org.fields.bq_organization_address1_state}`
                          : ""}
                        ,
                        {org.fields.bq_organization_address1_zip5
                          ? `${org.fields.bq_organization_address1_zip5}`
                          : ""}
                      </p>
                    </div>
                  </td>
                  <td>
                    {org.fields.bq_organization_isactive
                      ? "Active"
                      : "Inactive"}
                  </td>
                  <td>
                    $
                    {org.fields.bq_revenue_mr
                      ? `${Math.round(org.fields.bq_revenue_mr / 1000)}`
                      : "N/A"}
                  </td>
                  <td>
                    {org.fields.bq_current_employees_plan_mr
                      ? `${org.fields.bq_current_employees_plan_mr}`
                      : "N/A"}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
