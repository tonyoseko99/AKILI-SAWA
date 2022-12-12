import react from "react";

function Contact() {
  return (
    <form className="contact-us">
        <h2>Talk to Us</h2>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="name@email.com" />
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="3" placeholder="How're you doing today..."></textarea>
        </div>
        <button type="submit" className="btn btn-dark">Submit</button>
    </form>
  );
}
export default Contact;
