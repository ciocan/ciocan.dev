---
name: "SICAP.ai"
title: "A search engine that helps track how the Romanian government spends public money through procurement contracts. It indexes over 32 million contracts worth €200+ billion."
url: "https://sicap.ai"
year: "2020-present"
type: "software"
order: 1
---

It's a project that I started in 2020 in the context of the pandemic to understand how the Romanian goverment spent the money.
I created a scrapper to get the data from the goverment portal and it is indexed in Elasticsearch.

It grew organically by SEO and word of mouth to this day where more than 100k people use it every month.
The target audience is mixed between investigative journalists, business owners, and people who want to understand how the goverment spent the money.

**A few challenges of this project:**

- Managing an Elasticsearch cluster on Docker Swarm is not easy.
- I had to learn what the data means because is poorly documented.
- The goverment portal is not very reliable, so I had to create a retry mechanism to get the data.

The end goal is to manage to train a custom model on this data to predict the outcome of a tender or to spot fraud or corruption. (I'm still working on this)

All code for [scrapper](https://github.com/ciocan/sicap-parser) and the [website](https://github.com/ciocan/sicap.ai) is open source and available on GitHub.

## Technologies used:

- Next.js, Tailwind, Shadcn
- Elasticsearch on Docker Swarm
- Vercel, Turso

*Another small spin-off from this project is [SICAP PNRR](https://pnrr.sicap.ai) which is a [evidence.dev](https://evidence.dev) app to showcase the PNRR (Romania's recovery and resilience plan) spending.*