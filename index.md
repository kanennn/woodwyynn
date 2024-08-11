---
layout: front
title: "Time to say hello"
---

# Time to say hello

welcome to my little corner of the internet

**{{site.title}}** is a candid, cozy, cabbalistic, and cabbagy centre for curious connoisseurs.

sit back, relax, grab a blanket and some tea, and enjoy some rainy day internet vibes

<!-- I wish you a happy birthday, happy new year, happy hanukah, and happy groundhog day. -->

---

{% for post in site.posts limit:1 %}

# "{{post.title}}"

## {{post.subtitle}}

\
[Read my latest story]({{post.url}}){: .btn}

{% endfor %}

---

# I love hedgehogs

[Stories](posts)
[Manifesto](manifesto)
[Instagram]({{site.insta}})
[Repo]({{site.repo}})

---

# Are we there yet?

No son, we are not.

---

# Things to know about me

-   blows up when spoken to
-   eats dishes when she wants
-   backstory consists of radish
-   orange zest is my gender

---

# Gnomes for the gnome army

our ranks shall cover the earth, and we will be unstoppable.

_If you have a friend who would like my content, share this website with them! I always love sharing my content with more wonderful people._

<button id="sharebutton" onclick="navigator.clipboard.writeText(window.location.href)">Share</button>

<script src="/assets/js/sharesplash.js"></script>
