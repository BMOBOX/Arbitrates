# Graph Report - /home/swayam/pi-projects/workspace/Arbitrates  (2026-04-26)

## Corpus Check
- 28 files · ~10,571 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 75 nodes · 83 edges · 25 communities detected
- Extraction: 77% EXTRACTED · 23% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.77)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]

## God Nodes (most connected - your core abstractions)
1. `ApiResponse` - 10 edges
2. `WebhookStore` - 7 edges
3. `api_key_middleware()` - 7 edges
4. `WebhookRecord` - 4 edges
5. `list_webhooks()` - 4 edges
6. `get_webhook()` - 4 edges
7. `WebhookCreate` - 3 edges
8. `WebhookList` - 3 edges
9. `_extract_signature()` - 3 edges
10. `_extract_token()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `ApiResponse` --calls--> `http_exception_handler()`  [INFERRED]
  /home/swayam/pi-projects/workspace/Arbitrates/backend/app/models.py → /home/swayam/pi-projects/workspace/Arbitrates/backend/app/main.py
- `ApiResponse` --calls--> `validation_exception_handler()`  [INFERRED]
  /home/swayam/pi-projects/workspace/Arbitrates/backend/app/models.py → /home/swayam/pi-projects/workspace/Arbitrates/backend/app/main.py
- `ApiResponse` --calls--> `unhandled_exception_handler()`  [INFERRED]
  /home/swayam/pi-projects/workspace/Arbitrates/backend/app/models.py → /home/swayam/pi-projects/workspace/Arbitrates/backend/app/main.py
- `ApiResponse` --calls--> `auth_failed()`  [INFERRED]
  /home/swayam/pi-projects/workspace/Arbitrates/backend/app/models.py → /home/swayam/pi-projects/workspace/Arbitrates/backend/app/middleware.py
- `ApiResponse` --calls--> `create_webhook()`  [INFERRED]
  /home/swayam/pi-projects/workspace/Arbitrates/backend/app/models.py → /home/swayam/pi-projects/workspace/Arbitrates/backend/app/routers/webhooks.py

## Communities

### Community 0 - "Community 0"
Cohesion: 0.29
Nodes (7): BaseModel, ErrorDetail, WebhookCreate, WebhookList, WebhookRecord, WebhookStore, list_webhooks()

### Community 1 - "Community 1"
Cohesion: 0.25
Nodes (3): not_found(), create_webhook(), get_webhook()

### Community 2 - "Community 2"
Cohesion: 0.42
Nodes (7): api_key_middleware(), auth_failed(), _extract_signature(), _extract_token(), _get_expected_key(), _get_expected_signature(), is_exempt()

### Community 3 - "Community 3"
Cohesion: 0.38
Nodes (5): read_root(), http_exception_handler(), unhandled_exception_handler(), validation_exception_handler(), ApiResponse

### Community 4 - "Community 4"
Cohesion: 0.38
Nodes (3): process_webhook(), run_container(), upload_to_r2()

### Community 5 - "Community 5"
Cohesion: 0.5
Nodes (0): 

### Community 6 - "Community 6"
Cohesion: 1.0
Nodes (0): 

### Community 7 - "Community 7"
Cohesion: 1.0
Nodes (0): 

### Community 8 - "Community 8"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Community 9"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "Community 10"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "Community 11"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Community 12"
Cohesion: 1.0
Nodes (0): 

### Community 13 - "Community 13"
Cohesion: 1.0
Nodes (0): 

### Community 14 - "Community 14"
Cohesion: 1.0
Nodes (0): 

### Community 15 - "Community 15"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Community 16"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "Community 17"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "Community 18"
Cohesion: 1.0
Nodes (0): 

### Community 19 - "Community 19"
Cohesion: 1.0
Nodes (0): 

### Community 20 - "Community 20"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "Community 21"
Cohesion: 1.0
Nodes (0): 

### Community 22 - "Community 22"
Cohesion: 1.0
Nodes (0): 

### Community 23 - "Community 23"
Cohesion: 1.0
Nodes (0): 

### Community 24 - "Community 24"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **Thin community `Community 6`** (2 nodes): `page.tsx`, `Home()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 7`** (2 nodes): `page.tsx`, `loadWebhooks()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 8`** (2 nodes): `Navbar.tsx`, `Navbar()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 9`** (2 nodes): `Hero()`, `Hero.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (2 nodes): `CTA()`, `CTA.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 11`** (2 nodes): `DashboardPreview()`, `DashboardPreview.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 12`** (2 nodes): `DebateMode()`, `DebateMode.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 13`** (2 nodes): `Footer()`, `Footer.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 14`** (2 nodes): `TechStack.tsx`, `TechStack()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 15`** (1 nodes): `__init__.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16`** (1 nodes): `__init__.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 17`** (1 nodes): `eslint.config.mjs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18`** (1 nodes): `next-env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 19`** (1 nodes): `postcss.config.mjs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 20`** (1 nodes): `AgentsGrid.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 21`** (1 nodes): `file.svg`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 22`** (1 nodes): `globe.svg`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 23`** (1 nodes): `vercel.svg`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 24`** (1 nodes): `window.svg`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ApiResponse` connect `Community 3` to `Community 0`, `Community 1`, `Community 2`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Why does `WebhookStore` connect `Community 0` to `Community 1`, `Community 2`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **Why does `get_webhook()` connect `Community 1` to `Community 2`, `Community 3`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Are the 8 inferred relationships involving `ApiResponse` (e.g. with `http_exception_handler()` and `validation_exception_handler()`) actually correct?**
  _`ApiResponse` has 8 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `WebhookStore` (e.g. with `WebhookCreate` and `WebhookRecord`) actually correct?**
  _`WebhookStore` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `WebhookRecord` (e.g. with `WebhookStore` and `.add()`) actually correct?**
  _`WebhookRecord` has 2 INFERRED edges - model-reasoned connections that need verification._