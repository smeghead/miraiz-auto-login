FILES = README.md icon.png manifest.json content-script.js

.PHONY: dist
default:

dist:
	rm -rf dist
	mkdir -p dist/miraiz-auto-login
	cp $(FILES) dist/miraiz-auto-login
	cd dist && zip -r miraiz-auto-login.zip miraiz-auto-login
