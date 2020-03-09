# regex-property-action

## Example
```
    - name: Name of branch
      id: branch
      uses: ashley-taylor/regex-property-action@v1.0
      with:
        value: ${{ github.ref }}
        regex: ".*/"
        replacement: ""
    - name: branch
      run: echo "${{ steps.branch.outputs.value }}"
``` 
   
