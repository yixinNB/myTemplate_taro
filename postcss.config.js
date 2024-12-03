module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 16, // 基准值，通常是16px
      propList: ['*'], // 转换所有属性
      minPixelValue: 1, // 最小转换像素
    }
  }
}
