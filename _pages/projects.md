---
title: "Projects"
permalink: /projects/
layout: single
author_profile: true
---

This page lists portfolio/project entries from the `_portfolio` collection.

{% assign items = site.portfolio | sort: "date" | reverse %}
{% for item in items %}
## [{{ item.title }}]({{ item.url | relative_url }})

{{ item.excerpt }}

{% if item.tags %}**Tags:** {{ item.tags | join: ", " }}{% endif %}

{% endfor %}
