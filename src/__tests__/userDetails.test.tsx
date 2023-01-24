import {
  render,
  fireEvent,
  waitFor,
  getByTestId,
} from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import MatchMediaMock from "jest-matchmedia-mock";
import UserDetails from "../pages/userDetails/userDetails";

const server = setupServer();
beforeAll(() => {
  new MatchMediaMock();
});

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  server.resetHandlers();
  localStorage.clear();
});

afterAll(() => server.close());

jest.mock("axios", () => jest.fn);

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

const mockRouterAndApiCall = (
  userId: string | number,
  apiResponseObject: { [key: string]: any }
) => {
  const useParams = jest.spyOn(require("react-router-dom"), "useParams");
  useParams.mockImplementation(() => ({
    id: userId,
  }));

  server.use(
    rest.get(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`,
      (req, res, ctx) => {
        return res(
          ctx.json({
            data: apiResponseObject,
          })
        );
      }
    )
  );
};

describe("User details page", () => {
  it("should render user details page", () => {
    const userId = 2;

    mockRouterAndApiCall(userId, {});

    const useParams = jest.spyOn(require("react-router-dom"), "useParams");
    useParams.mockImplementation(() => ({
      id: userId,
    }));

    const { getByTestId } = render(<UserDetails />);
    const pageTitle = getByTestId("userDetailsHeader");
    const additionalInfo = getByTestId("additionalInfo");
    const userSummary = getByTestId("userSummary");
    expect(pageTitle).toBeInTheDocument();
    expect(additionalInfo).toBeInTheDocument();
    expect(userSummary).toBeInTheDocument();
  });
});
