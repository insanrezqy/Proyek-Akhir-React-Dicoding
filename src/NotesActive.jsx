import DeleteButton from './component/DeleteButton';
import ArchivedButton from './component/ArchivedButton';

// eslint-disable-next-line react/prop-types
function NotesActive({id, title, body, archived, createdAt,onDelete,onArchived}){
    if(archived == false){
        return(
            <div key={id} className='note-item-active'>
                <table className='table-active'>
                    <tbody>
                        <tr>
                            <td>
                                <label>{title}</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>{body}</p>
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
                                <ArchivedButton id={id} onArchived={onArchived} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }        
}

export default NotesActive