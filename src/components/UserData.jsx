import React from "react";
import { Switch } from "./Switch";
import { Case } from "./Case";
import { Default } from "./Default";

export function UserData({ name, children }) {
  return (
    <Switch>
      <p>User name: {name}</p>
      <Case match="user">is user</Case>
      <Case match="superuser">is super user!</Case>
      <Default>who are you?!</Default>
      <>{children}</>
    </Switch>
  );
}
