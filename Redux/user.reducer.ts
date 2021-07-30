import { createSlice } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";

export interface iUserState {
  user: {
    name?: string | null;
    email?: string | null;
    password?: string | null;
    is_activated?: string | null;
    color_theme?: string | null;
    github_login?: string | null;
    github_id?: number | null;
    github_node_id?: string | null;
    github_avatar_url?: string | null;
    github_gravatar_id?: string | null;
    github_url?: string | null;
    github_html_url?: string | null;
    github_followers_url?: string | null;
    github_following_url?: string | null;
    github_gists_url?: string | null;
    github_starred_url?: string | null;
    github_subscriptions_url?: string | null;
    github_organizations_url?: string | null;
    github_repos_url?: string | null;
    github_events_url?: string | null;
    github_received_events_url?: string | null;
    github_type?: string | null;
    github_site_admin?: false | null;
    github_name?: string | null;
    github_company?: string | null;
    github_blog?: string | null;
    github_location?: string | null;
    github_email?: null | null;
    github_hireable?: null | null;
    github_bio?: string | null;
    github_twitter_username?: null | null;
    github_public_repos?: number | null;
    github_public_gists?: number | null;
    github_followers?: number | null;
    github_following?: number | null;
    github_created_at?: string | null;
    github_updated_at?: string | null;

    google_id?: string | null;
    google_displayName?: string | null;
    google_name?: string | null;
    google_email?: string | null;
    google_photo?: string | null;

    source?: string | null;
  };
  isAuthenticated: Boolean | null;
}

const initialState: iUserState = {
  isAuthenticated: false,
  user: {
    name: "",
    email: "",
    password: "",
    is_activated: "",
    color_theme: "",
    github_login: "",
    github_id: null,
    github_node_id: "",
    github_avatar_url: "",
    github_gravatar_id: "",
    github_url: "",
    github_html_url: "",
    github_followers_url: "",
    github_following_url: "",
    github_gists_url: "",
    github_starred_url: "",
    github_subscriptions_url: "",
    github_organizations_url: "",
    github_repos_url: "",
    github_events_url: "",
    github_received_events_url: "",
    github_type: "",
    github_site_admin: false,
    github_name: "",
    github_company: "",
    github_blog: "",
    github_location: "",
    github_email: null,
    github_hireable: null,
    github_bio: "",
    github_twitter_username: null,
    github_public_repos: null,
    github_public_gists: null,
    github_followers: null,
    github_following: null,
    github_created_at: "",
    github_updated_at: "",

    google_id: "",
    google_displayName: "",
    google_name: "",
    google_email: "",
    google_photo: "",

    source: "",
  },
};

export const userslice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});

export const { setCurrentUser } = userslice.actions;

export const getCurrentUser = (state: any) => {
  return state.user.user;
};

export const getIsAuthenticated = (state: any) => {
  return state.user.isAuthenticated;
};

export default userslice.reducer;
