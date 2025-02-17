import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";
import * as MdxComponents from "../../components/common/MdxComponent";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

const NewsPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image.childImageSharp);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="max-w-3xl mx-auto text-neutral-200 text-base/7">
        <h1 className="font-serif text-2xl md:text-4xl">{data.mdx.frontmatter.title}</h1>
        <figure className="mt-10">
          <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} className="object-cover rounded-sm aspect-video" />
        </figure>
        <MDXProvider components={MdxComponents}>{children}</MDXProvider>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_image_alt
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default NewsPost;
