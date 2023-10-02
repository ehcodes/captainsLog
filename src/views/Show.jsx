const React = require("react");
const Generic = require("./layouts/Generic.jsx");

const Show = ({ log }) => {
  return (
    <Generic title={log.createdAt.toString()}>
      <nav>
        <ul>
          <li>
            <a href="/">All Logs</a>
          </li>
          <li>
            <form action={`/logs/${log.id}?_method=DELETE`} method="POST">
              <input type="submit" value="Delete Log" />
            </form>
          </li>
          <li>
            <a href={`/logs/${log.id}/edit`}>Edit Log</a>
          </li>
        </ul>
      </nav>
      <section>
        <h2>{log.title}</h2>
        <p><b>Is the Ship OK?</b></p>
        <p>
          {log.shipIsWrecked
            ? "No, the ship is absolutely wrecked"
            : "Yes, the ship is hanging in there."}
        </p>
        <p>{log.entry}</p>
      </section>
    </Generic>
  );
};

module.exports = Show;
