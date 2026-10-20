# InsightLoop case study

A self-contained, Chinese-default portfolio case study with an English toggle.
This is a separate presentation site. It has no connection to a live InsightLoop
API and includes no research workspace data or credentials.

## Files

- `dist/index.html`: narrative and semantic page structure
- `dist/style.css`: responsive editorial layout
- `dist/app.js`: language toggle and screenshot previews
- `dist/assets/`: seven demo screenshots in WebP format
- `.openai/hosting.json`: static Sites deployment identity

Serve `dist/` using any static HTTP server. There is no build or dependency step.
The English entry point is `?lang=en`; `?lang=zh` explicitly selects Chinese.

## Content boundary

InsightLoop is an independent AI-assisted qualitative analysis prototype.
The case study describes scenario walkthroughs and workflow iterations, without
claiming formal study recruitment, commercial traction, efficiency gains, or
validated live AI quality. Implementation was supported by AI programming tools.

## Screenshot provenance

All screenshots were captured from the frozen product checkpoint
`801e807f6fe317ec73a0cb7635470301473325c3` in mock mode on 2026-10-19.
The project-provided CanvasHub interview demo workbook was used in an isolated
browser origin. Coding labels, a theme, and a finding were manually reviewed and
edited inside that demo workspace to illustrate the review workflow; they are
not presented as measured user research outcomes or model-quality evidence.

1. Project setup and evidence-chain onboarding
2. Evidence Review with source context and analysis segments
3. Coding detail with AI suggestions and accept/edit/reject controls
4. Selective Batch-to-Deep review queue
5. Theme organization and review state
6. Findings evidence trace detail, including source-record link
7. Summary and mock synthesis downstream of reviewed material

Screenshots 3 and 6 are focused browser screenshot crops. Images are encoded as
WebP for delivery; no UI content was redrawn. The product repository was used
read-only and was not functionally modified.
