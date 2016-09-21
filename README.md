## goflarum

## 运行步骤

 1. `$ npm install`
 2. `$ ./gulp watch` or `$ ./gulp build`
 3. `$ go-bindata --debug --pkg=main --prefix=static/build static/build/...`
 4. `$ go build && ./goflarum`
 5. make changes (repeat step 5 if you make changes to any Go code)
 6. `$ go-bindata --pkg=main --prefix=static/build static/build/...`
 7. commit other changes and `bindata.go`