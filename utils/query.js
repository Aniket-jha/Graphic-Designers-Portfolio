export const personalInfoQuery = () => {
  const query = `*[_type == "personalInfo"] | order(_createdAt desc) {
    _id,
    name,
   
    
  }`;

  return query;
};