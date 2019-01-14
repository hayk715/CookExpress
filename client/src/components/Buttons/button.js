import React from "react";
import{ButtonToolbar,MenuItem,SplitButton} from "react-bootstrap";
import "./button.css"

const LoginButtons=(props)=>(
    <ButtonToolbar className="loggedin">
          <SplitButton
              bsSize="small"
              title={props.name}
              id="dropdown-size-small"
              bsStyle="danger"
              href="/profile"
          >
              <MenuItem eventKey="1">View Starred</MenuItem>
              <MenuItem divider />
              <MenuItem onClick={props.click} eventKey="4">Sign Out</MenuItem>
          </SplitButton>
            </ButtonToolbar>
)
export default LoginButtons;



