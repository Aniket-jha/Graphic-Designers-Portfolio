import About from "../src/components/About";
import Clients from "../src/components/Clients";
import CustomText from "../src/components/CustomText";
import Interests from "../src/components/Interests";
import { DefaultPageBanner } from "../src/components/PageBanner";
import Pricing from "../src/components/Pricing";
import ResumeSection from "../src/components/ResumeSection";
import Service from "../src/components/Service";

import {
  CodingSkills,
  DesignSkills,
  KnowledgeSkills,
  LanguagesSkills,
} from "../src/components/Skills";
import Team from "../src/components/Team";
import Testimonials from "../src/components/Testimonials";
import Layout from "../src/layout/Layout";
import { personalInfoQuery } from "../utils/query";
import { client } from "../utils/client";
import ContactSection from "../src/components/ContactSection";
const Resume = ({personalInfo}) => {
  console.log(personalInfo[0])
  const typingAnimation = [
    `<span class="typed-bread"> <a href="#">Home</a>  / Resume </span>`,
  ];
  return (
    <Layout>
      {/* Section Started */}
      <DefaultPageBanner pageName={"Resume"} typingData={typingAnimation} />
      {/* Section About */}
      <About personalInfo={personalInfo[0]} />
      {/* Section Service */}

      {/* Section Pricing */}
      {/* Section Resume */}
      <ResumeSection />
      {/* Section Design Skills */}
     
      {/* Section Coding Skills */}
      <CodingSkills />
      {/* Section Knowledge Skills */}
      {/* Section Interests */}
      <Interests />
       <LanguagesSkills/>
       <ContactSection/>
      {/* Section Team */}
      {/* Section Testimonials */}

      {/* Section Clients */}

      {/* Section Custom Text */}
    
    </Layout>
  );
};


export const getServerSideProps= async () => {
  const query = `*[_type == "personalInfo"]{
    _id,
    name,
    email,
    aboutContent,
    contactNumber,
    profileImage,
     resume{
        asset->{
          _id,
          url
        }
      },
  }`
  const personalInfo = await client.fetch(query);

  return{
    props:{personalInfo}
  }
}

export default Resume;
