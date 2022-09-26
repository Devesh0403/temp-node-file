const { flattenDeep } = require("lodash")
const lod=require("lodash")
 const items=[1,[2,[3,[4,[5,[6]]]]]]
 const newitems=flattenDeep(items)
 console.log(newitems)