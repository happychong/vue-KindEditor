<template>
    <textarea class="js-editor" name="content" ref="editor"
        v-bind:value="curValue"
    ></textarea>
</template>

<script>
    // http://kindeditor.net/demo.php
    import merge from 'deepmerge';
    import kindeditor from './kindeditor/kindeditor-all.js';
    import lang from './kindeditor/lang/zh-CN.js';
    import './kindeditor/themes/default/default.css';
    // import './kindeditor/themes/simple/simple.css';
    let callBack = null;
    export default {
        props: {
            value: {
                type: [String, Number]
            },
        },
        data () {
            return {
                editor: null,
                curValue: '',
                hasCreated: false
            }
        },
        methods: {
            async initEditor(opts = {}) {
                let defaultOptions = {
    		        // cssPath : '/css/index.css',
    		        // filterMode : true,
    				themeType: 'simple',
    				// basePath: './../static/kindeditor/',
                    filterMode: false,
                    width: '100%',
                    height: '450px',
                    afterChange: () => {
                        if (this.hasCreated) {
                            this.editor && this.editor.sync();
                            this.curValue = this.$el.value;
                            this.$emit('input', this.curValue);
                        }
                    }
    			};
                let options = merge(defaultOptions, opts);

                options.afterCreate = () => {
                    let that = this;
                    this.$nextTick(() => {
                        setTimeout(() => {
                            opts.afterCreate.bind(that)();
                            this.hasCreated = true;
                        }, 100)
                    });
                }
                this.K = KindEditor;
                this.editor = await KindEditor.create(this.$el, options);
            },
            remove() {
                return this.editor && this.editor.remove();
            },
            html(val) {
                return this.editor && this.editor.html(val || '');
            },
            appendHtml(val) {
                return this.editor && this.editor.appendHtml(val || '');
            },
            insertHtml(val) {
                return this.editor && this.editor.insertHtml(val || '');
            },
            fullHtml() {
                if (this.editor) {
                    return this.editor.fullHtml();
                }
            },
            text(val) {
                if (this.editor) {
                    if (val) {
                        return this.editor.text(val);
                    } else {
                        return this.editor.text();
                    }
                }
            },
            selectedHtml() {
                return this.editor.selectedHtml();
            },
            count(mode = 'html') {
                // mode = 'html' || 'text'
                return this.editor.count(mode);
            },
            isEmpty() {
                return this.editor.isEmpty();
            },
            focus() {
                return this.editor && this.editor.focus();
            },
            blur() {
                return this.editor && this.editor.blur();
            },
            loadPlugin(name, fn) {
                return this.editor && this.editor.loadPlugin(name, fn);
            },
            clickToolbar(name, fn) {
                if (fn) {
                    // 事件执行
                    return this.editor && this.editor.clickToolbar(name);
                } else {
                    // 事件绑定
                    return this.editor && this.editor.clickToolbar(name, fn);
                }
            },
            addBookmark() {
                return this.editor && this.editor.addBookmark();
            },
            undo() {
                return this.editor && this.editor.undo();
            },
            redo () {
                return this.editor && this.editor.redo();
            },
            fullscreen() {
                return this.editor && this.editor.fullscreen();
            },
            readonly(isReadonly) {
                // Boolean isReadonly: false时取消只读状态，true时设置成只读状态。
                return this.editor && this.editor.fullscreen(isReadonly);
            },
            createMenu(options) {
                // object options: 初始化参数
                return this.editor && this.editor.createMenu(options)
            },
            hideMenu() {
                return this.editor && this.editor.hideMenu();
            },
            addContextmenu(item) {
                // object item: 请参考 KMenu.addItem(item)的item参数
                return this.editor && this.editor.addContextmenu(options)
            },
            hideContextmenu() {
                return this.editor && this.editor.hideContextmenu();
            },
            createDialog() {
                return this.editor && this.editor.createDialog();
            },
            hideDialog() {
                return this.editor && this.editor.hideDialog();
            }
        },
        created() {}
    }
</script>


<style lang="less">
    .h185{height: 185px;}
    .w495 {width: 495px;}
</style>
