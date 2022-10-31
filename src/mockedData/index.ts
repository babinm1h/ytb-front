import { IAuthResponse } from "../API/auth.service";
import { IFetchAllVideosResponse } from "../API/videos.service";
import { IUser } from "../types/models/user.types";
import { IAuthState } from "../types/slices/auth.slice.types";
import { IVideosState } from "../types/slices/videos.slice.types";

export const mockVideos: IFetchAllVideosResponse = {
  videos: [
    {
      _id: "1",
      commentsCount: 27,
      createdAt: "",
      description: "test1",
      dislikes: [],
      isPublic: true,
      likes: [],
      likesCount: 7779,
      preview: "",
      subscribersCount: 127999,
      title: "video test",
      user: {} as IUser,
      video: "",
      views: 479000,
    },
    {
      _id: "2",
      commentsCount: 47,
      createdAt: "",
      description: "test1",
      dislikes: [],
      isPublic: true,
      likes: [],
      likesCount: 13134,
      preview: "",
      subscribersCount: 1217999,
      title: "test2",
      user: {} as IUser,
      video: "",
      views: 71110,
    },
  ],
  totalCount: 2,
};

export const videosState: IVideosState = {
  isLoading: true,
  videos: [],
  popularVideos: [],
  popularUsers: [],
  isUsersLoading: true,
  isSearching: false,
  searchedVideos: [],
  createPending: false,
  createSuccess: false,
  currentPage: 1,
  totalCount: 0,
};

export const mockRegisterResponse: IAuthResponse = {
  token: "777",
  user: { email: "test@mail.com", name: "m1sha", _id: "999" } as IUser,
};

export const authStateMock: IAuthState = {
  isInitializing: true,
  isProccessing: false,
  loginError: '',
  registerError: '',
  user: null,
  isSubscribing: false,
  updatePending: false,
  updateSuccess: false
}