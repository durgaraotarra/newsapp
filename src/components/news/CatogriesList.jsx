import { Button, Stack } from "@mui/material";
import { NavLink as CategoryLink, useParams } from "react-router-dom";
import React from "react";
import { links } from "../../utils/catogriesList";
import { v4 as uuidv4 } from "uuid";

const CatogriesList = () => {
    const {name} = useParams();
    console.log(name);
  return (
    <Stack direction="row" flexWrap="wrap" gap={1}>
      {links.map((link) => {
       return <Button
       key={uuidv4()}
          component={CategoryLink}
          to={`/categories/${link.text}`}
          variant={`${name === link.text ? 'contained':'outlined'}`}
        >
          {link.text}
        </Button>;
      })}
    </Stack>
  );
};

export default CatogriesList;
