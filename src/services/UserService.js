export function UserService() {
  function getData() {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve({
          name: "john doe",
          role: "user",
          address: {
            street: "Some Street",
            exteriorNumber: "101",
          },
        });
        // reject(new Error("could not load user data"));
      }, 1500);
    });
  }

  return { getData };
}
