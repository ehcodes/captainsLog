const React = require("react");
const Generic = require("./layouts/Generic.jsx");

const Show = ({ log }) => {
  return (
    <Generic title={log.createdAt.toString()}>
      <nav>
        <a href="/">All Logs</a>
        <form action={`/logs/${log.id}?_method=DELETE`} method="POST">
          <input type="submit" value="Delete This Log" />
        </form>
      </nav>
      <section>
        <h2>{log.title}</h2>
        <p>
          {log.shipIsWrecked
            ? "The ship is absolutely wrecked"
            : "The ship is hanging in there."}
        </p>
        <p>{log.entry}</p>
      </section>
    </Generic>
  );
};

module.exports = Show;
