import DeleteButton from './component/DeleteButton';
import ActiveButton from './component/ActiveButton';

// eslint-disable-next-line react/prop-types
function NotesArchived({id, title, body, archived, createdAt,onDelete, onActive}){
    if (archived == true) {
        return(
            <div key={id} className='note-item-archived'>
                <table className='table-archived'>
                    <tbody>
                        <tr>
                            <td>
                                <label>{title}</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>{body}</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className='label-createdAt'>{createdAt}</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <DeleteButton id={id} onDelete={onDelete} />
                            <ActiveButton id={id} onActive={onActive} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NotesArchived