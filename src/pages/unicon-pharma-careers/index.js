import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { Col, Container, Row } from "reactstrap";
import { checkSvg } from "../../assets/svg/Svg";
import Counter from "../home/Counter";
import { Helmet } from "react-helmet";
import AccordionUI from "../../components/Accordion";
import AlertModal from "../../components/AlertModal/AlertModal";
import LookingForTalent from "../contact-us/LookingForTalent";
let data = [
  "Competitive hourly rate",
  "Contributory medical, dental, and vision insurance",
  "Continuous Placement Assistance aligned with your career goals",
  "Employee Referral Bonus",
];
const UniconPharmaCareers = () => {
  return (
    <>
       <Helmet>
        <title>Unicon Pharma Careers | Unicon</title>
      </Helmet>
      <BreadCrumb
        title="Unicon Pharma Careers"
        items={[
          { name: "Home", url: "/" },
          { name: "Join Us", url: "/" },
          { name: "Unicon Pharma Careers", url: "" },
        ]}
      />
      <section className="pt80 pb80">
        <Container>
          <Row className="align-items-center mobilereverse ">
            <Col lg={6}>
              <img
                src={require("../../assets/img/what_we.jpg")}
                className="img-fluid"
                alt="what we do"
              />
            </Col>
            <Col lg={6} className="intro-content">
              <h2 className="colorBlue fs36 mobFs28  fBold mb30">
                Working With Unicon Pharma
              </h2>
              <hr className="wp-block-separator has-alpha-channel-opacity"></hr>
              <p className="fs16 colorPara">
                At Unicon Pharma, we leverage our experienced sales and
                recruiting teams, vast client network, and relationship-first
                approach to become your trusted advisor and empower you to
                achieve your goals. We’ll work closely with you, understand your
                needs, identify the best suitable roles, and partner with you to
                find the one that you really love.
              </p>

              <h4 className="colorBlue fs20 fBold mb30">
                Our positions include Temporary/Contract, Contract-to-
                permanent, Permanent/Full-Time​ and offers:
              </h4>
              <ul className="noUl mb30">
                {data.map((e, i) => (
                  <li className="d-flex align-items-center mb12" key={i}>
                    <span className="mr10">{checkSvg}</span>
                    <span className="colorPara fs16">{e}</span>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt20 pb20">
        <Container>
          <h2 className="colorBlue fs36  mobFs28  fBold mb30">We Are Currently Hiring</h2>
          <p className="fs16 colorPara">
            Unicon Pharma seeks talent from diverse backgrounds and invests
            heavily in your training and development to ensure you succeed in
            our customer-focused culture. We treat our employees like family and
            value their personal and professional happiness. If you have the
            skills and talents to contribute to our in-house life science
            consulting team, view the opportunities below and send your
            resume/CV to:
            <a
              href="mailto:careers@uniconpharma"
              className="colorBlue"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              careers@uniconpharma.
            </a>
          </p>
          <p className="fs16 colorPara">
            com We also rely on our employees to help us identify top talent. To
            encourage your efforts, all employees are eligible for our employee
            referral program. You will receive a one-time referral bonus if the
            candidate is hired by the company.
          </p>
        </Container>
      </section>
      <section className="text-center pt80 pb80">
        <Container>
        <AccordionUI
        data={[
          {
            title: "IT QA Analyst",
            description:"Unicon Pharma Inc. has job openings for IT QA Analyst. Jobs located in South Plainfield, NJ and various unanticipated locations throughout the U.S. Analyze the testing requirements and derive test strategies for a system following the SDLC methodologies and in compliance with FDA guidelines and company procedures. Write and execute test cases or test scripts for OQ and PQ protocols analyzing the document including functional and user requirements. Perform functional testing, dry runs, and regression testing as needed. Travel/relocate to various unanticipated locations throughout the U.S. for long and short term assignments at client sites. Requires Bachelor's degree or foreign equivalent in Computer Science, Engineering (any), Regulatory Affairs, Pharmaceutical Sciences, Pharmacy, Chemistry, Biochemistry, Biology, or a related life sciences discipline. Will also accept 2 years of experience in the job offered or related in lieu of Bachelor’s degree. Offered salary $68,000 P/Y. Mail resume with cover letter to Unicon Pharma Inc., 51 Cragwood Road, Suite 101, South Plainfield, NJ 07080; Job 20UPI38; EOE",
          },
          {
            title: "Sr. Clinical Research Associate I",
            description: "Unicon Pharma Inc. has job openings for Sr. Clinical Research Associate I. Jobs located in South Plainfield, NJ and various unanticipated locations throughout the U.S. Identify and initiate appropriate investigational sites for clinical studies. Administer, coordinate, and monitor research projects according to guidelines and federal regulations. Maintain databases of critical patient information, draft correspondence, and gather data relevant to budgeting. Develop and write trial protocols. Perform research and oversee operational activities of clinical trials in various therapeutic areas including but not limited to oncology, hematology, cardiology and neurology. Provide oversight of CROs, investigator sites, ensure collection, compliance of all essential regulatory documents for submissions to FDA and other international regulatory bodies. Plan and conduct investigator meetings, monitoring visits, and other ADHOC task. Travel/relocate to various unanticipated locations throughout the U.S. for long and short term assignments at client sites. Requires Master’s degree or foreign equivalent in Computer Science, Engineering (any), Business Administration, Life Sciences, or related. Offered salary $87,000 P/Y. Mail resume with cover letter to Unicon Pharma Inc., 51 Cragwood Rd., Suite 101, South Plainfield, NJ 07080; Job 20UPI37; EOE",
          },
          {
            title: "Sr. Research Analyst",
            description:
              "Unicon Pharma Inc. has job openings for Sr. Research Analyst. Jobs located in South Plainfield, NJ and various unanticipated locations throughout the U.S. Execute analytical testing of samples in support of GMP process development and characterization efforts. Execute method development, qualification, and validation activities on a variety of analytical and molecular biology techniques. Author, review and update technical documents and ensure compliance to compendial requirements for applicable methodologies. Travel/relocate to various unanticipated locations throughout the U.S. for long and short term assignments at client sites. Requires Master’s degree or foreign equivalent in Business Administration, Life Sciences, Pharmaceutical Sciences, Chemistry, or related. Offered salary $95,000 P/Y. Mail resume with cover letter to Unicon Pharma Inc., 51 Cragwood Road, Suite 101, South Plainfield, NJ 07080; Job 20UPI41; EOE",
          },
          {
            title: "Sr. Research Analyst",
            description:    "Unicon Pharma Inc. has job openings for Validation Analyst. Jobs located in South Plainfield, NJ and various unanticipated locations throughout the U.S. Analyze validation test data to determine whether systems or processes have met validation criteria and to identify root causes of problems for various pharma and other facilities. Prepare validation and performance qualification protocols for new or modified processes, systems, or equipment for various production types. Coordinate the implementation or scheduling of validation testing with affected departments and personnel. Create, populate, and maintain databases for tracking validation activities, test results, and validate systems. Travel/relocate to various unanticipated locations throughout the U.S. for long and short term assignments at client sites. Requires Master’s degree or foreign equivalent in Computer Science, Regulatory Affairs, Pharmaceutical Sciences, Pharmacy, Chemistry, Biochemistry, Biology, or a related life sciences discipline. Offered salary $91,000 P/Y. Mail resume with cover letter to Unicon Pharma Inc., 51 Cragwood Road, Suite 101, South Plainfield, NJ 07080; Job 21UPI42; EOE",
          },

          {
            title: "Validation Engineer",
            description: "Unicon Pharma Inc. has job openings for Validation Engineers. Jobs located in South Plainfield, NJ, and various unanticipated locations throughout the U.S. Analyze validation test data to determine whether systems or processes have met validation criteria and to identify root causes of problems for various pharma and other facilities. Prepare validation and performance qualification protocols for new or modified processes, systems, or equipment for various production types. Coordinate the implementation or scheduling of validation testing with affected departments and personnel. Create, populate, and maintain databases for tracking validation activities, test results, and validate systems. Travel/relocate to various unanticipated locations throughout the U.S. for long and short-term assignments at client sites. Requires Master’s degree or foreign equivalent in Regulatory Affairs, Pharmaceutical Sciences, Management, Pharmacy, Chemistry, Biochemistry, Engineering (any), Biology, or a related life sciences discipline. Offered salary $112,000 P/Y. Mail resume with cover letter to Unicon Pharma Inc., 51 Cragwood Rd., Suite 101, South Plainfield, NJ 07080; Job 22UPI29; EOE",
          },

          {
            title: "R & D Engineer",
            description: "Unicon Pharma Inc. has job openings for R & D Engineer. Jobs located in South Plainfield, NJ and various unanticipated locations throughout the U.S. Estimate production costs, cost saving methods, and the effects of product design changes on expenditures for management review, action, and control. Plan and establish sequence of operations to fabricate and assemble parts or products and to promote efficient utilization. Confer with clients, vendors, staff, and management personnel regarding purchases, product and production specifications, manufacturing capabilities, or project status. Communicate with management and user personnel to develop production and design standards. Travel/relocate to various unanticipated locations throughout the U.S. for long and short term assignments at client sites. Requires Bachelor's degree or foreign equivalent in Computer Science, Engineering (any), or related. Will also accept 2 years of experience in the job offered or as a Product Development Professional in lieu of Bachelor's degree. Offered salary $86,000 P/Y. Mail resume with cover letter to Unicon Pharma Inc., 51 Cragwood Road, Suite 101, South Plainfield, NJ 07080; Job 21UPI45; EOE",
          },
        ]}
      />

      <section className="mt60">
        <button className="btnTheme bgGreen mr12 fMedium btnMob" onClick={()=>AlertModal.show(<LookingForTalent/>,'Looking for talent?',()=>{},'xl')}>
        Apply Now
        </button>
      </section>
        </Container>
      </section>
      <Counter className="breadCrumb"/>
    </>
  );
};

export default UniconPharmaCareers;
