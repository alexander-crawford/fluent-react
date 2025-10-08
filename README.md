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
# 3 The Virtual DOM 
# 4 Inside Reconciliation 
# 5 Common Questions and Powerful Patterns 
# 6 ServerSide React 
# 7 Concurrent React 
# 8 Frameworks 
# 9 React Server Components 
# 10 React Alternatives 
# 11 Conclusion 
