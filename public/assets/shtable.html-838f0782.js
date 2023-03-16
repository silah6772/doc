import{_ as e,p as n,q as a,a1 as i}from"./framework-5866ffd3.js";const s={},l=i(`<h1 id="sh-table" tabindex="-1"><a class="header-anchor" href="#sh-table" aria-hidden="true">#</a> Sh Table</h1><h2 id="importing" tabindex="-1"><a class="header-anchor" href="#importing" aria-hidden="true">#</a> importing</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>ShTable<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@silahkosgei/sfrontend&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="example-usage" tabindex="-1"><a class="header-anchor" href="#example-usage" aria-hidden="true">#</a> Example Usage</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sh-table</span>
      <span class="token attr-name">:headers</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;id&#39;,&#39;name&#39;,&#39;description&#39;]<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">end-point</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tasks/list<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h2><h3 id="headers" tabindex="-1"><a class="header-anchor" href="#headers" aria-hidden="true">#</a> <code>headers</code></h3><ul><li><p>Type: <code>array</code></p></li><li><p>Default: <code>none</code></p></li><li><p>Required: <code>true</code></p></li><li><p>Details</p><p>These are table headers for the table that will be generated</p></li><li><p>Example: <code>[&#39;id&#39;,&#39;name&#39;,&#39;description&#39;]</code></p></li></ul><h3 id="end-point" tabindex="-1"><a class="header-anchor" href="#end-point" aria-hidden="true">#</a> <code>end-point</code></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>none</code></p></li><li><p>Required: <code>true</code></p></li><li><p>Details</p><p>It&#39;s the endpoint of table data, usually it&#39;s the backend api url</p></li><li><p>Example: <code>tasks/list</code></p></li></ul><h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions</h3><ul><li><p>Type: <code>object</code></p></li><li><p>Required: <code>false</code>,</p></li><li><p>Default: <code>none</code></p></li><li><p>Details</p><p>This will be the buttons attached to the end colum of the table containing header label, actions and action callbacks, When a emits value is string, it emits an event, and you have to listen to that event. The easy way is to use a function callback</p></li><li><p>Example With Emitter</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>:actions=&quot;{
label: &#39;Action&#39;,
        actions: [
  {
    label: &#39;EDIT&#39;,
    class: &#39;btn btn-info btn-sm&#39;,
    type: &#39;emitter&#39;,
    emits: &#39;editDocument&#39;
  }
]
}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Example With Action Callback</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>:actions=&quot;{
label: &#39;Action&#39;,
        actions: [
  {
    label: &#39;EDIT&#39;,
    class: &#39;btn btn-info btn-sm&#39;,
    type: &#39;emitter&#39;,
    emits: editDocument
  }
]
}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Example With Offcanvas</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>:actions=&quot;{
      label: &#39;Action&#39;,
      actions: [
        {
          label: &#39;Permissions&#39;,
          canvasPosition: &#39;start&#39;,
          canvasTitle: &#39;View Department&#39;,
          canvasId: &#39;departmentsCanvas&#39;,
          canvasSize: &#39;lg&#39;,
          canvasComponent: ViewDepartment,
          class: &#39;btn btn-info btn-sm&#39;,
          icon: &#39;bi-plus&#39;,
        }
      ]
    }&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the above, canvas component is the imported canvas component</p>`,18),t=[l];function d(c,r){return n(),a("div",null,t)}const u=e(s,[["render",d],["__file","shtable.html.vue"]]);export{u as default};
