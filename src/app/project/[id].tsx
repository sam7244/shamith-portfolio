import { useRouter } from 'next/router'
import React from 'react'

const ProjectHomePage = () => {
    const router = useRouter();
    const id = router.query.value;
  return (
    <div>

    </div> 
  )
}

export default ProjectHomePage