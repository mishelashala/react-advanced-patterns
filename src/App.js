import React from "react";
import { If } from "./components/If";
import { Then } from "./components/Then";
import { Else } from "./components/Else";
import { Switch } from "./components/Switch";
import { Case } from "./components/Case";
import { Default } from "./components/Default";
import { Match } from "./components/Match";
import { useUser } from "./hooks/useUser";

// 1. Flexible Compound Components
// 2. Prop Drilling vs Composition
// 3. Hook Composition

function Address({ data }) {
  return (
    <div>
      <h2>Address:</h2>
      <p>
        {data.street} #{data.exteriorNumber}
      </p>
    </div>
  );
}

function UserData({ name, children }) {
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

function App() {
  const { loading, data } = useUser();

  return (
    <Match value={data.role}>
      <div>
        <If predicate={loading}>
          <Then>Loading</Then>
          <Else>
            <UserData name={data.name}>
              <Address data={data.address} />
            </UserData>
          </Else>
        </If>
      </div>
    </Match>
  );
}

export default App;
