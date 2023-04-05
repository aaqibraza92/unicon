import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
const OpenIndustryJobs = () => {

  return (
    <>
   <Helmet>
    <title>Open Industry Jobs - Unicon</title>
    <script type="text/javascript" src="https://jobsapi.ceipal.com/APISource/widget.js" data-ceipal-api-key="QkZhemYyR0xwMytrd3pZTmVDUDF0Zz09" data-ceipal-career-portal-id="Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09"></script>
  </Helmet>

    <div id="example-widget-container"></div>
    </>
 
  )
}

export default OpenIndustryJobs


