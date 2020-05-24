import { GithubSocialbuttonStyle, GoogleSocialbuttonStyle, SocialButtonIcon, SocialButtonText } from "./SocialButtonsStyles";
export const GithubSocialButton = () => {
  return (
    <GoogleSocialbuttonStyle>
      <SocialButtonIcon className="mdi mdi-google"></SocialButtonIcon>
      <SocialButtonText>Sign in with Google</SocialButtonText>
    </GoogleSocialbuttonStyle>
  );
};

export const GoogleSocialbutton = () => {
  return (
    <GithubSocialbuttonStyle>
      <SocialButtonIcon className="mdi mdi-github"></SocialButtonIcon>
      <SocialButtonText>Sign in with GitHub</SocialButtonText>
    </GithubSocialbuttonStyle>
  );
};
