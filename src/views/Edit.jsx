const React = require("react");
const Generic = require("./layouts/Generic.jsx");

const Edit = ({ log }) => {
  return (
    <Generic title={log.createdAt.toString()}>
      <h2>{`Edit ${log.title}`}</h2>
      <form action={`/logs/${log.id}?_method=PUT`} method="POST">
      <label htmlFor="title">Title</label>
        <input type="text" name="title" />
        <label htmlFor="entry">Entry</label>
        <input type="textarea" name="entry" />
        <label htmlFor="shipIsWrecked">Is the ship wrecked?</label>
        <input type="checkbox" name="shipIsWrecked" />
        <input type="submit" name="" value="Submit Log" />
      </form>
    </Generic>
  );
};

module.exports = Edit;
