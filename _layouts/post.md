---
layout: base
---

{% include header.html title=page.title subtitle=page.subtitle %}

<hr />

<body>
    {{ content }}
</body>
<br />
<a href="/posts">See other stories</a>
<a href="/">Go home</a>
<hr />
<h1>pass the frisbee</h1>
<p><em>bonk your friend with my story for brownie points</em></p>
<!-- <p><small>seriously if you know someone who would like my content, feel free to share! i always love sharing my content with more people</small></p> -->
<br>
<button id="sharebutton" onclick="navigator.clipboard.writeText(window.location.href)">Share</button>
<script src="/assets/js/sharesplash.js"></script>

<hr />

{% include footer.html %}
