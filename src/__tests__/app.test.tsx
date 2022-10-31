import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "../components/UI/forms/RegisterForm";
import { store } from "../redux";
import { createMemoryHistory } from "history";
import VideoPage from "../pages/VideoPage";

describe("render tests", () => {
  test("render elem", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByRole("reg-form")).toBeInTheDocument();
    expect(screen.getByText("Create account")).toBeInTheDocument();
  });

  test("input test", () => {
    const eventText = "misha@mail.com";

    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      </Provider>
    );

    const input = screen.getByTestId("email-input");
    expect(input).toBeInTheDocument();

    userEvent.type(input, eventText);
    const updatedInput = screen.getByDisplayValue(eventText);
    expect(updatedInput).toBeInTheDocument();
  });

  test("check navigate to login", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path={"/login"} element={<RegisterForm />} />
          </Routes>
          <VideoPage />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByTestId("video-wrapper")).toBeInTheDocument();
    const loginLink = screen.getByTestId("login-link");
    userEvent.click(loginLink);
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
  });

});
