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
          {console.log(log.title)}
          return (
            <li key={log.id}>{log.title}</li>
          );
        })}
      </ul>
    </Generic>
  );
};

module.exports = Index;
