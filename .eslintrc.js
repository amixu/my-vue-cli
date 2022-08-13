/*
 * @Author: amixu
 * @Date: 2022-08-13 22:05:27
 * @LastEditors: amixu
 * @LastEditTime: 2022-08-13 23:20:56
 * @Description: eslint配置文件
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    // 1开启警告规则
    eqeqeq: 1, // 必须使用全等
    complexity: [1, 10], // 复杂圈
    'no-extra-parens': 1, // 非必要的括号
    'no-use-before-define': [1, 'nofunc'], // 除函数以外的参数未定义前不能使用
    'max-len': [1, { code: 100 }], // 行最大长度不能超过100个字符
    'no-else-return': 1, // 如果if语句里面有return,后面不能跟else语句
    // 2开启报错规则
    'block-scoped-var': 2, // 块语句中使用var
    'consistent-return': 2, // return 后面是省略
    'accessor-pairs': 2, // 在对象中使用getter/setter
    'dot-location': [2, 'property'], // 对象访问符的位置，换行的时候在行首还是行尾
    'no-lone-blocks': 2, // 禁止不必要的嵌套块
    'no-labels': 2, // 禁止标签声明
    'no-extend-native': 2, // 禁止扩展native对象
    'no-floating-decimal': 2, // 禁止省略浮点数中的0 .5 3.
    'no-loop-func': 2, // 禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
    'no-new-func': 2, // 禁止使用new Function
    'no-self-compare': 2, // 不能比较自身
    'no-sequences': 2, // 禁止使用逗号运算符
    'no-throw-literal': 2, // 禁止抛出字面量错误 throw "error";
    'no-return-assign': [2, 'always'], // return 语句中不能有赋值表达式
    'no-redeclare': [
      2,
      {
        // 禁止重复声明变量
        builtinGlobals: true
      }
    ],
    'no-unused-expressions': [
      2,
      {
        // 禁止无用的表达式
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    'no-useless-call': 2, // 禁止不必要的call和apply
    'no-useless-concat': 2,
    'no-void': 2, // 禁用void操作符
    'no-with': 2, // 禁用with
    'space-infix-ops': 2, // 中缀操作符周围要不要有空格
    'no-warning-comments': [
      2,
      {
        // 不能有警告备注
        terms: ['todo', 'fixme', 'any other term'],
        location: 'anywhere'
      }
    ]
  }
};
