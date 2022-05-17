import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CPaginationItem,
  CPagination,
} from '@coreui/react'
import Formadd from './Formadd'

const FormControl = () => {
  const [form, setForm] = useState(false)
  const navigate = useNavigate();
  const Manageschool = () => {
    setForm(true);
  //  navigate('/forms/formadd');
   console.log('hi............')

  }
  return (
    <>
  { form===true?<Formadd/>:(
      <><CTable color="light">
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell scope="col">ManageSchool</CTableHeaderCell>
              <CTableHeaderCell scope="col"></CTableHeaderCell>
              <CTableHeaderCell scope="col"></CTableHeaderCell>
              <CTableHeaderCell scope="col"></CTableHeaderCell>
              <CTableHeaderCell scope="col"></CTableHeaderCell>
              <CTableHeaderCell scope="col"></CTableHeaderCell>
              <CTableHeaderCell scope="col"></CTableHeaderCell>
              <CTableHeaderCell scope="col"></CTableHeaderCell>
              <CTableHeaderCell scope="col"></CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <CButton color="primary" onClick={Manageschool}>
                  + Add New
                </CButton>
              </CTableHeaderCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="col">SNo</CTableHeaderCell>
              <CTableHeaderCell scope="col">School ID</CTableHeaderCell>
              <CTableHeaderCell scope="col">School Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">City</CTableHeaderCell>
              <CTableHeaderCell scope="col">State</CTableHeaderCell>
              <CTableHeaderCell scope="col">Principal Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Cortinator Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">School Status</CTableHeaderCell>
              <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody color="light">
            <CTableRow color="light">
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>SCH01</CTableDataCell>
              <CTableDataCell>DPS</CTableDataCell>
              <CTableDataCell>South Delhi</CTableDataCell>
              <CTableDataCell>New Delhi</CTableDataCell>
              <CTableDataCell>Anurag</CTableDataCell>
              <CTableDataCell>Akash</CTableDataCell>
              <CTableDataCell>Active</CTableDataCell>
              <CTableDataCell>
                <CButton color="primary">Edit</CButton>
              </CTableDataCell>
              <CTableDataCell>
                <CButton color="danger">Actioon</CButton>
              </CTableDataCell>
            </CTableRow>
            <CTableRow color="light">
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>SCH01</CTableDataCell>
              <CTableDataCell>DPS</CTableDataCell>
              <CTableDataCell>South Delhi</CTableDataCell>
              <CTableDataCell>New Delhi</CTableDataCell>
              <CTableDataCell>Anurag</CTableDataCell>
              <CTableDataCell>Akash</CTableDataCell>
              <CTableDataCell>Active</CTableDataCell>
              <CTableDataCell>
                <CButton color="primary">Edit</CButton>
              </CTableDataCell>
              <CTableDataCell>
                <CButton color="danger">Actioon</CButton>
              </CTableDataCell>
            </CTableRow>
            <CTableRow color="light">
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>SCH01</CTableDataCell>
              <CTableDataCell>DPS</CTableDataCell>
              <CTableDataCell>South Delhi</CTableDataCell>
              <CTableDataCell>New Delhi</CTableDataCell>
              <CTableDataCell>Anurag</CTableDataCell>
              <CTableDataCell>Akash</CTableDataCell>
              <CTableDataCell>Active</CTableDataCell>
              <CTableDataCell>
                <CButton color="primary">Edit</CButton>
              </CTableDataCell>
              <CTableDataCell>
                <CButton color="danger">Actioon</CButton>
              </CTableDataCell>
            </CTableRow>
            <CTableRow color="light">
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>SCH01</CTableDataCell>
              <CTableDataCell>DPS</CTableDataCell>
              <CTableDataCell>South Delhi</CTableDataCell>
              <CTableDataCell>New Delhi</CTableDataCell>
              <CTableDataCell>Anurag</CTableDataCell>
              <CTableDataCell>Akash</CTableDataCell>
              <CTableDataCell>Active</CTableDataCell>
              <CTableDataCell>
                <CButton color="primary">Edit</CButton>
              </CTableDataCell>
              <CTableDataCell>
                <CButton color="danger">Actioon</CButton>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable><CPagination style={{ paddingLeft: '63rem' }} aria-label="Page navigation example">
            <CPaginationItem aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </CPaginationItem>
            <CPaginationItem active>1</CPaginationItem>
            <CPaginationItem>2</CPaginationItem>
            <CPaginationItem>3</CPaginationItem>
            <CPaginationItem aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </CPaginationItem>
          </CPagination></>

)}
    </>
  )
}

export default FormControl
