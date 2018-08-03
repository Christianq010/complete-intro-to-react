# A Complete Intro to React

Welcome to a complete intro to React! The site actual workshop material for this repo can be found [here][gh-page]. On the master branch you will find the completed project. On the start branch you will find the barebones boilerplater of the project designed to help you get started.

# Useful Lesson Content

### React Definition

### Configuring Babel

### Loading JSON Data

- Print out a JSON file objects in the component

```js
const Search = () => (
  <div className="search">
    <pre>
      <code> {JSON.stringify(preload, null, 4)} </code>
    </pre>
  </div>
);
```

## Contributing

Please contribute, file issues, and make PRs. More than anything I'm sure there are typos abounding.

## License

MIT

[gh-page]: http://btholt.github.io/complete-intro-to-react/
