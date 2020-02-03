import React, { PropTypes } from 'react'

const Todo = ({ onClick, removeOnClick, completed, text }) => (
<li
onClick={onClick}
style={{
  textDecoration: completed ? 'line-through' : 'none'
}}
>
{text} <a onClick={removeOnClick}>[X remove]</a>
</li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  removeOnClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
