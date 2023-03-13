// import { Component } from 'react'; 
import { Buttons } from './buttons/buttons'
import { Statistics } from './statistic/statistic';
import { Section } from './section/section'
import { Notification } from './notification/Notification';
import css from './app.module.css'
import { useState } from 'react';

 
const arrayBtn = [
  { id: "good", title: "Good"},
  {id: "neutral", title: "Neutral"},
  {id: "bad", title: "Bad"},
]

// export class oldApp extends Component {
  
// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
// }

//   btnFeedback = (event) => {
//     const {name} = event.target
//     this.setState((prevState) => {
//       return{[name]: prevState[name]+1}
//     })
 
//   }
    
//    countPositiveFeedbackPercentage = () => {
//     return this.countTotalFeedback ()
//     ? Math.round((this.state.good/this.countTotalFeedback())*100) : 0;
//   }
//  countTotalFeedback = () => {
//     const {good, neutral, bad} = this.state;
//     return good + neutral + bad;
//   };

//   render() {

//     const total = this.countTotalFeedback()

//     return (

//       <div className={css.main}>
//         <Section
//       title={"Натисни кнопку"}>
//         <Buttons
//           options={arrayBtn}
//           onLeaveFeedback={this.btnFeedback} />
//         </Section>
        
//         <Section title={'Statistic'}>
//        {total>0? (<Statistics
//           good={ this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad }
//           total={this.countTotalFeedback() }
//           positivePercentage={this.countPositiveFeedbackPercentage() }>
//           </Statistics>) :
//             <Notification message="Кнопка зверху"/>}
//           </Section>
//     </div>
//   );}
// };
 
export function App(){

const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

const btnFeedback = (event) => {
  const name = event.target.name;
  if (name === "good") {
     setGood((prev) => prev + 1);
   } else if (name === "neutral") {
     setNeutral((prev) => prev + 1);
   } else if (name === "bad") {
     setBad((prev) => prev + 1);
   }
  }
      
  const countPositiveFeedbackPercentage = () => {
   return totalFeedback ()
   ? Math.round((good/totalFeedback())*100) : 0;
 }
   const totalFeedback = () => {
    return good + neutral + bad;
    };


return (

  <div className={css.main}>
    <Section
  title={"Натисни кнопку"}>
    <Buttons
      options={arrayBtn}
      onLeaveFeedback={btnFeedback} />
    </Section>
    
    <Section title={'Statistic'}>
   {totalFeedback() > 0? (<Statistics
      good={ good}
      neutral={neutral}
      bad={bad }
      total={totalFeedback() }
      positivePercentage={countPositiveFeedbackPercentage() }>
      </Statistics>) :
        <Notification message="Кнопка зверху"/>}
      </Section>
</div>
)
}