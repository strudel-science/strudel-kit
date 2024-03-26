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

Add the task flow to your app:

```
strudel add-taskflow my-search-data-repositories-tf --template csearch-data-repositories
```

Accept the default options or create a configuration file for your Task Flow.

```
strudel add-taskflow --config my-config.json
```

### [How to Configure this Task Flow](https://github.com/strudel-science/strudel-kit/blob/main/docs/task-flows/search-data-repositories/config.md)

## Learn More

[Read more about the strudel-cli and learn advanced usage.](https://github.com/strudel-science/strudel-kit/tree/main/docs)