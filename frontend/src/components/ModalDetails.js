import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Map from './Map';

function ModalDetails({ item, id }) {
  return (
    <>
      <div
        class="modal fade "
        id={`staticBackdrop-${id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl  ">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title " id="staticBackdropLabel">
                {item.bq_company_legal_combined_name}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div class="modalData">
                <div class="left">
                  <div class="row">
                    <div class="col-sm-6">
                      <h6>Organization Firmographics</h6>
                    </div>
                    <div class="col-sm-6">
                      <h6>Legal Entity</h6>
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-sm-6">
                      <label>Company Name:</label>
                      <p>{item.bq_company_legal_combined_name}</p>
                    </div>
                    <div class="col-sm-6">
                      <label>BQ Legal Entity ID:</label>
                      <p>{item.bq_legal_entity_id}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <label>BQ ID:</label>
                      <p>{item.bq_organization_id.replace(/[^0-9]/g, '')}</p>
                    </div>
                    <div class="col-sm-6">
                      <label>Company Legal Structure:</label>
                      <p>{item.bq_organization_structure}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <label>Address:</label>
                      <p>
                        {item.bq_organization_address1_line_1} ,
                        {item.bq_organization_address1_city} ,
                        {item.bq_organization_address1_state
                          ? `${item.bq_organization_address1_state}`
                          : ''}
                        , {item.bq_organization_business_address1_country}
                        {item.bq_organization_address1_zip5
                          ? `${item.bq_organization_address1_zip5}`
                          : ''}
                      </p>
                    </div>
                    <div class="col-sm-6">
                      <label>Company Type:</label>
                      <p>{item.bq_organization_company_type}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <label>Revenue:</label>
                      <p>
                        $
                        {item.bq_revenue_mr
                          ? `${Math.round(item.bq_revenue_mr / 1000)}`
                          : 'N/A'}
                      </p>
                    </div>
                    <div class="col-sm-6">
                      <label>Company Legal Form:</label>
                      <p>{item.bq_organization_lfo}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <label>Headcount:</label>
                      <p>
                        {' '}
                        {item.bq_current_employees_plan_mr
                          ? `${item.bq_current_employees_plan_mr}`
                          : 'N/A'}
                      </p>
                    </div>
                    <div class="col-sm-6">
                      <label>EIN:</label>
                      <p>{item.bq_organization_ein}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <label>Company Status:</label>
                      <p>{item.bq_organization_current_status}</p>
                    </div>
                    <div class="col-sm-6">
                      <label>Company Jurisdiction State:</label>
                      <p>
                        {item.bq_legal_entity_jurisdiction_code
                          ? `${item.bq_legal_entity_jurisdiction_code}`
                          : 'N/A'}
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <label>Public or Private:</label>
                      <p>N/A</p>
                    </div>
                    <div class="col-sm-6">
                      <label>Legal Entity Principals:</label>
                      <p>{item.bq_officer_details}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <label>Year Founded:</label>
                      <p>
                        {item.bq_organization_year_founded
                          ? `${item.bq_organization_year_founded}`
                          : 'N/A'}
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <label>Company Website:</label>
                      <p>
                        {item.bq_organization_website
                          ? `${item.bq_organization_website}`
                          : 'N/A'}
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <label>BQ Score:</label>
                      <p>{item.bq_score ? `${item.bq_score}` : 'N/A'}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <label>NAICS Sector (NAICS Sector Code):</label>
                      <p>N/A {item.bq_organization_naics_code}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <label>NAICS Industry (NAICS Industry Code):</label>
                      <p>N/A (561499)</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <label>IRS Sector:</label>
                      <p>{item.bq_organization_irs_sector_name}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <label>IRS Sub Sector:</label>
                      <p>{item.bq_organization_subsector_name}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <label>Industry Name:</label>
                      <p>{item.bq_organization_industry_name}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <label>Ticker :</label>
                      <p>{item.bq_organization_ticker}</p>
                    </div>
                  </div>
                </div>
                <div className="modal-body-right ">
                  <Map />
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalDetails;
