# 1 The EntryLevel Stuff 

**Debouncing**
> Delay a functions execution until after a set time has passed since the last event trigger 

**Throttling**
> Limits a function to running at most once every set time interval.

## UI components 
- Like a function 
- They receive input (props)
- Return output based on those inputs (elements)

## Model-View-Controller (MVC) pattern
- Model > Data and logic
- View > Display
- Controller > Input handling and coordination, bridge between the two
- Used by Backbone

## Model-View-ViewModel (MVVM) pattern
- Model > Data and logic
- View > Display
- ViewModel > Binds directly to the view, bridge between the two
- Used by KnockoutJS

## AngularJS pivotal features
-  Two-way data binding 
    - Changes in the model result in changes in the view and vice versa
- Modular architecture 
    - Logically separate application components 
    - Each component is added to the main app via dependency injection
- Dependency injection 
    - Object receives dependencies instead of creating them

> [React debugger](https://www.replay.io/)

## React's value
- Declarative versus imperative code
    - React makes use of declarative not imperative code (what not how)
- The virtual DOM
    - Real DOM representation as a JavaScript object
- The component model 
    - Think in components, think in smaller pieces and add them together 
- Immutable state
    - Always return new data when updating

## The Flux architecture 
| Concept    | Description                            |
| ---        | ---                                    |
| Action     | Describes what happened                |
| Dispatcher | Sends actions to stores                |
| Store      | Holds and updates the state            |
| View       | Displays data and triggers new actions |

# 2 JSX 

`JavaScript Syntax eXtension` or `JavaScript XML`

## Benefits of JSX
- Easier to read and write
- Improved security, JSX can be compiled into safer JavaScript code
- Strong typing, JSX can be expressed using TypeScript
- Encourages component based architecture 
- Widely used

## Drawbacks of JSX
- Learning curve
- Requires tooling, JSX must be compiled into JavaScript before it can be executed
- Mixing concerns, harder to separate presentation from logic
- Partial JavaScript compatibility, supports inline expressions but not inline blocks

## Runtimes 
- Runtimes give JavaScript context like windowm document and global for Node
- Example runtimes
    - Google Chrome, Chromium runtime
    - Node.js, v8 engine 
    - Workers, Cloudflare
    - Bun 
    - Deno

## Extending JavaScript syntax with JSX
- JSX > *transpile* > JavaScript > *compiled* > Machine code
- JXK is transpiled into JavaScript first using a preprocessor.

## THe JSK Pragma
- `>` tells the complier which JavaScript function replaces JSX syntax
- `<div>Hello</div>`
- becomes
- `React.createElement("div", null, "Hello")`

## Expressions 
- Everything inside curly braces will be executed as an expression

```
    const a = 1;
    const b = 1;
    <h2>The total is {a+b}</h2>
```

# 3 The Virtual DOM 

**Reconciliation**
> The process of matching changes in the real DOM to match the virtual DOM

## The real DOM

- `document.querySelector` 
    - Has to search the entire document
    - Can be time consuming when the document is large and complicated
    - The selector itself could be complicated to evaluate

- `document.getElementById`
    - Often more efficient than `document.querySelector` 
    - IDs are expected to be unique

### Pitfalls of the real DOM

**Layout trashing**
> Repeated and unnecessary recalculations of a layout

- Performance 
    - Reading a DOM element's `offsetWidth` property can trigger a recalculation of the layout
    - `offsetWidth` is a computed value that depends on the layout of the element and its ancestors 
    - Batching read and writes to layout properties in a function can increase performance 
    - When accessing layout properties try to retrieve as much information as you need in one go
    - Calling `appendChild` on a list element results in the whole list being redrawn
- Cross-browser compatibility 
    - `SyntheticEvent` is a wrapper for the browsers native events
    - Certain events might not be available on certain elements, React listens for events at the root level
    - `SyntheticEvent` normalises events across different input elements 
    - React still has access to native browser events via `event.native`

### Document fragments 

- Lightweight container that holds DOM nodes
- Make multiple changes to the fragment before appending it to the DOM
- The updates from the fragment to the DOM are then batched
- Avoids style recalculation and script executions 

## How the virtual DOM works

### React elements

Create a react element

``` JavaScript
    element = React.createElement(
        'div', 
        { className : "my-class"},
        "Hello, world!"
    );
```

A React object has several properties 

- `$$typeof` 
    - Ensure that the object is a valid react element 
- `type` 
    - String
        - Represents a HTML tag time, 'div', 'span', etc ..
    - Function
        - Represents a custom React component 
        - Props are passed to the component 
- `props` 
    - List of all the attributes and props that were passed to the component
- `_owner` 
    - Used to determine which component created this element
    - Only accessible in non production builds of React
- `_store` 
    - Store additional element information
    - `_source` which shows the file and line number where the component was created can be used for debugging
 
 > Both `_store` and `_owner`  are internal implementation details and are not apart of the public API

Example of a React element with a custom component type 

``` JavaScript
    const MyComponent = (props) => {
        return <div>{props.text)</div>
    }

    const myElement = <MyComponent text="Hello" />;
```

The property type of `myElemenet` would be MyComponent 

### Virtual DOM versus the real DOM
- Both react and the real DOM have a `createElement` function
- The React function creates new virtual element in memory as does the real DOM's function
- When a new component is rendered a new virtual DOM tree is created 
- React then compares the new and old virtual DOM trees in order to work out the updates to apply to the real DOM
- Virtual elements created by the real DOM's function have to be manually appended to the DOM

### Efficient Updates
- A new tree of React elements is created when a React component's state or prop changes
- React's diffing algorithm then finds the differences between the new and old tree
- The minimum number of updates are then applied to the real DOM to that it matches the new React tree

**Unnecessary re-renders**
> When a component's state changes, React re-renders the component and all of its descendants

# 4 Inside Reconciliation 
# 5 Common Questions and Powerful Patterns 
# 6 ServerSide React 
# 7 Concurrent React 
# 8 Frameworks 
# 9 React Server Components 
# 10 React Alternatives 
# 11 Conclusion 
