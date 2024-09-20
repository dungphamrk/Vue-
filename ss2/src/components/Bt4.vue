<template>
    <div>
      <h1>Danh sách kết quả</h1>
      <ol>
        <li>10+10={{ caculation(10, 10, '+') }}</li>
        <li>10-10={{ caculation(10, 10, '-') }}</li>
        <li>10*10={{ caculation(10, 10, '*') }}</li>
        <li>10/10={{ caculation(10, 10, '/') }}</li>
      </ol>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      caculation(a, b, operation) {
        switch (operation) {
          case '+':
            return a + b;
          case '-':
            return a - b;
          case '*':
            return a * b;
          case '/':
            return a / b;
          default:
            alert('ko có phép tính này');
            break;
        }
      }
    }
  }
  </script>
  