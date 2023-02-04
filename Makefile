install:
	npm i
frontend:
	npm run dev
backend:
	npm run server
start:
	make backend & make frontend
build:
	npm build