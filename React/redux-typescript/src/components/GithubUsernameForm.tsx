import React, { useState } from "react";
import styled from "styled-components";

const GithubUserForm = styled.form`
  width: 400px;
  display: flex;
  align-items: center;
  height: 32px;
  margin: 0 auto;
  margin-top: 16px;
  margin-bottom: 48px;
`;

const GithubUserInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  font-size: 21px;
  height: 100%;
  margin-right: 1rem;
`;

const GithubUserBtn = styled.button`
  background: black;
  color: white;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;
  height: 100%;
  font-weight: bold;
  :hover {
    background: #495057;
  }
`;

type GithubUsernameFormProps = {
  onSubmitUsername: (username: string) => void;
};

const GithubUsernameForm: React.FC<GithubUsernameFormProps> = ({
  onSubmitUsername,
}) => {
  const [input, setInput] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitUsername(input);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <GithubUserForm onSubmit={onSubmit}>
      <GithubUserInput
        onChange={onChange}
        value={input}
        placeholder="Input your Github ID"
      />
      <GithubUserBtn type="submit">FIND</GithubUserBtn>
    </GithubUserForm>
  );
};

export default GithubUsernameForm;
