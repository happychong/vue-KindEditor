# vue-KindEditor

KindEditor编辑器的vue模块化

![效果](/examples/assets/editorImg.png "Title")

## Install
`npm install vue-kindeditor --save`

## Usage
```
<template>
<div class="hello">
  <h1>kindEditor 例子</h1>
  <div>
    <Editor ref="editor" v-model="mailContent"></Editor>
  </div>
</div>
</template>

<script>
// 导入
import Editor from 'vue-kindeditor';

// 这里引入kindeditor的风格样式，需要自行下载放到项目中哦（本目录中，已经把kindeditor的主题样式放到了css文件夹下，以供下载
// default.html (默认模式---可省略), simple.html (简单模式)效果ok，但是qq模式样式冲突，具体冲突点没细看，想用的小伙伴暂时自行解决哦
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
    // KindEditor的初始化参数，和方法参照其官网哦
    this.$refs.editor.initEditor({
      afterCreate() {
        // 这里的this，是editor了
        this.html(that.mailContent);
      }
    });
  }
}
</script>
```
## KindEditor官网
[http://kindeditor.net/demo.php](http://kindeditor.net/demo.php)
