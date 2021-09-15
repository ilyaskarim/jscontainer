exports.handleGoogleAuth = (passport, GoogleStrategy) => {
  console.log("doing google login request: ", process.env.NODE_ENV);
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
      async function (req, accessToken, refreshToken, profile, done) {
        let user = await req.models.User.findOne({
          where: {
            email: profile.emails[0].value,
          },
        });
        if (!user) {
          user = await req.models.User.create({
            email: profile.emails[0].value,
            name: profile.displayName,
            google_id: profile.id,
            google_displayName: profile.displayName,
            google_name: profile.displayName,
            google_email: profile.emails[0].value,
            google_photo: profile.photos[0].value,
            source: "google",
            last_login_trough: "google",
          });
        } else {
          await user.update({
            last_login_trough: "google",
          });
        }
        req.login(user, () => {
          return done(null, user);
        });
      }
    )
  );
};

exports.handleGithubAuth = (passport, GitHubStrategy) => {
  console.log("doing github login request: ", process.env.NODE_ENV);
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL:
          process.env.NODE_ENV === "local"
            ? "http://localhost:3000/auth/github/callback"
            : "http://jscontainer.com/auth/github/callback",
        scope: "user:email",
        passReqToCallback: true,
      },
      async function (req, accessToken, refreshToken, profile, done) {
        let user = await req.models.User.findOne({
          where: {
            email: profile.emails[0].value,
          },
        });
        if (!user) {
          user = await req.models.User.create({
            source: "github",
            email: profile.emails[0].value,
            name: profile.displayName,
            github_id: profile.id,
            github_nodeId: profile.nodeId,
            github_displayName: profile.displayName,
            github_username: profile.username,
            github_profileUrl: profile.profileUrl,
            github_login: profile._json.login,
            github_id: profile._json.id,
            github_node_id: profile._json.node_id,
            github_avatar_url: profile._json.avatar_url,
            github_gravatar_id: profile._json.gravatar_id,
            github_url: profile._json.url,
            github_html_url: profile._json.html_url,
            github_followers_url: profile._json.followers_url,
            github_following_url: profile._json.following_url,
            github_gists_url: profile._json.gists_url,
            github_starred_url: profile._json.starred_url,
            github_subscriptions_url: profile._json.subscriptions_url,
            github_organizations_url: profile._json.organizations_url,
            github_repos_url: profile._json.repos_url,
            github_events_url: profile._json.events_url,
            github_received_events_url: profile._json.received_events_url,
            github_type: profile._json.type,
            github_site_admin: profile._json.site_admin,
            github_name: profile._json.name,
            github_company: profile._json.company,
            github_blog: profile._json.blog,
            github_location: profile._json.location,
            github_email: profile._json.email,
            github_hireable: profile._json.hireable,
            github_bio: profile._json.bio,
            github_twitter_username: profile._json.twitter_username,
            github_public_repos: profile._json.public_repos,
            github_public_gists: profile._json.public_gists,
            github_followers: profile._json.followers,
            github_following: profile._json.following,
            github_created_at: profile._json.created_at,
            github_updated_at: profile._json.updated_at,
            github_photo: profile.photos[0].value,
            github_email: profile.emails[0].value,
            last_login_trough: "github",
          });
        } else {
          await user.update({
            last_login_trough: "github",
          });
        }
        req.login(user, () => {
          return done(null, user);
        });
      }
    )
  );
};
