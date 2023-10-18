import NotesActive from './NotesActive';
import NotesArchived from './NotesArchived';
import MessageDataEmpty from './component/MessageDataEmpty';
import SearchInput from './component/SearchInput';

// eslint-disable-next-line react/prop-types
function NoteList({notes, onDelete, onArchived, onActive, search, onSearch}){
    // eslint-disable-next-line react/prop-types
    const SearchNotes = notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
    // eslint-disable-next-line react/prop-types
    const notesactive = SearchNotes.map((note) => 
        <NotesActive key={note.id} 
            id={note.id} 
            title={note.title} 
            body={note.body} 
            archived={note.archived} 
            createdAt={note.createdAt} 
            onDelete={onDelete} 
            onArchived={onArchived}
        />
    )

    // eslint-disable-next-line react/prop-types
    const notesactive_ = SearchNotes.filter(note => note.archived == false ? notesactive : null);

    // eslint-disable-next-line react/prop-types
    const notesarchived = SearchNotes.map((note) => 
        <NotesArchived key={note.id} 
            id={note.id} 
            title={note.title} 
            body={note.body} 
            archived={note.archived} 
            createdAt={note.createdAt} 
            onDelete={onDelete} 
            onActive={onActive}
        />
    )

    // eslint-disable-next-line react/prop-types
    const notesarchived_ = SearchNotes.filter(note => note.archived == true ? notesarchived : null);

    return (
        <div className="notes-list">
            <SearchInput search={search} onSearch={onSearch}/>
            <div className="note-item">
                <h4>Catatan Aktif</h4>
                <hr></hr>
                <div className='item-active'>
                    {notesactive_.length > 0 ? notesactive : <MessageDataEmpty/>}
                </div>
                <hr></hr>
                <h4>Catatan Arsip</h4>
                <hr></hr>
                <div className='item-Archived'>                    
                    {notesarchived_.length > 0 ? notesarchived : <MessageDataEmpty/>}
                </div>
                <hr></hr>
            </div>
        </div>
    );
}
export default NoteList;