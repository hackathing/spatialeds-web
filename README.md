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

## Dev Usage

Run `make` to print help.

```sh
cd /path/to/project

# Install Node
sudo apt-get install nodejs-legacy

# Install deps
make install

# Start server (dev mode)
make start

# Run tests
make test
make test-watch
```


## Production Usage

```sh
cd /path/to/project

# Install Node
sudo apt-get install nodejs-legacy

# Install deps
make install

# Install and start the app as a service
make service-install # Be sure to read the output!
make service-start
```
