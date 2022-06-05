module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018, // 최신 문법 지원
    sourceType: 'module', // 모듈 시스템 사용시
    ecmaFeatures: {
      jsx: true, // 리액트의 JSX 파싱을 위해서
    },
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended', // eslint 추천 룰셋
    'next', // eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-next 동시에 적용
    'plugin:@typescript-eslint/recommended', // 타입스크립트 추천 룰셋
    // "plugin:prettier/recommended" // (eslint-plugin-prettier)
  ],
  settings: {
    react: {
      version: 'detect', // eslint-plugin-react가 자동 리액트버전탐지
    },
  },
  rules: {
    'react/jsx-uses-vars': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
