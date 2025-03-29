import { useState } from "react";

export default function Main({ base_url, posts, deletePost, fetchData, api_blog }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [edit, setEdit] = useState(false)

  function handleEdit(post) {
    setEdit(true);
    setSelectedPost(post);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const updatedPost = {
      title: selectedPost.title,
      content: selectedPost.content,
      image: selectedPost.image,
    };

    fetch(`${api_blog}/${selectedPost.slug}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    })
      .then(() => {
        console.log(updatedPost);
        setEdit(false);
        setSelectedPost(null);
        fetchData(api_blog); // Refresh the data on the page
      })

      .catch(error => {
        console.error('Error updating post:', error);
      });
  }

  return (
    <>
      <main>
        <section>
          <div className="container">
            {/* table structure */}
            <table className="table table-striped table-inverse table-responsive mt-4">
              <thead className="thead-inverse">
                <tr>
                  <th>ID</th>
                  <th className="text-center">Title</th>
                  <th>Thumb</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              {/* table content */}
              <tbody>
                {posts.map(post => (
                  <tr key={post.id}>
                    <td scope="row">{post.id}</td>
                    <td>{post.title}</td>
                    <td><img src={base_url + post.image} alt={post.title} /></td>
                    <td className="text-center d-flex justify-content-center align-item-center gap-1">
                      <button type='button' className="btn btn-dark" onClick={() => handleEdit(post)}><i className="fa fa-pencil" aria-hidden='true'></i></button>
                      <button type="button" className="btn btn-danger" onClick={() => deletePost(post.slug)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {edit && selectedPost ? (
              <form className="mt-4 border rounded p-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    aria-describedby="TitleHelp"
                    value={selectedPost.title}
                    onChange={(e) => setSelectedPost({ ...selectedPost, title: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">Content</label>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    value={selectedPost.content}
                    onChange={(e) => setSelectedPost({ ...selectedPost, content: e.target.value })}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="exampleCheck1">img url</label>
                  <input
                    type="text"
                    className="form-control"
                    id="image"
                    aria-describedby="TitleHelp"
                    value={selectedPost.image}
                    onChange={(e) => setSelectedPost({ ...selectedPost, image: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            ) : ''}

          </div>
        </section>
      </main>
    </>
  );
}