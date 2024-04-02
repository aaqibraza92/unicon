import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./style.css";
import { Container } from "reactstrap";
import { downAngleSvg, upAngleSvg } from "../../assets/svg/Svg";

const AccordionUI = (props) => {
  const [active,setActive]=useState(0);
  const data = props?.data;
  return (
    <section>
      <Container>
        <Accordion >
          {data.length > 0 &&
            data?.map((e, i) => {
              return (
                <AccordionItem allowZeroExpanded ={true} className={`accordionStyle mb30 ${active===i ? 'activeState' : 'nonActiveState'}`} key={i} onClick={()=>setActive(i)}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="d-flex justify-content-between w-100 align-items-center">
                      <div>
                      <span className="fs18 fw700 mr18 accImg"><img src={require('../../assets/img/bag.svg').default} alt="" /></span>
                        <span className="fs20 fMedium fw700 colorBlue accTitle">{e?.title}</span>
                        
                      </div>
                      <span className="plusIcon d-none iconFs">{upAngleSvg} </span>
                        <span className="minusIcon d-none iconFs">{downAngleSvg}</span>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                  <p className="colorGrey text-start lh25 fs16 pt-3 accPara">
                  {e?.description}
                  </p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
        </Accordion>
      </Container>
    </section>
  );
};

export default AccordionUI;
