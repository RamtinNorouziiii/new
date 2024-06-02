import React, { useState, useRef, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableBody,
  CTableDataCell,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react'
import { SearchOutlined } from '@ant-design/icons';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words'; import { DocsExample } from 'src/components'
import { InputDatePicker } from "jalaali-react-date-picker";
import { exportToExcel } from '../../../utils/exportExcel';
import { FaRegFileExcel } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { DetGrid } from '../detgrid';
import { useSelector, useDispatch } from 'react-redux'
const data = [{ "id": 1, "bm": "10", "br": "6663", "no_acc": "10004", "name": "نوروزعلى بيات", "emply_no": "", "dateupdate": "000000" }, { "id": 2, "bm": "10", "br": "6663", "no_acc": "10012", "name": "ملکه دنيالى", "emply_no": "", "dateupdate": "000000" }, { "id": 3, "bm": "10", "br": "6663", "no_acc": "10020", "name": "مرضيه دھقان سلمان", "emply_no": "", "dateupdate": "780129" }, { "id": 4, "bm": "10", "br": "6663", "no_acc": "1003", "name": "حاج جعفرثمرى", "emply_no": "", "dateupdate": "000000" }, { "id": 5, "bm": "10", "br": "6663", "no_acc": "10038", "name": "کبرى خلج", "emply_no": "", "dateupdate": "830806" }, { "id": 6, "bm": "10", "br": "6663", "no_acc": "10046", "name": "مينادره پرست ملکزاده", "emply_no": "", "dateupdate": "000000" }, { "id": 7, "bm": "10", "br": "6663", "no_acc": "10053", "name": "صديقه روزبھانى", "emply_no": "", "dateupdate": "000000" }, { "id": 8, "bm": "10", "br": "6663", "no_acc": "10061", "name": "گلبرارعليزاده", "emply_no": "", "dateupdate": "760114" }, { "id": 9, "bm": "10", "br": "6663", "no_acc": "10079", "name": "صديقه فداؤى پور", "emply_no": "", "dateupdate": "760114" }, { "id": 10, "bm": "10", "br": "6663", "no_acc": "10087", "name": "صادق مھماندوست", "emply_no": "", "dateupdate": "760114" }]

  ;


const Tooltips = () => {
  const [mockData, setMockData] = useState([])
  const [toggle, setToggle] = useState(false)

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [openModalDetail, setOpenModalDetail] = useState(false);
  const [getDetail, setGetDetail] = useState();
  const [nameKarmandy, setNameKarmandy] = useState();
  const [codeShobe, setCodeShobe] = useState();
  const [validated, setValidated] = useState(false)
  const [fromDate, setFromDate] = useState(null)
  const [toDate, setToDate] = useState(null)
  const [employeeNumber, setEmployeeNumber] = useState(null)
  const [accountNumber, setAccountNumber] = useState(null)

  const sidebarShow = useSelector((state) => state.sidebarShow)
  useEffect(() => {
    // fetch(`${process.env.BASE_URL}/weatherforecast/GetVW_Get_BrMast`)
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
     // .then(json => setMockData(json))
      .then(json => setMockData(data))
  }, [])
  const handleSearchData = () => {

    fetch(`${process.env.BASE_URL}/weatherforecast/GetVW_Get_BrMast?br=${codeShobe}&no_acc=${accountNumber}&name=${nameKarmandy}&emply_no=${employeeNumber}`)
      .then(response => response.json())
      .then(json => setMockData(json))
  }
  const columns = [
    {
      title: 'نام و نام خانوادگی',
      dataIndex: 'name',
      key: 'name',

    },
    {
      title: 'شماره کارمندی',
      dataIndex: 'emply_no',
      key: 'emply_no',

      //   ...getColumnSearchProps('age'),
    },
    {
      title: 'شماره حساب',
      dataIndex: 'no_acc',
      key: 'no_acc',

      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'کد شعبه ',
      dataIndex: 'br',
      key: 'br',
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ['descend', 'ascend'],
    },
    // {
    //   title: 'ستون 5',
    //   dataIndex: 'column5',
    //   key: 'column5',
    //   ...getColumnSearchProps('column5'),
    //   // sorter: (a, b) => a.address.length - b.address.length,
    //   // sortDirections: ['descend', 'ascend'],
    // },
    // {
    //   title: 'ستون 6',
    //   dataIndex: 'column6',
    //   key: 'column6',
    //   ...getColumnSearchProps('column6'),
    //   // sorter: (a, b) => a.address.length - b.address.length,
    //   // sortDirections: ['descend', 'ascend'],
    // },
    {
      title: 'صورتحساب',
      dataIndex: '',
      key: 'x',
      render: (e) =>
        <FaFolderOpen style={{ cursor: "pointer" }} onClick={() => { sendDet(e) }} />

      ,
    },
  ];


  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const inputHandlerFromDate = (e) => {
    console.log(e._d)
    setFromDate(e)
  }
  const inputHandlerToDate = (e) => {
    setToDate(e)
  }

  const sendDet = (e) => {
    console.log(e)
    setGetDetail(e)
    setOpenModalDetail(true)

  }
  return (
    <>
      {
        window.localStorage.getItem("TOKENAVIN") ?
          <div  >
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              style={{ fontSize: "11px", fontWeight: "800" }}
            >



              <CCol md={2} className="position-relative">
                <CFormLabel htmlFor="validationTooltip05">شماره کارمندی : </CFormLabel>
                <CFormInput min={0} type="number" id="validationTooltip05" value={employeeNumber} onChange={(e) => { setEmployeeNumber(e.target.value) }} />
                <CFormFeedback tooltip invalid>
                  Please provide a valid zip.
                </CFormFeedback>
              </CCol>
              <CCol md={2} className="position-relative" >
                <CFormLabel htmlFor="validationTooltip05"  >  شماره حساب : </CFormLabel>
                <CFormInput type="number" min={0} id="validationTooltip05" value={accountNumber} onChange={(e) => { setAccountNumber(e.target.value) }} />
                <CFormFeedback tooltip invalid>
                  Please provide a valid zip.
                </CFormFeedback>
              </CCol>
              <CCol md={2} className="position-relative" >
                <CFormLabel htmlFor="validationTooltip05"  >  نام و نام خانوادگی : </CFormLabel>
                <CFormInput id="validationTooltip06" value={nameKarmandy} onChange={(e) => { setNameKarmandy(e.target.value) }} />
                <CFormFeedback tooltip invalid>
                  Please provide a valid zip.
                </CFormFeedback>
              </CCol>
              <CCol md={2} className="position-relative" >
                <CFormLabel htmlFor="validationTooltip05"  > کد شعبه: </CFormLabel>
                <CFormInput type="number" min={0} id="validationTooltip07" value={codeShobe} onChange={(e) => { setCodeShobe(e.target.value) }} />
                <CFormFeedback tooltip invalid>
                  Please provide a valid zip.
                </CFormFeedback>
              </CCol>

              <CCol md={2} className="position-relative">
                <CFormLabel >از تاریخ :</CFormLabel>
                <InputDatePicker onChange={inputHandlerFromDate} value={fromDate} style={{ minWidth: "140px" }} />

              </CCol>
              <CCol md={2} className="">
                <CFormLabel htmlFor="validationTooltip02">تا تاریخ :</CFormLabel>
                <InputDatePicker onChange={inputHandlerToDate} value={toDate} style={{ minWidth: "140px" }} />
                <CFormFeedback tooltip valid>
                  Looks good!
                </CFormFeedback>
              </CCol>
              <CCol md={12} className="position-relative m-1"  >
              </CCol>
              <CCol style={{ maxWidth: "10%",margin:"0px" }} className="position-relative " >
                <CButton
                  onClick={handleSearchData}
                  type="submit" style={{ fontSize: "10px", fontWeight: "400", backgroundColor: "#4CAF50", color: "white" }}>
                  <FaMagnifyingGlass className='mx-1' />
                  جستجو

                </CButton>
              </CCol>
              <CCol xs={2} className="position-relative ">
                {/* <CButton style={{fontSize:"10px",fontWeight:"400",color:"#FFF",backgroundColor:"#e33044"}} onClick={emptyInputs} >
         پاک کردن پارامتر
          </CButton> */}
              </CCol>
            </CForm>
            <div className='w-100 text-end' >
              <CButton onClick={() => { exportToExcel(columns, data) }} style={{ fontSize: "10px", backgroundColor: "#4CAF50", color: "white" }} >
                {/* <span> خروجی اکسل </span> */}
                <FaRegFileExcel />
              </CButton>

            </div>

            <Table rowClassName={(record, index) => index % 2 === 0 ? 'stripedRow' : 'stripedRow2'} columns={columns} dataSource={[...mockData]} pagination={{ pageSize: 50 }} scroll={{ y: 340 }} bordered style={{ textAlign: "center", fontFamily: "IranSans", fontSize: "10px" }} size="small" />
            <CModal
              visible={openModalDetail}
              onClose={() => setOpenModalDetail(false)}
              aria-labelledby="LiveDemoExampleLabel"
              size='xl'
            >
              <CModalHeader style={{ padding: "10px" }} >
                <CModalTitle id="LiveDemoExampleLabel" style={{ fontSize: "13px" }} > صورتحساب </CModalTitle>
              </CModalHeader>
              <CModalBody>
                <DetGrid getDetail={getDetail} />
              </CModalBody>

            </CModal>


          </div> :
          window.location.href = "http://localhost:3000/#/login"
      }

    </>

  )
}

const Validation = () => {
  return (
    <CRow>


      <CCol xs={12}>
        <CCard className="mb-4"  >
          <CCardHeader style={{ fontSize: "13px", backgroundColor: "#212631", color: "white" }} >
            گزارش صورتحساب
          </CCardHeader>
          <CCardBody>

            <DocsExample href="forms/validation#tooltips">{Tooltips()}</DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Validation
