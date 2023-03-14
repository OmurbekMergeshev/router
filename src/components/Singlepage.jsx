import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

const Singlepage = () => {
    const {id} = useParams();
    const navigate = useNavigate()
    const [post, setPosts] = useState()

    const goBack = () => navigate(-1)
    const gohome = () => navigate('/', {replace: true})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(res => res.json())
          .then(data => setPosts(data))
    }, [id])
  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <button onClick={gohome}>Go home</button>

        {post && (
            <>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <Link to={`/posts/${id}/edit`}>Edit this post</Link>
            </>
        )}
    </div>
  )
}

export  {Singlepage}