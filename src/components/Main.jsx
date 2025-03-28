export default function Main({ base_url, posts, deletePost }) {
  return (
    <>
      <main>
        <section>
          <div className="container">
            {/* table structure */}
            <table className="table table-striped table-inverse table-responsive">
              <thead className="thead-inverse">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Thumb</th>
                  <th>Actions</th>
                </tr>
              </thead>

              {/* table content */}
              <tbody>
                {posts.map(post => (
                  <tr key={post.id}>
                    <td scope="row">{post.id}</td>
                    <td>{post.title}</td>
                    <td><img src={base_url + post.image} alt={post.title} /></td>
                    <td>
                      <button type="button" className="btn btn-danger" onClick={() => deletePost(post.slug)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        </section>
      </main>
    </>
  )
}