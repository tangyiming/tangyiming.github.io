(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{260:function(e){e.exports={data:{tag:{title:"deploy",belongsTo:{edges:[{node:{title:"优雅的部署github pages博客",path:"/how-to-deploy-blog-to-github-pages",date:"9. December 2019",timeToRead:1,description:"几个你可能也会遇到的问题～",coverImage:null,content:'<p>这里分享下我使用<a href="https://gridsome.org/" target="_blank" rel="nofollow noopener noreferrer">Gridsome</a>建博客并使用<a href="https://pages.github.com/" target="_blank" rel="nofollow noopener noreferrer">GitHub Pages</a>免费托管中遇到了几个作为新手一定会遇到的问题。</p>\n<h2 id="项目源码与静态文件的存放问题"><a href="#%E9%A1%B9%E7%9B%AE%E6%BA%90%E7%A0%81%E4%B8%8E%E9%9D%99%E6%80%81%E6%96%87%E4%BB%B6%E7%9A%84%E5%AD%98%E6%94%BE%E9%97%AE%E9%A2%98" aria-hidden="true"><span class="icon icon-link"></span></a>项目源码与静态文件的存放问题</h2>\n<p>由于我们需要将Gridsome或者其他工具（如<a href="https://www.gatsbyjs.org/" target="_blank" rel="nofollow noopener noreferrer">Gatsby</a> ）build后的静态文件放在github仓库并作为网站的Source，所以我们不可能将项目直接存放到github上。</p>\n<p>我选择了master分支作为我的站点的Source分支，创建了src分支存储我的项目代码。</p>\n<h2 id="使用gh-pages部署"><a href="#%E4%BD%BF%E7%94%A8gh-pages%E9%83%A8%E7%BD%B2" aria-hidden="true"><span class="icon icon-link"></span></a>使用gh-pages部署</h2>\n<p>如果是手动build，再分别修改source分支与src分支提交简直是个噩梦，过程繁琐且容易出错。</p>\n<p>我们选择安装<a href="https://github.com/tschaub/gh-pages" target="_blank" rel="nofollow noopener noreferrer">gh-pages</a>进行自动化的部署工作，如何安装就不赘述，详细使用阅读文档。</p>\n<p>gh-pages有多种命令进行使用，这里根据我们的需求：</p>\n<blockquote>\n<p>将gridsome build出的dist目录下的文件提交到仓库的master分支</p>\n</blockquote>\n<p>于是我们在<code class="language-text">package.json</code>的scripts下添加以下配置：</p>\n<pre class="language-json"><span class="token property">"predeploy"</span><span class="token operator">:</span> <span class="token string">"npm run build"</span><span class="token punctuation">,</span>\n<span class="token property">"deploy"</span><span class="token operator">:</span> <span class="token string">"gh-pages -b master -d dist"</span></pre>\n<p>这里 <code class="language-text">-b</code> 指定要部署的分支，<code class="language-text">-d</code> 指定Source文件目录，也就是build后生成的目录。</p>\n<p>以后只需一件 <code class="language-text">npm deploy</code> 即可完成部署。如果你的博客绑定了自己的域名，请继续往下阅读。 </p>\n<h2 id="cname"><a href="#cname" aria-hidden="true"><span class="icon icon-link"></span></a>CNAME</h2>\n<p>以上方法每次自动构建会出现一个问题，就是会把我们的CNAME文件删掉，为了避免这个问题，在我们的项目根目录新建CNAME文件，里面写上你的域名。然后在构建脚本上做一点修改：</p>\n<pre class="language-json"><span class="token property">"predeploy"</span><span class="token operator">:</span> <span class="token string">"npm run build &amp;&amp; copy CNAME dist || cp CNAME dist"</span><span class="token punctuation">,</span></pre>\n<p>意思是在prebuild阶段，build执行完，再将CNAME文件拷贝到dist目录下，这样到了deploy阶段，CNAME文件也就一同被部署到了master分支上了。</p>\n<p>这里<code class="language-text">copy</code>是windows上的CMD指令，<code class="language-text">cp</code>是linux或者os里的指令。如果<code class="language-text">&amp;&amp;</code>前的指令执行成功，则会执行<code class="language-text">&amp;&amp;</code>后的指令；如果<code class="language-text">||</code>前的指令执行失败，则会执行<code class="language-text">||</code>后的指令。这样就可以兼容多个操作系统啦～</p>\n<p>如果在你建博客中遇到部署，域名绑定等问题，都可以关注我的公众号后台给我留言咨询哦！</p>\n'}}]}}}}}}]);