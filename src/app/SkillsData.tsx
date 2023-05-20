import React from "react";
import { SkillType } from "../../types";
import { client } from "../../lib/client";
import { groq } from "next-sanity";
import Skills from "../../components/Skills";
type Data = {
  skills: SkillType[];
};

async function SkillsData({}) {
  const query = groq`
*[_type == "skills"]
`;
  const skills: SkillType[] = await client.fetch(query);
  console.log(skills);
  return (
    <div>
      <Skills skills={skills} />
    </div>
  );
}

export default SkillsData;
