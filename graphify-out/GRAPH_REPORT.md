# Graph Report - /home/swayam/pi-projects/workspace/Arbitrates  (2026-04-25)

## Corpus Check
- Corpus is ~3,313 words - fits in a single context window. You may not need a graph.

## Summary
- 73 nodes · 80 edges · 27 communities detected
- Extraction: 98% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Structure Signals
- Entity graph basis: 45 non-file, non-concept node(s)
- Weakly connected components: 23
- Singleton components: 20
- Isolated nodes: 20
- Largest component: 11 node(s) (24% of the entity graph basis)
- Low-cohesion communities: 0
- Largest low-cohesion community: none on the entity graph basis

## Workspace Bridges
1. `Home\(\)` - connects `Web Agents Grid`, `Web Cta`, `Web Debate Mode`, `Web Footer`, `Web Navbar`, `Web Page`, `Web Tech Stack`; home: `Web Hero`; degree 8; score 169.1
  source files: `/home/swayam/pi-projects/workspace/Arbitrates/web/src/app/page.tsx`, `/home/swayam/pi-projects/workspace/Arbitrates/web/src/components/AgentsGrid.tsx`, `/home/swayam/pi-projects/workspace/Arbitrates/web/src/components/CTA.tsx`, `/home/swayam/pi-projects/workspace/Arbitrates/web/src/components/DashboardPreview.tsx`, `/home/swayam/pi-projects/workspace/Arbitrates/web/src/components/DebateMode.tsx`, `/home/swayam/pi-projects/workspace/Arbitrates/web/src/components/Footer.tsx`, `/home/swayam/pi-projects/workspace/Arbitrates/web/src/components/Hero.tsx`, `/home/swayam/pi-projects/workspace/Arbitrates/web/src/components/Navbar.tsx`, `/home/swayam/pi-projects/workspace/Arbitrates/web/src/components/TechStack.tsx`
2. `Navbar\(\)` - connects `Web Hero`, `Web Page`; home: `Web Navbar`; degree 2; score 29.57
  source files: `/home/swayam/pi-projects/workspace/Arbitrates/web/src/app/connect/page.tsx`, `/home/swayam/pi-projects/workspace/Arbitrates/web/src/app/page.tsx`, `/home/swayam/pi-projects/workspace/Arbitrates/web/src/components/Navbar.tsx`
3. `WebhookStore` - connects `Backend Models`; home: `Backend Storage`; degree 6; score 127.5
  source files: `/home/swayam/pi-projects/workspace/Arbitrates/backend/app/models.py`, `/home/swayam/pi-projects/workspace/Arbitrates/backend/app/storage.py`
4. `ConnectPage\(\)` - connects `Web Navbar`; home: `Web Page`; degree 3; score 42.1
  source files: `/home/swayam/pi-projects/workspace/Arbitrates/web/src/app/connect/page.tsx`, `/home/swayam/pi-projects/workspace/Arbitrates/web/src/components/DashboardPreview.tsx`, `/home/swayam/pi-projects/workspace/Arbitrates/web/src/components/Navbar.tsx`
5. `DashboardPreview\(\)` - connects `Web Hero`; home: `Web Page`; degree 2; score 27.37
  source files: `/home/swayam/pi-projects/workspace/Arbitrates/web/src/app/connect/page.tsx`, `/home/swayam/pi-projects/workspace/Arbitrates/web/src/app/page.tsx`, `/home/swayam/pi-projects/workspace/Arbitrates/web/src/components/DashboardPreview.tsx`

## God Nodes
1. `Home\(\)` - 9 edges
2. `api\_key\_middleware\(\)` - 7 edges
3. `WebhookStore` - 7 edges
4. `ConnectPage\(\)` - 4 edges
5. `DashboardPreview\(\)` - 3 edges
6. `Navbar\(\)` - 3 edges
7. `\_extract\_signature\(\)` - 2 edges
8. `\_extract\_token\(\)` - 2 edges
9. `\_get\_expected\_key\(\)` - 2 edges
10. `\_get\_expected\_signature\(\)` - 2 edges

