import React from "react";

const List = ({ results }) => {
  const renderedlist = results.map((item) => {
    return (
      <div className="ui segment">
        <h3>
          <a
            target="_blank"
            href={"https://en.wikipedia.org?curid=" + item.pageid}
            classname="header"
          >
            {item.title}
          </a>
        </h3>
        <p dangerouslySetInnerHTML={{ __html: item.snippet }}></p>
      </div>
    );
  });
  // dangerous.. is a reserverd prop in react, if text contains html tags then html text inside of tags will be visible, and if it contains malicios text the n it will run javascript on browser so it's dangerous
  return renderedlist;
};

export default List;
