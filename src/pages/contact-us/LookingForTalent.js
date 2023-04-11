import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import Select from "react-select";
const LookingForTalent = () => {
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
          placeholder="Contact number *"
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
    <Col lg={4} md={4}>
      <div className="mb25">
        <input
          type="text"
          className="inputTheme w-100"
          placeholder="What are your recruitment needs? *"
        />
      </div>
    </Col>

    <Col lg={4} md={4}>
      <div className="mb25">
        <Select
          classNamePrefix="themeSelect"
          className="themeSelect"
          options={[
            { value: "Lorem1", label: "Lorem1" },
            { value: "Lorem2", label: "Lorem2" },
          ]}
          value={jobtype}
          placeholder={<div>Employment type *</div>}
          onChange={(e) => setsortby(e)}
          //isMulti={true}
        />
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

export default LookingForTalent