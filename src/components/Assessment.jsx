import react from "react";

const Assessment = () => {
  return (
    <div className="assessment">
      <h2>Self-Assessment</h2>
      <div className="assessment-section">
        <p>
          <br />
          <br />
          <iframe
          style={{width: "100%", height: "100vh"}}
            allow="microphone; camera: autoplay"
            src="https://www.okaya.me/dashboard/home/direct?code=3768"
          />
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default Assessment;
