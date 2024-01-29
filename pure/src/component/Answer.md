Which out of the two components (which are performing the same functionality) is performing better and how?

In SimpleCounterComponent.jsx ,We have use Simple Component : When we click the counter when toggle is false then it will print "This is Simple Component" but as the toggle is false , it will not change the counter but as the whole document is re-rendered it will print in console.

In PureCounterComponent.jsx,We have use Pure Component : When we click the counter when toggle is false then it will  not print "This is Pure Component" as the toggle is false and it will not re-rendered the whole document as the state of counter is not changed.

In conclusion, Pure Component has better performance as it only re-render when the state changes from initial state.
