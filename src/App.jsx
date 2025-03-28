import { useState, useEffect } from 'react'
// Supports weights 200-900
import '@fontsource-variable/nunito';

const api_blog = "http://localhost:3000"
const post_endpoint = "/posts"




function App() {

  const [posts, setPosts] = useState([])

  function fetchData(url) {

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })

  }




  return (
    <>
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

      <main>
        <section>
          <div className="container">
            <table className="table table-striped table-inverse table-responsive">
              <thead className="thead-inverse">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/*                 <tr>
                  <td scope="row"></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td scope="row"></td>
                  <td></td>
                  <td></td>
                </tr> */}
              </tbody>
            </table>

          </div>
        </section>
      </main>

    </>
  )
}

export default App
