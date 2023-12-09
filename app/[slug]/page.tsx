import RelationsChart from '@/components/Flow/RelationsChart'
import Flow from '@/components/Flow/ReactFlowExample'
import { Button } from '@/components/ui/button'
import React, { useCallback, useRef, useState } from 'react'


const page = () => {

  return (
    <div className=' w-screen h-[calc(100vh-4rem)]'>
        
          <RelationsChart/>
          {/* <Flow/> */}
           
       
    </div>
  )
}

export default page