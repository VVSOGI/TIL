import { ThunkAction } from "redux-thunk";
import { getUserProfileAsync, GithubActions } from ".";
import { RootState } from "..";
import { getUserProfile } from "../../api/github";

export function getUserProfileThunk(
  username: string
): ThunkAction<void, RootState, null, GithubActions> {
  return async (dispatch) => {
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
