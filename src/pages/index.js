import React, { useState } from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Bio from "../components/bio"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const [mail, setMail] = useState()

  let postCounter = 0


  return (
    <Layout title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`homepage`, `home`, `ghar`]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
          <span style={{opacity: '80%', marginTop: "5%", padding: 5}}>Subscribe to our newsletter to get updates and notifications.</span>         
          <form style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%'}} method="post" action="http://api.getauxin.com/register">
            <input
              type="email"
              name="email"
              id="demo-name"
              placeholder="example@example.com"
              style={{flexShrink: 1}}
              required
              />
              <input type="submit" value="Subscribe" className="button primary fit" style={{margin: '15px', flexShrink: 3}}/>
          </form>
        </header>
      )}
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
            tags
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
