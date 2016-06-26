Spatialeds Web
==============

## Backend

- [x] `GET /control-schema` Get input schema
- [x] `POST /control-schema` Set input schema
- [x] `GET /controls` Get control values
- [x] `POST /controls` Set control values
- [ ] Weighted average for control values
- [ ] Control values decay

## Frontend

- [x] Query server for current schema
- [x] Build GUI controls from schema
- [x] Push values to server
- [ ] Look pretty

## Usage

```sh
cd /path/to/project

# Install Node
sudo apt-get install nodejs-legacy

# Install deps
npm install

# Start server
make start

# Run tests
make test
make test-watch
```
