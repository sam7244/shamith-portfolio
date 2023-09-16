import React from "react";
import {  WorksType } from "../../types";
import { client } from "../../lib/client";
import { groq } from "next-sanity";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";

type Data = {
  works: WorksType[];
};

async function WorksData({}) {
  const query = groq`
*[_type == "works"]
`;
  const works: WorksType[] = await client.fetch(query);

  return (
    <div>
      <Projects works={works} />
    </div>
  );
}

export default WorksData;
