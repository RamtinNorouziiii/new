import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CFormSelect, CInputGroup, CInputGroupText } from "@coreui/react"
import { InputDatePicker } from "jalaali-react-date-picker";
import { Button, Input, Space, Table } from 'antd';
import { useRef, useState } from "react";
import { SearchOutlined } from '@ant-design/icons';
import { FaFolderOpen, FaRegFileExcel } from "react-icons/fa6";
import { exportToExcel } from "../../../utils/exportExcel";

const data = [
    {
      key: '1',
      name: 'رامتین نوروزی',
      age: 32,
      address: '234234576576576545',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
      column7:"1402/03/25",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
      column11:"تهران",


     
    },
    {
      key: '2',
      name: 'فرشاد کاظمی',
      age: 42,
      address: '2342343435435435452',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '3',
      name: 'علی جهان',
      age: 32,
      address: '23454643545345435',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '4',
      name: 'مریم قربانی',
      age: 32,
      address: '8667456534546576787',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
      column8:"قراردادی",
      column9:"1504871",
      column10:"412486",
    },
    {
      key: '1',
      name: 'حسن احمدی',
      age: 32,
      address: '6553457653424465756',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534"
      ,
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '2',
      name: 'امیرحسین بنکدار',
      age: 42,
      address: '676576574ث565645645',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
      
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 32,
      address: '23786845657657546',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: '4354354565465677687',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: '56768787876876567658',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '2',
      name: 'Joe Black',
      age: 42,
      address: '76678978768657657',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
      column8:"قراردادی",
      column9:"1504871",
      column10:"412486",
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 32,
      address: '45654665765765767835',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: '456456345467689879',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: '2423444556678894645',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '2',
      name: 'Joe Black',
      age: 42,
      address: '876575645678784565464',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 32,
      address: '2343576878978567567',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: '2343547665756754654',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '1',
      name: 'رامتین نوروزی',
      age: 32,
      address: '234234576576576545',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
     
    },
    {
      key: '2',
      name: 'فرشاد کاظمی',
      age: 42,
      address: '2342343435435435452',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '3',
      name: 'علی جهان',
      age: 32,
      address: '23454643545345435',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '4',
      name: 'مریم قربانی',
      age: 32,
      address: '8667456534546576787',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '1',
      name: 'حسن احمدی',
      age: 32,
      address: '6553457653424465756',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '2',
      name: 'امیرحسین بنکدار',
      age: 42,
      address: '676576574ث565645645',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 32,
      address: '23786845657657546',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: '4354354565465677687',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: '56768787876876567658',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '2',
      name: 'Joe Black',
      age: 42,
      address: '76678978768657657',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 32,
      address: '45654665765765767835',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: '456456345467689879',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: '2423444556678894645',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '2',
      name: 'Joe Black',
      age: 42,
      address: '876575645678784565464',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 32,
      address: '2343576878978567567',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: '2343547665756754654',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '1',
      name: 'رامتین نوروزی',
      age: 32,
      address: '234234576576576545',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
     
    },
    {
      key: '2',
      name: 'فرشاد کاظمی',
      age: 42,
      address: '2342343435435435452',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '3',
      name: 'علی جهان',
      age: 32,
      address: '23454643545345435',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '4',
      name: 'مریم قربانی',
      age: 32,
      address: '8667456534546576787',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '1',
      name: 'حسن احمدی',
      age: 32,
      address: '6553457653424465756',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '2',
      name: 'امیرحسین بنکدار',
      age: 42,
      address: '676576574ث565645645',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 32,
      address: '23786845657657546',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: '4354354565465677687',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: '56768787876876567658',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '2',
      name: 'Joe Black',
      age: 42,
      address: '76678978768657657',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 32,
      address: '45654665765765767835',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: '456456345467689879',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: '2423444556678894645',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '2',
      name: 'Joe Black',
      age: 42,
      address: '876575645678784565464',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 32,
      address: '2343576878978567567',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: '2343547665756754654',
      column4:"3432432432432",
      column5:"365476546345",
      column6:"85645634534",
       column7:"1402/03/25",
      column8:"رسمی",
      column9:"1504871",
      column10:"412486",
      column11:"تهران",
    },
   
  
  ];

export const DetGrid = ({getDetail})=>{
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [openModalDetail, setOpenModalDetail] = useState(false);

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
            title: 'ردیف',
            dataIndex: '',
            key: '',
            width:"5%",
           
           render:(e,index,_index)=>(<>{_index+1}</>)
          },
          
       
        {
            title: ' تاریخ ',
            dataIndex: 'column7',
            key: 'column7',
            width:"10%",
          
          },
          {
            title: ' نوع سند ',
            dataIndex: 'column8',
            key: 'column8',
            width:"10%",
        
          },
          {
            title: ' مبلغ ',
            dataIndex: 'column9',
            key: 'column9',
            width:"10%",
          
          },
          {
            title: ' مانده ',
            dataIndex: 'column10',
            key: 'column10',
            width:"10%",
           
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
       
      ];
    return(<>
        <CForm className="row g-3" style={{fontSize:"11px",textAlign:"center"}} >
  <CCol md={2}>
    <CFormInput
      type="text"
      id="validationDefault01"
      label="نام و نام خانوادگی"
     value={getDetail?.name}
      disabled
      style={{fontSize:"11px",textAlign:"center"}}
    />
  </CCol>
  
  
  <CCol md={3}>
    <CFormInput
      type="text"
      id="validationDefault01"
      label="شماره حساب"
      value={getDetail?.column5}
      disabled
      style={{fontSize:"11px",textAlign:"center"}}
    />
  </CCol>
  

  <CCol md={3}>
    <CFormInput
      type="text"
      id="validationDefault01"
      label="شماره کارمندی"
      value={getDetail?.column6}
      disabled
      style={{fontSize:"11px",textAlign:"center"}}
    />
  </CCol>
  <CCol md={2}>
    <CFormInput
      type="text"
      id="validationDefault01"
      label="کد شعبه"
      value={getDetail?.age}
      disabled
      style={{fontSize:"11px",textAlign:"center"}}
    />





  </CCol>
  <CCol md={2}>
   
  </CCol>
  <CCol md={2} className="position-relative">
          <CFormLabel >از تاریخ :</CFormLabel>
          <InputDatePicker disabled style={{minWidth:"30px"}} />
       
        </CCol>
        <CCol md={2} className="">
          <CFormLabel htmlFor="validationTooltip02">تا تاریخ :</CFormLabel>
          <InputDatePicker disabled   style={{minWidth:"30px"}}  />
               
        </CCol>

  
  
</CForm>
<div className="mb-2" style={{float:"left"}} >
<CButton  onClick={()=>{exportToExcel(columns,data)}} style={{fontSize:"10px",backgroundColor:"#4CAF50",color:"white"}} >
        {/* <span> خروجی اکسل </span> */}
        <FaRegFileExcel />
      </CButton>
</div>
<Table   columns={columns} dataSource={data} pagination={false}   scroll={{ y: 340 }} bordered style={{marginTop:"20px",textAlign:"center",fontFamily:"IranSans",fontSize:"10px"}} size="small"  />

</>
    )
}