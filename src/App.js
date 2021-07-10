import './App.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Card, Container, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react'
import axios from 'axios';
import Loader from 'react-loader-spinner';;
function App() {
  
    
const [users, putData] = useState([]);
const [isClicked, setClick] = useState(false);
const url ="https://reqres.in/api/users?page=1";

// useEffect(() => {
//   users();
// });

//useEffect({}, []); 
const getUsers= async() => {
  setClick(true);
  await axios({url})
      .then( res=> res)
      .then(res=>{
        putData(res.data.data);
        setClick(false);
        console.log(users);
      }).catch(        
        error =>{console.log(error)
          alert(error);
         // setClick(false);
        }
      )     
}
// const users= ()=>{
//   axios.get({url}).then(response=>{
//     console.log("data is ",response.data)
//     putData([response.data.data]);
//   }).catch(
//     error=>{
//       console.log("error is",error);
//     }
//   );
// }
  return (
    <div className="App">

    {/* NAVBAR */}
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Sandy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>

    
      <Button onClick={getUsers} style={{ marginTop: '1rem' }}>Get Users</Button>
    
   {isClicked &&
     <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}        
        style={{ marginTop: '10rem' }}
      />
   }
    
    {/* LAYOUT */}
    <Container>
    <Row>
      {users.map((value, index) => {
      return <Card style={{ width: '18rem' },{ margin: '1rem' }}>
        <Card.Img variant="top" src={value.avatar} />
        <Card.Body>
          <Card.Title>{value.first_name} {value.last_name}</Card.Title>
          <Card.Text>
          {value.email}
          </Card.Text>       
        </Card.Body>
      </Card>
      })}    
    </Row>
  </Container>
    </div>
  );
}

export default App;
