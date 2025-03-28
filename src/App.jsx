import { useState, useEffect } from 'react'
// Supports weights 200-900
import '@fontsource-variable/nunito';


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

  // markup
  return (
    <>

      {/* Header */}
      <header>
        <nav className="navbar bg-dark text-white">
          <div className="container">
            <div className="logo">My<b>Blog</b></div>

            <ul className="nav">
              <li className="nav-item">
                <a href="" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

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
                      <button type="button" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button>
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
