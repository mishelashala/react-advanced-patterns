import React from "react";
import { Address } from "./Address";
import { Case } from "./Case";
import { Switch } from "./Switch";

export function UserAddress({ address }) {
  return (
    <Switch>
      <Case match="user">
        <Address data={address} />
      </Case>
    </Switch>
  );
}
