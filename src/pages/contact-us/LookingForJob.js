import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import Select from "react-select";
const LookingForJob = () => {
    const [sortby, setsortby] = useState("");
    const [jobtype, setjobtype] = useState("");
  return (
    <Row>
    <Col lg={4} md={4}>
      <div className="mb25">
        <Select
          classNamePrefix="themeSelect"
          className="themeSelect"
          options={[
            { value: "Lorem1", label: "Lorem1" },
            { value: "Lorem2", label: "Lorem2" },
          ]}
          value={sortby}
          placeholder={<div>Choose your nearest office *</div>}
          onChange={(e) => setsortby(e)}
          //isMulti={true}
        />
      </div>
    </Col>
    <Col lg={4} md={4}>
      <div className="mb25">
        <input
          type="text"
          className="inputTheme w-100"
          placeholder="Title"
        />
      </div>
    </Col>
    <Col lg={4} md={4}>
      <div className="mb25">
        <input
          type="text"
          className="inputTheme w-100"
          placeholder="First Name *"
        />
      </div>
    </Col>
    <Col lg={4} md={4}>
      <div className="mb25">
        <input
          type="text"
          className="inputTheme w-100"
          placeholder="Last Name *"
        />
      </div>
    </Col>
    <Col lg={4} md={4}>
      <div className="mb25">
        <input
          type="text"
          className="inputTheme w-100"
          placeholder="Contact Number *"
        />
      </div>
    </Col>
    <Col lg={4} md={4}>
      <div className="mb25">
        <input
          type="text"
          className="inputTheme w-100"
          placeholder="E-mail *"
        />
      </div>
    </Col>
    <Col lg={12} md={12}>
      <div className="mb25">
        <input
          type="text"
          className="inputTheme w-100"
          placeholder="What role are you looking for? *"
        />
      </div>
    </Col>

    <Col lg={6} md={6}>
      <div className="mb25">
        <Select
          classNamePrefix="themeSelect"
          className="themeSelect"
          options={[
            { value: "Lorem1", label: "Lorem1" },
            { value: "Lorem2", label: "Lorem2" },
          ]}
          value={jobtype}
          placeholder={<div>Job type *</div>}
          onChange={(e) => setsortby(e)}
          //isMulti={true}
        />
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
              <span className="colorPara">No file chosen</span>{" "}
              <span className="chooseFile">Choose File</span>
            </label>
            <input id="fileUpload" className="d-none" type="file" />
          </Col>
        </Row>
      </div>
    </Col>

    <Col lg={12}>
      <p className="fs14 colorPara mt27">
        By Registering, You Confirm That You Agree To The Processing
        Of Your Personal Data As Described In Our Privacy Policy
      </p>

      <div className="mt30 d-flex justify-content-between">
        <div></div>
        <button className="noBtn bgBlue btnTheme">Submit</button>
      </div>
    </Col>
  </Row>
  )
}

export default LookingForJob