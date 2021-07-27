const MainContent = ({ toggle, setInput, input }) => {
  const inputHandler = (e) => {
    console.log(e.target.value);

    let inputArr = e.target.value.split("");

    setInput(inputArr);
  };

  return (
    <div className={`mainContent ${toggle ? "main-content_large" : ""}`}>
      <input onChange={inputHandler} placeholder="Type here" type="text" />
      <div className="itemContainer">
        {input.map((e) => {
          return (
            <div className="item">
              <h1>{e}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainContent;
