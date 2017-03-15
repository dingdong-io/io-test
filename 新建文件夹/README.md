


# io-test  
主分支,加速自己开发node模块的构建工具;demo分支,新建模块的模板

## 功能


## 安装
* 安装[node](https://nodejs.org/)  
下载 4.4.0 版即可,傻瓜式安装  
* npm重定向到淘宝镜像(该步骤可选)  
npm下载可能受限,翻墙也较慢.推荐国内使用cnpm,在命令行下输入  
`$ npm install -g cnpm --registry=https://registry.npm.taobao.org` 
* ??(是否需要)   下载 全局gulp
打开命令行, `$ npm install gulpjs/gulp#4.0 -g` ($符表系统命令,而非代码,不用敲入)
* 下载 io-test  
选好安装目录,如 C:/io-test ,cd到该目录下,执行命令行 `$ npm install io-test`  
* 下载依赖项   
继续命令行 `$ npm install`  

## 使用  
* 配置  

* 使用  


## 其它
请反馈bug.

ssh test 2

# 测试hexo

{% raw %}
Hello {{ sensitive }}
{% endraw %}

# 测试注释

你可以用下面这些：

[comment]: <> (This is a comment, it will not be included)
[comment1]: <> (in  the output file unless you use it in)
[]: <> (a reference style link.)
[3]: <> (This is also a comment.)
[//]: # (This may be the most platform independent comment)
我决定以后用：

[^_^]:
    commentted-out contents
    should be shift to right by four spaces (`>>`).
亲测可用（Pandoc、GitHub、简书、作业部落）。十分完美，除了这个 warning：
```
pandoc: Duplicate note reference `^' "source" (line 85, column 1)
如果你想测试一下你的 Markdown 能不能这么用，这是一点测试的文字：
```
a

[comment]
    b
[comment]

c

d
显示的 a c d 应当间隔一样长。

@delogn 的评论：

[^_^]:1

[>_<]: <> (注释)
    2

[>_>]:
    3
    
多行只能
<!--
这样注释
-->

{% comment %} 
    These commments will not include inside the source.
{% endcomment %}

这是一种偏方,以链接形式,
[](Comment text goes here)


