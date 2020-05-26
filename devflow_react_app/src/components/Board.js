import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import Header from './components/layout/Header';
// import Projects from './components/ToDos';
// import NewProject from './components/AddTodo';
// import Collections from './components/pages/About';
// import {uuid} from 'u
// import './App.css';


    /*
    const [OR] function   //Switches: btwn Expanded | Compressed  |  Tron Views

        toggleBoard{

        }

    */

export default class Board extends Component {
    render() {
        return (
            <React.Fragment>
               <div className="todoBox">
                   ToDo
               </div>
               <div className="doingBox">
                   Doing
               </div>
               <div className="doneBox">
                    Done
               </div>
           </React.Fragment>
       )
    }
}
/*




uidv4                                         //';    This is NOT nessesary since we'll be making a post request to the REST.api
//import axios from 'axios';
class App extends Component{
    state = {
        //    todos:[]     // Using Axios Instread of hard coding
        projects: [
            {
                id:uuid(),
                title:'Mid-Mod3 Group Project',
                completed: false
            }
            {
                id:uuid(),
                title:'Mod3 Project',
                completed: false
            },
            {
                id:uuid(),
                title:'Capstone Project',
                completed: false
            },
            {
                id:uuid(),
                title:'Job Search',
                completed: false
            }
        ]
    }
    
    
    // To request the ToDo's from the JSONplaceholder
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=7')
        .then(res => this.setState({todos: res.data}))
    }
    
    
    
    
    //Toggle markCompleted
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo=>{
            if(todo.id === id){
                todo.completed = !todo.completed   //toggle btw memory values
            }
            return todo;
            
        })})
        
    }
    
    // Delete Todo
    delTodo = (id)=>{
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then (res => this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]})); 
    }
    
    // Add Todo
    addTodo = (title) =>{
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed:false
        })
        .then(res=> this.setState({todos: [...this.state.todos, res.data] }));
        //.catchError Here ????***
    }
    // const newTodo = {
        //   id:uuid(),              //{random()},
        //   title, 
        //   completed: false
        //}
        //this.setState({todos: [...this.state.todos, newTodo] });
        //}
        
        
        render() {
            return (
                <Router>
                <div className="App">
                <div className="container">
                <Header/>
                <Route exact path="/" render={props=>(
                    <React.Fragment>
                    <AddTodo addTodo={this.addTodo}/>
                    <ToDos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                    </React.Fragment>
                    )}/>
                    <Route path="/about" components={About}/>
                    </div>
                    </div>
                    </Router>
                    );
                }
            }
            
            export default App;
            
*/    
            
            
            /////////////////////////////
            
            /*
            import React, {Component} from 'react';
            import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
            import Header from './components/layout/Header';
            import ToDos from './components/ToDos';
            import AddTodo from './components/AddTodo';
            import About from './components/pages/About';
            import './App.css';            // import {uuid} from 'uuidv4';    This is NOT nessesary since we'll be making a post request to the REST.api
            import axios from 'axios';
            class App extends Component{
                state = {
            

                    
                    todos:[]     // Using Axios Instread of hard coding
            */

                    // todos: [
                        //   {
                            //     id:uuid(),
                            //     title:'Take out Trash',
                            //     completed: false
                            //   },
                            //   {
                                //     id:uuid(),
                                //     title:'Dinner with Wife',
                                //     completed: false
                                //   },
                                //   {
                                    //     id:uuid(),
                                    //     title:'Meeting with Client',
                                    //     completed: false
                                    //   },
                                    //   {
                                        //     id:uuid(),
                                        //     title:'Code for an hour',
                                        //     completed: false
                                        //   }
                                        // ]


           /*****                          }  ******/
                                    
                                    /*
                                    // To request the Projects from the Server
                                    componentDidMount(){
                                        axios.get('hdeji_api/v1/cards')
                                        .then(res => this.setState({todos: res.data}))
                                    }
                                    */
                                   
                                   
                                   
                                   //Toggle markCompleted
                  /*                 markComplete = (id) => {
                                       this.setState({ projects: this.state.projects.map(project=>{
                                           if(project.id === id){
                                               project.completed = !project.completed   //toggle btw memory values
                                            }
                                            return project;
                                            
                                        })})
                                        
                                    }
                                    
                                    // Delete Project
                                    delTodo = (id)=>{
                                        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
                                        .then (res => this.setState({projects:[...this.state.projects.filter(project => project.id !== id)]})); 
                                    }
                                    
                                    // Add Project
                                    addTodo = (title) =>{
                                        axios.post('https://jsonplaceholder.typicode.com/todos', {
                                            title,
                                            completed:false
                                        })
                                        .then(res=> this.setState({todos: [...this.state.todos, res.data] }));
                                        //.catchError Here ????***
                                    }
                                    // const newTodo = {
                                        //   id:uuid(),              //{random()},
                                        //   title, 
                                        //   completed: false
                                        //}
                                        //this.setState({todos: [...this.state.todos, newTodo] });
                                        //}
                                        
                                        
                                        render() {
                                            return (
                                                <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props=>(
                <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <ToDos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )}/>
            <Route path="/about" components={About}/>
          </div>
        </div>
      </Router>
    );
}
}

export default App;
*/