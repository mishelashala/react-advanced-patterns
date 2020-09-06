import React from "react";
import { If } from "./components/If";
import { Then } from "./components/Then";
import { Else } from "./components/Else";
import { Match } from "./components/Match";
import { useUser } from "./hooks/useUser";
import { UserData } from "./components/UserData";
import { Address } from "./components/Address";

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
