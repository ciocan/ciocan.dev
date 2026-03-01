---
name: "SICAP.ai"
title: "An open-source search engine indexing 32M+ Romanian public procurement contracts worth over €200 billion."
url: "https://sicap.ai"
year: "2020-present"
type: "software"
order: 1
---

I started SICAP.ai in 2020 to answer a simple question: where does the Romanian government spend public money?

I built a scraper to pull data from the government's procurement portal and indexed it all in Elasticsearch. Five years later, over 100k people use it every month — investigative journalists chasing stories, businesses scouting opportunities, and citizens tracking public spending. It grew entirely through SEO and word of mouth.

The hard parts: managing an Elasticsearch cluster on Docker Swarm, making sense of poorly documented government data, and working around an unreliable source portal that needs constant retry logic.

The long-term goal is training a model on this data to predict tender outcomes and flag potential fraud.

All code for the [scraper](https://github.com/ciocan/sicap-parser) and the [website](https://github.com/ciocan/sicap.ai) is open source on GitHub.

A spin-off from this project is [SICAP PNRR](https://pnrr.sicap.ai) — an [evidence.dev](https://evidence.dev) app visualising Romania's recovery and resilience plan spending.
