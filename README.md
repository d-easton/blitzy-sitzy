# blitzy-sitzy
Digital version of Sam Easton's Blitzy-Sitzy board game. Built with React

## Todo:
- [ ] Structure and style nation board with subcomponents (track, display info, action buttons)
- [X] Complete setup of Redux infrastructure
- [ ] Implement game setup to select # players and which nations are active
- [ ] Populate track with unique text
- [ ] Add effect (e.g. land on space, roll die) functionality
- [ ] Map effect functionality to cards and rolls
- [X] Implement pawns
- [ ] Set victory and endgame conditions
- [ ] Add turn-based click restrictions 

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

#### State Lifting
We now know how props allow us to pass information and event signals up and down a parent-child relationship. But how can information be passed from two sibling components? For example, what if we wanted to block a certain streamer? We could start by adding a block button next to the streamer's account name in the Stream component. With a `handleBlock()` function written at the level of the `DisplayTable`, we could remove all Streams from the blocked account from the top streams table. The desired effect has flowed up from the first `Stream` that saw the block event to the parent `DisplayTable`, and then back down to that first `Stream` and all other `Streams` that have a common streamer. It seems we have accomplished sibling to sibling transfer by route of a parent.

What happens, however, when we want that information to persist? Say we search a game like Fortnite using the `Search` component, which is parallel to `DisplayTable`. The search feature will reload the `DisplayTable` with all new information -- instead of all top streams, the table will display top streams of the given game. But while it's fine for `DisplayTable` to forget its previous streams, we want to remember the names of all blocked streamers. This pieces of state needs to be "lifted" from the place we first though would be most appropriate to `App`, the parent component that renders the `DisplayTable` component. State lifting is relatively common in React, especially when stateful information must be accessed or modified by two different features.

If state sounds complicated, don't worry, it is. We'll be using Redux to simplify the prop and state flow pattern a bit.

#### Learn More
The React website offers a [tutorial](https://reactjs.org/tutorial/tutorial.html) for beginners and has great reference [docs](https://reactjs.org/docs/getting-started.html). for Here's another [guide](https://www.taniarascia.com/getting-started-with-react/) that does a decent job of explaining React in a narrative style.

## About Redux
Redux is a state management tool that can be used with React. It uses abstraction to simplify the complex state and handler passing that is common with React components. In Redux, state is taken out of all components and managed by a distinct entity called `store`. Components can freely interact with store, modifiying chunks of state or accessing whatever information they need. Treating state like an API has clear conceptual advantages, but comes with the cost of a lot of boilerplate code, many additional files and jargon-heavy terms. Using Redux in a relatively small-scale app like this is arguably overkill, but Redux is widely used and a helpful tool when applications need to scale up. Adding it to our project will provide you with useful exposure and a bit of practice with employing abstraction in your code.

#### Redux Keywords
Redux has some dense terminology. Here are the important concepts to know:
- **Store:** This is the centralized storage of all state. State is encoded as an JSON tree. Conceptually, you can selectively access and modify different parts of the store object tree just as you might access or modify state in a React component.
- **Actions:** Actions are instructions of how you want to modify state. You could define an action to `INCREMENT_COUNTER` or to `CHANGE_BOARD_POSITION` based on a die roll. We can't directly change state the way we do in standard React -- this process is abstracted into several steps, with an action being the first.
- **Reducers:** A reducer is a special function that is responsible for the dirty work of handling state. Our components send actions to the reducer functions, which contain code that tells them how to translate a given action into an interaction with state. Reducers are the intermediary step between components and state.
- **Dispatch:** To change the internal state inside store, components must send -- or *dispatch* an action to a reducer. `dispatch()` is a method belonging to `store` which takes actions as arguments.

All together, the syntax looks something like this `store.dispatch( {INCREMENT_COUNTER} )`

#### Redux Files
I've grouped our Redux files in the directory `src/state/`.  Within that directory, the above concepts are sorted into self-titled directories. The only new addition is `constants` which defines our catalog of actions as `const` variables rather than strings, so that VS Code can help us catch typos. 

Checkout the actions I have created so far and remind yourself that actions are how we manage state (the information that will change as our game is played). Can you make a list of what other actions we should create?

#### Learn More
- Redux offers a [guide](https://redux.js.org/introduction/getting-started) that explains some of the mechanics. The code snippets on that page show the above items in action together. The Redux site also has great reference docs, but beginners may find them a bit confusing. For a more detailed conceptual walkthrough, you might want to check out this [video](https://www.youtube.com/watch?v=CVpUuw9XSjY)

