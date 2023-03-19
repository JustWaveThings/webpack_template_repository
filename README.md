# YAWTR -- Yet Another Webpack Template Repository

This is my *at the moment* working webpack template I am using on all my projects.  You are welcome to use it, I would definately fork the repo so you know you'll have a working version as I intend to change things as I need to, particularly when it comes to babel / polyfilling / shimming and some other ideas I have to take full advantage of webpack.

### How to Use

1. Fork template repo
2. Make a new repo from that forked template
3. Clone to environment
4. Run `npm install` in the repo's base directory
5. If you are in a local environment (your computer) run `npm run start` and that will bring up a working dev server with the image of 'Hello Webpack'. If this doesn't work, you are going to want to follow any error messages you see in the terminal output.
6. If your dev environment is in a container, run `npm run start dock` will let the container host the dev server on port 8080 on your local machine. This was only tested in Docker. And I use the term 'tested' very loosely.

If you are learning Webpack for the first time, I strongly recommend following the guides and get a Webpack project in a working state at least a time or two, by using the guides from webpack.org, then make that project a 'Template Repository' on GitHub. Then come back and follow the steps above.

I will share one last thing - If you are new to Webpack, once you start to use 'webpack-html-plugin',  you are not going to be manually creating any files or folders in the `/dist` folder like the Webpack guides have you do so in the beginning.
