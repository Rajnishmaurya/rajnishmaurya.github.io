---
title: "Teaching"
permalink: /teaching/
layout: single
author_profile: true
---

This page lists teaching assistantship entries from the `_teaching` collection.

{% assign items = site.teaching | sort: "date" | reverse %}
{% for item in items %}
## [{{ item.title }}]({{ item.url | relative_url }})

**Term:** {{ item.term }}  
**Institution:** {{ item.venue | default: "IIT Madras" }}

{{ item.excerpt }}

{% endfor %}
