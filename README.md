# Course website for CSCI 1230.

This website, like most Github Pages, uses [Jekyll](https://jekyllrb.com/) to generate HTML. You will need to install Jekyll on your own machine if you want to build and view the website locally.

The `cs123tas/demos` repository is included as a submodule, which makes its contents accessible on the web via the `/demos` directory. Everytime you update the demos repo, you need to do two things in order for those changes to be reflected on the web:
1) The submodule commit needs to be updated on the main page. To do this call `$> git submodule update --remote --merge demos`, then `$>git add demos`, then commit.
2) The main webpage needs to be rebuilt on the Github Pages sever. This will happen automatically after the submodule update commit is pushed. If for some reason you need to manually force a rebuild, run the follow command [(from here)](https://docs.github.com/en/rest/reference/repos#request-a-github-pages-build):
```
$> curl -u %USERNAME% -X POST -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/cs123tas/website/pages/builds
```

Credits: [JSPaint](https://github.com/1j01/jspaint)
