import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch,Redirect} from 'react-router-dom';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Wallets from "./components/Wallets";
import NodFound from "./components/NodFound";



class App extends Component {


  render() {
    return (
        <Router>
            <div className="app">
                {/*<Switch>*/}
                    {/*<Route path="/wallets" component={Sidebar}/>*/}
                    {/*<Route exact path="/" component={Sidebar}/>*/}
                {/*</Switch>*/}
                <Sidebar/>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/wallets" component={Wallets}/>
                    {/*//<Route  component={NodFound}/>*/}
                    <Redirect to="/wallets"/>
                </Switch>
            </div>
        </Router>
    );
  }
}

{/*<Link to={m.path}>{m.title}</Link> обычные сылка пре переходе*/}
{/*<NavLink activeClassName="active" to={m.path}> навигация при переходе будет добавлять припереходе класс*/}
{/*<NavLink exact activeClassName="active" to={m.path}> exact будет добавлять только активной сылке класс*/}
//но активная цылка сбрасываеться на потомках,в документации надо создавать через children,что на активной сылке остался добавленный клас при переходе на потомок этого элемента



//router wthRouter хок получаешь location,history,match

//<Switch> если будет все Switch то тогда будет Sidebar там где есть path мы поставили условие

// <Route  component={NodFound}/> если не написать  path но <Route  component={NodFound}/> это страница будет рендориться когда сылки на страницу не будет введена неверно
//   <Route  component={NodFound2}/> то тогда 2 отрендоряться

//<Redirect to="/wallets"/> тоже что и   {/*//<Route  component={NodFound}/>*/} только будет работать походу на всех страницах всегда если что-то неправильно ввели сылку страницы 


{/*<Switch> выбор только одной сылки*/}
{/*<Route  exact path="/" component={Dashboard}/> будет в списке последним,на открытие страницы, */}
{/*<Route path="/profile" component={Profile}/>*/}
{/*<Route path="/wallets" component={Wallets}/>*/}
// </Switch>

{/*<Route path="/profile" component={Profile}/>*/}
{/*<Route path="/wallets" component={Wallets}/>*/}
{/*<Route path="/" component={Dashboard}/> будет в списке последним,на открытие страницы, */}
export default App;
