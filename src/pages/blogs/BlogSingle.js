import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Container } from "reactstrap";
import BreadCrumb from "../../components/BreadCrumb";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BLOG_URL, HOME_URL } from "../../helpers/apiurls";

const BlogSingle = () => {
    const id = useParams();
    const [postData, setPostData] = useState("");
    const [acfData, setacfData] = useState("");
    const [allCategory, setAllCategory] = useState("");
    const [loader, setloader] = useState(true);
    useEffect(() => {
      getAllPosts();
     
      window.scrollTo(0, 0);
    }, [id?.slug]);

    const getAllPosts = async () => {
        const options = {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        };
        await axios.get(HOME_URL+BLOG_URL + "?slug=" + id?.slug, options).then((res) => {
          if (res && res.status === 200) {
            setPostData(res?.data?.[0]);
            setacfData(res?.data?.[0]?.acf===false ? "" : res?.data?.[0]?.acf?.blog_flexible_data);
            setloader(false);
          }
        });
      };
    

    
      const dateConverter = (str) => {
        var date = new Date(str),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
      };

  return (
    <>
        <Helmet>
        <title> {postData && postData?.title?.rendered} | Unicon</title>
      </Helmet>
      <BreadCrumb
        title="About Unicon Pharma"
      />
  <Container>

  {
          loader &&   <div className="text-center mb60">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        }
      <div className="mb30">
        <p className="mb0">
          At best, Brexit has been a polarizing political decision among British
          and world citizens. At worst, it is devastating both on a personal and
          global level. While its true effects have yet to be seen, Britain's
          decision to leave the EU could spell big trouble for the country's
          economy and several other infrastructural facets. What could this mean
          for Britain's pharmaceutical industry?
        </p>
      </div>

      <div className="mb30">
        <h3 className="fs30 colorBlue fBold">
          The State of Pharmaceutical Market Authorization and Britain's
          Regulatory Processes
        </h3>
        <p>
          Britain currently has two organizations in charge of its
          pharmaceutical drug administration: the MHRA (or Medicines and
          Healthcare Products Regulatory Agency) and EMA (European Medicines
          Agency). The former is localized to just Britain, while the latter
          handles medicine for every country aligned with the EU. These
          organizations granted Britain the ability to allow certain medicines
          into the country at a much quicker rate based upon the level of
          demand. Large populations living with certain medical conditions had
          easier access to the medicines they need, thus preserving their
          health.
        </p>
        <p>
          While Britain was under the EMA's medicinal jurisdiction previously,
          since its decision to sever ties with the EU, this legal and
          regulatory measure has been cut. Britain's status as the main
          headquarters for the EMA creates a major complication for their
          regulatory affairs, especially no they've split from the EU.
        </p>
      </div>

      <div className="mb30">
        <h3 className="fs30 colorBlue fBold">A Negative Ripple Effect</h3>
        <p>
          Now that Britain is no longer affiliated with the EU but houses the
          EU-aligned EMA, the latter will have to relocate from the former.
          While this result may sound relatively small, Britain's severance with
          the EU and, consequently, the EMA generates a host of negative effects
          as far as the pharmaceutical industry is concerned. Experts predict it
          will be much more difficult for the country to obtain medicines for
          its citizens.
        </p>
        <p>
          Medicinal expenses could drastically increase for citizens, creating a
          noticeable and hard-hitting difficulty to obtain medications. The
          scientific side of pharmaceutical work will ultimately fall slack as
          the necessary funding recedes. The country will be left out of a
          majority of medical advances and could potentially lose other
          health-based partnerships it formed during its membership with the EU.
          As much as 8.2 million pounds' worth of scientific backing could go to
          waste thanks to the split. Finally, regulatory compliance procedures
          will take a hit because the country will have to endure a long wait
          for drugs to be deemed safe for release and consumption. Overall
          evidence points to Britain's entire pharmaceutical industry suffering
          thanks to the decision to cut the EU's safety net.
        </p>
      </div>

      <div className="mb30">
        <h3 className="fs30 colorBlue fBold">What Lies Ahead?</h3>
        <p>
          It will ultimately be up to those in pharmaceutical staffing to make
          things work for the better. For now, all pharmaceutical leaders can do
          is formulate a strategy regarding how to cope with Brexit's effects
          and preserve the industry as much as possible. To learn more about
          this important issue and how you can get involved, get in touch with
          us.
        </p>
      </div>

    </Container>
    </>
  
  );
};

export default BlogSingle;
