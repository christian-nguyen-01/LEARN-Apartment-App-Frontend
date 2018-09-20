import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

import AuthService from '../services'

class RegisterPage extends Component {
	constructor(props) {
		super(props)

		this.auth = new AuthService()
		this.state = {
			registerSuccess: false,

			errors: "",
			form: {
				user: {
					firstName: "",
					lastName: "",
					email: "",
					password: "",
				}
			}
		}
	}

	render() {
		let { firstName, lastName, email, password } = this.state.form.user
		return (
			<main>
				<h2>Welcome! Register here.</h2>
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						name="firstName"
						value={firstName}
						placeholder = "First Name"
						onChange={this.onChange}
					/>

					<input
						type="text"
						name="lastName"
						value={lastName}
						placeholder = "Last Name"
						onChange={this.onChange}
					/>
					<input
						type="email"
						name="email"
						value={email}
						placeholder = "Email"
						onChange={this.onChange}
					/>
					{this.state.errors.email && <div>Error: Email  {this.state.errors.email[0]}</div>}
					<input
						type="password"
						name="password"
						value={password}
						placeholder = "Password"
						onChange={this.onChange}
					/>
					{this.state.errors.password && <div>Error: Password  {this.state.errors.password[0]}</div>}
					<button onSubmit={this.onSubmit}>Register</button>
				</form>
				{this.state.registerSuccess && <Redirect to="/listings" />}
			</main>
		)
	}

	onChange = (e) => {
		let { form } = this.state

		form.user[e.target.name] = e.target.value

		this.setState({ form })
	}

	onSubmit = (e) => {
		e.preventDefault()

		this.auth.register(this.state.form)
		.then(json => {
			console.log("handling any errors");
			if(json.errors) {
				this.setState({
					errors: json.errors
				})
			}
			return json
		})
		.then(json => {
			console.log("redirect");
			this.setState({
				registerSuccess: true
			})
		})
	}
}

export default RegisterPage
