'use client'

import { useSearchParams } from 'next/navigation'
import React, { use } from 'react'



const ProjectHomePage = ({params}:{params:{id:string}}) => {
    const router = useSearchParams();
    
    const x = router.get('id');
  return (
    <div>
      hy this no one
      {params.id}
    </div> 
  )
}

export default ProjectHomePage