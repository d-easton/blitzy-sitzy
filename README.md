# blitzy-sitzy
Digital version of Sam Easton's Blitzy-Sitzy board game. Built with React

## Setup Instructions for Sam
1. After cloning this repo to your local machine, navigate into the blitzy-sitzy directory using the `cd` command.
2. Type the following command to execute a script that will install node.js, npm, and configure your git setting:
    1. This command requires two parameters -- the first is your github username, the second your github account    
    `./setup {username} {email}`
3. Type y when prompted and follow along watching for errors. This should take a couple minutes.
4. Once npm and node.js have been successfully installed, run `npm install` to build a local version of the blitzy-sitzy react app.

## About React
### What is React?
React is a JavaScript [library](https://www.quora.com/What-is-a-development-framework) created by Facebook. In simplest terms, it's a way to write JavaScript code that spits out HTML. Due to it's versatility, it's widely used to create front-end UIs and web apps. Facebook also publishes React Native, an open-source framework that allows users to develop mobile applications with React and deploy them to iOS, Android, and other platforms (we'll be sticking with React alone for this project though).

 React is very flexible when it comes to file structure, so it's important you use the same coding practices as your team members; React workflow can get confusing quickly so it's critical that everyone stays on the same page. Despite it's occasional complexity, React is currently one of the most popular JavaScript libraries. It's a great skill to learn!

### How does it work?
#### Components
The basic building block of React is the component, a function or object that operates like a reusable and customizable HTML element. You can break a more complicated web app into specific features by using components -- for example, my [Twitch Dashboard app](twitchdashboard.surge.sh) uses a componenet for the search feature, a component for the table of all streams, and a component for each individual stream. Components often have subcomponents too. 

To standardize our code, we'll give each of our main components their own directory within the `src/components` folder. We'll put the component in a `.js` file that has the same name as the component. Note that the directories and filenames have lowercase letters while the componenets themselves have uppercase names -- we use an initial uppercase letter on our custom components to distinguisth them from standard HTML tags (e.g. HTML element `<h1></h1>` and React element `<Header></Header>`). 

How might we use components to represent the parts of the game board? Do we need to use child components within higher-level components? 

#### Props and State
Props and State are critical concepts when understanding how React works. State refers to all the information that is dynamic within the app. Changes may occur due to user interaction (like rolling a die to move in this game) or due to fetched API results (the current top streams found by querying Twitch in the dashboard example) as the result of code logic (update a menu app to hide lunch and instead show dinner offerings based on time). 

It's important to know that **in standard React, State resides within a component.** Think about the dashboard example. We have a `DisplayTable` component that renders a table of the top 10 streams on the homepage. Each item in that `DisplayTable` is a `Stream` component. When we load the app, one component needs to be responsible for fetching the top ten streams. Let's assign the responsibilty for managing this state information to our `DisplayTable` component. As it creates its list of Stream components, it can pull information about a given active stream out of its state storage and pass it as an argument to the children Stream component will represents and display this information. This "passed-down" information that flows from a parent component to a child is called a **prop**. Props are very important in React, but **they can only be passed in one direction: from parent components to children.**

Can you think of what might be stateful information for this game? In what component should that information reside? Should it be passed to any subordinate components? 

#### Passing Information Against the Flow: Handler Functions
Let's say we want to add an interactive feature in a child component that allows it to change the stateful information managed by a parent component. In the dashboard example, this might be a favorite button for each Stream component in the DisplayTable. The favorite button needs to specific to each Stream component. However, we now run into a problem: due to the one-directional flow of props, the stream component can't communicate with its parent! How do we solve this? 

Let's say the logic that toggles whether a `Stream` is favorited or not exists as a function called `handleFavorite()` in the `Stream` component. `handleFavorite()` will fire whenever the `Stream`'s favorite button experiences a click event. We also know that the Stream component recieved a piece of information describing it's index value within the DiplayTable list as a prop. If we write `handleFavorite()` to return this list index value, we can "lift" that function up to the parent `DisplayTable` component. Every child `Stream` generated by the `DisplayTable` will receive a reusable copy of the `handleFavorite()` function. When a `Stream` component recognizes a click event trigger, it execute the `handleFavorite()` code with its specific index value -- but that code now exists at the level of the parent component! The parent level is also responsible for state management, meaning that the `handleFavorite()` function can successfully change state in place.

## About Redux
Redux is a state management tool that can be used with React. It simplifies complex state and handler passing that is common with React components,
but comes with the cost of a lot of boilerplate code, many additional files and jargon-heavy terms.

- Why use Redux?
    - In React, information can only flow "downstream." This means t