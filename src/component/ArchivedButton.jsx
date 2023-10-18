
// eslint-disable-next-line react/prop-types
function ArchivedButton({ id, onArchived }) {
  return <button className='button_archived' onClick={() => onArchived(id)}>Arsipkan</button>
}
 
export default ArchivedButton;