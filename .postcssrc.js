// ESM : import 나 export를 사용하는 방식
// CommonJS : node.js에서 제공하는 방식 대신 require(), module.exports 사용

// import autoprefixer from 'autoprefixer'
const autoprefixer = require('autoprefixer')

// export {
//   plugins: [
//     autoprefixer
//   ]
// }
module.exports = {
  plugins: [
    autoprefixer
  ]
}