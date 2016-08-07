import React from 'react'
import FilterLink from './filter-link'

const Footer = () => (
  <div>
    {'Show'}
    <FilterLink
      filter="all"
    >
      {'All'}
    </FilterLink>
    {' '}
    <FilterLink
      filter="active"
    >
      {'Active'}
    </FilterLink>
    {' '}
    <FilterLink
      filter="completed"
    >
      {'Completed'}
    </FilterLink>
  </div>
)

export default Footer
