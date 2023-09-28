const React = require("react");
const Generic = require("/layouts/Generic.jsx");

const New = () => {
  return (
    <Generic title={"Submit a New Log"}>
      <form action="/logs" method="POST">
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

module.exports = New;
