import React, { Component } from 'react';
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Section from '../section/Section'
import Statistics from '../statistics/Statistics';

export default class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }


    handleInc = (e) => {
        const name = e.target.name;
        this.setState(prevState => {
            return {
                [name]: prevState[name] + 1,
            };
        });
    }
    
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const result = Math.round(
            (this.state.good / this.countTotalFeedback()) * 100,
        );
        return result;
    };
    



    render() {
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions handleInc={this.handleInc}/>
                </Section>

                <Section title="Statistics">
                    {this.countTotalFeedback() ? (
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            countTotalFeedback={this.countTotalFeedback}
                            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage} />
                    ) : (
                        <p>No feedback given</p>
                    )}
                </Section>
            </>
        )
    }
};