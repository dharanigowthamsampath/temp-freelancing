import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="w-full bg-muted p-2 mb-4 rounded flex justify-end items-center">
      <div className="flex space-x-2">
        <Input />
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default SearchBar;
