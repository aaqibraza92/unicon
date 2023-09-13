import React, { useState } from "react";
import { Col, Form, Row } from "reactstrap";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { CONTACT_FORM } from "../../helpers/apiurls";
import { Link } from "react-router-dom";

const LookingForJob = () => {
  // const [nearOffice, setnearOffice] = useState("");
  // const [title, settitle] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lname, setlname] = useState("");
  const [company, setcompany] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [mesage, setmesage] = useState("");
  const [jobType, setjobType] = useState("");
  const [resume, setresume] = useState("");
  const [fileName, setfileName] = useState("");
  const [loader, setloader] = useState(false);
  const notify = (v) => toast(v);

  const uploadHandle=(e)=>{
    setresume(e.target.files[0]);
    setfileName(e.target.files[0].name);
    
  }

  const clearfeilds = () => {
    // setnearOffice('');
    // settitle('');
    setfirstName("");
    setlname("");
    setcompany("");
    setphone("");
    setemail("");
    setmesage("");
    setjobType("");
    setresume("");
  };
  const [validations, setValidations] = React.useState({
    first_name: "",
    lname: "",
    company: "",
    phone: "",
    email: "",
    mesage: "",
    jobType: "",
    resume: "",
  });
  const validateAll = () => {
    const validations = {
      first_name: "",
      lname: "",
      company: "",
      phone: "",
      email: "",
      mesage: "",
      jobType: "",
      resume: "",
    };
    let isValid = true;

    if (!firstName) {
      validations.first_name = "First name is required";
      isValid = false;
    }
    if (!lname) {
      validations.lname = "Last name is required";
      isValid = false;
    }

    if (!email) {
      validations.email = "Email is required";
      isValid = false;
    }

    if (email && !/\S+@\S+\.\S+/.test(email)) {
      validations.email = "Email format must be as example@mail.com";
      isValid = false;
    }
    if (!phone) {
      validations.phone = 'Phone is required'
      isValid = false
  }
  if (!mesage) {
    validations.mesage = 'Mesage is required'
    isValid = false
}
if (!jobType) {
  validations.jobType = 'Job Type is required'
  isValid = false
}
if (!resume) {
  validations.resume = 'Please upload resume, Pdf, Doc. or image format'
  isValid = false
}
    if (!isValid) {
      setValidations(validations);
    }

    return isValid;
  };



  const onSubmitHandler = (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) {
      return false;
    }
    setloader(true);

    const iData = new FormData();
    // iData.append("nearest_office", nearOffice.value);
    // iData.append("Title", title);
    iData.append("FirstName", firstName);
    iData.append("LastName", lname);
    iData.append("company", company);
    iData.append("phone", phone);
    iData.append("email", email);
    iData.append("mesage", mesage);
    iData.append("job_type", jobType.value);
    iData.append("resume", resume);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    };

    axios.post(CONTACT_FORM + 101 + "/feedback", iData, options).then((res) => {

      if (res && res.status === 200) {
        clearfeilds();
        notify(res?.data?.message);
        setloader(false);
      }
    });
  };

  return (
    <>
      <ToastContainer />
      <Form onSubmit={onSubmitHandler}>
        <Row>
          <Col lg={6} md={6}>
            <div className="mb25">
              <input
                type="text"
                className="inputTheme w-100"
                placeholder="First Name *"
                onChange={(e) => setfirstName(e.target.value)}
                value={firstName}
                name="first_name"
              />
                {
                            validations?.first_name && <div className='validation'>
                                {validations?.first_name.replace("_"," ")}
                            </div>
                        }
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="mb25">
              <input
                type="text"
                className="inputTheme w-100"
                placeholder="Last Name *"
                onChange={(e) => setlname(e.target.value)}
                value={lname}
                name="lname"
              />
                {
                            validations?.lname && <div className='validation'>
                                {validations?.lname.replace("_"," ")}
                            </div>
                        }
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="mb25">
              <input
                type="text"
                className="inputTheme w-100"
                placeholder="Contact Number *"
                onChange={(e) => setphone(e.target.value)}
                value={phone}
                name="lname"
              />
                {
                            validations?.phone && <div className='validation'>
                                {validations?.phone.replace("_"," ")}
                            </div>
                        }
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="mb25">
              <input
                type="text"
                className="inputTheme w-100"
                placeholder="E-mail *"
                onChange={(e) => setemail(e.target.value)}
                value={email}
                name="lname"
              />
                {
                            validations?.email && <div className='validation'>
                                {validations?.email.replace("_"," ")}
                            </div>
                        }
            </div>
          </Col>
          <Col lg={12} md={12}>
            <div className="mb25">
              <input
                type="text"
                className="inputTheme w-100"
                placeholder="What role are you looking for? *"
                onChange={(e) => setmesage(e.target.value)}
                value={mesage}
                name="lname"
              />
                {
                            validations?.mesage && <div className='validation'>
                                {validations?.mesage.replace("_"," ")}
                            </div>
                        }
            </div>
          </Col>

          <Col lg={6} md={6}>
            <div className="mb25">
              <Select
               name="lname"
                classNamePrefix="themeSelect"
                className="themeSelect"
                options={[
                  { value: "Permanent", label: "Permanent" },
                  { value: "Contract", label: "Contract" },
                  { value: "Any", label: "Any" },
                ]}
                value={jobType}
                placeholder={<div>Employment type *</div>}
                onChange={(e) => setjobType(e)}
              />
                {
                            validations?.jobType && <div className='validation'>
                                {validations?.jobType.replace("_"," ")}
                            </div>
                        }
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="mb25">
              <Row className="align-items-center">
                <Col lg={3} md={3}>
                  <div className="fs14 fBold colorBlue">Upload Resume</div>
                </Col>

                <Col lg={9} md={9}>
                  <label
                    htmlFor="fileUpload"
                    className="cursor fileUploadTheme w-100 d-flex justify-content-between"
                  >
                   <span className="colorPara">{fileName==="" ? "No file chosen" : fileName }</span>
              <span className="chooseFile">Choose File</span>
                  </label>
                  <input
                    id="fileUpload"
                    name="lname"
                    className="d-none"
                    type="file"
                    onChange={(e)=>uploadHandle(e)}
                  />
                </Col>
              </Row>
              {
                            validations?.resume && <div className='validation'>
                                {validations?.resume.replace("_"," ")}
                            </div>
                        }
            </div>
          </Col>

          <Col lg={12}>
            <p className="fs14 colorPara mt27">
              By registering, you confirm that you agree to the processing of
              your personal data as described in our{" "}
              <Link to="/privacy-policy">privacy policy.</Link>
            </p>

            <div className="mt30 d-flex justify-content-between">
              <div></div>
              <button type="submit" className="noBtn bgBlue btnTheme">
                 {loader ? "Sending..." : "Submit"}
              </button>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default LookingForJob;
