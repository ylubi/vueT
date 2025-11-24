<template>
  <header><slot name="header">默认头部</slot></header>
  <main><slot :count="1">默认内容</slot></main>
  <footer><slot name="footer">默认底部</slot></footer>
</template>