import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import client from "../client";
import BlockContent from "@sanity/block-content-to-react";

export default function Project() {
  const [Post, setPost] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == $slug] {
        title,
        body,
        publishedAt,
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
    <section className='mt-8 px-14 text-white'>
      <div className=''>
        <Link to='/' className='font-neue'>
          BACK
        </Link>
      </div>
      <div>
        {Post.mainImage && Post.mainImage.asset && (
          <img src={Post.mainImage.asset.url} alt={Post.title}></img>
        )}

        <h2>{Post.title}</h2>

        <BlockContent
          blocks={Post.body}
          projectId='rse6sjz7'
          dataset='production'
        />
      </div>
    </section>
  );
}
