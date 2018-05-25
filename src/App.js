import React, { Component } from 'react';
import './App.css';
import { Button, Card, Image } from 'semantic-ui-react';

class App extends Component {
  state = {
    user: {},
    active: false
  };

  handleClick = () => {
    fetch('https://api.github.com/users/swkane')
      .then(response => response.json())
      .then(user => this.setState({ user, active: !this.state.active }));
  }

  render() {
    let { user, active } = this.state;
    return (
      <div>
        <Button color="teal" toggle active={active} onClick={this.handleClick}>Toggle User</Button>
        { active &&
            <Card>
              <Image src={user.avatar_url} />
              <Card.Content>
                <Card.Header>
                {user.name}
              </Card.Header>
                <Card.Meta>
                  <span className='date'>
                    {user.location}
                  </span>
                </Card.Meta>
                <Card.Description>
                  {user.bio}
                </Card.Description>
              </Card.Content>
            </Card>
        }
      </div>
    );
  }
}

export default App;