## Surprising Connections
- `WebhookStore` --uses--> `WebhookRecord`  [INFERRED]
  /home/swayam/pi-projects/workspace/Arbitrates/backend/app/storage.py → /home/swayam/pi-projects/workspace/Arbitrates/backend/app/models.py  _inferred connection - not explicitly stated in source; bridges separate communities; peripheral node \`WebhookRecord\` unexpectedly reaches hub \`WebhookStore\`_
- `Home\(\)` --renders--> `AgentsGrid\(\)`  [EXTRACTED]
  /home/swayam/pi-projects/workspace/Arbitrates/web/src/app/page.tsx → /home/swayam/pi-projects/workspace/Arbitrates/web/src/components/AgentsGrid.tsx  _bridges separate communities; peripheral node \`AgentsGrid\(\)\` unexpectedly reaches hub \`Home\(\)\`_
- `Home\(\)` --renders--> `DebateMode\(\)`  [EXTRACTED]
  /home/swayam/pi-projects/workspace/Arbitrates/web/src/app/page.tsx → /home/swayam/pi-projects/workspace/Arbitrates/web/src/components/DebateMode.tsx  _bridges separate communities; peripheral node \`DebateMode\(\)\` unexpectedly reaches hub \`Home\(\)\`_
- `Home\(\)` --renders--> `TechStack\(\)`  [EXTRACTED]
  /home/swayam/pi-projects/workspace/Arbitrates/web/src/app/page.tsx → /home/swayam/pi-projects/workspace/Arbitrates/web/src/components/TechStack.tsx  _bridges separate communities; peripheral node \`TechStack\(\)\` unexpectedly reaches hub \`Home\(\)\`_
- `Home\(\)` --renders--> `CTA\(\)`  [EXTRACTED]
  /home/swayam/pi-projects/workspace/Arbitrates/web/src/app/page.tsx → /home/swayam/pi-projects/workspace/Arbitrates/web/src/components/CTA.tsx  _bridges separate communities; peripheral node \`CTA\(\)\` unexpectedly reaches hub \`Home\(\)\`_

## Semantic Anomalies
- **[HIGH] Bridge node** - Home\(\) bridges Web Hero and Web Page — Webhook, Web Navbar, Web Agents Grid, Web Debate Mode, Web Page, Web Tech Stack, Web Cta, Web Footer.
  _High betweenness centrality \(91.100\) across 9 communities makes this node a likely dependency chokepoint._
- **[HIGH] Bridge node** - WebhookStore bridges Backend Storage and Backend Webhooks, Backend Models.
  _High betweenness centrality \(111.500\) across 3 communities makes this node a likely dependency chokepoint._
- **[HIGH] Bridge node** - ConnectPage\(\) bridges Web Page and Web Page — Webhook, Web Navbar.
  _High betweenness centrality \(29.100\) across 3 communities makes this node a likely dependency chokepoint._
- **[HIGH] Cross-boundary edge** - WebhookStore → WebhookRecord crosses graph boundaries in an unexpected way.
  _inferred connection - not explicitly stated in source; bridges separate communities; peripheral node \`WebhookRecord\` unexpectedly reaches hub \`WebhookStore\`_
- **[HIGH] Cross-boundary edge** - ConnectPage\(\) → Navbar\(\) crosses graph boundaries in an unexpected way.
  _bridges separate communities_

## Communities

### Community 0 - "Backend Middleware"
Cohesion (entity basis within full-graph community): 0.29
Nodes (7): api\_key\_middleware\(\), auth\_failed\(\), \_extract\_signature\(\), \_extract\_token\(\), \_get\_expected\_key\(\), \_get\_expected\_signature\(\), is\_exempt\(\)

### Community 1 - "Backend Storage"
Cohesion (entity basis within full-graph community): 0.33
Nodes (6): WebhookCreate, WebhookStore, .add\(\), .get\(\), .\_\_init\_\_\(\), .list\(\)

### Community 2 - "Backend Webhooks"
Cohesion (entity basis within full-graph community): 0
Nodes (3): create\_webhook\(\), get\_webhook\(\), list\_webhooks\(\)

### Community 3 - "Backend Models"
Cohesion (entity basis within full-graph community): 0
Nodes (4): ApiResponse, ErrorDetail, WebhookList, WebhookRecord

### Community 4 - "Backend Errors"
Cohesion (entity basis within full-graph community): 0
Nodes (3): bad\_request\(\), not\_found\(\), unauthorized\(\)

### Community 5 - "Backend Exception"
Cohesion (entity basis within full-graph community): 0
Nodes (3): http\_exception\_handler\(\), unhandled\_exception\_handler\(\), validation\_exception\_handler\(\)

### Community 6 - "Web Dashboard Preview"
Cohesion (entity basis within full-graph community): 0
Nodes (2): DashboardPreviewProps, WebhookRecord

### Community 7 - "Web Page"
Cohesion (entity basis within full-graph community): 0.67
Nodes (3): DashboardPreview\(\), ConnectPage\(\), loadWebhooks\(\)

### Community 8 - "Web Hero"
Cohesion (entity basis within full-graph community): 1
Nodes (2): Hero\(\), Home\(\)

### Community 9 - "Web Page — Webhook"
Cohesion (entity basis within full-graph community): 0
Nodes (2): WebhookListResponse, WebhookRecord

### Community 10 - "Backend Agent"
Cohesion (entity basis within full-graph community): 1
Nodes (1): process\_webhook\(\)

### Community 11 - "Web Agents Grid"
Cohesion (entity basis within full-graph community): 1
Nodes (1): AgentsGrid\(\)

### Community 12 - "Backend Celery Worker"
Cohesion (entity basis within full-graph community): 1
Nodes (1): resolve\_broker\_url\(\)

### Community 13 - "Web Cta"
Cohesion (entity basis within full-graph community): 1
Nodes (1): CTA\(\)

### Community 14 - "Web Debate Mode"
Cohesion (entity basis within full-graph community): 1
Nodes (1): DebateMode\(\)

### Community 15 - "Web Footer"
Cohesion (entity basis within full-graph community): 1
Nodes (1): Footer\(\)

### Community 16 - "Backend Health"
Cohesion (entity basis within full-graph community): 1
Nodes (1): read\_root\(\)

### Community 17 - "Web Layout"
Cohesion (entity basis within full-graph community): 1
Nodes (1): RootLayout\(\)

### Community 18 - "Web Navbar"
Cohesion (entity basis within full-graph community): 1
Nodes (1): Navbar\(\)

### Community 19 - "Web Next"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 20 - "Web Tech Stack"
Cohesion (entity basis within full-graph community): 1
Nodes (1): TechStack\(\)

### Community 21 - "File SVG"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 22 - "Globe SVG"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 23 - "Init Py"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 24 - "Next Env D TypeScript"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 25 - "Vercel SVG"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

### Community 26 - "Window SVG"
Cohesion (entity basis within full-graph community): n/a
Nodes (0): 

## Knowledge Gaps
- **39 weakly connected node(s):** `not\_found\(\)`, `bad\_request\(\)`, `unauthorized\(\)`, `http\_exception\_handler\(\)`, `validation\_exception\_handler\(\)` (+34 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Backend Agent`** (2 nodes): `agent.py`, `process\_webhook\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Web Agents Grid`** (2 nodes): `AgentsGrid.tsx`, `AgentsGrid\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Backend Celery Worker`** (2 nodes): `celery\_worker.py`, `resolve\_broker\_url\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Web Cta`** (2 nodes): `CTA.tsx`, `CTA\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Web Debate Mode`** (2 nodes): `DebateMode.tsx`, `DebateMode\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Web Footer`** (2 nodes): `Footer.tsx`, `Footer\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Backend Health`** (2 nodes): `health.py`, `read\_root\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Web Layout`** (2 nodes): `layout.tsx`, `RootLayout\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Web Navbar`** (2 nodes): `Navbar.tsx`, `Navbar\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Web Next`** (2 nodes): `next.svg`, `next.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Web Tech Stack`** (2 nodes): `TechStack.tsx`, `TechStack\(\)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `File SVG`** (1 nodes): `file.svg`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Globe SVG`** (1 nodes): `globe.svg`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Init Py`** (1 nodes): `\_\_init\_\_.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Next Env D TypeScript`** (1 nodes): `next-env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vercel SVG`** (1 nodes): `vercel.svg`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Window SVG`** (1 nodes): `window.svg`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does \`WebhookStore\` connect \`Backend Storage\` to \`Backend Webhooks\`, \`Backend Models\`?**
  _High betweenness centrality \(111.500\) - this node is a cross-community bridge._
- **Why does \`Home\(\)\` connect \`Web Hero\` to \`Web Page — Webhook\`, \`Web Navbar\`, \`Web Agents Grid\`, \`Web Debate Mode\`, \`Web Page\`, \`Web Tech Stack\`, \`Web Cta\`, \`Web Footer\`?**
  _High betweenness centrality \(91.100\) - this node is a cross-community bridge._
- **Why does \`ConnectPage\(\)\` connect \`Web Page\` to \`Web Page — Webhook\`, \`Web Navbar\`?**
  _High betweenness centrality \(29.100\) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving \`WebhookStore\` \(e.g. with \`WebhookRecord\` and \`WebhookCreate\`\) actually correct?**
  _\`WebhookStore\` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects \`not\_found\(\)\`, \`bad\_request\(\)\`, \`unauthorized\(\)\` to the rest of the system?**
  _39 weakly-connected nodes found - possible documentation gaps or missing edges._
