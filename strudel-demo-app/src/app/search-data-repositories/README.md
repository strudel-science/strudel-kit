# Use this Task Flow

Install the STRUDEL CLI tool:

```
pip install strudel-cli
```

Create a base app:

```
strudel create-app my-app
```

Go to the root directory of your new app:

```
cd my-app
```

Add the `search-data-repositories` task flow to your app:

```
strudel add-taskflow my-taskflow --template search-data-repositories
```

## Learn More

[Read more about the strudel-cli and learn advanced usage.](https://github.com/strudel-science/strudel-kit/tree/main/strudel-cli)