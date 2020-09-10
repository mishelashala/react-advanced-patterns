import React from "react";
import { If } from "./components/If";
import { Then } from "./components/Then";
import { Else } from "./components/Else";
import { UserAddress } from "./components/UserAddress";
import { UserData } from "./components/UserData";
import { Match } from "./components/Match";
import { useUser } from "./hooks/useUser";

function App() {
  const { loading, user } = useUser();

  return (
    <Match value={user.role}>
      <If predicate={loading}>
        <Then>Loading</Then>
        <Else>
          <UserData name={user.name}>
            <UserAddress address={user.address} />
          </UserData>
        </Else>
      </If>
    </Match>
  );
}

export default App;
