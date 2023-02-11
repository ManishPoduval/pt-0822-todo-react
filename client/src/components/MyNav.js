import {Navbar, Nav} from  'react-bootstrap'
import {Link} from  'react-router-dom'

function MyNav({onLogout, user}) {
return (
	<Navbar  bg="light"  expand="lg">
		<Navbar.Toggle  aria-controls="basic-navbar-nav"  />
		<Navbar.Collapse  id="basic-navbar-nav">
			<Nav  className="mr-auto">
				<Link  to="/">Todos</Link>
				<Link  style={{marginLeft: '10px'}}  to="/add-form">Add Todo</Link>
				{
					user ? (
					<p style={{marginLeft: '10px', cursor: 'pointer'}} onClick={onLogout} >Logout</p>
					) : (
						<>
						<Link  style={{marginLeft: '10px'}}  to="/signup">SignUp</Link>
						<Link  style={{marginLeft: '10px'}}  to="/signin">SignIn</Link>
						</>
					)
				}
			
				
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	)
}
export  default MyNav