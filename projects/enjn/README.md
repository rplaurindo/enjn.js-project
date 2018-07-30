<h1 id="enjn.js-javascript-engine-help-api">enJn.js JavaScript Engine Help API</h1>
<h2 id="installing">Installing</h2>
<pre><code>$ npm i enjn.js --save
</code></pre>
<h2 id="using-with-typescript">Using with TypeScript</h2>
<p>Set follow keys in <code>tsconfig.json</code> nested to <code>"compilerOptions"</code>:</p>
<blockquote>
<ul>
<li><code>"module": es2015</code></li>
<li><code>"allowJs": true</code> (maybe this is no more necessary)</li>
</ul>
</blockquote>
<p>So import in a <code>.ts</code> file:</p>
<p>import { nJn } from ‘enjn.js’;</p>
<h2 id="contributing">Contributing</h2>
<p>To use in development mode, download the project and inside its folder run…</p>
<blockquote>
<ul>
<li>On <code>Bash</code>:</li>
</ul>
</blockquote>
<pre><code>$ ln -s /absolute/path/of/enjn.js /absolute/path/to/project/node_modules
</code></pre>
<p>Or use <code>npm link</code>:</p>
<pre><code>$ npm link
</code></pre>
<p>So copy the symlink from global <code>node_modules</code> folder to local <code>node_modules</code>.</p>
<blockquote>
<ul>
<li>On <code>Windows</code>:</li>
</ul>
</blockquote>
<pre><code>$ mklink /j ...\path\to\project\node_modules\enjn.js ...\path\of\enjn.js
</code></pre>

