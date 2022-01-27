import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GithubProfileInfo from "../components/GithubProfileInfo";
import GithubUsernameForm from "../components/GithubUsernameForm";
import { RootState } from "../modules";
import { getUserProfileThunk } from "../modules/github";

const GithubProfileLoader = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.github.userProfile
  );
  const dispatch = useDispatch();
  console.log(data);

  const onSubmitUsername = (username: string) => {
    dispatch(getUserProfileThunk(username));
  };

  return (
    <>
      <GithubUsernameForm onSubmitUsername={onSubmitUsername} />
      {loading && <p>loading...</p>}
      {error && <p>error!</p>}
      {data && (
        <GithubProfileInfo
          bio={data.bio}
          blog={data.blog}
          name={data.name}
          thumbnail={data.avatar_url}
        />
      )}
    </>
  );
};

export default GithubProfileLoader;
