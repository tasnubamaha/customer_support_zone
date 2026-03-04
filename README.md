1. What is JSX, and why is it used?
Ans: JSX stands for JavaScript XML. It is a syntax extension for JavaScript. It is used for writing HTML-like markup inside a JavaScript file.

2. What is the difference between State and Props?
Ans: State refers to the internal data of a component that can change over time, while props are used to pass data between components. Props are read-only while State can change inside.

3. What is the useState hook, and how does it work?
Ans: useState hook is like a memory box for component. We can store a value in it and change it later. It provides two things- the current value and a function to change it. When we update it, React refreshes the screen automatically to show the new value.

4. How can you share state between components in React?
Ans: We can share it by lifting it up to the nearest common parent and passing it as props to child components. For many components, we can use React Context to share state without passing props everywhere. For large apps, external tools like Redux can manage state globally.

5. How is event handling done in React?
Ans: Event Handling in React is done by adding event attributes to elements, like onClick or onChange. We can assign a function to these attributes, which runs when the event happens. React uses camelCase for event names and passes a synthetic event object to the handler.
