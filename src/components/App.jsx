import { Component } from 'react';
import { Buttons } from './buttons/buttons'
import { Statistics } from './statistic/statistic';
import { Section } from './section/section'
import { Notification } from './notification/Notification';
import css from './app.module.css'

 
const arrayBtn = [
  { id: "good", title: "Good"},
  {id: "neutral", title: "Neutral"},
  {id: "bad", title: "Bad"},
]

export class App extends Component {
  
state = {
  good: 0,
  neutral: 0,
  bad: 0
}

  btnFeedback = (event) => {
    const {name} = event.target
    this.setState((prevState) => {
      return{[name]: prevState[name]+1}
    })
 
  }
    
   countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback ()
    ? Math.round((this.state.good/this.countTotalFeedback())*100) : 0;
  }
 countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  };

  render() {

    const total = this.countTotalFeedback()

    return (

      <div className={css.main}>
        <Section
      title={"Натисни кнопку"}>
        <Buttons
          options={arrayBtn}
          onLeaveFeedback={this.btnFeedback} />
        </Section>
        
        <Section title={'Statistic'}>
       {total>0? (<Statistics
          good={ this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad }
          total={this.countTotalFeedback() }
          positivePercentage={this.countPositiveFeedbackPercentage() }>
          </Statistics>) :
            <Notification message="Кнопка зверху"/>}
          </Section>
    </div>
  );}
};
