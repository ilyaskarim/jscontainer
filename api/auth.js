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
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/github/callback",
        scope: "user:email",
        passReqToCallback: true,
      },
      function (req, accessToken, refreshToken, profile, done) {
        let user = req.user.findOne({
          where: {
            email: profile.email,
          },
        });
        if (!user) {
          user.create({
            github_id: profile.id,
            github_nodeId: profile.nodeId,
            github_displayName: profile.displayName,
            github_username: profile.username,
            github_profileUrl: profile.profileUrl,
            github_login: profile.json.login,
            github_id: profile.json.id,
            github_node_id: profile.json.node_id,
            github_avatar_url: profile.json.avatar_url,
            github_gravatar_id: profile.json.gravatar_id,
            github_url: profile.json.url,
            github_html_url: profile.json.html_url,
            github_followers_url: profile.json.followers_url,
            github_following_url: profile.json.following_url,
            github_gists_url: profile.json.gists_url,
            github_starred_url: profile.json.starred_url,
            github_subscriptions_url: profile.json.subscriptions_url,
            github_organizations_url: profile.json.organizations_url,
            github_repos_url: profile.json.repos_url,
            github_events_url: profile.json.events_url,
            github_received_events_url: profile.json.received_events_url,
            github_type: profile.json.type,
            github_site_admin: profile.json.site_admin,
            github_name: profile.json.name,
            github_company: profile.json.company,
            github_blog: profile.json.blog,
            github_location: profile.json.location,
            github_email: profile.json.email,
            github_hireable: profile.json.hireable,
            github_bio: profile.json.bio,
            github_twitter_username: profile.json.twitter_username,
            github_public_repos: profile.json.public_repos,
            github_public_gists: profile.json.public_gists,
            github_followers: profile.json.followers,
            github_following: profile.json.following,
            github_created_at: profile.json.created_at,
            github_updated_at: profile.json.updated_at,
          });
        }
        req.login(profile, () => {
          return done(null, profile);
        });
      }
    )
  );
};
