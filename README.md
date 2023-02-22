# URL Override Issue Example

This repo demonstrates an issue around serializing the result when evaluating a script on a page that overrides the global `URL`.

During serialization, the (isUrl)[https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/isomorphic/utilityScriptSerializers.ts#L45-L47] check throws an exception if `URL` is a string. Note, this only happens if the page overrides `URL`.
