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
# 4 Inside Reconciliation 
# 5 Common Questions and Powerful Patterns 
# 6 ServerSide React 
# 7 Concurrent React 
# 8 Frameworks 
# 9 React Server Components 
# 10 React Alternatives 
# 11 Conclusion 
