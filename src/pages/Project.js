import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
import Service from "../components/Service";
import Links from "../components/Links";

export default function Project() {
  const [Post, setPost] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == $slug] {
        title,
        body,
        service,
        started,
        completed,
        githubRepo,
        liveDemo,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`,
        { slug }
      )
      .then((data) => setPost(data[0]))
      .catch((err) => console.error(err));
  }, [slug]);

  return (
    <section className='mt-8 px-4 text-white md:px-14 lg:px-20'>
      <button onClick={() => navigate(-1)} className='font-neue'>
        BACK
      </button>

      <div>
        <h2 className='mt-20 font-neue text-4xl uppercase md:text-5xl'>
          {Post.title}
        </h2>
        <Service
          service={Post.service}
          started={Post.started}
          completed={Post.completed}
        />

        <BlockContent
          blocks={Post.body}
          projectId='rse6sjz7'
          dataset='production'
          className='mt-8 leading-loose text-secondary'
        />

        <Links githubRepo={Post.githubRepo} liveDemo={Post.liveDemo} />

        <div>
          {Post.mainImage && Post.mainImage.asset && (
            <img
              className='mt-10 mb-6 h-full w-full object-cover'
              src={Post.mainImage.asset.url}
              alt={Post.title}
            ></img>
          )}
        </div>
      </div>
    </section>
  );
}
