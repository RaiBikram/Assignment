


import ReportCard, { studies } from "@/components/resources/study-report/ReportCard"
import StudiesReportFirst from "@/components/resources/study-report/studeyReport"

import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div>
        <StudiesReportFirst/>
        <ReportCard studies={studies} heading="Studies"/>
        <ReportCard studies={studies} heading="Annual Reports"/>
    </div>
  )
}

export default page