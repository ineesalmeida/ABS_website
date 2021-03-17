import React from 'react';
import './MailingListCall.style.css';

class MailingListCall extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: "",
        };
    }

    handleChange = (e) => {
        this.setState({ email: e.target.value })
    }

    render() {
        let email_form = (
            <div id="mc_embed_signup">
                <form action="https://gmail.us1.list-manage.com/subscribe/post?u=b6e6eca0d45fc6d605d2acc56&amp;id=e382d10be5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                        <input type="email" value={this.state.email} onChange={this.handleChange} name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
                        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                            <input type="text" name="b_b6e6eca0d45fc6d605d2acc56_e382d10be5" tabIndex="-1" value="" onChange={() => null} />
                        </div>
                        <div className="clear">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                        </div>
                    </div>
                </form>
            </div>
        )
        let successfull_submission = (
            <p>Successful!</p>
        )

        let was_submitted = false;

        return (
            <div className="mailing_list_call">
                <h2 className="mailing_list_call__title">Join our mailing list!</h2>
                {was_submitted ? successfull_submission : email_form}
                <p>We will send updates every 2 weeks. Be the first to know of the latest news and release dates!</p>
            </div>
        );
    }
}

export default MailingListCall;
