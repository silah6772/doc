import{_ as a,p as n,q as s,a1 as e}from"./framework-5866ffd3.js";const i={},t=e(`<h1 id="sh-dynamic-tabs" tabindex="-1"><a class="header-anchor" href="#sh-dynamic-tabs" aria-hidden="true">#</a> Sh Dynamic Tabs</h1><p>An easy way to incorporate bootstrap 5 tabs</p><h2 id="importing" tabindex="-1"><a class="header-anchor" href="#importing" aria-hidden="true">#</a> importing</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>ShDynamicTabs<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@silahkosgei/sfrontend&#39;</span>
<span class="token keyword">import</span> TabOne <span class="token keyword">from</span> <span class="token string">&#39;./tabs/TabOne.vue&#39;</span>
<span class="token keyword">import</span> TabTwo <span class="token keyword">from</span> <span class="token string">&#39;./tabs/TabTwo.vue&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example-usage" tabindex="-1"><a class="header-anchor" href="#example-usage" aria-hidden="true">#</a> Example Usage</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sh-dynamic-tabs</span>
        <span class="token attr-name">:tabs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
      {
    label: &#39;Tab One&#39;,
    component: TabOne
    },
    {
    label: &#39;Tab Two&#39;,
    component: TabTwo
    }
  ]<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[t];function c(d,o){return n(),s("div",null,l)}const p=a(i,[["render",c],["__file","shdynamictabs.html.vue"]]);export{p as default};
