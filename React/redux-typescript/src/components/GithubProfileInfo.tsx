import React from "react";
import styled from "styled-components";

type GithubProfileInfoProps = {
  name: string;
  thumbnail: string;
  bio: string;
  blog: string;
};

const GithubProfileContainer = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const GithubProfileHead = styled.div`
  display: flex;
  align-items: center;
  img {
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 32px;
    margin-right: 1rem;
  }
`;

const GithubProfileName = styled.div`
  font-weight: bold;
`;

const GithubProfileInfo: React.FC<GithubProfileInfoProps> = ({
  name,
  thumbnail,
  bio,
  blog,
}) => {
  return (
    <GithubProfileContainer>
      <GithubProfileHead>
        <img src={thumbnail} alt="user thumbnail" />
        <GithubProfileName>{name}</GithubProfileName>
      </GithubProfileHead>
      <p>{bio}</p>
      <div>{blog !== "" && <a href={blog}>website</a>}</div>
    </GithubProfileContainer>
  );
};

export default GithubProfileInfo;
