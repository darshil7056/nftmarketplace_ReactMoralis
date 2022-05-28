import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { MoralisProvider } from 'react-moralis'
import { serverURL,appID } from './moralis/credentials'

const moralisAppId =appID
const moralisServerURL = serverURL

ReactDOM.render(
  <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
    <App />
  </MoralisProvider>,

  document.getElementById('root'),
)
