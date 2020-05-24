import { StyledLoginPageContainer, StyledLoginPageInput, StyledLoginPageSubmitButton, StyledLoginPageFormSocialSeparator,StyledLoginPageSocialButtonsContainer } from "./../src/styles/login.styles";
import { GoogleSocialbutton, GithubSocialButton } from "./../components/SocialButtons";

import { Input, Button } from "antd";
export default function () {
  return (
    <StyledLoginPageContainer>
      <h1>Login</h1>
      <StyledLoginPageInput placeholder="Email"></StyledLoginPageInput>
      <StyledLoginPageInput placeholder="Password"></StyledLoginPageInput>
      <StyledLoginPageSubmitButton>Login</StyledLoginPageSubmitButton>
      <StyledLoginPageFormSocialSeparator>Or</StyledLoginPageFormSocialSeparator>
      <StyledLoginPageSocialButtonsContainer>
        <GithubSocialButton></GithubSocialButton>
        <GoogleSocialbutton></GoogleSocialbutton>
      </StyledLoginPageSocialButtonsContainer>
    </StyledLoginPageContainer>
  );
}
