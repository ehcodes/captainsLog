const React = require("react");
const Generic = require("./layouts/Generic.jsx");

const Edit = ({ log }) => {
  return (
    <Generic title={log.createdAt.toString()}>
      <h2>{`Edit ${log.title}`}</h2>
      <form action={`/logs/${log.id}?_method=PUT`} method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" defaultValue={log.name} />
        <label htmlFor="img">Image URL</label>
        <input type="text" name="color" defaultValue={log.img} />
        <input type="submit" value="Submit Changes" />
      </form>
    </Generic>
  );
};

module.exports = Edit;
