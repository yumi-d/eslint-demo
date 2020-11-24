1、通过npm init -y 初始化package.json
2、npm install --save-dev eslint
3、./node_modules/.bin/eslint --init    初始化eslint配置 （选react、ts、Browser、airbnb，生成.eslintrc.js）
4、如果支持ts，还得安装：npm install --save-dev typescript
5、./node_modules/.bin/eslint yourfile.js   用eslint检查指定的文件
