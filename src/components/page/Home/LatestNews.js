import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Container from "../../common/Container";

const LatestNews = () => {
  const data = useStaticQuery(graphql`
    query LatestNewsQuery {
      allMdx(filter: { frontmatter: { published: { eq: true } } }, sort: { frontmatter: { date: DESC } }, limit: 4) {
        nodes {
          frontmatter {
            title
            short
            slug
            date(formatString: "MMMM DD, YYYY")
            published
          }
          id
          excerpt
        }
      }
    }
  `);

  return (
    <section id="latest" aria-labelledby="faqs-title" className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-8 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto self-start">
            <h2 className="text-4xl font-serif font-medium tracking-tight text-stone-100">
              Latest Developments & Observations of <br />
              Asteroid 2024 YR4.
            </h2>
            <p className="mt-6 text-lg text-stone-300">
              Stay informed with breaking announcements, new data releases, and expert insights from NASA, ESA, and astronomers around the globe. Explore all the latest findings shaping our
              understanding of Asteroid 2024 YR4.
            </p>
            <StaticImage alt="" src="../../../images/latest-news.png" className="mt-16" />
          </div>
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <h3 className="sr-only">Blog Posts</h3>
            <div className="mx-auto w-full max-w-2xl pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
              <div className="-my-12 divide-y divide-stone-100/30">
                {data.allMdx.nodes.map((node) => (
                  <article key={node.id} className="py-6">
                    <div className="group relative max-w-xl">
                      <time dateTime={node.frontmatter.date} className="block text-sm/6 text-stone-400">
                        {node.frontmatter.date}
                      </time>
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
                  </article>
                ))}
              </div>
            </div>
            <div className="mt-8 flex border-t border-gun-metal-3/60 pt-8">
              <Link to="/news" className="text-sm/6 font-semibold text-gun-metal-2 hover:text-gun-metal-4">
                View all News on Asteroid 2024 YR4 <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LatestNews;
