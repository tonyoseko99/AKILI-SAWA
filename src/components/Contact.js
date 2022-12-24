import react from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");

    window.location = "/";
  };
  return (
    <form className="contact-us" onSubmit={handleSubmit}>
      <h2>Talk to Us</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@email.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          className="form-control"
          id="message"
          rows="3"
          placeholder="How're you doing today..."
        ></textarea>
      </div>
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
  );
}
export default Contact;
