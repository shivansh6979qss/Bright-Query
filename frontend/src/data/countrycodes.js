const stateList = [
  { value: '', title: 'Location State' },

  { value: 'Alabama', title: 'Alabama' },

  { value: 'Alaska', title: 'Alaska' },

  { value: 'American Samoa', title: 'American Samoa' },

  { value: 'Arizona', title: 'Arizona' },

  { value: 'Arkansas', title: 'Arkansas' },

  { value: 'Baker Island', title: 'Baker Island' },

  { value: 'California', title: 'California' },

  { value: 'Colorado', title: 'Colorado' },

  { value: 'Connecticut', title: 'Connecticut' },

  { value: 'Delaware', title: 'Delaware' },

  { value: 'District of Columbia', title: 'District of Columbia' },

  { value: 'Florida', title: 'Florida' },

  { value: 'Georgia', title: 'Georgia' },

  { value: 'Guam', title: 'Guam' },

  { value: 'Hawaii', title: 'Hawaii' },

  { value: 'Howland Island', title: 'Howland Island' },

  { value: 'Idaho', title: 'Idaho' },

  { value: 'Illinois', title: 'Illinois' },

  { value: 'Indiana', title: 'Indiana' },

  { value: 'Iowa', title: 'Io' },

  { value: 'Jarvis Island', title: 'Jarvis Island' },

  { value: 'Johnston Atoll', title: 'Johnston Atoll' },

  { value: 'Kansas', title: 'Kansas' },

  { value: 'Kentucky', title: 'Kentucky' },

  { value: 'Kingman Reef', title: 'Kingman Reef' },

  { value: 'Louisiana', title: 'Louisiana' },

  { value: 'Maine', title: 'Maine' },

  { value: 'Maryland', title: 'Maryland' },

  { value: 'Massachusetts', title: 'Massachusetts' },

  { value: 'Michigan', title: 'Michigan' },

  { value: 'Midway Atoll', title: 'Midway Atoll' },

  { value: 'Minnesota', title: 'Minnesota' },

  { value: 'Mississippi', title: 'Mississippi' },

  { value: 'Missouri', title: 'Missouri' },

  { value: 'Montana', title: 'Montana' },

  { value: 'Navassa Island', title: 'Navassa Island' },

  { value: 'Nebraska', title: 'Nebraska' },

  { value: 'Nevada', title: 'Nevada' },

  { value: 'New Hampshire', title: 'New Hampshire' },

  { value: 'New Jersey', title: 'New Jersey' },

  { value: 'New Mexico', title: 'New Mexico' },

  { value: 'New York', title: 'New York' },

  { value: 'North Carolina', title: 'North Carolina' },

  { value: 'North Dakota', title: 'North Dakota' },

  { value: 'Northern Mariana Islands', title: 'Northern Mariana Islands' },

  { value: 'Ohio', title: 'Ohio' },

  { value: 'Oklahoma', title: 'Oklahoma' },

  { value: 'Oregon', title: 'Oregon' },

  { value: 'Palmyra Atoll', title: 'Palmyra Atoll' },

  { value: 'Pennsylvania', title: 'Pennsylvania' },

  { value: 'Puerto Rico', title: 'Puerto Rico' },

  { value: 'Rhode Island', title: 'Rhode Island' },

  { value: 'South Carolina', title: 'South Carolina' },

  { value: 'South Dakota', title: 'South Dakota' },

  { value: 'Tennessee', title: 'Tennessee' },

  { value: 'Texas', title: 'Texas' },

  {
    value: 'United States Minor Outlying Islands',
    title: 'United States Minor Outlying Islands',
  },

  {
    value: 'United States Virgin Islands',
    title: 'United States Virgin Islands',
  },

  { value: 'Utah', title: 'Utah' },

  { value: 'Vermont', title: 'Vermont' },

  { value: 'Virginia', title: 'Virginia' },

  { value: 'Wake Island', title: 'Wake Island' },

  { value: 'Washington', title: 'Washington' },

  { value: 'West Virginia', title: 'West Virginia' },

  { value: 'Wisconsin', title: 'Wisconsin' },

  { value: 'Wyoming', title: 'Wyoming' },
];

//  [

//     { value: "", title: "Jurisdiction State" },

//     { value: 'US_DE', title: 'US_DE' },

//     { value: 'US_CA', title: 'US_CA' },

//     { value: 'US_RI', title: 'US_RI' },

//     { value: 'US_WA', title: 'US_WA' },

//     { value: 'US_OH', title: 'US_OH' },

//     { value: 'US_MI', title: 'US_MI' },

//     { value: 'US_IN', title: 'US_IN' },

//     { value: 'US_NC', title: 'US_NC' },

//     { value: 'US_NJ', title: 'US_NJ' },

//     { value: 'US_TX', title: 'US_TX' },

//     { value: 'US_VA', title: 'US_VA' },

//     { value: 'US_PA', title: 'US_PA' },

//     { value: 'US_NY', title: 'US_NY' },

//     { value: 'US_MD', title: 'US_MD' },

//     { value: 'US_CO', title: 'US_CO' },

