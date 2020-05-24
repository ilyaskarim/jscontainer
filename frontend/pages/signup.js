import { StyledLoginPageContainer, StyledLoginPageInput, StyledLoginPageSubmitButton, StyledLoginPageFormSocialSeparator, StyledLoginPageSocialButtonsContainer, StyledLoginPageForgetPasswordText, StyledLoginPageHeadingText, StyledLoginPageNewToAppText } from "./../src/styles/login.styles";
import { GoogleSocialbutton, GithubSocialButton } from "./../components/SocialButtons";

export default function () {
  return (
    <StyledLoginPageContainer>
      <StyledLoginPageHeadingText>Create a new account</StyledLoginPageHeadingText>
      <StyledLoginPageInput placeholder="Email"></StyledLoginPageInput>
      <StyledLoginPageInput placeholder="Password"></StyledLoginPageInput>
      <StyledLoginPageInput placeholder="Confirm Password"></StyledLoginPageInput>
      <StyledLoginPageSubmitButton type="primary">Signup</StyledLoginPageSubmitButton>
      <StyledLoginPageNewToAppText>
        Already have an account? <a href="/login" >Login</a>
      </StyledLoginPageNewToAppText>
      <StyledLoginPageFormSocialSeparator>Or</StyledLoginPageFormSocialSeparator>
      <StyledLoginPageSocialButtonsContainer>
        <GithubSocialButton></GithubSocialButton>
        <GoogleSocialbutton></GoogleSocialbutton>
      </StyledLoginPageSocialButtonsContainer>
    </StyledLoginPageContainer>
  );
}
