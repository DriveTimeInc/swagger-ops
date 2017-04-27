## Contributing

### Design Philosophy

This project has grown out of our need to design web APIs "top-down" using Swagger and then implement them with ExpressJs in Node.  Swagger Ops was our solution for ensuring that all URIs exist only in the `swagger.json` spec without requiring duplication when adding route handlers. Doing so facilitates the spec being the single source of truth for routes.

### What do I need to know to help?

If this is your first time contributing to an open source project, thanks for taking the time to make this project better!  We want your experience to be a positive one!  If you are interested in making a code contribution and would like to learn more about the technologies that we use, check out the list below.

* [ExpressJs](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [Swagger Specification](http://swagger.io/specification/) - A powerful definition format to describe RESTful APIs
* [Mocha](https://mochajs.org/) - The fun, simple, flexible JavaScript test framework.

### How do I make a contribution?

Never made an open source contribution before? Wondering how contributions work in the in our project? Here's a quick rundown!

1. Find an issue that you are interested in addressing or a feature that you would like to add.
1. Fork the repository associated with the issue to your local GitHub organization. This means that you will have a copy of the repository under your-GitHub-username/repository-name.
1. Clone the repository to your local machine using `git clone https://github.com/your-GitHub-username/swagger-ops.git`.
1. Create a new branch for your fix using `git checkout -b branch-name-here`.
1. Make the appropriate changes for the issue you are trying to address or the feature that you want to add.
1. Add tests for new code.  If you are submitting a bug fix, consider writing the test first.  A good test will fail until your finish writing the fix.
1. Use `git add insert-paths-of-changed-files-here` to add the file contents of the changed files to the "snapshot" git uses to manage the state of the project, also known as the index.
1. Use `git commit -m "Insert a short message of the changes made here"` to store the contents of the index with a descriptive message.
1. Push the changes to the remote repository using `git push origin branch-name-here`.
1. Submit a pull request to the upstream repository.
1. Title the pull request with a short description of the changes made and the issue or bug number associated with your change. For example, you can title an issue like so "Added more log outputting to resolve #4352".
1. In the description of the pull request, explain the changes that you made, any issues you think exist with the pull request you made, and any questions you have for the maintainer. It's OK if your pull request is not perfect (no pull request is), the reviewer will be able to help you fix any problems and improve it!
1. Wait for the pull request to be reviewed by a maintainer.
1. Make changes to the pull request if the reviewing maintainer recommends them.
1. Celebrate your success after your pull request is merged!