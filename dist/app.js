(() => {
  'use strict';
  const english = {
    skip: 'Skip to content', navCase: ' / Case study', navShift: 'The design shift', navFlow: 'Final workflow',
    heroEyebrow: "INDEPENDENT CASE STUDY · USER RESEARCH & AI-ASSISTED ANALYSIS", heroTitle1: "Keep conclusions", heroTitle2: "connected to evidence.",
    heroIntro: "InsightLoop is an AI-assisted qualitative analysis prototype for organizing interviews, open-ended feedback, and online discussions. It preserves the links between source material and the findings drawn from it.",
    heroThesis: "AI assists the work. The analyst makes the final decisions.", heroCta: 'Explore the process', heroSecondary: 'See the workflow', prototypeLabel: 'Interactive prototype · Demo data / Mock AI',
    viewLarge: 'Enlarge', chainPreviewLabel: 'FROM TEXT TO FINDING', chainPreviewNote: "Preserve the links between each level", record: 'Text Record', segment: 'Analysis Segment', code: 'Code', theme: 'Theme', finding: 'Finding',
    snapshot1Label: 'MY ROLE', snapshot1: "Independent product concept and workflow design, UX iteration, and QA.",
    snapshot2Label: 'FOCUS', snapshot2: "Framing user problems, designing qualitative analysis workflows, defining human and AI responsibilities, and preserving evidence links.",
    snapshot3Label: 'PROJECT SCOPE', snapshot3: "An interactive prototype implemented with AI coding tools. This case study uses demo data and Mock AI; it is not a live service.",
    problemKicker: 'THE PROBLEM', problemTitle: "Keeping track of the reasoning",
    problemBody: "Interview transcripts, open-ended feedback, and online discussions contain useful feedback, opinions, and accounts of how people use a product. Turning that material into conclusions requires more than a summary.",
    problemBody2: "Moving from Analysis Segments to Codes, Themes, and Findings involves interpretation. Analysts need to check those decisions against the original text and its context.",
    question1: "What evidence supports this finding?", question1Body: "Keep the original text linked to the analysis.",
    question2: "Has the AI suggestion been reviewed?", question2Body: "Distinguish a generated suggestion from an accepted result.",
    question3: "How can I check the original context?", question3Body: "Return from the analysis to a specific Text Record and Analysis Segment.",
    shiftKicker: 'SCENARIO WALKTHROUGHS & THE PIVOT', shiftTitle: "What changed after the walkthroughs",
    shiftIntro: "I initially aimed to automate more of the analysis. Demo scenarios and workflow walkthroughs shifted my attention to a more useful task: helping analysts understand, check, and revise AI suggestions.",
    observationLabel: 'WHAT THE WALKTHROUGHS REVEALED', responseLabel: 'HOW THE DESIGN RESPONDED',
    observation1: "A passage needs context to be understood accurately.", response1: "Retain Deep Review so analysts can read the original text closely and confirm Analysis Segment boundaries.",
    observation2: "Suggested codes may not match the analyst’s interpretation.", response2: "Present coding suggestions, AI reassessment, and human confirmation as separate steps, with options to revise or reject a suggestion.",
    observation3: "A readable summary can still lack supporting evidence.", response3: "Link Analysis Segments, Codes, Themes, and Findings so the basis for a conclusion can be checked.",
    pivotLabel: 'THE CORE SHIFT', pivotText: "Use AI to help organize material and prepare an initial analysis, while keeping review and final decisions with the analyst.",
    testBoundary: 'These iterations were informed by demonstration scenarios and workflow walkthroughs, rather than large-scale user research or commercial validation.',
    decisionsKicker: 'THREE KEY DESIGN DECISIONS', pathsLabel: 'ANALYSIS PATHS', pathsTitle: "Batch organization and close reading",
    pathsIntro: "Batch Review and Direct Deep Review serve different starting points. Batch Review organizes multiple Text Records before the analyst selects material for closer review. Direct Deep Review starts with the original text.",
    batchTag: "ORGANIZE RECORDS, THEN SELECT FOR REVIEW", batchBody: "AI assists with initial segmentation and coding. The analyst reviews candidate codes, checks evidence grouped by code, and selects Analysis Segments for closer review.",
    batchStep1: "Multiple Text Records", batchStep2: "AI first pass", batchStep3: "Closer review as needed",
    deepTag: 'START WITH CLOSE READING', deepBody: "Read the original text directly. Confirm Analysis Segments and Codes in context, using AI suggestions when helpful.",
    deepStep1: 'Original text', deepStep2: "Read in context", deepStep3: "Confirm Analysis Segments",
    humanLabel: 'HUMAN–AI COLLABORATION', humanTitle: "What the analyst needs to confirm",
    humanIntro: "AI offers suggestions. The analyst confirms, revises, or rejects them. Generating a result and accepting it are separate steps in the workflow.",
    human1: 'Segment boundaries', human1Body: "AI helps split the text. The analyst confirms what should belong in one Analysis Segment.",
    human2: 'Coding and reassessment', human2Body: "AI suggests codes and reassesses the current selection. The analyst decides what to accept or change.",
    human3: "Themes, findings, and final decisions", human3Body: "AI helps organize and interpret material. The analyst confirms Themes and Findings and makes the final judgment.",
    preserveNote: "Confirmed human decisions are retained when AI suggestions are generated again.",
    evidenceLabel: 'EVIDENCE TRACEABILITY', evidenceTitle: "Trace a finding back to the source",
    evidenceIntro: "InsightLoop keeps the levels of analysis linked. Analysts can follow the original text through Codes, Themes, and Findings, or work backward from a Finding to check the specific evidence.",
    exampleLabel: 'ONE COMPLETE EVIDENCE CHAIN', exampleDisclosure: "Fictional demo material, not actual research data or a validated finding",
    exampleRecord: "“The platform later posted an explanation and said it would adjust the features, but I still worry that my work could be used for training. I used to post without thinking much about it. Now I first consider whether to post at all and where to share it, so I’m much more cautious about posting.”", exampleSegment: "“I still worry that my work could be used for training … so I’m much more cautious about posting.”",
    exampleCode: "Platform response failed to restore trust", exampleTheme: "Platform responses and persistent distrust", exampleFinding: "A platform’s response may not restore creators’ trust. Ongoing uncertainty can change how they post and participate.",
    synthesisTitle: "Complete the review before generating a summary.", synthesisBody: "The summary uses reviewed Themes, Findings, and linked evidence, so analysts can check the basis for the final conclusions.", reviewed: 'Human reviewed',
    walkthroughKicker: 'THE FINAL EXPERIENCE', walkthroughTitle: "From source material\nto analysis conclusions",
    walkthroughIntro: "These screens show how material is reviewed and coded, then organized into Themes, Findings, and a summary. All screenshots use demo data and Mock AI from the frozen prototype.",
    flowImport: 'Import', flowReview: 'Evidence review', flowCoding: 'Coding', flowSynthesis: "Summary",
    gallery2Title: "Check segments against the original text.", gallery5Title: "Group related codes into themes.", gallery6Title: "Check the evidence behind a finding.", gallery7Title: "Generate a summary after review.",
    shot1Caption: "Project setup and onboarding: the analysis workflow from Text Records to Findings.",
    shot2Caption: "Review Analysis Segments against Text Records to confirm the specific material used for coding.",
    shot3Caption: 'Coding and reassessment detail: AI makes suggestions; the analyst checks the evidence and accepts, adjusts, or rejects them.',
    shot4Caption: "Batch → Deep: add selected Analysis Segments to the close-review queue, keeping their original context.",
    shot5Caption: "Check linked evidence to decide whether a grouping of codes makes sense before confirming a Theme.",
    shot6Caption: "Evidence trace in Findings: follow Themes, Codes, and Analysis Segments back to Text Records.",
    shot7Caption: "Build the summary from reviewed Themes, Findings, and evidence, with links to the earlier analysis.",
    shot1Alt: "Project setup and onboarding: the analysis workflow from Text Records to Findings.", shot2Alt: 'Evidence Review linking original text records to analysis segments',
    shot3Alt: "Coding detail showing AI suggestions, reassessment, and human confirmation", shot4Alt: "Batch-to-Deep review queue and the current Analysis Segment",
    shot5Alt: "Themes interface showing linked Codes, evidence counts, and review status", shot6Alt: "Evidence trace in Findings linking Themes, Codes, and Analysis Segments to Text Records",
    shot7Alt: "Summary based on reviewed Themes, Findings, and evidence",
    outcomeKicker: 'OUTCOME & REFLECTION', outcomeTitle: "What I changed and learned",
    outcomeIntro: "The project shifted from adding automation to helping analysts review evidence and make decisions. The final prototype separates material organization, AI suggestions, and human confirmation into steps that can be checked.",
    outcomeTag: "Product / User / AI Operations",
    takeaway1: "Start with the analyst’s task", takeaway1Body: "Break “summarize the material” into organizing evidence, keeping context, and confirming interpretations.",
    takeaway2: "Define human and AI responsibilities", takeaway2Body: "Use different analysis paths, review steps, and statuses to show where AI assists and where a person needs to confirm the result.",
    takeaway3: "Turn walkthrough issues into specific changes", takeaway3Body: "Address observed problems in the interface and workflow rules, then check those changes through QA.",
    reflectionLabel: 'STILL TO VALIDATE', reflectionBody: 'The burden of working with more complex material, and the consistency of AI suggestions in real research workflows. This project has not undergone large-scale user validation or live AI quality evaluation.',
    footerNote: 'Independent portfolio project · AI-assisted qualitative analysis prototype', backTop: 'Back to top', close: 'Close', closeDialog: 'Close screenshot',
    dialogNote: 'Demo data / Mock AI · Scroll or drag to view the full screenshot',
    dialogNoteFits: 'Demo data / Mock AI · The full screenshot is visible',
    imageArea: 'Screenshot: scroll or drag to explore'
  };
  const chinese = {};
  document.querySelectorAll('[data-i18n]').forEach(el => { chinese[el.dataset.i18n] = el.textContent; });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => { chinese[el.dataset.i18nAlt] = el.alt; });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { chinese[el.dataset.i18nAria] = el.getAttribute('aria-label'); });
  chinese.shot1Caption = '创建项目与流程引导：从文本记录到发现的分析流程。';
  chinese.dialogNote = '演示数据 / Mock AI · 滚动或拖动查看完整截图';
  chinese.dialogNoteFits = '演示数据 / Mock AI · 已显示完整截图';
  chinese.imageArea = '截图，可滚动或拖动查看';
  let language = 'zh';
  let activeTrigger = null;
  const dialog = document.getElementById('image-dialog');
  const dialogImage = document.getElementById('dialog-image');
  const dialogCaption = document.getElementById('dialog-caption');
  const closeButton = document.getElementById('close-dialog');
  const imageViewport = document.querySelector('.dialog-image-wrap');
  const dialogNote = document.querySelector('.dialog-note');
  imageViewport.tabIndex = 0;
  let drag = null;
  function words() { return language === 'en' ? english : chinese; }
  function updateViewerNote() {
    if (!dialog.open) return;
    const overflows = imageViewport.scrollHeight > imageViewport.clientHeight + 1 ||
      imageViewport.scrollWidth > imageViewport.clientWidth + 1;
    dialogNote.textContent = words()[overflows ? 'dialogNote' : 'dialogNoteFits'];
  }
  function refreshImage(reset = false) {
    if (!dialogImage.naturalWidth) return;
    imageViewport.style.setProperty('--image-natural-width', `${dialogImage.naturalWidth}px`);
    if (reset) imageViewport.scrollTo(0, 0);
    requestAnimationFrame(updateViewerNote);
  }
  dialogImage.addEventListener('load', () => refreshImage(true));
  new ResizeObserver(updateViewerNote).observe(imageViewport);
  function stopDrag() {
    if (!drag) return;
    const id = drag.id;
    drag = null;
    imageViewport.classList.remove('is-dragging');
    if (imageViewport.hasPointerCapture(id)) imageViewport.releasePointerCapture(id);
  }
  imageViewport.addEventListener('dragstart', event => event.preventDefault());
  imageViewport.addEventListener('pointerdown', event => {
    // Touch uses native scrolling and momentum; mouse/pen can pan the same viewport.
    if (event.pointerType === 'touch' || event.button !== 0) return;
    if (imageViewport.scrollWidth <= imageViewport.clientWidth &&
        imageViewport.scrollHeight <= imageViewport.clientHeight) return;
    const rect = imageViewport.getBoundingClientRect();
    // Preserve the browser's native scrollbar interaction.
    if (event.clientX >= rect.left + imageViewport.clientLeft + imageViewport.clientWidth ||
        event.clientY >= rect.top + imageViewport.clientTop + imageViewport.clientHeight) return;
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY,
      left: imageViewport.scrollLeft, top: imageViewport.scrollTop };
    imageViewport.setPointerCapture(event.pointerId);
    imageViewport.classList.add('is-dragging');
    imageViewport.focus({ preventScroll: true });
    event.preventDefault();
  });
  imageViewport.addEventListener('pointermove', event => {
    if (!drag || drag.id !== event.pointerId) return;
    imageViewport.scrollLeft = drag.left + drag.x - event.clientX;
    imageViewport.scrollTop = drag.top + drag.y - event.clientY;
  });
  imageViewport.addEventListener('pointerup', stopDrag);
  imageViewport.addEventListener('pointercancel', stopDrag);
  imageViewport.addEventListener('lostpointercapture', stopDrag);
  imageViewport.addEventListener('keydown', event => {
    if (event.key !== 'Home' && event.key !== 'End') return;
    imageViewport.scrollTo(imageViewport.scrollLeft, event.key === 'Home' ? 0 : imageViewport.scrollHeight);
    event.preventDefault();
  });
  function updateDialog() {
    if (!activeTrigger) return;
    const source = activeTrigger.querySelector('img');
    dialogImage.alt = source.alt;
    imageViewport.setAttribute('aria-label', words().imageArea);
    dialogCaption.textContent = words()[activeTrigger.dataset.caption] || source.alt;
    updateViewerNote();
  }
  function setLanguage(next) {
    language = next === 'en' ? 'en' : 'zh';
    const dictionary = words();
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    document.title = language === 'en' ? 'InsightLoop — Evidence-linked qualitative analysis' : 'InsightLoop — 让分析结论有据可查';
    document.querySelector('meta[name="description"]').content = language === 'en'
      ? 'An independent InsightLoop case study: designing an AI-assisted qualitative analysis prototype around human judgment, evidence traceability, and iterative workflow design.'
      : 'InsightLoop 独立项目案例：通过场景试用调整定性分析流程，保留人工复核与从原始材料到最终发现的证据关联。';
    document.querySelectorAll('[data-i18n]').forEach(el => { if (dictionary[el.dataset.i18n] !== undefined) el.textContent = dictionary[el.dataset.i18n]; });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.alt = dictionary[el.dataset.i18nAlt]; });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', dictionary[el.dataset.i18nAria]); });
    document.querySelectorAll('[data-lang]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.lang === language)));
    document.querySelector('nav').setAttribute('aria-label', language === 'en' ? 'Main navigation' : '主导航');
    document.querySelector('.language-switch').setAttribute('aria-label', language === 'en' ? 'Language' : '语言');
    dialog.setAttribute('aria-label', language === 'en' ? 'Screenshot preview' : '截图预览');
    updateDialog();
    try { localStorage.setItem('insightloop-language', language); } catch (_) {}
  }
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  document.querySelectorAll('[data-lightbox]').forEach(button => button.addEventListener('click', () => {
    activeTrigger = button;
    const source = button.querySelector('img');
    imageViewport.style.setProperty('--image-natural-width', `${source.naturalWidth || source.width}px`);
    dialogImage.src = source.currentSrc || source.src;
    updateDialog();
    dialog.showModal();
    imageViewport.scrollTo(0, 0);
    if (dialogImage.complete) refreshImage(true);
    document.body.classList.add('dialog-open');
    closeButton.focus({ preventScroll: true });
  }));
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    stopDrag();
    document.body.classList.remove('dialog-open');
    if (activeTrigger) activeTrigger.focus({ preventScroll: true });
  });
  let savedLanguage;
  try { savedLanguage = localStorage.getItem('insightloop-language'); } catch (_) {}
  const requestedLanguage = new URLSearchParams(location.search).get('lang');
  setLanguage(requestedLanguage === 'en' || requestedLanguage === 'zh' ? requestedLanguage : savedLanguage === 'en' ? 'en' : 'zh');
})();
