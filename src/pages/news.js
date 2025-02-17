import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Container from "../components/common/Container";

const NewsPage = ({ data }) => {
  return (
    <Layout pageTitle="Mews from Asteroid 2024 YR4">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-pretty text-stone-100 sm:text-5xl">
            Latest Developments & Observations <br />
            of Asteroid 2024 YR4.
          </h1>
          <p className="mt-2 text-lg/8 text-stone-200">
            Stay informed with breaking announcements, new data releases, and expert insights from NASA, ESA, and astronomers around the globe. Explore all the latest findings shaping our
            understanding of Asteroid 2024 YR4.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20 ">
            {data.allMdx.nodes.map((node) => {
              const image = getImage(node.frontmatter.hero_image.childImageSharp);

              return (
                <article key={node.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                  <div className="relative aspect-video sm:aspect-2/1 lg:aspect-square lg:w-64 lg:shrink-0">
                    <Link to={`/news${node.frontmatter.slug}`}>
                      <GatsbyImage image={image} alt={node.frontmatter.title} className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover" />
                    </Link>
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={node.frontmatter.date} className="text-base/6 text-stone-400">
                        {node.frontmatter.date}
                      </time>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-xl/6 font-serif font-semibold text-stone-100 group-hover:text-gun-metal-4">
                        <Link to={`/news${node.frontmatter.slug}`}>
                          <span className="absolute inset-0" />
                          {node.frontmatter.title}
                        </Link>
                      </h3>
                      <p className="mt-4 text-base/6 text-stone-200">{node.frontmatter.short}</p>
                      <Link to={`/news${node.frontmatter.slug}`} className="relative z-10 mt-4 flex items-center text-sm font-medium text-gun-metal-2 hover:text-gun-metal-4">
                        Read article
                        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                          <path d="M6.75 5.75L9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          short
          slug
          date(formatString: "MMMM DD, YYYY")
          published
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default NewsPage;
