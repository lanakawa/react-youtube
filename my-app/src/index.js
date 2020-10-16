import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Grid, Icon, Image, Segment, Sidebar, Menu, Input, Button, Popup } from 'semantic-ui-react';
import logo from './YoutubeLogo_whitetext.png'
import user from './unnamed.jpg'
import vid1 from './video1.png'
import vid2 from './video2.png'
import vid3 from './video3.png'
import vid4 from './video4.png'
import vid5 from './video5.png'
import vid6 from './video6.png'
import vid7 from './video7.png'
import vid8 from './video8.png'


function setBackground() {
  document.body.style.background = "#1b1c1d";
}
const SidebarVisible = () => (
      <Sidebar
          id="left-sidebar"
          fixed
          as={Menu}
          animation='push'
          icon='labeled'
          inverted
          vertical
          visible
          borderless
          width='very thin'
      >

          <Grid.Row id="row1">
        <Menu.Item as='a'>
          <Icon name='bars' size='tiny'/>
        </Menu.Item>
          </Grid.Row>

          <Grid.Row id="row1">
        <Menu.Item as='a'>
          <Icon name='home' size='tiny'/>
          Home
        </Menu.Item>
          </Grid.Row>

          <Grid.Row id="row1">
        <Menu.Item as='a'>
          <Icon name='fire' size='tiny'/>
          Trending
        </Menu.Item>
          </Grid.Row>

          <Grid.Row id="row1">
        <Menu.Item as='a'>
          <Icon name='film' size='tiny'/>
          Subs
        </Menu.Item>
          </Grid.Row>

          <Grid.Row id="row1">
        <Menu.Item as='a'>
          <Icon name='clone' size='tiny'/>
          Library
        </Menu.Item>
          </Grid.Row>

      </Sidebar>
)

class SideMenu extends React.Component {
  render() {
    return (
        SidebarVisible()
    )
  }
}

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topMenu" id="top">
          <Container>
            <Grid.Column id="logo">
              <Menu.Item><Image src={logo} size='tiny'/></Menu.Item>
            </Grid.Column>

            <Menu.Item id="inner"><Input inverted transparent icon='search' placeholder='Search' /></Menu.Item>
            <Menu.Item position="right"><Button icon style={{backgroundColor:"#1b1c1d"}}><Icon inverted color='white' name="video"/></Button></Menu.Item>
            <Menu.Item><Button icon style={{backgroundColor:"#1b1c1d"}}><Icon inverted color='white' name="th"/></Button></Menu.Item>
            <Menu.Item><Button icon style={{backgroundColor:"#1b1c1d"}}><Icon inverted color='white' name="bell"/></Button></Menu.Item>
            <Menu.Item><Image circular src={user} width="30"/></Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class Middle extends React.Component {
  render(){
    return (
        <Grid id="grid">
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={vid1}/>
            </Grid.Column>

            <Grid.Column width={4}>
              <Image src={vid2}/>
            </Grid.Column>

            <Grid.Column width={4}>
              <Image src={vid3}/>
            </Grid.Column>

            <Grid.Column width={4}>
              <Image src={vid4}/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={vid5}/>
            </Grid.Column>

            <Grid.Column width={4}>
              <Image src={vid6}/>
            </Grid.Column>

            <Grid.Column width={4}>
              <Image src={vid7}/>
            </Grid.Column>

            <Grid.Column width={4}>
              <Image src={vid8}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }
}

class ButtonMenu extends React.Component {
  render() {
    return(
        <Container id="buttons">
          <Grid.Row>
        <Button>ALL</Button>
        <Button color='grey'>The Legend of Zelda</Button>
        <Button color='grey'>Animal Crossing</Button>
        <Button color='grey'>Lo-fi music</Button>
        <Button color='grey'>Mario Series</Button>
        <Button color='grey'>Cooking</Button>
        <Button color='grey'>Anime</Button>
        <Button color='grey'>Puppies</Button>
          </Grid.Row>
        </Container>

  )
  }
}

class Youtube extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <ButtonMenu/>
          <SideMenu/>
          <Middle/>

        </div>

    );
  }
}
window.addEventListener("load",function() { setBackground() });

ReactDOM.render(<Youtube/>, document.getElementById('root'));
