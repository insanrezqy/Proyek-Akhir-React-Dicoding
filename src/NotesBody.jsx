// eslint-disable-next-line react/prop-types
function NotesBody({chars_left, title, body, onTitleChange, onBodyChange, onClickButtonSubmit}){
    return(
        <div className='FORM_NOTES'>
            <table className='TABLE_NOTES'>
                <tbody>
                    <tr>
                        <td>
                            <div className='sisa_karakter'>Sisa Karakter yang diinput : {chars_left}</div>
                            <input type='text' id='title' value={title} onChange={onTitleChange} maxLength={50} placeholder="Title"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <textarea id='catatan' value={body} onChange={onBodyChange} placeholder="Catatan"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type='submit' id='submit' onClick={onClickButtonSubmit}>Submit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default NotesBody