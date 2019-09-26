const { override, fixBabelImports, addWebpackAlias} = require('customize-cra');
const path = require("path")
module.exports = override(
       fixBabelImports('import', {
         libraryName: 'antd-mobile',
         libraryDirectory: 'es',
         style: 'css',
       }),
       addWebpackAlias({
           "@":path.join(__dirname,"/src"),
           "@api":path.join(__dirname,"/src/api"),
           "@common":path.join(__dirname,"/src/common"),
           "@components":path.join(__dirname,"/src/components"),
           "@layout":path.join(__dirname,"/src/layout"),
           "@lib":path.join(__dirname,"/src/lib"),
           "@pages":path.join(__dirname,"/src/pages"),
           "@router":path.join(__dirname,"/src/router"),
           "@store":path.join(__dirname,"/src/store"),
           "@utils":path.join(__dirname,"/src/utils"),  
           "@actions":path.join(__dirname,"/src/actions"),  
       })
     );


