import React from 'react';
import io from 'socket.io-client';
import Chat from './Pages/Chat';

function App() {
	// // Socket Setup

	// const [ socket, setSocket ] = React.useState(null);

	// const setupSocket = () => {
	// 	const token = localStorage.getItem('CC_Token');
	// 	if (token && !socket) {
	// 		const newSocket = io('http://localhost:8000', {
	// 			query: {
	// 				token: localStorage.getItem('CC_Token')
	// 			}
	// 		});

	// 		newSocket.on('disconnect', () => {
	// 			setSocket(null);
	// 			setTimeout(setupSocket, 3000);
	// 		});

	// 		newSocket.on('connect', () => {});
	// 		setSocket(newSocket);
	// 	}
	// };

	// React.useEffect(() => {
	// 	setupSocket();
	// 	//eslint-disable-next-line
	// }, []);

	return <Chat />;
}

export default App;
