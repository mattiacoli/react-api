import { useState, useEffect } from 'react'
// Supports weights 200-900
import '@fontsource-variable/nunito';
import Header from './components/Header';


// set api endpoint
const api_blog = "http://localhost:3000/posts"
const base_url = "http://localhost:3000"


function App() {
  // create useState for the array of post
  const [posts, setPosts] = useState([])

  // add use effect for Ajax call at the load of the page
  useEffect(() => {
    fetchData(api_blog)
  }, [])

  /**
   * Fetches data from the specified URL and updates the state with the retrieved data.
   *
   * @param {string} url - The URL to fetch data from.
   * @returns {void}
   */
  function fetchData(url) {

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setPosts(data)
      })
  }

  /**
   * Deletes a post by its slug and updates the state to remove the deleted post.
   *
   * @param {string} slug - The unique identifier for the post to be deleted.
   * @returns {void} This function does not return a value.
   *
   * @example
   * deletePost('example-slug');
   *
   * @throws Will log an error to the console if the fetch request fails.
   */
  function deletePost(slug) {
    fetch('http://localhost:3000/posts/' + slug, { method: 'DELETE' })
      .then(res => {
        fetchData(api_blog)
      })
      .catch(error => console.error('Error:', error));
  }


  // markup
  return (
    <>

      {/* Header */}
      <Header />

      {/* Main */}
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

export default App
