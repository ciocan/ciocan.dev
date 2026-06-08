---
name: "Monitorul.ai"
title: "An engine that uses an LLM to score 16 years of Romanian parliamentary debate for populist rhetoric, then lets you search 800k+ speeches by meaning."
url: "https://monitorul.ai"
year: "2026-present"
type: "software"
order: 1
---

After SICAP.ai mapped where Romania's public money goes, Monitorul.ai answers the next question: what do the people spending it actually say and vote for?

I scraped and indexed the record of the Romanian Parliament over the last 16 years — both the Chamber of Deputies and the Senate. It holds 5,500+ official documents, 800k+ speeches, 55k votes, 14k committee meetings, and dossiers for 13k+ politicians.

The core of the project is discourse analysis. I use an LLM to code each speech for populist rhetoric — scoring people-centrism and anti-elitism along the lines of the ideational approach from political science. Run across the record, this turns millions of words of debate into measurable signal: you can see how populist a given party or politician has been, and how that has shifted over time.

On top of that sits semantic search. Instead of matching keywords, it retrieves speeches by meaning — vector ranking fused with BM25, tuned for Romanian proper nouns and acronyms — so a query like "rule of law" surfaces the right debates even when nobody used those exact words. Every result links straight back to its source in the Monitorul Oficial, so nothing is taken on trust.

It also ships an MCP server, so AI assistants like Claude can query the corpus directly in a conversation — run a semantic search, build a politician's dossier, or pull populism trends by party, with every answer cited back to the source.

The hard parts: parsing years of inconsistent gazette formatting, getting the populism coding to stay consistent at scale, and keeping a corpus this size fast to query.

Both the [scraper and indexer](https://github.com/ciocan/monitorul-ii) and the [search app](https://github.com/ciocan/monitorul.ai) are open source on GitHub.

The name is a nod to the Monitorul Oficial, Romania's official gazette.
