import React from 'react'
import { CertificateType } from '../../types'
import { useState ,useEffect } from 'react'
import { client } from '../../lib/client'
import { groq } from 'next-sanity'
import Certificate from '../../components/Certificate'

type Data = {
    certificate : CertificateType[];
}


const CertificateData = async () => {
    const query = groq`*[_type == 'certificates']`;
    const certificate:CertificateType[] = await client.fetch(query);

    

  return (
    <div>
        <Certificate certificate={certificate}/>
    </div>
  )
}

export default CertificateData