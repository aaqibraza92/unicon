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
    
         

          // {
          //   title: "Drug Safety Specialist",
          //   description: "Unicon Pharma Inc. has job openings for Validation Engineer. Jobs located in South Plainfield, NJ and various unanticipated locations throughout the U.S. Analyze validation test data to determine whether systems or processes have met validation criteria and to identify root causes of problems for various pharma and other facilities. Prepare validation and performance qualification protocols for new or modified processes, systems, or equipment for various production types. Coordinate the implementation or scheduling of validation testing with affected departments and personnel. Create, populate, and maintain databases for tracking validation activities, test results, and validate systems. Travel/relocate to various unanticipated locations throughout the U.S. for long and short term assignments at client sites. Requires Master’s degree or foreign equivalent in Regulatory Affairs, Pharmaceutical Sciences, Management, Pharmacy, Chemistry, Biochemistry, Engineering (any), Biology, or a related life sciences discipline. Offered salary $106,000 P/Y. Email resume with cover letter to hr@uniconpharma.com; Job 23UPI04; EOE",
          // },
          // {
          //   title: "Sr. Pharmacovigilance Scientist",
          //   description: "Unicon Pharma, Inc. has job openings for Sr. Pharmacovigilance Scientist. Jobs located in South Plainfield, NJ and various unanticipated locations throughout the U.S. Aggregate reports such as Developmental Safety Update Reports (DSURs), Periodic Benefit Risk Evaluation Reports (PBRERs), and Risk Management Plans (RMPs). Prepare, review, and approve Safety Management Plans (SMPs). Perform triage, evaluation, medical coding, and review of AEs/SAEs from investigational and post-marketing sources. Report AEs/SAEs and SUSARs to regulatory authorities around the globe. Work with various tools such as ARGUS, ARISg, MedDRA, and WHO-DD. Travel/relocate to various unanticipated locations throughout the U.S. for long and short term assignments at client sites. Requires Bachelor’s degree or foreign equivalent in Pharmacy, Medicine, Pharmacology, Biology, Chemistry, Life Sciences, or a related field and 5 years of experience in the job offered or as a Clinical Safety/Drug Safety/Pharmacovigilance Professional. Will also accept Master’s degree or foreign equivalent in Pharmacy, Medicine, Pharmacology, Biology, Chemistry, Life Sciences, or a related field and 3 years of experience in the job offered or as a Clinical Safety/Drug Safety/Pharmacovigilance Professional. Offered salary $114,338 P/Y. Email resume with cover letter to hr@uniconpharma.com; Job 23UPI07; EOE",
          // }
          {
            title: "Drug Safety Specialist",
            description: "Unicon Pharma, Inc. has job openings for Drug Safety Specialist. Jobs located in South Plainfield, NJ and various unanticipated locations throughout the U.S.  Execute strategic plans within multiple projects and prioritize in accordance with strategy. Analyze clinical trial data, write reports, and determine pharmaceutical drugs’ safety. Identify issues and contribute to remediation plans. Implement and generate data reports and listings. Travel/relocate to various unanticipated locations throughout the U.S. for long and short term assignments at client sites. Requires Master’s degree or foreign equivalent in Pharmacy, Chemistry, Nursing, Life Sciences, Healthcare, Healthcare Administration, Business Administration, Management, or related. Travel and work at client sites as assigned. Email resume with cover letter to hr@uniconpharma.com; Job 23UPI08; EOE            ",
          }

     
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
