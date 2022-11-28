import './index.css'

const GreetingTabs = props => {
  const {isActive, changeState, details} = props
  const {id, buttonText} = details
  const buttonClassName = isActive ? 'active' : 'not-active'

  const onChangeActiveState = () => {
    changeState(id)
  }

  return (
    <div className="tab-item">
      <li className="tab-list-container">
        <button
          type="button"
          className={`button ${buttonClassName}`}
          onClick={onChangeActiveState}
        >
          {buttonText}
        </button>
      </li>
    </div>
  )
}

export default GreetingTabs
