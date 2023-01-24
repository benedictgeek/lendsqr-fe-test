import { render, fireEvent } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import MatchMediaMock from 'jest-matchmedia-mock';

import Users from "../pages/users/users";

const server = setupServer();
beforeAll(() => {
    new MatchMediaMock();
  });
 
beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  server.resetHandlers();
});


afterAll(() => server.close());

jest.mock("axios", () => jest.fn);

describe("Users page on the dashboard", () => {
  it("should render the login form", () => {
    server.use(
      rest.get(
        `"https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"`,
        (req, res, ctx) => {
          return res(
            ctx.json({
              data: [],
            })
          );
        }
      )
    );
    const { getByTestId } = render(<Users />);
    const pageTitle = getByTestId("usersPageTitle");
    expect(pageTitle).toBeInTheDocument();
  });

  //TODO: test the table and pagination
});
