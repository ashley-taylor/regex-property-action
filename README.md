# Regex Replace

Implements JavaScript [replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) method.

## Example

```yml
- name: Find & Replace
  id: hello
  uses: ashley-taylor/regex-property-action@v1.2
  with:
    value: "Hello, world!"
    regex: "world"
    flags: "" # Optional, defaults to "g"
    replacement: "universe"
- name: Print Result
  run: echo "${{ steps.hello.outputs.value }}"
```
