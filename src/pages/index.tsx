import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../layouts/Default";
import { PageMainContainer } from "../compontens/containers/PageMain/PageMain";



const IndexPage: React.FC<PageProps> = () => {
  
  return (
    <Layout>
      <PageMainContainer/>
    </Layout>
  )
}

export default IndexPage;
