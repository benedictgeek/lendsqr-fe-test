import { render } from "@testing-library/react";
import Login from "../pages/login/login";

describe("Login page", () => {
  it("should render the login form", () => {
    const { getByText, getByPlaceholderText } = render(<Login />);
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");
    const loginButton = getByText("LOG IN");
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
});
