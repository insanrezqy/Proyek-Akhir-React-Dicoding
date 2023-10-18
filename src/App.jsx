import React from 'react';
import Moment from 'moment';
import Notesbody from './NotesBody';
import NoteList from './NotesList';
import { getInitialData } from './utils/Data';

class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            notes : getInitialData(),
            id : '',
            title : '',
            body : '',
            archived : '',
            createdAt : '',
            charCount:'',
            maxChar:50,
            chars_left:50,
            search: ''
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onClickButtonSubmitEventHandler = this.onClickButtonSubmitEventHandler.bind(this);
        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onArchivedEventHandler = this.onArchivedEventHandler.bind(this);
        this.onActiveEventHandler = this.onActiveEventHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onSearchNotesHandler = this.onSearchNotesHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const charCount = event.target.value.length;
        const maxChar = this.state.maxChar;
        const charLength = maxChar - charCount;
    
        this.setState(() => {
          return {
            title: event.target.value,     
            chars_left: charLength
          };
        });
    }
    
    onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value
          };
        });
    }
    
    onClickButtonSubmitEventHandler(event){
        event.preventDefault();

    }

    onAddNotesHandler() {
        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: +new Date(),
                title : this.state.title,
                body : this.state.body,
                archived: false,
                createdAt : Moment().format('DD-MM-yyyy HH:mm:ss'),
              }
            ]
          }
        });
        this.setState({
          title : '',
          body : ''
        });
      }

    onDeleteEventHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchivedEventHandler(id) {
        this.setState((prevState) => {
            return{
              notes: prevState.notes.map((note) => note.id == id ? {...note, archived: true} : note),
            }
        })
    }

    onActiveEventHandler(id) {
        this.setState((prevState) => {
            return{
              notes: prevState.notes.map((note) => note.id === id ? {...note, archived: false} : note),
            }
        })
    }

    onSearchNotesHandler(event){
      this.setState(() => {
        return {
          search: event.target.value
        };
      });
    }

    render(){
        return(
            <div>
                <h1 className='TITLE'>Personal Notes</h1>
                <Notesbody chars_left={this.state.chars_left} title={this.state.title} body={this.state.body} onTitleChange={this.onTitleChangeEventHandler} onBodyChange={this.onBodyChangeEventHandler} onClickButtonSubmit={this.onAddNotesHandler} />
                <NoteList notes={this.state.notes} onDelete={this.onDeleteEventHandler} onArchived={this.onArchivedEventHandler} onActive={this.onActiveEventHandler} search={this.state.search} onSearch ={this.onSearchNotesHandler}/>
            </div>
        );
    }
}

export default App