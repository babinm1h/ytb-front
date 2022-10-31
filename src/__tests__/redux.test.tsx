import { AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import { IFetchAllVideosResponse, VideosService } from "../API/videos.service";
import videosSlice from "../redux/slices/videos.slice";
import { fetchAllVideos } from "../redux/thunks/videos.thunks";
import { VideosActionTypes } from "../types/slices/videos.slice.types";
import { authStateMock, mockRegisterResponse, mockVideos, videosState } from "../mockedData";
import { AuthService, IAuthResponse } from "../API/auth.service";
import { IRegisterArgs } from "../types/args.types";
import { regisrate } from "../redux/thunks/auth.thunks";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux";
import { BrowserRouter } from "react-router-dom";
import RegisterForm from "../components/UI/forms/RegisterForm";
import { AuthActionTypes } from "../types/slices/auth.slice.types";
import authSlice from "../redux/slices/auth.slice";
import userEvent from "@testing-library/user-event";
import { act } from "@testing-library/react";

jest.mock(`../API/videos.service`);
jest.mock("../API/auth.service");

describe("fetch videos tests", () => {
  let videoApi: jest.Mocked<typeof VideosService>;

  beforeAll(() => {
    videoApi = VideosService as any;
  });

  afterAll(() => {
    jest.unmock(`../API/videos.service`);
  });

  describe("fetch videos", () => {
    let action: AsyncThunkAction<IFetchAllVideosResponse, number, {}>;
    let dispatch: Dispatch;
    let getState: () => void;
    let arg: number;
    let result: IFetchAllVideosResponse;

    beforeEach(() => {
      dispatch = jest.fn();
      getState = jest.fn();

      videoApi.fetchAll.mockClear();
      videoApi.fetchAll.mockResolvedValue(mockVideos);

      arg = 2;
      result = mockVideos;
      action = fetchAllVideos(arg);
    });

    test("fulfilled fetchAllVideos", async () => {
      expect(videoApi.fetchAll).toHaveBeenCalledTimes(0);
      const res = await action(dispatch, getState, undefined);
      expect(videoApi.fetchAll).toHaveBeenCalledTimes(1);

      expect(res.type).toBe(VideosActionTypes.fetch_all + "/fulfilled");
      expect((res.payload as IFetchAllVideosResponse).totalCount).toBe(result.totalCount);
    });

    test("videos slice", () => {
      const slice = videosSlice(videosState, fetchAllVideos.fulfilled(result, "", arg));
      expect(slice.videos).toHaveLength(mockVideos.videos.length);
      expect(slice.totalCount).toEqual(mockVideos.totalCount);
      expect(slice.videos[0]._id).toBe(result.videos[0]._id);
    });
  });
});

describe("registration form tests", () => {
  let mockedAuthService: jest.Mocked<typeof AuthService>;

  beforeAll(() => {
    mockedAuthService = AuthService as any;
  });

  afterAll(() => {
    jest.unmock("../API/auth.service");
  });

  describe("authService registration test", () => {
    let mockedAction: AsyncThunkAction<IAuthResponse, IRegisterArgs, {}>;
    let mockedDispatch: Dispatch;
    let arg: IRegisterArgs;
    let result: IAuthResponse;
    let mockedGetState: () => void;

    beforeAll(() => {
      mockedDispatch = jest.fn();
      mockedGetState = jest.fn();

      mockedAuthService.register.mockClear();
      mockedAuthService.register.mockResolvedValue(mockRegisterResponse);
      arg = { email: "test@gmail.com", name: "m1sha", password: "777999" };
      result = mockRegisterResponse;
      mockedAction = regisrate(arg);
    });

    test("registration form submit", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      const evt = () => {
        fireEvent.change(screen.getByTestId("email-input"), { target: { value: "middle@mail.ru" } });
        fireEvent.change(screen.getByTestId("name-input"), { target: { value: "middle@mail.ru" } });
      };

      await act(async () => {
        evt();
      });

      const form = screen.getByRole("reg-form");
      expect(form).toBeInTheDocument();

      const btn = screen.getByRole("reg-submit-btn");
      expect(btn).toBeInTheDocument();

      const onSubmit = jest.fn();
      form.onsubmit = onSubmit;
      btn.onsubmit = onSubmit;

      expect(onSubmit).toHaveBeenCalledTimes(0);
      fireEvent.submit(form);
      expect(onSubmit).toHaveBeenCalledTimes(1);

      fireEvent.click(btn);
      expect(onSubmit).toHaveBeenCalledTimes(2);
    });

    test("registration thunk called", async () => {
      expect(mockedAuthService.register).toHaveBeenCalledTimes(0);
      await mockedAction(mockedDispatch, mockedGetState, undefined);
      expect(mockedAuthService.register).toHaveBeenCalledTimes(1);
      expect(mockedAuthService.register).toHaveBeenCalledWith(arg);
    });

    test("auth slice test", () => {
      const slice = authSlice(authStateMock, regisrate.fulfilled(result, "", arg));
      expect(slice.registerError).toBe("");
      expect(slice.user?.email).toBe(result.user.email);
    });
  });
});
