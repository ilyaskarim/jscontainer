import { GithubSocialbuttonStyle, GoogleSocialbuttonStyle } from "./SocialButtonsStyles";
export const GithubSocialButton = () => {
  return (
    <GoogleSocialbuttonStyle>
      <span class="mdi mdi-google"></span>Sign in with Google
    </GoogleSocialbuttonStyle>
  );
};

export const GoogleSocialbutton = () => {
  return (
    <GithubSocialbuttonStyle>
      <span class="mdi mdi-github"></span> Sign in with GitHub
    </GithubSocialbuttonStyle>
  );
};
