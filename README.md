# regex-property-action

## Example
```
    - name: Name of branch
      id: branch
      uses: ashley-taylor/regex-property-action@v1.0
      with:
        value: ${{ github.ref }}
        regex: ".*/"
        flags: "" # Optional, defaults to "g"
        replacement: ""
    - name: branch
      run: echo "${{ steps.branch.outputs.value }}"
``` 
   
