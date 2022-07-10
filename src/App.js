
import './App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProfilePhoto } from './component/profile/ProfilePhoto';
import { FullName } from './component/profile/FullName';
import Address from './component/profile/Address';
import Profil from './Profil';
function App() {
  return (
    <CardGroup>
      <Card>
        <ProfilePhoto />
        <Card.Body>
          <FullName />
          <Address />
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>

        <Card.Body>
          <br></br><br></br><br></br>
          <Profil/>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">___</small>
        </Card.Footer>
      </Card>

    </CardGroup>
  );
}

export default App;
