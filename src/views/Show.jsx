const React = require("react");
const Generic = require("./layouts/Generic.jsx");

const Show = ({ log }) => {
  return (
    <Generic title={log.createdAt}>
      <section>
        <h2>{log.title}</h2>
        <p>{log.entry}</p>
      </section>
    </Generic>
  );
};

module.exports = Show;
