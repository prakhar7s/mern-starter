import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v1";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const newPostId = uuid();
  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await fetch("/post");
      const respPosts = await resp.json();
      setPosts(respPosts);
    };

    fetchPosts();
  }, []);
  return (
    <div className="container">
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="card col-md-3 m-2">
            <div className="card-title text-danger p-1">{post.name}</div>
          </div>
        ))}
      </div>

      <Link className="btn btn-primary" to={`/new/${newPostId}`}>
        New
      </Link>
    </div>
  );
};

export default Home;
