import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import Select from "react-select";
import axios from "axios";
import { CONTACT_FORM } from "../../helpers/apiurls";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const LookingForTalent = () => {
  const [nearOffice, setnearOffice] = useState("");
  // const [title, settitle] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lname, setlname] = useState("");
  const [company, setcompany] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [mesage, setmesage] = useState("");
  // const [empType, setempType] = useState("");
  const notify = (v) => toast(v);

  const onSubmitHandler = (e) => {

 

    const clearfeilds=()=>{
      setnearOffice('');
      // settitle('');
      setfirstName('');
      setlname('');
      setcompany('');
      setphone('');
      setemail('');
      setmesage('');
      // setempType('');
    }
    const iData = new FormData();
    iData.append("nearest_office", nearOffice.value);
    // iData.append("Title", title);
    iData.append("FirstName", firstName);
    iData.append("LastName", lname);
    iData.append("company", company);
    iData.append("phone", phone);
    iData.append("email", email);
    iData.append("mesage", mesage);
    // iData.append("type", empType.value);



    const options = {
      method: "POST",
      headers: {
        // if file upload "Content-Type": "multipart/form-data",
        Accept: "application/json"
      },
    };

    axios.post(CONTACT_FORM + 100 + "/feedback", iData, options).then((res) => {
      if (res && res.status===200) {
        clearfeilds();
        notify(res?.data?.message);
      }
    });
  };

  return (
    <>
       <ToastContainer />
       <Row>
      <Col lg={4} md={4}>
        <div className="mb25">
          <Select
            classNamePrefix="themeSelect"
            className="themeSelect"
            options={[
              { value: "New Jersey", label: "New Jersey" },
              { value: "Boston", label: "Boston" },
              { value: "Chicago", label: "Chicago" },
              { value: "North Carolina", label: "North Carolina" }
            ]}
            value={nearOffice}
            placeholder={<div>Choose your nearest office *</div>}
            onChange={(e) => setnearOffice(e)}
          />
        </div>
      </Col>
      {/* <Col lg={4} md={4}>
        <div className="mb25">
          <input type="text" onChange={(e)=>settitle(e.target.value)} value={title} className="inputTheme w-100" placeholder="Title" />
        </div>
      </Col> */}
      <Col lg={4} md={4}>
        <div className="mb25">
          <input
            type="text"
            className="inputTheme w-100"
            placeholder="First Name *"
            onChange={(e)=>setfirstName(e.target.value)} 
            value={firstName}
          />
        </div>
      </Col>
      <Col lg={4} md={4}>
      <div className="mb25">
          <input
            type="text"
            className="inputTheme w-100"
            placeholder="Last Name *"
            onChange={(e)=>setlname(e.target.value)} 
            value={lname}
          />
        </div>
    
      </Col>

      <Col lg={4} md={4}>
      <div className="mb25">
          <input
            type="text"
            className="inputTheme w-100"
            placeholder="Company"
            onChange={(e)=> setcompany(e.target.value)} 
            value={company}
          />
        </div>
      </Col>
      <Col lg={4} md={4}>
        <div className="mb25">
          <input
            type="text"
            className="inputTheme w-100"
            placeholder="Contact Number *"
            onChange={(e)=> setphone(e.target.value)} 
            value={phone}
          />
        </div>
      </Col>
      <Col lg={4} md={4}>
        <div className="mb25">
          <input
            type="text"
            className="inputTheme w-100"
            placeholder="E-mail *"
            onChange={(e)=> setemail(e.target.value)} 
            value={email}
          />
        </div>
      </Col>
      <Col lg={12} md={12}>
        <div className="mb25">
          <input
            type="text"
            className="inputTheme w-100"
            placeholder="What are your recruitment needs? *"
            onChange={(e)=> setmesage(e.target.value)} 
            value={mesage}
          />
        </div>
      </Col>

      {/* <Col lg={4} md={4}>
        <div className="mb25">
          <Select
            classNamePrefix="themeSelect"
            className="themeSelect"
            options={[
              { value: "Permanent", label: "Permanent" },
              { value: "Contract", label: "Contract" },
              { value: "Not Sure", label: "Not Sure" }
            ]}
            value={empType}
            placeholder={<div>Employment type *</div>}
            onChange={(e) => setempType(e)}
            //isMulti={true}
          />
        </div>
      </Col> */}

      <Col lg={12}>
        <p className="fs14 colorPara mt27">
        By registering, you confirm that you agree to the processing of your personal data as described in our  <Link to="/privacy-policy">privacy policy.</Link>
        </p>

        <div className="mt30 d-flex justify-content-between">
          <div></div>
          <button onClick={onSubmitHandler} className="noBtn bgBlue btnTheme">Submit</button>
        </div>
      </Col>
    </Row>
    </>
 
  );
};

export default LookingForTalent;
