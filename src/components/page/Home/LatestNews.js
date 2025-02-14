import React from "react";
import Container from "../../common/Container";
import { StaticImage } from "gatsby-plugin-image";

const featuredPost = {
  id: 1,
  title: "We’re incredibly proud to announce we have secured $75m in Series B",
  href: "#",
  description:
    "Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.",
  date: "Mar 16, 2020",
  datetime: "2020-03-16",
  author: {
    name: "Michael Foster",
    href: "#",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
};
const posts = [
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 10, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Lindsay Walton",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 10, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Lindsay Walton",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 10, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Lindsay Walton",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

const LatestNews = () => {
  return (
    <section id="latest" aria-labelledby="faqs-title" className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row j">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h2 className="text-4xl font-serif font-medium tracking-tight text-stone-100">
              Latest Developments & Observations of <br />
              Asteroid 2024 YR4.
            </h2>
            <p className="mt-6 text-lg text-stone-300">
              Stay informed with breaking announcements, new data releases, and expert insights from NASA, ESA, and astronomers around the globe. Explore all the latest findings shaping our
              understanding of Asteroid 2024 YR4.
            </p>

            <StaticImage alt="" src="../../../images/latest-news.png" className="mt-16 " />
          </div>
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <h3 className="sr-only">Blog Posts</h3>
            <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
              <div className="-my-12 divide-y divide-gray-900/10">
                {posts.map((post) => (
                  <article key={post.id} className="py-12">
                    <div className="group relative max-w-xl">
                      <time dateTime={post.datetime} className="block text-sm/6 text-stone-400">
                        {post.date}
                      </time>
                      <h2 className="mt-2 text-lg font-semibold text-stone-100 group-hover:text-stone-400">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h2>
                      <p className="mt-4 text-sm/6 text-stone-200">{post.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="mt-8 flex border-t border-gun-metal-3/60 pt-8">
              <a href="#" className="text-sm/6 font-semibold text-gun-metal-2 hover:text-gun-metal-4">
                View all News on Asteroid 2024 YR4 <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LatestNews;
