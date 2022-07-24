import { Dropdown } from "react-bootstrap";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function navbar() {
    return (
        <div>
            <h3 className="header">
        
    <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
        <FontAwesomeIcon icon={faBars} style={{paddingRight:"1rem", paddingLeft:"1rem", color:"black"}} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="/">Home</Dropdown.Item>
            <Dropdown.Item href="/about/about-app">About App</Dropdown.Item>
            <Dropdown.Item href="/about/about-author">About Author</Dropdown.Item>
            </Dropdown.Menu>
    </Dropdown>
        </h3>
        <div className="header2"/>
    </div>
    )
}
