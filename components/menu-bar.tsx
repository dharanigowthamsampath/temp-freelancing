// import React from "react";

// type Props = {};

// const MenuBar = (props: Props) => {
//   return (
//     <div className="bg-muted p-4 flex-col items-center">
//       <div className=" text-white">LOGO</div>
//       <div className=" text-white">ICON</div>
//     </div>
//   );
// };

// export default MenuBar;

import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";

type Props = {};

const MenuBar = (props: Props) => {
  return (
    <div className="bg-muted pt-4 pl-2 pr-2 flex flex-col justify-between h-screen">
      <div className="text-white text-center">AIE</div>
      <div className="text-white">
        <Avatar>
          <AvatarFallback>KD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default MenuBar;
