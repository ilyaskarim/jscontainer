exports.handleGoogleAuth = (passport, GoogleStrategy) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL:
          process.env.NODE_ENV === "local"
            ? "http://localhost:3000/auth/google/callback"
            : "http://jscontainer.com/auth/google/callback",
        passReqToCallback: true,
      },
      function (req, accessToken, refreshToken, profile, done) {
        req.login(profile, () => {
          return done(null, profile);
        });
      }
    )
  );
};

exports.handleGithubAuth = (passport, GitHubStrategy) => {
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/github/callback",
        passReqToCallback: true,
      },
      function (req, accessToken, refreshToken, profile, done) {
        req.login(profile, () => {
          return done(null, profile);
        });
      }
    )
  );
};
