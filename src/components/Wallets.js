import React from 'react';
import {Link,Route} from "react-router-dom";

function Sell({match}) {
    {console.log(match)}
    return(
        <p>
            You are going to sell currency with id:{match.params.id}
        </p>
    )
}

function Currency({wallet,history,match}) {
    function sell() {
                history.push(`${match.url}/sell`);
    }
    {console.log(match)}
    return(
        <div>
            <p>Currently you picked {wallet.id}</p>
            <button onClick={sell}>Sell</button>
            <Route path={`${match.path}/sell`} component={Sell}/>
        </div>
    );
}

export default function Wallets(props) {
    const wallets = [
        {currency: 'BTC', id: '12', amount:42,},
        {currency: 'ETC', id: '13', amount:71.4,},
        {currency: 'CCT', id: '42', amount:22.5,},
    ]
    //{console.log(props)}
    return(
        <main>
            <h1>Wallets</h1>
            <p>Select from the list of your cards</p>
            <ul>
                {wallets.map(w => {
                    return <li key={w.id}>
                        <Link to={`${props.match.url}/${w.id}`}>
                            {w.currency}
                        </Link>
                    </li>
                })}

            </ul>
            <Route path={`${props.match.url}/:id`} render={(props)=> { //props.match появляються когда вы чтото рендорите компонет через Route
                const wallet = wallets.find(w => w.id === props.match.params.id)
                return <Currency {...props} wallet={wallet} />
            }}/>
        </main>
    );
}
//При использовании push за место Link
//history.push(`${match.url}/sell`);
// <Route path={`${match.path}/sell`} component={Sell}/> Route должен быть за место url как обычно path

//path={`${props.match.url}/:id`} так само будет а  в url уже нормально айди будет поставлен
//{console.log(match.params.id)}
//path /:id` за место 13
// <Link to={`${props.match.url}/${w.id}`}> не пологаеться где оно находиться
// <Link to={`/wallets/${w.id}`}>  пологаеться где оно находиться
//<Route/> при рендоре через Route появляться match location history
{/*<Route path={`${props.match.url}/:id`} render={(props)=> console.log('Curr',props) || <Currency {...props}/>}/>*/}
{/*<Route path={`${props.match.url}/:id`} component={Currency} /> props.match.url}/:id сылка на разное айди рендорит Currency*/}












