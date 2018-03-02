import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import image from './HardRockImage.jpg'
import { Container, Header, Menu, MenuItem, Grid, GridRow, Icon} from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu className={"topmenu"}>
          <Container>

            <img className="ui fitted image item"
                 src="http://courses.ics.hawaii.edu/ics314f17/morea/ui-frameworks/hard-rock-logo.png"/>
            <Menu.Item right> CAFE</Menu.Item>
            <Menu.Item right> HOTELS</Menu.Item>
            <Menu.Item right> CASINOS</Menu.Item>
            <Menu.Item right> LIVE</Menu.Item>
            <Menu.Item right> SHOP</Menu.Item>
            <Menu.Item right> BLOG</Menu.Item>
            <Menu.Item right> REWARDS</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class MiddleImage extends React.Component {
  render() {
    return (
        <img className="ui fluid image" src={image}/>
    )
  }
}

class BottomFooter extends React.Component {
  render() {
    return (
        <div className="orange-background">
          <Grid one column centered>
            <Grid.Row>
              <div className="bottom-text">HARD ROCK CAFE HONOLULU</div>

            </Grid.Row>
            <Grid.Row>
              <div class="text">
                <Icon name="phone"/><span>+1-808-955-7383</span>&nbsp; &nbsp; &nbsp;
                <Icon name="mail"/>><span>Email Us</span>&nbsp; &nbsp; &nbsp;
                <Icon name="home"/><span>280 Beachwalk, Honolulu, Hawaii 96815</span>&nbsp; &nbsp; &nbsp;
                <Icon name="facebook f"/>&nbsp;
                <Icon name="instagram"/>&nbsp;
                <Icon name="pinterest"/>&nbsp;
                <Icon name="tripadvisor"/>&nbsp;
              </div>
            </Grid.Row>
          </Grid>
        </div>
    )
  }
}

class HardRock extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleImage/>
          <BottomFooter/>
        </div>

    );
  }
}

ReactDOM.render(<HardRock/>, document.getElementById('root'));