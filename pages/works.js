import { DefaultPageBanner } from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import { client } from "../utils/client";
import dynamic from "next/dynamic";
const ItemIsotope = dynamic(() => import("../src/components/ItemIsotope"), {
  ssr: false,
});

const Works = ({LogoWork,emailersWork,packagingWork,collegeWork,socialMediaWork,projectsWork,videosWork,publishingWork}) => {
  console.log(videosWork)
  const typingAnimation = [
    "<span class='typed-bread'><a href='#'>Home</a> / Works</span>",
  ];
  return (
    <Layout>
      <DefaultPageBanner pageName={"works"} typingData={typingAnimation} />
      <div className="section works" id="next_section">
        <div className="content">
          <ItemIsotope LogoWork={LogoWork} videosWork={videosWork} publishingWork={publishingWork} projectsWork={projectsWork} socialMediaWork={socialMediaWork} collegeWork={collegeWork} packagingWork={packagingWork} emailersWork={emailersWork} />
          <div className="clear" />
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps= async () => {
  const query = '*[_type == "logo"] ';
  const LogoWork = await client.fetch(query);
  const emailerQuery = '*[_type == "emailers"] | order(_createdAt desc)';
  const emailersWork = await client.fetch(emailerQuery);
  const packagingQuery = '*[_type == "packaging"] ';
  const packagingWork = await client.fetch(packagingQuery);
  const collegeQuery = '*[_type == "collegeWork"] ';
  const collegeWork = await client.fetch(collegeQuery);
   const publishingQuery = '*[_type == "publishing"] ';
  const publishingWork = await client.fetch(publishingQuery);
  const socialMediaQuery = '*[_type == "socialMedia"] | order(createdAt desc, _updatedAt desc)  ';
  const socialMediaWork = await client.fetch(socialMediaQuery);
  const projectsQuery = '*[_type == "projects"] ';
  const projectsWork = await client.fetch(projectsQuery);
   const videosQuery = `*[_type == "videos"]{
    videoThumbnail,
     video{
        asset->{
          _id,
          url
        }
      },
  } `;
  const videosWork = await client.fetch(videosQuery);
  return{
    props:{LogoWork,emailersWork,packagingWork,collegeWork,socialMediaWork,projectsWork,videosWork,publishingWork}
  }
}

export default Works;
