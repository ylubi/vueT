#!/bin/bash
mkdir -p public/libs
echo "Downloading es-module-shims..."
curl -L -o public/libs/es-module-shims.wasm.js https://cdn.jsdelivr.net/npm/es-module-shims@1.5.18/dist/es-module-shims.wasm.js
echo "Downloading runtime-dom..."
curl -L -o public/libs/runtime-dom.esm-browser.js https://cdn.jsdelivr.net/npm/@vue/runtime-dom@3.5.24/dist/runtime-dom.esm-browser.js
echo "Done."
