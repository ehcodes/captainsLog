const React = require("react");
const Generic = require("./layouts/Generic.jsx");

const Index = ({ logs }) => {
  return (
    <Generic title={"All Logs"}>
      <nav>
        <a href="/logs/new">Create a New log</a>
      </nav>
      <ul>
        {logs.map((log) => {
          return (
            <li key={log.id}>
              <a href={`/logs/${log.id}`}>{log.title}</a>
              <ul>
                <li>
                  <form action={`/logs/${log.id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                  </form>
                </li>
                <li>
                  <a href={`/logs/${log.id}/edit`}>Edit</a>
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </Generic>
  );
};

module.exports = Index;
