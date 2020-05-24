import { StyledLoginPageContainer } from "./../src/styles/login.styles";
import {
  GoogleSocialbutton,
  GithubSocialButton
} from "./../components/SocialButtons"

import { Input, Button } from "antd";
export default function () {
  return (
    <StyledLoginPageContainer>
      <h1>Login</h1>
      <Input placeholder="Email"></Input>
      <Input placeholder="Password"></Input>
      <Button>Login</Button>
      <GithubSocialButton></GithubSocialButton>
      <GoogleSocialbutton></GoogleSocialbutton>
    </StyledLoginPageContainer>
  );
}
