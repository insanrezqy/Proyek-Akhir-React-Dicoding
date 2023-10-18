// eslint-disable-next-line react/prop-types
function ActiveButton({ id, onActive }) {
    return <button className='button_active' onClick={() => onActive(id)}>Aktifkan</button>
  }
   
  export default ActiveButton;