import React from 'react';
import { Form, Input, Button } from 'reactstrap';

export default function Login(props) {
	const [ username, setUsername ] = React.useState('');
	const [ password, setPassword ] = React.useState('');

	return (
		<div
			style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
		>
			<div style={{ width: '40%', height: '40vh', border: '1px solid #ccc', padding: 10, background: '#eee' }}>
				<Form onSubmit={(e) => {
                    e.preventDefault();
                    props.login(username, password);
                }}>
					<Input
						placeholder="Username"
                        style={{ marginBottom: 10 }}
                        value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<Input
						placeholder="Password"
                        type="password"
                        value={password}
						style={{ marginBottom: 100 }}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button type='submit' style={{ width: '100%' }}>Login</Button>
				</Form>
			</div>
		</div>
	);
}
