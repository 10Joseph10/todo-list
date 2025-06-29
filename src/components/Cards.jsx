const Card = ({ text,id, onDelete }) => {
  return (
    <>
      <div className='card' key={id}>
        <p>
          {text}
        </p>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </>
  )
}
export default Card