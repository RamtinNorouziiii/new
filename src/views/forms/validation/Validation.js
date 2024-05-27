import React, { useState,useRef } from 'react'
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
} from '@coreui/react'
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';import { DocsExample } from 'src/components'
import { InputDatePicker } from "jalaali-react-date-picker";
import { exportToExcel } from '../../../utils/exportExcel';
import { FaRegFileExcel } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
const data = [
  {
    key: '1',
    name: 'رامتین نوروزی',
    age: 32,
    address: '234234576576576545',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
   
  },
  {
    key: '2',
    name: 'فرشاد کاظمی',
    age: 42,
    address: '2342343435435435452',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'علی جهان',
    age: 32,
    address: '23454643545345435',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'مریم قربانی',
    age: 32,
    address: '8667456534546576787',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'حسن احمدی',
    age: 32,
    address: '6553457653424465756',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '2',
    name: 'امیرحسین بنکدار',
    age: 42,
    address: '676576574ث565645645',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: '23786845657657546',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: '4354354565465677687',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: '56768787876876567658',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: '76678978768657657',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: '45654665765765767835',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: '456456345467689879',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: '2423444556678894645',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: '876575645678784565464',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: '2343576878978567567',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: '2343547665756754654',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'رامتین نوروزی',
    age: 32,
    address: '234234576576576545',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
   
  },
  {
    key: '2',
    name: 'فرشاد کاظمی',
    age: 42,
    address: '2342343435435435452',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'علی جهان',
    age: 32,
    address: '23454643545345435',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'مریم قربانی',
    age: 32,
    address: '8667456534546576787',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'حسن احمدی',
    age: 32,
    address: '6553457653424465756',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '2',
    name: 'امیرحسین بنکدار',
    age: 42,
    address: '676576574ث565645645',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: '23786845657657546',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: '4354354565465677687',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: '56768787876876567658',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: '76678978768657657',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: '45654665765765767835',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: '456456345467689879',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: '2423444556678894645',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: '876575645678784565464',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: '2343576878978567567',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: '2343547665756754654',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'رامتین نوروزی',
    age: 32,
    address: '234234576576576545',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
   
  },
  {
    key: '2',
    name: 'فرشاد کاظمی',
    age: 42,
    address: '2342343435435435452',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'علی جهان',
    age: 32,
    address: '23454643545345435',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'مریم قربانی',
    age: 32,
    address: '8667456534546576787',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'حسن احمدی',
    age: 32,
    address: '6553457653424465756',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '2',
    name: 'امیرحسین بنکدار',
    age: 42,
    address: '676576574ث565645645',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: '23786845657657546',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: '4354354565465677687',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: '56768787876876567658',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: '76678978768657657',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: '45654665765765767835',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: '456456345467689879',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: '2423444556678894645',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: '876575645678784565464',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: '2343576878978567567',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: '2343547665756754654',
    column4:"3432432432432",
    column5:"365476546345",
    column6:"85645634534"
  },
 

];


const Tooltips = () => {

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            جستجو
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            پاک کردن
          </Button>
          {/* <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button> */}
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            بستن
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'نام کارمند',
      dataIndex: 'name',
      key: 'name',
     
      ...getColumnSearchProps('name'),
    },
    {
      title: 'شماره کارمندی',
      dataIndex: 'age',
      key: 'age',
   
      ...getColumnSearchProps('age'),
    },
    {
      title: 'شماره حساب',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'ستون 4',
      dataIndex: 'column4',
      key: 'column4',
      ...getColumnSearchProps('column4'),
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'ستون 5',
      dataIndex: 'column5',
      key: 'column5',
      ...getColumnSearchProps('column5'),
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'ستون 6',
      dataIndex: 'column6',
      key: 'column6',
      ...getColumnSearchProps('column6'),
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'عملیات',
      dataIndex: '',
      key: 'x',
      render: () =><FaFolderOpen style={{cursor:"pointer"}} />
,
    },
  ];

  const [validated, setValidated] = useState(false)
  const [fromDate, setFromDate] = useState(null)
  const [toDate, setToDate] = useState(null)
  const [employeeNumber, setEmployeeNumber] = useState(null)
  const [accountNumber, setAccountNumber] = useState(null)


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
  return (
    <>
    {
      window.localStorage.getItem("TOKENAVIN") ?  
      <div style={{minHeight:"130vh"}}>
      <CForm
        className="row g-3 needs-validation"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        style={{fontSize:"11px",fontWeight:"800"}}
      >
        <CCol md={3} className="position-relative">
          <CFormLabel >از تاریخ :</CFormLabel>
          <InputDatePicker onChange={inputHandlerFromDate} value={fromDate} />
       
        </CCol>
        <CCol md={3} className="position-relative">
          <CFormLabel htmlFor="validationTooltip02">تا تاریخ :</CFormLabel>
          <InputDatePicker  onChange={inputHandlerToDate}  value={toDate}  />
                  <CFormFeedback tooltip valid>
            Looks good!
          </CFormFeedback>
        </CCol>
       
   
        <CCol md={3} className="position-relative">
          <CFormLabel htmlFor="validationTooltip05">شماره کارمندی : </CFormLabel>
          <CFormInput min={0} type="number" id="validationTooltip05" value={employeeNumber} onChange={(e)=>{setEmployeeNumber(e.target.value)}}  />
          <CFormFeedback tooltip invalid>
            Please provide a valid zip.
          </CFormFeedback>
        </CCol>
        <CCol md={3} className="position-relative" >
          <CFormLabel htmlFor="validationTooltip05"  >  شماره حساب : </CFormLabel>
          <CFormInput type="number" min={0} id="validationTooltip05" value={accountNumber} onChange={(e)=>{setAccountNumber(e.target.value)}}  />
          <CFormFeedback tooltip invalid>
            Please provide a valid zip.
          </CFormFeedback>
        </CCol>
  
        <CCol xs={1} className="position-relative" >
          <CButton  type="submit" style={{fontSize:"10px",fontWeight:"400",   backgroundColor:"#4CAF50",color:"white"}}>
         جستجو
          </CButton>
        </CCol>
        <CCol xs={2} className="position-relative">
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
      <Table   columns={columns} dataSource={data}  pagination={{ pageSize:50 }} scroll={{ y: 740 }} bordered style={{marginTop:"20px",textAlign:"center",fontFamily:"IranSans",fontSize:"10px"}} size="small"  />
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
          <CCardHeader style={{fontSize:"13px"}} >
           نام فرم
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
