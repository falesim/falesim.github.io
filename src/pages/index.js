/** @jsx jsx */
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { jsx, css } from '@emotion/core'

import './index.css'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query HomepageTOC {
        site {
          siteMetadata {
            title
            subtitle
            description
            keywords
          }
        }
      }
    `}
    render={(props) => {
      const { title, subtitle } = props.site.siteMetadata
      return (
        <div className='index'>
          <div className='jumbotron gradient'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </div>
          <div className='jumbotron gradient'>
            <a
              css={css`
                color: #000;
                &:hover {
                  color: #777;
                }
              `}
              href='https://falesim.com/learning-center'
            >
              <h2>Learning Center</h2>
            </a>
          </div>
        </div>
      )
    }}
  />
)

export default IndexPage
