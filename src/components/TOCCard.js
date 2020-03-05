import React from 'react'
import Link from 'gatsby-link'

import './TOCCard.css'

const LessonCard = ({ content, title }) => (
  <div className='main-card'>
    <h1 className='lesson-title gradient'>{title}</h1>
    <div className='lesson-content'>
      <ul>
        {content.map((lesson) => (
          <li
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
            key={lesson.node.frontmatter.path}
          >
            <Link to={lesson.node.frontmatter.path}>
              {lesson.node.frontmatter.title}
            </Link>
            <span
              style={{
                color: '#555',
              }}
            >
              {lesson.node.frontmatter.date}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default LessonCard
