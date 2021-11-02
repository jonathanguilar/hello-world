import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../js/components/layout';
import Section from '../js/components/section/section';

/*
  Do not rename or move this file. Gatsby uses it to inject data from markdown files to create static pages. Of course, the structure in the return statement can be changed.
*/

const Template = ({ data }) => {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark;

    return (
      <Layout>
        <Section
            title={frontmatter.title}
            dangerouslySet={html}
        >
        </Section>
      </Layout>
    )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`;

export default Template;