//     { value: 'US_AZ', title: 'US_AZ' },

//     { value: 'US_OR', title: 'US_OR' },

//     { value: 'US_MN', title: 'US_MN' },

//     { value: 'US_IL', title: 'US_IL' },

//     { value: 'US_FL', title: 'US_FL' },

//     { value: 'US_TN', title: 'US_TN' },

//     { value: 'US_AR', title: 'US_AR' },

//     { value: 'US_MO', title: 'US_MO' },

//     { value: 'US_UT', title: 'US_UT' },

//     { value: 'US_DC', title: 'US_DC' },

//     { value: 'US_GA', title: 'US_GA' },

//     { value: 'US_ID', title: 'US_ID' },

//     { value: 'US_CT', title: 'US_CT' },

//     { value: 'US_MA', title: 'US_MA' },

//     { value: 'US_MS', title: 'US_MS' },

//     { value: 'US_VT', title: 'US_VT' },

//     { value: 'US_WI', title: 'US_WI' },

//     { value: 'US_ME', title: 'US_ME' },

//     { value: 'US_NV', title: 'US_NV' },

//     { value: 'US_OK', title: 'US_OK' },

//     { value: 'US_LA', title: 'US_LA' },

//     { value: 'US_IA', title: 'US_IA' },

//     { value: 'US_KS', title: 'US_KS' },

//     { value: 'US_AL', title: 'US_AL' },

//     { value: 'US_SC', title: 'US_SC' },

//     { value: 'US_MT', title: 'US_MT' },

//     { value: 'US_NH', title: 'US_NH' },

//     { value: 'US_NE', title: 'US_NE' },

//     { value: 'US_HI', title: 'US_HI' },

//     { value: 'US_AK', title: 'US_AK' },

//     { value: 'US_WY', title: 'US_WY' },

//     { value: 'US_SD', title: 'US_SD' },

//     { value: 'US_KY', title: 'US_KY' },

//     { value: 'US_NM', title: 'US_NM' },

//     { value: 'US_ND', title: 'US_ND' },

//     { value: 'US_WV', title: 'US_WV' },

// ];

const JstateList = [
  { value: '', title: 'Legal Jurisdiction State' },

  { value: 'US_AK', title: 'US_AK' },

  { value: 'US_AL', title: 'US_AL' },

  { value: 'US_AR', title: 'US_AR' },

  { value: 'US_AZ', title: 'US_AZ' },

  { value: 'US_CA', title: 'US_CA' },

  { value: 'US_CO', title: 'US_CO' },

  { value: 'US_CT', title: 'US_CT' },

  { value: 'US_DC', title: 'US_DC' },

  { value: 'US_DE', title: 'US_DE' },

  { value: 'US_FL', title: 'US_FL' },

  { value: 'US_GA', title: 'US_GA' },

  { value: 'US_HI', title: 'US_HI' },

  { value: 'US_IA', title: 'US_IA' },

  { value: 'US_ID', title: 'US_ID' },

  { value: 'US_IL', title: 'US_IL' },

  { value: 'US_IN', title: 'US_IN' },

  { value: 'US_KS', title: 'US_KS' },

  { value: 'US_KY', title: 'US_KY' },

  { value: 'US_LA', title: 'US_LA' },

  { value: 'US_MA', title: 'US_MA' },

  { value: 'US_MD', title: 'US_MD' },

  { value: 'US_ME', title: 'US_ME' },

  { value: 'US_MI', title: 'US_MI' },

  { value: 'US_MN', title: 'US_MN' },

  { value: 'US_MO', title: 'US_MO' },

  { value: 'US_MS', title: 'US_MS' },

  { value: 'US_MT', title: 'US_MT' },

  { value: 'US_NC', title: 'US_NC' },

  { value: 'US_ND', title: 'US_ND' },

  { value: 'US_NE', title: 'US_NE' },

  { value: 'US_NH', title: 'US_NH' },

  { value: 'US_NJ', title: 'US_NJ' },

  { value: 'US_NM', title: 'US_NM' },

  { value: 'US_NV', title: 'US_NV' },

  { value: 'US_NY', title: 'US_NY' },

  { value: 'US_OH', title: 'US_OH' },

  { value: 'US_OK', title: 'US_OK' },

  { value: 'US_OR', title: 'US_OR' },

  { value: 'US_PA', title: 'US_PA' },

  { value: 'US_RI', title: 'US_RI' },

  { value: 'US_SC', title: 'US_SC' },

  { value: 'US_SD', title: 'US_SD' },

  { value: 'US_TN', title: 'US_TN' },

  { value: 'US_TX', title: 'US_TX' },

  { value: 'US_UT', title: 'US_UT' },

  { value: 'US_VA', title: 'US_VA' },

  { value: 'US_VT', title: 'US_VT' },

  { value: 'US_WA', title: 'US_WA' },

  { value: 'US_WI', title: 'US_WI' },

  { value: 'US_WV', title: 'US_WV' },

  { value: 'US_WY', title: 'US_WY' },
];

export { stateList, JstateList };
