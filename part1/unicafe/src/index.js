import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({ text, value }) => {

  return (
    <tr>
        <td>{text} </td><td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && bad === 0 && neutral === 0) {
    return <div>No feedback given</div>
  }

  const all = bad + good + neutral
  const average = (good - bad) / all
  const positive = (good / all) * 100;

  return (
    <div>
      <table>
        <tbody>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={all} />
      <Statistic text="average" value={average} />
      <Statistic text="positive" value={positive} />
      </tbody>
      </table>
    </div>
  )
}

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)


  return (
    <div>
      <Header text='Give Feedback' />
      <Button handleClick={increaseGood} text='good' />
      <Button handleClick={increaseNeutral} text='neutral' />
      <Button handleClick={increaseBad} text='bad' />
      <Header text='Statistics' />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)