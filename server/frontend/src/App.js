import './bootstrap.min.css';
import React from 'react';
import HomePage from './homepage.js';
import ContactUs from './contactus.js';

window.watsonAssistantChatOptions = {
    integrationID: "a69a73e6-b4f7-4c95-b8f4-ee0e1c966f50", // The ID of this integration.
    region: "eu-gb", // The region your integration is hosted in.
    serviceInstanceID: "1f990c42-748f-458d-8b30-bd5e537cdf3d", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });

class App extends React.Component {

  state = {
    pageshown:<HomePage/>
  }

  setPageHome = ()=> {
    this.setState({pageshown:<HomePage/>});    
  }
  
  setPageContactUs = ()=> {
    this.setState({pageshown:<ContactUs/>});    
  }
  
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#" onClick={this.setPageHome}>Home <span class="sr-only">(current)</span></a>
              </li>
                /*
                Add more tabs and action items for the tabs to give the dealership website a real feel. 
                */
        
              <li class="nav-item">
                <a class="nav-link" href="#" onClick={this.setPageContactUs}>Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          {this.state.pageshown}
        </div>
      </div>
    );
  }
}

export default App;
