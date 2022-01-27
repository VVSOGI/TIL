import { ActionType } from "typesafe-actions";
import { GithubUserProfile } from "../../api/github";
import * as actions from "./actions";

export type GithubActions = ActionType<typeof actions>;

export type GithubState = {
  userProfile: {
    loading: boolean;
    error: Error | null;
    data: GithubUserProfile | null;
  };
};
