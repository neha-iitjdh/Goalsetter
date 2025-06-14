import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
