app = web/spatialeds-web.js
mocha = ./node_modules/mocha/bin/mocha
testCmd = find . -path ./node_modules -prune -o -name '*test.js' | xargs $(mocha) --require ./test/helper.js
pm2 = ./node_modules/pm2/bin/pm2

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

service-install: ## Set application to start when machine boots
	npm install
	$(pm2) start $(app)
	$(pm2) save
	$(pm2) startup

service-stop: ## Stop the app service
	$(pm2) stop $(app)

service-start: ## Start the app service
	$(pm2) start $(app)

clean: ## Remove compiled files
	rm -rf dist/*

start: ## Start the dev server
	node $(app)

test: ## Run the tests
	$(testCmd)

test-watch: ## Run the tests and watch for changes
	$(testCmd) --watch

.PHONY: \
	start \
	clean \
	build \
	test \
	test-watch \
	help
