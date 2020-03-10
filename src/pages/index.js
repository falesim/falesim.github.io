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
          <div style={{ display: 'flex' }}>
            <div className='jumbotron gradient' style={{ width: '44%' }}>
              <a
                css={css`
                  color: #000;
                  &:hover {
                    color: #777;
                  }
                `}
                href='https://www.panofuture.com/'
              >
                <h2>CASE1: 360 VR</h2>
              </a>
            </div>
            <div style={{ width: '12%' }} />
            <div className='jumbotron gradient' style={{ width: '44%' }}>
              <a
                css={css`
                  color: #000;
                  &:hover {
                    color: #777;
                  }
                `}
                href='http://prcmind.com/'
              >
                <h2>CASE 2: TIMP</h2>
              </a>
            </div>
          </div>
          <footer
            style={{
              width: '100%',
              textAlign: 'center',
              color: '#fff',
              maring: '80px',
              padding: '70px',
            }}
          >
            © falesim
          </footer>
        </div>
      )
    }}
  />
)

export default IndexPage
