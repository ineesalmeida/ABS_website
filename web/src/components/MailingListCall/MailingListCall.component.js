import React from 'react';
import './MailingListCall.style.css';

class MailingListCall extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            was_submitted: false
        }
    };

    handleEmailChange = (e) => this.setState({ email: e.target.value });

    handleSubmit = (e) => {
        e.preventDefault();
        // TODO connect to an actual DB

        if (e.target.value !== null) {
            this.setState({ was_submitted: true, email: e.target.value });
        }
        else {
            this.setState({ error: "Email not valid" });
        }

    }

    render() {

        let email_form = (
            <form onSubmit={this.handleSubmit} className="email_form">
                <div className="form_item">
                    <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="Email" />
                    <button type="submit">Join</button>
                </div>
            </form>
        )
        let successfull_submission = (
            <p>Successful!</p>
        )

        return (
            <div className="mailing_list_call">
                <h2 className="mailing_list_call__title">Join our mailing list!</h2>
                {this.state.was_submitted ? successfull_submission : email_form}
                <p>We will send updates every 2 weeks. Be the first to know of the latest news and release dates!</p>
            </div>
        );
    }
}

export default MailingListCall;
