import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {countryAndCapitalsId: countryAndCapitalsList[0].id}

  getCapital = event => {
    this.setState({countryAndCapitalsId: event.target.value})
  }

  getCountry = () => {
    const {countryAndCapitalsId} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === countryAndCapitalsId,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {countryAndCapitalsId} = this.state
    const country = this.getCountry(countryAndCapitalsId)
    return (
      <div className="bg-con">
        <div className="card">
          <h1 className="head"> Countries And Capitals</h1>
          <div className="select-con">
            <select
              onChange={this.getCapital}
              value={countryAndCapitalsId}
              className="capital"
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para"> is capital of which country?</p>
          </div>
          <p className="country"> {country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
