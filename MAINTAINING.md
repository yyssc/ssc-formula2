# MAINTAINING

## How to publish

How to update from v0.2.1 to v0.2.2, and publish to npm

run test

```
npm run test
```

Modify `CHANGELOG.md` to add information for v0.2.2

```
npm run version:patch
```

PS:如果直接使用`npm publish`虽然会发布到npm上，但是不会在git中打tag

## How to publish the first version

Modify `package.json`, set `version` to `0.0.0`

Run command below to bump version from v0.0.0 to v0.1.0

```
npm run version:minor
```

## git commit convention

[https://github.com/airbnb/react-dates/blob/master/CHANGELOG.md](https://github.com/airbnb/react-dates/blob/master/CHANGELOG.md)

- types
  - fix
  - new
  - breaking
  - deps - upgrade the dependencies
