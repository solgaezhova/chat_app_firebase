import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import MainChat from './MainChat';
import Login from './Login';
import { useStateValue } from '../StateProvider';
import './Chat.css';

const Chat = () => {
	const [ messages, setMessages ] = useState([]);
	const [{ user }, dispatch] = useStateValue();

	return (
		<div className="app">
			{!user ? (
				<Login />
			) : (
				<div className="app_body">
					<Router>
						<Sidebar />
						<Switch>
							<Route path="/rooms/:roomId">
								<MainChat messages={messages} />
							</Route>
							<Route exact path="/">
								<MainChat messages={messages} />
							</Route>
						</Switch>
					</Router>
				</div>
			)}
		</div>
	);
};

export default Chat;
