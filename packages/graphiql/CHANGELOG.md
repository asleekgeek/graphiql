# Change Log

## 5.2.0

### Minor Changes

- [#4081](https://github.com/graphql/graphiql/pull/4081) [`4950dec`](https://github.com/graphql/graphiql/commit/4950decaddb816ef3e3d22d814d976d94405029e) Thanks [@dimaMachina](https://github.com/dimaMachina)! - feat: add loader for initial loading of operation editor
  fix: adjust command palette `width`, `border` and remove `box-shadow`
  feat: add short cut `Cmd/Ctrl + ,` for opening GraphiQL settings dialog

### Patch Changes

- Updated dependencies [[`4950dec`](https://github.com/graphql/graphiql/commit/4950decaddb816ef3e3d22d814d976d94405029e)]:
  - @graphiql/react@0.37.1

## 5.1.1

### Patch Changes

- [#4078](https://github.com/graphql/graphiql/pull/4078) [`6e5d5fc`](https://github.com/graphql/graphiql/commit/6e5d5fce9a7eb5770f40300fc153e0b9b10edfbf) Thanks [@dimaMachina](https://github.com/dimaMachina)! - fix color in the F1 popup should be graphiql primary color and add deprecated exports for `useEditorStore`, `useExecutionStore`, `usePluginStore` and `useSchemaStore`

- Updated dependencies [[`6e5d5fc`](https://github.com/graphql/graphiql/commit/6e5d5fce9a7eb5770f40300fc153e0b9b10edfbf), [`293beed`](https://github.com/graphql/graphiql/commit/293beed772baa2be834cad5f19e1aee0628e15cc)]:
  - @graphiql/react@0.37.0
  - @graphiql/plugin-doc-explorer@0.4.1
  - @graphiql/plugin-history@0.4.1

## 5.1.0

### Minor Changes

- [#4071](https://github.com/graphql/graphiql/pull/4071) [`3a0a755`](https://github.com/graphql/graphiql/commit/3a0a75569c6b318f5dc27d62000bcc9b0536c6fd) Thanks [@dimaMachina](https://github.com/dimaMachina)! - feat(graphql-language-service): export `getContextAtPosition`
  feat(graphiql): dynamically import `monaco-editor` and `monaco-graphql`

  When using GraphiQL in Next.js app, you no longer need to use `next/dynamic`:

  ```diff
  -import dynamic from 'next/dynamic'
  -const GraphiQL = dynamic(() => import('graphiql').then(mod => mod.GraphiQL), {
  -  ssr: false
  -})
  +import { GraphiQL } from 'graphiql'
  ```

- [#4074](https://github.com/graphql/graphiql/pull/4074) [`fd3f9e6`](https://github.com/graphql/graphiql/commit/fd3f9e6a91be728a69a136ad8680f6e3c7241198) Thanks [@dimaMachina](https://github.com/dimaMachina)! - Ensure `storage` and `theme` store values aren't shared between GraphiQL instances. Deprecate `useTheme` and `useStorage` hooks in favour of values from `useGraphiQL` and `useGraphiQLActions` hooks

  feat(`@graphiql/plugin-history`/`@graphiql/plugin-doc-explorer`): move `@graphiql/react` to `peerDependencies`

- [#4077](https://github.com/graphql/graphiql/pull/4077) [`3d41e11`](https://github.com/graphql/graphiql/commit/3d41e113fbf53930fd1b519b6d1330d0f4b23b7b) Thanks [@dimaMachina](https://github.com/dimaMachina)! - add new example [Usage GraphiQL 5 with Vite, React Router and `ssr: true`](https://github.com/graphql/graphiql/tree/main/examples/example-graphiql-vite-react-router)

### Patch Changes

- [#4076](https://github.com/graphql/graphiql/pull/4076) [`416e3a0`](https://github.com/graphql/graphiql/commit/416e3a05e9473eb2abd444da61ecfb8614020d14) Thanks [@dimaMachina](https://github.com/dimaMachina)! - fix broken `useOperationsEditorState` and `useEditorState` hook and add unit tests

- Updated dependencies [[`3a0a755`](https://github.com/graphql/graphiql/commit/3a0a75569c6b318f5dc27d62000bcc9b0536c6fd), [`fd3f9e6`](https://github.com/graphql/graphiql/commit/fd3f9e6a91be728a69a136ad8680f6e3c7241198), [`416e3a0`](https://github.com/graphql/graphiql/commit/416e3a05e9473eb2abd444da61ecfb8614020d14), [`3d41e11`](https://github.com/graphql/graphiql/commit/3d41e113fbf53930fd1b519b6d1330d0f4b23b7b)]:
  - @graphiql/react@0.36.0
  - @graphiql/plugin-history@0.4.0
  - @graphiql/plugin-doc-explorer@0.4.0

## 5.0.6

### Patch Changes

- [#4069](https://github.com/graphql/graphiql/pull/4069) [`142f3f2`](https://github.com/graphql/graphiql/commit/142f3f2529c668aa1a6ba2f7269cf4b7e2fd3e61) Thanks [@dimaMachina](https://github.com/dimaMachina)! - reduce bundle size, import `prettier` dynamically to avoid bundling Prettier

  diff from vite example

  ```diff
  -dist/assets/index-BMgFrxsd.js             4,911.53 kB │ gzip: 1,339.77 kB
  +dist/assets/index-BlpzusGL.js             4,221.28 kB │ gzip: 1,145.58 kB
  ```

- Updated dependencies [[`142f3f2`](https://github.com/graphql/graphiql/commit/142f3f2529c668aa1a6ba2f7269cf4b7e2fd3e61)]:
  - @graphiql/react@0.35.6

## 5.0.5

### Patch Changes

- [#4065](https://github.com/graphql/graphiql/pull/4065) [`962225a`](https://github.com/graphql/graphiql/commit/962225ad74c8b69101f900c63243612560ddd501) Thanks [@benjie](https://github.com/benjie)! - Expose the `GraphiQLInterfaceProps` type.

## 5.0.4

### Patch Changes

- [#4061](https://github.com/graphql/graphiql/pull/4061) [`8f14fff`](https://github.com/graphql/graphiql/commit/8f14fff26e0d804b5f4ecf307b7b29bb78664973) Thanks [@dimaMachina](https://github.com/dimaMachina)! - add `graphiql.css`, CSS file without importing fonts and monaco-editor styles

- [#4059](https://github.com/graphql/graphiql/pull/4059) [`a4382bf`](https://github.com/graphql/graphiql/commit/a4382bfae28efd6e03153cf8aa81f55db43de6ed) Thanks [@dimaMachina](https://github.com/dimaMachina)! - export `GraphiQLInterface`

- [#4063](https://github.com/graphql/graphiql/pull/4063) [`44b18e4`](https://github.com/graphql/graphiql/commit/44b18e4ed054d757568b5cfedc43614fd7ea3fc9) Thanks [@dimaMachina](https://github.com/dimaMachina)! - fix `useOperationsEditorState` wasn't returned updated return value

- Updated dependencies [[`44b18e4`](https://github.com/graphql/graphiql/commit/44b18e4ed054d757568b5cfedc43614fd7ea3fc9)]:
  - @graphiql/react@0.35.5

## 5.0.3

### Patch Changes

- [#4052](https://github.com/graphql/graphiql/pull/4052) [`9b54581`](https://github.com/graphql/graphiql/commit/9b54581e74a7e6c6354a810c2288869fb85f24eb) Thanks [@dimaMachina](https://github.com/dimaMachina)! - fix multiple GraphiQL instances, suffix a unique id for operation, request headers, variables and response URI.

  E.g., the first GraphiQL instance will have:

  - `1-operation.graphql`
  - `1-request-headers.json`
  - `1-variables.json`
  - `1-response.json`

  The 2nd instance will have:

  - `2-operation.graphql`
  - `2-request-headers.json`
  - `2-variables.json`
  - `2-response.json`

  etc.

- [#4049](https://github.com/graphql/graphiql/pull/4049) [`2c0586d`](https://github.com/graphql/graphiql/commit/2c0586d1f3db8fe8dc604032010cc9840d10b72d) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - use `allowTrailingComma` option in jsonc parser to make `tryParseJsonObject` sync

  - parse introspection headers with jsonc parser
  - use prettier format for operation editor since we already use prettier for jsonc editors

- [#4050](https://github.com/graphql/graphiql/pull/4050) [`002f133`](https://github.com/graphql/graphiql/commit/002f1336db4bdafa01cff1964a1b56ba858699eb) Thanks [@dimaMachina](https://github.com/dimaMachina)! - fix can't access property "jsonDefaults"

- Updated dependencies [[`9b54581`](https://github.com/graphql/graphiql/commit/9b54581e74a7e6c6354a810c2288869fb85f24eb), [`2c0586d`](https://github.com/graphql/graphiql/commit/2c0586d1f3db8fe8dc604032010cc9840d10b72d), [`002f133`](https://github.com/graphql/graphiql/commit/002f1336db4bdafa01cff1964a1b56ba858699eb)]:
  - @graphiql/react@0.35.4

## 5.0.2

### Patch Changes

- [#4046](https://github.com/graphql/graphiql/pull/4046) [`8b56462`](https://github.com/graphql/graphiql/commit/8b564625b2470652db3c27dc70b0f85d5bbc3a0f) Thanks [@dimaMachina](https://github.com/dimaMachina)! - Enable font ligatures in monaco-editors fix incorrect caret position on Windows

- Updated dependencies [[`8b56462`](https://github.com/graphql/graphiql/commit/8b564625b2470652db3c27dc70b0f85d5bbc3a0f)]:
  - @graphiql/react@0.35.3

## 5.0.1

### Patch Changes

- [#4044](https://github.com/graphql/graphiql/pull/4044) [`68b347c`](https://github.com/graphql/graphiql/commit/68b347c78faa80cc00397fc1705dbf114c1f374b) Thanks [@dimaMachina](https://github.com/dimaMachina)! - fix `Fixes Uncaught Error: can't access property "offsetNode", hitResult is null` on Mozilla

- Updated dependencies [[`68b347c`](https://github.com/graphql/graphiql/commit/68b347c78faa80cc00397fc1705dbf114c1f374b)]:
  - @graphiql/react@0.35.2

## 5.0.0

### Major Changes

- [#3990](https://github.com/graphql/graphiql/pull/3990) [`27e7eb6`](https://github.com/graphql/graphiql/commit/27e7eb60247437d992c1fcdcc6870cb7892d4b92) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - allow multiple independent instances of GraphiQL on the same page

  - store `onClickReference` in query editor in React `ref`
  - remove `onClickReference` from variable editor
  - fix shortcut text per OS for run query in execute query button's tooltip and in default query
  - allow override all default GraphiQL plugins
  - adjust operation argument color to be purple from GraphiQL v2 on dark/light theme

- [#3999](https://github.com/graphql/graphiql/pull/3999) [`866a8f3`](https://github.com/graphql/graphiql/commit/866a8f39a27d213315ccc55ec06353bb3280b270) Thanks [@dimaMachina](https://github.com/dimaMachina)! - update graphiql-cdn example to show how to load workers with esm.sh

- [#4009](https://github.com/graphql/graphiql/pull/4009) [`4936492`](https://github.com/graphql/graphiql/commit/49364924d0da05a86f7c6c3139d44aed0e474531) Thanks [@dimaMachina](https://github.com/dimaMachina)! - separate store actions from state, add `useGraphiQLActions` state

- [#4002](https://github.com/graphql/graphiql/pull/4002) [`2d9faec`](https://github.com/graphql/graphiql/commit/2d9faec57830b38aa175929c47a55c959c327535) Thanks [@dimaMachina](https://github.com/dimaMachina)! - remove UMD builds

- [#4005](https://github.com/graphql/graphiql/pull/4005) [`1e3ec84`](https://github.com/graphql/graphiql/commit/1e3ec8455706e62e6cae306df58d3343ec6b612d) Thanks [@dimaMachina](https://github.com/dimaMachina)! - support `externalFragments` prop and remove `validationRules` prop

- [#4003](https://github.com/graphql/graphiql/pull/4003) [`0c8e390`](https://github.com/graphql/graphiql/commit/0c8e3906cf58055f898cb173b2e912a494ae8439) Thanks [@dimaMachina](https://github.com/dimaMachina)! - remove `readOnly` prop
  document `keyMap` prop was removed in migration guide

- [#3735](https://github.com/graphql/graphiql/pull/3735) [`0a08642`](https://github.com/graphql/graphiql/commit/0a0864268da4f340e30a1e9b8191d34e33ffbfa7) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - Remove `query`, `variables`, `headers`, and `response` props from `<GraphiQL />` and `<GraphiQLProvider />`

  - Add `initialQuery`, `initialVariables` and `initialHeaders` props
  - Fix `defaultQuery`, when is set will only be used for the first tab. When opening more tabs, the query editor will start out empty
  - remove `useSynchronizeValue` hook

- [#3966](https://github.com/graphql/graphiql/pull/3966) [`17bee1c`](https://github.com/graphql/graphiql/commit/17bee1ced4637cfa5e0e6cddc7716d89cfa49687) Thanks [@dimaMachina](https://github.com/dimaMachina)! - Remove examples: `GraphiQL x Parcel` and `GraphiQL x Create React App`

  Add new examples: `GraphiQL x Vite` and `GraphiQL x Next.js`

- [#3234](https://github.com/graphql/graphiql/pull/3234) [`86a96e5`](https://github.com/graphql/graphiql/commit/86a96e5f1779b5d0e84ad4179dbd6c5d4947fb91) Thanks [@dimaMachina](https://github.com/dimaMachina)! - Migration from Codemirror to [Monaco Editor](https://github.com/microsoft/monaco-editor)

  Replacing `codemirror-graphql` with [`monaco-graphql`](https://github.com/graphql/graphiql/tree/main/packages/monaco-graphql)

  Support for comments in **Variables** and **Headers** editors

### Minor Changes

- [#4017](https://github.com/graphql/graphiql/pull/4017) [`cff3da5`](https://github.com/graphql/graphiql/commit/cff3da541184d36d1c2e5c919dd4231e9905ccbb) Thanks [@dimaMachina](https://github.com/dimaMachina)! - extract graphiql sidebar to react component

- [#4025](https://github.com/graphql/graphiql/pull/4025) [`6a50740`](https://github.com/graphql/graphiql/commit/6a507407c7c63bfc779ad383054ab3a8c003ef5b) Thanks [@dimaMachina](https://github.com/dimaMachina)! - set "importsNotUsedAsValues": "error" in tsconfig

- [#4026](https://github.com/graphql/graphiql/pull/4026) [`7fb5ac3`](https://github.com/graphql/graphiql/commit/7fb5ac38b8ec27f0234adc06aacf42e71f6a259b) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - deprecate `useExplorerContext`, `useHistoryContext`, `usePrettifyEditors`, `useCopyQuery`, `useMergeQuery`, `useExecutionContext`, `usePluginContext`, `useSchemaContext`, `useStorageContext` hooks
  - fix response editor overflow on `<GraphiQL.Footer />`
  - export `GraphiQLProps` type
  - allow `children: ReactNode` for `<GraphiQL.Toolbar />`
  - change `ToolbarMenu` component:
    - The `label` and `className` props were removed
    - The `button` prop should now be a button element
  - document `useGraphiQL` and `useGraphiQLActions` hooks in `@graphiql/react` README.md
  - rename `useThemeStore` to `useTheme`

### Patch Changes

- [#3949](https://github.com/graphql/graphiql/pull/3949) [`0844dc1`](https://github.com/graphql/graphiql/commit/0844dc1ca89a5d8fce0dc23658cca6987ff8443e) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - replace `onCopyQuery` hook with `copyQuery` function

  - replace `onMergeQuery` hook with `mergeQuery` function
  - replace `onPrettifyEditors` hook with `prettifyEditors` function
  - remove `fetcher` prop from `SchemaContextProvider` and `schemaStore` and add `fetcher` to `executionStore`
  - add `onCopyQuery` and `onPrettifyQuery` props to `EditorContextProvider`
  - remove exports (use `GraphiQLProvider`)
    - `EditorContextProvider`
    - `ExecutionContextProvider`
    - `PluginContextProvider`
    - `SchemaContextProvider`
    - `StorageContextProvider`
    - `ExecutionContextType`
    - `PluginContextType`
  - feat(@graphiql/react): migrate React context to zustand:
    - replace `useExecutionContext` with `useExecutionStore` hook
    - replace `useEditorContext` with `useEditorStore` hook
  - prefer `getComputedStyle` over `window.getComputedStyle`

- [#4008](https://github.com/graphql/graphiql/pull/4008) [`e0dafa4`](https://github.com/graphql/graphiql/commit/e0dafa4cf86edffc8344c11f2c0a5280d873585a) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - add f1 command as first item in shortcut table

  - set color of `quickInputList.focusForeground` in command palette to be primary color

- [#3950](https://github.com/graphql/graphiql/pull/3950) [`2455907`](https://github.com/graphql/graphiql/commit/245590708cea52ff6f1bcce8664781f7e56029cb) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - remove `useQueryEditor`, `useVariableEditor`, `useHeaderEditor`, `useResponseEditor` hooks
  - remove `UseHeaderEditorArgs`, `UseQueryEditorArgs`, `UseResponseEditorArgs`, `UseVariableEditorArgs` exports
  - rename components
    - `StorageContextProvider` => `StorageStore`
    - `EditorContextProvider` => `EditorStore`
    - `SchemaContextProvider` => `SchemaStore`
    - `ExecutionContextProvider` => `ExecutionStore`
    - `HistoryContextProvider` => `HistoryStore`
    - `ExplorerContextProvider` => `ExplorerStore`
- Updated dependencies [[`27e7eb6`](https://github.com/graphql/graphiql/commit/27e7eb60247437d992c1fcdcc6870cb7892d4b92), [`0844dc1`](https://github.com/graphql/graphiql/commit/0844dc1ca89a5d8fce0dc23658cca6987ff8443e), [`866a8f3`](https://github.com/graphql/graphiql/commit/866a8f39a27d213315ccc55ec06353bb3280b270), [`4936492`](https://github.com/graphql/graphiql/commit/49364924d0da05a86f7c6c3139d44aed0e474531), [`7792dc9`](https://github.com/graphql/graphiql/commit/7792dc98814abcd6dc5f5cd94ae84c308a260dcf), [`f9780bd`](https://github.com/graphql/graphiql/commit/f9780bd44f67acad0a9bb10f57eb6059db60e1ec), [`3c0ad34`](https://github.com/graphql/graphiql/commit/3c0ad34a8f2f9d0f912db9597f608d7405c2bd83), [`1e3ec84`](https://github.com/graphql/graphiql/commit/1e3ec8455706e62e6cae306df58d3343ec6b612d), [`0c8e390`](https://github.com/graphql/graphiql/commit/0c8e3906cf58055f898cb173b2e912a494ae8439), [`0a08642`](https://github.com/graphql/graphiql/commit/0a0864268da4f340e30a1e9b8191d34e33ffbfa7), [`cff3da5`](https://github.com/graphql/graphiql/commit/cff3da541184d36d1c2e5c919dd4231e9905ccbb), [`6a50740`](https://github.com/graphql/graphiql/commit/6a507407c7c63bfc779ad383054ab3a8c003ef5b), [`16fdd6a`](https://github.com/graphql/graphiql/commit/16fdd6a16684c9f250ee53ea2dfbb24435cee6a9), [`86a96e5`](https://github.com/graphql/graphiql/commit/86a96e5f1779b5d0e84ad4179dbd6c5d4947fb91), [`30bc3f9`](https://github.com/graphql/graphiql/commit/30bc3f9cae4dbb11649a0952dad092e192ad653c), [`4b39f11`](https://github.com/graphql/graphiql/commit/4b39f1118d008c2fac6e2df9c94a3f3271c4eeb9), [`7fb5ac3`](https://github.com/graphql/graphiql/commit/7fb5ac38b8ec27f0234adc06aacf42e71f6a259b), [`2455907`](https://github.com/graphql/graphiql/commit/245590708cea52ff6f1bcce8664781f7e56029cb)]:
  - @graphiql/plugin-doc-explorer@0.3.0
  - @graphiql/plugin-history@0.3.0
  - @graphiql/react@0.35.0

## 5.0.0-rc.6

### Major Changes

- [#3735](https://github.com/graphql/graphiql/pull/3735) [`0a08642`](https://github.com/graphql/graphiql/commit/0a0864268da4f340e30a1e9b8191d34e33ffbfa7) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - Remove `query`, `variables`, `headers`, and `response` props from `<GraphiQL />` and `<GraphiQLProvider />`
  - Add `initialQuery`, `initialVariables` and `initialHeaders` props
  - Fix `defaultQuery`, when is set will only be used for the first tab. When opening more tabs, the query editor will start out empty
  - remove `useSynchronizeValue` hook

### Patch Changes

- Updated dependencies [[`0a08642`](https://github.com/graphql/graphiql/commit/0a0864268da4f340e30a1e9b8191d34e33ffbfa7)]:
  - @graphiql/react@0.35.0-rc.9

## 5.0.0-rc.5

### Minor Changes

- [#4025](https://github.com/graphql/graphiql/pull/4025) [`6a50740`](https://github.com/graphql/graphiql/commit/6a507407c7c63bfc779ad383054ab3a8c003ef5b) Thanks [@dimaMachina](https://github.com/dimaMachina)! - set "importsNotUsedAsValues": "error" in tsconfig

- [#4026](https://github.com/graphql/graphiql/pull/4026) [`7fb5ac3`](https://github.com/graphql/graphiql/commit/7fb5ac38b8ec27f0234adc06aacf42e71f6a259b) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - deprecate `useExplorerContext`, `useHistoryContext`, `usePrettifyEditors`, `useCopyQuery`, `useMergeQuery`, `useExecutionContext`, `usePluginContext`, `useSchemaContext`, `useStorageContext` hooks
  - fix response editor overflow on `<GraphiQL.Footer />`
  - export `GraphiQLProps` type
  - allow `children: ReactNode` for `<GraphiQL.Toolbar />`
  - change `ToolbarMenu` component:
    - The `label` and `className` props were removed
    - The `button` prop should now be a button element
  - document `useGraphiQL` and `useGraphiQLActions` hooks in `@graphiql/react` README.md
  - rename `useThemeStore` to `useTheme`

### Patch Changes

- Updated dependencies [[`6a50740`](https://github.com/graphql/graphiql/commit/6a507407c7c63bfc779ad383054ab3a8c003ef5b), [`7fb5ac3`](https://github.com/graphql/graphiql/commit/7fb5ac38b8ec27f0234adc06aacf42e71f6a259b)]:
  - @graphiql/plugin-doc-explorer@0.3.0-rc.4
  - @graphiql/plugin-history@0.3.0-rc.3
  - @graphiql/react@0.35.0-rc.8

## 5.0.0-rc.4

### Minor Changes

- [#4017](https://github.com/graphql/graphiql/pull/4017) [`cff3da5`](https://github.com/graphql/graphiql/commit/cff3da541184d36d1c2e5c919dd4231e9905ccbb) Thanks [@dimaMachina](https://github.com/dimaMachina)! - extract graphiql sidebar to react component

### Patch Changes

- Updated dependencies [[`cff3da5`](https://github.com/graphql/graphiql/commit/cff3da541184d36d1c2e5c919dd4231e9905ccbb)]:
  - @graphiql/react@0.35.0-rc.6

## 5.0.0-rc.3

### Major Changes

- [#4009](https://github.com/graphql/graphiql/pull/4009) [`4936492`](https://github.com/graphql/graphiql/commit/49364924d0da05a86f7c6c3139d44aed0e474531) Thanks [@dimaMachina](https://github.com/dimaMachina)! - separate store actions from state, add `useGraphiQLActions` state

### Patch Changes

- Updated dependencies [[`4936492`](https://github.com/graphql/graphiql/commit/49364924d0da05a86f7c6c3139d44aed0e474531)]:
  - @graphiql/plugin-doc-explorer@0.3.0-rc.3
  - @graphiql/react@0.35.0-rc.3

## 5.0.0-rc.2

### Major Changes

- [#3999](https://github.com/graphql/graphiql/pull/3999) [`866a8f3`](https://github.com/graphql/graphiql/commit/866a8f39a27d213315ccc55ec06353bb3280b270) Thanks [@dimaMachina](https://github.com/dimaMachina)! - update graphiql-cdn example to show how to load workers with esm.sh

- [#4002](https://github.com/graphql/graphiql/pull/4002) [`2d9faec`](https://github.com/graphql/graphiql/commit/2d9faec57830b38aa175929c47a55c959c327535) Thanks [@dimaMachina](https://github.com/dimaMachina)! - remove UMD builds

- [#4005](https://github.com/graphql/graphiql/pull/4005) [`1e3ec84`](https://github.com/graphql/graphiql/commit/1e3ec8455706e62e6cae306df58d3343ec6b612d) Thanks [@dimaMachina](https://github.com/dimaMachina)! - support `externalFragments` prop and remove `validationRules` prop

- [#4003](https://github.com/graphql/graphiql/pull/4003) [`0c8e390`](https://github.com/graphql/graphiql/commit/0c8e3906cf58055f898cb173b2e912a494ae8439) Thanks [@dimaMachina](https://github.com/dimaMachina)! - remove `readOnly` prop
  document `keyMap` prop was removed in migration guide

### Patch Changes

- [#4008](https://github.com/graphql/graphiql/pull/4008) [`e0dafa4`](https://github.com/graphql/graphiql/commit/e0dafa4cf86edffc8344c11f2c0a5280d873585a) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - add f1 command as first item in shortcut table
  - set color of `quickInputList.focusForeground` in command palette to be primary color
- Updated dependencies [[`866a8f3`](https://github.com/graphql/graphiql/commit/866a8f39a27d213315ccc55ec06353bb3280b270), [`7792dc9`](https://github.com/graphql/graphiql/commit/7792dc98814abcd6dc5f5cd94ae84c308a260dcf), [`f9780bd`](https://github.com/graphql/graphiql/commit/f9780bd44f67acad0a9bb10f57eb6059db60e1ec), [`1e3ec84`](https://github.com/graphql/graphiql/commit/1e3ec8455706e62e6cae306df58d3343ec6b612d), [`0c8e390`](https://github.com/graphql/graphiql/commit/0c8e3906cf58055f898cb173b2e912a494ae8439), [`16fdd6a`](https://github.com/graphql/graphiql/commit/16fdd6a16684c9f250ee53ea2dfbb24435cee6a9)]:
  - @graphiql/react@0.35.0-rc.2
  - @graphiql/plugin-doc-explorer@0.3.0-rc.2

## 5.0.0-rc.1

### Major Changes

- [#3990](https://github.com/graphql/graphiql/pull/3990) [`27e7eb6`](https://github.com/graphql/graphiql/commit/27e7eb60247437d992c1fcdcc6870cb7892d4b92) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - allow multiple independent instances of GraphiQL on the same page
  - store `onClickReference` in query editor in React `ref`
  - remove `onClickReference` from variable editor
  - fix shortcut text per OS for run query in execute query button's tooltip and in default query
  - allow override all default GraphiQL plugins
  - adjust operation argument color to be purple from GraphiQL v2 on dark/light theme

### Patch Changes

- Updated dependencies [[`27e7eb6`](https://github.com/graphql/graphiql/commit/27e7eb60247437d992c1fcdcc6870cb7892d4b92)]:
  - @graphiql/plugin-doc-explorer@0.3.0-rc.1
  - @graphiql/plugin-history@0.3.0-rc.1
  - @graphiql/react@0.35.0-rc.1

## 5.0.0-rc.0

### Major Changes

- [#3966](https://github.com/graphql/graphiql/pull/3966) [`17bee1c`](https://github.com/graphql/graphiql/commit/17bee1ced4637cfa5e0e6cddc7716d89cfa49687) Thanks [@dimaMachina](https://github.com/dimaMachina)! - Remove examples: `GraphiQL x Parcel` and `GraphiQL x Create React App`

  Add new examples: `GraphiQL x Vite` and `GraphiQL x Next.js`

- [#3234](https://github.com/graphql/graphiql/pull/3234) [`86a96e5`](https://github.com/graphql/graphiql/commit/86a96e5f1779b5d0e84ad4179dbd6c5d4947fb91) Thanks [@dimaMachina](https://github.com/dimaMachina)! - Migration from Codemirror to [Monaco Editor](https://github.com/microsoft/monaco-editor)

  Replacing `codemirror-graphql` with [`monaco-graphql`](https://github.com/graphql/graphiql/tree/main/packages/monaco-graphql)

  Support for comments in **Variables** and **Headers** editors

### Patch Changes

- [#3949](https://github.com/graphql/graphiql/pull/3949) [`0844dc1`](https://github.com/graphql/graphiql/commit/0844dc1ca89a5d8fce0dc23658cca6987ff8443e) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - replace `onCopyQuery` hook with `copyQuery` function

  - replace `onMergeQuery` hook with `mergeQuery` function
  - replace `onPrettifyEditors` hook with `prettifyEditors` function
  - remove `fetcher` prop from `SchemaContextProvider` and `schemaStore` and add `fetcher` to `executionStore`
  - add `onCopyQuery` and `onPrettifyQuery` props to `EditorContextProvider`
  - remove exports (use `GraphiQLProvider`)
    - `EditorContextProvider`
    - `ExecutionContextProvider`
    - `PluginContextProvider`
    - `SchemaContextProvider`
    - `StorageContextProvider`
    - `ExecutionContextType`
    - `PluginContextType`
  - feat(@graphiql/react): migrate React context to zustand:
    - replace `useExecutionContext` with `useExecutionStore` hook
    - replace `useEditorContext` with `useEditorStore` hook
  - prefer `getComputedStyle` over `window.getComputedStyle`

- [#3950](https://github.com/graphql/graphiql/pull/3950) [`2455907`](https://github.com/graphql/graphiql/commit/245590708cea52ff6f1bcce8664781f7e56029cb) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - remove `useQueryEditor`, `useVariableEditor`, `useHeaderEditor`, `useResponseEditor` hooks
  - remove `UseHeaderEditorArgs`, `UseQueryEditorArgs`, `UseResponseEditorArgs`, `UseVariableEditorArgs` exports
  - rename components
    - `StorageContextProvider` => `StorageStore`
    - `EditorContextProvider` => `EditorStore`
    - `SchemaContextProvider` => `SchemaStore`
    - `ExecutionContextProvider` => `ExecutionStore`
    - `HistoryContextProvider` => `HistoryStore`
    - `ExplorerContextProvider` => `ExplorerStore`
- Updated dependencies [[`0844dc1`](https://github.com/graphql/graphiql/commit/0844dc1ca89a5d8fce0dc23658cca6987ff8443e), [`86a96e5`](https://github.com/graphql/graphiql/commit/86a96e5f1779b5d0e84ad4179dbd6c5d4947fb91), [`2455907`](https://github.com/graphql/graphiql/commit/245590708cea52ff6f1bcce8664781f7e56029cb)]:
  - @graphiql/plugin-doc-explorer@0.3.0-rc.0
  - @graphiql/plugin-history@0.3.0-rc.0
  - @graphiql/react@0.35.0-rc.0

## 4.1.2

### Patch Changes

- [#3993](https://github.com/graphql/graphiql/pull/3993) [`70d2216`](https://github.com/graphql/graphiql/commit/70d22164d67b925f3342800161a2b568997bd689) Thanks [@dimaMachina](https://github.com/dimaMachina)! - fix `TypeError: Cannot read properties of null (reading 'get')` and update graphiql webpack example to show how to use `useStorage` hook with `GraphiQL` component

## 4.1.1

### Patch Changes

- [#3970](https://github.com/graphql/graphiql/pull/3970) [`7054591`](https://github.com/graphql/graphiql/commit/70545912d1b3bb9e0c45e766a5c89896a9c4dfb7) Thanks [@dimaMachina](https://github.com/dimaMachina)! - revert https://github.com/graphql/graphiql/pull/3946 to have support multiple embedded graphiql instances on the same page

- Updated dependencies [[`7054591`](https://github.com/graphql/graphiql/commit/70545912d1b3bb9e0c45e766a5c89896a9c4dfb7)]:
  - @graphiql/plugin-doc-explorer@0.2.2
  - @graphiql/plugin-history@0.2.2
  - @graphiql/react@0.34.1

## 4.1.0

### Minor Changes

- [#3946](https://github.com/graphql/graphiql/pull/3946) [`71755b7`](https://github.com/graphql/graphiql/commit/71755b7f412f8f3dd9f5194d3f1e0168b9ad07af) Thanks [@dimaMachina](https://github.com/dimaMachina)! - feat(@graphiql/react): migrate React context to zustand:
  - replace `useExecutionContext` with `useExecutionStore` hook
  - replace `useEditorContext` with `useEditorStore` hook
  - replace `useAutoCompleteLeafs` hook with `getAutoCompleteLeafs` function

### Patch Changes

- [#3963](https://github.com/graphql/graphiql/pull/3963) [`6d631e2`](https://github.com/graphql/graphiql/commit/6d631e2e558d038476fe235b1506bc52ecf68781) Thanks [@dimaMachina](https://github.com/dimaMachina)! - fix headers are not set in the refetch of introspection query

- Updated dependencies [[`71755b7`](https://github.com/graphql/graphiql/commit/71755b7f412f8f3dd9f5194d3f1e0168b9ad07af), [`6d631e2`](https://github.com/graphql/graphiql/commit/6d631e2e558d038476fe235b1506bc52ecf68781)]:
  - @graphiql/plugin-doc-explorer@0.2.1
  - @graphiql/plugin-history@0.2.1
  - @graphiql/react@0.34.0

## 4.0.5

### Patch Changes

- [#3945](https://github.com/graphql/graphiql/pull/3945) [`117627b`](https://github.com/graphql/graphiql/commit/117627b451607198dd7b9dc19e76da8a71d14b71) Thanks [@dimaMachina](https://github.com/dimaMachina)! - feat(@graphiql/react): migrate React context to zustand, replace `usePluginContext` with `usePluginStore` hook

- [#3947](https://github.com/graphql/graphiql/pull/3947) [`fa78481`](https://github.com/graphql/graphiql/commit/fa784819ce020346052901019079fb5b44af6ef0) Thanks [@dimaMachina](https://github.com/dimaMachina)! - refactor `useStorage`, `useDocExplorer` and `useHistory` hooks

- [#3943](https://github.com/graphql/graphiql/pull/3943) [`7275472`](https://github.com/graphql/graphiql/commit/727547236bbd4fc721069ceae63eb8a6acffa57e) Thanks [@dimaMachina](https://github.com/dimaMachina)! - feat(@graphiql/react): migrate React context to zustand, replace `useSchemaContext` with `useSchemaStore` hook

- [#3942](https://github.com/graphql/graphiql/pull/3942) [`00c8605`](https://github.com/graphql/graphiql/commit/00c8605e1f3068e6547a5a9e969571a86a57f921) Thanks [@dimaMachina](https://github.com/dimaMachina)! - feat(@graphiql/react): migrate React context to zustand, replace `useStorageContext` with `useStorage` hook

- Updated dependencies [[`117627b`](https://github.com/graphql/graphiql/commit/117627b451607198dd7b9dc19e76da8a71d14b71), [`fa78481`](https://github.com/graphql/graphiql/commit/fa784819ce020346052901019079fb5b44af6ef0), [`7275472`](https://github.com/graphql/graphiql/commit/727547236bbd4fc721069ceae63eb8a6acffa57e), [`00c8605`](https://github.com/graphql/graphiql/commit/00c8605e1f3068e6547a5a9e969571a86a57f921)]:
  - @graphiql/plugin-doc-explorer@0.2.0
  - @graphiql/plugin-history@0.2.0
  - @graphiql/react@0.33.0

## 4.0.4

### Patch Changes

- [#3940](https://github.com/graphql/graphiql/pull/3940) [`5a66864`](https://github.com/graphql/graphiql/commit/5a668647e1cbca9e846bfa617f97fbae21c821bd) Thanks [@dimaMachina](https://github.com/dimaMachina)! - feat(@graphiql/plugin-doc-explorer): migrate React context to zustand, replace `useExplorerContext` with `useDocExplorer` and `useDocExplorerActions` hooks

- Updated dependencies [[`5a66864`](https://github.com/graphql/graphiql/commit/5a668647e1cbca9e846bfa617f97fbae21c821bd)]:
  - @graphiql/plugin-doc-explorer@0.1.0

## 4.0.3

### Patch Changes

- [#3938](https://github.com/graphql/graphiql/pull/3938) [`9f55d93`](https://github.com/graphql/graphiql/commit/9f55d930c8a63b1683740cc7e51531fe09059b72) Thanks [@dimaMachina](https://github.com/dimaMachina)! - fix unable override `referencePlugin` prop

- [#3936](https://github.com/graphql/graphiql/pull/3936) [`2bfbb06`](https://github.com/graphql/graphiql/commit/2bfbb06e416cabc46951a137b61a12a571f0c937) Thanks [@dimaMachina](https://github.com/dimaMachina)! - add scroll-x to graphiql tabs area

- [#3939](https://github.com/graphql/graphiql/pull/3939) [`69ad489`](https://github.com/graphql/graphiql/commit/69ad489678d0096432d5c4b1749d87343f4ed1f7) Thanks [@dimaMachina](https://github.com/dimaMachina)! - prefer `React.FC` type when declaring React components

- [#3937](https://github.com/graphql/graphiql/pull/3937) [`2500288`](https://github.com/graphql/graphiql/commit/250028863f6eefe4167ff9f9c23168ccf0a85b7b) Thanks [@dimaMachina](https://github.com/dimaMachina)! - remove `Warning: useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format` warnings on SSR

- [#3935](https://github.com/graphql/graphiql/pull/3935) [`5985e13`](https://github.com/graphql/graphiql/commit/5985e135fcc38a0ce90bf5a5d2cc344ec6b36aab) Thanks [@dimaMachina](https://github.com/dimaMachina)! - feat(@graphiql/plugin-history): migrate React context to zustand, replace `useHistoryContext` with `useHistory`, `useHistoryActions` hooks

- Updated dependencies [[`2bfbb06`](https://github.com/graphql/graphiql/commit/2bfbb06e416cabc46951a137b61a12a571f0c937), [`69ad489`](https://github.com/graphql/graphiql/commit/69ad489678d0096432d5c4b1749d87343f4ed1f7), [`2500288`](https://github.com/graphql/graphiql/commit/250028863f6eefe4167ff9f9c23168ccf0a85b7b), [`5985e13`](https://github.com/graphql/graphiql/commit/5985e135fcc38a0ce90bf5a5d2cc344ec6b36aab)]:
  - @graphiql/react@0.32.2
  - @graphiql/plugin-doc-explorer@0.0.2
  - @graphiql/plugin-history@0.1.0

## 4.0.2

### Patch Changes

- [#3916](https://github.com/graphql/graphiql/pull/3916) [`98d13a3`](https://github.com/graphql/graphiql/commit/98d13a3e515eb70aaf5a5ba669c680d5959fef67) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - remove the following exports from `@graphiql/react` and move them in `@graphiql/plugin-doc-explorer` package:

  - Argument
  - DefaultValue
  - DeprecationReason
  - Directive
  - DocExplorer
  - ExplorerContext
  - ExplorerContextProvider
  - ExplorerSection
  - FieldDocumentation
  - FieldLink
  - SchemaDocumentation
  - Search
  - TypeDocumentation
  - TypeLink
  - useExplorerContext
  - DOC_EXPLORER_PLUGIN
  - ExplorerContextType
  - ExplorerFieldDef
  - ExplorerNavStack
  - ExplorerNavStackItem
  - add new `referencePlugin` prop on `PluginContextProviderProps` component for plugin which is used to display the reference documentation when selecting a type.

- Updated dependencies [[`98d13a3`](https://github.com/graphql/graphiql/commit/98d13a3e515eb70aaf5a5ba669c680d5959fef67)]:
  - @graphiql/plugin-doc-explorer@0.0.1
  - @graphiql/react@0.32.0
  - @graphiql/plugin-history@0.0.2

## 4.0.1

### Patch Changes

- [#3911](https://github.com/graphql/graphiql/pull/3911) [`e7c436b`](https://github.com/graphql/graphiql/commit/e7c436b329a68981bdbd2b662be94875a546a1d6) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - export `cn` from `@graphiql/react`

  - remove following exports from `@graphiql/react` and move them in `@graphiql/plugin-history` package:
    - `History`
    - `HistoryContext`
    - `HistoryContextType`
    - `HistoryContextProvider`
    - `useHistoryContext`
    - `HISTORY_PLUGIN`
  - remove types from `@graphiql/react` (use `ComponentProps<typeof MyContextProviderProps>` instead):
    - `HistoryContextProviderProps`
    - `ExecutionContextProviderProps`
    - `EditorContextProviderProps`
    - `ExplorerContextProviderProps`
    - `PluginContextProviderProps`
    - `SchemaContextProviderProps`
    - `StorageContextProviderProps`
    - `GraphiQLProviderProps`

- [#3915](https://github.com/graphql/graphiql/pull/3915) [`bc31cd9`](https://github.com/graphql/graphiql/commit/bc31cd99a92693238e7359456e3cc22ed0387df0) Thanks [@dimaMachina](https://github.com/dimaMachina)! - fix unpkg.com results to `Not found` when `main` field isn't specified in `package.json`

- Updated dependencies [[`e7c436b`](https://github.com/graphql/graphiql/commit/e7c436b329a68981bdbd2b662be94875a546a1d6)]:
  - @graphiql/plugin-history@0.0.1
  - @graphiql/react@0.31.0

## 4.0.0

### Major Changes

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - drop commonjs build files

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - show tabs even there is only 1 tab

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - remove default export

  ## Migration

  ### Before

  ```jsx
  import GraphiQL from 'graphiql';
  ```

  ### After

  ```jsx
  import { GraphiQL } from 'graphiql';
  ```

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - support react 19, drop support react 16 and react 17

  - replace deprecated `ReactDOM.unmountComponentAtNode()` and `ReactDOM.render()` with `root.unmount()` and `createRoot(container).render()`
  - update `@radix-ui` and `@headlessui/react` dependencies

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - remove `disableTabs` option

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - remove `data-testid="graphiql-container"`

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - changed exports

  ```diff
  -graphiql/graphiql.css
  +graphiql/style.css
  ```

  changed cdn paths, `dist/index.umd.js` and `dist/style.css` are minified

  ```diff
  -https://unpkg.com/graphiql/graphiql.js
  -https://unpkg.com/graphiql/graphiql.min.js
  +https://unpkg.com/graphiql/dist/index.umd.js
  -https://unpkg.com/graphiql/graphiql.css
  -https://unpkg.com/graphiql/graphiql.min.css
  +https://unpkg.com/graphiql/dist/style.css
  ```

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - new looks of tabs

  - fix `disableTabs` when `Add tab` button is still shown

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - Remove `toolbar.additionalContent` and `toolbar.additionalComponent` props in favor of `GraphiQL.Toolbar` render props.

  ## Migration from `toolbar.additionalContent`

  ### Before

  ```jsx
  <GraphiQL toolbar={{ additionalContent: <button>My button</button> }} />
  ```

  ### After

  ```jsx
  <GraphiQL>
    <GraphiQL.Toolbar>
      {({ merge, prettify, copy }) => (
        <>
          {prettify}
          {merge}
          {copy}
          <button>My button</button>
        </>
      )}
    </GraphiQL.Toolbar>
  </GraphiQL>
  ```

  ## Migration from `toolbar.additionalComponent`

  ### Before

  ```jsx
  <GraphiQL
    toolbar={{
      additionalComponent: function MyComponentWithAccessToContext() {
        return <button>My button</button>;
      },
    }}
  />
  ```

  ### After

  ```jsx
  <GraphiQL>
    <GraphiQL.Toolbar>
      {({ merge, prettify, copy }) => (
        <>
          {prettify}
          {merge}
          {copy}
          <MyComponentWithAccessToContext />
        </>
      )}
    </GraphiQL.Toolbar>
  </GraphiQL>
  ```

  ***

  Additionally, you can sort default toolbar buttons in different order or remove unneeded buttons for you:

  ```jsx
  <GraphiQL>
    <GraphiQL.Toolbar>
      {({ prettify, copy }) => (
        <>
          {copy /* Copy button will be first instead of default last */}
          {/* Merge button is removed from toolbar */}
          {prettify}
        </>
      )}
    </GraphiQL.Toolbar>
  </GraphiQL>
  ```

### Minor Changes

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - Add support for `onPrettifyQuery` callback to enable customised query formatting

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - Update GraphiQL CDN example using ESM-based CDN esm.sh

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - update `vite` and related dependencies

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - remove `.graphiql-session` class

### Patch Changes

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - update graphql to `16.9.0` and use vite `define` configuration to remove development code from cdn bundle

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - Respect Markdown format: ignore single newline

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - use `position: absolute` for `.graphiql-logo` class

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - replace `overflow-y: scroll` with `overflow-y: auto`

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - rollback `position: absolute` style for `.graphiql-logo` because tabs will behind logo

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - prefer `location` over `window.location`

  - prefer `navigator` over `window.navigator`

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - use `right: var(--px-16)` instead of `right: 0` for `.graphiql-logo`

- [#3904](https://github.com/graphql/graphiql/pull/3904) [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602) Thanks [@dimaMachina](https://github.com/dimaMachina)! - replace `Tooltip`s in tabs with html `title="..."` attribute

- Updated dependencies [[`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602), [`d1395f9`](https://github.com/graphql/graphiql/commit/d1395f987b3f9c70b69ec5ad7283c63594dd7602)]:
  - @graphiql/react@0.30.0

## 4.0.0-alpha.5

### Minor Changes

- [#3733](https://github.com/graphql/graphiql/pull/3733) [`8dbddb5`](https://github.com/graphql/graphiql/commit/8dbddb50273720d76f895af6b783b04204c68e03) Thanks [@dimaMachina](https://github.com/dimaMachina)! - Add support for `onPrettifyQuery` callback to enable customised query formatting

### Patch Changes

- Updated dependencies [[`8dbddb5`](https://github.com/graphql/graphiql/commit/8dbddb50273720d76f895af6b783b04204c68e03)]:
  - @graphiql/react@1.0.0-alpha.4

## 4.0.0-alpha.4

### Minor Changes

- [#3728](https://github.com/graphql/graphiql/pull/3728) [`a1a5208`](https://github.com/graphql/graphiql/commit/a1a5208aeebe4ff622e83cd355f8b4e9b7fa011c) Thanks [@dimaMachina](https://github.com/dimaMachina)! - remove `.graphiql-session` class

### Patch Changes

- [#3414](https://github.com/graphql/graphiql/pull/3414) [`f8b719f`](https://github.com/graphql/graphiql/commit/f8b719f215a79038d1b2a54ddfef461fd849a912) Thanks [@leonardehrenfried](https://github.com/leonardehrenfried)! - Respect Markdown format: ignore single newline

- [#3730](https://github.com/graphql/graphiql/pull/3730) [`360a038`](https://github.com/graphql/graphiql/commit/360a0385d4ef0105beb8e76044a78f5cd43c9448) Thanks [@dimaMachina](https://github.com/dimaMachina)! - rollback `position: absolute` style for `.graphiql-logo` because tabs will behind logo

- [#3726](https://github.com/graphql/graphiql/pull/3726) [`196e9a0`](https://github.com/graphql/graphiql/commit/196e9a081ffc0df16a5537c8ec0fb622fc3ba0b0) Thanks [@dimaMachina](https://github.com/dimaMachina)! - use `right: var(--px-16)` instead of `right: 0` for `.graphiql-logo`

- Updated dependencies [[`f8b719f`](https://github.com/graphql/graphiql/commit/f8b719f215a79038d1b2a54ddfef461fd849a912), [`360a038`](https://github.com/graphql/graphiql/commit/360a0385d4ef0105beb8e76044a78f5cd43c9448)]:
  - @graphiql/react@1.0.0-alpha.3

## 4.0.0-alpha.3

### Patch Changes

- [#3720](https://github.com/graphql/graphiql/pull/3720) [`79f3abf`](https://github.com/graphql/graphiql/commit/79f3abf9b697c448442e32eb5a21b7ff720bc242) Thanks [@dimaMachina](https://github.com/dimaMachina)! - replace `overflow-y: scroll` with `overflow-y: auto`

- [#3720](https://github.com/graphql/graphiql/pull/3720) [`79f3abf`](https://github.com/graphql/graphiql/commit/79f3abf9b697c448442e32eb5a21b7ff720bc242) Thanks [@dimaMachina](https://github.com/dimaMachina)! - replace `Tooltip`s in tabs with html `title="..."` attribute

- Updated dependencies [[`79f3abf`](https://github.com/graphql/graphiql/commit/79f3abf9b697c448442e32eb5a21b7ff720bc242)]:
  - @graphiql/react@1.0.0-alpha.2

## 4.0.0-alpha.2

### Patch Changes

- [#3716](https://github.com/graphql/graphiql/pull/3716) [`cc2808f`](https://github.com/graphql/graphiql/commit/cc2808f9b0d9ac0f98603299ec67e2a659cbfcd7) Thanks [@dimaMachina](https://github.com/dimaMachina)! - use `position: absolute` for `.graphiql-logo` class

- Updated dependencies [[`bf0c4e7`](https://github.com/graphql/graphiql/commit/bf0c4e7236f4a68448063aa0c6a4ed439e869a9f)]:
  - @graphiql/react@1.0.0-alpha.1

## 4.0.0-alpha.1

### Major Changes

- [#3713](https://github.com/graphql/graphiql/pull/3713) [`27bbc51`](https://github.com/graphql/graphiql/commit/27bbc51a69504ffa9c6efbb17f112668f38fe52d) Thanks [@dimaMachina](https://github.com/dimaMachina)! - show tabs even there is only 1 tab

- [#3707](https://github.com/graphql/graphiql/pull/3707) [`3c901c1`](https://github.com/graphql/graphiql/commit/3c901c104123750f45bcd64ade5b0ab9706d3146) Thanks [@dimaMachina](https://github.com/dimaMachina)! - Remove `toolbar.additionalContent` and `toolbar.additionalComponent` props in favor of `GraphiQL.Toolbar` render props.

  ## Migration from `toolbar.additionalContent`

  #### Before

  ```jsx
  <GraphiQL toolbar={{ additionalContent: <button>My button</button> }} />
  ```

  #### After

  ```jsx
  <GraphiQL>
    <GraphiQL.Toolbar>
      {({ merge, prettify, copy }) => (
        <>
          {prettify}
          {merge}
          {copy}
          <button>My button</button>
        </>
      )}
    </GraphiQL.Toolbar>
  </GraphiQL>
  ```

  ### Migration from `toolbar.additionalComponent`

  #### Before

  ```jsx
  <GraphiQL
    toolbar={{
      additionalComponent: function MyComponentWithAccessToContext() {
        return <button>My button</button>;
      },
    }}
  />
  ```

  #### After

  ```jsx
  <GraphiQL>
    <GraphiQL.Toolbar>
      {({ merge, prettify, copy }) => (
        <>
          {prettify}
          {merge}
          {copy}
          <MyComponentWithAccessToContext />
        </>
      )}
    </GraphiQL.Toolbar>
  </GraphiQL>
  ```

  ***

  Additionally, you can sort default toolbar buttons in different order or remove unneeded buttons for you:

  ```jsx
  <GraphiQL>
    <GraphiQL.Toolbar>
      {({ prettify, copy }) => (
        <>
          {copy /* Copy button will be first instead of default last */}
          {/* Merge button is removed from toolbar */}
          {prettify}
        </>
      )}
    </GraphiQL.Toolbar>
  </GraphiQL>
  ```

## 4.0.0-alpha.0

### Major Changes

- [#3706](https://github.com/graphql/graphiql/pull/3706) [`343dd59`](https://github.com/graphql/graphiql/commit/343dd599ee10b0670cd7ab4dfaa65344f0d48c84) Thanks [@dimaMachina](https://github.com/dimaMachina)! - remove default export

  ## Migration

  ### Before

  ```jsx
  import GraphiQL from 'graphiql';
  ```

  ### After

  ```jsx
  import { GraphiQL } from 'graphiql';
  ```

- [#3687](https://github.com/graphql/graphiql/pull/3687) [`09e7004`](https://github.com/graphql/graphiql/commit/09e700403beb6c7290d165df33a2455ac2196971) Thanks [@dimaMachina](https://github.com/dimaMachina)! - remove `disableTabs` option

- [#3688](https://github.com/graphql/graphiql/pull/3688) [`0fdd9b9`](https://github.com/graphql/graphiql/commit/0fdd9b9f32513d96281f577a5d9bd2fefb5f05d4) Thanks [@dimaMachina](https://github.com/dimaMachina)! - remove `data-testid="graphiql-container"`

- [#3679](https://github.com/graphql/graphiql/pull/3679) [`5d90e0e`](https://github.com/graphql/graphiql/commit/5d90e0eed58214c5926e6e0edb196971b15b1121) Thanks [@dimaMachina](https://github.com/dimaMachina)! - migrate from `webpack` to `vite`

  changed exports

  ```diff
  -graphiql/graphiql.css
  +graphiql/style.css
  ```

  changed cdn paths, `dist/index.umd.js` and `dist/style.css` are minified

  ```diff
  -https://unpkg.com/graphiql/graphiql.js
  -https://unpkg.com/graphiql/graphiql.min.js
  +https://unpkg.com/graphiql/dist/index.umd.js
  -https://unpkg.com/graphiql/graphiql.css
  -https://unpkg.com/graphiql/graphiql.min.css
  +https://unpkg.com/graphiql/dist/style.css
  ```

- [#3644](https://github.com/graphql/graphiql/pull/3644) [`3c1a345`](https://github.com/graphql/graphiql/commit/3c1a345acd9bf07b45bc230009cb57c51c425673) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - new looks of tabs

  - fix `disableTabs` when `Add tab` button is still shown

### Patch Changes

- [#3683](https://github.com/graphql/graphiql/pull/3683) [`8efb873`](https://github.com/graphql/graphiql/commit/8efb873458489ce3497d917bcafd4ad8dfcbe6c8) Thanks [@dimaMachina](https://github.com/dimaMachina)! - update graphql to `16.9.0` and use vite `define` configuration to remove development code from cdn bundle

- [#3692](https://github.com/graphql/graphiql/pull/3692) [`82bc961`](https://github.com/graphql/graphiql/commit/82bc961a33c4e9da29dffb4a603035a4909f49ad) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - prefer `location` over `window.location`
  - prefer `navigator` over `window.navigator`
- Updated dependencies [[`00415d2`](https://github.com/graphql/graphiql/commit/00415d2940c4d76a4a9e683e9fa0504ba97dd627), [`9baf1f0`](https://github.com/graphql/graphiql/commit/9baf1f0fc9f32404fbb8bf57b3d1c2c2c8778ddb), [`8ff87d7`](https://github.com/graphql/graphiql/commit/8ff87d7b6b3d5d12b539612a39ca3abf7e631106), [`82bc961`](https://github.com/graphql/graphiql/commit/82bc961a33c4e9da29dffb4a603035a4909f49ad), [`3c1a345`](https://github.com/graphql/graphiql/commit/3c1a345acd9bf07b45bc230009cb57c51c425673)]:
  - @graphiql/react@1.0.0-alpha.0

## 3.9.0

### Minor Changes

- [#3826](https://github.com/graphql/graphiql/pull/3826) [`cb29e9f`](https://github.com/graphql/graphiql/commit/cb29e9fbe1362778bc327513fc884c4ec419775e) Thanks [@dimaMachina](https://github.com/dimaMachina)! - - remove react compiler custom patch

  - update `react-compiler-runtime` to use `19.1.0-rc.1` version

- [#3826](https://github.com/graphql/graphiql/pull/3826) [`cb29e9f`](https://github.com/graphql/graphiql/commit/cb29e9fbe1362778bc327513fc884c4ec419775e) Thanks [@dimaMachina](https://github.com/dimaMachina)! - migrate `graphiql` to `vite` and `react compiler`

### Patch Changes

- Updated dependencies [[`cb29e9f`](https://github.com/graphql/graphiql/commit/cb29e9fbe1362778bc327513fc884c4ec419775e), [`1adc40c`](https://github.com/graphql/graphiql/commit/1adc40cc56dbf79296bb857156e6adce1c44dcbe)]:
  - @graphiql/react@0.29.0

## 3.8.3

### Patch Changes

- [#3843](https://github.com/graphql/graphiql/pull/3843) [`16b5698`](https://github.com/graphql/graphiql/commit/16b56982ce4de62c850380fe25698c3893551c5a) Thanks [@dimaMachina](https://github.com/dimaMachina)! - fix regression in documentation explorer search when clicking on results in dropdown

- Updated dependencies [[`16b5698`](https://github.com/graphql/graphiql/commit/16b56982ce4de62c850380fe25698c3893551c5a)]:
  - @graphiql/react@0.28.2

## 3.8.2

### Patch Changes

- [#3840](https://github.com/graphql/graphiql/pull/3840) [`b529a6c`](https://github.com/graphql/graphiql/commit/b529a6c59b760f8bc54df0cd691b0704d94c022b) Thanks [@dimaMachina](https://github.com/dimaMachina)! - update `@graphiql/react` dependency range to `^0.28.1`

## 3.8.1

### Patch Changes

- Updated dependencies [[`3633d61`](https://github.com/graphql/graphiql/commit/3633d61c3c597adf60c0ec1bbf98cf6a1f49beed)]:
  - @graphiql/react@0.28.0

## 3.8.0

### Minor Changes

- [#3825](https://github.com/graphql/graphiql/pull/3825) [`7cdcabf`](https://github.com/graphql/graphiql/commit/7cdcabf9d401683e90c995476b187c6f8ea70f63) Thanks [@dimaMachina](https://github.com/dimaMachina)! - migrate `graphiql` from `jest` to `vitest`

### Patch Changes

- Updated dependencies [[`72f06bc`](https://github.com/graphql/graphiql/commit/72f06bc52a9bdc0cb146d65861ba7364717bbdf5)]:
  - @graphiql/react@0.27.1

## 3.7.2

### Patch Changes

- Updated dependencies [[`f86e2bc`](https://github.com/graphql/graphiql/commit/f86e2bce40826b3d07755f91b37a72051de00f9c)]:
  - @graphiql/react@0.27.0

## 3.7.1

### Patch Changes

- [#3751](https://github.com/graphql/graphiql/pull/3751) [`b8538d8`](https://github.com/graphql/graphiql/commit/b8538d87421edb086b32d4eb2e30a3f7d9d9e893) Thanks [@dimaMachina](https://github.com/dimaMachina)! - replace deprecated `navigator.platform` with `navigator.userAgent`

  fix placeholder `⌘ K` in doc explorer search input for non mac devices, replace by `Ctrl K`

- Updated dependencies [[`b8538d8`](https://github.com/graphql/graphiql/commit/b8538d87421edb086b32d4eb2e30a3f7d9d9e893)]:
  - @graphiql/react@0.26.2

## 3.7.0

### Minor Changes

- [#3619](https://github.com/graphql/graphiql/pull/3619) [`9aef83a`](https://github.com/graphql/graphiql/commit/9aef83a32aeb5f193a3ff0f191c95d09eb0d70b6) Thanks [@Yahkob](https://github.com/Yahkob)! - add new prop `defaultTheme` to set the default color preference theme

### Patch Changes

- [#3441](https://github.com/graphql/graphiql/pull/3441) [`959ed21`](https://github.com/graphql/graphiql/commit/959ed21815682fc439f64d78e23e603a8f313a6f) Thanks [@cimdalli](https://github.com/cimdalli)! - fix: set query editor to `defaultQuery` while adding a new tab or GraphiQL's default query

  ```graphql
  # Welcome to GraphiQL
  #
  # GraphiQL is an in-browser tool for writing, validating, and
  # testing GraphQL queries.

  ...
  ```

- Updated dependencies [[`959ed21`](https://github.com/graphql/graphiql/commit/959ed21815682fc439f64d78e23e603a8f313a6f), [`9aef83a`](https://github.com/graphql/graphiql/commit/9aef83a32aeb5f193a3ff0f191c95d09eb0d70b6)]:
  - @graphiql/react@0.26.0

## 3.6.0

### Minor Changes

- [#3563](https://github.com/graphql/graphiql/pull/3563) [`4fb231f`](https://github.com/graphql/graphiql/commit/4fb231fb9619544974d81be9a2e7d92e37ab7426) Thanks [@klippx](https://github.com/klippx)! - Add new prop `confirmCloseTab` to allow control of closing tabs

- [#3532](https://github.com/graphql/graphiql/pull/3532) [`7404e8e`](https://github.com/graphql/graphiql/commit/7404e8e6c62b06107f452142493297ec70f1649c) Thanks [@Cr4xy](https://github.com/Cr4xy)! - Add webp support to graphiql results image-preview

### Patch Changes

- Updated dependencies [[`7404e8e`](https://github.com/graphql/graphiql/commit/7404e8e6c62b06107f452142493297ec70f1649c)]:
  - @graphiql/react@0.25.0

## 3.5.0

### Minor Changes

- [#3682](https://github.com/graphql/graphiql/pull/3682) [`6c9f0df`](https://github.com/graphql/graphiql/commit/6c9f0df83ea4afe7fa59f84d83d59fba73dc3931) Thanks [@yaacovCR](https://github.com/yaacovCR)! - Support v17 of `graphql-js` from `17.0.0-alpha.2` forward.

  Includes support for the latest incremental delivery response format. For further details, see https://github.com/graphql/defer-stream-wg/discussions/69.

### Patch Changes

- Updated dependencies [[`6c9f0df`](https://github.com/graphql/graphiql/commit/6c9f0df83ea4afe7fa59f84d83d59fba73dc3931)]:
  - @graphiql/react@0.24.0

## 3.4.1

### Patch Changes

- [#3675](https://github.com/graphql/graphiql/pull/3675) [`676f910`](https://github.com/graphql/graphiql/commit/676f910638eed5177146045d028a74e623884b45) Thanks [@dimaMachina](https://github.com/dimaMachina)! - move `@graphiql/toolkit` to `devDependecies` because umd build is bundled with all dependencies in one file

- [#3655](https://github.com/graphql/graphiql/pull/3655) [`5450e6b`](https://github.com/graphql/graphiql/commit/5450e6b547add41a9dd89145934e79576b5544e6) Thanks [@dimaMachina](https://github.com/dimaMachina)! - remove unused dependencies `graphql-language-service` and `markdown-it`

- Updated dependencies [[`6a0a5e5`](https://github.com/graphql/graphiql/commit/6a0a5e590b7b526af8a66c59a27ec3d0144af572)]:
  - @graphiql/react@0.23.1

## 3.4.0

### Minor Changes

- [#3643](https://github.com/graphql/graphiql/pull/3643) [`82f1ecc`](https://github.com/graphql/graphiql/commit/82f1eccb52e328241cee93389c58154b9f2e8730) Thanks [@dimaMachina](https://github.com/dimaMachina)! - add `className` prop. Additional class names which will be appended to the GraphiQL container element

### Patch Changes

- Updated dependencies [[`5bc7b84`](https://github.com/graphql/graphiql/commit/5bc7b84531b6404553787615d61a5cbcc96c1d6f), [`fdec377`](https://github.com/graphql/graphiql/commit/fdec377f28ac0d918a219b78dfa2d8f0996ff84d), [`56c6f45`](https://github.com/graphql/graphiql/commit/56c6f4571dd0dfda307ed11c5afb8c837ad928b0), [`93c7e9f`](https://github.com/graphql/graphiql/commit/93c7e9fd224cb4f1e9a86b3391efc1e0ef6e1e3f)]:
  - @graphiql/react@0.23.0
  - graphql-language-service@5.2.2
  - @graphiql/toolkit@0.9.2

## 3.3.2

### Patch Changes

- [#3634](https://github.com/graphql/graphiql/pull/3634) [`adf0ba01`](https://github.com/graphql/graphiql/commit/adf0ba019902dcac2e49ccee69b79a6665c4766d) Thanks [@dimaMachina](https://github.com/dimaMachina)! - when alpha is `1`, use `hsl` instead of `hsla`

- Updated dependencies [[`adf0ba01`](https://github.com/graphql/graphiql/commit/adf0ba019902dcac2e49ccee69b79a6665c4766d)]:
  - @graphiql/react@0.22.4

## 3.3.1

### Patch Changes

- Updated dependencies [[`335d830c`](https://github.com/graphql/graphiql/commit/335d830c2a4e551ef97fbeff8ed7c538ff5cd4af)]:
  - @graphiql/react@0.22.3

## 3.3.0

### Minor Changes

- [#3407](https://github.com/graphql/graphiql/pull/3407) [`115c1c02`](https://github.com/graphql/graphiql/commit/115c1c0281b3bcba6d2ae13f0df51e2cb1d0c24c) Thanks [@TuvalSimha](https://github.com/TuvalSimha)! - Add a new prop to GraphiQL component: `forcedTheme` to force the theme and hide the theme switcher.

## 3.2.3

### Patch Changes

- Updated dependencies [[`03ab3a6b`](https://github.com/graphql/graphiql/commit/03ab3a6b76378591ef79a828d80cc69b0b8f2842), [`aa6dbbb4`](https://github.com/graphql/graphiql/commit/aa6dbbb45bf51c1966537640fbe5c4f375735c8d)]:
  - @graphiql/react@0.22.2
  - graphql-language-service@5.2.1

## 3.2.2

### Patch Changes

- Updated dependencies [[`224b43f5`](https://github.com/graphql/graphiql/commit/224b43f5473456f264a82998d48a34a441537f54)]:
  - @graphiql/react@0.22.1

## 3.2.1

### Patch Changes

- Updated dependencies [[`d48f4ef5`](https://github.com/graphql/graphiql/commit/d48f4ef56578dad7ec90f33458353791e463ef7b)]:
  - @graphiql/react@0.22.0

## 3.2.0

### Minor Changes

- [#3569](https://github.com/graphql/graphiql/pull/3569) [`5d051054`](https://github.com/graphql/graphiql/commit/5d05105469c3f0cbeb5e294da1cf6ff2355e4eb5) Thanks [@AaronMoat](https://github.com/AaronMoat)! - Update to markdown-it 14.x

### Patch Changes

- Updated dependencies [[`5d051054`](https://github.com/graphql/graphiql/commit/5d05105469c3f0cbeb5e294da1cf6ff2355e4eb5)]:
  - @graphiql/react@0.21.0

## 3.1.2

### Patch Changes

- Updated dependencies []:
  - @graphiql/react@0.20.4

## 3.1.1

### Patch Changes

- Updated dependencies [[`2b6ea316`](https://github.com/graphql/graphiql/commit/2b6ea3166c8d8e152f16d87c878aa8a66f1b3775)]:
  - @graphiql/react@0.20.3

## 3.1.0

### Minor Changes

- [#3408](https://github.com/graphql/graphiql/pull/3408) [`a8080197`](https://github.com/graphql/graphiql/commit/a80801970e095e493eb0fda7687766f103bf701e) Thanks [@TuvalSimha](https://github.com/TuvalSimha)! - Allow disabling tabs and added new prop `disableTabs`

## 3.0.10

### Patch Changes

- [#3439](https://github.com/graphql/graphiql/pull/3439) [`d07d5fc0`](https://github.com/graphql/graphiql/commit/d07d5fc0cf764518bc1184ef168361cedf61540b) Thanks [@xonx4l](https://github.com/xonx4l)! - FIX: Unexpected duplicate CSS "display" property

## 3.0.9

### Patch Changes

- Updated dependencies [[`e89c432d`](https://github.com/graphql/graphiql/commit/e89c432d8d2b91f087b683360f23e0686462bc02)]:
  - @graphiql/react@0.20.2

## 3.0.8

### Patch Changes

- Updated dependencies [[`39bf31d1`](https://github.com/graphql/graphiql/commit/39bf31d15b1e7fb5f235ec9adc1ce8081536de4a)]:
  - @graphiql/react@0.20.1

## 3.0.7

### Patch Changes

- Updated dependencies [[`f6afd22d`](https://github.com/graphql/graphiql/commit/f6afd22d3f5a20089759042f16fd865646a32038)]:
  - @graphiql/react@0.20.0

## 3.0.6

### Patch Changes

- Updated dependencies [[`7b00774a`](https://github.com/graphql/graphiql/commit/7b00774affad1f25253ce49f1f48c9e3f372808c), [`7b00774a`](https://github.com/graphql/graphiql/commit/7b00774affad1f25253ce49f1f48c9e3f372808c)]:
  - graphql-language-service@5.2.0
  - @graphiql/react@0.19.4

## 3.0.5

### Patch Changes

- [#3371](https://github.com/graphql/graphiql/pull/3371) [`2348641c`](https://github.com/graphql/graphiql/commit/2348641c07748691c478ac5f67032b7e9081f9cb) Thanks [@acao](https://github.com/acao)! - Solves #2825, an old bug where new tabs were created on every refresh

  the bug occurred when:

  1. `shouldPersistHeaders` is not set to true
  2. `headers` or `defaultHeaders` are provided as props
  3. the user refreshes the browser

- Updated dependencies [[`2348641c`](https://github.com/graphql/graphiql/commit/2348641c07748691c478ac5f67032b7e9081f9cb)]:
  - @graphiql/react@0.19.3

## 3.0.4

### Patch Changes

- [#3364](https://github.com/graphql/graphiql/pull/3364) [`d67c13f6`](https://github.com/graphql/graphiql/commit/d67c13f6e1f478b171801afd0767b98312db04c9) Thanks [@acao](https://github.com/acao)! - Fix search result bug on select, #33307

- Updated dependencies [[`4cbdf183`](https://github.com/graphql/graphiql/commit/4cbdf18385d34ef9bc095c376936f92a62eb9e9b), [`d67c13f6`](https://github.com/graphql/graphiql/commit/d67c13f6e1f478b171801afd0767b98312db04c9)]:
  - @graphiql/toolkit@0.9.1
  - @graphiql/react@0.19.2

## 3.0.3

### Patch Changes

- [#3359](https://github.com/graphql/graphiql/pull/3359) [`8ebedc9a`](https://github.com/graphql/graphiql/commit/8ebedc9a518581f3dcbaa440bcd829d4546c76db) Thanks [@acao](https://github.com/acao)! - export createLocalStorage in UMD bundle

## 3.0.2

### Patch Changes

- [#3349](https://github.com/graphql/graphiql/pull/3349) [`17069e7a`](https://github.com/graphql/graphiql/commit/17069e7a0224dbce3f5523630a898e093f5c47c9) Thanks [@acao](https://github.com/acao)! - fix display of deprecation reason on field type docs

- Updated dependencies [[`17069e7a`](https://github.com/graphql/graphiql/commit/17069e7a0224dbce3f5523630a898e093f5c47c9), [`ffb6486d`](https://github.com/graphql/graphiql/commit/ffb6486d1eab0be2bc8fdec366b5671a5d6504d1), [`e4a36207`](https://github.com/graphql/graphiql/commit/e4a362071edf1db53f87f271c523ab2f3a5c4717)]:
  - @graphiql/react@0.19.1
  - @graphiql/toolkit@0.9.0

## 3.0.1

### Patch Changes

- Updated dependencies [[`9a38de29`](https://github.com/graphql/graphiql/commit/9a38de29fddf174ba9e793ac5852407537244f87)]:
  - @graphiql/react@0.19.0

## 3.0.0

### Major Changes

- [#3181](https://github.com/graphql/graphiql/pull/3181) [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696) Thanks [@B2o5T](https://github.com/B2o5T)! - remove `initialTabs`, use `defaultTabs` instead

### Patch Changes

- [#3235](https://github.com/graphql/graphiql/pull/3235) [`5d062809`](https://github.com/graphql/graphiql/commit/5d062809b5240c393854e3f97f2117e58d505991) Thanks [@B2o5T](https://github.com/B2o5T)! - remove unnecessary `<div />` wrappers

- Updated dependencies [[`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`5971d528`](https://github.com/graphql/graphiql/commit/5971d528b0608e76d9d109103f64857a790a99b9), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`d9e5089f`](https://github.com/graphql/graphiql/commit/d9e5089f78f85cd50c3e3e3ba8510f7dda3d06f5), [`bc9d243d`](https://github.com/graphql/graphiql/commit/bc9d243d40b95f95fc9d00d25aa0dd1733952626), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`67bf93a3`](https://github.com/graphql/graphiql/commit/67bf93a33e98c60ae3a686063a1c47037f88ef49)]:
  - @graphiql/react@0.18.0
  - graphql-language-service@5.1.7

## 3.0.0-alpha.1

### Patch Changes

- Updated dependencies [[`5971d528`](https://github.com/graphql/graphiql/commit/5971d528b0608e76d9d109103f64857a790a99b9), [`d9e5089f`](https://github.com/graphql/graphiql/commit/d9e5089f78f85cd50c3e3e3ba8510f7dda3d06f5), [`bc9d243d`](https://github.com/graphql/graphiql/commit/bc9d243d40b95f95fc9d00d25aa0dd1733952626), [`67bf93a3`](https://github.com/graphql/graphiql/commit/67bf93a33e98c60ae3a686063a1c47037f88ef49)]:
  - graphql-language-service@5.1.7-alpha.0
  - @graphiql/react@0.18.0-alpha.1

## 3.0.0-alpha.0

### Major Changes

- [#3181](https://github.com/graphql/graphiql/pull/3181) [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696) Thanks [@B2o5T](https://github.com/B2o5T)! - remove `initialTabs`, use `defaultTabs` instead

### Patch Changes

- Updated dependencies [[`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696), [`9ac84bfc`](https://github.com/graphql/graphiql/commit/9ac84bfc7b847105565852a01bdca122319e3696)]:
  - @graphiql/react@0.18.0-alpha.0

## 2.4.7

### Patch Changes

- [#3198](https://github.com/graphql/graphiql/pull/3198) [`e6cb6395`](https://github.com/graphql/graphiql/commit/e6cb63956baf338f09806c2fb8d5648fde19869d) Thanks [@B2o5T](https://github.com/B2o5T)! - fix ReferenceError: window is not defined in Next.js

## 2.4.6

### Patch Changes

- [#3124](https://github.com/graphql/graphiql/pull/3124) [`c645932c`](https://github.com/graphql/graphiql/commit/c645932c7973e11ad917e1d1d897fd409f8c042f) Thanks [@B2o5T](https://github.com/B2o5T)! - avoid unnecessary renders by using useMemo or useCallback

- Updated dependencies [[`911cf3e0`](https://github.com/graphql/graphiql/commit/911cf3e0b0fa13268245463c8db8299279e5c461), [`c645932c`](https://github.com/graphql/graphiql/commit/c645932c7973e11ad917e1d1d897fd409f8c042f), [`2ca4841b`](https://github.com/graphql/graphiql/commit/2ca4841baf74e87a3f067b3415f8da3347ee3898), [`7bf90929`](https://github.com/graphql/graphiql/commit/7bf90929f62ba812c0946e0424f9f843f7b6b0ff), [`431b7fe1`](https://github.com/graphql/graphiql/commit/431b7fe1efefa4867f0ea617adc436b1117052e8)]:
  - @graphiql/react@0.17.6

## 2.4.5

### Patch Changes

- Updated dependencies [[`2b212941`](https://github.com/graphql/graphiql/commit/2b212941628498957d95ee89a7a5a0623f391b7a), [`9b333a04`](https://github.com/graphql/graphiql/commit/9b333a047d6b75db7681f484156d8772e9f91810)]:
  - @graphiql/react@0.17.5

## 2.4.4

### Patch Changes

- Updated dependencies [[`707f3cbc`](https://github.com/graphql/graphiql/commit/707f3cbca3ac2ce186058e7d2b145cdf69bf7d9c), [`06007498`](https://github.com/graphql/graphiql/commit/06007498880528ed75dd4d705dcbcd7c9e775939)]:
  - @graphiql/react@0.17.4
  - graphql-language-service@5.1.6

## 2.4.3

### Patch Changes

- Updated dependencies [[`4d33b221`](https://github.com/graphql/graphiql/commit/4d33b2214e941f171385a1b72a1fa995714bb284)]:
  - graphql-language-service@5.1.5
  - @graphiql/react@0.17.3

## 2.4.2

### Patch Changes

- [#3113](https://github.com/graphql/graphiql/pull/3113) [`2e477eb2`](https://github.com/graphql/graphiql/commit/2e477eb24672a242ae4a4f2dfaeaf41152ed7ee9) Thanks [@B2o5T](https://github.com/B2o5T)! - replace `.forEach` with `for..of`

- Updated dependencies [[`2e477eb2`](https://github.com/graphql/graphiql/commit/2e477eb24672a242ae4a4f2dfaeaf41152ed7ee9), [`4879984e`](https://github.com/graphql/graphiql/commit/4879984ea1803a6e9f97d81c97e8ba27aacddae9), [`51007002`](https://github.com/graphql/graphiql/commit/510070028b7d8e98f2ba25f396519976aea5fa4b), [`15c26eb6`](https://github.com/graphql/graphiql/commit/15c26eb6d621a85df9eecb2b8a5fa009fa2fe040)]:
  - @graphiql/react@0.17.2
  - @graphiql/toolkit@0.8.4
  - graphql-language-service@5.1.4

## 2.4.1

### Patch Changes

- [#3087](https://github.com/graphql/graphiql/pull/3087) [`0e2dfd49`](https://github.com/graphql/graphiql/commit/0e2dfd49b95d670a0955991fd65055000e52a9f8) Thanks [@B2o5T](https://github.com/B2o5T)! - remove nowhere used `entities` dependency

- Updated dependencies [[`2d5c60ec`](https://github.com/graphql/graphiql/commit/2d5c60ecf717abafde2bddd32b2772261d3eec8b), [`b9c13328`](https://github.com/graphql/graphiql/commit/b9c13328f3d28c0026ee0f0ecc7213065c9b016d), [`4a2284f5`](https://github.com/graphql/graphiql/commit/4a2284f54809f91d03ba51b9eb4e3ba7b8b7e773), [`881a2024`](https://github.com/graphql/graphiql/commit/881a202497d5a58eb5260a5aa54c0c88930d69a0), [`7cf4908a`](https://github.com/graphql/graphiql/commit/7cf4908a5d4bd58af315047f4dec5236e8c701fc)]:
  - @graphiql/react@0.17.1
  - @graphiql/toolkit@0.8.3
  - graphql-language-service@5.1.3

## 2.4.0

### Minor Changes

- [#3012](https://github.com/graphql/graphiql/pull/3012) [`65f5176a`](https://github.com/graphql/graphiql/commit/65f5176a408cfbbc514ca60e2e4bd2ea133a8b0b) Thanks [@benjie](https://github.com/benjie)! - GraphiQL now maintains the DocExplorer navigation stack as best it can when the schema is updated

### Patch Changes

- [#2995](https://github.com/graphql/graphiql/pull/2995) [`5f276c41`](https://github.com/graphql/graphiql/commit/5f276c415ad93350382fec873025ffecc9a29d9d) Thanks [@imolorhe](https://github.com/imolorhe)! - fix(cm6-graphql): Fix query token used as field name

- [#2962](https://github.com/graphql/graphiql/pull/2962) [`db2a0982`](https://github.com/graphql/graphiql/commit/db2a0982a17134f0069483ab283594eb64735b7d) Thanks [@B2o5T](https://github.com/B2o5T)! - clean all ESLint warnings, add `--max-warnings=0` and `--cache` flags

- [#2940](https://github.com/graphql/graphiql/pull/2940) [`8725d1b6`](https://github.com/graphql/graphiql/commit/8725d1b6b686139286cf05dec6a84d89942128ba) Thanks [@B2o5T](https://github.com/B2o5T)! - enable `unicorn/prefer-node-protocol` rule

- Updated dependencies [[`e68cb8bc`](https://github.com/graphql/graphiql/commit/e68cb8bcaf9baddf6fca747abab871ecd1bc7a4c), [`f788e65a`](https://github.com/graphql/graphiql/commit/f788e65aff267ec873237034831d1fd936222a9b), [`bdc966cb`](https://github.com/graphql/graphiql/commit/bdc966cba6134a72ff7fe40f76543c77ba15d4a4), [`65f5176a`](https://github.com/graphql/graphiql/commit/65f5176a408cfbbc514ca60e2e4bd2ea133a8b0b), [`db2a0982`](https://github.com/graphql/graphiql/commit/db2a0982a17134f0069483ab283594eb64735b7d), [`8725d1b6`](https://github.com/graphql/graphiql/commit/8725d1b6b686139286cf05dec6a84d89942128ba)]:
  - graphql-language-service@5.1.2
  - @graphiql/react@0.17.0
  - @graphiql/toolkit@0.8.2

## 2.3.0

### Minor Changes

- [#2895](https://github.com/graphql/graphiql/pull/2895) [`ccba2f33`](https://github.com/graphql/graphiql/commit/ccba2f33b67a03f492222f7afde1354cfd033b42) Thanks [@TheMightyPenguin](https://github.com/TheMightyPenguin)! - Add user facing setting for persisting headers

### Patch Changes

- [#2922](https://github.com/graphql/graphiql/pull/2922) [`d1fcad72`](https://github.com/graphql/graphiql/commit/d1fcad72607e2789517dfe4936b5ec604e46762b) Thanks [@B2o5T](https://github.com/B2o5T)! - extends `plugin:import/recommended` and fix warnings

- [#2941](https://github.com/graphql/graphiql/pull/2941) [`4a8b2e17`](https://github.com/graphql/graphiql/commit/4a8b2e1766a38eb4828cf9a81bf9d767070041de) Thanks [@B2o5T](https://github.com/B2o5T)! - enable `unicorn/prefer-logical-operator-over-ternary` rule

- [#2964](https://github.com/graphql/graphiql/pull/2964) [`cec3fb2a`](https://github.com/graphql/graphiql/commit/cec3fb2a493c4a0c40df7dfad04e1a95ed35e786) Thanks [@B2o5T](https://github.com/B2o5T)! - enable `unicorn/prefer-export-from` rule

- [#2939](https://github.com/graphql/graphiql/pull/2939) [`bca318ce`](https://github.com/graphql/graphiql/commit/bca318ceb7821f0c4b3973c5b05131c9a23bf2cf) Thanks [@jonathanawesome](https://github.com/jonathanawesome)! - removes regenerator-runtime from cdn.ts, resolves #2868

- [#2963](https://github.com/graphql/graphiql/pull/2963) [`f263f778`](https://github.com/graphql/graphiql/commit/f263f778cb95b9f413bd09ca56a43f5b9c2f6215) Thanks [@B2o5T](https://github.com/B2o5T)! - enable `prefer-destructuring` rule

- [#2938](https://github.com/graphql/graphiql/pull/2938) [`6a9d913f`](https://github.com/graphql/graphiql/commit/6a9d913f0d1b847124286b3fa1f3a2649d315171) Thanks [@B2o5T](https://github.com/B2o5T)! - enable `unicorn/throw-new-error` rule

- Updated dependencies [[`f7addb20`](https://github.com/graphql/graphiql/commit/f7addb20c4a558fbfb4112c8ff095bbc8f9d9147), [`d1fcad72`](https://github.com/graphql/graphiql/commit/d1fcad72607e2789517dfe4936b5ec604e46762b), [`4a8b2e17`](https://github.com/graphql/graphiql/commit/4a8b2e1766a38eb4828cf9a81bf9d767070041de), [`cec3fb2a`](https://github.com/graphql/graphiql/commit/cec3fb2a493c4a0c40df7dfad04e1a95ed35e786), [`695100bd`](https://github.com/graphql/graphiql/commit/695100bd317940ff3ffd8f56b54248c1dba1ac04), [`11e6ad11`](https://github.com/graphql/graphiql/commit/11e6ad11e745c671eb320731697887bb8d7177b7), [`c70d9165`](https://github.com/graphql/graphiql/commit/c70d9165cc1ef8eb1cd0d6b506ced98c626597f9), [`c44ea4f1`](https://github.com/graphql/graphiql/commit/c44ea4f1917b97daac815c08299b934c8ca57ed9), [`d502a33b`](https://github.com/graphql/graphiql/commit/d502a33b4332f1025e947c02d7cfdc5799365c8d), [`0669767e`](https://github.com/graphql/graphiql/commit/0669767e1e2196a78cbefe3679a52bcbb341e913), [`18f8e80a`](https://github.com/graphql/graphiql/commit/18f8e80ae12edfd0c36adcb300cf9e06ac27ea49), [`f263f778`](https://github.com/graphql/graphiql/commit/f263f778cb95b9f413bd09ca56a43f5b9c2f6215), [`ccba2f33`](https://github.com/graphql/graphiql/commit/ccba2f33b67a03f492222f7afde1354cfd033b42), [`6a9d913f`](https://github.com/graphql/graphiql/commit/6a9d913f0d1b847124286b3fa1f3a2649d315171), [`4ff2794c`](https://github.com/graphql/graphiql/commit/4ff2794c8b6032168e27252096cb276ce712878e)]:
  - @graphiql/react@0.16.0
  - @graphiql/toolkit@0.8.1
  - graphql-language-service@5.1.1

## 2.2.0

### Minor Changes

- [#2908](https://github.com/graphql/graphiql/pull/2908) [`3340fd74`](https://github.com/graphql/graphiql/commit/3340fd745e181ba8f1f5a6ed002a04d253a78d4a) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Deprecate the `initialTabs` prop and add a `defaultTabs` props that supersedes it

### Patch Changes

- [#2911](https://github.com/graphql/graphiql/pull/2911) [`118db402`](https://github.com/graphql/graphiql/commit/118db402eb1f5569e29f8f9bffef86d941dd2634) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Fix styles of secondary editor buttons

- [#2919](https://github.com/graphql/graphiql/pull/2919) [`f6cae4ea`](https://github.com/graphql/graphiql/commit/f6cae4eaa0258ea7fcde97ba6368830955f0abf4) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Fix overflow when there are lots of tabs that don't fit into the tab bar at once

- Updated dependencies [[`16174a05`](https://github.com/graphql/graphiql/commit/16174a053ed89fb9554d096395ab7bf69c8f6911), [`f6cae4ea`](https://github.com/graphql/graphiql/commit/f6cae4eaa0258ea7fcde97ba6368830955f0abf4), [`3340fd74`](https://github.com/graphql/graphiql/commit/3340fd745e181ba8f1f5a6ed002a04d253a78d4a), [`0851d5f9`](https://github.com/graphql/graphiql/commit/0851d5f9ecf709597d0a698609d88f99c4395665), [`83364b28`](https://github.com/graphql/graphiql/commit/83364b28020b5946ed58908d6d977f1de766e75d), [`3a7d0007`](https://github.com/graphql/graphiql/commit/3a7d00071922e2005777c92daf6ad0c1ce3e2816)]:
  - @graphiql/react@0.15.0

## 2.1.0

### Minor Changes

- [#2821](https://github.com/graphql/graphiql/pull/2821) [`29630c22`](https://github.com/graphql/graphiql/commit/29630c2219bca8b825ab0897840864364a9de2e8) Thanks [@avaly](https://github.com/avaly)! - Initial tabs support

### Patch Changes

- [#2885](https://github.com/graphql/graphiql/pull/2885) [`8f926489`](https://github.com/graphql/graphiql/commit/8f9264896e9971951853463a283a90ba3d1310ef) Thanks [@simhnna](https://github.com/simhnna)! - Fix stop execution button showing a dropdown

- [#2886](https://github.com/graphql/graphiql/pull/2886) [`2ba2f620`](https://github.com/graphql/graphiql/commit/2ba2f620b6e7de3ae6b5ea641f33e600f7f44e08) Thanks [@B2o5T](https://github.com/B2o5T)! - feat: add `defaultHeaders` prop

- Updated dependencies [[`29630c22`](https://github.com/graphql/graphiql/commit/29630c2219bca8b825ab0897840864364a9de2e8), [`8f926489`](https://github.com/graphql/graphiql/commit/8f9264896e9971951853463a283a90ba3d1310ef), [`2ba2f620`](https://github.com/graphql/graphiql/commit/2ba2f620b6e7de3ae6b5ea641f33e600f7f44e08)]:
  - @graphiql/react@0.14.0

## 2.0.13

### Patch Changes

- Updated dependencies []:
  - @graphiql/react@0.13.7

## 2.0.12

### Patch Changes

- [#2758](https://github.com/graphql/graphiql/pull/2758) [`d63801fa`](https://github.com/graphql/graphiql/commit/d63801fad08e840eff7ff26f55694c6d18769466) Thanks [@LekoArts](https://github.com/LekoArts)! - Fix the width of the plugin pane

- Updated dependencies []:
  - @graphiql/react@0.13.6

## 2.0.11

### Patch Changes

- Updated dependencies [[`682ad06e`](https://github.com/graphql/graphiql/commit/682ad06e58ded2f82fa973e8e6613dd654417fe2)]:
  - @graphiql/react@0.13.5

## 2.0.10

### Patch Changes

- Updated dependencies [[`4e2f7ff9`](https://github.com/graphql/graphiql/commit/4e2f7ff99c578ceae54a1ae17c02088bd91b89c3)]:
  - @graphiql/react@0.13.4

## 2.0.9

### Patch Changes

- [#2778](https://github.com/graphql/graphiql/pull/2778) [`905f2e5e`](https://github.com/graphql/graphiql/commit/905f2e5ea3f0b304d27ea583e250ed4baff5016e) Thanks [@jonathanawesome](https://github.com/jonathanawesome)! - Adds a box-model reset for all children of the `.graphiql-container` class. This change facilitated another change to the `--sidebar-width` variable.

- Updated dependencies [[`42700076`](https://github.com/graphql/graphiql/commit/4270007671ce52f6c2250739916083611748b657), [`36839800`](https://github.com/graphql/graphiql/commit/36839800de128b05d11c262036c8240390c72a14), [`905f2e5e`](https://github.com/graphql/graphiql/commit/905f2e5ea3f0b304d27ea583e250ed4baff5016e)]:
  - @graphiql/react@0.13.3

## 2.0.8

### Patch Changes

- [#2653](https://github.com/graphql/graphiql/pull/2653) [`39b4668d`](https://github.com/graphql/graphiql/commit/39b4668d43176526d37ecf07d8c86901d53e0d80) Thanks [@dylanowen](https://github.com/dylanowen)! - Fix `fetchError` not being cleared when a new `fetcher` is used

- Updated dependencies [[`39b4668d`](https://github.com/graphql/graphiql/commit/39b4668d43176526d37ecf07d8c86901d53e0d80)]:
  - @graphiql/react@0.13.2

## 2.0.7

### Patch Changes

- Updated dependencies [[`e244b782`](https://github.com/graphql/graphiql/commit/e244b78291c2e2bb02d5753db82437926ebb4df4)]:
  - @graphiql/toolkit@0.8.0
  - @graphiql/react@0.13.1

## 2.0.6

### Patch Changes

- [#2735](https://github.com/graphql/graphiql/pull/2735) [`ca067d88`](https://github.com/graphql/graphiql/commit/ca067d88148c5d221d196790a997ad599038fad1) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Use the new CSS variables for color alpha values defined in `@graphiql/react` in style definitions

- Updated dependencies [[`ca067d88`](https://github.com/graphql/graphiql/commit/ca067d88148c5d221d196790a997ad599038fad1), [`674bf3f8`](https://github.com/graphql/graphiql/commit/674bf3f8ff321dfb8471b0f6e5419bb77ddc94af), [`32a70065`](https://github.com/graphql/graphiql/commit/32a70065434eaa7733e28cda0ea0e7d51952e62a)]:
  - @graphiql/react@0.13.0
  - @graphiql/toolkit@0.7.3

## 2.0.5

### Patch Changes

- Updated dependencies [[`bfa90f24`](https://github.com/graphql/graphiql/commit/bfa90f249be4f68049c1bb81abfb524ae623313f), [`8ab5fcd0`](https://github.com/graphql/graphiql/commit/8ab5fcd0a8399a0f8eb1b569751dd0e8390b9679)]:
  - @graphiql/toolkit@0.7.2
  - @graphiql/react@0.12.1

## 2.0.4

### Patch Changes

- [#2745](https://github.com/graphql/graphiql/pull/2745) [`92a17490`](https://github.com/graphql/graphiql/commit/92a17490c3842b4f83ed1065b73a803f73d02a17) Thanks [@acao](https://github.com/acao)! - Specify MIT license for `@graphiql/plugin-explorer` `package.json`

* [#2741](https://github.com/graphql/graphiql/pull/2741) [`0219eef3`](https://github.com/graphql/graphiql/commit/0219eef39146495749aca2487112db52fa3bb8fd) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Improved sizing of button for adding tabs

- [#2746](https://github.com/graphql/graphiql/pull/2746) [`6f0fa98e`](https://github.com/graphql/graphiql/commit/6f0fa98eadf897c7eaf8eb89e49c46880d381033) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Fix CodeMirror editors overlapping other parts of the UI on certain browser-OS-combinations (e.g. Chrome on Windows)

- Updated dependencies [[`98e14155`](https://github.com/graphql/graphiql/commit/98e14155c650ee7c5ac639e594eb47f0052b7fa9), [`48872a87`](https://github.com/graphql/graphiql/commit/48872a87e6edec0c301102baaf669ffcce043a13), [`7dfea94a`](https://github.com/graphql/graphiql/commit/7dfea94afc0cfe79b5080f10d840bfdce53f02d7), [`3aa1f39f`](https://github.com/graphql/graphiql/commit/3aa1f39f6df559b54f703937ed510c8ba1f21058), [`0219eef3`](https://github.com/graphql/graphiql/commit/0219eef39146495749aca2487112db52fa3bb8fd)]:
  - @graphiql/react@0.12.0
  - @graphiql/toolkit@0.7.1

## 2.0.3

### Patch Changes

- [#2706](https://github.com/graphql/graphiql/pull/2706) [`ff20a381`](https://github.com/graphql/graphiql/commit/ff20a3818f10f648d7b8c18229138b0424b8b25c) Thanks [@mxstbr](https://github.com/mxstbr)! - Wrap the GraphiQL logo with a link to the repository

* [#2715](https://github.com/graphql/graphiql/pull/2715) [`c922719e`](https://github.com/graphql/graphiql/commit/c922719e6b960776cd0a71f14d2b86c6bb69373c) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Add the contents of `graphql` and `@graphiql/react` as static properties to the `GraphiQL` component in CDN bundles so that these modules can be reused from plugin CDN bundles.

## 2.0.2

### Patch Changes

- Updated dependencies [[`d65f00ea`](https://github.com/graphql/graphiql/commit/d65f00ea2d158cf532d1c71844630c5d9ec13410), [`f15ee38d`](https://github.com/graphql/graphiql/commit/f15ee38d56e4f749c145e0a17f0ed8e9a6096ac2), [`d65f00ea`](https://github.com/graphql/graphiql/commit/d65f00ea2d158cf532d1c71844630c5d9ec13410)]:
  - @graphiql/react@0.11.1

## 2.0.1

### Patch Changes

- [#2699](https://github.com/graphql/graphiql/pull/2699) [`3b642aa3`](https://github.com/graphql/graphiql/commit/3b642aa31b306994e3052bb2454933307aa51426) Thanks [@patrick91](https://github.com/patrick91)! - Export hooks in CDN bundle

* [#2700](https://github.com/graphql/graphiql/pull/2700) [`3acacf5b`](https://github.com/graphql/graphiql/commit/3acacf5b90040bbede30ad1a778e06bc969a5900) Thanks [@patrick91](https://github.com/patrick91)! - Fix cannot access `initialHeaders` before initialization

## 2.0.0

### Major Changes

- [#2694](https://github.com/graphql/graphiql/pull/2694) [`e59ec32e`](https://github.com/graphql/graphiql/commit/e59ec32e7ccdf3f7f68656533555c63620826279) Thanks [@acao](https://github.com/acao)! - BREAKING: The `GraphiQL` component does no longer set a property `g` on the `window` object.

* [#2694](https://github.com/graphql/graphiql/pull/2694) [`e59ec32e`](https://github.com/graphql/graphiql/commit/e59ec32e7ccdf3f7f68656533555c63620826279) Thanks [@acao](https://github.com/acao)! - BREAKING: Implement a new design for the GraphiQL UI. This changes both DOM structure and class names. We consider this a breaking change as custom GraphQL IDEs built on top of GraphiQL relied on these internals, e.g. overriding styles using certain class names.

- [#2694](https://github.com/graphql/graphiql/pull/2694) [`e59ec32e`](https://github.com/graphql/graphiql/commit/e59ec32e7ccdf3f7f68656533555c63620826279) Thanks [@acao](https://github.com/acao)! - BREAKING: The following static properties of the `GraphiQL` component have been removed:
  - `GraphiQL.formatResult`: You can use the function `formatResult` from `@graphiql/toolkit` instead.
  - `GraphiQL.formatError`: You can use the function `formatError` from `@graphiql/toolkit` instead.
  - `GraphiQL.QueryEditor`: You can use the `QueryEditor` component from `@graphiql/react` instead.
  - `GraphiQL.VariableEditor`: You can use the `VariableEditor` component from `@graphiql/react` instead.
  - `GraphiQL.HeaderEditor`: You can use the `HeaderEditor` component from `@graphiql/react` instead.
  - `GraphiQL.ResultViewer`: You can use the `ResponseEditor` component from `@graphiql/react` instead.
  - `GraphiQL.Button`: You can use the `ToolbarButton` component from `@graphiql/react` instead.
  - `GraphiQL.ToolbarButton`: This exposed the same component as `GraphiQL.Button`.
  - `GraphiQL.Menu`: You can use the `ToolbarMenu` component from `@graphiql/react` instead.
  - `GraphiQL.MenuItem`: You can use the `ToolbarMenu.Item` component from `@graphiql/react` instead.
  - `GraphiQL.Group`: Grouping multiple buttons side-by-side is not provided out-of-the box anymore in the new GraphiQL UI. If you want to implement a similar feature in the new vertical toolbar you can do so by adding your own styles for your custom toolbar elements. Example:
    ```jsx
    import { GraphiQL } from 'graphiql';
    function CustomGraphiQL() {
      return (
        <GraphiQL>
          <GraphiQL.Toolbar>
            {/* Add custom styles for your buttons using the given class */}
            <div className="button-group">
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </div>
          </GraphiQL.Toolbar>
        </GraphiQL>
      );
    }
    ```

* [#2694](https://github.com/graphql/graphiql/pull/2694) [`e59ec32e`](https://github.com/graphql/graphiql/commit/e59ec32e7ccdf3f7f68656533555c63620826279) Thanks [@acao](https://github.com/acao)! - BREAKING: The following exports of the `graphiql` package have been removed:
  - `DocExplorer`: Now exported from `@graphiql/react` as `DocExplorer`
    - The `schema` prop has been removed, the component now uses the schema provided by the `ExplorerContext`
  - `fillLeafs`: Now exported from `@graphiql/toolkit` as `fillLeafs`
  - `getSelectedOperationName`: Now exported from `@graphiql/toolkit` as `getSelectedOperationName`
  - `mergeAst`: Now exported from `@graphiql/toolkit` as `mergeAst`
  - `onHasCompletion`: Now exported from `@graphiql/react` as `onHasCompletion`
  - `QueryEditor`: Now exported from `@graphiql/react` as `QueryEditor`
  - `ToolbarMenu`: Now exported from `@graphiql/react` as `ToolbarMenu`
  - `ToolbarMenuItem`: Now exported from `@graphiql/react` as `ToolbarMenu.Item`
  - `ToolbarSelect`: Now exported from `@graphiql/react` as `ToolbarListbox`
  - `ToolbarSelectOption`: Now exported from `@graphiql/react` as `ToolbarListbox.Option`
  - `VariableEditor`: Now exported from `@graphiql/react` as `VariableEditor`
  - type `Fetcher`: Now exported from `@graphiql/toolkit`
  - type `FetcherOpts`: Now exported from `@graphiql/toolkit`
  - type `FetcherParams`: Now exported from `@graphiql/toolkit`
  - type `FetcherResult`: Now exported from `@graphiql/toolkit`
  - type `FetcherReturnType`: Now exported from `@graphiql/toolkit`
  - type `Observable`: Now exported from `@graphiql/toolkit`
  - type `Storage`: Now exported from `@graphiql/toolkit`
  - type `SyncFetcherResult`: Now exported from `@graphiql/toolkit`

- [#2694](https://github.com/graphql/graphiql/pull/2694) [`e59ec32e`](https://github.com/graphql/graphiql/commit/e59ec32e7ccdf3f7f68656533555c63620826279) Thanks [@acao](https://github.com/acao)! - BREAKING: The `GraphiQL` component has been refactored to be a function component. Attaching a ref to this component will no longer provide access to props, state or class methods. In order to interact with or change `GraphiQL` state you need to use the contexts and hooks provided by the `@graphiql/react` package. More details and examples can be found in the migration guide.

* [#2694](https://github.com/graphql/graphiql/pull/2694) [`e59ec32e`](https://github.com/graphql/graphiql/commit/e59ec32e7ccdf3f7f68656533555c63620826279) Thanks [@acao](https://github.com/acao)! - BREAKING: The following props of the `GraphiQL` component have been changed:
  - The props `defaultVariableEditorOpen` and `defaultSecondaryEditorOpen` have been merged into one prop `defaultEditorToolsVisibility`. The default behavior if this prop is not passed is that the editor tools are shown if at least one of the secondary editors has contents. You can pass the following values to the prop:
    - Passing `false` hides the editor tools.
    - Passing `true` shows the editor tools.
    - Passing `"variables"` explicitly shows the variables editor.
    - Passing `"headers"` explicitly shows the headers editor.
  - The props `docExplorerOpen`, `onToggleDocs` and `onToggleHistory` have been removed. They are replaced by the more generic props `visiblePlugin` (for controlling which plugin is visible) and `onTogglePluginVisibility` (which is called each time the visibility of any plugin changes).
  - The `headerEditorEnabled` prop has been renamed to `isHeadersEditorEnabled`.
  - The `ResultsTooltip` prop has been renamed to `responseTooltip`.
  - Tabs are now always enabled. The `tabs` prop has therefore been replaced with a prop `onTabChange`. If you used the `tabs` prop before to pass this function you can change your implementation like so:
    ```diff
    <GraphiQL
    -  tabs={{ onTabChange: (tabState) => {/* do something */} }}
    +  onTabChange={(tabState) => {/* do something */}}
    />
    ```

### Minor Changes

- [#2694](https://github.com/graphql/graphiql/pull/2694) [`e59ec32e`](https://github.com/graphql/graphiql/commit/e59ec32e7ccdf3f7f68656533555c63620826279) Thanks [@acao](https://github.com/acao)! - GraphiQL now ships with a dark theme. By default the interface respects the system settings, the theme can also be explicitly chosen via the new settings dialog.

### Patch Changes

- Updated dependencies [[`e59ec32e`](https://github.com/graphql/graphiql/commit/e59ec32e7ccdf3f7f68656533555c63620826279), [`e59ec32e`](https://github.com/graphql/graphiql/commit/e59ec32e7ccdf3f7f68656533555c63620826279), [`e59ec32e`](https://github.com/graphql/graphiql/commit/e59ec32e7ccdf3f7f68656533555c63620826279), [`e59ec32e`](https://github.com/graphql/graphiql/commit/e59ec32e7ccdf3f7f68656533555c63620826279), [`e59ec32e`](https://github.com/graphql/graphiql/commit/e59ec32e7ccdf3f7f68656533555c63620826279), [`e59ec32e`](https://github.com/graphql/graphiql/commit/e59ec32e7ccdf3f7f68656533555c63620826279)]:
  - @graphiql/react@0.11.0
  - @graphiql/toolkit@0.7.0

## 1.11.6

### Patch Changes

- Updated dependencies [[`d6ff4d7a`](https://github.com/graphql/graphiql/commit/d6ff4d7a5d535a0c43fe5914016bac9ef0c2b782)]:
  - graphql-language-service@5.1.0
  - @graphiql/react@0.10.1

## 1.11.5

### Patch Changes

- [#2678](https://github.com/graphql/graphiql/pull/2678) [`b3470b99`](https://github.com/graphql/graphiql/commit/b3470b993bd4c1b90ab7831581de2021af1bb6b0) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Add the attribute `type="button"` to all buttons

## 1.11.4

### Patch Changes

- Updated dependencies [[`85d5af25`](https://github.com/graphql/graphiql/commit/85d5af25d77c29b7d02da90a431c8c15f610c22a), [`6ff0bab9`](https://github.com/graphql/graphiql/commit/6ff0bab978d63778b8ab4ba6e79fceb36c2db87f), [`0aff68a6`](https://github.com/graphql/graphiql/commit/0aff68a645cceb6b9689e0f394e8bece01710efc)]:
  - @graphiql/react@0.10.0

## 1.11.3

### Patch Changes

- [#2642](https://github.com/graphql/graphiql/pull/2642) [`100af928`](https://github.com/graphql/graphiql/commit/100af9284de18ca89524c646e86854313c5d067b) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Fix controlling the operation name sent with the request using the `operationName` prop

- Updated dependencies [[`100af928`](https://github.com/graphql/graphiql/commit/100af9284de18ca89524c646e86854313c5d067b), [`100af928`](https://github.com/graphql/graphiql/commit/100af9284de18ca89524c646e86854313c5d067b)]:
  - @graphiql/react@0.9.0

## 1.11.2

### Patch Changes

- Updated dependencies [[`62317e0b`](https://github.com/graphql/graphiql/commit/62317e0bae6d4ccf89d9e1e6607fd8feeb100078)]:
  - @graphiql/react@0.8.0

## 1.11.1

### Patch Changes

- Updated dependencies [[`ea732ea8`](https://github.com/graphql/graphiql/commit/ea732ea8e12272c998f1467af8b3b88b6b508e12)]:
  - @graphiql/toolkit@0.6.1
  - @graphiql/react@0.7.1

## 1.11.0

### Minor Changes

- [#2618](https://github.com/graphql/graphiql/pull/2618) [`4c814506`](https://github.com/graphql/graphiql/commit/4c814506183579b78731659d871cd4b0ba93305a) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Add a toolbar button for manually triggering introspection

### Patch Changes

- Updated dependencies [[`4c814506`](https://github.com/graphql/graphiql/commit/4c814506183579b78731659d871cd4b0ba93305a)]:
  - @graphiql/react@0.7.0

## 1.10.0

### Minor Changes

- [#2574](https://github.com/graphql/graphiql/pull/2574) [`0c98fa59`](https://github.com/graphql/graphiql/commit/0c98fa5924eadaee33713ccd8a9be6419d50cab1) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Allow passing introspection data to the `schema` prop of the `GraphiQL` component

### Patch Changes

- Updated dependencies [[`0c98fa59`](https://github.com/graphql/graphiql/commit/0c98fa5924eadaee33713ccd8a9be6419d50cab1), [`0c98fa59`](https://github.com/graphql/graphiql/commit/0c98fa5924eadaee33713ccd8a9be6419d50cab1)]:
  - @graphiql/react@0.6.0

## 1.9.13

### Patch Changes

- Updated dependencies [[`f581b437`](https://github.com/graphql/graphiql/commit/f581b437e5bdab6f3ad817d230ee6d1b410bb591)]:
  - @graphiql/react@0.5.2

## 1.9.12

### Patch Changes

- Updated dependencies [[`08346cba`](https://github.com/graphql/graphiql/commit/08346cba136825341881f9dfefc62a60d748e0ee)]:
  - @graphiql/react@0.5.1

## 1.9.11

### Patch Changes

- [#2541](https://github.com/graphql/graphiql/pull/2541) [`788d84ef`](https://github.com/graphql/graphiql/commit/788d84ef2784188981f1b4cfb78fba24153bf0cb) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Fix the `onSchemaChange` prop, it is now again called after the schema is fetched (this was broken since v1.9.3)

- Updated dependencies [[`8ce5b483`](https://github.com/graphql/graphiql/commit/8ce5b483ee190b5f5dd84eaf42e5d1359ce185e6), [`788d84ef`](https://github.com/graphql/graphiql/commit/788d84ef2784188981f1b4cfb78fba24153bf0cb)]:
  - @graphiql/react@0.5.0

## 1.9.10

### Patch Changes

- Updated dependencies [[`26e44120`](https://github.com/graphql/graphiql/commit/26e44120a18d49af451c97619fe3386a65579e05)]:
  - @graphiql/react@0.4.3

## 1.9.9

### Patch Changes

- [#2501](https://github.com/graphql/graphiql/pull/2501) [`5437ee61`](https://github.com/graphql/graphiql/commit/5437ee61e1ba6cd28ccc1cb3543df1ea788278f4) Thanks [@acao](https://github.com/acao)! - Allow Codemirror 5 `keyMap` to be defined, default `vim` or `emacs` allowed in addition to the original default of `sublime`.

- Updated dependencies [[`5437ee61`](https://github.com/graphql/graphiql/commit/5437ee61e1ba6cd28ccc1cb3543df1ea788278f4), [`cccefa70`](https://github.com/graphql/graphiql/commit/cccefa70c0466d60e8496e1df61aeb1490af723c)]:
  - @graphiql/react@0.4.2
  - graphql-language-service@5.0.6

## 1.9.8

### Patch Changes

- [#2499](https://github.com/graphql/graphiql/pull/2499) [`731b3b72`](https://github.com/graphql/graphiql/commit/731b3b72e9f087a3b429ef5e8143219a0dcf7f00) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - fix the default value for the `headerEditorEnabled` prop to be `true`

## 1.9.7

### Patch Changes

- Updated dependencies [[`c9c51b8a`](https://github.com/graphql/graphiql/commit/c9c51b8a98e1f0427272d3e9ad60989b32f1a1aa)]:
  - graphql-language-service@5.0.5
  - @graphiql/react@0.4.1

## 1.9.6

### Patch Changes

- [#2475](https://github.com/graphql/graphiql/pull/2475) [`d6558e43`](https://github.com/graphql/graphiql/commit/d6558e43bd24a3af7c5f78dbae572bd8ca7b3995) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Fix using the `GraphiQL` export as type by exporting a class again

* [#2461](https://github.com/graphql/graphiql/pull/2461) [`7dfe3ece`](https://github.com/graphql/graphiql/commit/7dfe3ece4e8ab6b3400888f7f357e394db63439d) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Use the `useDragResize` hook from `@graphiql/react` for the sizing of the editors and the docs explorer

* Updated dependencies [[`7dfe3ece`](https://github.com/graphql/graphiql/commit/7dfe3ece4e8ab6b3400888f7f357e394db63439d)]:
  - @graphiql/react@0.4.0

## 1.9.5

### Patch Changes

- [#2453](https://github.com/graphql/graphiql/pull/2453) [`1b41e33c`](https://github.com/graphql/graphiql/commit/1b41e33c4a871a345836de58f415b7c461ced1f8) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Add execution context to `@graphiql/react` and move over the logic from `graphiql`

* [#2454](https://github.com/graphql/graphiql/pull/2454) [`a53bec64`](https://github.com/graphql/graphiql/commit/a53bec64b511fca2da828d7c0ff100e3a110aec1) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Deprecate the public methods `getQueryEditor`, `getVariableEditor`, `getHeaderEditor`, and `refresh` on the `GraphiQL` class.

- [#2451](https://github.com/graphql/graphiql/pull/2451) [`0659e96e`](https://github.com/graphql/graphiql/commit/0659e96e07f98d532619f29f52cba59e2d528327) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Always use the current value of the headers for the introspection request

* [#2452](https://github.com/graphql/graphiql/pull/2452) [`ee0fd8bf`](https://github.com/graphql/graphiql/commit/ee0fd8bf4042053ec647080b83656dc5e54a7239) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Move tab state from `graphiql` into editor context from `@graphiql/react`

- [#2454](https://github.com/graphql/graphiql/pull/2454) [`a53bec64`](https://github.com/graphql/graphiql/commit/a53bec64b511fca2da828d7c0ff100e3a110aec1) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Continue forwarding the ref to the class component to not break public methods

* [#2449](https://github.com/graphql/graphiql/pull/2449) [`a0b02eda`](https://github.com/graphql/graphiql/commit/a0b02edaa629c6113c1c5518fd3aa05b355a1921) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Assume all context values are nullable and create hooks to consume individual contexts

- [#2450](https://github.com/graphql/graphiql/pull/2450) [`1e6fc68b`](https://github.com/graphql/graphiql/commit/1e6fc68b73941544ee64e0499e459f9c7d39aa14) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Extract the `copy`, `merge`, `prettify`, and `autoCompleteLeafs` functions into hooks and remove these functions from the editor context value

- Updated dependencies [[`1b41e33c`](https://github.com/graphql/graphiql/commit/1b41e33c4a871a345836de58f415b7c461ced1f8), [`0659e96e`](https://github.com/graphql/graphiql/commit/0659e96e07f98d532619f29f52cba59e2d528327), [`ee0fd8bf`](https://github.com/graphql/graphiql/commit/ee0fd8bf4042053ec647080b83656dc5e54a7239), [`a0b02eda`](https://github.com/graphql/graphiql/commit/a0b02edaa629c6113c1c5518fd3aa05b355a1921), [`1e6fc68b`](https://github.com/graphql/graphiql/commit/1e6fc68b73941544ee64e0499e459f9c7d39aa14)]:
  - @graphiql/react@0.3.0

## 1.9.4

### Patch Changes

- [#2437](https://github.com/graphql/graphiql/pull/2437) [`1f933505`](https://github.com/graphql/graphiql/commit/1f9335051fffc9e6a6f950b6f8060ed521b56789) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Move prettify query functionality to editor context in `@graphiql/react`

* [#2435](https://github.com/graphql/graphiql/pull/2435) [`89f0244f`](https://github.com/graphql/graphiql/commit/89f0244f7b7cdf01c168638a09f5137788401995) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Move the logic for deriving operation facts from the current query to `@graphiql/react` and store these facts as properties on the query editor instance

- [#2437](https://github.com/graphql/graphiql/pull/2437) [`1f933505`](https://github.com/graphql/graphiql/commit/1f9335051fffc9e6a6f950b6f8060ed521b56789) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Move copy query functionality to editor context in `@graphiql/react`

* [#2437](https://github.com/graphql/graphiql/pull/2437) [`1f933505`](https://github.com/graphql/graphiql/commit/1f9335051fffc9e6a6f950b6f8060ed521b56789) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Move merge query functionality to editor context in `@graphiql/react`

- [#2436](https://github.com/graphql/graphiql/pull/2436) [`3e5295f0`](https://github.com/graphql/graphiql/commit/3e5295f0fd3b5f999643ea97e6cee706554f0b50) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Inline logic for clicking a reference to open the docs and remove the `onClickReference` and `onHintInformationRender` props of the editor components and hooks

* [#2436](https://github.com/graphql/graphiql/pull/2436) [`3e5295f0`](https://github.com/graphql/graphiql/commit/3e5295f0fd3b5f999643ea97e6cee706554f0b50) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Move visibility state for doc explorer from `graphiql` to the explorer context in `@graphiql/react`

* Updated dependencies [[`89f0244f`](https://github.com/graphql/graphiql/commit/89f0244f7b7cdf01c168638a09f5137788401995), [`1f933505`](https://github.com/graphql/graphiql/commit/1f9335051fffc9e6a6f950b6f8060ed521b56789), [`89f0244f`](https://github.com/graphql/graphiql/commit/89f0244f7b7cdf01c168638a09f5137788401995), [`3dae62fc`](https://github.com/graphql/graphiql/commit/3dae62fc871385e148a799cde55a52a5e6b41d19), [`1f933505`](https://github.com/graphql/graphiql/commit/1f9335051fffc9e6a6f950b6f8060ed521b56789), [`1f933505`](https://github.com/graphql/graphiql/commit/1f9335051fffc9e6a6f950b6f8060ed521b56789), [`3e5295f0`](https://github.com/graphql/graphiql/commit/3e5295f0fd3b5f999643ea97e6cee706554f0b50), [`3e5295f0`](https://github.com/graphql/graphiql/commit/3e5295f0fd3b5f999643ea97e6cee706554f0b50)]:
  - @graphiql/react@0.2.1

## 1.9.3

### Patch Changes

- [#2419](https://github.com/graphql/graphiql/pull/2419) [`84d8985b`](https://github.com/graphql/graphiql/commit/84d8985b87701133cc41fd424a24bb61c9b7272e) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Move the `fillLeafs` utility function from `graphiql` into `@graphiql/toolkit` and deprecate the export from `graphiql`

* [#2413](https://github.com/graphql/graphiql/pull/2413) [`8be164b1`](https://github.com/graphql/graphiql/commit/8be164b1e158d00752d6d3f30630a797d07d08c9) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Add a `StorageContext` and a `HistoryContext` to `@graphiql/react` that replaces the logic in the `graphiql` package

- [#2419](https://github.com/graphql/graphiql/pull/2419) [`84d8985b`](https://github.com/graphql/graphiql/commit/84d8985b87701133cc41fd424a24bb61c9b7272e) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Move the `mergeAst` utility function from `graphiql` into `@graphiql/toolkit` and deprecate the export from `graphiql`

* [#2420](https://github.com/graphql/graphiql/pull/2420) [`3467cd33`](https://github.com/graphql/graphiql/commit/3467cd33264e0766a0a43cf53e52ec371df26962) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Fix sending multiple introspection requests when loading the page

- [#2420](https://github.com/graphql/graphiql/pull/2420) [`3467cd33`](https://github.com/graphql/graphiql/commit/3467cd33264e0766a0a43cf53e52ec371df26962) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Deprecate the `autoCompleteLeafs` method of the `GraphiQL` component in favor of the function provided by the `EditorContext` from `@graphiql/react`

* [#2420](https://github.com/graphql/graphiql/pull/2420) [`3467cd33`](https://github.com/graphql/graphiql/commit/3467cd33264e0766a0a43cf53e52ec371df26962) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Add a `SchemaContext` to `@graphiql/react` that replaces the logic for fetching and validating the schema in the `graphiql` package

- [#2419](https://github.com/graphql/graphiql/pull/2419) [`84d8985b`](https://github.com/graphql/graphiql/commit/84d8985b87701133cc41fd424a24bb61c9b7272e) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Move the `getSelectedOperationName` utility function from `graphiql` into `@graphiql/toolkit` and deprecate the export from `graphiql`

- Updated dependencies [[`84d8985b`](https://github.com/graphql/graphiql/commit/84d8985b87701133cc41fd424a24bb61c9b7272e), [`8be164b1`](https://github.com/graphql/graphiql/commit/8be164b1e158d00752d6d3f30630a797d07d08c9), [`8be164b1`](https://github.com/graphql/graphiql/commit/8be164b1e158d00752d6d3f30630a797d07d08c9), [`84d8985b`](https://github.com/graphql/graphiql/commit/84d8985b87701133cc41fd424a24bb61c9b7272e), [`3467cd33`](https://github.com/graphql/graphiql/commit/3467cd33264e0766a0a43cf53e52ec371df26962), [`84d8985b`](https://github.com/graphql/graphiql/commit/84d8985b87701133cc41fd424a24bb61c9b7272e)]:
  - @graphiql/toolkit@0.6.0
  - @graphiql/react@0.2.0

## 1.9.2

### Patch Changes

- Updated dependencies [[`ebc864f0`](https://github.com/graphql/graphiql/commit/ebc864f0ab05000758cb2898daaa73a2f15255ec), [`ebc864f0`](https://github.com/graphql/graphiql/commit/ebc864f0ab05000758cb2898daaa73a2f15255ec)]:
  - @graphiql/react@0.1.2

## 1.9.1

### Patch Changes

- [#2423](https://github.com/graphql/graphiql/pull/2423) [`838e58da`](https://github.com/graphql/graphiql/commit/838e58dad652d8f5559af7b88d049b1c62348f2f) Thanks [@chentsulin](https://github.com/chentsulin)! - Fix peer dependency declaration by using `||` instead of `|` to link multiple major versions

- Updated dependencies [[`838e58da`](https://github.com/graphql/graphiql/commit/838e58dad652d8f5559af7b88d049b1c62348f2f)]:
  - @graphiql/react@0.1.1

## 1.9.0

### Minor Changes

- [#2412](https://github.com/graphql/graphiql/pull/2412) [`c2e2f53d`](https://github.com/graphql/graphiql/commit/c2e2f53d3b2ae369feb68537f92c73bcfd962f29) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Move QueryStore from `graphiql` package to `@graphiql/toolkit`

* [#2412](https://github.com/graphql/graphiql/pull/2412) [`c2e2f53d`](https://github.com/graphql/graphiql/commit/c2e2f53d3b2ae369feb68537f92c73bcfd962f29) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Move HistoryStore from `graphiql` package to `@graphiql/toolkit`

- [#2409](https://github.com/graphql/graphiql/pull/2409) [`f2025ba0`](https://github.com/graphql/graphiql/commit/f2025ba06c5aa8e8ac68d29538ff135f3efc8e46) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Move the logic of the variable editor from the `graphiql` package into a hook `useVariableEditor` provided by `@graphiql/react`

* [#2408](https://github.com/graphql/graphiql/pull/2408) [`d825bb75`](https://github.com/graphql/graphiql/commit/d825bb7569ca6b1ebbe534b893354645c790e003) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Move the logic of the query editor from the `graphiql` package into a hook `useQueryEditor` provided by `@graphiql/react`

- [#2411](https://github.com/graphql/graphiql/pull/2411) [`ad448693`](https://github.com/graphql/graphiql/commit/ad4486934ba69247efd33ee500e30f8236ecd079) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Move the logic of the result viewer from the `graphiql` package into a hook `useResponseEditor` provided by `@graphiql/react`

* [#2370](https://github.com/graphql/graphiql/pull/2370) [`7f695b10`](https://github.com/graphql/graphiql/commit/7f695b104f9b25ba8c6d36f7827c475b297b7482) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Include the context provider for the explorer from `@graphiql/react` and replace the local state for the nav stack of the docs with methods provided by hooks from `@graphiql/react`.

- [#2412](https://github.com/graphql/graphiql/pull/2412) [`c2e2f53d`](https://github.com/graphql/graphiql/commit/c2e2f53d3b2ae369feb68537f92c73bcfd962f29) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Move StorageAPI from `graphiql` package to `@graphiql/toolkit`

* [#2404](https://github.com/graphql/graphiql/pull/2404) [`029ddf82`](https://github.com/graphql/graphiql/commit/029ddf82c29754ab8518ae7df66f9b25361a8247) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Add a context provider for editors and move the logic of the headers editor from the `graphiql` package into a hook `useHeaderEditor` provided by `@graphiql/react`

### Patch Changes

- [#2418](https://github.com/graphql/graphiql/pull/2418) [`6d7fb6e6`](https://github.com/graphql/graphiql/commit/6d7fb6e6fa4734e2274d8875971613a8254674e3) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - Fix persisting headers in tab state and avoid opening duplicate tabs when reloading

- Updated dependencies [[`c2e2f53d`](https://github.com/graphql/graphiql/commit/c2e2f53d3b2ae369feb68537f92c73bcfd962f29), [`bc3dc64c`](https://github.com/graphql/graphiql/commit/bc3dc64c37478ba6170c49c25fb755b4f2e020b2), [`c2e2f53d`](https://github.com/graphql/graphiql/commit/c2e2f53d3b2ae369feb68537f92c73bcfd962f29), [`f2025ba0`](https://github.com/graphql/graphiql/commit/f2025ba06c5aa8e8ac68d29538ff135f3efc8e46), [`d825bb75`](https://github.com/graphql/graphiql/commit/d825bb7569ca6b1ebbe534b893354645c790e003), [`ad448693`](https://github.com/graphql/graphiql/commit/ad4486934ba69247efd33ee500e30f8236ecd079), [`7f695b10`](https://github.com/graphql/graphiql/commit/7f695b104f9b25ba8c6d36f7827c475b297b7482), [`c2e2f53d`](https://github.com/graphql/graphiql/commit/c2e2f53d3b2ae369feb68537f92c73bcfd962f29), [`029ddf82`](https://github.com/graphql/graphiql/commit/029ddf82c29754ab8518ae7df66f9b25361a8247)]:
  - @graphiql/toolkit@0.5.0
  - @graphiql/react@0.1.0

## 1.8.10

### Patch Changes

- [#2397](https://github.com/graphql/graphiql/pull/2397) [`a63ff958`](https://github.com/graphql/graphiql/commit/a63ff958838cf4fcf31f7eaa3e3b022d02838f65) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - upgrade to React v17

* [#2401](https://github.com/graphql/graphiql/pull/2401) [`60a744b1`](https://github.com/graphql/graphiql/commit/60a744b1d73d1021afb7abeea1573f26178102b5) Thanks [@thomasheyenbrock](https://github.com/thomasheyenbrock)! - move async helper functions and formatting functions over into the @graphiql/toolkit package

* Updated dependencies [[`60a744b1`](https://github.com/graphql/graphiql/commit/60a744b1d73d1021afb7abeea1573f26178102b5), [`60a744b1`](https://github.com/graphql/graphiql/commit/60a744b1d73d1021afb7abeea1573f26178102b5)]:
  - @graphiql/toolkit@0.4.5

## 1.8.9

### Patch Changes

- [#2387](https://github.com/graphql/graphiql/pull/2387) [`e823697b`](https://github.com/graphql/graphiql/commit/e823697b5d47565671d5919be84f69919e70977f) Thanks [@benjie](https://github.com/benjie)! - Add 'children' type definition to various component props

* [#2388](https://github.com/graphql/graphiql/pull/2388) [`d3ae074c`](https://github.com/graphql/graphiql/commit/d3ae074c9b9dae6ed4f69b0a79efaa0353dcea2d) Thanks [@benjie](https://github.com/benjie)! - Add 'pointer-events: none' to SVG style for dropdown arrow in GraphiQL.Menu component

- [#2373](https://github.com/graphql/graphiql/pull/2373) [`5b2c1b20`](https://github.com/graphql/graphiql/commit/5b2c1b2054a70e8dca173f380f44766438cb5597) Thanks [@benjie](https://github.com/benjie)! - Fix TypeScript definition of FetcherParams to reflect that operationName is optional

- Updated dependencies [[`5b2c1b20`](https://github.com/graphql/graphiql/commit/5b2c1b2054a70e8dca173f380f44766438cb5597)]:
  - @graphiql/toolkit@0.4.4

## 1.8.8

### Patch Changes

- Updated dependencies [[`2dec55f2`](https://github.com/graphql/graphiql/commit/2dec55f2c5e979cc7bb1adadff4fb063775b088c), [`d22f6111`](https://github.com/graphql/graphiql/commit/d22f6111a60af25727d8dbc1058c79607df76af2)]:
  - codemirror-graphql@1.3.0
  - graphql-language-service@5.0.4

## 1.8.7

### Patch Changes

- [#2316](https://github.com/graphql/graphiql/pull/2316) [`3d8510c8`](https://github.com/graphql/graphiql/commit/3d8510c87b9f0cc73f747ed4cd88e112f9fe65f7) Thanks [@AlirezaHaghshenas](https://github.com/AlirezaHaghshenas)! - Fix: With tabs enabled, if a subscription is restored from storage, a query request is sent instead

## 1.8.6

### Patch Changes

- [#2312](https://github.com/graphql/graphiql/pull/2312) [`3c97cf63`](https://github.com/graphql/graphiql/commit/3c97cf63f0d6a8c27265905af1a2da243925ff01) Thanks [@AlirezaHaghshenas](https://github.com/AlirezaHaghshenas)! - Fix: After changing to a tab with a subscription, graphiql sends a query request

- Updated dependencies [[`45cbc759`](https://github.com/graphql/graphiql/commit/45cbc759c732999e8b1eb4714d6047ab77c17902)]:
  - graphql-language-service@5.0.3
  - codemirror-graphql@1.2.17

## 1.8.5

### Patch Changes

- Updated dependencies [[`c36504a8`](https://github.com/graphql/graphiql/commit/c36504a804d8cc54a5136340152999b4a1a2c69f)]:
  - graphql-language-service@5.0.2
  - codemirror-graphql@1.2.16

## 1.8.4

### Patch Changes

- [#2274](https://github.com/graphql/graphiql/pull/2274) [`12950380`](https://github.com/graphql/graphiql/commit/12950380e92c38f6eec23499e7fca5dc9dcd8216) Thanks [@B2o5T](https://github.com/B2o5T)! - turn `valid-typeof` as `error`, SSR fix

- Updated dependencies [[`12950380`](https://github.com/graphql/graphiql/commit/12950380e92c38f6eec23499e7fca5dc9dcd8216)]:
  - @graphiql/toolkit@0.4.3

## 1.8.3

### Patch Changes

- [#2268](https://github.com/graphql/graphiql/pull/2268) [`b1886822`](https://github.com/graphql/graphiql/commit/b188682296ee04a87fbf09dc51385f127bffcec0) Thanks [@acao](https://github.com/acao)! - remove dependency on `global` for esbuild/etc users!

* [#2265](https://github.com/graphql/graphiql/pull/2265) [`9458e10b`](https://github.com/graphql/graphiql/commit/9458e10ba24a6c919142ea1cebb409c7d055baf9) Thanks [@acao](https://github.com/acao)! - fix `codemirror` import bug for `onHasCompletion` for #2263. for esm/cjs users on autocomplete (umd bundle users not impacted)

## 1.8.2

### Patch Changes

- Updated dependencies [[`261f2044`](https://github.com/graphql/graphiql/commit/261f2044066412e40f9962bef55295f7c9c35aec)]:
  - codemirror-graphql@1.2.15

## 1.8.1

### Patch Changes

- [#2257](https://github.com/graphql/graphiql/pull/2257) [`6cc95851`](https://github.com/graphql/graphiql/commit/6cc9585119f33ba80f960da310f7ef2747b7bc38) Thanks [@acao](https://github.com/acao)! - _security fix:_ replace the vulnerable `dset` dependency with `set-value`

  `dset` is vulnerable to prototype pollution attacks. this is only possible if you are doing all of the following:

  1. running graphiql with an experimental graphql-js release tag that supports @stream and @defer
  2. executing a properly @streamed or @deferred query ala IncrementalDelivery spec, with multipart chunks
  3. consuming a malicious schema that contains field names like proto, prototype, or constructor that return malicious data designed to exploit a prototype pollution attack

## 1.8.0

### Minor Changes

- [#2197](https://github.com/graphql/graphiql/pull/2197) [`3137a6c4`](https://github.com/graphql/graphiql/commit/3137a6c4333dad8db8a0eb980d6c6464c7292946) Thanks [@n1ru4l](https://github.com/n1ru4l)! - Now featuring: tabs! 🥳 🍾 just opt-in with new prop `<GraphiQL tabs />`. You can also both opt-in and provide a handler via `<GraphiQL tabs={{ onTabsChange }} />`!

### Patch Changes

- [#2249](https://github.com/graphql/graphiql/pull/2249) [`1540fd3d`](https://github.com/graphql/graphiql/commit/1540fd3d0df553798e41a153c5f0386d9d52be01) Thanks [@acao](https://github.com/acao)! - Finally remove inline `require()` for codemirror addon imports, replace with modern dynamic `import()` (which enables `esbuild`, `vite`, etc).

  This change should allow your bundler to code split codemirror-graphql and the codemirror addons based on which you import. For SSR support, GraphiQL must load these modules dynamically.

  If you want to use other codemirror addons (vim, etc) for non-ssr you can just import them top level, or for SSR, you can just dynamically import them.

## 1.7.2

### Patch Changes

- Updated dependencies [[`3626f8d5`](https://github.com/graphql/graphiql/commit/3626f8d5012ee77a39e984ae347396cb00fcc6fa), [`3626f8d5`](https://github.com/graphql/graphiql/commit/3626f8d5012ee77a39e984ae347396cb00fcc6fa)]:
  - graphql-language-service@5.0.1
  - codemirror-graphql@1.2.14

## 1.7.1

### Patch Changes

- Updated dependencies [[`2502a364`](https://github.com/graphql/graphiql/commit/2502a364b74dc754d92baa1579b536cf42139958)]:
  - graphql-language-service@5.0.0
  - codemirror-graphql@1.2.13

## 1.7.0

### Minor Changes

- [#2221](https://github.com/graphql/graphiql/pull/2221) [`64826c87`](https://github.com/graphql/graphiql/commit/64826c8776dfc8394a65c98663d47cc3c9d397b9) Thanks [@dwwoelfel](https://github.com/dwwoelfel)! - Fix to trigger codemirror update when externalFragments prop changes [#2220](https://github.com/graphql/graphiql/pull/2220)

* [#2213](https://github.com/graphql/graphiql/pull/2213) [`ba85bc24`](https://github.com/graphql/graphiql/commit/ba85bc242b8271cbd09ade9d69a93d86e4e1a49f) Thanks [@hatappi](https://github.com/hatappi)! - remove IE7 CSS star property hack

### Patch Changes

- [#2205](https://github.com/graphql/graphiql/pull/2205) [`91500d4e`](https://github.com/graphql/graphiql/commit/91500d4eba8b99bf779ff6ac899c814070c6dff3) Thanks [@francisu](https://github.com/francisu)! - Fixed problem where 'global' variable is referenced when it might not be present (#2155)

## 1.6.0

### Minor Changes

- [#2191](https://github.com/graphql/graphiql/pull/2191) [`eb8af7b5`](https://github.com/graphql/graphiql/commit/eb8af7b5666e7ed01497a862127011524fc400f5) Thanks [@n1ru4l](https://github.com/n1ru4l)! - Allow inserting content before the topBar element via the `beforeTopBarContent` property.

  ```jsx
  <GraphiQL beforeTopBarContent={<SomeComponent />} />
  ```

* [#2189](https://github.com/graphql/graphiql/pull/2189) [`96d47267`](https://github.com/graphql/graphiql/commit/96d4726716b782fcafa9d6c1671f3a3050ebe0b7) Thanks [@n1ru4l](https://github.com/n1ru4l)! - Apply variable editor title text styles via class `variable-editor-title-text` instead of using inline-styles. This allows better customization of styles. An active element also has the class `active`. This allows overriding the inactive state color using the selector `.graphiql-container .variable-editor-title-text` and overriding the active state color using the selector `.graphiql-container .variable-editor-title-text.active`.

- [#2190](https://github.com/graphql/graphiql/pull/2190) [`d5179899`](https://github.com/graphql/graphiql/commit/d517989996cf6f33ef7e08d18a870e2bed565cca) Thanks [@n1ru4l](https://github.com/n1ru4l)! - New callback property `onSchemaChange` for `GraphiQL`.

  The callback is invoked with the successfully fetched schema from the remote.

  **Usage example:**

  ```tsx
  <GraphiQL onSchemaChange={schema => console.log(schema)} />
  ```

## 1.5.20

### Patch Changes

- Updated dependencies [[`484c0523`](https://github.com/graphql/graphiql/commit/484c0523cdd529f9e261d61a38616b6745075c7f), [`5852ba47`](https://github.com/graphql/graphiql/commit/5852ba47c720a2577817aed512bef9a262254f2c), [`48c5df65`](https://github.com/graphql/graphiql/commit/48c5df654e323cee3b8c57d7414247465235d1b5)]:
  - graphql-language-service@4.1.5
  - codemirror-graphql@1.2.12

## 1.5.19

### Patch Changes

- [#2167](https://github.com/graphql/graphiql/pull/2167) [`bc81f0ee`](https://github.com/graphql/graphiql/commit/bc81f0ee6d382fe996d92e55f90cdc3be10910a7) Thanks [@acao](https://github.com/acao)! - Fix legacy bug where global is expected

## 1.5.18

### Patch Changes

- [#2156](https://github.com/graphql/graphiql/pull/2156) [`ae5ea77b`](https://github.com/graphql/graphiql/commit/ae5ea77b4c2ec2a25e25c542ae72b2c3dabbe256) Thanks [@francisu](https://github.com/francisu)! - Fixed problem where 'global' variable is referenced when it might not be present (#2155)

## 1.5.17

### Patch Changes

- [#2138](https://github.com/graphql/graphiql/pull/2138) [`8700b4bb`](https://github.com/graphql/graphiql/commit/8700b4bbaadb17136f649f504c9575a8c853cd0b) Thanks [@danielleletarte](https://github.com/danielleletarte)! - Correctly render line breaks for Descriptions in Doc Explorer - #2137 - @danielleletarte

## 1.5.16

### Patch Changes

- Updated dependencies []:
  - graphql-language-service@4.1.4
  - codemirror-graphql@1.2.11

## 1.5.15

### Patch Changes

- Updated dependencies [[`a44772d6`](https://github.com/graphql/graphiql/commit/a44772d6af97254c4f159ea7237e842a3e3719e8)]:
  - graphql-language-service@4.1.3
  - codemirror-graphql@1.2.10

## 1.5.14

### Patch Changes

- Updated dependencies [[`e20760fb`](https://github.com/graphql/graphiql/commit/e20760fbd95c13d6d549cba3faa15a59aee9a2c0)]:
  - graphql-language-service@4.1.2
  - codemirror-graphql@1.2.9

## 1.5.13

### Patch Changes

- [#2097](https://github.com/graphql/graphiql/pull/2097) [`4d3eeaa4`](https://github.com/graphql/graphiql/commit/4d3eeaa4446c84e92cd77f213e454059602a72e5) Thanks [@acao](https://github.com/acao)! - Disable introspection of schema.description by default

## 1.5.12

### Patch Changes

- [#2091](https://github.com/graphql/graphiql/pull/2091) [`ff9cebe5`](https://github.com/graphql/graphiql/commit/ff9cebe515a3539f85b9479954ae644dfeb68b63) Thanks [@acao](https://github.com/acao)! - Fix graphql 15 related issues. Should now build & test interchangeably.

- Updated dependencies [[`ff9cebe5`](https://github.com/graphql/graphiql/commit/ff9cebe515a3539f85b9479954ae644dfeb68b63)]:
  - codemirror-graphql@1.2.8
  - graphql-language-service@4.1.1

## 1.5.11

### Patch Changes

- Updated dependencies [[`0f1f90ce`](https://github.com/graphql/graphiql/commit/0f1f90ce8f4a25ddebdaf7a9ddbe136214aa64a3)]:
  - graphql-language-service@4.1.0
  - codemirror-graphql@1.2.7

## 1.5.10

### Patch Changes

- [#2087](https://github.com/graphql/graphiql/pull/2087) [`45a9075d`](https://github.com/graphql/graphiql/commit/45a9075d718046e0f17c930162fa9752dfe052ec) Thanks [@acao](https://github.com/acao)! - Fix issue with introspection in servers which don't support `inputValueDeprecation`. make `inputValueDeprecation` an opt-in prop for DocExplorer features

## 1.5.9

### Patch Changes

- [#2077](https://github.com/graphql/graphiql/pull/2077) [`701ca13f`](https://github.com/graphql/graphiql/commit/701ca13f625735564d71931e6d917e5bf69c8aa5) Thanks [@acao](https://github.com/acao)! - Include schema description in DocExplorer for schema introspection requests. Enables the `schemaDescription` option for `getIntrospectionQuery()`. Also includes `deprecationReason` support in DocExplorer for arguments! Enables `inputValueDeprecation` in `getIntrospectionQuery()` and displays deprecation section on field doc view.
- Updated dependencies [[`9df315b4`](https://github.com/graphql/graphiql/commit/9df315b44896efa313ed6744445fc8f9e702ebc3)]:
  - graphql-language-service@4.0.0
  - codemirror-graphql@1.2.6

## 1.5.8

### Patch Changes

- Updated dependencies [[`df57cd25`](https://github.com/graphql/graphiql/commit/df57cd2556302d6aa5dd140e7bee3f7bdab4deb1)]:
  - graphql-language-service@3.2.5
  - codemirror-graphql@1.2.5

## 1.5.7

### Patch Changes

- [`49bce429`](https://github.com/graphql/graphiql/commit/49bce429f0780a5e2856cfb7ccda50d10d38f724) [#2051](https://github.com/graphql/graphiql/pull/2051) Thanks [@willstott101](https://github.com/willstott101)! - Include source maps for minified JS and CSS in the graphiql package.

## 1.5.6

### Patch Changes

- Updated dependencies []:
  - graphql-language-service@3.2.4
  - codemirror-graphql@1.2.4

## 1.5.5

### Patch Changes

- Updated dependencies [[`c42b145f`](https://github.com/graphql/graphiql/commit/c42b145fffeaefbd1103bc7addee1873e939bc83)]:
  - codemirror-graphql@1.2.3

## 1.5.4

### Patch Changes

- [`bdd57312`](https://github.com/graphql/graphiql/commit/bdd573129844168749aba0aaa20e31b9da81aacf) [#2047](https://github.com/graphql/graphiql/pull/2047) Thanks [@willstott101](https://github.com/willstott101)! - Source code included in all packages to fix source maps. codemirror-graphql includes esm build in package.

- Updated dependencies [[`bdd57312`](https://github.com/graphql/graphiql/commit/bdd573129844168749aba0aaa20e31b9da81aacf), [`8b486555`](https://github.com/graphql/graphiql/commit/8b486555e2aa4d90891070a1bbc52b59d9c670c4)]:
  - codemirror-graphql@1.2.2
  - graphql-language-service@3.2.3

## 1.5.3

### Patch Changes

- [`c83d1d4c`](https://github.com/graphql/graphiql/commit/c83d1d4c518ad1b0862aae5f46359dfaee00dda1) Thanks [@kikkupico](https://github.com/kikkupico)! - fix `schema` type nullability for #2028

* [`858907d2`](https://github.com/graphql/graphiql/commit/858907d2106742a65ec52eb017f2e91268cc37bf) [#2045](https://github.com/graphql/graphiql/pull/2045) Thanks [@acao](https://github.com/acao)! - fix graphql-js peer dependencies - [#2044](https://github.com/graphql/graphiql/pull/2044)

* Updated dependencies [[`858907d2`](https://github.com/graphql/graphiql/commit/858907d2106742a65ec52eb017f2e91268cc37bf)]:
  - codemirror-graphql@1.2.1
  - @graphiql/toolkit@0.4.2
  - graphql-language-service@3.2.2

## 1.5.2

### Patch Changes

- Updated dependencies [[`dec207e7`](https://github.com/graphql/graphiql/commit/dec207e74f0506db069482cc30f8cd1f045d8107), [`b79bf304`](https://github.com/graphql/graphiql/commit/b79bf304045add4b5c3b2539dd6b551a64e6ed87), [`d0c22c4f`](https://github.com/graphql/graphiql/commit/d0c22c4fce5ea39611c7ecee553943fdf27fd03e)]:
  - @graphiql/toolkit@0.4.1
  - codemirror-graphql@1.2.0

## 1.5.1

### Patch Changes

- [`9a6ed03f`](https://github.com/graphql/graphiql/commit/9a6ed03fbe4de9652ff5d81a8f584234995dd2ce) [#2013](https://github.com/graphql/graphiql/pull/2013) Thanks [@PabloSzx](https://github.com/PabloSzx)! - Update utils

- Updated dependencies [[`9a6ed03f`](https://github.com/graphql/graphiql/commit/9a6ed03fbe4de9652ff5d81a8f584234995dd2ce)]:
  - graphql-language-service@3.2.1

## 1.5.0

### Minor Changes

- [`716cf786`](https://github.com/graphql/graphiql/commit/716cf786aea6af42ea637ca3c56ae6c6ebc17c7a) [#2010](https://github.com/graphql/graphiql/pull/2010) Thanks [@acao](https://github.com/acao)! - upgrade to `graphql@16.0.0-experimental-stream-defer.5`. thanks @saihaj!

### Patch Changes

- Updated dependencies [[`716cf786`](https://github.com/graphql/graphiql/commit/716cf786aea6af42ea637ca3c56ae6c6ebc17c7a)]:
  - codemirror-graphql@1.1.0
  - @graphiql/toolkit@0.4.0
  - graphql-language-service@3.2.0

## 1.4.8

### Patch Changes

- [`e63696de`](https://github.com/graphql/graphiql/commit/e63696de57a85c34d937bfb53345e2e0d0b874a4) [#2005](https://github.com/graphql/graphiql/pull/2005) Thanks [@acao](https://github.com/acao)! - Correct the npm readme security fix version number and links, thanks [@glasser](https://github.com/glasser) & [@dotansimha](https://github.com/dotansimha)!

## 1.4.7

### Patch Changes

- [`130ddad6`](https://github.com/graphql/graphiql/commit/130ddad6d0394356ec32070a6fee1840450a4660) Thanks [@acao](https://github.com/acao)! - **CRITICAL SECURITY PATCH** for the [GraphiQL introspection schema template injection attack](https://github.com/graphql/graphiql/security/advisories/GHSA-x4r7-m2q9-69c8)

## 1.4.6

### Patch Changes

- [`d3a88283`](https://github.com/graphql/graphiql/commit/d3a88283c7b618376ad4a06c7db20e60b066d1a0) [#1934](https://github.com/graphql/graphiql/pull/1934) Thanks [@tonyfromundefined](https://github.com/tonyfromundefined)! - add react 17, 18 in peerDependencies

* [`afaa36c1`](https://github.com/graphql/graphiql/commit/afaa36c198648e84f305986a0b1dfefa97e70221) [#1883](https://github.com/graphql/graphiql/pull/1883) Thanks [@Sweetabix1](https://github.com/Sweetabix1)! - Updating font colors for line numbers, comments & brackets from #999 to #666 for accessibility purposes. #666 passes AA accessibility standards for small text, with a contrast ratio of over 5:1.

- [`75dbb0b1`](https://github.com/graphql/graphiql/commit/75dbb0b18e2102d271a5cfe78faf54fe22e83ac8) [#1777](https://github.com/graphql/graphiql/pull/1777) Thanks [@dwwoelfel](https://github.com/dwwoelfel)! - adopt block string parsing for variables in language parser

- Updated dependencies [[`0e2c1a02`](https://github.com/graphql/graphiql/commit/0e2c1a020cc2761155f7c9467d3ed4cb45941aeb), [`75dbb0b1`](https://github.com/graphql/graphiql/commit/75dbb0b18e2102d271a5cfe78faf54fe22e83ac8)]:
  - graphql-language-service@3.1.6
  - codemirror-graphql@1.0.3

## 1.4.5

### Patch Changes

- [`86795d5f`](https://github.com/graphql/graphiql/commit/86795d5ffa2d3e6c8aee74f761d02f054b428d46) Thanks [@acao](https://github.com/acao)! - Remove bad type definition from `subscriptions-transport-ws` #1992 closes #1989

- Updated dependencies [[`86795d5f`](https://github.com/graphql/graphiql/commit/86795d5ffa2d3e6c8aee74f761d02f054b428d46)]:
  - @graphiql/toolkit@0.3.2

## 1.4.4

### Patch Changes

- [`62e786b5`](https://github.com/graphql/graphiql/commit/62e786b57cc5748eccac59814dfc8ecd0104c748) [#1990](https://github.com/graphql/graphiql/pull/1990) Thanks [@acao](https://github.com/acao)! - Remove type definition from `subscriptions-transport-ws`

- Updated dependencies [[`62e786b5`](https://github.com/graphql/graphiql/commit/62e786b57cc5748eccac59814dfc8ecd0104c748)]:
  - @graphiql/toolkit@0.3.1

## 1.4.3

### Patch Changes

- [`6a459f4c`](https://github.com/graphql/graphiql/commit/6a459f4c235bb0d70725ae6ad7fc1cfa34f49dca) [#1968](https://github.com/graphql/graphiql/pull/1968) Thanks [@acao](https://github.com/acao)! - Remove `optionalDependencies` entirely, remove `subscriptions-transport-ws` which introduces vulnerabilities, upgrade `@n1ru4l/push-pull-async-iterable-iterator` to 3.0.0, upgrade `graphql-ws` several minor versions - the `graphql-ws@5.x` upgrade will come in a later minor release.

* [`eb2d91fa`](https://github.com/graphql/graphiql/commit/eb2d91fa8e4a03cb5663f27f724db2c95989a40f) [#1914](https://github.com/graphql/graphiql/pull/1914) Thanks [@harshithpabbati](https://github.com/harshithpabbati)! - fix: history can now be saved even when query history panel is not opened feat: create a new maxHistoryLength prop to allow more than 20 queries in history panel

- [`04fad79c`](https://github.com/graphql/graphiql/commit/04fad79c094318d4b4c9e0250c5cff55d9fc5116) [#1889](https://github.com/graphql/graphiql/pull/1889) Thanks [@henryqdineen](https://github.com/henryqdineen)! - feat: export ToolbarSelectOption and ToolbarMenuItem

* [`cd685435`](https://github.com/graphql/graphiql/commit/cd6854352ac6beff57af76db7de38e8157ff13aa) [#1923](https://github.com/graphql/graphiql/pull/1923) Thanks [@cgarnier](https://github.com/cgarnier)! - Fix result window theme

* Updated dependencies [[`6a459f4c`](https://github.com/graphql/graphiql/commit/6a459f4c235bb0d70725ae6ad7fc1cfa34f49dca), [`2fd5bf72`](https://github.com/graphql/graphiql/commit/2fd5bf7239edb78339e5ac7211f09c245e47c3bb)]:
  - @graphiql/toolkit@0.3.0
  - graphql-language-service@3.1.5

## 1.4.2

### Patch Changes

- [`5b8a057d`](https://github.com/graphql/graphiql/commit/5b8a057dd64ebecc391be32176a2403bb9d9ff92) [#1838](https://github.com/graphql/graphiql/pull/1838) Thanks [@acao](https://github.com/acao)! - Set all cross-runtime build targets to es6

## 1.4.1

### Patch Changes

- [`9f8c78ce`](https://github.com/graphql/graphiql/commit/9f8c78ce8c72a9dcf35b3e82bd3129ac17d845e6) [#1821](https://github.com/graphql/graphiql/pull/1821) Thanks [@harshithpabbati](https://github.com/harshithpabbati)! - fix: render query history panel only when it's toggled, instead of hiding with CSS

* [`dd9397e4`](https://github.com/graphql/graphiql/commit/dd9397e4c693b5ceadbd26d6fa92aa6246aac9c3) [#1819](https://github.com/graphql/graphiql/pull/1819) Thanks [@acao](https://github.com/acao)! - `GraphiQL.createClient()` accepts custom `legacyClient`, exports typescript types, fixes #1800.

  `createGraphiQLFetcher` now only attempts an `graphql-ws` connection when only `subscriptionUrl` is provided. In order to use `graphql-transport-ws`, you'll need to provide the `legacyClient` option only, and no `subscriptionUrl` or `wsClient` option.

- [`1f92d1dc`](https://github.com/graphql/graphiql/commit/1f92d1dcc0102bdec078263b87ca20cd670a1c86) [#1804](https://github.com/graphql/graphiql/pull/1804) Thanks [@maraisr](https://github.com/maraisr)! - Fixes issue where with IncrementalDelivery directives objects wouldn't deep-merge.

* [`6869ce77`](https://github.com/graphql/graphiql/commit/6869ce7767050787db5f1017abf82fa5a52fc97a) [#1816](https://github.com/graphql/graphiql/pull/1816) Thanks [@acao](https://github.com/acao)! - improve peer resolutions for graphql 14 & 15. `14.5.0` minimum is for built-in typescript types, and another method only available in `14.4.0`

* Updated dependencies [[`dd9397e4`](https://github.com/graphql/graphiql/commit/dd9397e4c693b5ceadbd26d6fa92aa6246aac9c3), [`6869ce77`](https://github.com/graphql/graphiql/commit/6869ce7767050787db5f1017abf82fa5a52fc97a)]:
  - @graphiql/toolkit@0.2.0

## 1.4.0

### Patch Changes

- Updated dependencies [[`b4fc16c0`](https://github.com/graphql/graphiql/commit/b4fc16c025da6f466727dc17cab6026d14c6e7fe)]:
  - codemirror-graphql@1.0.0

## 1.4.0

### Bugfixes

- Fixes the search icon misalignment. (#1776) by [@iifawzi](https://github.com/iifawzi)
- run `onToggleDocs` when setting `docExplorerOpen` to false (#1768) by [@ChiragKasat](https://github.com/ChiragKasat)

### Minor Changes

- 1c119386: `@defer`, `@stream`, and `graphql-ws` support in a `createGraphiQLFetcher` utility (#1770)

  - support for `@defer` and `@stream` in `GraphiQL` itself on fetcher execution and when handling stream payloads
  - introduce `@graphiql/toolkit` for types and utilities used to compose `GraphiQL` and other related libraries
  - introduce `@graphiql/create-fetcher` to accept simplified parameters to generate a `fetcher` that covers the most commonly used `graphql-over-http` transport spec proposals. using `meros` for multipart http, and `graphql-ws` for websockets subscriptions.
  - use `graphql` and `graphql-express` `experimental-defer-stream` branch in development until it's merged
  - add cypress e2e tests for `@stream` in different scenarios
  - add some unit tests for `createGraphiQLFetcher`

### Patch Changes

- Updated dependencies [1c119386]
  - @graphiql/create-fetcher@0.1.0
  - @graphiql/toolkit@0.1.0

## [1.3.2](https://github.com/graphql/graphiql/compare/graphiql@1.3.1...graphiql@1.3.2) (2021-01-07)

**Note:** Version bump only for package graphiql

## [1.3.1](https://github.com/graphql/graphiql/compare/graphiql@1.3.0...graphiql@1.3.1) (2021-01-07)

**Note:** Version bump only for package graphiql

## [1.3.0](https://github.com/graphql/graphiql/compare/graphiql@1.2.2...graphiql@1.3.0) (2021-01-07)

### Features

- also support fetcher functions that return Promise<Observable> or Promise ([#1739](https://github.com/graphql/graphiql/issues/1739)) ([a804f3c](https://github.com/graphql/graphiql/commit/a804f3c011e7cafb4f8a48a1ba101b875be3540d))
- implied or external fragments, for [#612](https://github.com/graphql/graphiql/issues/612) ([#1750](https://github.com/graphql/graphiql/issues/1750)) ([cfed265](https://github.com/graphql/graphiql/commit/cfed265e3cf31875b39ea517781a217fcdfcadc2))

## [1.2.2](https://github.com/graphql/graphiql/compare/graphiql@1.2.1...graphiql@1.2.2) (2021-01-03)

**Note:** Version bump only for package graphiql

## [1.2.1](https://github.com/graphql/graphiql/compare/graphiql@1.2.0...graphiql@1.2.1) (2020-12-28)

### Bug Fixes

- display schema description if available ([050c506](https://github.com/graphql/graphiql/commit/050c506ed4ed2852bf9a5b099f967928d9856156))
- fix linting issue ([7117b7c](https://github.com/graphql/graphiql/commit/7117b7ccd2a2872e0051c8751252040d4042e190))

## [1.2.0](https://github.com/graphql/graphiql/compare/graphiql@1.1.0...graphiql@1.2.0) (2020-12-08)

### Features

- add AsyncIterable support to fetcher function ([#1724](https://github.com/graphql/graphiql/issues/1724)) ([a568af3](https://github.com/graphql/graphiql/commit/a568af3674404b8a15055792c2c35128b2bd711c))
- provide validation rules via props ([#1716](https://github.com/graphql/graphiql/issues/1716)) ([0c5785c](https://github.com/graphql/graphiql/commit/0c5785c82adbd4affb25300ae2d128b42c9b81fe))

## [1.1.0](https://github.com/graphql/graphiql/compare/graphiql@1.0.6...graphiql@1.1.0) (2020-11-28)

### Bug Fixes

- improve props in GraphiQL readme ([b9b2c8d](https://github.com/graphql/graphiql/commit/b9b2c8d8bde6064a4cdcb01911b024602fcdbe9f))

### Features

- **graphiql:** add prop for adding toolbar content while preserving the default buttons ([ea81056](https://github.com/graphql/graphiql/commit/ea81056e09b0a95e1536c79fab27e027739808c4))
- deeper fragment merging ([238d0b5](https://github.com/graphql/graphiql/commit/238d0b5e52cfa9354757c9d52050692d152aae21))

## [1.0.6](https://github.com/graphql/graphiql/compare/graphiql@1.0.5...graphiql@1.0.6) (2020-10-20)

### Bug Fixes

- enable variable editor when header editor is not enabled ([#1682](https://github.com/graphql/graphiql/issues/1682)) ([205fbad](https://github.com/graphql/graphiql/commit/205fbad84806d175d66a6f5598e0a0f521129a16))

## [1.0.5](https://github.com/graphql/graphiql/compare/graphiql@1.0.4...graphiql@1.0.5) (2020-09-18)

**Note:** Version bump only for package graphiql

## [1.0.4](https://github.com/graphql/graphiql/compare/graphiql@2.0.0-alpha.5...graphiql@1.0.4) (2020-09-11)

### Bug Fixes

- don't use initial query on every re-render ([#1663](https://github.com/graphql/graphiql/issues/1663)) ([5aa890f](https://github.com/graphql/graphiql/commit/5aa890f6e145a7ad49f82cc122e209a291060709))

## [1.0.3](https://github.com/graphql/graphiql/compare/graphiql@1.0.2...graphiql@1.0.3) (2020-06-24)

### Bug Fixes

- headers tab - highlighting and schema fetch ([#1593](https://github.com/graphql/graphiql/issues/1593)) ([0d050ca](https://github.com/graphql/graphiql/commit/0d050caeb5278799f2b1c206d0c61f3ac768e7cd))

## [1.0.2](https://github.com/graphql/graphiql/compare/graphiql@1.0.1...graphiql@1.0.2) (2020-06-19)

**Note:** Version bump only for package graphiql

## [1.0.1](https://github.com/graphql/graphiql/compare/graphiql@1.0.0...graphiql@1.0.1) (2020-06-17)

### Bug Fixes

- more server side rendering fixes ([#1581](https://github.com/graphql/graphiql/issues/1581)) ([881a19f](https://github.com/graphql/graphiql/commit/881a19fbd5fbe5f65678de8074e593be7deb2ede)), closes [#1573](https://github.com/graphql/graphiql/issues/1573)
- network cancellation for 1.0 ([#1582](https://github.com/graphql/graphiql/issues/1582)) ([ad3cc0d](https://github.com/graphql/graphiql/commit/ad3cc0d1567ea49ff5677d4cd8524e5e072b605e))
- Set headers to localStorage ([#1578](https://github.com/graphql/graphiql/issues/1578)) ([cc7a7e2](https://github.com/graphql/graphiql/commit/cc7a7e2f6d25d7e8150dc89c6984e6a04b01566b))

## [1.0.0](https://github.com/graphql/graphiql/compare/graphiql@1.0.0-alpha.13...graphiql@1.0.0) (2020-06-11)

### Bug Fixes

- call debounce statements as they are functions ([#1571](https://github.com/graphql/graphiql/issues/1571)) ([8541250](https://github.com/graphql/graphiql/commit/85412501307ccfffe258b7fbca74bb9309726a73))
- fix server side rendering by using type only codemirror import ([#1573](https://github.com/graphql/graphiql/issues/1573)) ([1ee60a6](https://github.com/graphql/graphiql/commit/1ee60a6db87d54c7a1e8f1089e52a65f335351b6)), closes [#118](https://github.com/graphql/graphiql/issues/118)
- Move all componentWillUnMount functionality to respective events ([#1544](https://github.com/graphql/graphiql/issues/1544)) ([046b09f](https://github.com/graphql/graphiql/commit/046b09f541e6a9f2ce4b46de590d49c04c916716))

## [1.0.0-alpha.13](https://github.com/graphql/graphiql/compare/graphiql@1.0.0-alpha.12...graphiql@1.0.0-alpha.13) (2020-06-04)

**Note:** Version bump only for package graphiql

## [1.0.0-alpha.12](https://github.com/graphql/graphiql/compare/graphiql@1.0.0-alpha.11...graphiql@1.0.0-alpha.12) (2020-06-04)

### Bug Fixes

- cleanup cache entry from lerna publish ([4a26218](https://github.com/graphql/graphiql/commit/4a2621808a1aea8b30d5d27b8d86a60bf2b44b01))
- display variable editor when headers are not enabled ([ce7b2e2](https://github.com/graphql/graphiql/commit/ce7b2e2b45d530b61e916112e864074cf3a6ddc7))

## [1.0.0-alpha.11](https://github.com/graphql/graphiql/compare/graphiql@1.0.0-alpha.10...graphiql@1.0.0-alpha.11) (2020-05-28)

### Bug Fixes

- Safe setState ([#1547](https://github.com/graphql/graphiql/issues/1547)) ([f85969c](https://github.com/graphql/graphiql/commit/f85969c7e77e8fd269e026be36cc5065d6d33237))
- trigger edit variables on first render ([#1545](https://github.com/graphql/graphiql/issues/1545)) ([e54e1a8](https://github.com/graphql/graphiql/commit/e54e1a8691483f1d336231314130d9822481b3be))

### Features

- Add Headers Editor to GraphiQL ([#1543](https://github.com/graphql/graphiql/issues/1543)) ([3faa1ac](https://github.com/graphql/graphiql/commit/3faa1ac46514252e90abf2b2bda0841edf6115ea))

## [1.0.0-alpha.10](https://github.com/graphql/graphiql/compare/graphiql@1.0.0-alpha.9...graphiql@1.0.0-alpha.10) (2020-05-19)

### Bug Fixes

- graphiql non-relative import issues ([#1534](https://github.com/graphql/graphiql/issues/1534)) fixes [#1530](https://github.com/graphql/graphiql/issues/1530) ([0ac9fa0](https://github.com/graphql/graphiql/commit/0ac9fa0a8dcdf8464c8ce31c487ebcfd6b9536a8))

## [1.0.0-alpha.9](https://github.com/graphql/graphiql/compare/graphiql@1.0.0-alpha.8...graphiql@1.0.0-alpha.9) (2020-05-17)

### Bug Fixes

- remove problematic file resolution module from webpack sco… ([#1489](https://github.com/graphql/graphiql/issues/1489)) ([8dab038](https://github.com/graphql/graphiql/commit/8dab0385772f443f73b559e2c668080733168236))

### Features

- introduce proper vscode completion kinds ([#1488](https://github.com/graphql/graphiql/issues/1488)) ([f19aa0d](https://github.com/graphql/graphiql/commit/f19aa0ddde6109526c101c8a487f43bbb8238394))
- Monaco Mode - Phase 2 - Mode & Worker ([#1459](https://github.com/graphql/graphiql/issues/1459)) ([bc95fb4](https://github.com/graphql/graphiql/commit/bc95fb46459a4437ff9471ff43c98e1c5c50f51e))

## [1.0.0-alpha.8](https://github.com/graphql/graphiql/compare/graphiql@1.0.0-alpha.7...graphiql@1.0.0-alpha.8) (2020-04-10)

**Note:** Version bump only for package graphiql

## [1.0.0-alpha.7](https://github.com/graphql/graphiql/compare/graphiql@1.0.0-alpha.6...graphiql@1.0.0-alpha.7) (2020-04-10)

**Note:** Version bump only for package graphiql

## [1.0.0-alpha.6](https://github.com/graphql/graphiql/compare/graphiql@1.0.0-alpha.5...graphiql@1.0.0-alpha.6) (2020-04-10)

**Note:** Version bump only for package graphiql

## [1.0.0-alpha.5](https://github.com/graphql/graphiql/compare/graphiql@1.0.0-alpha.4...graphiql@1.0.0-alpha.5) (2020-04-06)

### Features

- upgrade to graphql@15.0.0 for [#1191](https://github.com/graphql/graphiql/issues/1191) ([#1204](https://github.com/graphql/graphiql/issues/1204)) ([f13c8e9](https://github.com/graphql/graphiql/commit/f13c8e9d0e66df4b051b332c7d02f4bb83e07ffd))

## [1.0.0-alpha.4](https://github.com/graphql/graphiql/compare/graphiql@1.0.0-alpha.3...graphiql@1.0.0-alpha.4) (2020-04-03)

### Bug Fixes

- fix query argument missing from onEditQuery call ([#1440](https://github.com/graphql/graphiql/issues/1440)) ([6c335a8](https://github.com/graphql/graphiql/commit/6c335a813f6101afded00c0e869c337a7ca44020))

## [1.0.0-alpha.3](https://github.com/graphql/graphiql/compare/graphiql@1.0.0-alpha.2...graphiql@1.0.0-alpha.3) (2020-03-20)

**Note:** Version bump only for package graphiql

## [1.0.0-alpha.2](https://github.com/graphql/graphiql/compare/graphiql@1.0.0-alpha.0...graphiql@1.0.0-alpha.2) (2020-03-20)

### Bug Fixes

- Fix typo in documentation (comments) ([#1431](https://github.com/graphql/graphiql/issues/1431)) ([fdda8f0](https://github.com/graphql/graphiql/commit/fdda8f04479412d22e9a3e9215c7caa5369e7d83))
- initial request cache set, import tsc bugs ([#1266](https://github.com/graphql/graphiql/issues/1266)) ([6b98f8a](https://github.com/graphql/graphiql/commit/6b98f8a442d4a8ea160fb90a29acf33f5382db2e))

## [1.0.0-alpha.1](https://github.com/graphql/graphiql/compare/graphiql@0.17.5...graphiql@1.0.0-alpha.1) (2020-01-18)

### Bug Fixes

- hmr, file resolution warnings ([69bf701](https://github.com/graphql/graphiql/commit/69bf701))
- prefer displayName over type equality for children overrides ([e4cec0a](https://github.com/graphql/graphiql/commit/e4cec0a))
  - remove use of `findDOMNode` ([0b12323](https://github.com/graphql/graphiql/commit/0b12323)) by [@ryan-m-walker](https://github.com/ryan-m-walker)

### Features

- deprecate support for 15, support react 16 features ([#1107](https://github.com/graphql/graphiql/issues/1107)) ([bc4b6fc](https://github.com/graphql/graphiql/commit/bc4b6fc))
- **graphiql-theming:** Toolbar component ([#1203](https://github.com/graphql/graphiql/issues/1203)) by [@walaura](https://github.com/walaura) ([adb73f5](https://github.com/graphql/graphiql/commit/adb73f5))
- [new-ui] Tabs & Tab-bars ([#1198](https://github.com/graphql/graphiql/issues/1198)) ([033f971](https://github.com/graphql/graphiql/commit/033f971)) by [@walaura](https://github.com/walaura)
- replace use of enzyme with react-testing-library ([#1144](https://github.com/graphql/graphiql/issues/1144)) by [@ryan-m-walker](https://github.com/ryan-m-walker) ([de73d6c](https://github.com/graphql/graphiql/commit/de73d6c))
- storybook+theme-ui for the new design ([#1145](https://github.com/graphql/graphiql/issues/1145)) ([7f97c0c](https://github.com/graphql/graphiql/commit/7f97c0c)) by [@walaura](https://github.com/walaura)

### BREAKING CHANGES

- Deprecate support for React 15. Please use React 16.8 or greater for hooks support. Co-authored-by: @ryan-m-walker, @acao Reviewed-by: @benjie

## [0.17.5](https://github.com/graphql/graphiql/compare/graphiql@0.17.4...graphiql@0.17.5) (2019-12-09)

**Note:** Version bump only for package graphiql

## [0.17.4](https://github.com/graphql/graphiql/compare/graphiql@0.17.3...graphiql@0.17.4) (2019-12-09)

### Bug Fixes

- graphiql babel test ignore paths ([e1588d9](https://github.com/graphql/graphiql/commit/e1588d9))

## [0.17.3](https://github.com/graphql/graphiql/compare/graphiql@0.17.2...graphiql@0.17.3) (2019-12-09)

### Bug Fixes

- express-graphql version ([e9848b0](https://github.com/graphql/graphiql/commit/e9848b0))
- test output, webpack resolution, clean build ([3b1c2c1](https://github.com/graphql/graphiql/commit/3b1c2c1))

## [0.17.2](https://github.com/graphql/graphiql/compare/graphiql@0.17.1...graphiql@0.17.2) (2019-12-03)

### Bug Fixes

- ensure css files move with babel dist ([ca95547](https://github.com/graphql/graphiql/commit/ca95547))
- remove css from downstream components. soon to be replaced w styled ([e765543](https://github.com/graphql/graphiql/commit/e765543))

## [0.17.1](https://github.com/graphql/graphiql/compare/graphiql@0.17.0...graphiql@0.17.1) (2019-12-03)

### Bug Fixes

- **graphiql:** duplicate query history key issue, fixes [#988](https://github.com/graphql/graphiql/issues/988) ([#1035](https://github.com/graphql/graphiql/issues/1035)) ([69c6826](https://github.com/graphql/graphiql/commit/69c6826))
- convert browserify build to webpack, fixes [#976](https://github.com/graphql/graphiql/issues/976) ([#1001](https://github.com/graphql/graphiql/issues/1001)) ([3caf041](https://github.com/graphql/graphiql/commit/3caf041))
- hints vertical scroll ([216eaeb](https://github.com/graphql/graphiql/commit/216eaeb))

## [0.17.0](https://github.com/graphql/graphiql/compare/graphiql@0.16.0...graphiql@0.17.0) (2019-11-26)

### Bug Fixes

- security bump, resolves [#1004](https://github.com/graphql/graphiql/issues/1004), SNYK-JS-MARKDOWNIT-459438 ([89c83db](https://github.com/graphql/graphiql/commit/89c83db))
- webpack resolutions for [#882](https://github.com/graphql/graphiql/issues/882), add webpack example ([ea9df3e](https://github.com/graphql/graphiql/commit/ea9df3e))

### Features

- **graphiql:** Prettify also formats query variables ([b7d0bfd](https://github.com/graphql/graphiql/commit/b7d0bfd))

## [0.16.0](https://github.com/graphql/graphiql/compare/graphiql@0.15.1...graphiql@0.16.0) (2019-10-19)

### Bug Fixes

- **accessibility:** improve accessibility of all components ([#967](https://github.com/graphql/graphiql/issues/967)) ([73a3f90](https://github.com/graphql/graphiql/commit/73a3f90))
- **css:** added minimum width for result panel in GraphiQL ([#980](https://github.com/graphql/graphiql/issues/980)) ([0c8b7ad](https://github.com/graphql/graphiql/commit/0c8b7ad))
- **graphiql:** better quota management ([#764](https://github.com/graphql/graphiql/issues/764)) ([7efed6c](https://github.com/graphql/graphiql/commit/7efed6c))

### Features

- **css:** beautify code tag in doc explorer ([#959](https://github.com/graphql/graphiql/issues/959)) resolves [#949](https://github.com/graphql/graphiql/issues/949) ([30810a2](https://github.com/graphql/graphiql/commit/30810a2))

### [0.15.1](https://github.com/graphql/graphiql/compare/graphiql@0.15.0...graphiql@0.15.1) (2019-10-04)

### Bug Fixes

- build tweaks ([0bc6a7c](https://github.com/graphql/graphiql/commit/0bc6a7c))

## 0.15.0 (2019-10-04)

### Bug Fixes

- check `window` is defined before using it ([#962](https://github.com/graphql/graphiql/issues/962)) ([e4866ad](https://github.com/graphql/graphiql/commit/e4866ad))
- **graphiql:** prettify keybinding bug for Firefox. Fixes [#905](https://github.com/graphql/graphiql/issues/905) ([fdf98ba](https://github.com/graphql/graphiql/commit/fdf98ba))
- check `this.editor` exist before `this.editor.off` in QueryEditor ([#669](https://github.com/graphql/graphiql/issues/669)) ([ca226ee](https://github.com/graphql/graphiql/commit/ca226ee)), closes [#665](https://github.com/graphql/graphiql/issues/665)
- extraKeys bugfix window regression ([f3d0427](https://github.com/graphql/graphiql/commit/f3d0427))
- preserve ctrl-f key for macOS ([7c381f9](https://github.com/graphql/graphiql/commit/7c381f9))

### Features

- convert LSP from flow to typescript ([#957](https://github.com/graphql/graphiql/issues/957)) [@acao](https://github.com/acao) @Neitsch [@benjie](https://github.com/benjie) ([36ed669](https://github.com/graphql/graphiql/commit/36ed669))

## 0.13.2 (2019-06-21)

## 0.14.3 (2019-09-01)

### Bug Fixes

- check `this.editor` exist before `this.editor.off` in QueryEditor ([#669](https://github.com/graphql/graphiql/issues/669)) ([ca226ee](https://github.com/graphql/graphiql/commit/ca226ee)), closes [#665](https://github.com/graphql/graphiql/issues/665)
- extraKeys bugfix window regression ([f3d0427](https://github.com/graphql/graphiql/commit/f3d0427))
- preserve ctrl-f key for macOS ([7c381f9](https://github.com/graphql/graphiql/commit/7c381f9))
- remove newline ([19f5d1d](https://github.com/graphql/graphiql/commit/19f5d1d))

## 0.13.2 (2019-06-21)

## 0.13.2 (2019-06-21)
