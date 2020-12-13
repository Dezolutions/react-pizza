import React from 'react'

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  
  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : 0} onClick={() => onClickCategory(null)}>Все</li>
        {items && items.map((name, index) => (
          <li
            onClick={() => onClickCategory(index)}
            className={activeCategory === index ? 'active' : 0}
            key={name}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
})

export default Categories
