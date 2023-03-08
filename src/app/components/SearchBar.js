import { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");
  const [entity, setEntity] = useState("musicTrack");
  const [limit, setLimit] = useState(10);

  const searchHandler = (event) => {
    event.preventDefault();
    if (term === "") {
      window.alert("Please enter all search data");
      return;
    }
    const params = {
      term: term,
      entity: entity,
      limit: limit,
    };
    props.searchSong(params);
  };
  return (
    <div className="my-4 text-dark">
      <hr
        style={{
          width: "100%",
          height: "5px",
          backgroundColor: "#BFACAC",
        }}
      />

      <div class="card">
        {" "}
        <center>
          <h4 className="text-dark">Search Music</h4>
        </center>
        <form className="form-inline" onSubmit={searchHandler}>
          <label className="ml-2 text-dark">Term: </label>
          <input
            style={{
              width: "100%",
              marginLeft: "20px",
              marginRight: "20px",
              marginTop: "5px",
              marginBottom: "10px",
            }}
            type="text"
            className="form-control"
            placeholder="Search Term"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
          <label className="ml-2 text-dark">Entity:</label>
          <input
            type="radio"
            className="form-check-input mx-1"
            name="rdEntity"
            value="musicVideo"
            checked={entity === "musicVideo" && "checked"}
            onChange={(e) => setEntity(e.target.value)}
          />{" "}
          Video
          <input
            type="radio"
            className="form-check-input mx-1"
            name="rdEntity"
            value="musicTrack"
            checked={entity === "musicTrack" && "checked"}
            onChange={(e) => setEntity(e.target.value)}
          />{" "}
          Audio
          <label className="ml-2 text-dark">Limit: </label>
          <input
            type="number"
            className="form-control"
            min={1}
            max={50}
            onChange={(e) => setLimit(e.target.value)}
            value={limit}
            style={{
              marginLeft: "10px",
            }}
          />
          <input type="submit" value="Search" className="buttonMenu" />
        </form>
      </div>
      <hr
        style={{
          width: "100%",
          height: "5px",
          backgroundColor: "#BFACAC",
        }}
      />
    </div>
  );
};
export default SearchBar;
