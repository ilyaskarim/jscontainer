import { StyledLoginPageContainer, StyledLoginPageInput, StyledLoginPageSubmitButton, StyledLoginPageFormSocialSeparator, StyledLoginPageSocialButtonsContainer, StyledLoginPageForgetPasswordText, StyledLoginPageHeadingText, StyledLoginPageNewToAppText } from "./../src/styles/login.styles";
import { GoogleSocialbutton, GithubSocialButton } from "./../components/SocialButtons";

export default function () {
  return (
    <StyledLoginPageContainer>
      <StyledLoginPageHeadingText>Login to your account</StyledLoginPageHeadingText>
      <StyledLoginPageInput placeholder="Email"></StyledLoginPageInput>
      <StyledLoginPageInput placeholder="Password"></StyledLoginPageInput>
      <StyledLoginPageForgetPasswordText>Forget Password?</StyledLoginPageForgetPasswordText>
      <StyledLoginPageSubmitButton type="primary">Login</StyledLoginPageSubmitButton>
      <StyledLoginPageNewToAppText>
        New to JSContainer? <a href="/signup" >Signup</a>
      </StyledLoginPageNewToAppText>
      <StyledLoginPageFormSocialSeparator>Or</StyledLoginPageFormSocialSeparator>
      <StyledLoginPageSocialButtonsContainer>
        <GithubSocialButton></GithubSocialButton>
        <GoogleSocialbutton></GoogleSocialbutton>
      </StyledLoginPageSocialButtonsContainer>
    </StyledLoginPageContainer>
  );
}
