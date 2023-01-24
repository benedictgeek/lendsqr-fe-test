import { render, fireEvent } from "@testing-library/react";
import Login from "../pages/login/login";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

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

  it("should not navigate if both email and password are not provided", () => {
    const navigate = jest.fn();
    const useNavigate = jest.spyOn(require("react-router-dom"), "useNavigate");
    useNavigate.mockImplementation(() => navigate);
    const { getByText } = render(<Login />);
    const loginButton = getByText("LOG IN");
    fireEvent.click(loginButton);
    expect(navigate).not.toBeCalled();
  });

  it("should navigate if both email and password are provided", () => {
    const navigate = jest.fn();
    const useNavigate = jest.spyOn(require("react-router-dom"), "useNavigate");
    useNavigate.mockImplementation(() => navigate);
    const { getByText, getByPlaceholderText } = render(<Login />);
    const loginButton = getByText("LOG IN");

    const email = "olushola251@gmail.com"
    const password = "asdfasdf"

    fireEvent.change(getByPlaceholderText("Email"), {
      target: { value: email },
    });

    fireEvent.change(getByPlaceholderText("Password"), {
      target: { value: password },
    });

    fireEvent.click(loginButton);

    expect(navigate).toBeCalledWith("/dashboard/users");
  });
});
