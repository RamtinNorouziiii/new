import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CFormSelect, CInputGroup, CInputGroupText } from "@coreui/react"
import { InputDatePicker } from "jalaali-react-date-picker";
import { Button, Input, Space, Table } from 'antd';
import { useEffect, useRef, useState } from "react";
import { SearchOutlined } from '@ant-design/icons';
import { FaFolderOpen, FaRegFileExcel } from "react-icons/fa6";
import { exportToExcel } from "../../../utils/exportExcel";
const data = [{"id":1,"bm":"10","br":"8823","no_acc":"3708713","date_circl":"830503","qty":"4557","new_qty":"768869","no_sand":"830430","kind_code":"79","tim":"082500"},{"id":2,"bm":"10","br":"8823","no_acc":"3714750","date_circl":"831030","qty":"11504","new_qty":"2888475","no_sand":"700","kind_code":"79","tim":"151553"},{"id":3,"bm":"10","br":"8823","no_acc":"3700025","date_circl":"830105","qty":"290","new_qty":"55865","no_sand":"821228","kind_code":"79","tim":"125456"},{"id":4,"bm":"10","br":"8823","no_acc":"3706964","date_circl":"830503","qty":"713","new_qty":"122435","no_sand":"830430","kind_code":"79","tim":"082442"},{"id":5,"bm":"10","br":"8823","no_acc":"3703118","date_circl":"830202","qty":"10599","new_qty":"4236452","no_sand":"830130","kind_code":"79","tim":"080332"},{"id":6,"bm":"10","br":"8823","no_acc":"3701680","date_circl":"830401","qty":"3568","new_qty":"85840","no_sand":"830331","kind_code":"79","tim":"111151"},{"id":7,"bm":"10","br":"8823","no_acc":"3705004","date_circl":"830819","qty":"10000000","new_qty":"15780973","no_sand":"959099","kind_code":"73","tim":"130736"},{"id":8,"bm":"10","br":"8823","no_acc":"3713140","date_circl":"830202","qty":"107578","new_qty":"29132002","no_sand":"830130","kind_code":"79","tim":"080528"},{"id":9,"bm":"10","br":"8823","no_acc":"3708713","date_circl":"830602","qty":"4588","new_qty":"773426","no_sand":"830601","kind_code":"79","tim":"074641"},{"id":10,"bm":"10","br":"8823","no_acc":"3714750","date_circl":"831030","qty":"106849","new_qty":"2899979","no_sand":"1040211300","kind_code":"78","tim":"153338"}];

export const DetGrid = ({getDetail})=>{
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [openModalDetail, setOpenModalDetail] = useState(false);
    const [requestToggle, setRequestToggle] = useState(false);

    const[mockData,setMockData]=useState([])
    console.log(getDetail)
    useEffect(() => {
    if(requestToggle){
      fetch(`${process.env.BASE_URL}/weatherforecast/GetTranAll?br=${getDetail?.br|| null}&no_acc=${getDetail?.no_acc||null}&emply_no=${getDetail?.emply_no||null}&bm=${getDetail?.bm||null}`)
      // fetch('https://jsonplaceholder.typicode.com/todos')
         .then(response => response.json())
         .then(json => setMockData(json))
       //  .then(json => setMockData(data))
       alert("SLM")
    }
    setRequestToggle(true)
    }, [requestToggle])
  



    const columns = [
        {
            title: 'ردیف',
            dataIndex: '',
            key: '',
            width:"5%",
           
           render:(e,index,_index)=>(<>{_index+1}</>)
          },
          
       
        // {
        //     title: ' تاریخ ',
        //     dataIndex: 'column7',
        //     key: 'column7',
        //     width:"10%",
          
        //   },
         {
            title: ' استان ',
            dataIndex: 'bm',
            key: 'bm',
            width:"10%",
          
          },
          {
            title: ' کذ سند ',
            dataIndex: 'no_sand',
            key: 'no_sand',
            width:"10%",
        
          },
          {
            title: '  شرح سند ',
            dataIndex: 'kind_code',
            key: 'kind_code',
            width:"10%",
        
          },
          {
            title: ' مبلغ ',
            dataIndex: 'qty',
            key: 'qty',
            width:"10%",
          
          },
          {
            title: ' مانده ',
            dataIndex: 'new_qty',
            key: 'new_qty',
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
        <CForm className="row g-3 my-1" style={{fontSize:"11px",textAlign:"center"}} >
  <CCol md={2}>
    {/* <CFormInput
      type="text"
      id="validationDefault01"
      label="نام و نام خانوادگی"
     value={getDetail?.name}
      disabled
      style={{fontSize:"11px",textAlign:"center"}}
    /> */}
    <labe   >  نام و نام خانوادگی  : </labe>
    <span>{getDetail?.name}</span>
    
  </CCol>
  
  
  <CCol md={2}>
    {/* <CFormInput
      type="text"
      id="validationDefault01"
      label="شماره حساب"
      value={getDetail?.column5}
      disabled
      style={{fontSize:"11px",textAlign:"center"}}
    /> */}
    <labe   >  شماره حساب : </labe>
    <span>{getDetail?.no_acc}</span>
  </CCol>
  

  <CCol md={2}>
    {/* <CFormInput
      type="text"
      id="validationDefault01"
      label="شماره کارمندی"
      value={getDetail?.column6}
      disabled
      style={{fontSize:"11px",textAlign:"center"}}
    /> */}
    <labe   >  شماره کارمندی : </labe>
    <span>{getDetail?.emply_no}</span>
  </CCol>
  <CCol md={2}>
    {/* <CFormInput
      type="text"
      id="validationDefault01"
      label="کد شعبه"
      value={getDetail?.age}
      disabled
      style={{fontSize:"11px",textAlign:"center"}}
    /> */}


<labe   > کد شعبه : </labe>
    <span>{getDetail?.br}</span>


  </CCol>

  <CCol md={2} className="position-relative">
          {/* <CFormLabel >از تاریخ :</CFormLabel>
          <InputDatePicker disabled style={{minWidth:"30px"}} /> */}
       <labe   > از تاریخ  : </labe>
    <span>-</span>
        </CCol>
        <CCol md={2} className="">
          {/* <CFormLabel htmlFor="validationTooltip02">تا تاریخ :</CFormLabel>
          <InputDatePicker disabled   style={{minWidth:"30px"}}  /> */}
               <labe   > تا تاریخ  : </labe>
    <span>-</span>   
        </CCol>

  
  
</CForm>
<div className="mb-2" style={{float:"left"}} >
<CButton  onClick={()=>{exportToExcel(columns,data)}} style={{fontSize:"10px",backgroundColor:"#4CAF50",color:"white"}} >
        {/* <span> خروجی اکسل </span> */}
        <FaRegFileExcel />
      </CButton>
</div>
<Table rowClassName={(record, index) => index % 2 === 0 ? 'stripedRow' : 'stripedRow2'}   columns={columns} dataSource={mockData} pagination={false}   scroll={{ y: 340 }} bordered style={{textAlign:"center",fontFamily:"IranSans",fontSize:"10px"}} size="small"  />

</>
    )
}