import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import './Facebook.css'


export default class Facebook extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:false,
            userId:'',
            name:'',
            picture:'',
            emailId:''
        }
    }

    componentClicked=()=>{
        console.log("clicked")
    }
    responseFacebook=(response)=>{
        console.log(response)
        this.setState({
            isLoggedIn:true,
            userId:response.userID,
            name:response.name,
            picture:response.picture.data.url

        })
    }
    
    render() {
        let fbContent;
       

        if(this.state.isLoggedIn){
            fbContent=(
                <div className="fbContent">
                    <img className="profile-image" src={this.state.picture} alt={this.state.name}/>
                    <h3>Welcome {this.state.name}</h3>
                    
                </div>
            ) 
        }
        else{
            fbContent=(<FacebookLogin 
                appId="308785190221234" 
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                />)
               
                
        }
        
        return (
            <div className="fb">
                <h3>To Register login with your Facebook Account</h3>
                {fbContent}
                
            </div>
        )
    }
}
//424577951335-qsch7u9ts4uss6f62k8fbe2n78d51trn.apps.googleusercontent.com