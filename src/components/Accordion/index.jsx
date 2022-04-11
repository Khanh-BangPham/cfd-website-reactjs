import React, { createContext, useContext, useState } from "react";

export default function Accordion({
  index,
  title,
  content,
  position,
  onClick,
}) {
  const { numOpen } = useContext(Context);
  // const [isOpen, setIsOpen] = useState(false);
  // const entryClicked = () => {
  //   console.log("button Clicked");
  //   setIsOpen(!isOpen);
  //   console.log(isOpen);
  // };
  // console.log("rerender");
  return (
    <div className="accordion">
      <div className="accordion__title" onClick={onClick}>
        <div className="date">Ngày {index}</div>
        <h3>{title}</h3>
      </div>
      {/* {isOpen ? ( */}
      <div
        className="content"
        style={{ display: position === numOpen ? "block" : "none" }}
      >
        {content}
      </div>
      {/* ) : null} */}
    </div>
  );
}

const Context = createContext({ numOpen: -1 });

// Accordion.Group = ({ children }) => {
//   // const [numOpen, setNumOpen] = useState(-1);

//   const onClick = (index) => () => {
//     setNumOpen(index);
//   };

//   return (
//     <Context.Provider value={{ numOpen }}>
//       {React.Children.map(children, (child, i) => {
//         return React.cloneElement(child, { position: i, onClick: onClick(i) });
//       })}
//     </Context.Provider>
//   );
// };
