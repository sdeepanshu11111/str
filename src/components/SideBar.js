const SideBar = ({ toggle, setToggle }) => {
  // document.addEventListener("DOMContentLoaded", function () {
  //   const sidebar = document.querySelector(".sidebar");
  //   const mainContent = document.querySelector(".mainContent");

  //   console.log(sidebar, mainContent);

  //   document.querySelector("button").onclick = function () {
  //     sidebar.classList.add("sidebar_small");
  //     mainContent.classList.add("main-content_large");
  //   };
  // });

  const toggleHandler = () => {
    console.log(toggle);
    if (toggle) {
      setToggle(!toggle);
    } else {
      setToggle(!toggle);
    }

    console.log(toggle);
  };

  return (
    <div className={`sidebar ${toggle ? "sidebar_small" : ""}`}>
      <button onClick={toggleHandler}>M</button>
    </div>
  );
};

export default SideBar;
