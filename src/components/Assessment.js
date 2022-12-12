import react, { useState, useEffect } from "react";

function Assessment() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8cb05c0c99msh54bd09dc4e0a425p1571ddjsnf812c3d83eac",
      "X-RapidAPI-Host":
        "global-economy-analytics.p.rapidapi.com",
    },
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://global-economy-analytics.p.rapidapi.com/country/Saudi%20Arabia",
      options
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="container" id="assessment">
        <div className="assessment-content">
          <h2>Assessment</h2>
          <div className="assessment-section">
            <p>
              <em>
                <strong>
                  Akili Sawa is a project that seeks to solve mental health
                  issues among the youth under the Sustainable Development Goals
                  (SDGs) 3.4 and 3.5.
                  <br />
                  <br />
                  It is a project of the United Nations Academic Impact (UNAI)
                  under the Millennium Campus Network (MCN).
                </strong>
              </em>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Assessment;
