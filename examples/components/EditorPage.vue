<template>
<div class="hello">
  <h1>kindEditor 例子</h1>
  <div>
    <Editor ref="editor" v-model="mailContent"></Editor>
  </div>
</div>
</template>

<script>

import Editor from 'vue-kindeditor';
import './../simple.css';
export default {
  components: {
    Editor,
  },
  name: 'EditorPage',
  data() {
    return {
        mailContent: ''
    }
  },
  mounted() {
	let that = this;
    this.$refs.editor.initEditor({
      afterCreate() {
        // 这里的this，是editor了
        this.html(that.mailContent);
        // K.appendHtml(expr, val)
        if (that.type !== 'relay' && that.type !== 'edit' && that.type !== 'new') {
          // 如果不是转发，编辑器获取焦点
          this.focus();
        }
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
