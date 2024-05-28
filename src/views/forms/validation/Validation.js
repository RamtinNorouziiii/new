import React, { useState,useRef, useEffect } from 'react'
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
import Highlighter from 'react-highlight-words';import { DocsExample } from 'src/components'
import { InputDatePicker } from "jalaali-react-date-picker";
import { exportToExcel } from '../../../utils/exportExcel';
import { FaRegFileExcel } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { DetGrid } from '../detgrid';
const data = [
  {
    key: '1',
    name: 'رامتین نوروزی',
    employeeNumber: 32,
    accountNumber: '234234576576576545',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
   
  },
  {
    key: '2',
    name: 'فرشاد کاظمی',
    employeeNumber: 42,
    accountNumber: '2342343435435435452',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'علی جهان',
    employeeNumber: 32,
    accountNumber: '23454643545345435',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'مریم قربانی',
    employeeNumber: 32,
    accountNumber: '8667456534546576787',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'حسن احمدی',
    employeeNumber: 32,
    accountNumber: '6553457653424465756',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '2',
    name: 'امیرحسین بنکدار',
    employeeNumber: 42,
    accountNumber: '676576574ث565645645',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'Jim Green',
    employeeNumber: 32,
    accountNumber: '23786845657657546',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'Jim Red',
    employeeNumber: 32,
    accountNumber: '4354354565465677687',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'John Brown',
    employeeNumber: 32,
    accountNumber: '56768787876876567658',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '2',
    name: 'Joe Black',
    employeeNumber: 42,
    accountNumber: '76678978768657657',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'Jim Green',
    employeeNumber: 32,
    accountNumber: '45654665765765767835',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'Jim Red',
    employeeNumber: 32,
    accountNumber: '456456345467689879',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'John Brown',
    employeeNumber: 32,
    accountNumber: '2423444556678894645',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '2',
    name: 'Joe Black',
    employeeNumber: 42,
    accountNumber: '876575645678784565464',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'Jim Green',
    employeeNumber: 32,
    accountNumber: '2343576878978567567',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'Jim Red',
    employeeNumber: 32,
    accountNumber: '2343547665756754654',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'رامتین نوروزی',
    employeeNumber: 32,
    accountNumber: '234234576576576545',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
   
  },
  {
    key: '2',
    name: 'فرشاد کاظمی',
    employeeNumber: 42,
    accountNumber: '2342343435435435452',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'علی جهان',
    employeeNumber: 32,
    accountNumber: '23454643545345435',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'مریم قربانی',
    employeeNumber: 32,
    accountNumber: '8667456534546576787',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'حسن احمدی',
    employeeNumber: 32,
    accountNumber: '6553457653424465756',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '2',
    name: 'امیرحسین بنکدار',
    employeeNumber: 42,
    accountNumber: '676576574ث565645645',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'Jim Green',
    employeeNumber: 32,
    accountNumber: '23786845657657546',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'Jim Red',
    employeeNumber: 32,
    accountNumber: '4354354565465677687',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'John Brown',
    employeeNumber: 32,
    accountNumber: '56768787876876567658',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '2',
    name: 'Joe Black',
    employeeNumber: 42,
    accountNumber: '76678978768657657',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'Jim Green',
    employeeNumber: 32,
    accountNumber: '45654665765765767835',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'Jim Red',
    employeeNumber: 32,
    accountNumber: '456456345467689879',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'John Brown',
    employeeNumber: 32,
    accountNumber: '2423444556678894645',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '2',
    name: 'Joe Black',
    employeeNumber: 42,
    accountNumber: '876575645678784565464',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'Jim Green',
    employeeNumber: 32,
    accountNumber: '2343576878978567567',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'Jim Red',
    employeeNumber: 32,
    accountNumber: '2343547665756754654',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'رامتین نوروزی',
    employeeNumber: 32,
    accountNumber: '234234576576576545',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
   
  },
  {
    key: '2',
    name: 'فرشاد کاظمی',
    employeeNumber: 42,
    accountNumber: '2342343435435435452',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'علی جهان',
    employeeNumber: 32,
    accountNumber: '23454643545345435',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'مریم قربانی',
    employeeNumber: 32,
    accountNumber: '8667456534546576787',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'حسن احمدی',
    employeeNumber: 32,
    accountNumber: '6553457653424465756',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '2',
    name: 'امیرحسین بنکدار',
    employeeNumber: 42,
    accountNumber: '676576574ث565645645',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'Jim Green',
    employeeNumber: 32,
    accountNumber: '23786845657657546',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'Jim Red',
    employeeNumber: 32,
    accountNumber: '4354354565465677687',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'John Brown',
    employeeNumber: 32,
    accountNumber: '56768787876876567658',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '2',
    name: 'Joe Black',
    employeeNumber: 42,
    accountNumber: '76678978768657657',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'Jim Green',
    employeeNumber: 32,
    accountNumber: '45654665765765767835',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'Jim Red',
    employeeNumber: 32,
    accountNumber: '456456345467689879',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'John Brown',
    employeeNumber: 32,
    accountNumber: '2423444556678894645',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '2',
    name: 'Joe Black',
    employeeNumber: 42,
    accountNumber: '876575645678784565464',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'Jim Green',
    employeeNumber: 32,
    accountNumber: '2343576878978567567',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'Jim Red',
    employeeNumber: 32,
    accountNumber: '2343547665756754654',
    codeShobe:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
 

];


const Tooltips = () => {
const [mockData,setMockData]=useState(data)
const [toggle,setToggle]=useState(false)

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [openModalDetail, setOpenModalDetail] = useState(false);
  const [getDetail, setGetDetail] = useState();
  const [nameKarmandy, setNameKarmandy] = useState();
  const [codeShobe, setCodeShobe] = useState();



  const handleSearchData = ()=>{
    console.log(mockData.filter((el)=>el.name==nameKarmandy && el.accountNumber==accountNumber && el.codeShobe==codeShobe && el.employeeNumber==employeeNumber ))
  setToggle(true)
  }
  const columns = [
    {
      title: 'نام و نام خانوادگی',
      dataIndex: 'name',
      key: 'name',
     
    },
    {
      title: 'شماره کارمندی',
      dataIndex: 'employeeNumber',
      key: 'employeeNumber',
   
   //   ...getColumnSearchProps('age'),
    },
    {
      title: 'شماره حساب',
      dataIndex: 'accountNumber',
      key: 'accountNumber',
      
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'کد شعبه ',
      dataIndex: 'codeShobe',
      key: 'codeShobe',
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
        <FaFolderOpen style={{cursor:"pointer"}} onClick={()=>{sendDet(e)}} />
     
,
    },
  ];

  const [validated, setValidated] = useState(false)
  const [fromDate, setFromDate] = useState(null)
  const [toDate, setToDate] = useState(null)
  const [employeeNumber, setEmployeeNumber] = useState(null)
  const [accountNumber, setAccountNumber] = useState(null)

  console.log(mockData,mockData.filter((el)=>el.name==nameKarmandy && el.accountNumber==accountNumber && el.codeShobe==codeShobe && el.employeeNumber==employeeNumber ),toggle)

  const handleSubmit = (e) => {
e.preventDefault()
  }
  const inputHandlerFromDate = (e)=>{
    console.log(e._d)
    setFromDate(e)
  }
  const inputHandlerToDate = (e)=>{
    setToDate(e)
  }
  const emptyInputs = ()=>{
setAccountNumber('')
setEmployeeNumber('')
setFromDate(null)
setToDate(null)

  }
  const sendDet = (e)=>{
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
        style={{fontSize:"11px",fontWeight:"800"}}
      >
       
       
   
        <CCol md={2} className="position-relative">
          <CFormLabel htmlFor="validationTooltip05">شماره کارمندی : </CFormLabel>
          <CFormInput min={0} type="number" id="validationTooltip05" value={employeeNumber} onChange={(e)=>{setEmployeeNumber(e.target.value)}}  />
          <CFormFeedback tooltip invalid>
            Please provide a valid zip.
          </CFormFeedback>
        </CCol>
        <CCol md={2} className="position-relative" >
          <CFormLabel htmlFor="validationTooltip05"  >  شماره حساب : </CFormLabel>
          <CFormInput type="number" min={0} id="validationTooltip05" value={accountNumber} onChange={(e)=>{setAccountNumber(e.target.value)}}  />
          <CFormFeedback tooltip invalid>
            Please provide a valid zip.
          </CFormFeedback>
        </CCol>
        <CCol md={2} className="position-relative" >
          <CFormLabel htmlFor="validationTooltip05"  >  نام و نام خانوادگی : </CFormLabel>
          <CFormInput  id="validationTooltip06" value={nameKarmandy} onChange={(e)=>{setNameKarmandy(e.target.value)}}   />
          <CFormFeedback tooltip invalid>
            Please provide a valid zip.
          </CFormFeedback>
        </CCol>
        <CCol md={2} className="position-relative" >
          <CFormLabel htmlFor="validationTooltip05"  > کد شعبه: </CFormLabel>
          <CFormInput type="number" min={0} id="validationTooltip07" value={codeShobe}  onChange={(e)=>{setCodeShobe(e.target.value)}}   />
          <CFormFeedback tooltip invalid>
            Please provide a valid zip.
          </CFormFeedback>
        </CCol>
       
        <CCol md={2} className="position-relative">
          <CFormLabel >از تاریخ :</CFormLabel>
          <InputDatePicker onChange={inputHandlerFromDate} value={fromDate} style={{minWidth:"140px"}}  />
       
        </CCol>
        <CCol md={2} className="">
          <CFormLabel htmlFor="validationTooltip02">تا تاریخ :</CFormLabel>
          <InputDatePicker  onChange={inputHandlerToDate}  value={toDate}  style={{minWidth:"140px"}} />
                  <CFormFeedback tooltip valid>
            Looks good!
          </CFormFeedback>
        </CCol>
        <CCol md={12} className="position-relative" >
        </CCol>
        <CCol style={{maxWidth:"10%"}} className="position-relative " >
          <CButton onClick={handleSearchData}  type="submit" style={{fontSize:"10px",fontWeight:"400",   backgroundColor:"#4CAF50",color:"white"}}>
        
         جستجو
         <FaMagnifyingGlass className='mx-1'  />
          </CButton>
        </CCol>
        <CCol xs={2} className="position-relative ">
          <CButton style={{fontSize:"10px",fontWeight:"400",color:"#FFF",backgroundColor:"#e33044"}} onClick={emptyInputs} >
         پاک کردن پارامتر
          </CButton>
        </CCol>
      </CForm>
      <div className='w-100 text-end' >
      <CButton  onClick={()=>{exportToExcel(columns,data)}} style={{fontSize:"10px",backgroundColor:"#4CAF50",color:"white"}} >
        {/* <span> خروجی اکسل </span> */}
        <FaRegFileExcel />
      </CButton>
  
      </div>
 {
   employeeNumber && accountNumber && nameKarmandy && codeShobe && toggle
  
  ?     <>  <Table rowClassName={(record,index)=>index%2===0 ?'stripedRow' :'stripedRow2'}   columns={columns} dataSource={mockData.filter((el)=>el.name==nameKarmandy && el.accountNumber==accountNumber && el.codeShobe==codeShobe && el.employeeNumber==employeeNumber )}  pagination={{ pageSize:50 }} scroll={{ y: 340 }} bordered style={{marginTop:"20px",textAlign:"center",fontFamily:"IranSans",fontSize:"10px"}} size="small"  /></>

  
  :     employeeNumber && accountNumber && nameKarmandy && toggle 

  ? <><Table rowClassName={(record,index)=>index%2===0 ?'stripedRow' :'stripedRow2'}   columns={columns} dataSource={mockData.filter((el)=>el.name==nameKarmandy && el.accountNumber==accountNumber && el.employeeNumber==employeeNumber )}  pagination={{ pageSize:50 }} scroll={{ y: 340 }} bordered style={{marginTop:"20px",textAlign:"center",fontFamily:"IranSans",fontSize:"10px"}} size="small"  /></>
  
  : <Table rowClassName={(record,index)=>index%2===0 ?'stripedRow' :'stripedRow2'}   columns={columns} dataSource={[...mockData]}  pagination={{ pageSize:50 }} scroll={{ y: 340 }} bordered style={{marginTop:"20px",textAlign:"center",fontFamily:"IranSans",fontSize:"10px"}} size="small"  />

 }
      <CModal
      visible={openModalDetail}
      onClose={() => setOpenModalDetail(false)}
      aria-labelledby="LiveDemoExampleLabel"
    size='xl'
    >
      <CModalHeader>
        <CModalTitle id="LiveDemoExampleLabel" style={{fontSize:"13px"}} > صورتحساب </CModalTitle>
      </CModalHeader>
      <CModalBody>
     <DetGrid getDetail={getDetail} />
      </CModalBody>
      
    </CModal>
    
      {/* <CTable className='my-5' style={{fontSize:"12px"}} >
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell scope="col">ردیف</CTableHeaderCell>
        <CTableHeaderCell scope="col">نام کارمند</CTableHeaderCell>
        <CTableHeaderCell scope="col">شماره کارمندی</CTableHeaderCell>
        <CTableHeaderCell scope="col"> شماره حساب</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      <CTableRow>
        <CTableHeaderCell scope="row">1</CTableHeaderCell>
        <CTableDataCell>ضیایی</CTableDataCell>
        <CTableDataCell>15289875</CTableDataCell>
        <CTableDataCell>43568732</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">2</CTableHeaderCell>
        <CTableDataCell>مردانی</CTableDataCell>
        <CTableDataCell>15289428</CTableDataCell>
        <CTableDataCell>2468452</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">3</CTableHeaderCell>
        <CTableDataCell >کاظمی</CTableDataCell>
        <CTableDataCell>152827961</CTableDataCell>
        <CTableDataCell>1347953</CTableDataCell>
  
      </CTableRow>
    </CTableBody>
  </CTable> */}
      </div> :
      window.location.href="http://localhost:3000/#/login"
    }
   
    </>
   
  )
}

const Validation = () => {
  return (
    <CRow>
     

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader style={{fontSize:"13px",backgroundColor:"#212631",color:"white"}} >
         فرم نمونه
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
