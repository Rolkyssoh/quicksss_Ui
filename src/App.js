import React from 'react'; 
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
 
import './App.css';
import Header from './components/header/header.component';
import AnnonceDetail from './pages/annonces/detail/annonce-detail.component'; 

import HomePage from './pages/homepage/homepage.compenent';
import ListingPage from './pages/listing/listing.component';
import SignInAndSignUpPage from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component';
import { setCurrentUser } from './redux/user/user.actions';
import NewAnnonce from './pages/annonces/new-annonce/new-annonce.page';
import ChatForm from './pages/chat/chat-form/chat-form.component';
import MyAdvertisement from './pages/account/my-advertisement/my-advertisement.page';
import ChatBox from './pages/chat/chat-box/chat-box.component';

class App extends React.Component { 
  componentDidMount() {
    console.log('valeur de currentUser: ', this.props.currentUser); 
  }
 
  render() { 
    return ( 
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />  
          <Route path='/listing/:categorieTitle' component={ListingPage} /> 
          <Route 
            exact
            path='/signin'  
            render={()=>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route 
            path='/new_annonce'
            render={()=> this.props.currentUser ? (
              <NewAnnonce />
            ) : <SignInAndSignUpPage />}
            // component={NewAnnonce} 
          />
          <Route path='/annonce_detail/:id' component={AnnonceDetail} />
          <Route path='/messages/form' component={ChatForm} />
          <Route 
            path='/account/'   
            render={() =>  
              this.props.currentUser ? (
                <MyAdvertisement />
            ) : (
              <Redirect to='/signin' />
            )} />

            <Route path='/chat' component={ChatBox} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
