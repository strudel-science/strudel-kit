# STRUDEL Command-Line Interface (Beta)

The strudel-cli is a command-line tool for bootstrapping web applications based on the [STRUDEL Design System](https://strudel.science/). 

- [Installation](https://strudel.science/strudel-kit/docs/getting-started/installation)
- [First Steps](https://strudel.science/strudel-kit/docs/getting-started/first-steps)
- [API Reference](https://strudel.science/strudel-kit/docs/cli/reference)
- [Quickstart](https://strudel.science/strudel-kit/docs/getting-started/quickstart)

### Publishing

#### 1. Authenticate with PyPi

In order to publish, you will have to authenticate with pypi and your account must have permission to administer the strudel-cli package on pypi.

#### 2. Build a distrubtable package

```
rm -rf dist && python -m build
```

This will generate `.whl` and `.tar.gz` files in the `dist/` folder.

#### 3. Upload to (Test)PyPi

```
python -m twine upload --repository pypi dist/*
```