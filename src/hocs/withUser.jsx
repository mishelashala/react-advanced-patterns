import React from "react";
import { UserService } from "../services/UserService";

export function withUser(BaseComponent) {
  return class EnhancedComponent extends React.Component {
    state = {
      loading: true,
      user: {
        address: {},
      },
    };

    async componentDidMount() {
      const user = await UserService().getData();
      this.setState(() => ({
        loading: false,
        user,
      }));
    }

    render() {
      return (
        <BaseComponent loading={this.state.loading} user={this.state.user} />
      );
    }
  };
}
