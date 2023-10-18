
// eslint-disable-next-line react/prop-types
function DeleteButton({ id, onDelete }) {
  return <button className='button_delete' onClick={() => onDelete(id)}>Delete</button>
}
 
export default DeleteButton;