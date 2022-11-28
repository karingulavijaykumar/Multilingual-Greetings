import {Component} from 'react'
import './index.css'
import GreetingTabs from '../GreetingTabs'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greeting extends Component {
  state = {
    activeTabId: languageGreetingsList[0].id,
  }

  onClickLanguageChange = id => {
    this.setState({activeTabId: id})
  }

  renderSelectedImage = () => {
    const {activeTabId} = this.state
    const {imageUrl, imageAltText} = languageGreetingsList[
      languageGreetingsList.findIndex(each => each.id === activeTabId)
    ]
    return <img src={imageUrl} className="images" alt={imageAltText} />
  }

  render() {
    const {activeTabId} = this.state
    return (
      <div className="greeting-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="tab-items">
          {languageGreetingsList.map(each => (
            <GreetingTabs
              key={each.id}
              isActive={each.id === activeTabId}
              changeState={this.onClickLanguageChange}
              details={each}
            />
          ))}
        </ul>
        {this.renderSelectedImage()}
      </div>
    )
  }
}

export default Greeting
