import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as ee,Q as te,R as ne,S as g,T as _,U as re,V as v,W as ie,X as ae,Y as oe,Z as se,_ as ce,_t as le,a as ue,at as y,b,bt as de,c as fe,ct as pe,d as me,dt as he,et as ge,f as _e,ft as ve,g as x,gt as ye,h as S,ht as be,i as xe,it as Se,j as C,k as Ce,l as we,lt as Te,m as w,mt as Ee,n as De,nt as Oe,o as ke,ot as Ae,p as je,pt as Me,q as Ne,r as Pe,rt as Fe,s as Ie,st as Le,t as Re,tt as ze,u as Be,ut as Ve,v as T,vt as He,w as Ue,x as We,xt as Ge,y as Ke,yt as qe,z as Je}from"./index-DwoEcKOp.js";function Ye(e){let t=e.toLowerCase();return[`spanish`,`espanol`,`español`,`portuguese`,`português`].some(e=>t.includes(e))?`dictionary form — verbs as infinitive (e.g. "hablar"/"falar"), nouns with definite article (e.g. "el libro"/"o livro", "la casa"/"a casa"), adjectives in masculine singular (e.g. "alto")`:[`italian`,`italiano`].some(e=>t.includes(e))?`dictionary form — verbs as infinitive (e.g. "parlare"), nouns with definite article (e.g. "il gatto", "la porta"), adjectives in masculine singular (e.g. "bello")`:[`french`,`français`,`francais`].some(e=>t.includes(e))?`dictionary form — verbs as infinitive (e.g. "parler"), nouns with definite article (e.g. "le livre", "la maison"), adjectives in masculine singular (e.g. "grand")`:[`german`,`deutsch`].some(e=>t.includes(e))?`dictionary form — verbs as infinitive (e.g. "sprechen"), nouns with definite article and capitalized (e.g. "der Hund", "die Katze", "das Haus")`:[`japanese`,`日本語`].some(e=>t.includes(e))?`dictionary form — verbs in plain form (e.g. "話す"), nouns as-is (e.g. "本"), i-adjectives in plain form (e.g. "高い")`:[`chinese`,`中文`,`普通话`].some(e=>t.includes(e))?`the word in its standard simplified Chinese form, no conjugation needed`:[`korean`,`한국어`].some(e=>t.includes(e))?`dictionary form — verbs/adjectives ending in 다 (e.g. "먹다", "예쁘다"), nouns as-is`:`dictionary/infinitive form — verbs as base infinitive (e.g. "run", not "ran"), nouns in singular (e.g. "book"), adjectives in base form (e.g. "good")`}function Xe(e,t){return/japanese|日本語/i.test(e)?[`- "reading": hiragana reading of ${t} (e.g. "たべる")\n`,`, "reading": "..."`]:[``,``]}var Ze=[`grammar`,`natural`,`explanation`];function Qe(e,t,n,r){return`You are a ${t} language tutor for CEFR ${n} learners.
The user wants to express something in ${t}.

Instructions:
- Detect the language of the input text.
- If the input IS already in ${t}:
  - "grammar": fix ONLY grammar and spelling mistakes. Do not change the wording, word choice or style; leave what is correct exactly as it is.
  - "natural": the same message said more naturally, the way a native speaker would, at CEFR ${n} level.
- If the input is in ANY OTHER language:
  - "grammar": a faithful translation into ${t}, close to the original wording.
  - "natural": a natural ${t} way to say it at CEFR ${n} level.
- Both must always be in ${t}. When the text needs no change, both equal the input.

Return ONLY valid JSON (no markdown, no extra text):
{ "grammar": "...", "natural": "...", "explanation": "..." }

- "explanation": brief explanation in ${r} — if translated, say which language was detected; list the grammar fixes, then what makes the natural version more natural; if nothing changed, say "no change"

Text:
<text>${e}</text>`}function $e(e,t,n,r,i=[],a=[]){let o=Ye(t),s=Xe(t,`the BASE FORM`);return`You are a meticulous language tutor. Analyze the following ${t} text for a CEFR ${n} learner.
IMPORTANT: Analyze the ENTIRE text. Identify AT LEAST 30 items if the text is long enough.
Study only the story: narration and dialogue. Skip status windows, stat blocks, trackers, UI panels,
time/location headers and other metadata, however they are formatted.

Task 1: Words/verbs/adjectives/phrases harder than or equal to ${n}.
- "word": exact word/phrase as it appears in text
- "base_form": ${o}
- "pos_info": tense/gender/number/form info in ${r}
- "meaning": dictionary meaning of the BASE FORM in ${r}
- "context_meaning": meaning of THIS SPECIFIC WORD as used in this sentence in ${r}
- "level": A1-C2
${(i.length?`- Do not list these names or words; they are not vocabulary: ${i.join(`, `)}\n`:``)+(a.length?`- The learner already knows these words; do not list them: ${a.join(`, `)}\n`:``)}${s[0]}
Task 2: Key grammar patterns.
- "pattern": exact substring
- "meaning": meaning in ${r}
- "structure": grammar rule explanation in ${r}
- "words_used": breakdown

Task 3: Idioms, fixed expressions, and notable collocations.
Identify multi-word expressions that a learner should memorise as a whole unit.
- "phrase": exact phrase as it appears in text (2+ words)
- "base_form": canonical/dictionary form of the phrase
- "meaning": meaning of the whole expression in ${r}
- "context_meaning": how it is used in this specific context in ${r}
Include: idioms (e.g. "estar en las nubes"), verb+preposition units (e.g. "depender de"),
         fixed collocations (e.g. "hacer una pregunta"), and discourse markers.
Exclude single words already covered in Task 1.

Return ONLY:
{
  "hard_words": [{ "word":"","base_form":"","pos_info":"","meaning":"","context_meaning":"","level":""${s[1]} }],
  "grammar_patterns": [{ "pattern":"","meaning":"","structure":"","words_used":"" }],
  "idioms": [{ "phrase":"","base_form":"","meaning":"","context_meaning":"" }]
}
Text:
<text>${e}</text>`}function et(e,t,n,r,i=5){return`You are an expert ${t} language tutor creating a diagnostic quiz for a CEFR ${n} learner.
Create exactly ${i} multiple-choice questions based ONLY on the text below.
${i<=5?`Cover ALL of these types (one each):
  1. "vocab"   — word meaning or synonym/antonym
  2. "verb"    — conjugation, tense, mood, or verb form
  3. "grammar" — preposition, article, agreement, connective, or word order
  4. "idiom"   — fixed expression, collocation, or idiomatic usage
  5. "reading" — comprehension: what does a specific sentence/phrase mean in context?`:`Distribute questions across these types:
  - "vocab"   — word meaning, synonym/antonym (≈4 questions)
  - "verb"    — conjugation, tense, mood, aspect, irregular forms (≈5 questions)
  - "grammar" — preposition, article, agreement, word order, connectives (≈5 questions)
  - "idiom"   — fixed expression, collocation, idiomatic usage (≈3 questions)
  - "reading" — comprehension: meaning of a phrase/sentence in context (≈3 questions)`}

Rules:
- Each question MUST reference actual words or sentences from the text.
- Use only the story (narration and dialogue), never status windows, stats or other metadata.
- Distractors must be plausible but clearly wrong.
- question: ask in ${r}.
- explanation: explain WHY the answer is correct and why the others are wrong (${r}, 2-3 sentences).

Return ONLY:
{
  "questions": [
    {
      "type": "vocab|verb|grammar|idiom|reading",
      "question": "...",
      "options": ["A", "B", "C", "D"],
      "answer": "correct answer text (must match one option exactly)",
      "explanation": "..."
    }
  ]
}

Text:
<text>${e}</text>`}var tt=e=>e.map(e=>`- ${e.word}${e.meaning?` (${e.meaning})`:``}`).join(`
`);function nt(e,t,n,r=[]){return`You are an expert ${e} language tutor. ${r.length?`Create exactly ${r.length} fill-in-the-blank questions for a CEFR ${t} learner whose native language is ${n}, one on each of these ${e} words or expressions the learner is studying (the meaning in parentheses is only a guide):
${tt(r)}
Each blank is filled by that word, in the form the sentence needs (conjugated, agreed, inflected). The distractors are other words or forms that a learner could confuse with it.
- "word": the word from the list exactly as written there.
- "type": "vocab", "verb", "preposition" or "idiom", whichever fits the word.`:`Create exactly 20 fill-in-the-blank questions for a CEFR ${t} learner whose native language is ${n}.
Focus EXCLUSIVELY on these three categories (distribute evenly, ~7 each):
  1. "preposition" — choosing the correct preposition or prepositional phrase
  2. "verb"        — correct conjugation/tense/mood/aspect of a given verb
  3. "idiom"       — completing a fixed expression or collocation
- "word": leave empty.`}

Each question presents a natural ${e} sentence with one blank (___), and four options.
Pitch difficulty precisely at CEFR ${t}. Do NOT base questions on any specific text.

Rules:
- question: the ${e} sentence with ___ for the blank.
  Add a brief ${n} hint in parentheses when helpful (e.g. "(infinitive: essere)").
- options: four choices in ${e}. Distractors must be plausible but clearly wrong.
- answer: must match one option exactly.
- explanation: grammar rule or word use explained in ${n}, 2 sentences.

Return ONLY valid JSON:
{
  "questions": [
    {
      "type": "vocab|verb|preposition|idiom",
      "word": "",
      "question": "${e} sentence with ___",
      "options": ["A", "B", "C", "D"],
      "answer": "correct option text",
      "explanation": "..."
    }
  ]
}`}function rt(e,t,n){return`You are an expert ${e} language examiner. Create a half-length mock reading exam for a CEFR ${t} learner whose native language is ${n}.

The exam must contain exactly 25 questions in two sections:

SECTION A — Vocabulary & Grammar (10 questions, type: "grammar" or "vocab")
  - Sentence-completion and error-correction items at CEFR ${t} difficulty.
  - Each item is a standalone sentence. Set "passage" to null for all Section A items.

SECTION B — Reading Comprehension (15 questions, type: "reading")
  - Write ONE original ${e} reading passage of 180-220 words at CEFR ${t} level.
  - Set "passage" to this text on EVERY Section B question (same string, repeated).
  - Questions test: main idea, specific detail, vocabulary in context, inference, author attitude.

All questions must be original — do NOT copy from real exams.
Pitch difficulty precisely at CEFR ${t}: not easier, not harder.

Rules:
- question: write in ${n} but keep ${e} quotes/terms as-is.
- options: four choices. Section B options may be full sentences in ${n}.
- answer: must match one option exactly.
- explanation: ${n}, 2 sentences explaining why the answer is correct.

Return ONLY valid JSON:
{
  "questions": [
    {
      "type": "grammar|vocab|reading",
      "passage": null,
      "question": "...",
      "options": ["A", "B", "C", "D"],
      "answer": "correct option text",
      "explanation": "..."
    }
  ]
}

For Section B questions set "passage" to the reading text. For Section A set "passage" to null.`}var it=e=>[`word`,`base_form`,`pos_info`,`meaning`,`context_meaning`,`level`,.../japanese|日本語/i.test(e)?[`reading`]:[]];function at(e,t,n,r,i){let a=Ye(n),o=Xe(n,`the BASE FORM`);return`You are a language tutor for ${n} learners at CEFR level ${r}.
Analyze: "${e}"
${t?`Context: "${t}"`:``}
- "word": the word as given
- "base_form": ${a}
- "pos_info": tense/gender/number info in ${i}
- "meaning": dictionary meaning of the BASE FORM in ${i}
- "context_meaning": meaning of this word in the given context in ${i}. If no context, same as meaning.
- "level": A1|A2|B1|B2|C1|C2
${o[0]}- "word_family": array of up to 3 closely related forms from the same root/family.
  Each item: { "form": "...", "pos": "<one of: verb|noun|adj|adv|phrase>", "meaning": "<1-3 words in ${i}>" }
  Examples: for "bellezza" (noun) → [{"form":"bello","pos":"adj","meaning":"beautiful"},{"form":"abbellire","pos":"verb","meaning":"to beautify"}]
  Empty array [] if the word has no notable family members or is already a base form with no derivatives.
Return ONLY:
{
  "word": "...",
  "base_form": "...",
  "pos_info": "...",
  "meaning": "...",
  "context_meaning": "...",
  "level": "A1|A2|B1|B2|C1|C2"${o[1]},
  "word_family": [{ "form": "...", "pos": "...", "meaning": "..." }]
}`}function ot(e,t,n){let r=Xe(t,`the base form`);return`You are a ${t}-to-${n} translation assistant.
Translate the following ${t} sentence for a ${n} learner.

Rules:
- "translation": natural ${n} translation of the ENTIRE sentence
- "literal": more literal, word-by-word ${n} rendering that preserves the original word order as much as possible
- "key_verbs": array of the main verbs/phrases worth noting — each with:
    "form": exact form in the sentence
    "base": dictionary/infinitive form
    "meaning": ${n} meaning of the BASE form (1-3 words)
    "level": CEFR level of the BASE form ("A1","A2","B1","B2","C1","C2")
    ${r[0]}  Maximum 3 items. Empty array [] if none notable.

Return ONLY valid JSON:
{
  "translation": "...",
  "literal": "...",
  "key_verbs": [{ "form": "...", "base": "...", "meaning": "...", "level": "..."${r[1]} }]
}

Sentence: "${e}"`}function st(e,t,n){return`You are a ${t} grammar expert.
Generate a conjugation table for the ${t} verb: "${e}"

Rules:
- "base": the dictionary/infinitive form
- "translation": meaning of the verb in ${n} (1–3 words)
- "tenses": exactly 3 tenses — choose the 3 MOST IMPORTANT/COMMON tenses for ${t} learners
  (e.g. for Italian: Presente / Passato Prossimo / Imperfetto;
        for Spanish: Presente / Pretérito Indefinido / Imperfecto;
        for French: Présent / Passé Composé / Imparfait;
        for German: Präsens / Perfekt / Präteritum;
        for Japanese: 辞書形/ます形/て形 — use 6 rows labeled 肯定/否定/丁寧肯定/丁寧否定/て形/た形;
        for English: Present Simple / Past Simple / Future (will))
- Each tense has "name" (original language name), "name_native" (label in ${n}), and "rows"
- "rows": exactly 6 items with "person" label and "form" (the conjugated form)

Return ONLY valid JSON — no preamble, no fences:
{
  "base": "...",
  "translation": "...",
  "tenses": [
    {
      "name": "...",
      "name_native": "...",
      "rows": [
        { "person": "...", "form": "..." },
        { "person": "...", "form": "..." },
        { "person": "...", "form": "..." },
        { "person": "...", "form": "..." },
        { "person": "...", "form": "..." },
        { "person": "...", "form": "..." }
      ]
    }
  ]
}`}var ct=[`sentence`,`translation`,`form`];function lt(e,t,n,r){return`Create a short example sentence in ${t} for a CEFR ${n} learner using the word "${e}".

Rules:
- "sentence": one clear, natural ${t} sentence (max 12 words) showing typical usage
- "translation": natural ${r} translation of that sentence
- "form": the word exactly as written in the sentence (inflected or conjugated if it is)
- Difficulty should match CEFR ${n}

Return ONLY valid JSON (no markdown, no extra text):
{ "sentence": "...", "translation": "...", "form": "..." }`}function ut(e,t,n){return`You are an expert ${t} grammar tutor. Perform a deep syntactic and dependency analysis of the following ${t} sentence for a language learner whose native language is ${n}.

Sentence: "${e}"

Return ONLY valid JSON — no preamble, no markdown fences:
{
  "sentence": "...",
  "tokens": [
    {
      "text": "exact word or clitic as it appears",
      "role": "<role — see allowed values below>",
      "label": "<role name in ${n}, e.g. 주어/Subject/Soggetto/Sujeto>",
      "note": "<optional: tense/mood/case/agreement or WHY this form is used — ${n}, ≤20 words>",
      "head_idx": <0-based index of the token this token depends on; -1 for the root verb>,
      "dep_label": "<dependency relation in ${n}, e.g. 수식/목적/주어/보조/전치>"
    }
  ],
  "grammar": [
    {
      "point": "<grammar feature name in ${t}>",
      "explanation": "<why it appears here and what triggers it — ${n}, 1-2 sentences>"
    }
  ],
  "summary": "<one sentence in ${n}: what makes this sentence structurally interesting for a learner>"
}

─── TOKEN RULES ───────────────────────────────────────────────────────────────
1. Cover EVERY surface token in order — do NOT skip articles, particles, clitics, or punctuation.
2. "role" must be exactly one of:
   subject | verb | auxiliary | object | complement | modifier | conjunction |
   particle | article | preposition | pronoun | punctuation | other
3. Language-specific guidance:
   • Romance (Italian/Spanish/French/Portuguese):
     - Pronominal clitics attached to a verb (e.g. "glielo", "se lo") → each clitic is its own token.
     - Contracted preposition+article (del, al, nel…) → one token, role "preposition".
     - Subjunctive/congiuntivo: note the trigger verb/conjunction in "note".
     - Compound tenses: auxiliary (essere/avoir/ser/haber) gets role "auxiliary", past participle gets role "verb".
   • German/Dutch:
     - Separable verb prefix in split position → own token, head_idx points to the base verb.
     - Dative/accusative case on articles and adjectives → note the case in "note".
   • Japanese/Korean:
     - Every postpositional particle (は/が/を/에/을…) → role "particle", head_idx points to the noun it marks.
   • Arabic/Hebrew (RTL):
     - Treat tokens left-to-right by logical order (index 0 = first word in reading order).
   • Any language with agreement (gender/number/person): flag mismatches or notable patterns in "note".
4. head_idx: the ROOT verb's head_idx is -1. Every other token points to the token it most directly depends on.
   Modifiers point to the noun they modify. Objects/subjects point to the verb. Auxiliaries point to the main verb.
5. dep_label: use a short ${n} word. Examples: 수식(modify)/보조(auxiliary)/주어(subject)/목적(object)/전치(preposition)/접속(conjunction)/서술(predicate).

─── GRAMMAR RULES ─────────────────────────────────────────────────────────────
- Include 1–3 entries. Prioritise features that are genuinely tricky for learners.
- Always flag (when present): subjunctive/mood triggers, compound/perfect tenses,
  pronoun placement or agreement, word-order inversions, case marking, particle choice,
  aspect/tense distinctions, politeness level (Japanese/Korean).
- "point": name the feature in ${t} (not in ${n}).
- "explanation": concrete, learner-focused, written in ${n}.`}var dt=e=>`- "meaning": ONLY for words marked [needs meaning] — the dictionary meaning of the base form in ${e}, short (1–6 words). Otherwise "".
- "level": ONLY for words marked [needs level] — CEFR level A1|A2|B1|B2|C1|C2. Otherwise "".`,ft=e=>`${e.needsMeaning?` [needs meaning]`:``}${e.needsLevel?` [needs level]`:``}`;function pt(e,t,n){return`You are a precise ${t} linguistics assistant.
Analyse the following ${t} words for a language learner.

${e.map((e,t)=>`${t+1}. word: "${e.word}", base_form: "${e.base_form}"${ft(e)}`).join(`
`)}

Return ONLY a valid JSON array — no preamble, no markdown fences.
One object per word, in the same order, each with these fields:
{
  "word": "<surface form as given>",
  "base_form_verified": "...",
  "pos": "...",
  "pos_label": "...",
  "ipa": "...",
  "collocations": ["...", "..."],
  "meaning": "",
  "level": ""
}

Field rules (apply to EVERY word):
- "word": copy the surface form exactly as provided.
- "base_form_verified": correct dictionary/infinitive form.
    If stored base_form is already correct, return it unchanged.
    Use the format standard for ${t}
    (e.g. Italian nouns with article: "il gatto"; verbs as infinitive: "parlare").
- "pos": EXACTLY one of: verb | noun | adj | adv | phrase | particle | conj | prep | num | interj | article
    For idioms or fixed expressions use "phrase".
- "pos_label": short ${n} label for POS (e.g. "verbo" for Spanish, "동사" for Korean). 1–2 words max.
- "ipa": IPA pronunciation string.
    • English, French, German — always provide IPA.
    • Italian, Spanish, Portuguese — return "".
    • Japanese — return hiragana reading (e.g. "はなす").
    • Korean — return "".
    • Chinese — return pinyin with tones (e.g. "shuō huà").
    • Other — provide IPA only if pronunciation is irregular, else "".
- "collocations": up to 4 short usage patterns or key collocations that help a learner use the word correctly.
    Examples for a verb: ["dipendere da qc/qn", "non dipende da me — 나에게 달려있지 않다"]
    Examples for a noun: ["fare una domanda", "rispondere a una domanda"]
    If there are no notable collocations, return [].
    Each string: max 40 characters. ${n} glosses allowed after " — ".
${dt(n)}`}function mt(e,t,n,r,i={}){return`You are a precise ${n} linguistics assistant.
Analyse the following ${n} word for a language learner.

Word (surface form): "${e}"${ft(i)}
Stored base form: "${t}"

Return ONLY valid JSON — no preamble, no markdown fences:
{
  "base_form_verified": "...",
  "pos": "...",
  "pos_label": "...",
  "ipa": "...",
  "collocations": ["...", "..."],
  "meaning": "",
  "level": ""
}

Field rules:
- "base_form_verified": correct dictionary/infinitive form.
    If the stored base_form is already correct, return it unchanged.
    Use the same format as baseFormRule for ${n}
    (e.g. Italian nouns with article: "il gatto"; verbs as infinitive: "parlare").
- "pos": EXACTLY one of these tags (no other values allowed):
    verb | noun | adj | adv | phrase | particle | conj | prep | num | interj | article
    For idioms or fixed expressions: use "phrase".
- "pos_label": short ${r} label for the POS (e.g. "verbo", "sustantivo" for Spanish; "동사", "명사" for Korean;
    "verbo", "sostantivo" for Italian). 1–2 words maximum.
- "ipa": IPA pronunciation string (e.g. "/ˈpɑːrlər/").
    Rules by language:
    • English — always provide IPA (pronunciation is irregular).
    • French  — always provide IPA.
    • German  — provide IPA.
    • Italian, Spanish, Portuguese — omit (spelling is phonetic); return "".
    • Japanese — return the reading in hiragana instead of IPA (e.g. "はなす").
    • Korean   — return "" (pronunciation follows spelling rules).
    • Chinese  — return pinyin with tones (e.g. "shuō huà").
    • Other languages — provide IPA if pronunciation is irregular; otherwise "".
- "collocations": array of up to 4 short usage patterns or key collocations
    that help a learner use this word correctly.
    Examples for a verb: ["dipendere da qc/qn", "non dipende da me"]
    Examples for a noun: ["fare una domanda", "rispondere a una domanda"]
    Examples for an adjective: ["essere + ${e}", "${e} + noun (agreement)"]
    If there are no notable collocations, return [].
    Each string: max 40 characters. ${r} glosses allowed after " — ".
${dt(r)}`}function ht(e,t,n,r,i=10){let a=e.filter(e=>e.table).map(e=>`${e.word}: ${JSON.stringify(e.table)}`).join(`
`);return`You are a ${t} grammar drill coach.
Generate exactly ${i} multiple-choice questions testing the learner's knowledge of verb forms, at CEFR ${n}.
${e.length?`Use these ${t} verbs the learner is studying, spreading the questions over all of them: ${e.map(e=>e.word).join(`, `)}.
${a&&`Conjugation tables the learner has opened (use their forms and person labels):\n${a}\n`}- "word": the verb (as listed) the question tests.`:`Choose 3 to 5 verbs a CEFR ${n} learner of ${t} needs (common regular and irregular ones), spreading the questions over them.
- "word": the infinitive of the verb the question tests.`}

Rules:
- Each question asks for the correct conjugated form given a person + tense.
- "question": e.g. "parlare — io / Presente → ?" — name the verb, the person and the tense.
- "options": 4 choices — 1 correct form + 3 plausible distractors (other persons or tenses of the same verb).
- "answer": the exact correct form string.
- "explanation": one sentence in ${r} explaining the form or any irregularity.
- "type": always "verb".
- Vary the tenses and persons — do NOT repeat the same cell twice.

Return ONLY valid JSON — no preamble, no fences:
{
  "questions": [
    { "type": "verb", "word": "...", "question": "...", "options": ["...","...","...","..."], "answer": "...", "explanation": "..." }
  ]
}`}function gt(e,t,n){return`You are a ${t} language tutor creating a targeted remedial exam.
The learner previously got these questions WRONG:

${e.map((e,t)=>`${t+1}. [type: ${e.type}] Q: "${e.question}" | Correct answer: "${e.answer}" | Rule: "${e.explanation}"`).join(`
`)}

For each wrong answer, generate 2 NEW questions targeting the SAME linguistic weakness:
- For "vocab" type: use the same word in a different example sentence (fill-in-the-blank or meaning).
- For "verb" type: test the same verb form or tense pattern with a different verb or person.
- For "grammar" type: test the same grammar rule (agreement, preposition, article, word order) in a new context.
- For "idiom" type: test the same fixed expression or a closely related collocation.
- For "reading" type: create a new short passage testing the same comprehension skill.

Rules:
- Total questions: exactly ${e.length*2}.
- "type": same as the source wrong answer.
- "options": 4 choices — 1 correct + 3 plausible distractors.
- "explanation": 1–2 sentences in ${n} explaining the rule tested.
- Do NOT reuse the exact original question text.

Return ONLY valid JSON — no preamble, no fences:
{
  "questions": [
    { "type": "...", "question": "...", "options": ["...","...","...","..."], "answer": "...", "explanation": "..." }
  ]
}`}function _t(e){return`You add furigana to Japanese text. For each passage, list EVERY word that contains kanji, in the order the words appear.

Rules:
- Write each word as surface=reading, separated by single spaces, all in one string.
- surface: the word exactly as written, with its okurigana (食べた, 取り扱い, 対する, 分かり).
- reading: hiragana for the whole surface, as read IN THIS CONTEXT (今日=きょう or 今日=こんにち).
- Repeat a word each time it appears. Skip words without kanji. Names: most likely reading.
- Every kanji must be inside some surface — none may be left out.

Return ONLY:
{ "passages": [ { "i": 0, "words": "暗闇=くらやみ 中=なか 放たれる=はなたれる" } ] }

${e.map(e=>`<passage i="${e.i}">${e.text}</passage>`).join(`
`)}`}var vt={letter:`a letter or email answering a concrete situation (an invitation, a complaint, a request, news to a friend…). Say who writes to whom and why; the register (formal or informal) follows from the situation.`,opinion:`a text giving and supporting an opinion on a topic (an article, a forum post, a review or an essay). At A1–A2 make it a simple text about the learner's own life, likes and plans instead.`,scene:`an in-story text based on the conversation below: a message, letter or diary entry the learner's character writes about what happened. Keep names and situations from the story.`};function yt(e,t,n,r,i,a=``){return`You are an examiner writing a ${t} writing task for a CEFR ${n} learner whose native language is ${r}.
Model it on the writing tasks standardised ${t} exams set at ${n}, without copying any real exam.

The task: ${vt[e]}
Length: ${i}.

Rules:
- "title": a short title in ${t}.
- "instructions": the task in ${t}, 2–4 sentences, at a level a ${n} learner reads easily.
- "points": 3–4 things the text must include, in ${t}.
- "register": "formal", "informal" or "neutral".
- "instructions_native": the instructions and points translated into ${r}, one short paragraph.
${a&&`\nThe conversation (use it only as the story):\n<conversation>\n${a}\n</conversation>\n`}
Return ONLY:
{ "title": "", "instructions": "", "points": ["", ""], "register": "", "instructions_native": "" }`}function bt(e,t,n,r,i,a){return`You are an experienced rater of ${n} writing exams. Rate this text by a CEFR ${r} learner whose native language is ${i}, as raters of standardised exams do.

Task: ${e.instructions}
Must include: ${e.points.join(` / `)||`—`}
Register: ${e.register}. Length asked: ${a}.

Score each criterion from 0 to 3 against what ${r} requires (3 = fully meets ${r}, 2 = mostly, 1 = partly, 0 = not at all):
- "task": the points are covered, the register and text type fit, the length is about right.
- "coherence": ideas are clear, ordered and linked with connectors fitting ${r}.
- "accuracy": grammar, vocabulary, spelling and punctuation are correct for ${r}.
- "range": variety and precision of vocabulary and structures expected at ${r}.

Rules:
- "level": the CEFR level the text actually shows (A1–C2).
- "summary": 2–3 sentences in ${i}: what works, what most needs work.
- "corrected": the whole text corrected, changing only what is wrong or clearly unnatural; keep the learner's ideas and style.
- "errors": each correction — "original" (the exact words from the text), "correction", "type" (grammar | vocabulary | spelling | punctuation | register | style), "explanation" (one sentence in ${i}).
- "model": a model answer to the same task in ${n} at ${r}, within the length asked.

Text:
<text>${t}</text>

Return ONLY:
{ "scores": { "task": 0, "coherence": 0, "accuracy": 0, "range": 0 }, "level": "", "summary": "",
  "corrected": "", "errors": [{ "original": "", "correction": "", "type": "", "explanation": "" }], "model": "" }`}function xt(e,t,n,r=10,i={grammar:[],words:[]}){let{grammar:a,words:o}=i;return`You are an expert ${e} tutor writing the grammar section of a ${e} exam for a CEFR ${t} learner whose native language is ${n}.
Create exactly ${r} fill-in-the-gap questions the learner answers by TYPING the missing form — like the grammar tasks standardised ${e} exams use at ${t}.

${a.length?`Build the questions on these grammar points the learner saved, and on grammar easily confused with them (a similar form, the contrasting mood or tense, a near-synonymous construction) — about half on the saved points, half on the confusable ones:
${a.map(e=>`- ${e.pattern}${e.meaning?` (${e.meaning})`:``}`).join(`
`)}`:`Cover the grammar these exams test at ${t}, spread over different points: verb forms (tense, mood, aspect, conjugation), agreement, prepositions or particles, articles or cases, pronouns, connectors, word formation — whichever matter in ${e} at ${t}.`}

Rules:
- "sentence": a natural ${e} sentence with exactly one gap written ___ (three underscores). The gap is one word or a short form (at most 3 words).
- "hint": in parentheses, what goes in the gap so only one form fits: the base word (e.g. "(venir)", "(食べる)", "(beautiful)") or the kind of word (e.g. "(preposition)").
- "answers": every correct fill, exactly as it would be written. For Japanese, include both the kanji and the kana spelling when both are common.
- "point": the grammar point in ${n}, 2–5 words.
- "explanation": why, in ${n}, one or two sentences.
- "word": the learner's word the sentence uses (from the list), or empty.
${o.length?`\nWhere natural, build the sentences with these words the learner is studying, and when a sentence uses one of them, give it in "word" exactly as listed:\n${tt(o)}\n`:``}
Return ONLY:
{ "questions": [{ "sentence": "", "hint": "", "answers": [""], "point": "", "explanation": "", "word": "" }] }`}var E={chat:`#chat`,mes:`.mes`,mesText:`.mes_text`,aiMes:`.mes[is_user="false"]`,extraMesButtons:`.extraMesButtons`,sendBtn:`#send_but`,sendTextarea:`#send_textarea`,extensionsMenu:`#extensionsMenu`,extensionsSettings:`#extensions_settings`};function St(){let e=window.$;e?e(E.extensionsMenu).hide():document.querySelector(E.extensionsMenu)?.setAttribute(`hidden`,``)}var Ct=e=>`${E.mes}[mesid="${CSS.escape(e)}"]`,D=e=>document.querySelector(`${Ct(e)} ${E.mesText}`),O=e=>e?.closest(E.mes)?.getAttribute(`mesid`)??null,wt=/[.!?。！？\n]/;function Tt(e,t,n=t){let r=Math.max(0,Math.min(t,e.length-1));for(;r>0&&!wt.test(e[r-1]);)r--;let i=Math.max(r,Math.min(n,e.length));for(;i<e.length&&!wt.test(e[i]);)i++;return e.slice(r,i<e.length?i+1:i).trim()}function Et(e){return(e instanceof Element?e:e?.parentElement??null)?.closest(E.mesText)??null}function Dt(e){let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return t>>>0}var Ot=/[\p{Script=Han}々〆ヵヶ]/u,kt=/[\p{Script=Han}々〆ヵヶ]+/gu,At=/^[ぁ-ゖァ-ヺー・]+$/,jt=e=>Ot.test(e),Mt=e=>At.test(e),Nt=e=>e.replace(/[ァ-ヶ]/g,e=>String.fromCharCode(e.charCodeAt(0)-96));function Pt(e,t){if(!t.startsWith(e[0]))return null;let n=e.length-1,r=[],i=new Set,a=(o,s)=>{let c=o*(t.length+1)+s;if(i.has(c))return!1;let l=e[o+1];for(let e=s+1;e+l.length<=t.length;e++){if(!t.startsWith(l,e))continue;let i=e+l.length;if(o+1===n?i===t.length:a(o+1,i))return r[o]=t.slice(s,e),!0}return i.add(c),!1};return a(0,e[0].length)?r:null}function Ft(e,t,{strict:n=!1}={}){let r=Nt(t.replace(/\s+/g,``)),i=[...e.matchAll(kt)].map(e=>({start:e.index,end:e.index+e[0].length}));if(!i.length||!r||!Mt(r))return[];let a=[],o=0;for(let t of i)a.push(Nt(e.slice(o,t.start))),o=t.end;a.push(Nt(e.slice(o)));let s=Pt(a,r);if(s)return i.map((e,t)=>[e.start,e.end,s[t]]);if(n)return[];let c=i[0].start,l=i[i.length-1].end,u=Nt(e.slice(0,c)),d=Nt(e.slice(l));return[[c,l,r.startsWith(u)&&r.endsWith(d)&&r.length>u.length+d.length?r.slice(u.length,r.length-d.length):r]]}function It(e,t,n=0,r=e.length){let i=[],a=n;for(let[n,o]of t){if(!n||!jt(n))continue;let t=e.indexOf(n,a);t===-1||t+n.length>r||(i.push(...Ft(n,o).map(([e,n,r])=>[t+e,t+n,r])),a=t+n.length)}return i}function Lt(e,t,n=0,r=e.length){let i=new Set;for(let[e,n]of t)for(let t=e;t<n;t++)i.add(t);let a=[];for(let t=n;t<r;t++){if(!Ot.test(e[t])||i.has(t))continue;let n=a[a.length-1];n&&n.end===t?n.end=t+1:a.push({start:t,end:t+1})}return a}function Rt(e){return Array.isArray(e)?e.filter(e=>Array.isArray(e)&&typeof e[0]==`string`&&typeof e[1]==`string`).map(([e,t])=>[e.trim(),t.trim()]):typeof e==`string`?e.split(/[\s,、]+/).flatMap(e=>{let[t,n]=e.split(/[=＝]/);return t&&n?[[t,n]]:[]}):[]}function zt(e,t=400){let n=typeof Intl.Segmenter==`function`?[...new Intl.Segmenter(`ja`,{granularity:`sentence`}).segment(e)].map(e=>({start:e.index,end:e.index+e.segment.length})):[...e.matchAll(/[^。！？!?\n]*[。！？!?\n]?/g)].filter(e=>e[0]).map(e=>({start:e.index,end:e.index+e[0].length})),r=[];for(let e of n){let n=r[r.length-1];n&&n.end===e.start&&e.end-n.start<=t?n.end=e.end:r.push({...e})}return r.filter(t=>jt(e.slice(t.start,t.end)))}function Bt(e){return Dt(e).toString(36)+e.length.toString(36)}var Vt=new Set([`SCRIPT`,`STYLE`,`RT`,`RP`]),Ht=`.pg-tap-bubble`;function Ut(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e instanceof Element&&(Vt.has(e.tagName)||e.matches(Ht))?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),n=[];for(let e=t.nextNode();e;e=t.nextNode())e instanceof Text&&n.push(e);return n}var k=e=>Ut(e).map(e=>e.data).join(``),Wt=`p, div, li, blockquote, h1, h2, h3, h4, h5, h6, pre, td, th, dd, dt`;function Gt(e){let t=new Set([0]),n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e instanceof Element&&(Vt.has(e.tagName)||e.matches(Ht))?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),r=0,i,a=!1;for(let e=n.nextNode();e;e=n.nextNode()){if(e instanceof Element){e.tagName===`BR`&&(a=!0);continue}if(!(e instanceof Text))continue;let n=e.parentElement?.closest(Wt)??null;(a||i!==void 0&&n!==i)&&t.add(r),a=!1,i=n,r+=e.data.length}return t}function Kt(){let e=new Map;for(let t of document.querySelectorAll(`${E.mes} ${E.mesText}`)){let n=O(t);n!==null&&e.set(n,Bt(k(t)))}return e}function qt(e,t,n){if(!e.contains(t))return-1;let r=0;for(let i of Ut(e)){if(i===t)return r+n;if(t.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING)return r;r+=i.data.length}return r}function Jt(e){return e.querySelectorAll(`rt, rp, ${Ht}`).forEach(e=>e.remove()),e.textContent??``}function Yt(e){if(!e.rangeCount)return``;let t=e.getRangeAt(0),n=t.commonAncestorContainer instanceof Element?t.commonAncestorContainer:t.commonAncestorContainer.parentElement;return!n?.closest(`ruby`)&&!n?.querySelector(`ruby, .pg-tap-bubble`)?e.toString():Jt(t.cloneContents())}function Xt(e){if(!e.querySelector(`ruby, .pg-tap-bubble`))return e.innerText;let t=e.cloneNode(!0);return t.querySelectorAll(`rt, rp, ${Ht}`).forEach(e=>e.remove()),t.querySelectorAll(`p, br, div, li`).forEach(e=>e.append(`
`)),(t.textContent??``).replace(/\n{3,}/g,`

`).trim()}function Zt(){document.addEventListener(`copy`,e=>{let t=getSelection();if(!t?.rangeCount||!e.clipboardData)return;let n=t.getRangeAt(0),r=n.commonAncestorContainer instanceof Element?n.commonAncestorContainer:n.commonAncestorContainer.parentElement;r?.closest(E.chat)&&(r.closest(`ruby`)||r.querySelector(`ruby`))&&(e.clipboardData.setData(`text/plain`,Yt(t)),e.preventDefault())})}var Qt=Symbol(`pg-safe-html`);function $t(e){return{[Qt]:!0,value:e,toString:()=>e}}function en(e){return typeof e==`object`&&!!e&&Qt in e}function tn(e){return e==null||e===!1?``:en(e)?e.value:Array.isArray(e)?e.map(tn).join(``):a(e)}function A(e,...t){return $t(e.reduce((e,n,r)=>e+n+(r<t.length?tn(t[r]):``),``))}function j(e,t){e.innerHTML=t.value}var nn=null,rn=0,an=()=>rn;function on(){return nn??=new Promise((e,t)=>{let n=indexedDB.open(y.conjDB,y.conjDBVersion);n.onupgradeneeded=()=>{n.result.createObjectStore(y.conjStore)},n.onsuccess=()=>{let t=n.result;t.onversionchange=()=>{t.close(),nn=null},e(t)},n.onerror=()=>{nn=null,t(n.error)}}),nn}async function sn(e,t){try{let n=await on(),r=await new Promise((t,r)=>{let i=n.transaction(y.conjStore).objectStore(y.conjStore).get(e);i.onsuccess=()=>t(i.result),i.onerror=()=>r(i.error)});return!r||r.lang!==t?null:r.data}catch{return null}}async function cn(e,t,n){rn++;try{let r=await on(),i={data:t,lang:n,cachedAt:Date.now()};await new Promise((t,n)=>{let a=r.transaction(y.conjStore,`readwrite`).objectStore(y.conjStore).put(i,e);a.onsuccess=()=>t(),a.onerror=()=>n(a.error)})}catch{}}async function ln(e){rn++;try{let t=await on();await new Promise((n,r)=>{let i=t.transaction(y.conjStore,`readwrite`).objectStore(y.conjStore).delete(e);i.onsuccess=()=>n(),i.onerror=()=>r(i.error)})}catch(t){console.warn(`[Polyglot] conj-cache: deleteConjCache failed for word:`,e,t)}}async function un(){rn++;try{let e=await on();await new Promise((t,n)=>{let r=e.transaction(y.conjStore,`readwrite`).objectStore(y.conjStore).clear();r.onsuccess=()=>t(),r.onerror=()=>n(r.error)})}catch(e){console.warn(`[Polyglot] conj-cache: clearConjCacheStore failed`,e)}}async function dn(){try{let e=await on();return await new Promise((t,n)=>{let r=[],i=e.transaction(y.conjStore,`readonly`).objectStore(y.conjStore).openCursor();i.onsuccess=()=>{let e=i.result;if(!e){t(r);return}let n=e.value;n?.data?.tenses?.length&&r.push({word:String(e.key),lang:n.lang,data:n.data}),e.continue()},i.onerror=()=>n(i.error)})}catch{return[]}}async function fn(e){return(await dn()).filter(t=>t.lang===e).map(({word:e,data:t})=>({word:e,data:t}))}function pn(){return qe()?.chatMetadata??null}function mn(){Ge()}function hn(e){return{get(){return pn()?.[e]},set(t){let n=pn();return n?(n[e]=t,mn(),!0):!1},delete(){let t=pn();t&&e in t&&(delete t[e],mn())}}}function M(){return qe()?.chatId??null}var gn=/^pg-media-[0-9a-f]{16}\.[a-z0-9]{2,5}$/,_n=e=>typeof e==`string`&&gn.test(e),vn=new Set([`mp3`,`ogg`,`oga`,`opus`,`wav`,`m4a`,`aac`,`flac`,`webm`]),yn=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`avif`,`bmp`]),bn=e=>/\.([a-z0-9]+)$/i.exec(e)?.[1].toLowerCase()??``;function xn(e){let t=2166136261,n=16777619^e.length;for(let r=0;r<e.length;r++)t=Math.imul(t^e[r],16777619),n=Math.imul(n^e[r],1540483477)^n>>>15;return(t>>>0).toString(16).padStart(8,`0`)+(n>>>0).toString(16).padStart(8,`0`)}var Sn=(e,t)=>`pg-media-${xn(e)}.${bn(t)}`,Cn=(e,t)=>(t===`sound`?vn:yn).has(bn(e));function wn(e){let t=new Set;for(let n of e)_n(n.audio)&&t.add(n.audio),_n(n.image)&&t.add(n.image),_n(n.example_audio)&&t.add(n.example_audio);return t}async function Tn(e){return(await Ie([e])).get(e)===!1}async function En(e){for(let t of e)kn.delete(t),On.delete(t);await An;let t=await Ie(e);return new Set(e.filter(e=>t.get(e)===!0))}async function Dn(e,t,n){let r=0;await Promise.all(Array.from({length:Math.min(t,e.length)},async()=>{for(;r<e.length;)await n(e[r++])}))}var On=new Set,kn=new Set,An=null;function jn(e){for(let t of e)_n(t)&&On.add(t)}var Mn=864e5;function Nn(){try{let e=JSON.parse(localStorage.getItem(y.mediaPending)??`{}`);return e&&typeof e==`object`&&!Array.isArray(e)?e:{}}catch{return{}}}function Pn(e){try{Object.keys(e).length?localStorage.setItem(y.mediaPending,JSON.stringify(e)):localStorage.removeItem(y.mediaPending)}catch{}}function Fn(e,t=Date.now()){let n=[...e].filter(_n);if(!n.length)return;let r=Nn();for(let e of n)r[e]=t;Pn(r)}function In(e){let t=Nn(),n=!1;for(let r of e)Object.hasOwn(t,r)&&(delete t[r],n=!0);n&&Pn(t)}function Ln(e,t=Date.now()){let n=Nn(),r=Object.keys(n).filter(e=>!(t-n[e]<Mn)&&!On.has(e));In(r.filter(t=>e.has(t)||!_n(t))),zn(r.filter(t=>!e.has(t)&&_n(t)))}function Rn(e,t,n=t,r=Date.now()){let i=[...new Set([...e,...On])].filter(e=>!t.has(e)&&!n.has(e)&&_n(e));In(t);for(let e of[...On])(t.has(e)||!n.has(e))&&On.delete(e);Fn(i,r)}function zn(e){e.length&&(e.forEach(e=>kn.add(e)),(async()=>{for(let t of e)kn.delete(t)&&(An=Re(t),await An?In([t]):console.warn(`[Polyglot] could not delete unused media file`,t),An=null)})())}var Bn=500,Vn=`tab-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,Hn=Xn(),Un=null,Wn;function Gn(e){Un=e,Wn??=setTimeout(Kn,Bn)}function Kn(){clearTimeout(Wn),Wn=void 0;let e=Un;Un=null,e&&Hn.put(Vn,e()).catch(()=>{})}function qn(){clearTimeout(Wn),Wn=void 0,Un=null,Hn.remove(Vn).catch(()=>{})}async function Jn(){try{return await Hn.all()}catch{return[]}}function Yn(e){for(let[t,n]of e)Hn.remove(t,n.at).catch(()=>{})}function Xn(){let e=null,t=()=>e??=new Promise((t,n)=>{let r=indexedDB.open(y.journalDB,1);r.onupgradeneeded=()=>{r.result.createObjectStore(y.journalStore)},r.onsuccess=()=>{let n=r.result;n.onversionchange=()=>{n.close(),e=null},t(n)},r.onerror=()=>{e=null,n(r.error)}}),n=async(e,n)=>{let r=(await t()).transaction(y.journalStore,e),i=n(r.objectStore(y.journalStore));return new Promise((e,t)=>{r.oncomplete=()=>e(i()),r.onerror=r.onabort=()=>t(r.error)})};return{put:(e,t)=>n(`readwrite`,n=>(n.put(t,e),()=>void 0)),all:()=>n(`readonly`,e=>{let t=e.getAllKeys(),n=e.getAll();return()=>t.result.map((e,t)=>[String(e),n.result[t]])}),remove:(e,t)=>n(`readwrite`,n=>{if(t===void 0)n.delete(e);else{let r=n.get(e);r.onsuccess=()=>{r.result?.at===t&&n.delete(e)}}return()=>void 0})}}var Zn=e=>e.normalize(`NFKC`).toLowerCase().trim(),Qn=/\p{Script=Hangul}/u,$n=3;function er(e){return e.split(/\s+/).filter(Boolean).reduce((e,t)=>t.length>e.length?t:e,``)}function tr(e,t){let n=[e.word,e.base_form,e.original_form,e.example_form,e.reading,...e.forms??[]];for(let e of t?.tenses??[])for(let t of e.rows??[])typeof t?.form==`string`&&n.push(er(t.form));return[...new Set(n.filter(e=>typeof e==`string`).map(Zn).filter(e=>e.length>0))]}var nr=class{tokens=new Map;unspaced=new Map;phrases=[];all=new Map;constructor(e){for(let{word:t,forms:n}of e)for(let e of n)if(this.all.has(e)||this.all.set(e,t),ie.test(e)){if([...e].length<2)continue;let n=this.unspaced.get(e[0])??[];n.push({form:e,word:t}),this.unspaced.set(e[0],n)}else/\s/.test(e)?this.phrases.push({form:e,word:t}):this.tokens.has(e)||this.tokens.set(e,t);for(let e of this.unspaced.values())e.sort((e,t)=>t.form.length-e.form.length)}wordOf(e){return e?this.all.get(Zn(e)):void 0}get size(){return this.tokens.size+this.phrases.length+[...this.unspaced.values()].reduce((e,t)=>e+t.length,0)}find(e){let t=e.toLowerCase();if(t.length!==e.length)return[];let n=[];for(let{form:e,word:r}of this.phrases)for(let i=d(t,e);i!==-1;i=d(t,e,i+e.length))n.push({start:i,end:i+e.length,word:r});for(let e of t.matchAll(/[\p{L}\p{M}\p{N}]+(?:['’][\p{L}\p{M}\p{N}]+)*/gu)){let t=e[0],r=e.index;if(ie.test(t))continue;let i=this.tokenHit(t);i&&n.push({start:r+i.offset,end:r+i.offset+i.length,word:i.word})}if(this.unspaced.size)for(let e=0;e<t.length;e++){let r=this.unspaced.get(t[e]);if(!r)continue;let i=r.find(n=>t.startsWith(n.form,e));i&&(n.push({start:e,end:e+i.form.length,word:i.word}),e+=i.form.length-1)}n.sort((e,t)=>e.start-t.start||t.end-t.start-(e.end-e.start));let r=[];for(let e of n)(!r.length||e.start>=r[r.length-1].end)&&r.push(e);return r}tokenHit(e){let t=this.tokens.get(e);if(t)return{offset:0,length:e.length,word:t};let n=e.search(/['’][^'’]*$/);if(n>0){let t=e.slice(n+1),r=e.slice(0,n),i=this.tokens.get(t);if(i)return{offset:n+1,length:t.length,word:i};let a=this.tokens.get(r);if(a)return{offset:0,length:r.length,word:a}}if(Qn.test(e)){let t=[...e];for(let e=1;e<=$n&&t.length-e>=2;e++){let n=t.slice(0,t.length-e).join(``),r=this.tokens.get(n);if(r)return{offset:0,length:n.length,word:r}}}return null}};function rr(e,t){let n=Zn(t),r=e??[];return!n||r.map(Zn).includes(n)?[...r]:[...r,t.trim()].slice(-8)}var ir=[`audio`,`example_audio`],ar=(e,t)=>(t===`audio`?e.word:e.example??``).trim(),or=(e,t)=>!!e[t],sr=(e,t)=>!!e[t]&&(e.made_sounds??[]).includes(e[t]);function cr(e,t){let n=new Set(ir.map(t=>e[t]).filter(Boolean)),r=[...new Set(t)].filter(e=>n.has(e)),{made_sounds:i,...a}=e;return r.length?{...a,made_sounds:r}:a}function lr(e,t,n,r){let i={...e,[t]:n},a=(e.made_sounds??[]).filter(e=>e!==n);return cr(i,r?[...a,n]:a)}function ur(e,t){let n={...e};return delete n[t],cr(n,e.made_sounds??[])}var dr=e=>ir.some(t=>!!ar(e,t)&&!or(e,t));function fr(e,t){let n=e.langs??[];return!n.length||n.includes(u(t))?t:n[0]}function pr(e,t,n){let r=ar(e,t);return r?{word:e.word,field:t,text:r,lang:fr(e,n),current:e[t]??``}:null}var mr=(e,t)=>!!e&&ar(e,t.field)===t.text&&(e[t.field]??``)===t.current;function hr(e,t,n){let r=[];for(let i of e)for(let e of ir){let a=pr(i,e,n);a&&(!or(i,e)||t===`remake`&&sr(i,e))&&r.push(a)}return r}var gr=e=>e.reduce((e,t)=>e+t.text.length,0);function _r(e){let t={audio:0,example_audio:0};for(let n of e)t[n.field]++;return t}var vr=[`example`,`example_translation`,`example_form`,`example_audio`];function yr(e,t){let n={...e};for(let e of vr)t[e]===void 0?delete n[e]:n[e]=t[e];return n}function br(e,t,n){let r=e.example&&t.example&&e.example!==t.example?yr(n,e):n;return r.audio&&r.audio===t.audio&&t.word!==r.word&&sr(t,`audio`)&&(r={...r},delete r.audio),cr(r,[...e.made_sounds??[],...t.made_sounds??[]])}function xr(e,t){return e.word!==t&&sr(e,`audio`)?ur(e,`audio`):e}var Sr=e=>e.chats??[];function Cr(e,t,n){return t===`all`||!n||Sr(e).includes(n)}var wr=e=>e.langs??[],Tr=(e,t)=>!t||!wr(e).length||wr(e).includes(t),Er=e=>Sr(e).length?Sr(e):[``];function Dr(e=[],t=[]){return[...new Set([...e,...t])]}function Or(e,t){return!t||Sr(e).includes(t)?!1:(e.chats=[...Sr(e),t],!0)}function kr(e,t){return!t||wr(e).includes(t)?!1:(e.langs=[...wr(e),t],!0)}function Ar(e){let t=e.srs_reviewed_at??0,n=e.srs_reset_at??0;return n>t?[n,0]:[t,e.srs_stability??e.srs_interval??0]}function jr(e,t){let[n,r]=Ar(e),[i,a]=Ar(t);return n===i?r>=a:n>i}function Mr(e,t){return!e||!t||e===t?e||t||void 0:e.includes(t)?e:t.includes(e)?t:`${e}\n${t}`}var Nr=(e,t)=>e?t?e<t?e:t:e:t;function Pr(e,t){let n=jr(e,t)?e:t,r={...t,...Wr(e)};for(let e of Fr)delete r[e];return br(e,t,{...r,setIds:Dr(e.setIds,t.setIds),chats:Dr(e.chats,t.chats),langs:Dr(e.langs,t.langs),collocations:e.collocations?.length?e.collocations:t.collocations,...(e.forms||t.forms)&&{forms:Dr(e.forms,t.forms).slice(-8)},...(e.seen||t.seen)&&{seen:Math.max(e.seen??0,t.seen??0)},notes:Mr(e.notes,t.notes),dateAdded:Nr(e.dateAdded,t.dateAdded),conj_cached:!!(e.conj_cached||t.conj_cached),...Ir(n)})}var Fr=[`srs_stability`,`srs_difficulty`,`srs_due`,`srs_reviewed_at`,`srs_lapses`,`srs_interval`,`srs_ease`,`srs_streak`,`srs_reset_at`];function Ir(e){let t={};for(let n of Fr)e[n]!==void 0&&(t[n]=e[n]);return t}var Lr=new Set([`setIds`,`chats`,`langs`,`made_sounds`,`forms`,`renamed_from`]);function Rr(e,t){if(!jr(t,e)||JSON.stringify(Ir(t))===JSON.stringify(Ir(e)))return e;let n={...e};for(let e of Fr)delete n[e];return{...n,...Ir(t)}}var zr=(e,t)=>JSON.stringify(e)===JSON.stringify(t);function Br(e=[],t=[],n=[]){let r=r=>e.includes(r)&&(!t.includes(r)||!n.includes(r));return Dr(t,n).filter(e=>!r(e))}function Vr(e,t,n){let r=e,i=t,a=n,o=e=>Fr.some(t=>!zr(e[t],r[t])),s=o(i)?o(a)?jr(t,n)?i:a:i:a,c={};for(let e of new Set([...Object.keys(r),...Object.keys(i),...Object.keys(a)])){let t;t=Fr.includes(e)?s[e]:zr(i[e],r[e])?a[e]:zr(a[e],r[e])?i[e]:Lr.has(e)?Br(r[e],i[e],a[e]):e===`notes`?Mr(i[e],a[e]):e===`seen`?Math.max(Number(i[e])||0,Number(a[e])||0):i[e],t!==void 0&&(c[e]=t)}let l=e=>!zr(e.example,r.example),u=yr(c,l(i)?t:l(a)?n:(e=>vr.some(t=>!zr(e[t],r[t])))(i)?t:n);return cr(u,u.made_sounds??[])}var Hr=new Set([...Fr,`conj_cached`,`chats`,`langs`,`forms`,`seen`]);function Ur(e,t,n){let r=e,i=t,a=new Set(t.made_sounds??[]),o=e=>Hr.has(e)||e===`made_sounds`||(e===`audio`||e===`example_audio`)&&a.has(i[e]);if(![...new Set([...Object.keys(r),...Object.keys(i)])].some(e=>!o(e)&&!zr(i[e],r[e])))return null;let s={...t};return s.audio&&s.audio===e.audio&&!n.has(s.audio)&&delete s.audio,s.example_audio&&s.example_audio===e.example_audio&&!n.has(s.example_audio)&&delete s.example_audio,s.image&&s.image===e.image&&!n.has(s.image)&&delete s.image,s}function Wr(e){return Object.fromEntries(Object.entries(e).filter(([,e])=>e!==void 0&&e!==``))}function Gr(e,t){let n=new Map(e.map(e=>[e.word,e])),r=0,i=0;for(let e of t){if(!e?.word)continue;let t=n.get(e.word);t?(n.set(e.word,Pr(t,e)),i++):(n.set(e.word,e),r++)}return{wordbook:[...n.values()],added:r,merged:i}}function Kr(e,t,n){let r=new Set(t),i=[];return{wordbook:e.flatMap(e=>{if(n&&!n.has(e.word)||!Er(e).some(e=>r.has(e)))return[e];let t=Sr(e).filter(e=>!r.has(e));return t.length?[{...e,chats:t}]:(i.push(e.word),[])}),deleted:i}}function qr(e,t){return{wordbook:e.filter(e=>!t.has(e.word)),deleted:e.filter(e=>t.has(e.word)).map(e=>e.word)}}function Jr(e,t,n){let r=new Set(t),i=0;return{wordbook:e.map(e=>Er(e).some(e=>r.has(e))?(i++,{...e,chats:Dr(Sr(e).filter(e=>!r.has(e)),[n])}):e),moved:i}}function Yr(e){let t=new Map;for(let n of e)for(let e of Er(n))t.set(e,(t.get(e)??0)+1);return[...t].map(([e,t])=>({chatId:e,count:t})).sort((e,t)=>e.chatId===``?1:t.chatId===``?-1:t.count-e.count)}var Xr=e=>(e??``).normalize(`NFKC`).toLowerCase().replace(/\s+/g,` `).trim();function Zr(e){let t=e.filter(e=>e.level!==`grammar`&&e.level!==`sentence`),n=t.map((e,t)=>t),r=e=>n[e]===e?e:n[e]=r(n[e]),i=new Map;t.forEach((e,t)=>{let a=Xr(e.word),o=i.get(a);o===void 0?i.set(a,t):n[r(t)]=r(o)}),t.forEach((e,t)=>{let a=i.get(Xr(e.base_form));a!==void 0&&(n[r(t)]=r(a))});let a=new Map;t.forEach((e,t)=>a.set(r(t),[...a.get(r(t))??[],e]));let o=(e,t)=>t.some(t=>t!==e&&Xr(t.base_form)===Xr(e.word));return[...a.values()].filter(e=>e.length>1).map(e=>[...e].sort((t,n)=>Number(o(n,e))-Number(o(t,e))||Number(jr(n,t))-Number(jr(t,n))))}function Qr(e,t){let[n,...r]=t,i=e.find(e=>e.word===n),a=r.map(t=>e.find(e=>e.word===t)).filter(e=>!!e&&e!==i);if(!i||!a.length)return{wordbook:e,removed:[]};let o=a.reduce((e,t)=>({...Pr(e,t),word:i.word}),i),s=new Set(a.map(e=>e.word));return{wordbook:e.filter(e=>!s.has(e.word)).map(e=>e===i?o:e),removed:[...s]}}function $r(e,t,n){let r=e.find(e=>e.word===t);if(!r)return{wordbook:e,word:t,merged:!1,formChanged:!1};let i=Object.fromEntries(Object.entries(n).map(([e,t])=>[e,typeof t==`string`?t.trim():t])),a=i.word||r.word,o=xr({...r,...i,word:a,base_form:i.base_form||a},r.word);a!==r.word&&(o.renamed_from=[...new Set([...r.renamed_from??[],r.word])].filter(e=>e!==a).slice(-3));let s=o.word!==r.word||o.base_form!==r.base_form;s&&(o.conj_cached=!1);let c=a===t?void 0:e.find(e=>e.word===a);if(c){let t={...Pr(o,c),word:a};return{wordbook:e.filter(e=>e!==r).map(e=>e===c?t:e),word:a,merged:!0,formChanged:s}}return{wordbook:e.map(e=>e===r?o:e),word:a,merged:!1,formChanged:s}}var ei=e=>e.length<=500?e:[...e].sort((e,t)=>(e.savedAt??0)-(t.savedAt??0)).slice(-500),ti=e=>[...e].sort((e,t)=>t.at-e.at).slice(0,100),ni=`polyglot-data`,ri=3,ii=()=>({wordbook:[],sets:[],wrongAnswers:[],checks:[],days:[]}),ai=e=>e.wordbook.length>0||e.sets.length>0||e.wrongAnswers.length>0||e.checks.length>0||e.days.length>0,oi=e=>Array.isArray(e)?e.filter(e=>typeof e==`string`):[],si=(e,t)=>typeof e==`number`&&Number.isFinite(e)?e:t,ci=[`meaning_lang`,`pos_info`,`pos`,`ipa`,`reading`,`notes`,`original_form`,`context_meaning`,`example`,`example_translation`,`example_form`,`example_audio`,`audio`,`image`,`dateAdded`,`speaker`];function li(e){let t={...e};for(let e of ci)e in t&&typeof t[e]!=`string`&&delete t[e];for(let e of[`collocations`,`made_sounds`,`forms`,`renamed_from`])e in t&&(Array.isArray(t[e])?t[e]=t[e].filter(e=>typeof e==`string`):delete t[e]);for(let e of Fr)e in t&&!Number.isFinite(t[e])&&delete t[e];if(`seen`in t&&!(Number.isFinite(t.seen)&&t.seen>=0)&&delete t.seen,t.srs_reviewed_at===void 0&&t.srs_stability===void 0)for(let e of[`srs_interval`,`srs_ease`,`srs_due`,`srs_streak`])delete t[e];return`conj_cached`in t&&typeof t.conj_cached!=`boolean`&&delete t.conj_cached,`known`in t&&t.known!==!0&&delete t.known,t}function ui(e){return!f(e)||typeof e.word!=`string`||!e.word.trim()?null:{...li(e),base_form:typeof e.base_form==`string`?e.base_form:e.word,meaning:typeof e.meaning==`string`?e.meaning:``,level:typeof e.level==`string`?e.level:``,setIds:oi(e.setIds),chats:oi(e.chats),...e.langs!==void 0&&{langs:oi(e.langs)}}}var di=(e,t)=>Array.isArray(e)?e.filter(t):[],fi=e=>f(e)&&typeof e.id==`string`&&typeof e.name==`string`,pi=e=>f(e)&&typeof e.question==`string`;function mi(e){if(!f(e)||typeof e.id!=`string`||typeof e.original!=`string`)return null;let t=e=>typeof e==`string`?e:``;return{id:e.id,at:si(e.at,0),lang:t(e.lang),original:e.original,grammar:t(e.grammar),natural:t(e.natural),explanation:t(e.explanation),...typeof e.note==`string`&&e.note&&{note:e.note}}}var hi=/^\d{4}-\d{2}-\d{2}$/,gi=e=>Math.max(0,Math.round(si(e,0))),_i=e=>e.sort((e,t)=>e.d<t.d?-1:+(e.d>t.d)),vi=(e,t)=>t>0?{...e,o:t}:e,yi=(e,t)=>vi({d:e.d,n:Math.max(e.n,t.n),r:Math.max(e.r,t.r),a:Math.max(e.a,t.a)},Math.max(e.o??0,t.o??0));function bi(e){let t=new Map;for(let n of e.flat()){let e=t.get(n.d);t.set(n.d,e?yi(e,n):n)}return _i([...t.values()])}function xi(e){return bi([(Array.isArray(e)?e:[]).filter(e=>f(e)&&typeof e.d==`string`&&hi.test(e.d)).map(e=>vi({d:e.d,n:gi(e.n),r:gi(e.r),a:gi(e.a)},gi(e.o)))])}function Si(e){return{wordbook:(Array.isArray(e.wordbook)?e.wordbook:[]).map(ui).filter(e=>e!==null),sets:di(e.sets,fi),wrongAnswers:ei(di(e.wrongAnswers,pi)),checks:ti((Array.isArray(e.checks)?e.checks:[]).map(mi).filter(e=>e!==null)),days:xi(e.days)}}function Ci(e,t){let{wordbook:n,added:r,merged:i}=Gr(e.wordbook,t.wordbook),a=new Set(e.sets.map(e=>e.id)),o=new Set(e.wrongAnswers.map(e=>e.question)),s=new Set(e.checks.map(e=>e.id));return{wordbook:n,added:r,merged:i,sets:[...e.sets,...t.sets.filter(e=>!a.has(e.id))],wrongAnswers:[...e.wrongAnswers,...t.wrongAnswers.filter(e=>!o.has(e.question))],checks:ti([...e.checks,...t.checks.filter(e=>!s.has(e.id))]),days:bi([e.days,t.days])}}function wi(e,t,n){let r=new Set(n.wordbook.flatMap(e=>[e.audio,e.example_audio,e.image]));return{wordbook:Ti(e.wordbook,t.wordbook,n.wordbook,Di(e.wordbook,t.wordbook,n.wordbook,e=>e.word,(e,t,n)=>n?Vr(n,e,t):Pr(e,t),(e,t)=>Ur(t,e,r))),sets:Di(e.sets,t.sets,n.sets,e=>e.id,e=>e),wrongAnswers:Di(e.wrongAnswers,t.wrongAnswers,n.wrongAnswers,e=>e.question,e=>e),checks:ti(Di(e.checks,t.checks,n.checks,e=>e.id,e=>e)),days:Ei(e.days,t.days,n.days)}}function Ti(e,t,n,r){let i=new Map(e.map(e=>[e.word,e])),a=e=>{let t=i.get(e.word);return!!t&&Fr.some(n=>t[n]!==e[n])},o=new Map;for(let e of[...t,...n])a(e)&&o.set(e.word,o.get(e.word)??e);if(!o.size)return r;let s=new Set(r.map(e=>e.word));return r.map(e=>{let t=e;for(let n of e.renamed_from??[]){let e=s.has(n)?void 0:o.get(n);e&&(t=Rr(t,e))}return t})}function Ei(e,t,n){let r=e=>({d:e,n:0,r:0,a:0}),i=e=>new Map(e.map(e=>[e.d,e])),a=i(e),o=i(t),s=i(n),c=(e,t)=>Math.max(0,((s.get(e)??r(e))[t]??0)+((o.get(e)??r(e))[t]??0)-((a.get(e)??r(e))[t]??0));return _i([...new Set([...o.keys(),...s.keys()])].map(e=>vi({d:e,n:c(e,`n`),r:c(e,`r`),a:c(e,`a`)},c(e,`o`))))}function Di(e,t,n,r,i,a=e=>e){let o=new Map(e.map(e=>[r(e),e])),s=new Map(n.map(e=>[r(e),e])),c=(e,t)=>JSON.stringify(e)===JSON.stringify(t),l=new Map;for(let e of t){let t=r(e),n=o.get(t),u=s.get(t);if(u===void 0){let r=n===void 0?e:c(e,n)?null:a(e,n);r&&l.set(t,r)}else c(e,n)||c(e,u)?l.set(t,u):c(u,n)?l.set(t,e):l.set(t,i(e,u,n))}for(let e of n)!l.has(r(e))&&!o.has(r(e))&&l.set(r(e),e);return[...l.values()]}function Oi(e,t=new Date,n){return JSON.stringify({format:ni,version:ri,savedAt:t.toISOString(),...n?.length&&{revs:n},wordbook:e.wordbook,sets:e.sets,wrongAnswers:e.wrongAnswers,checks:e.checks,days:e.days})}function ki(e){let t;try{t=JSON.parse(e)}catch{return{ok:!1,reason:`invalid`}}if(!f(t)||t.format!==`polyglot-data`)return{ok:!1,reason:`invalid`};if(si(t.version,0)>ri)return{ok:!1,reason:`newer`};let n=Array.isArray(t.revs)&&t.revs.length&&t.revs.every(e=>typeof e==`string`)?t.revs:null;return{ok:!0,data:Si(t),revs:n}}var Ai=`polyglot-data.json`,ji=`polyglot-data-before-migration.json`,Mi=800,Ni=8e3,Pi=[2e3,5e3,15e3,3e4,6e4],Fi=64,Ii=15e3,N=`loading`,P=ii(),F=!1,Li=null,Ri,zi=!1,Bi,Vi=0,Hi=``,I=null,Ui=!1,Wi=null,Gi=!0,L=null,Ki,qi=new Set,Ji=``,Yi=new Set,Xi=[`_wordbook`,`_sets`,`saved_wrong_answers`,`saved_checks`,`saved_days`];function Zi(e){let t=x();return Array.isArray(t[e])||(t[e]=[]),t[e]}function Qi(){let e=x(),t=t=>Array.isArray(e[t])?e[t]:[];return{wordbook:t(`_wordbook`),sets:t(`_sets`),wrongAnswers:t(`saved_wrong_answers`),checks:t(`saved_checks`),days:t(`saved_days`)}}function $i(){let e=x();Xi.forEach(t=>delete e[t]),T()}var R=()=>N;function ea(){let e=pn();return e?(Array.isArray(e[y.wordbook])||(e[y.wordbook]=[]),e[y.wordbook]):Zi(`_wordbook`)}function ta(){return N===`chat`?ea():P.wordbook}function na(){return N===`chat`?Zi(`_sets`):P.sets}function ra(){return N===`chat`?Zi(`saved_wrong_answers`):P.wrongAnswers}function ia(){return N===`chat`?Zi(`saved_checks`):P.checks}function aa(){return N===`chat`?Zi(`saved_days`):P.days}function oa(){return{wordbook:ta(),sets:na(),wrongAnswers:ra(),checks:ia(),days:aa()}}function sa(e){return Yi.add(e),()=>Yi.delete(e)}var ca=()=>{Yi.forEach(e=>e()),pa()},la=new Set,ua,da=300;function fa(e){return la.add(e),()=>la.delete(e)}function pa(){la.size&&(clearTimeout(ua),ua=setTimeout(()=>la.forEach(e=>e()),da))}function ma(){let e=crypto.getRandomValues(new Uint8Array(6));return Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}function ha(e,t=!1){if(N===`chat`){let t=pn();e.wordbook&&(t?t[y.wordbook]=e.wordbook:x()._wordbook=e.wordbook),e.sets&&(x()._sets=e.sets),e.wrongAnswers&&(x().saved_wrong_answers=e.wrongAnswers),e.checks&&(x().saved_checks=e.checks),e.days&&(x().saved_days=e.days)}else P={...P,...e};ga(t)}function ga(e=!1){pa(),N===`chat`?(pn()&&mn(),T()):(zi=e&&(zi||!F),F=!0,Gn(()=>({data:P,baseText:Hi,at:Date.now()})),!(N!==`file`||Vi>0)&&(e?Ri===void 0&&va(Ni):va(Mi)))}function _a(){clearTimeout(Ri),Ri=void 0}function va(e){_a(),Ri=setTimeout(()=>{Ri=void 0,Ta()},e)}async function ya(){let e=await xe(Ai,I??void 0);if(e.status===`error`)return`retry`;if(e.status===`unchanged`||e.status===`missing`)return`ok`;if(e.text===Hi)return I=e.etag??null,Ui=!0,`ok`;if(L&&e.text===L.text)return xa(L.text,L.revs,L.media,e.etag),`ok`;let t=ki(e.text);if(!t.ok)return t.reason===`newer`?`newer`:await Da(e.text)?`ok`:`retry`;let n=ba(t.revs);if(n!==null){let e=ki(n);P=wi(e.ok?e.data:ii(),P,t.data)}else{console.warn(`[Polyglot] the data file was written over by another device; merging both copies`);let{added:e,merged:n,...r}=Ci(t.data,P);P=r}return xa(e.text,t.revs,wn(t.data.wordbook),e.etag),ca(),`ok`}function ba(e){return L&&e?.includes(L.revs[0])?L.text:!e||!Wi||e.includes(Wi[0])||Gi&&e.length>=Fi?Hi:null}function xa(e,t,n,r){Hi=e,I=r??null,Ui=!0,Wi=t,Gi=!0,L=null,qi=new Set([...qi,...n])}async function Sa(e){let t=await ke(Ai);return t&&t.size===new TextEncoder().encode(e).length?t.etag:null}function Ca(){clearTimeout(Ki),Ki=setTimeout(()=>{wa()},Ii)}async function wa(){if(N!==`file`||Li||F||Gi)return;let e=await xe(Ai,Ui?I??void 0:void 0);if(N!==`file`||Li||F)return;if(e.status===`unchanged`){Gi=!0;return}if(e.status!==`ok`)return;if(e.text===Hi){Gi=!0,I=e.etag??null,Ui=!0;return}I=null;let t=ki(e.text);t.ok&&(ba(t.revs)===null?(F=!0,Ta()):Gi=!0)}function Ta(){return Li||(_a(),N===`file`?(Li=(async()=>{F=!1,zi=!1;let e=await ya();if(e===`newer`){F=!0,Na();return}let t=[ma(),...Wi??[]].slice(0,Fi),n=Oi(P,new Date,t),r=wn(P.wordbook),a=e===`ok`?await fe(Ai,n):`error`;a===`ok`?(Hi=n,Wi=t,Gi=!1,I=await Sa(n),Ui=!1,L=null,Rn(qi,r,wn(P.wordbook)),qi=r,F||qn(),Vi>0&&i(C(`data.saveRecovered`),`ok`,3e3),Vi=0,Ca()):(e===`ok`&&a===`error`&&(L={text:n,revs:t,media:r}),F=!0,a===`unsupported`?ka():(Vi===0&&i(C(`data.saveFailed`),`warn`,6e3),va(Pi[Math.min(Vi,Pi.length-1)]),Vi++))})().finally(()=>{Li=null,F&&N===`file`&&Vi===0&&va(zi?Ni:Mi)}),Li):Promise.resolve())}async function Ea(){if(N===`chat`)return!0;if(N!==`file`)return!1;for(;Li;)await Li;return F&&await Ta(),!F}async function Da(e){if(e===Ji)return!0;let t=await fe(`polyglot-data-unreadable-${Date.now()}.json`,e)===`ok`;return t&&(Ji=e),t}async function Oa(e,t){let n=await fe(e,t);if(n!==`ok`)return n;let r=await xe(e);return r.status===`missing`?`unsupported`:r.status===`ok`&&r.text===t?`ok`:`error`}function ka(){if(N===`chat`)return;let e=P;N=`chat`,_a(),clearTimeout(Bi),qn(),F=!1;let t=Ci(Qi(),e);Object.assign(x(),{_wordbook:t.wordbook,_sets:t.sets,saved_wrong_answers:t.wrongAnswers,saved_checks:t.checks,saved_days:t.days}),T(),i(C(`data.chatMode`),`warn`,8e3),ca()}function Aa(){N!==`offline`&&i(C(`data.loadFailed`),`warn`,8e3),N=`offline`,clearTimeout(Bi),Bi=setTimeout(()=>{Ia()},Pi.at(-1))}var ja=!1,Ma=3e5;function Na(){ja||i(C(`data.newerFile`),`err`,15e3),ja=!0,N=`offline`,_a(),clearTimeout(Bi),Bi=setTimeout(()=>{Ia()},Ma)}var Pa=null;function Fa(){return Pa??=Ia().finally(()=>{Pa=null}),Pa}async function Ia(){if(N===`chat`)return;N===`loading`&&!ai(P)&&(P=structuredClone(Qi()));let e=await xe(Ai);if(e.status===`error`){Aa();return}let t=null,n=null;if(e.status===`ok`){let r=ki(e.text);if(r.ok)t=r.data,n=r.revs;else if(r.reason===`newer`){Na();return}else if(!await Da(e.text)){Aa();return}}let r=Qi(),a=ai(r),o=!t;a&&await fe(ji,Oi(r));let s=t??ii(),c=await Jn();for(let[,e]of c)s=La(s,n,e);if(c.length&&console.info(`[Polyglot] took in unsaved changes kept by ${c.length} tab(s)`),F||a){let{added:e,merged:t,...n}=Ci(s,P);s=n}if(P=s,F||a||o||c.length){F=!1;let e=[ma(),...n??[]].slice(0,Fi),t=Oi(P,new Date,e),o=await Oa(Ai,t);if(o===`unsupported`){ka();return}if(o===`error`){F=!0,Aa();return}Hi=t,Wi=e,I=await Sa(t),Ui=!1,Yn(c),F||qn(),a&&($i(),i(C(`data.migrated`,{n:r.wordbook.length}),`ok`,5e3))}else Hi=e.status===`ok`?e.text:``,I=e.status===`ok`?e.etag??null:null,Ui=!0,Wi=n;Gi=!0,L=null,qi=wn(P.wordbook),Ln(qi);let l=N===`offline`;N=`file`,Vi=0,clearTimeout(Bi),l&&i(C(`data.saveRecovered`),`ok`,3e3),F&&va(Mi),ca()}function La(e,t,n){let r;try{let t=ki(Oi(n.data));if(!t.ok)return e;r=t.data}catch{return e}let i=n.baseText?ki(n.baseText):null,a=i?.ok?i.revs?.[0]:void 0;if(i?.ok&&a&&t?.includes(a))return wi(i.data,r,e);let{added:o,merged:s,...c}=Ci(e,r);return c}async function Ra(){if(N!==`file`||F||Li)return;let e=await xe(Ai,Ui?I??void 0:void 0);if(e.status!==`ok`||F||Li)return;if(e.text===Hi){I=e.etag??null,Ui=!0;return}let t=ki(e.text);t.ok&&(ba(t.revs)===null?(F=!0,Ta()):(P=t.data,Hi=e.text,I=e.etag??null,Ui=!0,Wi=t.revs,Gi=!0,qi=wn(P.wordbook),ca()))}var za=()=>N!==`chat`&&(F||Li!==null);typeof window<`u`&&(window.addEventListener(`beforeunload`,e=>{za()&&(Kn(),Ta(),e.preventDefault())}),window.addEventListener(`pagehide`,Kn),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`?Ra():(Kn(),F&&Ta())}));function Ba(e,t,n=`text/plain`){let r=n===`text/plain`?`﻿`:``,i=URL.createObjectURL(new Blob([r+e],{type:`${n};charset=utf-8`})),a=Object.assign(document.createElement(`a`),{href:i,download:t});document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(i),6e4)}function Va(e,t){let n=URL.createObjectURL(e),r=Object.assign(document.createElement(`a`),{href:n,download:t});document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),6e4)}var Ha={"“":`”`,"„":`“”`,"«":`»`,"»":`«`,"‹":`›`,"›":`‹`,"「":`」`,"『":`』`,"〝":`〟〞`,"”":`”`,'"':`"`,"＂":`＂`,"‘":`’`,"‚":`‘’`,"'":`'`},Ua=new Set([`'`,`‘`,`’`,`‚`]),Wa=/[\p{L}\p{M}\p{N}]/u,Ga=(e,t)=>t>=0&&t<e.length&&Wa.test(e[t]);function Ka(e,t){return!Ua.has(e[t])||!Ga(e,t-1)&&t+1<e.length&&!/\s/.test(e[t+1])}function qa(e,t){return!Ua.has(e[t])||t>0&&!/\s/.test(e[t-1])&&!Ga(e,t+1)}var Ja=`—–―`,Ya=/[—–―] ?[\p{L}\p{N}¿¡«“"]/uy,Xa=/^[\s.,;:]+/u;function Za(e,t,n){let r=t;for(;n?.has(r)!==!0&&r>0&&/[ \t\u00a0]/.test(e[r-1]);)r--;return r===0||e[r-1]===`
`||n?.has(r)===!0}function Qa(e,t,n){let r=e.indexOf(`
`,t);r===-1&&(r=e.length);for(let e of n??[])e>t&&e<r&&(r=e);return r}function $a(e,t,n){let r=[],i=!0,a=t+1;for(let o=t+1;o<=n;o++)if(!(o<n&&!Ja.includes(e[o]))){if(i){let t=e.slice(a,o),n=a+(t.match(Xa)?.[0].length??0),i=a+t.trimEnd().length;i>n&&r.push({start:n,end:i,after:i})}i=!i,a=o+1}return r}function eo(e,t){let n=[];for(let r=0;r<e.length;r++){let i=e[r];if(Ja.includes(i)){if(Ya.lastIndex=r,!Ya.test(e)||!Za(e,r,t))continue;let i=Qa(e,r,t);n.push(...$a(e,r,i)),r=i-1;continue}let a=Ha[i];if(!a||!Ka(e,r))continue;let o=Ua.has(i),s=1,c=r+1;for(;c<e.length;c++){let t=e[c];if(o&&t===`
`){c=e.length;break}if(t===i&&!a.includes(i)&&Ka(e,c))s++;else if(a.includes(t)&&qa(e,c)&&--s===0)break}c>=e.length||(e.slice(r+1,c).trim()&&n.push({start:r+1,end:c,after:c+1}),r=c)}return n}var to=(e,t)=>t.map(t=>e.slice(t.start,t.end).trim()).join(`
`),no={amp:`&`,lt:`<`,gt:`>`,quot:`"`,apos:`'`,nbsp:` `},ro=e=>e.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi,(e,t)=>{if(t[0]!==`#`)return no[t.toLowerCase()]??e;let n=t[1]===`x`||t[1]===`X`?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return Number.isFinite(n)&&n>0&&n<=1114111?String.fromCodePoint(n):e}),io=e=>ro(e.replace(/\[sound:[^\]]*\]/gi,` `).replace(/<(rt|rp)\b[^>]*>[\s\S]*?<\/\1>/gi,``).replace(/<(script|style)[\s\S]*?<\/\1>/gi,` `).replace(/<br\s*\/?>|<\/(div|p|li)>/gi,` `).replace(/<[^>]*>/g,``)).replace(/\s+/g,` `).trim();function ao(e){return{sounds:[...e.matchAll(/\[sound:([^\]]+)\]/gi)].map(e=>ro(e[1].trim())),images:[...e.matchAll(/<img\b[^>]*?\bsrc\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi)].map(e=>ro((e[1]??e[2]??e[3]).trim())).filter(e=>e&&!/^(https?:|data:)/i.test(e))}}var oo=/ ?([^\s[\]]+?)\[([^\]]+)\]/g,so=e=>/[^\s[\]]\[[^\]]+\]/.test(e),co=e=>e.replace(/<ruby\b[^>]*>([\s\S]*?)<\/ruby>/gi,(e,t)=>t.replace(/<rp\b[^>]*>[\s\S]*?<\/rp>/gi,``).replace(/([^<]*)<rt\b[^>]*>([\s\S]*?)<\/rt>/gi,(e,t,n)=>`${t.trim()}[${n.trim()}]`));function lo(e){return so(e)?{text:e.replace(oo,`$1`),reading:e.replace(oo,`$2`)}:{text:e,reading:``}}var uo=[`word`,`meaning`,`reading`,`example`,`notes`],fo=[[`reading`,/reading|kana|furigana|hiragana|pronunciation|pinyin|romaji|ipa|発音|読み|よみ|읽기|발음/i],[`example`,/example|sentence|context|usage|esempio|ejemplo|frase|例文|例|예문/i],[`meaning`,/meaning|definition|translation|gloss|english|back|answer|significato|significado|traducci|意味|訳|뜻|의미|번역/i],[`word`,/^(word|vocab|vocabulary|expression|term|front|question|kanji|lemma|parola|palabra|単語|語彙|단어|표현)/i],[`notes`,/note|extra|comment|memo|hint|メモ|備考|메모/i]];function po(e){let t={word:-1,meaning:-1,reading:-1,example:-1,notes:-1},n=new Set;for(let[r,i]of fo){let a=e.findIndex((e,t)=>!n.has(t)&&e.trim().toLowerCase()===r),o=a>=0?a:e.findIndex((e,t)=>!n.has(t)&&i.test(e.trim()));o>=0&&(t[r]=o,n.add(o))}let r=()=>e.findIndex((e,t)=>!n.has(t));return t.word<0&&(t.word=r(),t.word>=0&&n.add(t.word)),t.meaning<0&&(t.meaning=r(),t.meaning>=0&&n.add(t.meaning)),t}function mo(e,t){let n=[];for(let r of e){let e=t.get(r.typeId);if(!e)continue;let i=t=>e[t]>=0?co(r.fields[e[t]]??``):``,a=lo(io(i(`word`)));if(!a.text)continue;let o=r.fields.map(ao),s={word:a.text,meaning:lo(io(i(`meaning`))).text,deck:r.deck},c=lo(io(i(`reading`))),l=c.reading||c.text||a.reading,u=lo(io(i(`example`))).text,d=io(i(`notes`)),f=e.example??-1,p=o.flatMap((e,t)=>t===f?[]:e.sounds)[0],m=f>=0?o[f]?.sounds[0]:void 0,h=o.flatMap(e=>e.images)[0];l&&(s.reading=l),u&&(s.example=u),d&&(s.notes=d),p&&(s.sound=p),m&&u&&(s.exampleSound=m),h&&(s.image=h),n.push(s)}return n}function ho(e,t){return e.map(e=>{let n=t.filter(t=>t.typeId===e.id);return{type:e,count:n.length,sample:n[0],mapping:po(e.fields)}}).filter(e=>e.count>0)}var go=e=>typeof e==`string`?e.split(/[,\n]/).map(e=>e.trim()).filter(Boolean):[],_o=e=>go(e).filter(e=>/^[\w:-]+$/.test(e)),vo=e=>RegExp(`<(${e.join(`|`)})\\b[^>]*>([\\s\\S]*?)<\\/\\1\\s*>`,`gi`);function yo(e){let t=[];for(let n of[...e].sort((e,t)=>e.start-t.start)){let e=t[t.length-1];e&&n.start<=e.end?e.end=Math.max(e.end,n.end):n.end>n.start&&t.push({...n})}return t}function bo(e,t){let n=[];for(let r of e){let e=r.start;for(let i of t)i.end<=e||i.start>=r.end||(i.start>e&&n.push({start:e,end:i.start}),e=Math.max(e,i.end));e<r.end&&n.push({start:e,end:r.end})}return n}var xo=(e,t)=>t.reduce((e,t)=>e.slice(0,t.start)+e.slice(t.start,t.end).replace(/[^\n]/g,` `)+e.slice(t.end),e),So=(e,t)=>bo([{start:0,end:e.length}],t).map(t=>e.slice(t.start,t.end).trim()).filter(Boolean).join(`
`),Co=/^\s*(\[[^[\]\n]*[^\s[\]][^[\]\n]*\]|【[^【】\n]+】)\s*$/;function wo(e,t){return t.length?[...e.matchAll(vo(t))].map(e=>({start:e.index,end:e.index+e[0].length})):[]}var To=/[\s*_~`#>|+=-]/;function Eo(e){let t=``,n=[];for(let r=0;r<e.length;r++)To.test(e[r])||(t+=e[r],n.push(r));return{out:t,at:n}}function Do(e,t,n){let r=Eo(io(n[2])).out;if(r.length<2)return null;let i=Eo(io(t.slice(0,n.index))).out.length,a=-1;for(let t=e.out.indexOf(r);t>=0;t=e.out.indexOf(r,t+1))(a<0||Math.abs(t-i)<Math.abs(a-i))&&(a=t);return a<0?null:{start:e.at[a],end:e.at[a+r.length-1]+1}}function Oo(e,t,n){if(!n.length)return[];let r=Eo(e);return[...t.matchAll(vo(n))].map(e=>Do(r,t,e)).filter(e=>!!e)}var ko=e=>[`.TH-render`,...e.skip_blocks?[`pre`,`code`,`details`]:[]].join(`, `);function Ao(e){if(typeof e.checkVisibility!=`function`||!e.checkVisibility())return()=>!1;let t=new Map;return n=>{let r=n.parentElement;if(!r||r===e)return!1;let i=t.get(r);return i===void 0&&t.set(r,i=!r.checkVisibility()),i}}function jo(e){let t=x(),n=ko(t),r=Ut(e),i=Ao(e),a=[],o=0;for(let s of r){let r=o,c=o+s.data.length;o=c;let l=s.parentElement?.closest(n);(l&&l!==e&&e.contains(l)||i(s)||t.skip_brackets&&Co.test(s.data))&&a.push({start:r,end:c})}let s=_o(t.skip_tags);if(s.length){let t=r.map(e=>e.data).join(``),n=O(e),i=n===null?void 0:qe().chat?.[Number(n)]?.mes;a.push(...wo(t,s)),typeof i==`string`&&a.push(...Oo(t,i,s))}return yo(a)}function Mo(e,t=jo(e)){let n=new Set;if(!t.length)return n;let r=0;for(let i of Ut(e)){let e=r+(i.data.length-i.data.trimStart().length),a=r+i.data.trimEnd().length;r+=i.data.length,e<a&&t.some(t=>t.start<=e&&t.end>=a)&&n.add(i)}return n}function No(e,t=k(e),n=jo(e)){return eo(xo(t,n),Gt(e))}function Po(e,t){let n=k(e),r=jo(e);if(t){let t=No(e,n,r);return{text:to(n,t),plain:n,skipped:r,lines:t}}return{text:r.length?So(n,r):Xt(e),plain:n,skipped:r}}function Fo(e,t){let n=e,r=_o(t.skip_tags);return r.length&&(n=n.replace(vo(r),``)),t.skip_blocks&&(n=n.replace(/```[\s\S]*?```/g,``).replace(/<(pre|details)\b[^>]*>[\s\S]*?<\/\1\s*>/gi,``)),t.skip_brackets&&(n=n.split(`
`).filter(e=>!Co.test(e)).join(`
`)),n.replace(/\n{3,}/g,`

`).trim()}var Io=e=>e.normalize(`NFKC`).toLowerCase().replace(/^[\p{P}\p{S}\s]+|[\p{P}\p{S}\s]+$/gu,``).replace(/['’]s$/u,``);function Lo(e,t){let n=new Set;for(let t of e){n.add(Io(t));for(let e of t.split(/[\s\p{P}]+/u))e.length>=2&&n.add(Io(e))}for(let e of t)n.add(Io(e));return n.delete(``),n}function Ro(){let e=qe(),t=[e.name1];if(e.groupId){let n=e.groups?.find(t=>t.id===e.groupId);for(let r of n?.members??[])t.push(e.characters?.find(e=>e.avatar===r)?.name)}else e.name2!==`SillyTavern System`&&t.push(e.name2);return t.filter(e=>typeof e==`string`&&!!e.trim())}function zo(){let e=x(),t=[...e.skip_names?Ro():[],...go(e.skip_words)];return[...new Set(t.map(e=>e.trim()))].filter(e=>e.length<=40).slice(0,20)}function Bo(e){let t=x(),n=go(t.skip_words),r=new Set(n.map(Io)),i=[];for(let t of e.map(e=>e.trim())){let e=Io(t);!e||/[,\n]/.test(t)||r.has(e)||(r.add(e),i.push(t))}return i.length?(t.skip_words=[...n,...i].join(`, `),T(),document.querySelectorAll(`input[data-setting="skip_words"]`).forEach(e=>{e.value=t.skip_words}),document.dispatchEvent(new CustomEvent(`pg:study-scope-change`)),i.length):0}function Vo(){let e=x(),t=Lo(e.skip_names?Ro():[],go(e.skip_words));return(...e)=>t.size>0&&e.some(e=>!!e&&t.has(Io(e)))}function z(){return ta()}function B(e,t=!1){ha({wordbook:e},t)}var Ho=()=>x().wordbook_scope??`chat`,Uo=()=>R()!==`chat`,Wo=()=>u(w()),Go=()=>x().wordbook_lang_only===!1?null:Wo();function V(e=Ho()){let t=Go(),n=M();return z().filter(r=>Tr(r,t)&&(!Uo()||Cr(r,e,n)))}var Ko=()=>z().filter(e=>!wr(e).length).length,qo=()=>{let e=Wo();return z().some(t=>wr(t).length>0&&!wr(t).includes(e))};function Jo(){let e=Wo(),t=z(),n=t.filter(t=>!wr(t).length&&kr(t,e)).length;return n&&B(t),n}function Yo(e){e.forEach(ln)}function Xo(e){let t=M(),n=new Set(e),{wordbook:r,deleted:i}=Ho()===`chat`&&t&&Uo()?Kr(z(),[t],n):qr(z(),n);B(r),Yo(i)}function Zo(e,t,n,r=!1){let i=z(),a=i.findIndex(t=>t.word===e);return a<0?!1:(i[a]=n?lr(i[a],t,n,r):ur(i[a],t),B(i),!0)}function Qo(e,t){let n=new Set(e),r=z();for(let e of r)n.has(e.word)&&(t?e.known=!0:delete e.known);B(r)}function $o(e){let t=new Set(e),n=z(),r=n.filter(e=>t.has(e.word)).map(e=>e.base_form),{wordbook:i,deleted:a}=qr(n,t);a.length&&(B(i),Yo(a)),Bo([...e,...r])}var es=()=>Yr(z());function ts(e){let t=M();if(!t)return 0;let{wordbook:n,moved:r}=Jr(z(),e.filter(e=>e!==t),t);return B(n),r}function ns(e){let{wordbook:t,deleted:n}=Kr(z(),e);return B(t),Yo(n),n.length}var rs=()=>Zr(V());function is(e){let{wordbook:t,removed:n}=Qr(z(),e);return n.length?(B(t),Yo(n),n.length):0}function as(e,t){let n=$r(z(),e,t);return B(n.wordbook),n.formChanged&&ln(e),n}var os=hn(y.wordbook);async function ss(){let e=M(),t=os.get();if(!e||!Array.isArray(t)||R()!==`file`)return 0;let n=Si({wordbook:t}).wordbook.map(({audio:t,example_audio:n,image:r,made_sounds:i,...a})=>({...a,chats:[e]}));return n.length&&B(Gr(z(),n).wordbook),!await Ea()||M()!==e?0:(os.delete(),n.length)}async function cs(){await un();let e=z(),t=!1;e.forEach(e=>{e.conj_cached&&(e.conj_cached=!1,t=!0)}),t&&B(e)}function ls(){return na()}function us(e){ha({sets:e})}function ds(){return`set_`+Date.now()+`_`+Math.random().toString(36).slice(2)}function fs(e){let t=ls(),n=ds();return t.push({id:n,name:e}),us(t),n}function ps(e){us(ls().filter(t=>t.id!==e));let t=z();t.forEach(t=>{t.setIds=(t.setIds||[]).filter(t=>t!==e)}),B(t)}function ms(e,t){let n=z(),r=n.find(t=>t.word===e);if(!r)return;r.setIds??=[];let i=r.setIds.indexOf(t);i===-1?r.setIds.push(t):r.setIds.splice(i,1),B(n)}function hs(e,{quiet:t=!1}={}){let n=z(),r=e.base_form?.trim()||e.word;if(!r?.trim())return null;let a=M(),o=n.find(e=>e.word===r);if(o){let e=Or(o,a);return(kr(o,Wo())||e)&&B(n),t||i(C(e?`wb.addedToChat`:`wb.alreadyIn`,{word:r}),`info`),e?`tagged`:null}let s=e.original_form??(e.word===r?void 0:e.word),c=e.conj_cache;return n.push({word:r,base_form:e.base_form??r,level:e.level??``,meaning:e.meaning,meaning_lang:e.meaning_lang,pos_info:e.pos_info,reading:e.reading,original_form:s,context_meaning:e.context_meaning||(s?e.meaning:void 0),...typeof e.pos==`string`&&e.pos&&{pos:e.pos},...typeof e.ipa==`string`&&e.ipa&&{ipa:e.ipa},...typeof e.notes==`string`&&e.notes&&{notes:e.notes},...typeof e.speaker==`string`&&e.speaker&&{speaker:e.speaker},...Array.isArray(e.collocations)&&e.collocations.length&&{collocations:e.collocations.filter(e=>typeof e==`string`)},setIds:[],chats:a?[a]:[],langs:[Wo()],dateAdded:new Date().toISOString(),conj_cached:!!c}),B(n),c&&cn(r,c,w()),`added`}function gs(e){e.length?Ba(_s(e),`Polyglot_Wordbook.csv`):i(C(`wb.noExport`),`warn`)}function _s(e){let t=e=>String(e||``).replace(/[\n\r]/g,` `).replace(/^[=+\-@\t]/,`'$&`).replace(/"/g,`""`);return[`"word","base_form","meaning","level","original_form","context_meaning"`,...e.map(e=>`"${t(e.word)}","${t(e.base_form)}","${t(e.meaning)}","${t(e.level)}","${t(e.original_form)}","${t(e.context_meaning)}"`)].join(`
`)}function vs(e){e.length?Ba(ys(e),`Polyglot_Flashcards.txt`):i(C(`wb.noExport`),`warn`)}function ys(e){let t=e=>a(String(e||``).replace(/[\t\n\r]/g,` `));return`#separator:tab
#html:true
#tags column:4
`+e.map(e=>{let n=t(e.word),r=t(e.base_form),i=t(e.meaning);return r&&r!==n&&(i+=`<br><br><i style="color:gray;">Base: ${r}</i>`),`${n}\t${i}\t${t(e.level)}\tPolyglot\t${t(e.original_form)}\t${t(e.context_meaning)}`}).join(`
`)}function bs(e){let t=[],n=``,r=!1;for(let i=0;i<e.length;i++){let a=e[i];if(a===`"`){if(r&&e[i+1]===`"`){n+=`""`,i++;continue}r=!r,n+=a}else a===`
`&&!r?(t.push(n),n=``):a===`\r`||(n+=a)}return n.trim()&&t.push(n),t}function xs(e){if(!f(e)||!Array.isArray(e.tenses))return null;let t=e.tenses.filter(e=>f(e)&&Array.isArray(e.rows)&&e.rows.length);return t.length?{base:String(e.base??``),translation:String(e.translation??``),tenses:t}:null}async function Ss(e,t,n,r){let i=await sn(e,t);if(i?.tenses?.length)return i;let{data:a,partial:o}=await n.ai.json({prompt:st(e,t,n.getNativeLang()),signal:r,accept:xs});return o||(await cn(e,a,t),Cs(e)),a}function Cs(e){let t=z(),n=t.find(t=>t.word===e||t.base_form===e);n&&!n.conj_cached&&(n.conj_cached=!0,B(t))}var ws=null;function Ts(e,t){ws?.();let n=document.createElement(`div`);n.className=`pg-conj-overlay`,j(n,A`
        <div class="pg-conj-modal" role="dialog" aria-modal="true" aria-label="${e}">
            <div class="pg-conj-header">
                <span class="pg-conj-base">${e}</span>
                ${t&&A`<span class="pg-conj-lang-badge">${t}</span>`}
                <button class="pg-conj-close" title="Close" aria-label="Close"></button>
            </div>
            <div class="pg-conj-body"></div>
        </div>`),document.body.appendChild(n);let r=new AbortController,i=e=>{e.key===`Escape`&&(e.stopPropagation(),e.preventDefault(),a())},a=()=>{r.abort(),n.remove(),window.removeEventListener(`keydown`,i,!0),ws===a&&(ws=null)};return ws=a,n.addEventListener(`pointerdown`,e=>{e.target===n&&(e.stopPropagation(),a())}),n.querySelector(`.pg-conj-close`)?.addEventListener(`click`,a),window.addEventListener(`keydown`,i,!0),{body:n.querySelector(`.pg-conj-body`),signal:r.signal}}function Es(e,t,n){e.className=t===`ready`?`pg-conj-body`:`pg-conj-body pg-conj-${t}`,j(e,n)}function Ds(e,{base:t,translation:n,tenses:r}){let i=e.closest(`.pg-conj-modal`),a=i?.querySelector(`.pg-conj-base`);a&&t&&(a.textContent=t),a&&n&&!i?.querySelector(`.pg-conj-meaning`)&&a.insertAdjacentElement(`afterend`,Object.assign(document.createElement(`span`),{className:`pg-conj-meaning`,textContent:n})),Es(e,`ready`,A`
        <div class="pg-conj-grid">${r.map(e=>A`
            <div class="pg-conj-tense-col">
                <div class="pg-conj-tense-head">
                    <span class="pg-conj-tense-name">${e.name}</span>
                    <span class="pg-conj-tense-ko">${e.name_native}</span>
                </div>
                <table class="pg-conj-table"><tbody>${(e.rows??[]).map(e=>A`
                    <tr><td class="pg-conj-person">${e.person}</td><td class="pg-conj-form">${e.form}</td></tr>`)}
                </tbody></table>
            </div>`)}
        </div>`)}async function Os(e,t,n,r){let{body:i,signal:a}=Ts(e,r);Es(i,`loading`,A`<i class="fa-solid fa-spinner fa-spin"></i> ${C(`conj.loading`)}`);try{Ds(i,await Ss(e,t,n,a))}catch(e){if(a.aborted)return;let t=e instanceof Error?e.message:String(e);Es(i,`error`,A`<i class="fa-solid fa-triangle-exclamation"></i> ${C(`conj.failed`,{msg:t})}`)}}function ks(e,t,n){return Os(e,t,n,t)}function As(e,t){return Os(e,t.getLang(),t)}var js=null;function Ms(){return js!==null}function Ns(){js?.abort()}var Ps=e=>typeof e==`string`?e.trim():void 0;function Fs(e){let t=Ps(e.pos),n=Ps(e.level)?.toUpperCase();return{meaning:Ps(e.meaning)?.slice(0,200),level:n&&Fe.includes(n)?n:void 0,base_form_verified:Ps(e.base_form_verified),pos:t===void 0?void 0:pe.includes(t)?t:`phrase`,ipa:Ps(e.ipa),collocations:Array.isArray(e.collocations)?e.collocations.filter(e=>typeof e==`string`&&e.trim().length>0).map(e=>e.trim().slice(0,80)).slice(0,4):void 0}}var Is=e=>({pos:e.pos,ipa:e.ipa||void 0,collocations:JSON.stringify(e.collocations??[]),base_form:e.base_form});function Ls(e,t,n,r,i=Is(e)){let a=!1,o=Is(e);!e.meaning?.trim()&&t.meaning&&(e.meaning=t.meaning,e.meaning_lang??=r,a=!0),!e.level&&t.level&&(e.level=t.level,a=!0),t.pos&&e.pos!==t.pos&&o.pos===i.pos&&(e.pos=t.pos,a=!0);let s=t.ipa||void 0;if(t.ipa!==void 0&&s!==e.ipa&&o.ipa===i.ipa&&(e.ipa=s,a=!0),t.collocations&&o.collocations===i.collocations&&(t.collocations.length>0||e.collocations&&e.collocations.length>0)){let n=t.collocations.length>0?t.collocations:void 0;JSON.stringify(e.collocations)!==JSON.stringify(n)&&(e.collocations=n,a=!0)}return t.base_form_verified&&t.base_form_verified!==e.base_form&&o.base_form===i.base_form&&(e.base_form=t.base_form_verified,e.conj_cached=!1,ln(n),a=!0),a}var Rs=e=>({needsMeaning:!e.meaning?.trim(),needsLevel:!e.level}),zs=10,Bs=3,Vs=4,Hs=e=>!(e instanceof ee),Us=e=>f(e)?Fs(e):null,Ws=e=>{if(!Array.isArray(e))return null;let t=e.filter(e=>f(e)&&typeof e.word==`string`);return t.length?t:null};function Gs(e,t,n){let r=z(),i=new Map(r.map(e=>[e.word,e])),a=!1;for(let{word:r,result:o}of e){let e=i.get(r);e&&Ls(e,o,r,t,n.get(r))&&(a=!0)}a&&B(r)}async function Ks(e,t={}){js?.abort();let n=new AbortController;js=n;let{signal:r}=n,i=e.getLang(),a=e.getNativeLang(),o=t.words?new Set(t.words):null,s=z().filter(e=>o?o.has(e.word):e.level!==`grammar`&&e.level!==`sentence`),c=s.length,l=0,u=0,d=(e,n=1)=>{l+=n,t.onProgress?.(l,c,e)},f=0,p=0,m,h=()=>{f=0,p=0},ee=e=>{m=e,n.abort()},te=e=>{if(r.aborted)return;let t=e instanceof Error?e.message:String(e);(Hs(e)?++f>=Bs:++p>=Vs)&&ee(t)},ne=async t=>{let n=new Map([[t.word,Is(t)]]);try{let{data:o,partial:s}=await e.ai.json({prompt:mt(t.word,t.base_form,i,a,Rs(t)),signal:r,accept:Us});if(s){console.warn(`[Polyglot] reanalysis reply was cut off; not applied for`,t.word),u++,++p>=Vs&&ee(`the replies were cut off (raise the max tokens)`);return}h(),Gs([{word:t.word,result:o}],a,n)}catch(e){if(r.aborted)return;console.warn(`[Polyglot] reanalysis failed for`,t.word,e),u++,te(e)}};try{for(let n=0;n<s.length&&!r.aborted;n+=zs){let o=s.slice(n,n+zs);t.onProgress?.(l,c,o[0].word);let u=new Set,f=new Map(o.map(e=>[e.word,Is(e)]));try{let{data:t,partial:n}=await e.ai.json({prompt:pt(o.map(e=>({word:e.word,base_form:e.base_form,...Rs(e)})),i,a),signal:r,accept:Ws,merge:Je(e=>e.word)});if(n||h(),!n){let e=t.filter(e=>f.has(e.word));Gs(e.map(e=>({word:e.word,result:Fs(e)})),a,f),u=new Set(e.map(e=>e.word))}}catch(e){if(r.aborted||(te(e),r.aborted))break;console.warn(`[Polyglot] reanalysis batch failed — retrying word by word`,e)}let p=o.filter(e=>u.has(e.word));p.length&&d(p[p.length-1].word,p.length);for(let e of o.filter(e=>!u.has(e.word))){if(r.aborted)break;await ne(e),d(e.word)}}}finally{js===n&&(js=null),t.onDone?.(l,c,r.aborted,m,u)}}var qs=new Set;function Js(){qs.forEach(e=>e())}function Ys(e,t,n){let r=()=>typeof e==`function`?e():e,i={text:t,ratio:0};function a(){let e=r();return e?(e.querySelector(`.pg-run-progress`)||(j(e,A`
                <div class="pg-run-progress">
                    <span class="pg-run-text" aria-live="polite"></span>
                    <button class="pg-run-stop">${C(`ann.stop`)}</button>
                </div>
                <div class="pg-run-track"><div class="pg-run-fill"></div></div>`),e.querySelector(`.pg-run-stop`)?.addEventListener(`click`,n)),e.hidden=!1,e):null}function o(){let e=a(),t=e?.querySelector(`.pg-run-text`),n=e?.querySelector(`.pg-run-fill`);t&&(t.textContent=i.text),n&&(n.style.width=`${Math.round(i.ratio*100)}%`)}return o(),qs.add(o),{update(e,t,n){i={text:e,ratio:n?t/n:0},o()},close(){qs.delete(o);let e=r();e&&(e.hidden=!0,j(e,A``))}}}var Xs=e=>V().filter(t=>e?e.has(t.word):t.level!==`grammar`&&t.level!==`sentence`);async function Zs({bar:e,words:t,confirm:n,onBusy:r,onDone:a}){if(Ms()){Ns();return}let o=Xs(t&&new Set(t)).map(e=>e.word),s=o.length;if(!s){i(C(`wb.reanalyseNone`),`warn`);return}if(n&&!await g(C(`wb.reanalyseConfirm`,{n:s}),{yes:C(`wb.reanalyseStart`),no:C(`confirmNo`)}))return;let c=Ys(e,C(`wb.reanalyseProgress`,{done:0,total:s}),Ns);r?.(!0),await Ks({ai:je,getLang:w,getNativeLang:S},{words:o,onProgress(e,t,n){c.update(C(`wb.reanalyseProgress`,{done:e,total:t,word:n}),e,t)},onDone(e,t,n,o,s){c.close(),r?.(!1),o?i(C(`wb.reanalyseFailed`,{done:e,total:t,msg:o}),`err`,6e3):n?i(C(`wb.reanalyseStopped`,{done:e,total:t}),`warn`,3e3):s?i(C(`wb.reanalyseSome`,{n:e-s,failed:s}),`warn`,6e3):i(C(`wb.reanalyseDone`,{n:e}),`ok`,3e3),a?.()}})}var Qs=e=>e.toLowerCase().normalize(`NFD`).replace(/\p{M}/gu,``).normalize(`NFC`).replace(/[^\p{L}\p{N}]/gu,``);function $s(e,t){if(typeof Intl.Segmenter==`function`)try{return[...new Intl.Segmenter(t||void 0,{granularity:`word`}).segment(e)].map(e=>({text:e.segment,word:!!e.isWordLike&&!!Qs(e.segment)}))}catch{}return e.split(/([\p{L}\p{M}\p{N}'’-]+)/u).filter(Boolean).map(e=>({text:e,word:!!Qs(e)}))}var ec=(e,t)=>e===t||e.length>=4&&t.length>=4&&se(e,t)<=1;function tc(e,t,n){let r=$s(e,n),i=$s(t,n).filter(e=>e.word).map(e=>Qs(e.text));if(!i.length)return r;let a=r.filter(e=>e.word),o=a.map(e=>Qs(e.text)),s=Array.from({length:o.length+1},()=>Array(i.length+1).fill(0));for(let e=o.length-1;e>=0;e--)for(let t=i.length-1;t>=0;t--)s[e][t]=ec(o[e],i[t])?s[e+1][t+1]+1:Math.max(s[e+1][t],s[e][t+1]);let c=new Set;for(let e=0,t=0;e<o.length&&t<i.length;)ec(o[e],i[t])?(c.add(e),e++,t++):s[e+1][t]>=s[e][t+1]?e++:t++;return a.forEach((e,t)=>{c.has(t)||(e.missed=!0)}),r}var nc=[[[`spanish`,`español`],`es-ES`],[[`italian`,`italiano`],`it-IT`],[[`french`,`français`],`fr-FR`],[[`german`,`deutsch`],`de-DE`],[[`japanese`,`日本語`],`ja-JP`],[[`chinese`,`中文`],`zh-CN`],[[`korean`,`한국어`],`ko-KR`],[[`portuguese`],`pt-PT`]];function rc(e){let t=e.toLowerCase();return t.includes(`english`)?`en-US`:nc.find(([e])=>e.some(e=>t.includes(e)))?.[1]??null}var ic=e=>rc(e)??`en-US`,ac=.85,oc=12,sc=[[`ja`,8],[`zh`,8],[`ko`,10]],cc=15;function lc(e,t=ac){let n=sc.find(([t])=>e.startsWith(t))?.[1]??cc;return Math.floor(n*t*oc)}var uc=[(e,t)=>typeof Intl.Segmenter==`function`?[...new Intl.Segmenter(t,{granularity:`sentence`}).segment(e)].map(e=>e.segment):e.split(/(?<=[.!?。！？…]\s*)/),e=>e.split(/(?<=[,;:，、；：])/),e=>e.split(/(?<=\s)/)];function dc(e,t,n,r=0){if(e.length<=n)return[e];let i=uc[r];return i?i(e,t).flatMap(e=>dc(e,t,n,r+1)):Array.from({length:Math.ceil(e.length/n)},(t,r)=>e.slice(r*n,(r+1)*n))}function fc(e,t,n=lc(t)){let r=[];for(let i of dc(e.trim(),t,n)){let e=r.length-1;e>=0&&r[e].length+i.length<=n?r[e]+=i:r.push(i)}return r.map(e=>e.trim()).filter(Boolean)}var pc=[],mc=null,hc=null,gc=e=>{e.startsWith(`blob:`)&&URL.revokeObjectURL(e)},_c=e=>1e4+e.length*250;function vc(){mc&&(mc.pause(),gc(mc.src)),mc=null,`speechSynthesis`in window&&window.speechSynthesis.cancel(),hc?.(),hc=null}function yc(){hc?.();let e=()=>{},t=new Promise(t=>{e=()=>{hc===e&&(hc=null),t()}});return hc=e,{done:e,ended:t}}function bc(e,t){return new Promise(n=>{let r=yc(),i=!1;r.ended.then(()=>{i||n()});let a=mc=new Audio(e);a.onended=()=>{gc(e),r.done()},a.play().catch(async o=>{gc(e);try{mc===a&&(mc=null,i=!0,await t(o))}finally{r.done(),n()}})})}function xc(e,t,n=``){if(!(`speechSynthesis`in window))return i(C(`tts.noSupport`),`err`,2500),Promise.resolve();window.speechSynthesis.cancel();let r=yc(),a=n?window.speechSynthesis.getVoices?.().find(e=>e.name===n):void 0,o=fc(e,t).map(e=>Object.assign(new SpeechSynthesisUtterance(e),{lang:a?.lang??t,rate:ac},a&&{voice:a}));if(pc=o,!o.length)return r.done(),r.ended;let s=o[o.length-1];s.onend=s.onerror=()=>{pc===o&&(pc=[]),r.done()};let c=setTimeout(r.done,_c(e));return o.forEach(e=>window.speechSynthesis.speak(e)),r.ended.finally(()=>clearTimeout(c))}function Sc(e){if(!(`speechSynthesis`in window))return[];let t=e.slice(0,2).toLowerCase();return(window.speechSynthesis.getVoices?.()??[]).filter(e=>e.lang.toLowerCase().startsWith(t)).map(e=>e.name)}function Cc(e){return e.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``).normalize(`NFC`).replace(/[^\p{L}\p{N}\s'-]/gu,``).replace(/\s+/g,` `).trim()}function wc(e,t){let n=Cc(e);return n?ge(n,Cc(t)):0}var Tc=[{min:85,grade:`excellent`,label:`tts.perfect`},{min:65,grade:`good`,label:`tts.great`},{min:40,grade:`fair`,label:`tts.keep`},{min:0,grade:`poor`,label:`tts.tryAgain`}];function Ec(e){return Tc.find(t=>e>=t.min)??Tc[Tc.length-1]}var Dc=1e4;function Oc(){return!!(window.SpeechRecognition||window.webkitSpeechRecognition)}var kc=null;function Ac(e){kc=e}function jc(){return kc}function Mc(){kc?.abort(),kc=null}function Nc(e,t,n=``){e.className=t===`idle`?`pg-pronun-result`:`pg-pronun-result pg-pronun-${t}`,e.textContent=n}function Pc(e,t,n,r,i){let{grade:a,label:o}=Ec(t),s=tc(r,n,i),c=s.filter(e=>e.word).length>1;e.className=`pg-pronun-result pg-pronun-${a}`,j(e,A`
        <span class="pg-pronun-score">${t}</span>
        <span class="pg-pronun-label">${C(o)}</span>
        ${c?A`<span class="pg-pronun-words" title="${n}">${s.map(e=>e.missed?A`<span class="pg-pronun-missed" role="button" tabindex="0" data-action="say-word" data-word="${e.text}" title="${C(`speak.missed`)}">${e.text}</span>`:e.text)}</span>`:A`<span class="pg-pronun-heard">"${n}"</span>`}`)}function Fc(e,t){e.dataset.active=String(t),e.textContent=t?`🔴`:`🎤`,e.title=C(t?`tts.listening`:`fl.mic`)}function Ic(e){return Array.from(e.results[0]??[]).reduce((e,t)=>!e||t.confidence>e.confidence?t:e,void 0)?.transcript??``}function Lc(e,t,n,r,i){let a=window.SpeechRecognition||window.webkitSpeechRecognition;if(!a)return Nc(r,`error`,C(`tts.noRecog`)),null;let o=Object.assign(new a,{lang:ic(t),continuous:!1,interimResults:!1,maxAlternatives:3}),s=!1,c=()=>!s&&(s=!0),l=()=>document.contains(r);Fc(n,!0),Nc(r,`listening`,C(`tts.listening`));let u=e=>{e.stopPropagation(),o.abort()};n.onclick=u;let d=e=>{Nc(r,`error`,e),i?.()};o.onresult=t=>{if(!l()||!c())return;let n=Ic(t);Pc(r,wc(e,n),n.trim(),e,o.lang),i?.()},o.onerror=e=>{l()&&c()&&(e.error===`aborted`||e.error===`no-speech`?(Fc(n,!1),Nc(r,`idle`)):d(e.error===`not-allowed`?C(`tts.noMic`):C(`tts.recogError`,{err:e.error})))};let f=setTimeout(()=>{c()&&(o.abort(),l()&&(d(C(`tts.noRecog`)),Fc(n,!1)))},Dc);return o.onend=()=>{clearTimeout(f),n.onclick===u&&(n.onclick=null),l()&&(c()&&d(C(`tts.noSpeech`)),Fc(n,!1))},o.start(),o}var Rc=[`host`,`elevenlabs`,`google`,`openai`,`fish`],zc=6e4,Bc={elevenlabsModel:`eleven_multilingual_v2`,openaiUrl:`https://api.openai.com/v1`,openaiModel:`gpt-4o-mini-tts`,openaiVoice:`alloy`,fishModel:`s2-pro`},Vc=[`0.75`,`0.9`,`1`];function Hc(e){let t=e.voice_provider??`browser`,n=Number(Vc.includes(e.voice_speed??``)?e.voice_speed:`0.9`),r=(r,i,a,o)=>({provider:t,key:(r??``).trim(),voice:(i??``).trim(),model:(a??``).trim(),baseUrl:(o??``).trim(),speed:n,proxy:!!e.voice_proxy});switch(t){case`elevenlabs`:return r(e.voice_el_key,e.voice_el_voice,e.voice_el_model);case`google`:return r(e.voice_gg_key,e.voice_gg_voice);case`openai`:return r(e.voice_oa_key,e.voice_oa_voice,e.voice_oa_model,e.voice_oa_url);case`fish`:return r(e.voice_fish_key,e.voice_fish_voice,e.voice_fish_model);case`host`:return r(``,e.voice_host_voice);default:return r(``,e.voice_st_voice)}}function Uc(e){if(!Rc.includes(e.provider)||e.provider===`host`)return``;let t=e.provider===`openai`&&e.baseUrl&&!e.baseUrl.startsWith(Bc.openaiUrl);return!e.key&&!t?`key`:e.provider===`elevenlabs`&&!e.voice?`voice`:``}var Wc=(e,t,n)=>Math.min(n,Math.max(t,e)),Gc=e=>{let t=e.split(`-`)[0].toLowerCase();return t===`cmn`||t===`yue`?`zh`:t},Kc=e=>/^[a-z]{2,3}-[A-Z]{2}/.exec(e)?.[0];function qc(e,t,n){let r=e=>JSON.stringify(e);switch(e.provider){case`elevenlabs`:return{url:`https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(e.voice)}?output_format=mp3_44100_128`,headers:{"xi-api-key":e.key,"Content-Type":`application/json`,Accept:`audio/mpeg`},body:r({text:t,model_id:e.model||Bc.elevenlabsModel,voice_settings:{stability:.5,similarity_boost:.75,speed:Wc(e.speed,.7,1.2)}}),json:!1};case`google`:{let i=e.voice&&(!n||Gc(Kc(e.voice)??``)===Gc(n))?e.voice:``;return{url:`https://texttospeech.googleapis.com/v1/text:synthesize`,headers:{"X-Goog-Api-Key":e.key,"Content-Type":`application/json`},body:r({input:{text:t},voice:{languageCode:i&&Kc(i)||n||`en-US`,...i&&{name:i}},audioConfig:{audioEncoding:`MP3`,speakingRate:Wc(e.speed,.25,4)}}),json:!0}}case`openai`:return{url:`${(e.baseUrl||Bc.openaiUrl).replace(/\/+$/,``)}/audio/speech`,headers:{"Content-Type":`application/json`,...e.key&&{Authorization:`Bearer ${e.key}`}},body:r({model:e.model||Bc.openaiModel,input:t,voice:e.voice||Bc.openaiVoice,speed:Wc(e.speed,.25,4),response_format:`mp3`}),json:!1};case`fish`:return{url:`https://api.fish.audio/v1/tts`,headers:{Authorization:`Bearer ${e.key}`,"Content-Type":`application/json`,model:e.model||Bc.fishModel},body:r({text:t,...e.voice&&{reference_id:e.voice},format:`mp3`,mp3_bitrate:128,prosody:{speed:Wc(e.speed,.5,2),volume:0}}),json:!1};default:throw Error(`not a direct voice service: ${e.provider}`)}}function Jc(e,t,n){return[e.provider,e.voice,e.model,e.baseUrl,e.speed,n,t].join(``)}var Yc=class extends Error{network;constructor(e,t=!1){super(e),this.network=t}};async function Xc(e){let t=await e.text().catch(()=>``);try{let e=JSON.parse(t),n=e=>typeof e==`string`?e:e?.message;return(n(e.error)??n(e.detail)??e.message??t).slice(0,200)}catch{return t.slice(0,200)}}var Zc=e=>Uint8Array.from(atob(e),e=>e.charCodeAt(0));async function Qc(e,t,n,r){let i,a=Oe(n.signal,zc);try{i=await fetch(e.proxy?`/proxy/${t}`:t,{...n,signal:a,headers:e.proxy?{...r,...n.headers}:n.headers})}catch(e){throw n.signal?.aborted?e:a.aborted?new Yc(`no answer within ${zc/1e3} s`):new Yc(String(e.message??e),!0)}if(!i.ok)throw new Yc(`${i.status} ${await Xc(i)}`.trim());return i}var $c=/json|html|text\//i,el=(e,t,n)=>[...n].every((n,r)=>e[t+r]===n.charCodeAt(0));function tl(e){return el(e,0,`ID3`)?`mp3`:el(e,0,`RIFF`)&&el(e,8,`WAVE`)?`wav`:el(e,0,`OggS`)?el(e,28,`OpusHead`)?`opus`:`ogg`:el(e,0,`fLaC`)?`flac`:el(e,4,`ftyp`)?`m4a`:e[0]===26&&e[1]===69&&e[2]===223&&e[3]===163?`webm`:e[0]===255&&(e[1]&224)==224?e[1]&6?`mp3`:`aac`:null}async function nl(e,t,n,r={},i){if(e.provider===`host`){if(!b.ai)throw new Yc(`no voice service here`);let n=await b.ai.speak(t,e.voice,Oe(i,zc));if(!tl(n))throw new Yc(`not a sound`);return n}let a=qc(e,t,n),o=await Qc(e,a.url,{method:`POST`,headers:a.headers,body:a.body,signal:i},r);if(a.json){let e=await o.json().catch(()=>null);if(!e?.audioContent)throw new Yc(`no audio in the answer`);return Zc(e.audioContent)}let s=o.headers.get(`content-type`)??``;if($c.test(s))throw new Yc(`not a sound (${s.split(`;`)[0]}): ${(await Xc(o)).slice(0,120)}`);let c=new Uint8Array(await o.arrayBuffer());if(!c.length)throw new Yc(`empty answer`);if(!/^audio\//i.test(s)&&!tl(c))throw new Yc(`not a sound: ${new TextDecoder().decode(c.slice(0,120))}`);return c}async function rl(e,t,n={}){if(e.provider===`host`)return b.ai?.voices()??[];let r=async(t,r)=>(await Qc(e,t,{headers:r},n)).json();return e.provider===`elevenlabs`?((await r(`https://api.elevenlabs.io/v1/voices`,{"xi-api-key":e.key})).voices??[]).map(e=>({id:e.voice_id,label:e.name})):e.provider===`google`?((await r(`https://texttospeech.googleapis.com/v1/voices${t?`?languageCode=${encodeURIComponent(t)}`:``}`,{"X-Goog-Api-Key":e.key})).voices??[]).filter(e=>!t||!e.languageCodes||e.languageCodes.some(e=>Gc(e)===Gc(t))).map(e=>({id:e.name,label:`${e.name}${e.ssmlGender?` (${e.ssmlGender.toLowerCase()})`:``}`})):[]}function il(){let e=Hc(x());return Rc.includes(e.provider)?Uc(e)||(R()===`file`?``:`storage`):`service`}var al=()=>![`service`,`storage`].includes(il()),ol=new Map,sl=60,cl=new Map;async function ll(e,t,{signal:n,fresh:r=!1,cache:i=!0,voice:a}={}){let o={...Hc(x()),...a&&{voice:a}},s=rc(t)??``,c=Jc(o,`${t}\u0002${e}`,s),l=r?void 0:ol.get(c);if(l)return l;let u=!n&&!r,d=u?cl.get(c):void 0;if(d)return d;let f=nl(o,e,s,de(),n);u&&cl.set(c,f);try{let e=await f;return i&&(ol.delete(c),ol.set(c,e),ol.size>sl&&ol.delete(ol.keys().next().value)),e}finally{cl.get(c)===f&&cl.delete(c)}}var ul=e=>mr(z().find(t=>t.word===e.word),e);async function dl(e){let t=Sn(e,`voice.${tl(e)??`mp3`}`);return(await En([t])).has(t)?t:(Fn([t]),await fe(t,e)===`ok`?t:null)}function fl(e,t,n=!1){jn([t]);let r=z(),i=r.findIndex(t=>t.word===e.word);return i<0||!mr(r[i],e)?!1:(r[i]=lr(r[i],e.field,t,!0),B(r,n),!0)}async function pl(e,t){if(R()!==`file`||!ul(e))return`skipped`;let n=await dl(t);return n?fl(e,n)?`stored`:`skipped`:`failed`}async function ml(e){return pl(e,await ll(e.text,e.lang,{fresh:!0,cache:!1}))}var hl=3,gl=null,_l=()=>gl!==null,vl=()=>gl?.abort();async function yl(e,t,n){if(gl)throw Error(`a sound run is already active`);let r=gl=new AbortController,i={made:0,failed:0,stopped:!1,gaveUp:!1},a=0,o=!1,s=(e,t=!1)=>{i.failed++,i.error=e,o=t||++a>=hl};try{for(let[c,l]of e.entries()){if(n(c,e.length),r.signal.aborted)break;if(o){i.gaveUp=!0;break}if(R()!==`file`){s(`storage`,!0),i.gaveUp=!0;break}if(ul(l))try{let e=await dl(await ll(l.text,l.lang,{signal:r.signal,fresh:t,cache:!1}));if(!e){s(`upload`);continue}fl(l,e,!0)&&i.made++,a=0}catch(e){if(r.signal.aborted)break;s(e.message,e instanceof Yc&&e.network)}}}finally{i.stopped=r.signal.aborted,gl=null,i.made&&B(z())}return i}var bl={service:`snd.needService`,key:`snd.needKey`,voice:`snd.needVoice`,storage:`snd.needStorage`};function xl(){let e=il();return e&&i(C(bl[e]),`warn`,4e3),!e}async function Sl(e,t){let n=t.length-e.length;if(!e.length&&!n)return i(C(`snd.none`),`info`,3e3),null;let r=_r(e),a=[e.length?C(`snd.askMissing`,{words:r.audio,examples:r.example_audio,chars:gr(e).toLocaleString()}):C(`snd.allHave`),n>0?C(`snd.askRemake`,{n}):``,C(`snd.cost`)].filter(Boolean).join(`

`),o=[{value:`no`,label:C(`confirmNo`)}];n>0&&o.push({value:`remake`,label:C(`snd.remakeAll`),primary:!e.length}),e.length&&o.push({value:`missing`,label:C(`snd.makeMissing`),primary:!0});let s=await We(a,o);return s===`no`?null:s}var Cl={upload:()=>C(`snd.uploadFailed`),storage:()=>C(`snd.needStorage`)};function wl(e,t){let n=e.error&&(Cl[e.error]?.()??e.error);e.gaveUp?i(C(`snd.failed`,{done:e.made,total:t,msg:n??``}),`err`,6e3):e.stopped?i(C(`snd.stopped`,{done:e.made,total:t}),`warn`,3e3):e.failed?i(C(`snd.doneSome`,{n:e.made,failed:e.failed,msg:n??``}),`warn`,6e3):i(C(`snd.done`,{n:e.made}),`ok`,3e3)}var Tl=(e,t)=>hr(z().filter(t=>e.has(t.word)),t,w());async function El({bar:e,words:t,onDone:n}){if(_l()){i(C(`snd.running`),`info`,3e3);return}if(!xl())return;let r=new Set(t),a=await Sl(Tl(r,`missing`),Tl(r,`remake`));if(!a||_l())return;let o=Tl(r,a),s=Ys(e,C(`snd.progress`,{done:0,total:o.length}),vl);try{wl(await yl(o,a===`remake`,(e,t)=>s.update(C(`snd.progress`,{done:e,total:t}),e,t)),o.length)}finally{s.close(),n?.()}}var H=[.212,1.2931,2.3065,8.2956,6.4133,.8334,3.0194,.001,1.8722,.1666,.796,1.4835,.0614,.2629,1.6483,.6014,1.8729,.5425,.0912,.0658,.1542],Dl=.9,Ol=36500,kl=.001,Al=864e5,jl=4,Ml=e=>Math.round(e*1e8)/1e8,Nl=(e,t,n)=>Math.min(Math.max(e,t),n),Pl=-H[20],Fl=Ml(Math.exp(Math.log(.9)/Pl)-1),Il=Ml((Dl**(1/Pl)-1)/Fl),Ll=(e,t)=>Ml((1+Fl*e/t)**+Pl),Rl=e=>Math.max(H[e-1],.1),zl=e=>Ml(H[4]-Math.exp((e-1)*H[5])+1);function Bl(e,t){let n=e+Ml(-H[6]*(t-3)*(10-e)/9);return Nl(Ml(H[7]*zl(4)+(1-H[7])*n),1,10)}function Vl(e,t,n,r){let i=r===2?H[15]:1,a=r===4?H[16]:1;return Ml(Nl(t*(1+Math.exp(H[8])*(11-e)*t**+-H[9]*(Math.exp((1-n)*H[10])-1)*i*a),kl,Ol))}function Hl(e,t,n){return Ml(Nl(H[11]*e**+-H[12]*((t+1)**+H[13]-1)*Math.exp((1-n)*H[14]),kl,Ol))}function Ul(e,t,n){if(!e)return{difficulty:Nl(zl(n),1,10),stability:Rl(n)};let r=Ll(t,e.stability),i=n===1?Nl(Ml(e.stability),kl,Hl(e.difficulty,e.stability,r)):Vl(e.difficulty,e.stability,r,n);return{difficulty:Bl(e.difficulty,n),stability:i}}function Wl(e,t){let n=1;for(let[t,r,i]of[[2.5,7,.15],[7,20,.1],[20,1/0,.05]])n+=i*Math.max(Math.min(e,r)-t,0);e=Math.min(e,Ol);let r=Math.max(2,Math.round(e-n)),i=Math.min(Math.round(e+n),Ol);return e>t&&(r=Math.max(r,t+1)),{min:Math.min(r,i),max:i}}function Gl(e,t,n){let r=Math.min(Math.max(1,Math.round(e*Il)),Ol);if(n===null||r<2.5)return r;let{min:i,max:a}=Wl(r,t);return Math.floor(n*(a-i+1)+i)}function Kl(e,t,n){let r=e?t:0,i=[1,2,3,4].map(t=>Ul(e,r,t)),[a,o,s,c]=i.map(e=>Gl(e.stability,r,n)),l=Math.min(a,o),u=Math.max(o,l+1),d=Math.max(s,u+1);return[l,u,d,Math.max(c,d+1)].map((e,t)=>({memory:i[t],days:e}))}function ql(e){let t=new Date(e);return t.getHours()<jl&&t.setDate(t.getDate()-1),Math.round(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())/Al)}function Jl(e){let t=new Date(e*Al);return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),jl).getTime()}var Yl=e=>new Date(e*Al).toISOString().slice(0,10),Xl=e=>typeof e==`number`&&Number.isFinite(e);function Zl(e,t){let n=Math.max(t,kl)*Fl/(.9**(1/Pl)-1),r=11-(e-1)/(Math.exp(H[8])*n**+-H[9]*Math.expm1(.1*H[10]));return{stability:Nl(n,kl,Ol),difficulty:Nl(r,1,10)}}function Ql(e){return Xl(e.srs_stability)&&Xl(e.srs_difficulty)?{stability:Nl(e.srs_stability,kl,Ol),difficulty:Nl(e.srs_difficulty,1,10)}:Xl(e.srs_reviewed_at)?Zl(Xl(e.srs_ease)?e.srs_ease:2.5,Xl(e.srs_interval)?e.srs_interval:1):null}var $l=e=>Ql(e)===null,U=e=>e.level!==`grammar`&&e.level!==`sentence`,eu=e=>e.known===!0||(Ql(e)?.stability??0)>=21,tu=e=>$l(e)&&e.known!==!0,nu=e=>eu(e)?`known`:$l(e)?`new`:`learning`,ru=e=>(e.srs_lapses??0)>=4&&!eu(e),iu=(e,t)=>Xl(e)?Math.max(0,ql(t)-ql(e)):0;function au(e){return Dt(`${e.word}|${e.srs_reviewed_at??0}`)/2**32}var ou=(e,t)=>Kl(Ql(e),iu(e.srs_reviewed_at,t),au(e)),su=(e,t=Date.now())=>ou(e,t).map(e=>e.days);function cu(e,t,n=Date.now()){let r=$l(e),i=ou(e,n)[t];return t===0&&!r&&iu(e.srs_reviewed_at,n)>0&&(e.srs_lapses=(e.srs_lapses??0)+1),e.srs_stability=i.memory.stability,e.srs_difficulty=i.memory.difficulty,e.srs_due=Jl(ql(n)+i.days),e.srs_reviewed_at=n,delete e.srs_interval,delete e.srs_ease,delete e.srs_streak,{requeue:t===0,wasNew:r}}var lu=e=>!$l(e)&&e.known!==!0,uu=(e,t)=>lu(e)&&(e.srs_due??0)<=t,du=(e,t=Date.now())=>e.filter(e=>uu(e,t)).length;function fu(e,t,n=Date.now()){let r=e.filter(e=>uu(e,n)).sort((e,t)=>(e.srs_due??0)-(t.srs_due??0)),i=e.filter(tu).sort((e,t)=>(e.dateAdded??``).localeCompare(t.dateAdded??``));return[...r,...i.slice(0,Math.max(0,t))]}function pu(e,t,n=Date.now()){let r=ql(n),i=Array(t).fill(0);for(let n of e){if(!lu(n))continue;let e=ql(n.srs_due??0)-r;e>=1&&e<=t&&i[e-1]++}return i}function mu(e,t=Date.now()){let n=pu(e,7,t);return{tomorrow:n[0],week:n.reduce((e,t)=>e+t,0)}}var hu=()=>({level:`all`,setId:`all`,pos:``,query:``,missed:!1,noSound:!1,status:`all`});function gu(e){return e.level!==`all`||e.setId!==`all`||!!e.pos||!!e.query.trim()||e.missed||e.noSound||e.status!==`all`}function _u(e,t){return t===`all`?!0:t===`grammar`?!e.level||e.level===`grammar`:e.level===t}function vu(e,t){let n=e=>!!e&&e.toLowerCase().includes(t);return n(e.word)||n(e.base_form)||n(e.meaning)||n(e.notes)||(e.collocations??[]).some(n)}var yu=(e,t,n)=>n&&t.status!==`known`&&!t.query.trim()&&U(e)&&nu(e)===`known`;function bu(e,t,n=!1){let r=t.query.trim().toLowerCase();return e.filter(e=>!yu(e,t,n)&&_u(e,t.level)&&(!t.pos||e.pos===t.pos)&&(!t.missed||ru(e))&&(!t.noSound||dr(e))&&(t.status===`all`||U(e)&&nu(e)===t.status)&&(t.setId===`all`||(e.setIds??[]).includes(t.setId))&&(!r||vu(e,r))).reverse()}function xu(e,t){let n=t.trim();if(!n||!e)return null;let r=new RegExp(n.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),`iu`).exec(e);return r?[e.slice(0,r.index),r[0],e.slice(r.index+r[0].length)]:null}var Su=e=>{let t=x().voice_cast?.[e];return t&&typeof t==`object`?t:{}};function Cu(e,t){if(!t)return``;let n=Su(e)[t];return typeof n==`string`?n.trim():``}function wu(e,t,n){let r=x(),i={...Su(e)};n.trim()?i[t]=n.trim():delete i[t],r.voice_cast={...r.voice_cast??{},[e]:i},T()}var Tu=e=>Object.keys(Su(e));function Eu(){let e=qe();return e.groupId?(e.groups?.find(t=>t.id===e.groupId)?.members??[]).map(t=>e.characters?.find(e=>e.avatar===t)?.name).filter(e=>!!e):e.name2?[e.name2]:[]}var Du=`disabled`;function Ou(){let e=He.tts,t=typeof e?.currentProvider==`string`?e.currentProvider:``,n=e?.[t]?.voiceMap,r=typeof n==`string`?n.split(`,`).map(e=>e.split(`:`).map(e=>e.trim())):n&&typeof n==`object`?Object.entries(n):[];return new Set(r.filter(([e,t])=>e&&typeof t==`string`&&t&&t!==Du).map(([e])=>e))}function ku(e,t){return e&&Ou().has(e)?e:t}var Au=0,ju=-1;function Mu(e){let t=e instanceof Yc&&e.network&&!x().voice_proxy;i(C(t?b.stVoice?`tts.blocked`:`tts.blockedDirect`:`tts.failed`,{msg:e.message}),`err`,6e3)}function Nu(e,t){let n=be.commands?.speak;if(!n||He.tts?.enabled!==!0)return!1;try{let r=e.map(e=>`"${e.replace(/["“”]/g,``)}"`).join(` `);return Promise.resolve(n.callback(t?{voice:t}:{},r)).catch(()=>{}),!0}catch{return!1}}async function Pu(e,t,n,r,a){let o=ic(t),s=Hc(x()),c=Cu(s.provider,a);if(s.provider===`st`){if(Nu([e],ku(a,s.voice)))return;ju!==r&&i(C(`tts.stOff`),`warn`,3500),ju=r}if(!Rc.includes(s.provider))return xc(e,o,s.provider===`browser`?c:``);let l=Uc(c?{...s,voice:c}:s);if(l)return i(C(l===`key`?`tts.needKey`:`tts.needVoice`),`warn`,3500),xc(e,o);let u;try{u=await ll(e,t,{voice:c})}catch(t){return Au===r?(Mu(t),xc(e,o)):void 0}if(n&&x().voice_save!==!1&&pl(n,u),Au===r)return bc(URL.createObjectURL(new Blob([u],{type:`audio/mpeg`})),()=>{if(Au===r)return xc(e,o)})}function Fu(e,t,n){let r=n&&z().find(e=>e.word===n.word),i=r&&n?pr(r,n.field,t):null;return i&&i.text===e.trim()?i:null}function Iu(e,t,{audio:n,keep:r,speaker:i},a){let o=Fu(e,t,r),s=o?.lang??t,c=o?o.current:n;return c?bc(ue(c),async()=>{let t=!!o&&await Tn(c);Au===a&&await Pu(e,s,t?o:null,a,i)}):Pu(e,s,o,a,i)}function Lu(e,t,n={}){return vc(),Iu(e,t,n,++Au)}function Ru(){Au++,vc()}async function zu(e,t,n=()=>{}){vc();let r=++Au,i=Hc(x());try{if(i.provider===`st`&&e.length&&Nu(e.map(e=>e.text),ku(e[0].speaker,i.voice)))return;for(let a=0;a<e.length&&Au===r;a++){n(a);let o=Iu(e[a].text,t,{speaker:e[a].speaker},r),s=e[a+1];if(s&&Rc.includes(i.provider)){let e=Cu(i.provider,s.speaker);Uc(e?{...i,voice:e}:i)||ll(s.text,t,{voice:e}).catch(()=>{})}await o}}finally{n(-1)}}var Bu=e=>rl(Hc(x()),rc(e)??``,de()),Vu={it:`Ciao! Come stai oggi?`,es:`Hola, ¿qué tal estás hoy?`,fr:`Bonjour, comment ça va aujourd’hui ?`,de:`Hallo, wie geht es dir heute?`,ja:`こんにちは、今日は元気ですか？`,zh:`你好，今天过得怎么样？`,ko:`안녕하세요, 오늘 기분이 어때요?`,pt:`Olá, como você está hoje?`,en:`Hello, how are you today?`};function Hu(e){Lu(Vu[ic(e).slice(0,2)]??Vu.en,e)}var Uu=({saved:e,label:t,cls:n=``,action:r})=>A`
    <button class="pg-speak-btn ${n} ${e&&`pg-speak-saved`}" ${r&&A`data-action="${r}"`}
            title="${e?C(`snd.listenSaved`):t}" aria-label="${e?`${t} (${C(`snd.listenSaved`)})`:t}">🔊</button>`,Wu=`pg-line-play`,Gu=`pg-playing`,Ku=null,qu=e=>!!e&&e===Ku;function Ju(e){Ku?.classList.remove(Gu,`fa-stop`),Ku?.classList.add(`fa-play`),Ku=e,e?.classList.remove(`fa-play`),e?.classList.add(Gu,`fa-stop`)}function Yu(e,t){e.classList.contains(Gu)?Ru():(Ju(e),t().finally(()=>{Ku===e&&Ju(null)}))}function Xu(e,t){let n=document.createElement(`span`);return n.className=`${Wu} fa-solid fa-play`,n.setAttribute(`role`,`button`),n.tabIndex=0,n.title=e,n.setAttribute(`aria-label`,e),n.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),t(n)}),n.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n.click())}),n}var Zu=(e,t,n)=>A`
    <span class="${Wu} fa-solid fa-play" role="button" tabindex="0" data-action="${n}" title="${t}" aria-label="${e}"></span>`;function Qu(e){for(let t of[e.reading,e.ipa]){let e=t?.trim();if(e&&Mt(e))return e}}function $u(e){if(Ne(w())&&x().furigana_enabled!==!1)return Qu(e)}function ed(e,t){let n=t?Ft(e,t,{strict:!0}):[];if(!n.length)return A`${e}`;let r=[],i=0;for(let[t,a,o]of n)r.push(A`${e.slice(i,t)}<ruby class="pg-ruby">${e.slice(t,a)}<rt>${o}</rt></ruby>`),i=a;return A`${r}${e.slice(i)}`}var td=150;function nd(e){return!e.hidden}function rd({editor:e,preview:t}){e.hidden=!0,e.replaceChildren(),t&&(t.hidden=!t.textContent)}function id(e,t){let{editor:n,preview:r,button:i}=e,a=z().find(e=>e.word===t)?.notes??``;r&&(r.hidden=!0),n.hidden=!1,j(n,A`
        <textarea class="pg-wb-note-textarea" placeholder="${C(`wb.notePh`)}" rows="3">${a}</textarea>
        <div class="pg-wb-note-actions">
            <span class="pg-wb-note-hint">${C(`wb.noteHint`)}</span>
            <button class="pg-wb-note-cancel pg-wb-row-btn">${C(`wb.noteCancel`)}</button>
            <button class="pg-wb-note-save pg-wb-row-btn pg-wb-note-save-btn">${C(`wb.noteSave`)}</button>
        </div>`);let o=n.querySelector(`textarea`);if(!o)return;o.focus(),o.setSelectionRange(o.value.length,o.value.length);let s=!1,c=()=>{if(s)return;s=!0;let n=o.value.trim(),a=z(),c=a.find(e=>e.word===t);c&&(c.notes=n||void 0,B(a)),r&&(r.textContent=n),i?.classList.toggle(`pg-wb-note-btn-has`,!!n),rd(e),e.onSaved?.(n)},l=()=>{s||(s=!0,rd(e))};n.querySelector(`.pg-wb-note-save`)?.addEventListener(`click`,e=>{e.stopPropagation(),c()}),n.querySelector(`.pg-wb-note-cancel`)?.addEventListener(`click`,e=>{e.stopPropagation(),l()}),o.addEventListener(`keydown`,e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),l()),e.key===`Enter`&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),c())}),o.addEventListener(`blur`,()=>setTimeout(c,td))}function ad(e,t){nd(e.editor)?rd(e):id(e,t)}var od=8,sd=null,cd=!1;function ld(){sd?.el.remove(),sd=null}function ud(e,t,n){if(sd?.anchor===e){ld();return}ld();let r=Object.assign(document.createElement(`div`),{className:`pg-wb-popover`});j(r,A`
        <div class="pg-wb-popover-word">${t}</div>
        <div class="pg-wb-popover-meaning">${n}</div>`),document.body.appendChild(r),sd={el:r,anchor:e};let i=e.getBoundingClientRect(),a=r.offsetWidth||200,o=r.offsetHeight||60,s=Math.min(i.left,innerWidth-a-od),c=i.bottom+4;c+o>innerHeight-od&&(c=i.top-o-4),s=Math.max(4,s),c=Math.max(4,c),r.style.left=`${s}px`,r.style.top=`${c}px`,requestAnimationFrame(()=>r.classList.add(`pg-wb-popover-visible`)),cd||(cd=!0,document.addEventListener(`click`,e=>{sd&&!sd.el.contains(e.target)&&e.target!==sd.anchor&&ld()}))}var dd={audio:`snd.word`,example_audio:`snd.example`},fd=(e,t,n,r=!1)=>A`
    <button type="button" class="pg-wb-row-btn ${r&&`pg-wb-row-btn-danger`}" data-sound="${e}"
            aria-label="${C(t)} — ${C(dd[n])}">${C(t)}</button>`;function pd(e,t,n){let r=ar(e,t),i=or(e,t),a=r?i?sr(e,t)?`snd.madeTag`:`snd.recording`:`snd.empty`:`snd.noExample`;return A`
        <div class="pg-wb-sound-row" data-field="${t}">
            <span class="pg-wb-sound-name">${C(dd[t])}</span>
            <span class="pg-wb-sound-state">${C(a)}</span>
            ${i&&fd(`play`,`snd.play`,t)}
            ${r&&n&&fd(`make`,i?`snd.remake`:`snd.makeOne`,t)}
            ${i&&fd(`remove`,`snd.remove`,t,!0)}
        </div>`}function md(e){let t=al();return!t&&!ir.some(t=>or(e,t))?A``:A`
        <div class="pg-wb-sounds">
            <span class="pg-wb-sounds-title">${C(`snd.section`)}</span>
            ${ir.map(n=>pd(e,n,t))}
        </div>`}var hd=e=>z().find(t=>t.word===e),gd=(e,t,n,r)=>!or(e,t)||sr(e,t)?Promise.resolve(!0):g(C(n),{yes:C(r),no:C(`confirmNo`)});async function _d(e,t){if(!xl())return!1;let n=hd(e);if(!n||!await gd(n,t,`snd.replaceRecording`,`snd.remake`))return!1;let r=pr(hd(e)??n,t,w());if(!r)return!1;try{return await ml(r)===`stored`?(i(C(`snd.remade`),`ok`,2500),Lu(r.text,r.lang,{audio:hd(e)?.[t]}),!0):(i(C(`snd.notKept`),`err`,4e3),!1)}catch(e){return Mu(e),!1}}async function vd(e,t){let n=hd(e);return!n||!await gd(n,t,`snd.removeRecording`,`snd.remove`)?!1:Zo(e,t,null)}function yd(e,t){e.addEventListener(`click`,async n=>{let r=n.target.closest(`button[data-sound]`),i=r?.closest(`.pg-wb-sound-row`)?.dataset.field,a=hd(t);if(!r||r.disabled||!i||!a)return;if(r.dataset.sound===`play`){Lu(ar(a,i),w(),{audio:a[i]});return}r.disabled=!0;let o=r.dataset.sound===`make`?await _d(t,i):await vd(t,i);r.disabled=!1;let s=e.querySelector(`.pg-wb-sounds`),c=hd(t);o&&s&&c&&(s.outerHTML=md(c).value)})}var bd=[...Fe,`idiom`,`grammar`,`sentence`];function xd(e,t,n){let r=z().find(e=>e.word===t);if(!r)return;let a=Ne(w()),o=(e,t,n,r=!1)=>A`
        <label class="pg-wb-edit-field ${r&&`pg-wb-edit-wide`}">
            <span>${t}</span>
            <input type="text" class="pg-soft-input" name="${e}" value="${n??``}" autocomplete="off" spellcheck="false">
        </label>`;e.classList.add(`pg-wb-editing`),j(e,A`
        <form class="pg-wb-edit">
            ${o(`word`,C(`wb.fWord`),r.word)}
            ${o(`base_form`,C(`wb.fBase`),r.base_form)}
            ${o(`meaning`,C(`wb.fMeaning`),r.meaning,!0)}
            ${o(`context_meaning`,C(`wb.fContext`),r.context_meaning,!0)}
            ${a?o(`reading`,C(`wb.fReading`),r.reading??r.ipa):o(`ipa`,C(`wb.fIpa`),r.ipa)}
            <label class="pg-wb-edit-field">
                <span>${C(`wb.fLevel`)}</span>
                <select class="pg-set-select" name="level">
                    <option value="" ${!r.level&&A`selected`}>—</option>
                    ${bd.map(e=>A`<option value="${e}" ${r.level===e&&A`selected`}>${ae(e)}</option>`)}
                </select>
            </label>
            <label class="pg-wb-edit-field">
                <span>${C(`wb.fPos`)}</span>
                <select class="pg-set-select" name="pos">
                    <option value="" ${!r.pos&&A`selected`}>—</option>
                    ${pe.map(e=>A`<option value="${e}" ${r.pos===e&&A`selected`}>${e}</option>`)}
                </select>
            </label>
            ${md(r)}
            <div class="pg-wb-edit-actions">
                <button type="button" class="pg-wb-row-btn" data-edit="cancel">${C(`wb.editCancel`)}</button>
                <button type="submit" class="pg-btn pg-btn-primary pg-btn-compact">${C(`wb.editSave`)}</button>
            </div>
        </form>`);let s=e.querySelector(`form`);s&&(s.querySelector(`input[name="meaning"]`)?.focus(),s.querySelector(`[data-edit="cancel"]`)?.addEventListener(`click`,n),yd(s,t),s.addEventListener(`keydown`,e=>{e.key===`Escape`&&(e.stopPropagation(),n())}),s.addEventListener(`submit`,e=>{e.preventDefault();let r=Object.fromEntries(new FormData(s));if(!r.word?.trim()){i(C(`wb.editNeedWord`),`warn`);return}let a=as(t,{...r,pos:r.pos||void 0});a.merged&&i(C(`wb.editMerged`,{word:a.word}),`info`,3e3),n()}))}var Sd=new WeakMap,Cd=200,wd=new WeakMap;function Td(e,t){let n=xu(e??``,t);return n?A`${n[0]}<mark class="pg-wb-hl">${n[1]}</mark>${n[2]}`:A`${e??``}`}var Ed=e=>e?new Date(e).toLocaleDateString(t(),{month:`short`,day:`numeric`}):``;function Dd(e,t){let{filter:n,sets:r}=t,i=e.pos?Le[e.pos]:void 0,a=Ed(e.dateAdded);return A`
        <div class="pg-wordbook-item" data-word="${e.word}">
            <div class="pg-wb-head">
                <div class="pg-wb-head-left">
                    <input type="checkbox" class="pg-wb-row-chk" data-word="${e.word}" title="${C(`wb.selectRow`)}" aria-label="${C(`wb.selectRow`)}">
                    <strong>${n.query?Td(e.word,n.query):ed(e.word,$u(e))}${e.level===`sentence`&&Zu(`${C(`line.play`)}: ${e.word}`,C(`wb.listen`),`play-sentence`)}</strong>
                    ${i&&A`
                    <button class="pg-pos-chip${n.pos===e.pos?` pg-pos-chip-active`:``}" data-action="filter-pos" data-pos="${e.pos}" title="${C(`wb.filterByPos`)}">${i}</button>`}
                </div>
                <div class="pg-wb-head-right">
                    ${e.level!==`sentence`&&Uu({saved:!!e.audio,label:C(`wb.listen`),cls:`pg-icon-btn`,action:`speak`})}
                    ${U(e)&&A`
                    <button class="pg-icon-btn pg-wb-known-btn ${e.known&&`pg-wb-known-on`}" data-action="known" aria-pressed="${e.known?`true`:`false`}"
                        title="${C(e.known?`wb.unmarkKnown`:`wb.markKnown`)}" aria-label="${C(e.known?`wb.unmarkKnown`:`wb.markKnown`)}"><i class="fa-solid fa-check"></i></button>`}
                    <button class="pg-icon-btn pg-wb-edit-btn" data-action="edit" title="${C(`wb.edit`)}" aria-label="${C(`wb.edit`)}"><i class="fa-solid fa-pen"></i></button>
                    <button class="pg-icon-btn pg-wb-del" data-action="delete" title="${C(`wb.deleteWord`)}" aria-label="${C(`wb.deleteWord`)}"><i class="fa-solid fa-xmark"></i></button>
                </div>
            </div>
            <div class="pg-wb-mean">${Td(e.meaning,n.query)}</div>
            <div class="pg-wb-meta">
                ${e.ipa&&A`<span class="pg-ipa-chip">${e.ipa}</span>`}
                <span class="pg-level-badge level-${oe(e.level||`grammar`)}">${ae(e.level)}</span>
                ${ru(e)&&A`<span class="pg-missed-tag" title="${C(`wb.missedTip`)}">${C(`wb.missedTag`)}</span>`}
                ${U(e)&&eu(e)&&A`<span class="pg-known-tag" title="${C(e.known?`wb.knownSetTip`:`wb.knownTip`)}">${C(`wb.knownTag`)}</span>`}
                ${e.conj_cached&&A`<button class="pg-icon-btn pg-wb-conj-btn" data-action="conjugate" title="${C(`wb.conjTable`)}">📊</button>`}
                <button class="pg-icon-btn pg-wb-note-btn${e.notes?` pg-wb-note-btn-has`:``}" data-action="note" title="${C(`wb.noteTitle`)}">📝</button>
                ${a&&A`<span class="pg-wb-date">${a}</span>`}
            </div>
            <div class="pg-wb-secondary" aria-hidden="true">
                ${e.image&&A`<img class="pg-word-img" src="${ue(e.image)}" alt="" loading="lazy">`}
                ${e.pos_info&&A`<div class="pg-wb-pos-info">${e.pos_info}</div>`}
                ${e.original_form&&A`<button class="pg-wb-ctx-btn" data-action="context" title="${C(`wb.viewCtx`)}">${e.original_form}</button>`}
                ${(e.collocations?.length??0)>0&&A`<div class="pg-colloc-row">${(e.collocations??[]).map(e=>A`<span class="pg-colloc-chip">${e}</span>`)}</div>`}
                ${r.length>0&&A`
                <div class="pg-set-checks">${r.map(t=>A`
                    <label class="pg-set-check" title="${t.name}">
                        <input type="checkbox" data-set="${t.id}" ${(e.setIds??[]).includes(t.id)&&A`checked`}>
                        <span>${t.name}</span>
                    </label>`)}
                </div>`}
            </div>
            <div class="pg-wb-notes-preview" data-action="note-preview" ${!e.notes&&A`hidden`}>${e.notes??``}</div>
            <div class="pg-wb-note-editor" hidden></div>
        </div>`}function Od(e,t,n){return e?n===e?C(`wb.allKnownHidden`):t.trim()?C(`wb.noMatchSearch`,{q:t}):C(`wb.noMatch`):C(`wb.empty`)}var kd=e=>({editor:e.querySelector(`.pg-wb-note-editor`),preview:e.querySelector(`.pg-wb-notes-preview`),button:e.querySelector(`.pg-wb-note-btn`)});function Ad(e,t){let n=Sd.get(e),r=t.target;if(n&&r.closest(`.pg-wb-more`)){let t=wd.get(e);t&&(t.limit+=Cd),Md(e,n);return}let i=r.closest(`.pg-wordbook-item`);if(!n||!i)return;let a=i.dataset.word??``,o=r.closest(`[data-action]`);if(o)switch(t.stopPropagation(),o.dataset.action){case`speak`:Lu(a,w(),{audio:z().find(e=>e.word===a)?.audio,keep:{word:a,field:`audio`}});break;case`play-sentence`:Yu(o,()=>{let e=z().find(e=>e.word===a);return Lu(a,w(),{audio:e?.audio,keep:{word:a,field:`audio`},speaker:e?.speaker})});break;case`edit`:xd(i,a,n.refresh);break;case`delete`:Xo([a]),n.refresh();break;case`known`:Qo([a],!z().find(e=>e.word===a)?.known),n.refresh();break;case`filter-pos`:{let e=o.dataset.pos??``;n.filter.pos=n.filter.pos===e?``:e,n.refresh();break}case`conjugate`:As(a,{ai:je,getLang:w,getNativeLang:S});break;case`note`:ad(kd(i),a);break;case`note-preview`:{let e=kd(i);nd(e.editor)||id(e,a);break}case`context`:{let e=z().find(e=>e.word===a);e?.context_meaning&&ud(o,e.original_form??``,e.context_meaning);break}}else{if(r.closest(`button, input, a, select, label, textarea`))return;let e=i.classList.toggle(`pg-wb-expanded`);i.querySelector(`.pg-wb-secondary`)?.setAttribute(`aria-hidden`,String(!e))}}function jd(e,t){let n=t.target,r=n.closest(`.pg-wordbook-item`)?.dataset.word;n.dataset.set&&r&&ms(r,n.dataset.set),n.classList.contains(`pg-wb-row-chk`)&&Sd.get(e)?.onSelect()}function Md(e,t){let n=V(),r=x().wordbook_hide_known!==!1,i=bu(n,t.filter,r),a=r?n.filter(e=>yu(e,t.filter,!0)).length:0,o=e.scrollTop;Sd.has(e)||(e.addEventListener(`click`,t=>Ad(e,t)),e.addEventListener(`change`,t=>jd(e,t)),e.addEventListener(`keydown`,e=>{let t=e.target;(e.key===`Enter`||e.key===` `)&&t.matches(`[role="button"][data-action]`)&&(e.preventDefault(),t.click())})),Sd.set(e,t);let s=JSON.stringify(t.filter),c=wd.get(e)?.key===s?wd.get(e):{key:s,limit:Cd};wd.set(e,c);let l=i.length-c.limit;return j(e,i.length?A`${i.slice(0,c.limit).map(e=>Dd(e,t))}
               ${l>0&&A`<button class="pg-btn pg-btn-secondary pg-btn-block pg-wb-more">${C(`wb.showMore`,{n:Math.min(l,Cd),rest:l})}</button>`}`:A`<div class="pg-empty-hint">${Od(n.length,t.filter.query,a)}</div>`),e.scrollTop=o,[i.length,n.length,a]}function Nd([e,t,n=0],r){return gu(r)?`${e} / ${t}`:n?C(`wb.nWordsHidden`,{n:e,k:n}):C(`wb.nWords`,{n:t})}function Pd(e){return[...e.querySelectorAll(`.pg-wb-row-chk:checked`)].map(e=>e.dataset.word??``).filter(Boolean)}var Fd=class extends Error{},W=e=>{throw new Fd(`zip: ${e}`)},Id=101010256,Ld=101075792,Rd=117853008,zd=33639248,Bd=67324752,Vd=4294967295,Hd=536870912;async function Ud(e,t,n){return new DataView(await e.slice(t,n).arrayBuffer())}var Wd=(e,t)=>e.getUint32(t,!0)+e.getUint32(t+4,!0)*2**32;async function Gd(e){let t=await Ud(e,Math.max(0,e.size-22-65535),e.size),n=-1;for(let e=t.byteLength-22;e>=0;e--)if(t.getUint32(e,!0)===Id){n=e;break}n<0&&W(`not a zip file`);let r=t.getUint16(n+10,!0),i=t.getUint32(n+12,!0),a=t.getUint32(n+16,!0);if(r===65535||i===Vd||a===Vd){let o=n-20;(o<0||t.getUint32(o,!0)!==Rd)&&W(`zip64 locator missing`);let s=Wd(t,o+8);s+56>e.size&&W(`zip64 record out of range`);let c=await Ud(e,s,s+56);c.getUint32(0,!0)!==Ld&&W(`zip64 record missing`),r=Wd(c,32),i=Wd(c,40),a=Wd(c,48)}a+i>e.size&&W(`central directory out of range`),r*46>i&&W(`bad central directory`);let o=await Ud(e,a,a+i),s=new TextDecoder,c=new Map,l=0;for(let t=0;t<r;t++){(l+46>o.byteLength||o.getUint32(l,!0)!==zd)&&W(`bad central directory`);let t=o.getUint16(l+10,!0),n=o.getUint32(l+16,!0),r=o.getUint32(l+20,!0),i=o.getUint32(l+24,!0),a=o.getUint16(l+28,!0),u=o.getUint16(l+30,!0),d=o.getUint16(l+32,!0),f=o.getUint32(l+42,!0);l+46+a+u+d>o.byteLength&&W(`bad central directory`);let p=s.decode(new Uint8Array(o.buffer,l+46,a));for(let e=l+46+a;e+4<=l+46+a+u;){let t=o.getUint16(e,!0),n=o.getUint16(e+2,!0);if(t===1){let t=e+4;t+n>o.byteLength&&W(`bad zip64 field`),i===Vd&&(i=Wd(o,t),t+=8),r===Vd&&(r=Wd(o,t),t+=8),f===Vd&&(f=Wd(o,t))}e+=4+n}f+30+r>e.size&&W(`${p} lies past the end of the file`),c.set(p,{name:p,method:t,compressed:r,size:i,crc:n,offset:f}),l+=46+a+u+d}return c}async function Kd(e,t,n=Hd){let{name:r}=t;t.size>n&&W(`${r} is too large (${t.size} bytes)`),t.offset+30>e.size&&W(`${r} lies past the end of the file`);let i=await Ud(e,t.offset,t.offset+30);i.getUint32(0,!0)!==Bd&&W(`bad local header for ${r}`);let a=t.offset+30+i.getUint16(26,!0)+i.getUint16(28,!0);a+t.compressed>e.size&&W(`${r} lies past the end of the file`);let o=e.slice(a,a+t.compressed),s;if(t.method===0)t.compressed!==t.size&&W(`${r}: stored size mismatch`),s=new Uint8Array(await o.arrayBuffer());else if(t.method===8)s=await qd(o,t);else return W(`unsupported compression ${t.method} for ${r}`);return Yd(s)!==t.crc&&W(`${r} is corrupt (CRC mismatch)`),s}async function qd(e,t){let n=new Uint8Array(t.size),r=e.stream().pipeThrough(new DecompressionStream(`deflate-raw`)).getReader(),i=0;try{for(;;){let{done:e,value:a}=await r.read();if(e)break;i+a.length>n.length&&W(`${t.name} inflates past its stated size`),n.set(a,i),i+=a.length}}catch(e){if(r.cancel().catch(()=>{}),e instanceof Fd)throw e;W(`${t.name} is corrupt (${e instanceof Error?e.message:String(e)})`)}return i!==n.length&&W(`${t.name} is shorter than its stated size`),n}var Jd=(()=>{let e=new Uint32Array(256);for(let t=0;t<256;t++){let n=t;for(let e=0;e<8;e++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n>>>0}return e})();function Yd(e){let t=4294967295;for(let n=0;n<e.length;n++)t=Jd[(t^e[n])&255]^t>>>8;return(t^4294967295)>>>0}function Xd(e){e.length>65535&&W(`too many files for one zip (${e.length})`);let t=[],n=[],r=new TextEncoder,i=0;for(let{name:a,data:o}of e){let e=r.encode(a),s=Yd(o),c=new DataView(new ArrayBuffer(30));c.setUint32(0,Bd,!0),c.setUint16(4,20,!0),c.setUint16(6,2048,!0),c.setUint32(14,s,!0),c.setUint32(18,o.length,!0),c.setUint32(22,o.length,!0),c.setUint16(26,e.length,!0),t.push(c.buffer,e,o);let l=new DataView(new ArrayBuffer(46));l.setUint32(0,zd,!0),l.setUint16(4,20,!0),l.setUint16(6,20,!0),l.setUint16(8,2048,!0),l.setUint32(16,s,!0),l.setUint32(20,o.length,!0),l.setUint32(24,o.length,!0),l.setUint16(28,e.length,!0),l.setUint32(42,i,!0),n.push(new Uint8Array(l.buffer),e),i+=30+e.length+o.length,i>Vd&&W(`backup larger than 4 GB`)}let a=n.reduce((e,t)=>e+t.length,0),o=new DataView(new ArrayBuffer(22));return o.setUint32(0,Id,!0),o.setUint16(8,e.length,!0),o.setUint16(10,e.length,!0),o.setUint32(12,a,!0),o.setUint32(16,i,!0),new Blob([...t,...n,o.buffer],{type:`application/zip`})}var Zd=`polyglot-backup`,Qd=1,$d=new Set([`_wordbook`,`_sets`,`saved_wrong_answers`,`saved_checks`,`saved_days`,`ext_api_key`,`ext_base_url`,`provider`,`model`,`_model_history`,`route_chat_source`,`route_model`,`profile_id`,`host_connection`,`voice_provider`,`voice_oa_url`,`voice_proxy`]),ef=e=>e.endsWith(`_key`),tf=new Set(Object.keys(_e).filter(e=>!$d.has(e)&&!ef(e)));function nf(e,t,n,r=new Date){return{format:Zd,version:Qd,exportedAt:r.toISOString(),settings:Object.fromEntries(Object.entries(e).filter(([e])=>tf.has(e))),wordbook:t.wordbook,sets:t.sets,wrongAnswers:t.wrongAnswers,checks:t.checks,days:t.days,conjugations:n}}var rf=e=>f(e)&&typeof e.word==`string`&&typeof e.lang==`string`&&f(e.data)&&Array.isArray(e.data.tenses);function af(e){let t;try{t=JSON.parse(e)}catch{return{ok:!1,reason:`invalid`}}if(!f(t)||t.format!==`polyglot-backup`)return{ok:!1,reason:`invalid`};if(si(t.version,0)>Qd)return{ok:!1,reason:`newer`};let n=f(t.settings)?Object.fromEntries(Object.entries(t.settings).filter(([e])=>tf.has(e))):{};return{ok:!0,backup:{format:Zd,version:si(t.version,Qd),exportedAt:typeof t.exportedAt==`string`?t.exportedAt:``,settings:n,...Si(t),conjugations:di(t.conjugations,rf)}}}var of=`polyglot-backup.json`,sf=`media/`;async function cf(e){let t=nf(x(),oa(),await dn()),n=`Polyglot_Backup_${t.exportedAt.slice(0,10)}`,r=JSON.stringify(t,null,1),i=R()===`file`?[...wn(t.wordbook)]:[];if(!i.length)return Ba(r,`${n}.json`,`application/json`),{words:t.wordbook.length,media:0,missing:0};let a=[{name:of,data:new TextEncoder().encode(r)}],o=[],s=[],c=0;e?.(0,i.length),await Dn(i.map((e,t)=>t),6,async t=>{s[t]=await Pe(i[t]),e?.(++c,i.length)}),i.forEach((e,t)=>{let n=s[t];n?a.push({name:sf+e,data:n}):o.push(e)}),Va(Xd(a),`${n}.zip`);let l=(await En(o)).size;return{words:t.wordbook.length,media:a.length-1,missing:l}}async function lf(e){let t=await Gd(e),n=t.get(of);return n?{text:new TextDecoder().decode(await Kd(e,n)),restoreMedia:async n=>{let r=0,i=[],a=e=>Cn(e,`sound`)||Cn(e,`image`),o=[...wn(n)].filter(e=>_n(e)&&t.has(sf+e)),s=o.filter(a);r+=o.length-s.length;let c=await En(s),l=s.flatMap(e=>{let n=t.get(sf+e);return n&&!c.has(e)?[{name:e,entry:n}]:[]});return Fn(l.map(e=>e.name)),await Dn(l,6,async({name:t,entry:n})=>{await Kd(e,n).then(e=>fe(t,e)).then(e=>e===`ok`,()=>!1)?i.push(t):r++}),jn(i),r}}:null}var uf=[`panel_bg_image`,`dict_url_custom`];function df(e,t){return uf.flatMap(n=>{let r=e.settings[n];return typeof r==`string`&&r.trim()&&r!==t[n]?[r]:[]})}function ff(e){let t={...e.settings};for(let e of uf)delete t[e];return{...e,settings:t}}function pf(e){return{...e,wordbook:e.wordbook.map(({audio:e,example_audio:t,image:n,made_sounds:r,...i})=>i)}}async function mf(e,t){t&&await un();let n=t?new Set:new Set((await dn()).map(e=>e.word));await Promise.all(e.filter(e=>!n.has(e.word)).map(e=>cn(e.word,e.data,e.lang)))}async function hf(e,t){if(t===`replace`){let t=x();return Object.assign(t,e.settings,{ext_api_key:t.ext_api_key}),ce(t),T(),ha({wordbook:e.wordbook,sets:e.sets,wrongAnswers:e.wrongAnswers,checks:e.checks,days:e.days}),await mf(e.conjugations,!0),{added:e.wordbook.length,merged:0}}let{added:n,merged:r,...i}=Ci(oa(),e);return ha(i),await mf(e.conjugations,!1),{added:n,merged:r}}async function gf(e=!1,t){try{let{words:n,media:r,missing:a}=await cf(t);return i(r?C(`pnl.set.backupDoneMedia`,{n,m:r}):C(`pnl.set.backupDone`,{n}),`ok`,3e3),a&&i(C(`pnl.set.backupMissing`,{n:a}),`warn`,8e3),R()===`chat`&&i(C(`pnl.set.backupChatOnly`),`warn`,1e4),!(e&&a)}catch(e){return console.error(`[Polyglot] Backup failed:`,e),i(C(`pnl.set.backupFailed`,{err:e instanceof Error?e.message:String(e)}),`err`,6e3),!1}}var _f=e=>e?new Date(e).toLocaleString(t(),{dateStyle:`medium`,timeStyle:`short`}):`?`;async function vf(e){if(!/\.zip$/i.test(e.name))return yf(await e.text());let t=await lf(e).catch(()=>null);return t?yf(t.text,t):(i(C(`pnl.set.restoreInvalid`),`err`,4e3),!1)}async function yf(e,t){let n=af(e);if(!n.ok)return i(C(n.reason===`newer`?`pnl.set.restoreNewer`:`pnl.set.restoreInvalid`),`err`,4e3),!1;let{backup:r}=n;if(R()===`loading`||R()===`offline`)return i(C(`pnl.set.restoreNotLoaded`),`warn`,6e3),!1;let a=await We(C(`pnl.set.restoreAsk`,{date:_f(r.exportedAt),n:r.wordbook.length}),[{value:`cancel`,label:C(`confirmNo`)},{value:`replace`,label:C(`pnl.set.restoreReplace`)},{value:`merge`,label:C(`pnl.set.restoreMerge`),primary:!0}]);if(!a||a===`cancel`)return!1;let o=a===`replace`?df(r,x()):[];if(o.length&&await We(C(`pnl.set.restoreAddresses`,{list:o.join(`
`)}),[{value:`keep`,label:C(`pnl.set.restoreAddrKeep`)},{value:`skip`,label:C(`pnl.set.restoreAddrSkip`),primary:!0}])!==`keep`&&(r=ff(r)),a===`replace`){if(!await gf(!0))return i(C(`pnl.set.restoreNoSafety`),`err`,8e3),!1;if(!await g(C(`pnl.set.restoreSafetySaved`),{yes:C(`pnl.set.restoreReplace`),no:C(`confirmNo`)}))return!1}if(R()!==`file`)r=pf(r);else if(t){let e=await t.restoreMedia(r.wordbook);if(e&&a===`replace`&&!await g(C(`pnl.set.restoreMediaAsk`,{n:e}),{yes:C(`pnl.set.restoreReplace`),no:C(`confirmNo`)}))return!1;e&&i(C(`anki.mediaFailed`,{n:e}),`warn`,6e3)}let{added:s,merged:c}=await hf(r,a);return i(a===`merge`?C(`pnl.set.restoreMerged`,{added:s,merged:c}):C(`pnl.set.restoreReplaced`,{n:s}),`ok`,4e3),!0}var bf=class extends Error{},G=e=>{throw new bf(`zstd: ${e}`)},xf=e=>31-Math.clz32(e),Sf=536870912,Cf=class{max;buf;len=0;constructor(e,t){this.max=t,this.buf=new Uint8Array(Math.min(Math.max(e,1024),t))}reserve(e){if(e>=0||G(`bad length`),this.len+e>this.max&&G(`output larger than ${this.max} bytes`),this.len+e<=this.buf.length)return;let t=this.buf.length*2;for(;t<this.len+e;)t*=2;t=Math.min(t,this.max);let n=new Uint8Array(t);n.set(this.buf.subarray(0,this.len)),this.buf=n}bytes(e,t,n){this.reserve(n),this.buf.set(e.subarray(t,t+n),this.len),this.len+=n}fill(e,t){this.reserve(t),this.buf.fill(e,this.len,this.len+t),this.len+=t}match(e,t){e>0&&e<=this.len||G(`match offset out of range`),this.reserve(t);let n=this.buf,r=this.len-e;if(e>=t)n.copyWithin(this.len,r,r+t);else for(let e=0;e<t;e++)n[this.len+e]=n[r++];this.len+=t}},wf=class{data;end;pos;constructor(e,t,n){this.data=e,this.end=n,this.pos=t*8}peek(e){let t=0;for(let n=0;n<e;n++){let e=this.pos+n,r=e>>3;r<this.end&&this.data[r]>>(e&7)&1&&(t+=2**n)}return t}skip(e){this.pos+=e}get byteEnd(){return Math.ceil(this.pos/8)}},Tf=class{data;start;left;length;constructor(e,t,n){this.data=e,this.start=t,n<=t&&G(`empty bitstream`);let r=e[n-1];r||G(`bitstream without end marker`),this.length=n-t,this.left=(this.length-1)*8+xf(r)}byte(e){return e>=0&&e<this.length?this.data[this.start+e]:0}peek(e){if(!e)return 0;let t=this.left-e,n=Math.floor(t/8),r=t-n*8;if(e+r<=24&&n>=0)return(this.data[this.start+n]|this.byte(n+1)<<8|this.byte(n+2)<<16)>>>r&(1<<e)-1;let i=0;for(let e=4;e>=0;e--)i=i*256+this.byte(n+e);return Math.floor(i/2**r)%2**e}read(e){let t=this.peek(e);return this.left-=e,t}};function Ef(e,t,n,r,i){let a=new wf(e,t,n),o=a.peek(4)+5;a.skip(4),o>r&&G(`FSE accuracy too large`);let s=[],c=(1<<o)+1,l=1<<o,u=o+1,d=!1;for(;c>1&&s.length<=i;){if(d){let e=a.peek(2);a.skip(2);let t=e;for(;e===3;)e=a.peek(2),a.skip(2),t+=e;for(let e=0;e<t;e++)s.push(0);if(s.length>i)break}let e=2*l-1-c,t,n=a.peek(u-1);for(n<e?(t=n,a.skip(u-1)):(t=a.peek(u),t>=l&&(t-=e),a.skip(u)),t--,c-=Math.abs(t),s.push(t),d=t===0;c<l;)u--,l>>=1}return c!==1&&G(`bad FSE distribution`),{norm:s,log:o,next:a.byteEnd}}function Df(e,t){let n=1<<t,r=new Uint8Array(n),i=new Uint8Array(n),a=new Uint16Array(n),o=Array(e.length),s=n-1;e.forEach((e,t)=>{e===-1?(r[s--]=t,o[t]=1):o[t]=e});let c=(n>>1)+(n>>3)+3,l=0;e.forEach((e,t)=>{for(let i=0;i<e;i++){r[l]=t;do l=l+c&n-1;while(l>s)}}),l!==0&&G(`bad FSE table`);for(let e=0;e<n;e++){let s=r[e],c=o[s]++;i[e]=t-xf(c),a[e]=(c<<i[e])-n}return{log:t,symbol:r,bits:i,baseline:a}}var Of=e=>({log:0,symbol:Uint8Array.of(e),bits:Uint8Array.of(0),baseline:Uint16Array.of(0)}),kf=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,20,22,24,28,32,40,48,64,128,256,512,1024,2048,4096,8192,16384,32768,65536],Af=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,3,3,4,6,7,8,9,10,11,12,13,14,15,16],jf=[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,39,41,43,47,51,59,67,83,99,131,259,515,1027,2051,4099,8195,16387,32771,65539],Mf=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,3,3,4,4,5,7,8,9,10,11,12,13,14,15,16],Nf=Df([4,3,2,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,3,2,1,1,1,1,1,-1,-1,-1,-1],6),Pf=Df([1,4,3,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1],6),Ff=Df([1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1,-1,-1,-1,-1],5);function If(e,t){let n=e[t],r,i;if(n<128){let a=t+1+n,{norm:o,log:s,next:c}=Ef(e,t+1,a,6,255),l=Df(o,s),u=new Tf(e,c,a),d=u.read(s),f=u.read(s);for(r=[];;){if(r.push(l.symbol[d]),d=l.baseline[d]+u.read(l.bits[d]),u.left<0){r.push(l.symbol[f]);break}if(r.push(l.symbol[f]),f=l.baseline[f]+u.read(l.bits[f]),u.left<0){r.push(l.symbol[d]);break}r.length>255&&G(`too many Huffman weights`)}i=a}else{let a=n-127;r=[];for(let n=0;n<a;n++){let i=e[t+1+(n>>1)];r.push(n&1?i&15:i>>4)}i=t+1+Math.ceil(a/2)}let a=0;for(let e of r)e&&(a+=1<<e-1);a||G(`empty Huffman tree`);let o=xf(a)+1,s=(1<<o)-a;s&s-1&&G(`bad Huffman tree`),r.push(xf(s)+1),o>11&&G(`Huffman code too long`);let c=1<<o,l=new Uint8Array(c),u=new Uint8Array(c),d=0;for(let e=1;e<=o;e++)r.forEach((t,n)=>{if(t!==e)return;let r=1<<e-1;l.fill(n,d,d+r),u.fill(o+1-e,d,d+r),d+=r});return{table:{maxBits:o,symbol:l,bits:u},next:i}}function Lf(e,t,n,r,i,a,o){let s=new Tf(e,t,n);for(let e=0;e<o;e++){let t=s.peek(r.maxBits);i[a+e]=r.symbol[t],s.left-=r.bits[t]}s.left!==0&&G(`Huffman stream not fully consumed`)}function Rf(e,t,n){let r=e[t],i=r&3,a=r>>2&3;if(i===0||i===1){let n,o;a===0||a===2?(n=r>>3,o=1):a===1?(n=(r>>4)+(e[t+1]<<4),o=2):(n=(r>>4)+(e[t+1]<<4)+(e[t+2]<<12),o=3);let s=t+o;return i===0?(s+n>e.length&&G(`literals past the end`),{literals:e.subarray(s,s+n),next:s+n}):{literals:new Uint8Array(n).fill(e[s]),next:s+1}}let o,s,c,l=4;if(a<=1){let n=r|e[t+1]<<8|e[t+2]<<16;o=n>>4&1023,s=n>>14&1023,c=3,a===0&&(l=1)}else if(a===2){let n=(r|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0;o=n>>>4&16383,s=n>>>18,c=4}else{let n=(r|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0;o=n>>>4&262143,s=(n>>>22)+e[t+4]*1024,c=5}let u=t+c,d=u+s;if(d>e.length&&G(`literals past the end`),i===2){let t=If(e,u);n.huffman=t.table,u=t.next}let f=n.huffman??G(`treeless literals without a previous tree`),p=new Uint8Array(o);if(l===1)Lf(e,u,d,f,p,0,o);else{let t=e[u]|e[u+1]<<8,n=e[u+2]|e[u+3]<<8,r=e[u+4]|e[u+5]<<8,i=Math.ceil(o/4),a=u+6;[t,n,r,d-a-t-n-r].forEach((t,n)=>{let r=n<3?i:o-3*i;Lf(e,a,a+t,f,p,n*i,r),a+=t})}return{literals:p,next:d}}function zf(e,t,n,r,i,a,o){switch(n){case 0:return{table:r,next:t};case 1:return{table:Of(e[t]),next:t+1};case 2:{let{norm:n,log:r,next:i}=Ef(e,t,e.length,a,o);return{table:Df(n,r),next:i}}default:return{table:i??G(`repeated table without a previous one`),next:t}}}function Bf(e,t,n,r,i){let a=e.subarray(0,n),{literals:o,next:s}=Rf(a,t,i),c=s;c>=n&&G(`missing sequences section`);let l=a[c],u;if(l<128?(u=l,c+=1):l<255?(u=(l-128<<8)+a[c+1],c+=2):(u=a[c+1]+(a[c+2]<<8)+32512,c+=3),c>n&&G(`truncated sequences header`),!u){c!==n&&G(`bytes after an empty sequences section`),r.bytes(o,0,o.length);return}let d=a[c++],f=zf(a,c,d>>6,Nf,i.ll,9,35),p=zf(a,f.next,d>>4&3,Ff,i.of,8,31),m=zf(a,p.next,d>>2&3,Pf,i.ml,9,52);i.ll=f.table,i.of=p.table,i.ml=m.table;let h=new Tf(a,m.next,n),ee=f.table,te=p.table,ne=m.table,g=h.read(ee.log),_=h.read(te.log),re=h.read(ne.log),v=i.reps,ie=0;for(let e=0;e<u;e++){let t=te.symbol[_],n=ne.symbol[re],i=ee.symbol[g];(t===void 0||n===void 0||i===void 0)&&G(`bad sequence state`),t>31&&G(`offset code too large`);let a=2**t+h.read(t),s=jf[n]+h.read(Mf[n]),c=kf[i]+h.read(Af[i]);h.left<0&&G(`sequence stream over-read`);let l;if(a>3)l=a-3,v[2]=v[1],v[1]=v[0],v[0]=l;else{let e=a-1+ +(c===0);e===0?l=v[0]:(l=e===3?v[0]-1:v[e],e!==1&&(v[2]=v[1]),v[1]=v[0],v[0]=l)}ie+c>o.length&&G(`literal length past the literals`),r.bytes(o,ie,c),ie+=c,r.match(l,s),e<u-1&&(g=ee.baseline[g]+h.read(ee.bits[g]),re=ne.baseline[re]+h.read(ne.bits[re]),_=te.baseline[_]+h.read(te.bits[_]))}h.left!==0&&G(`sequence stream not fully consumed`),r.bytes(o,ie,o.length-ie)}var Vf=4247762216,Hf=(e,t)=>(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0;function Uf(e,t=Sf){let n=new Cf(e.length*4,t),r=0;for(;r<e.length;){r+4>e.length&&G(`truncated`);let i=Hf(e,r);if((i&4294967280)==407710288){r+8>e.length&&G(`truncated`),r+=8+Hf(e,r+4);continue}i!==Vf&&G(`not a zstd frame`),r+=4,r+1>e.length&&G(`truncated frame header`);let a=e[r++],o=a>>6,s=a>>5&1,c=a>>2&1,l=a&3;if(a&8&&G(`reserved bit set`),r+ +!s+[0,1,2,4][l]+[+!!s,2,4,8][o]>e.length&&G(`truncated frame header`),s||r++,l){let t=[0,1,2,4][l],n=0;for(let i=t-1;i>=0;i--)n=n*256+e[r+i];n&&G(`dictionaries are not supported`),r+=t}let u=[+!!s,2,4,8][o],d=-1;if(u){u===8&&(e[r+6]||e[r+7])&&G(`output larger than ${t} bytes`),d=0;for(let t=Math.min(u,6)-1;t>=0;t--)d=d*256+e[r+t];u===2&&(d+=256),n.len+d>t&&G(`output larger than ${t} bytes`),n.reserve(Math.min(d,e.length*64)),r+=u}let f=n.len,p={reps:[1,4,8]};for(let t=0;!t;){r+3>e.length&&G(`truncated block`);let i=e[r]|e[r+1]<<8|e[r+2]<<16;r+=3,t=i&1;let a=i>>1&3,o=i>>3;a===0?(r+o>e.length&&G(`truncated block`),n.bytes(e,r,o),r+=o):a===1?(r>=e.length&&G(`truncated block`),n.fill(e[r],o),r+=1):a===2?(r+o>e.length&&G(`truncated block`),Bf(e,r,r+o,n,p),r+=o):G(`reserved block type`)}d>=0&&n.len-f!==d&&G(`frame size does not match its header`),c&&(r+=4),r>e.length&&G(`truncated`)}return n.buf.slice(0,n.len)}var Wf=e=>e.length>=4&&Hf(e,0)===Vf,Gf=class extends Error{},Kf=e=>{throw new Gf(`sqlite: ${e}`)},qf=`SQLite format 3\0`,Jf=class{data;view;pageSize;usable;decoder;schema;constructor(e){this.data=e,(e.length<100||new TextDecoder().decode(e.subarray(0,16))!==qf)&&Kf(`not a SQLite file`),this.view=new DataView(e.buffer,e.byteOffset,e.byteLength);let t=this.view.getUint16(16);this.pageSize=t===1?65536:t,this.usable=this.pageSize-e[20],(this.pageSize<512||this.pageSize&this.pageSize-1||this.usable<480)&&Kf(`bad page size`);let n=this.view.getUint32(56);this.decoder=new TextDecoder(n===2?`utf-16le`:n===3?`utf-16be`:`utf-8`)}tables(){return this.schemaRows().filter(e=>e.type===`table`).map(e=>e.name)}hasTable(e){return this.schemaRows().some(t=>t.type===`table`&&t.name===e)}*rows(e){let t=this.schemaRows().find(t=>t.type===`table`&&t.name===e)??Kf(`no table ${e}`);yield*this.guarded(this.walk(t.root,new Set))}schemaRows(){return this.schema??=[...this.guarded(this.walk(1,new Set))].map(({values:[e,t,,n,r]})=>({type:String(e),name:String(t),root:Number(n),sql:String(r??``)})),this.schema}*guarded(e){try{yield*e}catch(e){throw e instanceof RangeError?new Gf(`sqlite: damaged file`):e}}*walk(e,t){(t.has(e)||e<1||e*this.pageSize>this.data.length)&&Kf(`bad page reference`),t.add(e);let n=(e-1)*this.pageSize,r=n+(e===1?100:0),i=this.data[r],a=this.view.getUint16(r+3),o=i===10||i===13,s=r+(o?8:12);[2,5,10,13].includes(i)||Kf(`unknown page type ${i}`);for(let e=0;e<a;e++){let r=n+this.view.getUint16(s+e*2);if(i===13){let[e,t]=this.varint(r);r+=t;let[n,i]=this.varint(r);r+=i,yield{rowid:n,values:this.record(this.payload(r,e,!0))}}else if(i===10){let[e,t]=this.varint(r);yield{values:this.record(this.payload(r+t,e,!1))}}else if(i===5)yield*this.walk(this.view.getUint32(r),t);else{yield*this.walk(this.view.getUint32(r),t);let[e,n]=this.varint(r+4);yield{values:this.record(this.payload(r+4+n,e,!1))}}}o||(yield*this.walk(this.view.getUint32(r+8),t))}payload(e,t,n){t>this.data.length&&Kf(`record larger than the file`);let r=this.usable,i=n?r-35:Math.floor((r-12)*64/255)-23;if(t<=i)return this.data.subarray(e,e+t);let a=Math.floor((r-12)*32/255)-23,o=a+(t-a)%(r-4),s=o<=i?o:a,c=new Uint8Array(t);c.set(this.data.subarray(e,e+s));let l=s,u=this.view.getUint32(e+s),d=new Set;for(;l<t;){(!u||d.has(u)||u*this.pageSize>this.data.length)&&Kf(`broken overflow chain`),d.add(u);let e=(u-1)*this.pageSize,n=Math.min(r-4,t-l);c.set(this.data.subarray(e+4,e+4+n),l),l+=n,u=this.view.getUint32(e)}return c}varint(e,t=this.data){let n=0;for(let r=0;r<8;r++){let i=t[e+r];if(i===void 0&&Kf(`varint past the end`),n=n*128+(i&127),i<128)return[n,r+1]}return e+8>=t.length&&Kf(`varint past the end`),[n*256+t[e+8],9]}record(e){let[t,n]=this.varint(0,e);t>e.length&&Kf(`record header larger than the record`);let r=[];for(let i=n;i<t;){let[t,n]=this.varint(i,e);r.push(t),i+=n}let i=new DataView(e.buffer,e.byteOffset,e.byteLength),a=[],o=t;for(let t of r)if(t===0)a.push(null);else if(t<=6){let n=[0,1,2,3,4,6,8][t];a.push(Yf(e,o,n)),o+=n}else if(t===7)a.push(i.getFloat64(o)),o+=8;else if(t===8)a.push(0);else if(t===9)a.push(1);else if(t>=12){let n=(t-(t&1?13:12))/2,r=e.subarray(o,o+n);a.push(t&1?this.decoder.decode(r):r),o+=n}else Kf(`reserved serial type ${t}`);return a}};function Yf(e,t,n){let r=!!(e[t]&128),i=0;for(let a=0;a<n;a++)i=i*256+(r?255-e[t+a]:e[t+a]);return r?-i-1:i}var Xf=class extends Error{},Zf=``,Qf=67108864;function $f(e){let[t]=[...e.rows(`col`)],n=JSON.parse(String(t?.values[9]??`{}`)),r=JSON.parse(String(t?.values[10]??`{}`));return{noteTypes:Object.entries(n).map(([e,t])=>({id:Number(t.id??e),name:String(t.name??e),fields:[...t.flds??[]].sort((e,t)=>e.ord-t.ord).map(e=>e.name)})),decks:new Map(Object.entries(r).map(([e,t])=>[Number(e),String(t.name??``)]))}}function ep(e){let t=new Map;for(let{values:[n,r,i]}of e.rows(`fields`)){let e=t.get(Number(n))??[];e.push({ord:Number(r),name:String(i)}),t.set(Number(n),e)}return{noteTypes:[...e.rows(`notetypes`)].map(({rowid:e,values:n})=>({id:Number(e),name:String(n[1]),fields:(t.get(Number(e))??[]).sort((e,t)=>e.ord-t.ord).map(e=>e.name)})),decks:new Map([...e.rows(`decks`)].map(({rowid:e,values:t})=>[Number(e),String(t[1]).split(Zf).join(`::`)]))}}function tp(e){let{noteTypes:t,decks:n}=e.hasTable(`notetypes`)?ep(e):$f(e),r=new Map;for(let{values:t}of e.rows(`cards`)){let[,e,n,i]=t,a=Number(t[15])||Number(n),o=r.get(Number(e));(!o||Number(i)<o.ord)&&r.set(Number(e),{ord:Number(i),did:a})}let i=[];for(let{rowid:t,values:a}of e.rows(`notes`))i.push({typeId:Number(a[2]),fields:String(a[6]??``).split(Zf),tags:String(a[5]??``).trim().split(/\s+/).filter(Boolean),deck:n.get(r.get(Number(t))?.did??-1)??``});return{noteTypes:t,notes:i}}function np(e){let t=[],n=new TextDecoder,r=()=>{throw new Xf(`bad media list`)},i=t=>{let n=0,i=1,a=t;for(;e[a]&128;a++,i*=128)n+=(e[a]&127)*i;return a>=e.length&&r(),[n+e[a]*i,a+1]},a=(t,n,a)=>{n>e.length&&r();for(let e=t;e<n;){let[t,o]=i(e),s=Math.floor(t/8),c=t&7;if(c===0)e=i(o)[1];else if(c===2){let[t,c]=i(o);c+t>n&&r(),a(s,c,c+t),e=c+t}else c===5?e=o+4:c===1?e=o+8:r()}};return a(0,e.length,(r,i,o)=>{if(r!==1)return;let s=``;a(i,o,(t,r,i)=>{t===1&&(s=n.decode(e.subarray(r,i)))}),t.push(s)}),t}var rp=/please update to the latest anki version/i;async function ip(e){let t=await Gd(e),n=e=>t.get(e),r=(t,n)=>Kd(e,t,n),i=n(`collection.anki21b`),a=n(`collection.anki21`)??n(`collection.anki2`);if(!i&&!a)throw new Xf(`no collection in package`);let{noteTypes:o,notes:s}=tp(new Jf(i?Uf(await r(i)):await r(a)));if(!i&&s.length===1&&rp.test(s[0].fields[0]??``))throw new Xf(`stub collection`);let c=n(`media`),l={};if(c){let e=await r(c);l=Wf(e)?Object.fromEntries(np(Uf(e)).map((e,t)=>[String(t),e])):JSON.parse(new TextDecoder().decode(e)||`{}`)}let u=new Map(Object.entries(l).map(([e,t])=>[t,e]));return{noteTypes:o.filter(e=>s.some(t=>t.typeId===e.id)),notes:s,media:new Set(u.keys()),readMedia:async e=>{let t=u.get(e),i=t===void 0?void 0:n(t);if(!i)return null;let a=await r(i,Qf);return Wf(a)?Uf(a,Qf):a}}}var ap=200,op=134217728,sp=6;async function cp(e,t,n,r){let i=new Map,a=new Set,o=0,s=0,c=()=>n({done:++o,total:e.length});for(let n=0;n<e.length&&!r?.aborted;){let o=new Map,l=0;for(;n<e.length&&o.size<ap&&l<op;){let r=e[n++],i=await t(r).catch(()=>null);i?(o.set(r,{file:Sn(i,r),bytes:i}),l+=i.length):(s++,c())}let u=await En([...new Set([...o.values()].map(e=>e.file))].filter(e=>!a.has(e))),d=[];for(let e of o){let[t,{file:n}]=e;u.has(n)||a.has(n)?(i.set(t,n),c()):d.push(e)}Fn(d.map(([,{file:e}])=>e));let f=new Map;await Dn(d,sp,async([e,{file:t,bytes:n}])=>{if(r?.aborted)return;let o=f.get(t);o||(o=fe(t,n,r).then(e=>e===`ok`,()=>!1),f.set(t,o)),await o?(i.set(e,t),a.add(t)):s++,c()})}return jn(a),{stored:i,failed:s}}var lp=()=>R()===`file`;function up(e,t){let n=new Set;for(let r of e){for(let e of[r.sound,r.exampleSound])e&&t.has(e)&&Cn(e,`sound`)&&n.add(e);r.image&&t.has(r.image)&&Cn(r.image,`image`)&&n.add(r.image)}return[...n]}function dp(e,t){let n=t.get(e);return n||(n=ls().find(t=>t.name===e)?.id??fs(e),t.set(e,n)),n}function fp(e,t,n){let r=M(),i=S()||void 0,a=new Date().toISOString(),o=new Map,s=new Map;for(let c of e){let e=dp(c.deck||t,o),l=s.get(c.word);l?l.setIds.includes(e)||l.setIds.push(e):s.set(c.word,{word:c.word,base_form:c.word,meaning:c.meaning,meaning_lang:i,level:``,...c.reading&&{reading:c.reading},...c.example&&{example:c.example},...c.notes&&{notes:c.notes},...c.sound&&n.has(c.sound)&&{audio:n.get(c.sound)},...c.exampleSound&&n.has(c.exampleSound)&&{example_audio:n.get(c.exampleSound)},...c.image&&n.has(c.image)&&{image:n.get(c.image)},setIds:[e],chats:r?[r]:[],langs:[Wo()],dateAdded:a})}let{wordbook:c,added:l,merged:u}=Gr(z(),[...s.values()]);return B(c),{added:l,updated:u,setIds:[...o.values()]}}var pp={word:`anki.fWord`,meaning:`anki.fMeaning`,reading:`anki.fReading`,example:`anki.fExample`,notes:`anki.fNotes`},mp=(e,t)=>{let n=n=>e&&t[n]>=0?lo(io(e.fields[t[n]]??``)).text:``;return C(`anki.sample`,{word:n(`word`)||`—`,meaning:n(`meaning`)||`—`})};async function hp(e){i(C(`anki.reading`),`info`,2e3);let t;try{t=await ip(e)}catch(e){return console.error(`[Polyglot] Anki import:`,e),i(e instanceof Xf&&e.message===`stub collection`?C(`anki.stub`):C(`anki.fail`,{msg:e instanceof Error?e.message:String(e)}),`err`,8e3),[]}let n=ho(t.noteTypes,t.notes);return n.length?gp(e.name,t,n):(i(C(`wb.importNone`),`warn`),[])}function gp(e,t,n){return new Promise(r=>{let a=lp(),o=new AbortController,s=!1,l=document.createElement(`div`);l.className=`pg-dim`,j(l,A`
            <div class="pg-dialog pg-doc-dialog pg-deck-dialog" role="dialog" aria-modal="true">
                <h3 class="pg-doc-title">${C(`anki.title`,{file:e})}</h3>
                <div class="pg-doc-body">
                    ${n.map(({type:e,count:t,sample:n,mapping:r})=>A`
                    <fieldset class="pg-anki-type" data-type="${e.id}">
                        <legend>
                            <label><input type="checkbox" data-include checked> <b>${e.name}</b>
                            <span class="pg-anki-count">${C(`anki.notes`,{n:t})}</span></label>
                        </legend>
                        <div class="pg-anki-map">${uo.map(t=>A`
                            <label>
                                <span>${C(pp[t])}</span>
                                <select class="pg-set-select" data-target="${t}">
                                    <option value="-1">${C(`anki.none`)}</option>
                                    ${e.fields.map((e,n)=>A`<option value="${n}" ${r[t]===n&&A`selected`}>${e}</option>`)}
                                </select>
                            </label>`)}
                        </div>
                        <div class="pg-anki-sample">${mp(n,r)}</div>
                    </fieldset>`)}
                    ${a?A`<label class="pg-anki-media"><input type="checkbox" data-media checked> <span></span></label>`:A`<p class="pg-anki-hint">${C(`anki.mediaUnavailable`)}</p>`}
                    <p class="pg-anki-hint">${C(`anki.hint`)}</p>
                    <div class="pg-anki-progress" hidden></div>
                </div>
                <div class="pg-dialog-row">
                    <button class="pg-btn pg-btn-secondary" data-anki="cancel">${C(`anki.cancel`)}</button>
                    <button class="pg-btn pg-btn-primary" data-anki="import">${C(`anki.import`)}</button>
                </div>
            </div>`);let u=e=>l.querySelector(e),d=[...l.querySelectorAll(`.pg-anki-type`)],f=e=>Object.fromEntries(uo.map(t=>[t,Number(e.querySelector(`[data-target="${t}"]`)?.value??-1)])),p=()=>new Map(d.filter(e=>e.querySelector(`[data-include]`)?.checked).map(e=>[Number(e.dataset.type),f(e)])),m=()=>{let e=u(`.pg-anki-media span`);e&&(e.textContent=C(`anki.media`,{n:up(mo(t.notes,p()),t.media).length}))};m(),l.addEventListener(`change`,e=>{let t=e.target.closest(`.pg-anki-type`);if(t){let e=n.find(e=>e.type.id===Number(t.dataset.type)),r=t.querySelector(`.pg-anki-sample`);r&&(r.textContent=mp(e?.sample,f(t))),t.classList.toggle(`pg-anki-off`,!t.querySelector(`[data-include]`)?.checked)}m()});let h=e=>{o.abort(),window.removeEventListener(`keydown`,ee,!0),l.remove(),r(e)},ee=e=>{e.key===`Escape`&&(e.stopPropagation(),s||h([]))};window.addEventListener(`keydown`,ee,!0),l.addEventListener(`pointerdown`,e=>{e.target===l&&!s&&h([])});let te=async()=>{let n=p();if([...n.values()].some(e=>e.word<0)){i(C(`anki.noWord`),`warn`,4e3);return}let r=mo(t.notes,n);if(!r.length){i(C(`wb.importNone`),`warn`);return}s=!0;let a=l.querySelectorAll(`input, select, [data-anki="import"]`);a.forEach(e=>{e.disabled=!0});let d=u(`.pg-anki-progress`);try{let n=new Map,a=u(`[data-media]`)?.checked?up(r,t.media):[];if(a.length&&d){d.hidden=!1;let e=await cp(a,t.readMedia,e=>{d.textContent=C(`anki.progressMedia`,{done:e.done,total:e.total})},o.signal);if(o.signal.aborted)return;n=e.stored,e.failed&&i(C(`anki.mediaFailed`,{n:e.failed}),`warn`,6e3)}let s=fp(r,e.replace(/\.(apkg|colpkg)$/i,``),n);i(C(`anki.done`,{added:s.added,updated:s.updated,sets:s.setIds.length}),`ok`,5e3),h(s.setIds)}catch(e){re(`anki`,`import: ${c(e)}`),i(C(`anki.importFailed`,{msg:c(e)}),`err`,8e3),s=!1,a.forEach(e=>{e.disabled=!1}),d&&(d.hidden=!0)}};l.addEventListener(`click`,e=>{let t=e.target.closest(`[data-anki]`)?.dataset.anki;t===`cancel`&&h([]),t===`import`&&te()}),document.body.append(l),u(`[data-anki="import"]`)?.focus()})}var _p=new Set([...Fe,`grammar`,`sentence`,`idiom`]),vp=/^["']?word["']?[,\t]/i;function yp(e){let t=[],n=``,r=!1;for(let i=0;i<e.length;i++){let a=e[i];a===`"`&&r&&e[i+1]===`"`?(n+=`"`,i++):a===`"`?r=!r:a===`,`&&!r?(t.push(n),n=``):n+=a}return t.push(n),t}var bp=(e=``)=>e.replace(/<img[^>]*>/gi,``).replace(/\[sound:[^\]]*\]/gi,``).trim();function xp(e){let t=e.trim();return _p.has(t.toUpperCase())?t.toUpperCase():_p.has(t)?t:`A1`}var Sp=[`word`,`base_form`,`meaning`,`level`,`original_form`,`context_meaning`];function Cp(e,t){if(e){let t=e.map(e=>e.toLowerCase());return Object.fromEntries(Sp.map(e=>[e,t.indexOf(e)]).filter(([,e])=>e>=0))}let n=+!!t;return{word:0,meaning:1,level:2,original_form:3+n,context_meaning:4+n}}function wp(e){let t=e.split(`
`).find(e=>e.trim()&&!e.startsWith(`#`))??``,n=/^#separator:tab/m.test(e)||t.includes(`	`)&&!t.startsWith(`"`),r=(n?e.split(`
`):bs(e)).filter(e=>e.trim()&&!e.startsWith(`#`)),i=e=>(n?e.split(`	`).map(e=>e.replace(/^"|"$/g,``)):yp(e).map(e=>e.replace(/^'(?=[=+\-@\t])/,``))).map(bp),a=e=>n?io(e):e,o=Cp(r.length&&vp.test(r[0].trim())?i(r.shift()):null,n),s=(e,t)=>o[t]===void 0?``:e[o[t]]??``,c=(e,t)=>a(s(e,t)),l=[];for(let e of r){let t=i(e),n=c(t,`word`),r=s(t,`meaning`);if(!n||!r)continue;let o=/Base:\s*([^<]+)/i.exec(r)?.[1],u=o?a(o).trim():void 0,d=c(t,`level`);l.push({word:n,base_form:c(t,`base_form`)||u||n,meaning:io(r).replace(/\s*Base:[^.]*$/i,``).trim(),level:d?xp(d):`A1`,original_form:c(t,`original_form`)||void 0,context_meaning:c(t,`context_meaning`)||void 0})}return l}function Tp(e,t){let n=wp(e),r=t.replace(/\.(csv|txt)$/i,``);if(!n.length)return i(C(`wb.importNone`),`warn`),null;let a=fs(r),o=M(),s=z(),c=new Map(s.map(e=>[e.word,e])),l=0,u=0;for(let e of n){let t=c.get(e.word);if(t){t.setIds??=[];let e=t.setIds.includes(a);e||t.setIds.push(a);let n=kr(t,Wo());(Or(t,o)||!e||n)&&u++;continue}let n={...e,meaning_lang:S()||void 0,setIds:[a],chats:o?[o]:[],langs:[Wo()],dateAdded:new Date().toISOString()};s.push(n),c.set(e.word,n),l++}return!l&&!u?(ps(a),i(C(`wb.importNone`),`warn`),null):(B(s),i(l&&u?C(`wb.importBoth`,{added:l,updated:u,set:r}):l?C(`wb.importNew`,{n:l,set:r}):C(`wb.importUpdate`,{n:u,set:r}),`ok`,4e3),{setId:a})}function Ep(){return new Promise(e=>{let t=Object.assign(document.createElement(`input`),{type:`file`,accept:`.csv,.txt,.json,.zip,.apkg,.colpkg`});t.addEventListener(`change`,async()=>{let n=t.files?.[0];if(!n)e(null);else if(/\.(apkg|colpkg)$/i.test(n.name)){let t=await hp(n);e(t.length?{setId:t.length===1?t[0]:void 0}:null)}else try{/\.(json|zip)$/i.test(n.name)?e(await vf(n)?{}:null):e(Tp(await n.text(),n.name))}catch{i(C(`wb.importFail`),`err`),e(null)}}),t.click()})}function Dp(e,t){let n=rs();e.hidden=!1,j(e,n.length?A`
        <div class="pg-wb-dupes-head">
            <b>${C(`wb.dupTitle`,{n:n.length})}</b>
            <button class="pg-wb-row-btn" data-dupes="all">${C(`wb.dupMergeAll`)}</button>
            <button class="pg-wb-row-btn" data-dupes="close">${C(`wb.dupClose`)}</button>
        </div>
        <ul class="pg-wb-dupes-list">${n.map((e,t)=>A`
            <li>
                <span class="pg-wb-dupes-keep">${e[0].word}</span>
                <span class="pg-wb-dupes-rest">← ${e.slice(1).map(e=>e.word).join(`, `)}</span>
                <button class="pg-wb-row-btn" data-dupes="${t}">${C(`wb.dupMerge`)}</button>
            </li>`)}
        </ul>`:A`
        <div class="pg-wb-dupes-head">
            <span>${C(`wb.dupNone`)}</span>
            <button class="pg-wb-row-btn" data-dupes="close">${C(`wb.dupClose`)}</button>
        </div>`),e.onclick=r=>{let a=r.target.closest(`[data-dupes]`)?.dataset.dupes;if(!a)return;if(a===`close`){e.hidden=!0;return}let o=(a===`all`?n:[n[Number(a)]].filter(Boolean)).reduce((e,t)=>e+is(t.map(e=>e.word)),0);o&&i(C(`wb.dupMerged`,{n:o}),`ok`,3e3),t(),Dp(e,t)}}var Op=(...e)=>V().some(t=>e.includes(t.word)),kp=e=>A`${e.split(`
`).map((e,t)=>A`${t>0&&$t(`<br>`)}${e}`)}`,Ap=(e,t,n)=>A`
    <div class="pg-word-detail-header"><h2>${e}</h2>${n}${t}</div>`,jp=(e,t,n=!1)=>(t||n)&&A`
    <div class="pg-grammar-section"><span class="pg-g-label">${e}</span>${t??``}</div>`;function Mp(e,t){return A`
        <button class="pg-btn pg-btn-primary pg-btn-full pg-detail-save" ${e&&A`disabled`}>
            ${e?C(`det.saved`):t}
        </button>`}var Np=()=>A`<button class="pg-detail-ignore" title="${C(`wb.ignoreTip`)}">${C(`det.ignore`)}</button>`;function Pp(e,t,n){let r=[...new Set(t.map(e=>e?.trim()).filter(e=>!!e))],i=e.querySelector(`.pg-detail-ignore`);i?.addEventListener(`click`,async()=>{let t=z().find(e=>r.includes(e.word))?.word;(!t||await g(C(`det.ignoreSaved`,{word:t}),{yes:C(`wb.ignore`)}))&&i.isConnected&&(n.ignore(r),j(e,A`<div class="pg-empty-hint">${C(`det.ignored`)}</div>`))})}function Fp(e,t,n){let r=e.querySelector(`.pg-detail-save`);r?.addEventListener(`click`,()=>{n.save(t),r.textContent=C(`det.saved`),r.disabled=!0},{once:!0})}var Ip=A`
    <div class="pg-detail-skeleton">
        <div class="pg-skeleton pg-detail-skeleton-title"></div>
        <div class="pg-skeleton"></div><div class="pg-skeleton"></div>
        <div class="pg-skeleton"></div><div class="pg-skeleton"></div>
        <div class="pg-skeleton pg-detail-skeleton-button"></div>
    </div>`;function Lp(e,t,n,r){j(e,A`
        ${Ap(t,$t(``))}
        <div class="pg-error-msg">${C(`det.failed`)} ${n}</div>
        <button class="pg-btn pg-btn-secondary pg-btn-full pg-detail-retry">${C(`det.retry`)}</button>`),e.querySelector(`.pg-detail-retry`)?.addEventListener(`click`,()=>r.lookup(t))}function Rp(e){return A`
        <div class="pg-det-notes-wrap">
            <div class="pg-det-notes-header">
                <span class="pg-det-notes-label">${C(`wb.noteLabel`)}</span>
                <button class="pg-icon-btn pg-det-note-edit" title="${C(`wb.noteTitle`)}">📝</button>
            </div>
            <div class="${e?`pg-det-notes-text`:`pg-det-notes-empty`}">${e||C(`wb.noteEmpty`)}</div>
            <div class="pg-wb-note-editor" hidden></div>
        </div>`}function zp(e,t,n){let r=t.base_form?.trim()||t.word,i=V().find(e=>e.word===r||e.word===t.word),a=x(),o=he(a.language,t.word,a.dict_url_custom),s=$u(t)??(i&&$u(i));j(e,A`
        ${Ap(ed(t.word,s),A`<span class="pg-level-badge level-${oe(t.level)}">${ae(t.level)}</span>`,A`
            ${o&&A`<a href="${o}" target="_blank" rel="noopener" class="pg-icon-btn pg-dict-btn" title="${C(`tap.lookUp`)}">📖</a>`}
            ${Uu({saved:!!i?.audio,label:C(`wb.listen`)})}`)}
        <div class="pg-word-meta">
            <span class="pg-meta-base">${t.base_form?ed(t.base_form,s):``}</span>
            <span class="pg-meta-pos">${t.pos_info??``}</span>
        </div>
        <div class="pg-word-meaning">${t.meaning}</div>
        ${(i?.seen??0)>0&&A`<div class="pg-det-seen">${C(`det.seen`,{n:i?.seen??0})}</div>`}
        ${i?.image&&A`<img class="pg-word-img" src="${ue(i.image)}" alt="">`}
        ${(t.word_family?.length??0)>0&&A`
        <div class="pg-det-family">
            <span class="pg-det-family-label">${C(`det.wordFamily`)}</span>
            <div class="pg-det-family-chips">${t.word_family?.map(e=>A`
                <button class="pg-det-family-chip" data-word="${e.form}" title="${e.meaning}">
                    <span class="pg-det-family-form">${e.form}</span>
                    <span class="pg-det-family-pos">${e.pos}</span>
                </button>`)}
            </div>
        </div>`}
        ${i&&Rp(i.notes)}
        ${Mp(!!i,C(`det.addWord`))}
        ${Np()}`),e.querySelector(`.pg-speak-btn`)?.addEventListener(`click`,()=>Lu(r,w(),{audio:i?.audio,keep:i&&{word:i.word,field:`audio`}})),e.querySelector(`.pg-det-family-chips`)?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-word]`)?.dataset.word;t&&n.lookup(t)}),e.querySelector(`.pg-det-note-edit`)?.addEventListener(`click`,()=>ad({editor:e.querySelector(`.pg-det-notes-wrap .pg-wb-note-editor`),preview:e.querySelector(`.pg-det-notes-wrap > :is(.pg-det-notes-text, .pg-det-notes-empty)`),onSaved:()=>zp(e,t,n)},r)),i||Fp(e,t,n),Pp(e,[t.word,t.base_form,i?.word],n)}function Bp(e,t,n){let r=Op(t.pattern);j(e,A`
        ${Ap(t.pattern,A`<span class="pg-level-badge level-grammar">${C(`det.gram`)}</span>`)}
        ${jp(C(`det.meaning`),t.meaning,!0)}
        ${jp(C(`det.structure`),t.structure,!0)}
        ${jp(C(`det.words`),t.words_used,!0)}
        ${Mp(r,C(`det.addGram`))}`),r||Fp(e,{word:t.pattern,base_form:t.pattern,meaning:t.meaning||``,level:`grammar`,pos_info:[t.structure,t.words_used].filter(Boolean).join(` · `)},n)}function Vp(e,t,n){let r=t.base_form||t.phrase,i=Op(r);j(e,A`
        ${Ap(t.phrase,A`<span class="pg-level-badge level-idiom">${C(`det.idiom`)}</span>`)}
        ${r!==t.phrase&&jp(C(`det.baseForm`),r)}
        ${jp(C(`det.meaning`),t.meaning,!0)}
        ${jp(C(`det.context`),t.context_meaning)}
        ${Mp(i,C(`det.addToWb`))}
        ${Np()}`),Pp(e,[t.phrase,r],n),i||Fp(e,{word:t.phrase,base_form:r,meaning:t.meaning,level:`idiom`,context_meaning:t.context_meaning},n)}function Hp(e,t,n){if(!t)j(e,A`<div class="pg-empty-hint">${kp(C(`det.hint`))}</div>`);else switch(t.type){case`loading`:j(e,Ip);break;case`error`:Lp(e,t.word,t.message,n);break;case`word`:zp(e,t.data,n);break;case`grammar`:Bp(e,t.data,n);break;case`idiom`:Vp(e,t.data,n)}}var Up=150,K=hu(),Wp=[...Ae,`sentence`],Gp=[`new`,`learning`,`known`];function Kp(){let e={new:0,learning:0,known:0};for(let t of V())U(t)&&e[nu(t)]++;return e}function qp(){let e=V();return{missed:e.filter(ru).length,status:Kp(),noSound:al()?e.filter(dr).length:null}}var Jp=null,Yp=(e,{missed:t,status:n,noSound:r})=>A`
    <div class="pg-run-bar pg-wb-reanalysis-bar" hidden></div>
    <div class="pg-run-bar pg-wb-sound-bar" hidden></div>

    <div class="pg-wb-search-row">
        <input type="search" class="pg-wb-search-inp" placeholder="${C(`wb.searchPh`)}" value="${K.query}" aria-label="${C(`wb.searchPh`)}">
        ${K.query&&A`<button class="pg-wb-search-clear" data-action="clear-search" title="${C(`wb.clearSearch`)}">✕</button>`}
    </div>

    <div class="pg-wb-filters">
        <div class="pg-filter-pills">${Wp.map(e=>A`
            <button class="pg-filter-pill ${K.level===e&&`active`}" data-action="level" data-level="${e}">
                ${e===`all`?C(`wb.filterAll`):ae(e)}
            </button>`)}
            ${(t>0||K.missed)&&A`
            <button class="pg-filter-pill pg-filter-missed ${K.missed&&`active`}" data-action="missed" title="${C(`wb.missedTip`)}">
                ${C(`wb.missed`,{n:t})}
            </button>`}
            ${((r??0)>0||K.noSound)&&A`
            <button class="pg-filter-pill ${K.noSound&&`active`}" data-action="no-sound" title="${C(`snd.noSoundTip`)}">
                ${C(`snd.noSound`,{n:r??0})}
            </button>`}
        </div>
        <div class="pg-wb-set-row">
            <select class="pg-set-select pg-status-select" aria-label="${C(`wb.allStatus`)}">
                <option value="all">${C(`wb.allStatus`)}</option>
                ${Gp.map(e=>A`<option value="${e}" ${K.status===e&&A`selected`}>${C(`wb.status.${e}`)} ${n[e]}</option>`)}
            </select>
            <select class="pg-set-select" aria-label="${C(`wb.allSets`)}">
                <option value="all">${C(`wb.allSets`)}</option>
                ${e.map(e=>A`<option value="${e.id}" ${K.setId===e.id&&A`selected`}>${e.name}</option>`)}
            </select>
            <button class="pg-icon-btn" data-action="new-set" title="${C(`wb.newSetTitle`)}"><i class="fa-solid fa-plus"></i></button>
        </div>
    </div>

    <div class="pg-wb-count-row">
        <span class="pg-wb-count"></span>
        <span class="pg-wb-sel-count" hidden></span>
        <button class="pg-wb-row-btn pg-wb-row-btn-danger pg-wb-when-selected" data-action="delete-selected" hidden>${C(`wb.delete`)}</button>
        <button class="pg-wb-row-btn pg-wb-when-selected" data-action="reanalyse-selected" hidden>${C(`wb.reanalyse`)}</button>
        <button class="pg-wb-row-btn pg-wb-when-selected" data-action="known-selected" title="${C(`wb.markKnown`)}" hidden>${C(`wb.toKnown`)}</button>
        <button class="pg-wb-row-btn pg-wb-when-selected" data-action="ignore-selected" title="${C(`wb.ignoreTip`)}" hidden>${C(`wb.ignore`)}</button>
        ${r!==null&&A`
        <button class="pg-wb-row-btn pg-wb-when-selected" data-action="sounds-selected" title="${C(`snd.makeTip`)}" hidden>${C(`snd.make`)}</button>`}
        <span class="pg-wb-count-spacer"></span>
        <button class="pg-wb-row-btn" data-action="dupes" title="${C(`wb.dupFindTip`)}">${C(`wb.dupFind`)}</button>
        <button class="pg-wb-row-btn" data-action="select-all">${C(`wb.selectAll`)}</button>
    </div>
    <div class="pg-wb-dupes" hidden></div>

    <div class="pg-wb-list"></div>

    ${e.length>0&&A`
    <div class="pg-set-manager">
        <div class="pg-set-manager-title">${C(`wb.manageSets`)}</div>
        ${e.map(e=>A`
        <div class="pg-set-row">
            <span class="pg-set-name">${e.name}</span>
            <button class="pg-icon-btn pg-set-del" data-action="delete-set" data-id="${e.id}" title="${C(`wb.deleteSet`)}">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>`)}
    </div>`}`,Xp=e=>e.querySelector(`.pg-wb-list`);function Zp(e){let t=Xp(e);if(!t)return;let n=Pd(t).length,r=t.querySelectorAll(`.pg-wb-row-chk`).length,i=e.querySelector(`.pg-wb-count`),a=e.querySelector(`.pg-wb-sel-count`);i&&(i.hidden=n>0),a&&(a.hidden=n===0,a.textContent=C(`wb.nSelected`,{n,total:r})),e.querySelectorAll(`.pg-wb-when-selected`).forEach(e=>{e.hidden=n===0});let o=e.querySelector(`[data-action="select-all"]`);o&&(o.textContent=C(r>0&&n===r?`wb.deselectAll`:`wb.selectAll`))}function Qp(e){let t=Xp(e);if(!t)return;let n=Md(t,{filter:K,sets:ls(),refresh:()=>q(e),onSelect:()=>Zp(e)}),r=e.querySelector(`.pg-wb-count`),i=[Go()&&qo()?w():``,M()&&Uo()&&Ho()===`chat`?C(`wb.scopeChat`):``].filter(Boolean);r instanceof HTMLElement&&(r.title=r.textContent=[Nd(n,K),...i].join(` · `)),Zp(e)}var $p={"clear-search":e=>{K.query=``,q(e)},dupes:e=>{let t=e.querySelector(`.pg-wb-dupes`);t&&Dp(t,()=>Qp(e))},missed:e=>{K.missed=!K.missed,q(e)},"no-sound":e=>{K.noSound=!K.noSound,q(e)},level:(e,t)=>{K.level=t.dataset.level??`all`,K.pos=``,q(e)},"new-set":async e=>{let t=(await r(C(`wb.newSet`),{hint:C(`wb.newSetHint`)}))?.trim();t&&(fs(t),q(e))},"select-all":e=>{let t=[...e.querySelectorAll(`.pg-wb-row-chk`)],n=t.every(e=>e.checked);t.forEach(e=>{e.checked=!n}),Zp(e)},"delete-selected":async e=>{let t=Xp(e),n=t?Pd(t):[];n.length&&await g(C(`wb.delConfirm`,{n:n.length}),{yes:C(`wb.delSetBtn`)})&&(Xo(n),q(e))},"known-selected":e=>{let t=Xp(e),n=t?Pd(t):[];n.length&&(Qo(n,!0),q(e))},"ignore-selected":async e=>{let t=Xp(e),n=new Set(V().filter(U).map(e=>e.word)),r=(t?Pd(t):[]).filter(e=>n.has(e));r.length?await g(C(`wb.ignoreConfirm`,{n:r.length}),{yes:C(`wb.ignore`)})&&($o(r),q(e)):i(C(`wb.ignoreNone`),`info`)},"reanalyse-selected":e=>{let t=Xp(e),n=t?Pd(t):[];n.length&&Zs({bar:()=>Jp?.querySelector(`.pg-wb-reanalysis-bar`)??null,words:n,confirm:!0,onDone:()=>{Jp&&Qp(Jp)}})},"sounds-selected":e=>{let t=Xp(e),n=t?Pd(t):[];n.length&&El({bar:()=>Jp?.querySelector(`.pg-wb-sound-bar`)??null,words:n,onDone:J})},"delete-set":async(e,t)=>{let n=t.dataset.id??``,r=ls().find(e=>e.id===n)?.name??``;await g(C(`wb.delSet`,{name:r}),{yes:C(`wb.delSetBtn`)})&&(ps(n),K.setId===n&&(K.setId=`all`),q(e))}};function em(e){e.addEventListener(`click`,t=>{let n=t.target.closest(`[data-action]`);n&&!n.closest(`.pg-wb-list`)&&$p[n.dataset.action??``]?.(e,n)});let t;e.addEventListener(`input`,n=>{let r=n.target;r.classList.contains(`pg-wb-search-inp`)&&(K.query=r.value,clearTimeout(t),t=setTimeout(()=>Qp(e),Up))}),e.addEventListener(`change`,t=>{let n=t.target;n.closest(`.pg-wb-list`)||(n.classList.contains(`pg-status-select`)?(K.status=n.value,q(e)):n.classList.contains(`pg-set-select`)&&(K.setId=n.value,q(e)))})}var tm=new WeakSet;function q(e){Xp(e)||(K.query=``);let t=Xp(e)?.scrollTop??0;Jp=e,j(e,Yp(ls(),qp())),Js(),tm.has(e)||(em(e),tm.add(e)),Qp(e);let n=Xp(e);n&&(n.scrollTop=t)}function J(){Jp&&q(Jp)}function nm(){Jp=null}async function rm(){let e=await Ep();e&&(e.setId&&(K.setId=e.setId),J())}function im(e,t){return Zs({bar:e,onBusy:t,onDone:J})}function am(e){if(!e.meaning_lang){let t=x();e.meaning_lang=t.native_lang===`custom`?t.native_lang_custom?.slice(0,10)||`custom`:t.native_lang??`en`}hs(e)&&J()}var om={subject:`pg-deep-role-subj`,verb:`pg-deep-role-verb`,auxiliary:`pg-deep-role-verb`,object:`pg-deep-role-obj`,complement:`pg-deep-role-comp`,modifier:`pg-deep-role-mod`,conjunction:`pg-deep-role-conj`,particle:`pg-deep-role-part`,article:`pg-deep-role-art`,preposition:`pg-deep-role-prep`,pronoun:`pg-deep-role-pron`},sm={gap:8,charWidth:8.5,chipPadding:16,minChip:36,top:4,lane:14};function cm(e){let t=e.map(e=>Math.max(String(e.text??``).length*sm.charWidth+sm.chipPadding,sm.minChip)),n=[],r=0;for(let e of t)n.push(r+e/2),r+=e+sm.gap;let i=Math.max(0,r-sm.gap),a=e.map((e,t)=>({from:t,to:e.head_idx??-1,label:e.dep_label??``})).filter(t=>t.to>=0&&t.to<e.length&&t.to!==t.from).sort((e,t)=>Math.abs(e.from-e.to)-Math.abs(t.from-t.to)),o=sm.top+a.length*sm.lane+6;return{width:i,height:o,paths:a.map((e,t)=>{let r=n[e.from],i=n[e.to],a=o-sm.top-t*sm.lane,s=a-sm.lane*1.2;return{d:`M${r},${a} Q${(r+i)/2},${s} ${i},${a}`,labelX:(r+i)/2,labelY:s-2,label:e.label,forward:e.from<e.to}})}}var lm=0;function um(e){let{width:t,height:n,paths:r}=cm(e);if(!r.length)return $t(``);let i=`pg-deep-arrow-${++lm}`;return A`
        <div class="pg-deep-arc-wrap">
            <svg class="pg-deep-arcs" width="${t}" height="${n}" viewBox="0 0 ${t} ${n}" aria-hidden="true">
                <defs>
                    <marker id="${i}" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M1 1L7 4L1 7" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </marker>
                </defs>
                ${r.map(e=>A`
                <g class="${e.forward?`pg-deep-arc-fwd`:`pg-deep-arc-back`}">
                    <path d="${e.d}" marker-end="url(#${i})"/>
                    ${e.label&&A`<text x="${e.labelX}" y="${e.labelY}" text-anchor="middle">${e.label}</text>`}
                </g>`)}
            </svg>
        </div>`}function dm(e){let t=e.tokens??[],n=e.grammar??[];return A`
        <div class="pg-deep-result">
            ${um(t)}
            <div class="pg-deep-tokens">${t.map((e,t)=>A`
                <span class="pg-deep-token ${om[e.role]??`pg-deep-role-mod`}" data-idx="${t}" title="${e.note??``}">
                    <span class="pg-deep-token-text">${e.text}</span>
                    <span class="pg-deep-token-label">${e.label}</span>
                </span>`)}
            </div>
            ${n.length>0&&A`
            <div class="pg-deep-grammar">${n.map(e=>A`
                <div class="pg-deep-gram-item">
                    <span class="pg-deep-gram-point">${e.point}</span>
                    <span class="pg-deep-gram-exp">${e.explanation}</span>
                </div>`)}
            </div>`}
            ${e.summary&&A`<div class="pg-deep-summary">${e.summary}</div>`}
        </div>`}var fm=A`
    <div class="pg-deep-skeleton">
        <div class="pg-skeleton"></div><div class="pg-skeleton"></div><div class="pg-skeleton"></div>
        <div class="pg-skeleton"></div><div class="pg-skeleton"></div>
    </div>`,pm=e=>typeof e==`string`?e:``,mm=e=>f(e)&&Array.isArray(e.tokens)?{...e,tokens:e.tokens.filter(e=>f(e)&&typeof e.text==`string`),grammar:(Array.isArray(e.grammar)?e.grammar:[]).filter(e=>f(e)&&typeof e.point==`string`).map(e=>({point:e.point,explanation:pm(e.explanation)})),summary:pm(e.summary)}:null,hm=new WeakMap;function gm(e){hm.get(e)?.abort()}async function _m(e,t,n){if(n.disabled)return;gm(t);let r=new AbortController;hm.set(t,r);let i=t.querySelector(`.pg-deep-area`);i||(i=Object.assign(document.createElement(`div`),{className:`pg-deep-area`}),t.querySelector(`.pg-tap-bubble-inner`)?.appendChild(i));let a=n.innerHTML;n.disabled=!0,n.setAttribute(`aria-busy`,`true`),j(n,A`<i class="fa-solid fa-spinner fa-spin"></i>`),j(i,fm);try{let{data:t}=await je.json({prompt:ut(e,w(),S()),signal:r.signal,accept:mm});r.signal.aborted||j(i,dm(t))}catch(e){r.signal.aborted||j(i,A`<div class="pg-deep-error">${C(`tap.deepFailed`)} (${c(e)})</div>`)}finally{n.innerHTML=a,n.disabled=!1,n.removeAttribute(`aria-busy`)}}var vm=A`
    <div class="pg-tap-bubble-inner pg-tap-loading">
        <div class="pg-tap-skeleton">
            <div class="pg-skeleton"></div><div class="pg-skeleton"></div><div class="pg-skeleton"></div>
        </div>
    </div>`,ym=e=>A`
    <div class="pg-tap-bubble-inner pg-tap-error"><span>${C(`tap.failed`,{msg:e})}</span></div>`,bm=(e,t)=>A`
    <span class="pg-tap-verb-chip">
        <b>${e.form}</b><span class="pg-tap-verb-arrow">→</span>${ed(e.base,$u(e))}
        <span class="pg-tap-verb-meaning">${e.meaning}</span>
        <button class="pg-tap-conj-btn" data-action="conjugate" data-verb="${t}" title="${C(`wb.conjTable`)}">📊</button>
        <button class="pg-tap-save-btn" data-action="save-verb" data-verb="${t}" title="${C(`wb.addWord`)}">＋</button>
    </span>`;function xm({translation:e,literal:t,key_verbs:n=[]}){return A`
        <div class="pg-tap-bubble-inner">
            <div class="pg-tap-translation">${e}</div>
            ${t&&t!==e&&A`<div class="pg-tap-literal">${t}</div>`}
            ${n.length>0&&A`<div class="pg-tap-verbs">${n.map(bm)}</div>`}
            <div class="pg-tap-actions">
                <button class="pg-tap-deep" data-action="deep" title="${C(`tap.deepTitle`)}">${C(`tap.deep`)}</button>
                <button class="pg-tap-save-sentence" data-action="save-sentence" title="${C(`tap.saveSentenceTitle`)}">${C(`tap.saveSentence`)}</button>
                <button class="pg-tap-close" data-action="close" title="${C(`tap.close`)}" aria-label="${C(`tap.close`)}"></button>
            </div>
        </div>`}function Sm(e,t){e.textContent=t,e.disabled=!0}async function Cm(e,t){let n=e.base||e.form,r=await sn(n,w()).catch(()=>null);am({word:e.form,base_form:n,meaning:e.meaning,level:e.level??``,reading:Qu(e),conj_cache:r??void 0}),Sm(t,C(`tap.saved`))}function wm(e,t,n){let r=n.key_verbs??[];e.addEventListener(`click`,i=>{let a=i.target.closest(`button[data-action]`);if(!a)return;i.stopPropagation();let o=r[Number(a.dataset.verb)];switch(a.dataset.action){case`close`:Tm(e);break;case`conjugate`:o&&ks(o.base,w(),{ai:je,getLang:w,getNativeLang:S});break;case`save-verb`:o&&Cm(o,a);break;case`save-sentence`:am({word:t.trim().slice(0,300),base_form:``,meaning:n.translation,level:`sentence`}),Sm(a,C(`wb.saved`));break;case`deep`:_m(t,e,a)}})}function Tm(e){gm(e),e.remove()}function Em(e){return e.querySelector(`.pg-tap-bubble`)}function Dm({textEl:e,anchorEl:t,sentence:n},r){let i=Em(e);if(i&&(Tm(i),r.kind===`loading`&&i.dataset.sentence===n))return!1;let a=Object.assign(document.createElement(`div`),{className:`pg-tap-bubble`});switch(a.dataset.sentence=n,r.kind){case`loading`:j(a,vm);break;case`error`:j(a,ym(r.message));break;case`result`:j(a,xm(r.result)),wm(a,n,r.result)}return t?.parentNode===e?t.after(a):e.appendChild(a),!0}var Om=e=>Yl(ql(e));function km(e,t=!1,n=Date.now()){let r=Om(n),i=aa(),a=i.find(e=>e.d===r)??{d:r,n:0,r:0,a:0},o={...a,n:a.n+ +!!e.wasNew,r:a.r+ +!e.wasNew,a:a.a+ +!!e.forgot};ha({days:[...i.filter(e=>e.d!==r),o]},t)}function Am(e=1,t=Date.now()){let n=Om(t),r=aa(),i=r.find(e=>e.d===n)??{d:n,n:0,r:0,a:0};ha({days:[...r.filter(e=>e.d!==n),{...i,o:(i.o??0)+e}]},!0)}var jm=(e=Date.now())=>aa().find(t=>t.d===Om(e))?.n??0,Mm={min:10,max:20},Nm=e=>U(e)&&!eu(e),Pm=e=>({word:e.word,meaning:e.meaning??``}),Fm=(t,n)=>e(t).slice(0,n);function Im(e,t=Math.random){let n=Mm.min+Math.floor(t()*(Mm.max-Mm.min+1));return Fm(e.filter(Nm),n).map(Pm)}function Lm(e,t=5){return Fm(e.filter(e=>e.level===`grammar`&&e.word.trim()),t).map(e=>({pattern:e.word,meaning:e.meaning??``}))}function Rm(e,t=3){return Fm(e.filter(e=>e.pos===`verb`&&U(e)&&!eu(e)),t).map(e=>({word:e.base_form?.trim()||e.word,meaning:e.meaning??``}))}var zm=e=>(e??``).normalize(`NFKC`).toLowerCase().trim();function Bm(e,t,n=Date.now()){let r=new Map;for(let t of e)if(U(t))for(let e of[zm(t.word),zm(t.base_form)])e&&!r.has(e)&&r.set(e,t);let i=new Set;for(let e of t){let t=r.get(zm(e));!t||$l(t)||eu(t)||(t.srs_due??1/0)<=n||(t.srs_due=n,i.add(t))}return[...i]}var Vm=864e5,Hm=e=>Math.round(Date.UTC(+e.slice(0,4),e.slice(5,7)-1,+e.slice(8,10))/Vm),Um=e=>e.n+e.r+(e.o??0),Wm=e=>Um(e)>0;function Gm(e,t,n=Date.now()){let r=ql(n),i=new Map(e.map(e=>[Hm(e.d),e])),a=new Set([...i].filter(([,e])=>Wm(e)).map(([e])=>e)),o=a.has(r),s=0;for(let e=o?r:r-1;a.has(e);e--)s++;let c=0,l=0,u=NaN;for(let e of[...a].sort((e,t)=>e-t))l=e===u+1?l+1:1,c=Math.max(c,l),u=e;let d=0,f=0;for(let e=r-29;e<=r;e++){let t=i.get(e);t&&(d+=t.n+t.r,f+=t.a)}return{streak:s,best:c,studiedToday:o,day:r,counts:new Map([...i].filter(([,e])=>Wm(e)).map(([e,t])=>[e,Um(t)])),today:i.get(r)??{d:Yl(r),n:0,r:0,a:0},accuracy:d?Math.max(0,1-f/d):null,ratings30:d,ahead:pu(t,7,n),words:t.length,known:t.filter(eu).length,due:du(t,n)}}var Km=864e5,qm=e=>new Date(e*Km),Jm=e=>A`${e.split(`
`).map((e,t)=>A`${t>0&&$t(`<br>`)}${e}`)}`;function Ym(e){let t=[e.streak===0?C(`rec.start`):e.studiedToday?``:C(`rec.keepUp`,{n:e.streak+1}),e.best>1?C(`rec.best`,{n:e.best}):``].filter(Boolean).join(` · `);return A`
        <div class="pg-record-streak"><b>${e.streak}</b><span>${C(`rec.streakUnit`)}</span></div>
        ${t&&A`<div class="pg-record-sub">${t}</div>`}`}function Xm(e){let t=qm(e.day),n=t.getUTCFullYear(),r=t.getUTCMonth(),i=Math.round(Date.UTC(n,r,1)/Km),a=Math.round(Date.UTC(n,r+1,0)/Km),o=qm(i).getUTCDay(),s=t=>t>=i&&t<=a&&e.counts.has(t),c=Array.from({length:o},()=>A`<span></span>`);for(let t=i;t<=a;t++){let n=qm(t).getUTCDay(),r=qm(t).toLocaleDateString(void 0,{month:`short`,day:`numeric`,timeZone:`UTC`}),i=[`pg-mday`,s(t)&&`pg-mday-on`,s(t)&&n>0&&s(t-1)&&`pg-join-l`,s(t)&&n<6&&s(t+1)&&`pg-join-r`,t===e.day&&`pg-mday-today`,t>e.day&&`pg-mday-future`].filter(Boolean).join(` `),a=s(t)?C(`rec.cell`,{date:r,n:e.counts.get(t)??0}):r;c.push(A`<span class="${i}" title="${a}"><span>${qm(t).getUTCDate()}</span></span>`)}let l=Array.from({length:7},(e,t)=>qm(i-o+t).toLocaleDateString(void 0,{weekday:`narrow`,timeZone:`UTC`}));return A`
        <div class="pg-month">
            <div class="pg-month-title">${t.toLocaleDateString(void 0,{month:`long`,timeZone:`UTC`})}</div>
            <div class="pg-month-grid pg-month-wd">${l.map(e=>A`<span>${e}</span>`)}</div>
            <div class="pg-month-grid">${c}</div>
        </div>`}function Zm(e,t){let n=e.accuracy===null?`—`:`${Math.round(e.accuracy*100)}%`,r=e.due+t,i=(e,t,n)=>n?A`<button class="pg-record-stat pg-record-go" data-go="${n}"><span class="pg-record-val">${e}</span><span class="pg-record-lab">${t} ›</span></button>`:A`<div class="pg-record-stat"><span class="pg-record-val">${e}</span><span class="pg-record-lab">${t}</span></div>`;return A`
        <div class="pg-record-stats">
            ${i(Um(e.today),C(`rec.today`))}
            ${i(r,C(`rec.due`),r>0?`review`:void 0)}
            ${i(n,C(`rec.accuracy`))}
            ${i(`${e.known}/${e.words}`,C(`rec.words`))}
        </div>`}function Qm(e,t){let n=Math.max(1,...e);return A`
        <div class="pg-record-ahead">
            <span class="pg-record-ahead-lab">${C(`rec.ahead`)}</span>
            <span class="pg-record-ahead-bars">${e.map((e,r)=>{let i=qm(t+r).toLocaleDateString(void 0,{weekday:`narrow`,timeZone:`UTC`});return A`<span class="pg-record-ab" title="${i}: ${e}">
                    <i style="height:${e?Math.max(15,Math.round(100*e/n)):0}%"></i><b>${i}</b></span>`})}</span>
            <span class="pg-record-ahead-lab">${C(`rec.aheadTotal`,{n:e.reduce((e,t)=>e+t,0)})}</span>
        </div>`}function $m(e,t){let n=V().filter(U),r=Gm(aa(),n),i=Math.min(n.filter(tu).length,Math.max(0,(x().srs_new_per_day??20)-r.today.n));j(e,A`
        <div class="pg-record">
            ${Ym(r)}
            ${Xm(r)}
            ${Zm(r,i)}
            ${Qm(r.ahead,r.day+1)}
            <div class="pg-empty-hint pg-record-hint">${Jm(C(`det.hint`))}</div>
        </div>`),e.querySelector(`[data-go="review"]`)?.addEventListener(`click`,t)}var eh=e=>/japanese|日本語|chinese|中文|汉语|普通话|mandarin|cantonese|korean|한국어/i.test(e),th={A1:[30,50],A2:[60,80],B1:[100,150],B2:[150,200],C1:[220,260],C2:[300,400]},nh={A1:[80,150],A2:[150,250],B1:[250,400],B2:[400,600],C1:[600,800],C2:[800,1e3]};function rh(e,t){let n=eh(t),[r,i]=(n?nh:th)[e]??(n?nh.B1:th.B1);return{min:r,max:i,unit:n?`chars`:`words`}}function ih(e,t){return t===`chars`?e.replace(/\s/g,``).length:e.split(/\s+/).filter(e=>/[\p{L}\p{N}]/u.test(e)).length}var Y=e=>typeof e==`string`?e.trim():``,ah=(e,t)=>Array.isArray(e)?e.map(Y).filter(Boolean).slice(0,t):[];function oh(e){if(!f(e))return null;let t=Y(e.instructions);if(!t)return null;let n=e.register===`formal`||e.register===`informal`?e.register:`neutral`;return{title:Y(e.title),instructions:t,points:ah(e.points,6),register:n,native:Y(e.instructions_native)}}var sh=[`task`,`coherence`,`accuracy`,`range`],ch=new Set([`grammar`,`vocabulary`,`spelling`,`punctuation`,`register`,`style`]),lh=e=>{let t=typeof e==`number`?e:typeof e==`string`?Number(e):NaN;return Number.isFinite(t)?Math.max(0,Math.min(3,Math.round(t))):0};function uh(e){return t=>{if(!f(t)||!f(t.scores))return null;let n=t.scores,r=Y(t.level).toUpperCase(),i=(Array.isArray(t.errors)?t.errors:[]).filter(f).map(e=>({original:Y(e.original),correction:Y(e.correction),type:ch.has(Y(e.type))?Y(e.type):`grammar`,explanation:Y(e.explanation)})).filter(e=>e.original&&e.correction&&e.original!==e.correction).slice(0,40);return{scores:Object.fromEntries(sh.map(e=>[e,lh(n[e])])),level:Fe.includes(r)?r:``,summary:Y(t.summary),corrected:Y(t.corrected)||e,errors:i,model:Y(t.model)}}}var dh=(e,t)=>t?[...e]:e.split(/(\s+)/).filter(Boolean),fh=4e6;function ph(e,t,n=!1){let r=dh(e,n),i=dh(t,n);if((r.length+1)*(i.length+1)>fh)return null;let a=i.length+1,o=new Uint16Array((r.length+1)*a);for(let e=r.length-1;e>=0;e--)for(let t=i.length-1;t>=0;t--)o[e*a+t]=r[e]===i[t]?o[(e+1)*a+t+1]+1:Math.max(o[(e+1)*a+t],o[e*a+t+1]);let s=[],c=(e,t)=>{let n=s[s.length-1];n?.kind===e?n.text+=t:s.push({kind:e,text:t})},l=0,u=0;for(;l<r.length&&u<i.length;)r[l]===i[u]?(c(`same`,r[l]),l++,u++):o[(l+1)*a+u]>=o[l*a+u+1]?c(`del`,r[l++]):c(`ins`,i[u++]);for(;l<r.length;)c(`del`,r[l++]);for(;u<i.length;)c(`ins`,i[u++]);return s}function mh(e){if(!f(e)||!Array.isArray(e.questions))return null;let t=e.questions.filter(f).map(e=>({sentence:Y(e.sentence).replace(/_{3,}/g,`___`),hint:Y(e.hint),answers:ah(e.answers,5),point:Y(e.point),explanation:Y(e.explanation),...Y(e.word)&&{word:Y(e.word)}})).filter(e=>e.sentence.split(`___`).length===2&&e.answers.length>0);return t.length?t:null}var hh=e=>e.normalize(`NFC`).toLocaleLowerCase().trim().replace(/\s+/g,` `).replace(/^[\p{P}\s]+|[\p{P}\s]+$/gu,``),gh=e=>e.normalize(`NFD`).replace(/\p{M}/gu,``).normalize(`NFC`);function _h(e,t){let n=hh(e);if(!n)return`wrong`;let r=t.map(hh);return r.includes(n)?`correct`:r.some(e=>gh(e)===gh(n))?`close`:`wrong`}var vh=4,yh=4,bh=3;function xh(e,t,n,r){let i=[],a=0;for(let o=d(t,n);o!==-1;o=d(t,n,o+r))i.push(e.slice(a,o)),a=o+r;if(!i.length)return null;let o=i[0].length;return i.push(e.slice(a)),{parts:i,answer:e.slice(o,o+r)}}function Sh(e){let t=e.example?.trim();if(!t)return null;let n=t.toLocaleLowerCase(),r=n.length===t.length?n:t;for(let i of[e.example_form,e.word,e.base_form,e.original_form]){let e=i?.trim();if(!e)continue;let a=xh(t,r,r===n&&e.toLocaleLowerCase().length===e.length?e.toLocaleLowerCase():e,e.length);if(a)return a}let i=(e.base_form||e.word).toLocaleLowerCase();if(i.length<yh||/\s/.test(i)||ie.test(i)||r!==n)return null;let a=i.slice(0,Math.max(yh,i.length-3)),o=null;for(let[e]of n.matchAll(/[\p{L}\p{M}]+/gu)){if(!e.startsWith(a)||e.length>i.length+bh)continue;let t=a.length;for(;t<i.length&&e[t]===i[t];)t++;let n=o&&t===o.shared&&Math.abs(e.length-i.length)<Math.abs(o.token.length-i.length);(!o||t>o.shared||n)&&(o={token:e,shared:t})}return o&&xh(t,n,o.token,o.token.length)}var Ch=Dt;function wh(e){if($l(e))return`meaning`;let t=[`meaning`];return Sh(e)&&t.push(`cloze`),e.word.trim().split(/\s+/).length<=vh&&t.push(`typing`),t[Ch(`${e.word}\n${e.srs_reviewed_at??0}`)%t.length]}function Th(e,t){return _h(t,[e.word,e.base_form,e.reading].filter(e=>!!e?.trim()))}var Eh=[{rating:0,key:`fl.again`,cls:`pg-srs-again`},{rating:1,key:`fl.hard`,cls:`pg-srs-hard`},{rating:2,key:`fl.good`,cls:`pg-srs-good`},{rating:3,key:`fl.easy`,cls:`pg-srs-easy`}],Dh=10;function Oh(e){let n=e=>(e<10?Math.round(e*10)/10:Math.round(e)).toLocaleString(t());return e<30?C(`fl.ivlDays`,{n:e}):e<365?C(`fl.ivlMonths`,{n:n(e/30)}):C(`fl.ivlYears`,{n:n(e/365)})}function kh(e){return A`
        <div class="pg-srs-rating">${Eh.map(t=>A`
            <button class="pg-srs-btn ${t.cls}" data-action="rate" data-rating="${t.rating}">
                <span class="pg-srs-label">${C(t.key)}</span>
                <span class="pg-srs-preview">${t.rating===0?C(`fl.ivlSoon`):Oh(e[t.rating])}</span>
            </button>`)}
        </div>
        <button class="pg-srs-known" data-action="set-known" title="${C(`wb.markKnown`)}">${C(`fl.knowIt`)}</button>`}var Ah=e=>A`${e.split(`
`).map((e,t)=>A`${t>0&&$t(`<br>`)}${e}`)}`,jh=null;function Mh(e,t=!1){return t?A`${e.parts.map((e,t)=>A`${t>0&&A`<span class="pg-cloze-blank" aria-label="${C(`qz.typedBlank`)}"></span>`}${e}`)}`:A`${e.parts.map((t,n)=>A`${n>0&&A`<b class="pg-cloze-answer">${e.answer}</b>`}${t}`)}`}function Nh(e){if(!e.example)return A`
        <div class="pg-flash-example-wrap">
            <div class="pg-flash-example pg-flash-example-loading"><i class="fa-solid fa-spinner fa-spin"></i></div>
        </div>`;let t=Sh(e);return A`
        <div class="pg-flash-example-wrap">
            <div class="pg-flash-example">${t?Mh(t):e.example}
                ${Uu({saved:!!e.example_audio,label:C(`fl.listenExample`),cls:`pg-flash-example-speak`,action:`speak-example`})}</div>
            ${e.example_translation&&A`<div class="pg-flash-example-trans">${e.example_translation}</div>`}
        </div>`}async function Ph(e,t,n){jh?.abort();let r=new AbortController;jh=r;let i=t.querySelector(`.pg-flash-example-wrap`);try{let{data:t}=await n.ai.json({prompt:lt(e.base_form||e.word,n.getLang(),n.getSettings().cefr_level,n.getNativeLang()),signal:r.signal,accept:l,missing:e=>ne(e,ct)}),a=t.sentence?.trim();if(r.signal.aborted||!a)return;let o=z(),s=o.findIndex(t=>t.word===e.word),c=t.translation?.trim()||void 0,u=typeof t.form==`string`&&d(a,t.form.trim())!==-1?t.form.trim():void 0;if(s>=0){let e={...o[s],example:a,example_translation:c??o[s].example_translation};u?e.example_form=u:delete e.example_form,o[s]=ur(e,`example_audio`),B(o)}Object.assign(e,{example:a,example_translation:c??e.example_translation}),u?e.example_form=u:delete e.example_form,delete e.example_audio,i?.isConnected&&(i.outerHTML=Nh(e).value)}catch(e){if(r.signal.aborted||!i?.isConnected)return;j(i,A`<div class="pg-flash-example pg-flash-example-err" title="${c(e)}">—</div>`)}finally{jh===r&&(jh=null)}}var Fh=class{root;deps;deck=[];index=0;flipped=!1;srs=!1;reviewed=0;extraNew=0;kinds=new Map;typed=null;setSelect;area;constructor(e,t,n){this.root=e,this.deps=t,this.srs=n,j(e,A`
            <div class="pg-flash-controls">
                <select class="pg-set-select pg-flash-set" aria-label="${C(`fl.allWords`)}">
                    <option value="all">${C(`fl.allWords`)}</option>
                    ${ls().map(e=>A`<option value="${e.id}">${e.name}</option>`)}
                </select>
                <button class="pg-btn pg-btn-secondary pg-srs-toggle" data-action="toggle-srs" title="${C(`fl.srsTitle`)}">
                    🔁 SRS <span class="pg-srs-badge" hidden>0</span>
                </button>
                <button class="pg-btn pg-btn-secondary pg-flash-shuffle" data-action="shuffle" title="${C(`fl.shuffle`)}">🔀</button>
            </div>
            <div class="pg-flash-area"></div>`),this.setSelect=e.querySelector(`.pg-flash-set`),this.area=e.querySelector(`.pg-flash-area`),e.addEventListener(`click`,e=>this.onClick(e)),e.addEventListener(`submit`,e=>{e.target.matches?.(`.pg-flash-type`)&&(e.preventDefault(),this.check())}),this.setSelect.addEventListener(`change`,()=>this.restart()),this.restart()}get card(){return this.deck[this.index]}kindOf(e){if(!this.srs)return`meaning`;let t=`${e.word}\n${e.srs_reviewed_at??0}`,n=this.kinds.get(t);return n||this.kinds.set(t,n=wh(e)),n}pool(){let e=this.setSelect.value;return V().filter(t=>U(t)&&(e===`all`||(t.setIds??[]).includes(e)))}newLeft(){let e=this.deps.getSettings().srs_new_per_day??20;return Math.max(0,e+this.extraNew-jm())}restart(){let e=this.pool();this.deck=this.srs?fu(e,this.newLeft()):e,this.index=0,this.flipped=!1,this.typed=null,this.reviewed=0,this.updateControls(e),this.render()}updateControls(e=this.pool()){let t=this.srs?this.deck.length:fu(e,this.newLeft()).length,n=this.root.querySelector(`.pg-srs-badge`);n&&(n.textContent=String(t),n.hidden=t===0),this.root.querySelector(`.pg-srs-toggle`)?.classList.toggle(`pg-srs-active`,this.srs);let r=this.root.querySelector(`.pg-flash-shuffle`);r&&(r.disabled=this.srs)}emptyView(){if(!this.srs)return A`<div class="pg-empty-hint">${Ah(C(`fl.noWords`))}</div>`;let e=this.pool(),t=mu(e),n=e.some(tu);return A`
            <div class="pg-srs-complete">
                <div class="pg-srs-complete-icon">🎉</div>
                <div class="pg-srs-complete-title">${C(`fl.allDone`)}</div>
                <div class="pg-srs-complete-sub">${C(`fl.allDoneSub`,{n:this.reviewed})}</div>
                <div class="pg-srs-forecast">${C(`fl.forecast`,{tomorrow:t.tomorrow,week:t.week})}</div>
                ${n&&A`<button class="pg-btn pg-btn-secondary pg-btn-full" data-action="more-new">${C(`fl.moreNew`,{n:Dh})}</button>`}
                <button class="pg-btn pg-btn-secondary pg-btn-full" data-action="browse-all">${C(`fl.backAll`)}</button>
            </div>`}cardView(e){let{flipped:t,srs:n}=this,r=n?`${C(`fl.remaining`,{n:this.deck.length})} · ${C(`fl.doneSess`,{n:this.reviewed})}`:`${this.index+1} / ${this.deck.length}`,i=n&&t?su(e):[],a=this.kindOf(e);return a===`meaning`?A`
            <div class="pg-flash-progress">${n&&$l(e)&&A`<span class="pg-srs-new">${C(`fl.newBadge`)}</span> `}${ru(e)&&A`<span class="pg-srs-new pg-missed-tag">${C(`wb.missedTag`)}</span> `}${r}</div>
            <div class="pg-flash-card ${t&&`pg-flash-flipped`}" data-action="flip">
                <div class="pg-flash-front">
                    <div class="pg-flash-word">${ed(e.word,$u(e))}</div>
                    ${e.pos_info&&A`<div class="pg-flash-pos">${e.pos_info}</div>`}
                    <div class="pg-flash-btn-row">
                        ${Uu({saved:!!e.audio,label:C(`fl.listen`),cls:`pg-flash-speak`,action:`speak`})}
                        ${this.deps.hasSpeechRecog()&&A`<button class="pg-flash-mic" data-action="mic" title="${C(`fl.mic`)}" data-active="false">🎤</button>`}
                    </div>
                </div>
                <div class="pg-flash-back">
                    ${t&&e.image&&A`<img class="pg-word-img" src="${ue(e.image)}" alt="">`}
                    <div class="pg-flash-meaning">${e.meaning}</div>
                    ${e.base_form&&e.base_form!==e.word&&A`<div class="pg-flash-pos">${e.base_form}</div>`}
                    ${e.context_meaning&&e.context_meaning!==e.meaning&&A`<div class="pg-flash-ctx">${e.context_meaning}</div>`}
                    ${t&&Nh(e)}
                    ${e.notes&&A`<div class="pg-flash-notes">${e.notes}</div>`}
                </div>
            </div>
            <div class="pg-pronun-result"></div>
            <div class="pg-flash-hint">${!t&&C(n?`fl.clickReveal`:`fl.tapReveal`)}</div>
            ${n&&t&&kh(i)}
            ${!n&&A`
            <div class="pg-flash-nav">
                <button class="pg-btn pg-btn-secondary" data-action="prev" ${this.index===0&&A`disabled`}>${C(`fl.prev`)}</button>
                <button class="pg-btn pg-btn-primary" data-action="flip">${C(t?`fl.showWord`:`fl.showMeaning`)}</button>
                <button class="pg-btn pg-btn-secondary" data-action="next" ${this.index===this.deck.length-1&&A`disabled`}>${C(`fl.next`)}</button>
            </div>`}`:this.askView(e,a,r,i)}askView(e,t,n,r){let{flipped:i,typed:a}=this,o=t===`cloze`?Sh(e):null,s=a&&A`
            <div class="pg-flash-typed pg-flash-typed-${a.grade}">
                ${a.grade===`correct`?`✓`:A`✗ <s>${a.text}</s>`}
                ${a.grade===`close`&&A`<span class="pg-typed-close">${C(`qz.typedClose`)}</span>`}
            </div>`;return A`
            <div class="pg-flash-progress">${ru(e)&&A`<span class="pg-srs-new pg-missed-tag">${C(`wb.missedTag`)}</span> `}${n}</div>
            <div class="pg-flash-card pg-flash-ask ${i&&`pg-flash-flipped`}" data-action="flip">
                <div class="pg-flash-front">
                    ${o?A`<div class="pg-flash-cloze">${Mh(o,!0)}</div>
                               ${e.example_translation&&A`<div class="pg-flash-example-trans">${e.example_translation}</div>`}`:A`<div class="pg-flash-meaning">${e.meaning}</div>
                               ${e.pos_info&&A`<div class="pg-flash-pos">${e.pos_info}</div>`}`}
                </div>
                <div class="pg-flash-back">
                    ${i&&e.image&&A`<img class="pg-word-img" src="${ue(e.image)}" alt="">`}
                    <div class="pg-flash-word">${ed(e.word,$u(e))}</div>
                    ${s}
                    <div class="pg-flash-meaning">${e.meaning}</div>
                    ${e.base_form&&e.base_form!==e.word&&A`<div class="pg-flash-pos">${e.base_form}</div>`}
                    ${i&&Nh(e)}
                    ${e.notes&&A`<div class="pg-flash-notes">${e.notes}</div>`}
                    <div class="pg-flash-btn-row">
                        ${Uu({saved:!!e.audio,label:C(`fl.listen`),cls:`pg-flash-speak`,action:`speak`})}
                        ${this.deps.hasSpeechRecog()&&A`<button class="pg-flash-mic" data-action="mic" title="${C(`fl.mic`)}" data-active="false">🎤</button>`}
                    </div>
                </div>
            </div>
            ${t===`typing`&&!i&&A`
            <form class="pg-flash-type">
                <input class="pg-soft-input pg-flash-input" type="text" autocomplete="off" spellcheck="false"
                    autocapitalize="off" enterkeyhint="done" placeholder="${C(`fl.typeHere`)}" aria-label="${C(`fl.typeHere`)}">
                <button type="submit" class="pg-btn pg-btn-primary">${C(`speak.check`)}</button>
            </form>`}
            <div class="pg-pronun-result"></div>
            <div class="pg-flash-hint">${!i&&C(t===`cloze`?`fl.clozeHint`:`fl.typeHint`)}</div>
            ${i&&kh(r)}`}render(){jh?.abort();let e=this.card;j(this.area,e?this.cardView(e):this.emptyView()),e&&this.flipped&&!e.example&&Ph(e,this.area,this.deps),this.area.querySelector(`.pg-flash-input`)?.focus({preventScroll:!0})}check(){let e=this.card,t=this.area.querySelector(`.pg-flash-input`)?.value.trim();e&&t&&(this.typed={text:t,grade:Th(e,t)},this.flipped=!0,this.render())}stopMic(){this.deps.getActiveRecog()?.abort(),this.deps.setActiveRecog(null)}go(e){let t=this.index+e;t<0||t>=this.deck.length||(this.index=t,this.flipped=!1,this.typed=null,this.render())}rate(e){let t=this.card;if(!t)return;let n=z(),r=n.find(e=>e.word===t.word);if(!r)return;let{requeue:i,wasNew:a}=cu(r,e);B(n,!0),km({wasNew:a,forgot:e===0},!0),this.deck.splice(this.index,1),i?this.deck.push(r):this.reviewed++,this.index=Math.min(this.index,Math.max(0,this.deck.length-1)),this.flipped=!1,this.typed=null,this.updateControls(),this.render()}setKnown(){let e=this.card;e&&(Qo([e.word],!0),this.deck=this.deck.filter(t=>t.word!==e.word),this.index=Math.min(this.index,Math.max(0,this.deck.length-1)),this.flipped=!1,this.typed=null,this.updateControls(),this.render())}onClick(t){let n=t.target.closest(`[data-action]`);if(!n||!this.root.contains(n))return;let r=n.dataset.action;r!==`mic`&&this.stopMic();let i=this.card;switch(r){case`flip`:this.flipped=!this.flipped,this.render();break;case`prev`:t.stopPropagation(),this.go(-1);break;case`next`:t.stopPropagation(),this.go(1);break;case`rate`:this.rate(Number(n.dataset.rating));break;case`set-known`:this.setKnown();break;case`toggle-srs`:this.srs=!this.srs,this.restart();break;case`browse-all`:this.srs=!1,this.restart();break;case`more-new`:this.extraNew+=Dh,this.restart();break;case`shuffle`:if(this.srs)break;this.restart(),this.deck=e(this.deck),this.render();break;case`speak`:t.stopPropagation(),i&&this.deps.speak(i.word,this.deps.getLang(),{audio:i.audio,keep:{word:i.word,field:`audio`}});break;case`speak-example`:t.stopPropagation(),i?.example&&this.deps.speak(i.example,this.deps.getLang(),{audio:i.example_audio,keep:{word:i.word,field:`example_audio`}});break;case`mic`:{if(t.stopPropagation(),n.dataset.active===`true`){this.stopMic();break}let e=this.area.querySelector(`.pg-pronun-result`);i&&e&&this.deps.setActiveRecog(this.deps.runPronunCheck(i.word,n,e));break}}}};function Ih(e,t,n=!1){new Fh(e,t,n)}var Lh=[{source:`words`,key:`speak.srcWords`},{source:`sentences`,key:`speak.srcSentences`}],Rh=[{mode:`random`,key:`speak.modeRandom`},{mode:`dictation`,key:`speak.modeDictation`},{mode:`shadowing`,key:`speak.modeShadowing`}],zh=/[^\p{L}\p{M}\p{N} ]/gu,Bh=e=>e.normalize(`NFC`).toLowerCase().trim().replace(zh,``);function Vh(e,t){let n=Bh(e),r=Bh(t);return n?r?ge(n,r):0:100}var Hh=[{min:95,key:`tts.perfect`,cls:`pg-pronun-perfect`},{min:75,key:`tts.great`,cls:`pg-pronun-great`},{min:50,key:`tts.keep`,cls:`pg-pronun-ok`},{min:0,key:`tts.tryAgain`,cls:`pg-pronun-tryagain`}],Uh=e=>Hh.find(t=>e>=t.min)??Hh[Hh.length-1],Wh=e=>A`
    <span class="pg-speak-answer">${e.word}</span>
    ${e.meaning&&A`<span class="pg-speak-meaning">${e.meaning}</span>`}`;function Gh(e){let t=e===`dictation`;return A`
        <div class="pg-speak-card">
            <div class="pg-speak-card-badge">${C(t?`speak.modeDictation`:`speak.modeShadowing`)}</div>
            <button class="pg-speak-play-btn" data-action="play" title="${C(`speak.play`)}" aria-label="${C(`speak.play`)}">🔊</button>
            <div class="pg-speak-hint">${C(t?`speak.dictHint`:`speak.shadHint`)}</div>
            ${t?A`
            <textarea class="pg-speak-textarea text_pole" placeholder="${C(`speak.dictPh`)}" rows="2"
                      autocomplete="off" autocorrect="off" spellcheck="false"></textarea>
            <button class="pg-btn pg-btn-primary pg-btn-full" data-action="check">${C(`speak.check`)}</button>
            <div class="pg-pronun-result"></div>`:A`
            <div class="pg-speak-mic-row">
                <button class="pg-speak-mic-btn" data-action="mic" title="${C(`speak.mic`)}" aria-label="${C(`speak.mic`)}">🎤</button>
                <div class="pg-pronun-result"></div>
            </div>`}
            <div class="pg-speak-reveal" hidden></div>
            <button class="pg-btn pg-btn-secondary pg-btn-full pg-speak-next" data-action="next" hidden>${C(`speak.next`)}</button>
        </div>`}var Kh=class{root;sources;deps;pool=[];index=0;choice=`random`;source;recognition=null;area;constructor(e,t,n,r){this.root=e,this.sources=t,this.deps=n,this.source=r&&t[r].length?r:t.words.length?`words`:`sentences`,j(e,A`
            ${t.sentences.length>0&&A`
            <div class="pg-speak-mode-group pg-speak-source" role="group">${Lh.map(e=>A`
                <button class="pg-speak-mode-btn ${e.source===this.source&&`active`}" data-action="source" data-source="${e.source}" ${!t[e.source].length&&A`disabled`}>${C(e.key)} ${t[e.source].length}</button>`)}
            </div>`}
            <div class="pg-speak-controls">
                <div class="pg-speak-mode-group" role="group">${Rh.map(e=>A`
                    <button class="pg-speak-mode-btn ${e.mode===this.choice&&`active`}" data-action="mode" data-mode="${e.mode}">${C(e.key)}</button>`)}
                </div>
                <span class="pg-speak-progress"></span>
            </div>
            <div class="pg-speak-card-area"></div>`),this.area=e.querySelector(`.pg-speak-card-area`),e.addEventListener(`click`,e=>this.onClick(e)),e.addEventListener(`keydown`,e=>{let t=e.target;(e.key===`Enter`||e.key===` `)&&t.matches(`[role="button"][data-action]`)&&(e.preventDefault(),t.click())}),this.restart()}get entry(){return this.pool[this.index]}restart(){this.pool=e(this.sources[this.source]),this.index=0,this.render()}modeFor(){let e=this.choice===`random`?Math.random()<.5?`dictation`:`shadowing`:this.choice;return e===`shadowing`&&!this.deps.hasSpeechRecognition()?`dictation`:e}render(){this.recognition?.abort(),this.recognition=null;let e=this.root.querySelector(`.pg-speak-progress`);e&&(e.textContent=`${Math.min(this.index+1,this.pool.length)} / ${this.pool.length}`);let t=this.entry;t?(j(this.area,Gh(this.modeFor())),this.deps.speak(t.word,this.deps.getLang(),{audio:t.audio,keep:{word:t.word,field:`audio`},speaker:t.speaker})):j(this.area,A`
                <div class="pg-score-perfect">${C(`speak.done`)}</div>
                <button class="pg-btn pg-btn-secondary pg-btn-full pg-speak-restart" data-action="restart">${C(`speak.restart`)}</button>`)}reveal(){let e=this.entry,t=this.area.querySelector(`.pg-speak-reveal`);if(!e||!t)return;j(t,Wh(e)),t.hidden=!1;let n=this.area.querySelector(`.pg-speak-next`);n&&(n.hidden=!1)}check(e){let t=this.entry,n=this.area.querySelector(`textarea`)?.value.trim(),r=this.area.querySelector(`.pg-pronun-result`);if(!t||!n||!r)return;let i=Vh(t.word,n),a=Uh(i);r.className=`pg-pronun-result ${a.cls}`,r.textContent=`${i}% — ${C(a.key)}`,e.hidden=!0,this.deps.logStudy?.(),this.reveal()}listen(e){if(e.dataset.active===`true`){this.recognition?.abort();return}let t=this.area.querySelector(`.pg-pronun-result`),n=this.entry;n&&t&&(this.recognition=this.deps.runPronunciationCheck(n.word,e,t,()=>{this.deps.logStudy?.(),this.reveal()}))}onClick(e){let t=e.target.closest(`[data-action]`);if(t)switch(t.dataset.action){case`mode`:this.root.querySelectorAll(`[data-action="mode"]`).forEach(e=>e.classList.toggle(`active`,e===t)),this.choice=t.dataset.mode,this.restart();break;case`source`:this.root.querySelectorAll(`[data-action="source"]`).forEach(e=>e.classList.toggle(`active`,e===t)),this.source=t.dataset.source,this.restart();break;case`play`:this.entry&&this.deps.speak(this.entry.word,this.deps.getLang(),{audio:this.entry.audio,keep:{word:this.entry.word,field:`audio`},speaker:this.entry.speaker});break;case`check`:this.check(t);break;case`say-word`:t.dataset.word&&this.deps.speak(t.dataset.word,this.deps.getLang());break;case`mic`:this.listen(t);break;case`next`:this.index++,this.render();break;case`restart`:this.restart()}}};function qh(e,t,n){let r=V().filter(e=>e.word?.trim()),i={words:r.filter(U),sentences:r.filter(e=>e.level===`sentence`)};!i.words.length&&!i.sentences.length?j(e,A`<div class="pg-error-msg">${C(`speak.noEntries`)}</div>`):new Kh(e,i,t,n)}var Jh=12,Yh=4,Xh=600;function Zh(e,t){return V().filter(n=>n.level!==`grammar`&&n.level!==`sentence`&&(e===`all`||(e===`missed`?ru(n):(n.setIds??[]).includes(e)))&&(t===`all`||n.level===t))}function Qh(t,n){let r=e(n).slice(0,Jh),i=0,a={},o=(e,t)=>A`
        <button class="pg-match-card pg-match-${t}" data-side="${t}" data-word="${e.word}">${t===`word`?e.word:e.meaning}</button>`;j(t,A`
        <div class="pg-match-header">
            <span class="pg-match-score" aria-live="polite">0 / ${r.length}</span>
            <button class="pg-icon-btn pg-match-quit" title="${C(`mat.quit`)}" aria-label="${C(`mat.quit`)}"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="pg-match-grid">
            <div class="pg-match-col">${e(r).map(e=>o(e,`word`))}</div>
            <div class="pg-match-col">${e(r).map(e=>o(e,`mean`))}</div>
        </div>`);let s=()=>{let{word:e,mean:n}=a;if(!e||!n)return;if(a.word=a.mean=void 0,e.dataset.word!==n.dataset.word){e.classList.add(`pg-match-wrong`),n.classList.add(`pg-match-wrong`),setTimeout(()=>[e,n].forEach(e=>e.classList.remove(`pg-match-wrong`,`pg-match-selected`)),Xh);return}e.classList.add(`pg-match-correct`),n.classList.add(`pg-match-correct`);let o=t.querySelector(`.pg-match-score`);o&&(o.textContent=`${++i} / ${r.length}`),Am(),i===r.length&&setTimeout(()=>j(t,A`<div class="pg-match-complete">${C(`mat.done`,{n:r.length})}</div>`),Xh)};t.onclick=e=>{let n=e.target;if(n.closest(`.pg-match-quit`)){t.replaceChildren();return}let r=n.closest(`.pg-match-card`);if(!r||r.matches(`.pg-match-correct, .pg-match-wrong`))return;let i=r.dataset.side;a[i]?.classList.remove(`pg-match-selected`),a[i]=r,r.classList.add(`pg-match-selected`),s()}}function $h(e){let t=Zh(`missed`,`all`).length;j(e,A`
        <div class="pg-match-setup">
            <div class="pg-match-setup-title">${C(`mat.title`)}</div>
            <div class="pg-match-options">
                <select class="pg-set-select pg-match-set" aria-label="${C(`mat.allWords`)}">
                    <option value="all">${C(`mat.allWords`)}</option>
                    ${t>0&&A`<option value="missed">${C(`wb.missed`,{n:t})}</option>`}
                    ${ls().map(e=>A`<option value="${e.id}">${e.name}</option>`)}
                </select>
                <select class="pg-set-select pg-match-level" aria-label="${C(`mat.allLevels`)}">
                    <option value="all">${C(`mat.allLevels`)}</option>
                    ${Fe.map(e=>A`<option value="${e}">${e}</option>`)}
                </select>
            </div>
            <div class="pg-match-count"></div>
            <button class="pg-btn pg-btn-primary pg-btn-full pg-match-start">${C(`mat.start`)}</button>
        </div>
        <div class="pg-match-game"></div>`);let n=t=>e.querySelector(t)?.value??`all`,r=()=>Zh(n(`.pg-match-set`),n(`.pg-match-level`)),i=e.querySelector(`.pg-match-count`),a=e.querySelector(`.pg-match-start`),o=()=>{let e=r().length;i&&(i.textContent=e>=Yh?C(`mat.available`,{total:e,n:Math.min(e,Jh)}):C(`mat.notEnough`,{n:e})),a&&(a.disabled=e<Yh)};e.querySelector(`.pg-match-options`)?.addEventListener(`change`,o),a?.addEventListener(`click`,()=>Qh(e.querySelector(`.pg-match-game`),r())),o()}var eg=(e,t)=>A`
    <div class="pg-score-text">${C(`qz.score`,{n:e-t,total:e})}</div>
    ${t?A`<button class="pg-btn pg-btn-secondary pg-btn-full pg-quiz-retry">${C(`qz.retry`,{n:t})}</button>`:A`<div class="pg-score-perfect">${C(`qz.allCorrect`)}</div>`}`,tg=4;function ng(e){return e.normalize(`NFC`).trim().replace(/\s+/g,` `).toLocaleLowerCase()}var rg=e=>typeof e==`string`||typeof e==`number`?String(e).trim():``;function ig(e,t){let n=Array.isArray(e)?e:e&&typeof e==`object`?Object.values(e):[],r=new Map;for(let e of n.map(rg)){if(!e)continue;let n=ng(e);(!r.has(n)||e===t)&&r.set(n,e)}return[...r.values()]}function ag(e,t){let n=ng(e),r=t.findIndex(e=>ng(e)===n);if(r!==-1)return r;let i=/^([a-z])[).:]?$/i.exec(e.trim());if(i){let e=i[1].toLowerCase().charCodeAt(0)-97;if(e<t.length)return e}let a=/^(\d+)[).:]?$/.exec(e.trim());if(a){let e=Number(a[1])-1;if(e>=0&&e<t.length)return e}return-1}function og(e,t,n){let r=t.slice(0,3),i=Math.floor(n()*(r.length+1));return[...r.slice(0,i),e,...r.slice(i)]}function sg(e,t=Math.random){if(!e||typeof e!=`object`)return null;let n=e,r=rg(n.question),i=rg(n.answer),a=ig(n.options,i);if(!r||!i)return null;let o=ag(i,a);if(o===-1?a=og(i,a,t):i=a[o],a.length>tg){let e=a.filter(e=>e!==i).slice(0,3);a=a.filter(t=>t===i||e.includes(t))}if(a.length<2)return null;let s=rg(n.passage),c=rg(n.word);return{type:rg(n.type),question:r,options:a,answer:i,explanation:rg(n.explanation),...s?{passage:s}:{},...c?{word:c}:{}}}function cg(e,t=Math.random){return(Array.isArray(e)?e:[]).map(e=>sg(e,t)).filter(e=>e!==null)}function lg(e,t){let n=t.filter(e=>!!e);n.length&&e.material?.relearn(n)}var ug=e=>A`<div class="pg-quiz-note">${C(`qz.generalNote`,{level:e})}</div>`,dg=5,fg=Je(e=>e.question.trim().toLowerCase()),pg=new WeakMap;function mg(e){pg.get(e)?.abort();let t=new AbortController;return pg.set(e,t),t.signal}var hg=(e=4)=>A`${Array.from({length:e},()=>A`
    <div class="pg-skeleton-quiz pg-skeleton">
        <div class="pg-skeleton-line pg-skeleton"></div>
        <div class="pg-skeleton-q pg-skeleton"></div>
        <div class="pg-skeleton-opt pg-skeleton"></div>
        <div class="pg-skeleton-opt pg-skeleton"></div>
        <div class="pg-skeleton-opt pg-skeleton"></div>
        <div class="pg-skeleton-opt pg-skeleton"></div>
    </div>`)}`,gg=(e,t)=>A`<div class="${e===`error`?`pg-error-msg`:`pg-empty-hint`}">${t}</div>`;function _g(e,t,n){let r=Te[e.type]??e.type;return A`
        <div class="pg-quiz-card" data-idx="${t}">
            ${n&&A`<div class="pg-quiz-passage">${e.passage}</div>`}
            <div class="pg-quiz-type-badge">${r}</div>
            <div class="pg-quiz-q">Q${t+1}. ${e.question}</div>
            <div class="pg-quiz-options">${e.options.map(t=>A`
                <button class="pg-opt-btn" ${t===e.answer&&A`data-correct`}>${t}</button>`)}
            </div>
            <div class="pg-quiz-exp" hidden>
                <span class="pg-quiz-correct-label">Answer: ${e.answer}</span><br>
                ${e.explanation}
            </div>
        </div>`}function vg(e){return A`${e.map((t,n)=>_g(t,n,!!t.passage&&t.passage!==e[n-1]?.passage))}`}function yg(e,t){let n=t.wrongAnswers();n.some(t=>t.question===e.question)||t.saveWrongAnswers([...n,{type:e.type,question:e.question,options:e.options,answer:e.answer,explanation:e.explanation,savedAt:Date.now()}])}function bg(t,n,r){let i=t.container.querySelector(`.pg-quiz-score`);if(i){i.hidden=!1,j(i,eg(n.length,r.length)),lg(t.deps,r.map(e=>n[e].word)),i.querySelector(`.pg-quiz-retry`)?.addEventListener(`click`,()=>{xg(t,r.map(t=>({...n[t],options:e(n[t].options)})),!0)});for(let e of r){let r=t.container.querySelector(`.pg-quiz-card[data-idx="${e}"] .pg-quiz-exp`);if(!r)continue;let i=Object.assign(document.createElement(`button`),{className:`pg-btn pg-btn-secondary pg-quiz-save-btn`,textContent:C(`qz.saveWrong`)});i.addEventListener(`click`,()=>{yg(n[e],t.deps),i.textContent=C(`qz.wrongSaved`),i.disabled=!0}),r.after(i)}}}function xg(e,t,n=!1){let{container:r,signal:i}=e;j(r,A`
        ${e.header}
        ${n&&A`<div class="pg-quiz-retry-header">${C(`qz.retryHeader`)}</div>`}
        ${vg(t)}
        <div class="pg-quiz-score" hidden></div>`);let a=new AbortController;i.addEventListener(`abort`,()=>a.abort(),{once:!0});let o=[],s=0;r.addEventListener(`click`,n=>{let r=n.target.closest(`.pg-opt-btn`),i=r?.closest(`.pg-quiz-card`);if(!r||!i||i.classList.contains(`pg-answered`))return;let c=`correct`in r.dataset;i.classList.add(`pg-answered`),r.classList.add(c?`pg-opt-correct`:`pg-opt-wrong`),i.querySelector(`.pg-quiz-exp`)?.removeAttribute(`hidden`),c||o.push(Number(i.dataset.idx)),e.deps.logStudy?.(),++s===t.length&&(a.abort(),bg(e,t,o.sort((e,t)=>e-t)))},{signal:a.signal})}async function Sg(e,t,n,r=mg(e)){j(e,A`${n.header}${hg(n.skeleton)}`);try{let{data:i}=await t.ai.json({prompt:n.prompt,signal:r,accept:o(`questions`,cg),merge:fg});if(r.aborted)return;xg({container:e,deps:t,signal:r,header:n.header},i)}catch(t){if(r.aborted)return;j(e,gg(`error`,C(`qz.genFail`,{msg:t instanceof Error?t.message:String(t)})))}}async function Cg(e,t,n=Ve.quizHistoryMessages,r=5){let i=mg(e),a=(t.getContext().chat??[]).map(e=>({name:e.name,mes:Fo(e.mes??``,t.getSettings())})).filter(e=>e.mes);if(a.length<2){j(e,gg(`empty`,C(`qz.noMessages`)));return}let o=a.slice(-n).map(e=>`${e.name}: ${e.mes}`).join(`
`),{cefr_level:s}=t.getSettings();return Sg(e,t,{prompt:et(o,t.getLang(),s,t.getNativeLang(),r)},i)}function wg(e,t){let n=t.getSettings().cefr_level,r=t.material?.words()??[],i=r.length>=5;return Sg(e,t,{prompt:nt(t.getLang(),n,t.getNativeLang(),i?r:[]),header:i?void 0:ug(n)})}function Tg(e,t){let{cefr_level:n}=t.getSettings();return Sg(e,t,{prompt:rt(t.getLang(),n,t.getNativeLang()),skeleton:6,header:A`
            <div class="pg-exam-header">
                <span class="pg-exam-title">${C(`qz.examTitle`)}</span>
                <span class="pg-exam-level">${n}</span>
            </div>`})}async function Eg(e,t){let n=mg(e),r=t.getLang(),i=t.getSettings().cefr_level;j(e,hg(3));let a=t.material?.verbs()??[],o=a.length?await t.getAllConjCache(r).catch(()=>[]):[];if(n.aborted)return;let s=e=>e.normalize(`NFKC`).toLowerCase().trim(),c=new Map(o.map(e=>[s(e.word),e.data])),l=a.map(e=>({word:e.word,table:c.get(s(e.word))}));return Sg(e,t,{prompt:ht(l,r,i,t.getNativeLang()),skeleton:3,header:l.length?A`<div class="pg-quiz-drill-header">${l.map(e=>A`<span class="pg-quiz-drill-verb">${e.word}</span>`)}</div>`:ug(i)},n)}function Dg(t,n){let r=mg(t),i=n.wrongAnswers();return i.length?(t.addEventListener(`click`,async e=>{e.target.closest(`.pg-targeted-clear`)&&await n.askConfirm(C(`qz.clearWrong`)+`?`)&&(n.saveWrongAnswers([]),mg(t),j(t,gg(`error`,C(`qz.noWrong`))))},{signal:r}),Sg(t,n,{prompt:gt(e(i).slice(0,dg),n.getLang(),n.getNativeLang()),header:A`
            <div class="pg-quiz-targeted-header">
                <span>${C(`qz.wrongCount`,{n:i.length})}</span>
                <button class="pg-btn pg-btn-secondary pg-btn-compact pg-targeted-clear">${C(`qz.clearWrong`)}</button>
            </div>`},r)):(j(t,gg(`error`,C(`qz.noWrong`))),Promise.resolve())}var Og=10,kg=()=>A`${[0,1,2].map(()=>A`
    <div class="pg-skeleton-quiz pg-skeleton">
        <div class="pg-skeleton-line pg-skeleton"></div>
        <div class="pg-skeleton-q pg-skeleton"></div>
    </div>`)}`;function Ag(e,t){let[n,r]=e.sentence.split(`___`);return A`
        <div class="pg-quiz-card pg-typed-card" data-idx="${t}">
            ${e.point&&A`<div class="pg-quiz-type-badge">${e.point}</div>`}
            <div class="pg-quiz-q">
                Q${t+1}. ${n}<form class="pg-typed-form"><input class="pg-soft-input pg-typed-input" type="text" autocomplete="off"
                    spellcheck="false" autocapitalize="off" enterkeyhint="done" aria-label="${e.hint||C(`qz.typedBlank`)}"></form>${r}
                ${e.hint&&A`<span class="pg-typed-hint">${e.hint}</span>`}
            </div>
            <div class="pg-quiz-exp" hidden>
                <span class="pg-quiz-correct-label">${C(`qz.typedAnswer`,{answer:e.answers.join(` / `)})}</span>
                <span class="pg-typed-close" hidden>${C(`qz.typedClose`)}</span><br>
                ${e.explanation}
            </div>
        </div>`}function jg(e,t){let n=t.wrongAnswers(),r=`${e.sentence} ${e.hint}`.trim();n.some(e=>e.question===r)||t.saveWrongAnswers([...n,{type:`grammar`,question:r,options:[],answer:e.answers[0],explanation:e.explanation,savedAt:Date.now()}])}function Mg(e,t,n,r,i=!1){j(e,A`
        ${i&&A`<div class="pg-quiz-retry-header">${C(`qz.retryHeader`)}</div>`}
        ${n.map((e,t)=>Ag(e,t))}
        <button class="pg-btn pg-btn-primary pg-btn-full pg-typed-grade-all">${C(`qz.typedGradeAll`)}</button>
        <div class="pg-quiz-score" hidden></div>`);let a=[],o=0,s=(i,s=!1)=>{let c=i.closest(`.pg-typed-card`);if(!c||c.classList.contains(`pg-answered`)||!i.value.trim()&&!s)return;let l=Number(c.dataset.idx),u=_h(i.value,n[l].answers);c.classList.add(`pg-answered`),i.readOnly=!0,i.classList.add(u===`correct`?`pg-typed-ok`:`pg-typed-bad`),c.querySelector(`.pg-quiz-exp`)?.removeAttribute(`hidden`),u===`close`&&c.querySelector(`.pg-typed-close`)?.removeAttribute(`hidden`),u!==`correct`&&a.push(l),t.logStudy?.();let d=[...e.querySelectorAll(`.pg-typed-input`)].find(e=>!e.readOnly);s||d?.focus({preventScroll:!1}),++o===n.length&&(e.querySelector(`.pg-typed-grade-all`)?.remove(),Ng(e,t,n,a.sort((e,t)=>e-t),r))};e.addEventListener(`submit`,e=>{let t=e.target;if(!t.matches?.(`.pg-typed-form`))return;e.preventDefault();let n=t.querySelector(`.pg-typed-input`);n&&s(n)},{signal:r}),e.querySelector(`.pg-typed-grade-all`)?.addEventListener(`click`,()=>{for(let t of e.querySelectorAll(`.pg-typed-input`))s(t,!0)},{signal:r}),e.querySelector(`.pg-typed-input`)?.focus({preventScroll:!0})}function Ng(e,t,n,r,i){let a=e.querySelector(`.pg-quiz-score`);if(a){a.hidden=!1,j(a,eg(n.length,r.length)),lg(t,r.map(e=>n[e].word)),a.querySelector(`.pg-quiz-retry`)?.addEventListener(`click`,()=>{Mg(e,t,r.map(e=>n[e]),mg(e),!0)});for(let a of r){let r=e.querySelector(`.pg-typed-card[data-idx="${a}"] .pg-quiz-exp`);if(!r)continue;let o=Object.assign(document.createElement(`button`),{className:`pg-btn pg-btn-secondary pg-quiz-save-btn`,textContent:C(`qz.saveWrong`)});o.addEventListener(`click`,()=>{jg(n[a],t),o.textContent=C(`qz.wrongSaved`),o.disabled=!0},{signal:i}),r.after(o)}}}async function Pg(e,t){let n=mg(e),r=t.getSettings().cefr_level,i=t.material?.grammar()??[],a=t.material?.words()??[],o=i.length>0||a.length>=5,s=o?null:ug(r);j(e,A`${s}${kg()}`);try{let{data:c}=await t.ai.json({prompt:xt(t.getLang(),r,t.getNativeLang(),Og,o?{grammar:i,words:a}:void 0),signal:n,accept:mh,merge:Je(e=>e.sentence)});if(n.aborted)return;if(Mg(e,t,c,n),s){let t=document.createElement(`div`);j(t,s),e.prepend(...t.childNodes)}}catch(t){if(n.aborted)return;j(e,A`<div class="pg-error-msg">${C(`qz.genFail`,{msg:t instanceof Error?t.message:String(t)})}</div>`)}}var Fg=()=>`chk_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`;function Ig(e,t=Date.now()){ha({checks:ti([{...e,id:Fg(),at:t},...ia()])})}var Lg=e=>ti(ia()).filter(t=>t.lang===e);function Rg(e){ha({checks:ia().filter(t=>t.id!==e)})}function zg(e,t){ha({checks:ia().map(n=>{if(n.id!==e)return n;let{note:r,...i}=n;return t.trim()?{...i,note:t.trim()}:i})})}var Bg=[{id:`letter`,icon:`✉️`,title:`wr.kindLetter`,desc:`wr.kindLetterDesc`},{id:`opinion`,icon:`💬`,title:`wr.kindOpinion`,desc:`wr.kindOpinionDesc`},{id:`scene`,icon:`🎭`,title:`wr.kindScene`,desc:`wr.kindSceneDesc`}],Vg={task:`wr.cTask`,coherence:`wr.cCoherence`,accuracy:`wr.cAccuracy`,range:`wr.cRange`},Hg=3e3,Ug=null,Wg=null;function Gg(e){return C(e.unit===`chars`?`wr.lengthChars`:`wr.lengthWords`,{min:e.min,max:e.max})}function Kg(e){let t=e.getSettings(),n=(e.getContext().chat??[]).map(e=>({name:e.name,mes:Fo(e.mes??``,t)})).filter(e=>e.mes).slice(-6).map(e=>`${e.name}: ${e.mes}`).join(`
`);return n.length>Hg?n.slice(-3e3):n}var qg=e=>e instanceof Error?e.message:String(e),Jg=()=>A`
    <div class="pg-quiz-modes">${Bg.map(e=>A`
        <button class="pg-quiz-mode-btn" data-kind="${e.id}">
            <span class="pg-qmode-icon">${e.icon}</span>
            <span class="pg-qmode-title">${C(e.title)}</span>
            <span class="pg-qmode-desc">${C(e.desc)}</span>
        </button>`)}
        <button class="pg-quiz-mode-btn pg-quiz-mode-wide" data-kind="archive">
            <span class="pg-qmode-icon">🪄</span>
            <span class="pg-qmode-text">
                <span class="pg-qmode-title">${C(`wr.archive`)}</span>
                <span class="pg-qmode-desc">${C(`wr.archiveDesc`)}</span>
            </span>
            <span class="pg-qmode-count">${C(`wr.archiveCount`,{n:Lg(Wo()).length})}</span>
        </button>
    </div>`,Yg=()=>A`
    <div class="pg-skeleton-quiz pg-skeleton">
        <div class="pg-skeleton-line pg-skeleton"></div>
        <div class="pg-skeleton-q pg-skeleton"></div>
        <div class="pg-skeleton-opt pg-skeleton"></div>
        <div class="pg-skeleton-opt pg-skeleton"></div>
    </div>`;function Xg(e,t){let{task:n}=e;return A`
        <div class="pg-quiz-card pg-write-task">
            <div class="pg-write-meta">${e.level} · ${C(`wr.reg_${n.register}`)} · ${Gg(t)}</div>
            ${n.title&&A`<div class="pg-write-title">${n.title}</div>`}
            <div class="pg-write-instr">${n.instructions}</div>
            ${n.points.length>0&&A`<ul class="pg-write-points">${n.points.map(e=>A`<li>${e}</li>`)}</ul>`}
            ${n.native&&A`
                <button class="pg-link-btn" data-write="native">${C(`wr.showNative`)}</button>
                <div class="pg-write-native" hidden>${n.native}</div>`}
        </div>`}var Zg=e=>A`<span class="pg-write-dots" aria-label="${e} / 3">${[0,1,2].map(t=>A`<i class="${t<e&&`on`}"></i>`)}</span>`;function Qg(e,t,n){let r=ph(e,t,eh(n)),i=r?.filter(e=>e.kind===`same`).reduce((e,t)=>e+t.text.length,0)??0;return!r||i<.3*Math.max(e.length,t.length)?A`${t}`:A`${r.map(e=>e.kind===`same`?A`${e.text}`:e.kind===`del`?A`<del>${e.text}</del>`:A`<ins>${e.text}</ins>`)}`}function $g(e,t,n){return A`
        <div class="pg-quiz-card pg-write-feedback">
            <div class="pg-write-level">
                ${t.level&&A`<b>${C(`wr.levelShown`,{level:t.level})}</b>`}
                <span class="pg-write-muted">${C(`wr.levelTarget`,{level:e.level})} · ${C(`wr.estimate`)}</span>
            </div>
            <div class="pg-write-scores">${sh.map(e=>A`
                <div class="pg-write-score"><span>${C(Vg[e])}</span>${Zg(t.scores[e])}</div>`)}
            </div>
            ${t.summary&&A`<p class="pg-write-summary">${t.summary}</p>`}
            ${n&&A`<p class="pg-write-muted">${C(`wr.partial`)}</p>`}

            <div class="pg-write-head">${C(`wr.corrected`)}</div>
            <div class="pg-write-diff">${Qg(e.rated??e.text,t.corrected,e.lang)}</div>

            ${t.errors.length>0&&A`
                <div class="pg-write-head">${C(`wr.errors`,{n:t.errors.length})}</div>
                <ul class="pg-write-errors">${t.errors.map(e=>A`
                    <li>
                        <div><del>${e.original}</del> → <ins>${e.correction}</ins> <span class="pg-write-type">${C(`wr.type_${e.type}`)}</span></div>
                        ${e.explanation&&A`<div class="pg-write-muted">${e.explanation}</div>`}
                    </li>`)}
                </ul>
                <button class="pg-wb-row-btn" data-write="save-errors">${C(`wr.saveErrors`)}</button>`}

            ${t.model&&A`
                <button class="pg-link-btn" data-write="model">${C(`wr.showModel`)}</button>
                <div class="pg-write-model-wrap" hidden>
                    <div class="pg-write-head">${C(`wr.model`)}</div>
                    <div class="pg-write-model">${t.model}</div>
                </div>`}
        </div>`}function e_(e,t){e.onclick=null,j(e,A`${Jg()}<div class="pg-write-area"></div>`),e.querySelector(`.pg-quiz-modes`)?.addEventListener(`click`,n=>{let r=n.target.closest(`[data-kind]`)?.dataset.kind;r===`archive`?a_(e,t):r&&t_(e,t,r)})}async function t_(e,t,n){let r=t.getLang(),i=t.getSettings().cefr_level,a=rh(i,r),o=n===`scene`?Kg(t):``,s=e.querySelector(`.pg-write-area`)??e;if(n===`scene`&&!o){j(s,A`<div class="pg-empty-hint">${C(`wr.noScene`)}</div>`);return}Wg?.abort();let c=Wg=new AbortController;j(s,Yg());try{let{data:s}=await t.ai.json({prompt:yt(n,r,i,t.getNativeLang(),Gg(a),o),signal:c.signal,accept:oh});if(c.signal.aborted)return;Ug={lang:r,level:i,kind:n,task:s,text:``},n_(e,t)}catch(e){if(c.signal.aborted)return;j(s,A`<div class="pg-error-msg">${C(`wr.taskFail`,{msg:qg(e)})}</div>`)}}function n_(e,t,n=!1){let r=Ug;if(!r){e_(e,t);return}let i=rh(r.level,r.lang);j(e,A`
        ${Xg(r,i)}
        <textarea class="pg-soft-input pg-write-text" spellcheck="false" placeholder="${C(`wr.placeholder`)}"></textarea>
        <div class="pg-write-bar">
            <span class="pg-write-count"></span>
            <span class="pg-wb-count-spacer"></span>
            <button class="pg-wb-row-btn" data-write="new">${C(`wr.newTask`)}</button>
            <button class="pg-btn pg-btn-primary pg-btn-compact" data-write="rate">${C(`wr.rate`)}</button>
        </div>
        <div class="pg-write-result">${r.feedback&&$g(r,r.feedback,n)}</div>`);let a=e.querySelector(`.pg-write-text`),o=e.querySelector(`.pg-write-count`);if(!a||!o)return;let s=()=>{let e=ih(a.value,i.unit);o.textContent=`${e} / ${Gg(i)}`,o.classList.toggle(`pg-write-ok`,e>=i.min&&e<=i.max)};a.value=r.text,s(),a.addEventListener(`input`,()=>{r.text=a.value,s()}),e.onclick=n=>{let r=n.target.closest(`[data-write]`)?.dataset.write,i=(t,n)=>{let r=e.querySelector(t);r&&(r.hidden=!r.hidden,n.remove())};r===`new`&&(Wg?.abort(),Ug=null,e_(e,t)),r===`rate`&&r_(e,t),r===`native`&&i(`.pg-write-native`,n.target),r===`model`&&i(`.pg-write-model-wrap`,n.target),r===`save-errors`&&i_(t,n.target)}}async function r_(e,t){let n=Ug;if(!n)return;let r=rh(n.level,n.lang),a=n.text.trim();if(ih(a,r.unit)<Math.min(10,r.min)){i(C(`wr.tooShort`),`warn`,3e3);return}Wg?.abort();let o=Wg=new AbortController,s=e.querySelector(`.pg-write-result`),c=e.querySelector(`[data-write="rate"]`);s&&j(s,Yg()),c&&(c.disabled=!0);try{let{data:i,partial:s}=await t.ai.json({prompt:bt(n.task,a,n.lang,n.level,t.getNativeLang(),Gg(r)),signal:o.signal,accept:uh(a)});if(o.signal.aborted||Ug!==n)return;n.rated!==a&&t.logStudy?.(),n.feedback=i,n.rated=a,n_(e,t,s),e.querySelector(`.pg-write-feedback`)?.scrollIntoView({behavior:`smooth`,block:`start`})}catch(e){if(o.signal.aborted)return;s&&j(s,A`<div class="pg-error-msg">${C(`wr.rateFail`,{msg:qg(e)})}</div>`)}finally{c&&Wg===o&&(c.disabled=!1)}}function i_(e,t){let n=Ug?.feedback?.errors??[],r=e.wrongAnswers(),i=new Set(r.map(e=>e.question)),a=n.map(e=>({type:e.type===`vocabulary`?`vocab`:`grammar`,question:C(`wr.wrongQuestion`,{text:e.original}),options:[],answer:e.correction,explanation:e.explanation,savedAt:Date.now()})).filter(e=>!i.has(e.question));a.length&&e.saveWrongAnswers([...r,...a]),t.textContent=C(`qz.wrongSaved`),t.disabled=!0}function a_(e,t){let n=t.getLang(),i=Lg(Wo()),a=e=>new Date(e).toLocaleDateString(void 0,{month:`short`,day:`numeric`});j(e,A`
        <div class="pg-write-bar">
            <span class="pg-write-title">${C(`wr.archive`)}</span>
            <span class="pg-wb-count-spacer"></span>
            <button class="pg-wb-row-btn" data-write="tasks">${C(`wr.backToTasks`)}</button>
        </div>
        ${i.length?i.map(e=>A`
        <div class="pg-quiz-card pg-check-card" data-id="${e.id}">
            <div class="pg-write-meta">${a(e.at)}</div>
            <div class="pg-check-original">${e.original}</div>
            <div class="pg-write-diff">${Qg(e.original,e.grammar,n)}</div>
            ${e.natural&&e.natural!==e.grammar&&A`
                <div class="pg-check-natural"><span class="pg-write-type">${C(`wr.natural`)}</span> ${e.natural}</div>`}
            ${e.explanation&&A`<div class="pg-write-muted pg-check-why">${e.explanation}</div>`}
            ${e.note&&A`<div class="pg-check-note">${e.note}</div>`}
            <div class="pg-check-actions">
                <button class="pg-wb-row-btn" data-write="note">${C(`wr.note`)}</button>
                <button class="pg-wb-row-btn pg-wb-row-btn-danger" data-write="delete">${C(`wb.delete`)}</button>
            </div>
        </div>`):A`<div class="pg-empty-hint">${C(`wr.archiveEmpty`)}</div>`}`),e.onclick=async n=>{let a=n.target.closest(`[data-write]`),o=a?.closest(`[data-id]`)?.dataset.id,s=a?.dataset.write;if(s===`tasks`)e_(e,t);else if(o){if(s===`delete`&&Rg(o),s===`note`){let e=await r(C(`wr.note`),{initial:i.find(e=>e.id===o)?.note??``});if(e===null)return;zg(o,e)}a_(e,t)}}}function o_(e,t){Ug&&(Ug.lang!==t.getLang()||Ug.level!==t.getSettings().cefr_level)&&(Ug=null),Ug?n_(e,t):e_(e,t)}function s_(){Wg?.abort(),Wg=null}function c_(e,t,n,r){let i=Lc(e,w(),t,n,r);return Ac(i),i}var l_={ai:je,getContext:qe,getSettings:x,getLang:w,getNativeLang:S,askConfirm:g,wrongAnswers:ra,saveWrongAnswers:e=>ha({wrongAnswers:ei(e)}),getAllConjCache:e=>fn(e),logStudy:()=>Am(),material:{words:()=>Im(V(`all`)),grammar:()=>Lm(V(`all`)),verbs:()=>Rm(V(`all`)),relearn:e=>{let t=z(),n=Bm(t,e);n.length&&(B(t),i(C(`qz.relearned`,{n:n.length}),`info`,4e3))}}},u_=[{id:`quick`,icon:`⚡`,title:`qz.modeQuick`,desc:`qz.modeQuickDesc`,run:e=>Cg(e,l_,3,5)},{id:`full`,icon:`📝`,title:`qz.modeFull`,desc:`qz.modeFullDesc`,run:e=>Cg(e,l_,6,20)},{id:`cloze`,icon:`✏️`,title:`qz.modeCloze`,desc:`qz.modeClozeDesc`,run:e=>wg(e,l_)},{id:`typed`,icon:`⌨️`,title:`qz.modeTyped`,desc:`qz.modeTypedDesc`,run:e=>Pg(e,l_)},{id:`exam`,icon:`🎓`,title:`qz.modeExam`,desc:`qz.modeExamDesc`,run:e=>Tg(e,l_)},{id:`conj`,icon:`🔀`,title:`qz.modeConj`,desc:`qz.modeConjDesc`,run:e=>Eg(e,l_)},{id:`targeted`,icon:`🎯`,title:`qz.modeTargeted`,desc:`qz.modeTargetedDesc`,run:e=>Dg(e,l_),wide:!0}];function d_(e){j(e,A`
        <div class="pg-quiz-modes">${u_.map(e=>e.wide?A`
            <button class="pg-quiz-mode-btn pg-quiz-mode-wide" data-quiz="${e.id}">
                <span class="pg-qmode-icon">${e.icon}</span>
                <span class="pg-qmode-text">
                    <span class="pg-qmode-title">${C(e.title)}</span>
                    <span class="pg-qmode-desc">${C(e.desc)}</span>
                </span>
                <span class="pg-qmode-count">${C(`qz.wrongCount`,{n:ra().length})}</span>
            </button>`:A`
            <button class="pg-quiz-mode-btn" data-quiz="${e.id}">
                <span class="pg-qmode-icon">${e.icon}</span>
                <span class="pg-qmode-title">${C(e.title)}</span>
                <span class="pg-qmode-desc">${C(e.desc)}</span>
            </button>`)}
        </div>
        <div id="pg-quiz-container" class="pg-quiz-container"></div>`);let t=e.querySelector(`.pg-quiz-container`);e.querySelector(`.pg-quiz-modes`)?.addEventListener(`click`,e=>{let n=e.target.closest(`[data-quiz]`)?.dataset.quiz,r=u_.find(e=>e.id===n);r&&t&&r.run(t)})}var f_=[{id:`flash`,icon:`🃏`,key:`pnl.learn.flash`,render:(e,t)=>Ih(e,{ai:je,getLang:w,getNativeLang:S,getSettings:x,speak:Lu,hasSpeechRecog:Oc,runPronunCheck:c_,setActiveRecog:Ac,getActiveRecog:jc},t.review)},{id:`quiz`,icon:`🎯`,key:`pnl.learn.quiz`,render:d_},{id:`write`,icon:`✍️`,key:`pnl.learn.write`,render:e=>o_(e,l_)},{id:`match`,icon:`🎮`,key:`pnl.learn.match`,render:$h},{id:`speak`,icon:`🎤`,key:`pnl.learn.speak`,render:e=>qh(e,{speak:Lu,getLang:w,hasSpeechRecognition:Oc,runPronunciationCheck:c_,logStudy:()=>Am()})}],p_=class{actions;el=document.createElement(`div`);detail=document.createElement(`div`);mode=document.createElement(`div`);bar=document.createElement(`div`);current;unsubscribe;constructor(e,t){this.actions=t,this.el.className=`pg-box-pane pg-learn-tab`,this.detail.className=`pg-learn-detail-area`,this.mode.className=`pg-learn-mode-area`,this.bar.className=`pg-learn-bar`,this.mode.hidden=!0,j(this.bar,A`${f_.map(e=>A`
            <button class="pg-learn-mode-btn" data-mode="${e.id}" title="${C(e.key)}" aria-label="${C(e.key)}">${e.icon}</button>`)}`),this.bar.addEventListener(`click`,e=>{let t=e.target.closest(`[data-mode]`)?.dataset.mode;t&&this.enter(t)}),this.current=e,e?Hp(this.detail,e,t):this.showRecord(),this.unsubscribe=sa(()=>this.refresh()),this.el.append(this.detail,this.mode,this.bar)}refresh(){!this.current&&this.mode.hidden&&this.showRecord()}dispose(){this.unsubscribe()}showDetail(e){this.current=e,Hp(this.detail,e,this.actions),this.exit()}showRecord(){$m(this.detail,()=>this.enter(`flash`,{review:!0}))}enter(e,t={}){let n=f_.find(t=>t.id===e);if(!n)return;let r=Object.assign(document.createElement(`button`),{className:`pg-learn-back-btn pg-btn pg-btn-secondary`,textContent:C(`pnl.learn.back`),onclick:()=>this.exit()}),i=Object.assign(document.createElement(`div`),{className:`pg-learn-mode-inner`});Mc(),s_(),this.mode.replaceChildren(r,i),this.setActive(e),n.render(i,t)}exit(){this.mode.hidden||(Mc(),s_(),this.mode.replaceChildren(),this.setActive(null),this.current||this.showRecord())}setActive(e){this.detail.hidden=e!==null,this.mode.hidden=e===null,this.bar.querySelectorAll(`[data-mode]`).forEach(t=>t.classList.toggle(`active`,t.dataset.mode===e))}},m_=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
    --ink:        #1a1a2e;
    --hairline:   #e8e8f0;
    --level:      #888;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

@page {
    size: A5 landscape;
    margin: 0;
}

body {
    font-family: 'Inter', 'Noto Sans', 'Noto Sans JP', 'Noto Sans KR', 'Noto Sans SC', sans-serif;
    background: #f0f0f0;
    color: var(--ink);
}

/* ── Card base ──────────────────────────────────────── */
.pg-card {
    width: 100vw;
    height: 100vh;
    page-break-after: always;
    display: flex;
    flex-direction: column;
    padding: 32px 40px 24px;
    position: relative;
    overflow: hidden;
}

/* Front: clean white */
.pg-front {
    background: #ffffff;
    border-bottom: 6px solid var(--hairline);
}

/* Back: very light tint */
.pg-back {
    background: #fafafa;
    border-bottom: 6px solid var(--hairline);
}

/* ── Card header ────────────────────────────────────── */
.pg-card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 0;
}

.pg-level-badge {
    font-size: 11px;
    font-weight: 700;
    color: #fff;
    padding: 3px 10px;
    border-radius: 100px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    background: var(--level);
}

.pg-level-badge[data-level="A1"], .pg-level-badge[data-level="A2"] { --level: #4caf7d; }
.pg-level-badge[data-level="B1"], .pg-level-badge[data-level="B2"] { --level: #2196f3; }
.pg-level-badge[data-level="C1"], .pg-level-badge[data-level="C2"] { --level: #9c27b0; }
.pg-level-badge[data-level="grammar"]  { --level: #ff9800; }
.pg-level-badge[data-level="sentence"] { --level: #607d8b; }
.pg-level-badge[data-level="idiom"]    { --level: #e91e63; }

.pg-pos-badge {
    font-size: 11px;
    font-weight: 600;
    color: #666;
    background: #f0f0f4;
    padding: 3px 10px;
    border-radius: 100px;
    letter-spacing: 0.03em;
}

.pg-card-num {
    margin-left: auto;
    font-size: 11px;
    font-weight: 500;
    color: #bbb;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.04em;
}

.pg-word-sm {
    font-size: 13px;
    font-weight: 600;
    color: #555;
    margin-left: auto;
    font-style: italic;
}

/* ── Card body ──────────────────────────────────────── */
.pg-card-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
}

/* Front — main word */
.pg-word {
    font-size: 52px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--ink);
    line-height: 1.1;
}

.pg-word rt {
    font-size: 0.38em;
    font-weight: 500;
    letter-spacing: 0;
    color: var(--ink);
    opacity: 0.75;
}

.pg-ipa {
    font-size: 20px;
    color: #7a7a9a;
    font-style: italic;
    letter-spacing: 0.02em;
}

.pg-orig-form {
    font-size: 16px;
    color: #aaa;
    font-style: italic;
}

/* Back — meaning */
.pg-meaning {
    font-size: 32px;
    font-weight: 600;
    color: var(--ink);
    line-height: 1.25;
}

.pg-context-meaning {
    font-size: 16px;
    color: #888;
    font-style: italic;
    padding-left: 2px;
}

.pg-collocs {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 4px;
}

.pg-colloc-chip {
    font-size: 12px;
    background: #eef0ff;
    color: #4455aa;
    padding: 3px 10px;
    border-radius: 100px;
    font-weight: 500;
}

.pg-example {
    font-size: 14px;
    color: #444;
    font-style: italic;
    border-left: 3px solid #dde;
    padding-left: 12px;
    line-height: 1.6;
}

.pg-example-trans {
    font-size: 12px;
    color: #888;
    margin-top: 4px;
    font-style: normal;
}

/* ── Card footer ────────────────────────────────────── */
.pg-card-footer {
    text-align: center;
}

.pg-hint {
    font-size: 11px;
    color: #ccc;
    letter-spacing: 0.05em;
}

/* ── Conjugation section ────────────────────────────── */
.pg-section-title {
    width: 100vw;
    height: 100vh;
    page-break-after: always;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--ink);
    color: #fff;
}
.pg-conj-section-title h2 {
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
}
.pg-conj-section-title p {
    font-size: 18px;
    color: rgba(255,255,255,0.55);
}

.pg-conj-page {
    width: 100vw;
    min-height: 100vh;
    page-break-after: always;
    padding: 32px 40px;
    background: #fff;
}

.pg-conj-header {
    display: flex;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 24px;
    border-bottom: 2px solid var(--ink);
    padding-bottom: 12px;
}

.pg-conj-verb {
    font-size: 36px;
    font-weight: 700;
    color: var(--ink);
}

.pg-conj-trans {
    font-size: 18px;
    color: #888;
    font-style: italic;
}

.pg-conj-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
}

.pg-conj-tense {
    break-inside: avoid;
}

.pg-tense-name {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--ink);
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    gap: 1px;
}

.pg-tense-native {
    font-size: 11px;
    color: #999;
    font-weight: 400;
    text-transform: none;
    letter-spacing: 0;
}

.pg-conj-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
}

.pg-conj-table tr {
    border-bottom: 1px solid #f0f0f0;
}

.pg-person {
    color: #999;
    padding: 4px 8px 4px 0;
    font-size: 12px;
    white-space: nowrap;
}

.pg-form {
    font-weight: 600;
    color: var(--ink);
    padding: 4px 0;
}

/* ── Screen preview (non-print) ─────────────────────── */
@media screen {
    body { padding: 20px; }
    .pg-card {
        width: 148mm;
        height: 105mm;
        border-radius: 12px;
        box-shadow: 0 4px 24px rgba(0,0,0,0.12);
        margin: 12px auto;
        page-break-after: unset;
    }
    .pg-conj-page {
        width: 148mm;
        border-radius: 12px;
        box-shadow: 0 4px 24px rgba(0,0,0,0.10);
        margin: 12px auto;
        page-break-after: unset;
        min-height: unset;
    }
    .pg-section-title {
        width: 148mm;
        height: 60px;
        border-radius: 12px;
        margin: 12px auto;
        page-break-after: unset;
    }
}
`;function h_(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var g_,__=4;function v_(e,t){let n=e.level??``;return A`
    <div class="pg-card-header">
        <span class="pg-level-badge" data-level="${n}">${n||`?`}</span>
        ${e.pos&&A`<span class="pg-pos-badge">${e.pos}</span>`}
        ${t}
    </div>`}function y_(e,t,n){let r=e.original_form&&e.original_form!==e.word;return A`
<section class="pg-card pg-front">
    ${v_(e,A`<span class="pg-card-num">${t+1} / ${n}</span>`)}
    <div class="pg-card-body">
        <div class="pg-word">${ed(e.word,$u(e))}</div>
        ${e.ipa&&!$u(e)&&A`<div class="pg-ipa">${e.ipa}</div>`}
        ${r&&A`<div class="pg-orig-form">${e.original_form}</div>`}
    </div>
    <div class="pg-card-footer">
        <span class="pg-hint">▼ flip for meaning</span>
    </div>
</section>`}function b_(e){let t=(e.collocations??[]).slice(0,__),n=e.context_meaning&&e.context_meaning!==e.meaning;return A`
<section class="pg-card pg-back">
    ${v_(e,A`<div class="pg-word-sm">${e.word}</div>`)}
    <div class="pg-card-body">
        <div class="pg-meaning">${e.meaning}</div>
        ${n&&A`<div class="pg-context-meaning">${e.context_meaning}</div>`}
        ${t.length>0&&A`
        <div class="pg-collocs">${t.map(e=>A`<span class="pg-colloc-chip">${e}</span>`)}</div>`}
        ${e.example&&A`
        <div class="pg-example">"${e.example}"${e.example_translation&&A`<div class="pg-example-trans">${e.example_translation}</div>`}</div>`}
    </div>
</section>`}function x_(e){return A`
        <div class="pg-conj-tense">
            <div class="pg-tense-name">${e.name}<span class="pg-tense-native">${e.name_native}</span></div>
            <table class="pg-conj-table">${(e.rows??[]).map(e=>A`
                <tr><td class="pg-person">${e.person}</td><td class="pg-form">${e.form}</td></tr>`)}
            </table>
        </div>`}function S_({word:e,data:t}){return A`
<section class="pg-conj-page">
    <div class="pg-conj-header">
        <span class="pg-conj-verb">${e}</span>
        ${t.translation&&A`<span class="pg-conj-trans">${t.translation}</span>`}
    </div>
    <div class="pg-conj-grid">${(t.tenses??[]).map(x_)}</div>
</section>`}function C_(e){return e.length?A`
<section class="pg-section-title pg-conj-section-title">
    <h2>Conjugation Tables</h2>
    <p>${e.length} verb${e.length>1?`s`:``}</p>
</section>
${e.map(S_)}`:$t(``)}function w_(e,t=[]){let n=e.length;return A(g_||=h_([`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Polyglot Flashcards — `,` words</title>
    <style>`,`</style>
</head>
<body>
`,`
`,`
<script>
    // Open the print dialog once fonts have loaded
    window.addEventListener('load', () => setTimeout(() => window.print(), 400));
<\/script>
</body>
</html>`]),n,$t(m_),e.map((e,t)=>[y_(e,t,n),b_(e)]),C_(t)).value}var T_=6e4;function E_(e,t=[]){if(!e.length){i(C(`wb.noExport`),`warn`);return}let n=new Blob([w_(e,t)],{type:`text/html;charset=utf-8`}),r=URL.createObjectURL(n);window.open(r,`_blank`,`width=900,height=700`)?setTimeout(()=>URL.revokeObjectURL(r),T_):(URL.revokeObjectURL(r),i(C(`wb.pdfPopupBlocked`),`err`,4e3))}var D_=4096,O_=4061,k_=1002,A_=489,j_=13,M_=5,N_=10,P_=2,F_=new TextEncoder;function I_(e){if(!Number.isSafeInteger(e)||e<0)throw RangeError(`varint: ${e}`);let t=[e%128];for(let n=Math.floor(e/128);n>0;n=Math.floor(n/128))t.unshift(n%128|128);if(t.length>8)throw RangeError(`varint: ${e}`);return t}function L_(e){if(e===null)return[0,new Uint8Array];if(typeof e==`string`){let t=F_.encode(e);return[t.length*2+13,t]}if(!Number.isInteger(e)){let t=new Uint8Array(8);return new DataView(t.buffer).setFloat64(0,e),[7,t]}if(e===0)return[8,new Uint8Array];if(e===1)return[9,new Uint8Array];for(let[t,n]of[[1,1],[2,2],[3,3],[4,4],[5,6],[6,8]]){let r=BigInt(n*8),i=BigInt(e);if(i>=-(1n<<r-1n)&&i<1n<<r-1n){let e=BigInt.asUintN(n*8,i),r=new Uint8Array(n);for(let t=n-1;t>=0;t--)r[t]=Number(e&255n),e>>=8n;return[t,r]}}throw RangeError(`integer out of range: ${e}`)}function R_(e){let t=e.map(L_),n=t.flatMap(([e])=>I_(e)),r=n.length+1;for(;I_(r).length+n.length!==r;)r=I_(r).length+n.length;let i=[Uint8Array.from([...I_(r),...n]),...t.map(([,e])=>e)],a=new Uint8Array(i.reduce((e,t)=>e+t.length,0)),o=0;for(let e of i)a.set(e,o),o+=e.length;return a}function z_(e,t){let n=e=>e===null?0:typeof e==`number`?1:2;if(n(e)!==n(t))return n(e)-n(t);if(typeof e==`number`&&typeof t==`number`)return e-t;if(typeof e==`string`&&typeof t==`string`){let n=F_.encode(e),r=F_.encode(t);for(let e=0;e<Math.min(n.length,r.length);e++)if(n[e]!==r[e])return n[e]-r[e];return n.length-r.length}return 0}var B_=class{pages=[];next=2;alloc(){return this.next++}set(e,t){this.pages[e-1]=t}get count(){return this.next-1}file(){let e=new Uint8Array(this.count*D_);return this.pages.forEach((t,n)=>{t&&e.set(t,n*D_)}),e}};function V_(e,t,n){let r=e.length;if(r<=t)return e;let i=A_+(r-A_)%4092,a=i<=t?i:A_,o=4092,s=[];for(let e=a;e<r;e+=o)s.push(n.alloc());s.forEach((t,r)=>{let i=new Uint8Array(D_);new DataView(i.buffer).setUint32(0,s[r+1]??0),i.set(e.subarray(a+r*o,a+(r+1)*o),4),n.set(t,i)});let c=new Uint8Array(a+4);return c.set(e.subarray(0,a)),new DataView(c.buffer).setUint32(a,s[0]),c}var H_=(...e)=>{let t=new Uint8Array(e.reduce((e,t)=>e+t.length,0)),n=0;for(let r of e)t.set(r,n),n+=r.length;return t};function U_(e,t,n,r){let i=new Uint8Array(D_),a=new DataView(i.buffer),o=r?100:0,s=n===null?8:12,c=D_;return t.forEach((e,t)=>{c-=e.length,i.set(e,c),a.setUint16(o+s+t*2,c)}),i[o]=e,a.setUint16(o+3,t.length),a.setUint16(o+5,c),n!==null&&a.setUint32(o+8,n),i}var W_=(e,t)=>D_-(t?100:0)-(e?12:8),G_=(e,t,n)=>e.reduce((e,t)=>e+t.length+2,0)<=W_(t,n);function K_(e,t){let n=[],r=[];for(let i of e)r.length&&!t([...r,i])&&(n.push(r),r=[]),r.push(i);return n.push(r),n.length>1&&n[n.length-1].length===1&&n[n.length-2].length>2&&n[n.length-1].unshift(n[n.length-2].pop()),n.length===1&&r.length>1?[r.slice(0,r.length>>1),r.slice(r.length>>1)]:n}function q_(e,t,n){let r=[...e].sort((e,t)=>e.rowid-t.rowid),i=n===1,a=r.map(e=>({cell:H_(I_(e.payload.length),I_(e.rowid),V_(e.payload,O_,t)),key:e.rowid}));if(G_(a.map(e=>e.cell),!1,i)){let e=n??t.alloc();return t.set(e,U_(j_,a.map(e=>e.cell),null,i)),e}let o=K_(a,e=>G_(e.map(e=>e.cell),!1,!1)).map(e=>{let n=t.alloc();return t.set(n,U_(j_,e.map(e=>e.cell),null,!1)),{no:n,maxKey:e[e.length-1].key}});for(;;){let e=e=>{let t=H_([0,0,0,0],I_(e.maxKey));return new DataView(t.buffer).setUint32(0,e.no),t},r=t=>t.slice(0,-1).map(e);if(G_(r(o),!0,i)&&o.length>1){let e=n??t.alloc();return t.set(e,U_(M_,r(o),o[o.length-1].no,i)),e}o=K_(o,e=>G_(r(e),!0,!1)).map(e=>{let n=t.alloc();return t.set(n,U_(M_,r(e),e[e.length-1].no,!1)),{no:n,maxKey:e[e.length-1].maxKey}})}}function J_(e,t){let n=[...e].sort((e,t)=>{for(let n=0;n<e.length;n++){let r=z_(e[n],t[n]);if(r)return r}return 0}).map(e=>{let n=R_(e);return H_(I_(n.length),V_(n,k_,t))}),r=null;for(;;){let e=r!==null,i=(e,t)=>{let n=H_([0,0,0,0],e);return new DataView(n.buffer).setUint32(0,t),n},a=[],o=[],s=[],c=0;for(let t=0;t<n.length;t++){let l=e?i(n[t],r[t]):n[t];if(s.length&&!G_([...s,l],e,!1)){if(t===n.length-1)o.push(n[t-1]),s.pop(),a.push({cells:s,first:c}),s=[],c=t;else{a.push({cells:s,first:c}),o.push(n[t]),s=[],c=t+1;continue}}s.push(l)}a.push({cells:s,first:c});let l=e?P_:N_,u=t=>e?r[t.first+t.cells.length]:null;if(a.length===1){let e=t.alloc();return t.set(e,U_(l,a[0].cells,u(a[0]),!1)),e}let d=a.map(e=>{let n=t.alloc();return t.set(n,U_(l,e.cells,u(e),!1)),n});n=o,r=d}}function Y_(e){let t=new B_,n=[];for(let r of e){let e=q_(r.rows.map(e=>({rowid:e.rowid,payload:R_(e.values)})),t);n.push({rowid:n.length+1,payload:R_([`table`,r.name,r.name,e,r.sql])});for(let e of r.indexes??[]){let i=J_(r.rows.map(t=>[...e.columns.map(e=>t.values[e]),t.rowid]),t);n.push({rowid:n.length+1,payload:R_([`index`,e.name,r.name,i,e.sql])})}}q_(n,t,1);let r=t.file(),i=new DataView(r.buffer);return r.set(F_.encode(`SQLite format 3\0`),0),i.setUint16(16,D_),r[18]=1,r[19]=1,r[20]=0,r[21]=64,r[22]=32,r[23]=32,i.setUint32(24,1),i.setUint32(28,t.count),i.setUint32(40,1),i.setUint32(44,4),i.setUint32(56,1),i.setUint32(92,1),i.setUint32(96,3045001),r}function X_(e){let t=new TextEncoder().encode(e),n=(t.length+8>>6)+1<<6,r=new Uint8Array(n);r.set(t),r[t.length]=128;let i=new DataView(r.buffer);i.setUint32(n-8,Math.floor(t.length/536870912)),i.setUint32(n-4,t.length*8>>>0);let a=1732584193,o=4023233417,s=2562383102,c=271733878,l=3285377520,u=new Uint32Array(80),d=(e,t)=>e<<t|e>>>32-t;for(let e=0;e<n;e+=64){for(let t=0;t<16;t++)u[t]=i.getUint32(e+t*4);for(let e=16;e<80;e++)u[e]=d(u[e-3]^u[e-8]^u[e-14]^u[e-16],1);let t=a,n=o,r=s,f=c,p=l;for(let e=0;e<80;e++){let[i,a]=e<20?[n&r|~n&f,1518500249]:e<40?[n^r^f,1859775393]:e<60?[n&r|n&f|r&f,2400959708]:[n^r^f,3395469782],o=d(t,5)+i+p+a+u[e]>>>0;p=f,f=r,r=d(n,30)>>>0,n=t,t=o}a=a+t>>>0,o=o+n>>>0,s=s+r>>>0,c=c+f>>>0,l=l+p>>>0}return[a,o,s,c,l].map(e=>e.toString(16).padStart(8,`0`)).join(``)}var Z_=1747000000123,Q_=`Polyglot`,$_=[`Word`,`Pronunciation`,`Meaning`,`Context`,`BaseForm`,`PartOfSpeech`,`Example`,`ExampleTranslation`,`Notes`,`Audio`,`Image`],ev=`<div class="pg-word">{{Word}}</div>
{{#Pronunciation}}<div class="pg-pron">{{Pronunciation}}</div>{{/Pronunciation}}
{{Audio}}`,tv=`{{FrontSide}}
<hr id="answer">
<div class="pg-meaning">{{Meaning}}</div>
{{#Context}}<div class="pg-sub">{{Context}}</div>{{/Context}}
{{#BaseForm}}<div class="pg-sub">{{BaseForm}}</div>{{/BaseForm}}
{{#PartOfSpeech}}<div class="pg-pos">{{PartOfSpeech}}</div>{{/PartOfSpeech}}
{{#Image}}<div class="pg-img">{{Image}}</div>{{/Image}}
{{#Example}}<div class="pg-example">{{Example}}</div>{{/Example}}
{{#ExampleTranslation}}<div class="pg-sub">{{ExampleTranslation}}</div>{{/ExampleTranslation}}
{{#Notes}}<div class="pg-notes">{{Notes}}</div>{{/Notes}}`,nv=`.card { font-family: sans-serif; font-size: 20px; text-align: center; }
.pg-word { font-size: 1.8em; font-weight: 600; }
.pg-pron, .pg-sub, .pg-pos { opacity: 0.6; font-size: 0.85em; }
.pg-pos { font-style: italic; }
.pg-meaning { font-size: 1.2em; margin-bottom: 0.3em; }
.pg-example { margin-top: 0.8em; }
.pg-notes { margin-top: 0.8em; font-size: 0.85em; opacity: 0.8; }
.pg-img img { max-width: 100%; max-height: 260px; margin-top: 0.6em; }`,rv=`\\documentclass[12pt]{article}
\\special{papersize=3in,5in}
\\usepackage[utf8]{inputenc}
\\usepackage{amssymb,amsmath}
\\pagestyle{empty}
\\setlength{\\parindent}{0in}
\\begin{document}
`,iv={col:`CREATE TABLE col (id integer primary key, crt integer not null, mod integer not null, scm integer not null, ver integer not null, dty integer not null, usn integer not null, ls integer not null, conf text not null, models text not null, decks text not null, dconf text not null, tags text not null)`,notes:`CREATE TABLE notes (id integer primary key, guid text not null, mid integer not null, mod integer not null, usn integer not null, tags text not null, flds text not null, sfld integer not null, csum integer not null, flags integer not null, data text not null)`,cards:`CREATE TABLE cards (id integer primary key, nid integer not null, did integer not null, ord integer not null, mod integer not null, usn integer not null, type integer not null, queue integer not null, due integer not null, ivl integer not null, factor integer not null, reps integer not null, lapses integer not null, left integer not null, odue integer not null, odid integer not null, flags integer not null, data text not null)`,revlog:`CREATE TABLE revlog (id integer primary key, cid integer not null, usn integer not null, ease integer not null, ivl integer not null, lastIvl integer not null, factor integer not null, time integer not null, type integer not null)`,graves:`CREATE TABLE graves (usn integer not null, oid integer not null, type integer not null)`},av={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},X=e=>(e??``).replace(/[&<>"']/g,e=>av[e]).replace(/\r?\n/g,`<br>`).replace(/[\u0000-\u0008\u000b-\u001f\u007f]/g,``);function ov(e){let t=Sh(e);return t?t.parts.map(X).join(`<b>${X(t.answer)}</b>`):X(e.example)}var sv=e=>e.trim().replace(/\s+/g,`_`);function cv(e,t){let n=[`Polyglot`,`Polyglot::Level::${sv(e.level||`grammar`)}`];for(let t of e.langs??[])n.push(`Polyglot::Lang::${sv(t)}`);for(let r of e.setIds??[]){let e=t.get(r);e&&n.push(`Polyglot::Set::${sv(e)}`)}return U(e)&&n.push(`Polyglot::${{new:`New`,learning:`Learning`,known:`Known`}[nu(e)]}`),ru(e)&&n.push(`Polyglot::Missed`),[...new Set(n)]}function lv(e,t){return[X(e.word),X(e.reading||e.ipa),X(e.meaning),e.context_meaning&&e.context_meaning!==e.meaning?X(e.context_meaning):``,e.base_form&&e.base_form!==e.word?X(e.base_form):``,X(e.pos_info),ov(e)+(e.example_audio&&t.has(e.example_audio)?` [sound:${e.example_audio}]`:``),X(e.example_translation),X(e.notes),e.audio&&t.has(e.audio)?`[sound:${e.audio}]`:``,e.image&&t.has(e.image)?`<img src="${X(e.image)}">`:``]}var uv=e=>`pg${X_(`${(e.langs??[]).join(`,`)}\u001f${e.word}`).slice(0,14)}`,dv=e=>parseInt(X_(e).slice(0,8),16),fv=e=>17471e8+parseInt(X_(e).slice(0,7),16)%1e8;function pv({entries:e,sets:t,deckName:n,media:r,now:i=Date.now()}){let a=Math.floor(i/1e3),o=fv(n),s=new Map(t.map(e=>[e.id,e.name])),c=new Set(r.keys()),l={id:Z_,name:Q_,type:0,mod:a,usn:-1,sortf:0,did:o,tmpls:[{name:`Card 1`,ord:0,qfmt:ev,afmt:tv,did:null,bqfmt:``,bafmt:``}],flds:$_.map((e,t)=>({name:e,ord:t,sticky:!1,rtl:!1,font:`Arial`,size:20,media:[]})),css:nv,latexPre:rv,latexPost:`\\end{document}`,latexsvg:!1,req:[[0,`any`,[0]]],tags:[],vers:[]},u=(e,t)=>({id:e,name:t,desc:``,mod:a,usn:-1,collapsed:!1,browserCollapsed:!1,dyn:0,conf:1,extendNew:0,extendRev:50,newToday:[0,0],revToday:[0,0],lrnToday:[0,0],timeToday:[0,0]}),d={id:1,name:`Default`,mod:0,usn:0,maxTaken:60,autoplay:!0,timer:0,replayq:!0,dyn:!1,new:{bury:!1,delays:[1,10],initialFactor:2500,ints:[1,4,0],order:1,perDay:20},rev:{bury:!1,ease4:1.3,ivlFct:1,maxIvl:36500,perDay:200,hardFactor:1.2},lapse:{delays:[10],leechAction:1,leechFails:8,minInt:1,mult:0}},f={activeDecks:[1],curDeck:1,newSpread:0,collapseTime:1200,timeLim:0,estTimes:!0,dueCounts:!0,curModel:String(Z_),nextPos:e.length+1,sortType:`noteFld`,sortBackwards:!1,addToCur:!0},p=e.map((t,n)=>{let r=i-e.length+n,o=lv(t,c),l=cv(t,s);return{rowid:r,values:[null,uv(t),Z_,a,-1,` ${l.join(` `)} `,o.join(``),t.word,dv(t.word),0,``]}}),m=p.map((e,t)=>({rowid:e.rowid,values:[null,e.rowid,o,0,a,-1,0,0,t+1,0,0,0,0,0,0,0,0,``]}));return[{name:`col`,sql:iv.col,rows:[{rowid:1,values:[null,Math.floor(a/86400)*86400,i,i,11,0,0,0,JSON.stringify(f),JSON.stringify({[Z_]:l}),JSON.stringify({1:u(1,`Default`),[o]:u(o,n)}),JSON.stringify({1:d}),`{}`]}]},{name:`notes`,sql:iv.notes,rows:p,indexes:[{name:`ix_notes_usn`,sql:`CREATE INDEX ix_notes_usn on notes (usn)`,columns:[4]},{name:`ix_notes_csum`,sql:`CREATE INDEX ix_notes_csum on notes (csum)`,columns:[8]}]},{name:`cards`,sql:iv.cards,rows:m,indexes:[{name:`ix_cards_usn`,sql:`CREATE INDEX ix_cards_usn on cards (usn)`,columns:[5]},{name:`ix_cards_nid`,sql:`CREATE INDEX ix_cards_nid on cards (nid)`,columns:[1]},{name:`ix_cards_sched`,sql:`CREATE INDEX ix_cards_sched on cards (did, queue, due)`,columns:[2,7,8]}]},{name:`revlog`,sql:iv.revlog,rows:[],indexes:[{name:`ix_revlog_usn`,sql:`CREATE INDEX ix_revlog_usn on revlog (usn)`,columns:[2]},{name:`ix_revlog_cid`,sql:`CREATE INDEX ix_revlog_cid on revlog (cid)`,columns:[1]}]},{name:`graves`,sql:iv.graves,rows:[]}]}function mv(e){let t=[...e.media.keys()];return Xd([{name:`collection.anki2`,data:Y_(pv(e))},{name:`media`,data:new TextEncoder().encode(JSON.stringify(Object.fromEntries(t.map((e,t)=>[String(t),e]))))},...t.map((t,n)=>({name:String(n),data:e.media.get(t)}))])}var hv=4;async function gv(e,t,n,r){let i=R()===`file`?[...wn(e)]:[],a=new Map,o=0;r?.(0,i.length),await Dn(i,hv,async e=>{let t=await Pe(e);t&&a.set(e,t),r?.(++o,i.length)});let s=n.trim()||`Words`;return Va(mv({entries:e,sets:t,deckName:`Polyglot::${s}`,media:a}),`Polyglot_${s.replace(/[^\p{L}\p{N}_-]+/gu,`_`)}_${new Date().toISOString().slice(0,10)}.apkg`),{words:e.length,media:a.size,missing:i.length-a.size}}var _v=[`dialogue`,`annotation`,`saved`,`furigana`,`voice`],vv=`pg-decor`,yv=20,bv=new Map,xv={childList:!0,subtree:!0};function Sv(e,t,n,r){t.observer.disconnect(),t.frame!==null&&cancelAnimationFrame(t.frame),r(),t.drawn=n.firstChild,t.frame=requestAnimationFrame(()=>{t.frame=null,bv.get(e)===t&&(t.observer.observe(n,xv),n.firstChild!==t.drawn&&Tv(e,t,n))})}function Cv(e,t){for(let n of _v)e.layers[n]?.draw(t)}function wv(e,t){let n=bv.get(e);if(n)return n;let r={layers:{},observer:new MutationObserver(()=>Tv(e,r,t)),frame:null,redraws:0,drawn:null};return bv.set(e,r),r.observer.observe(t,xv),r}function Tv(e,t,n){n.querySelector(`.pg-decor, .pg-tap-bubble`)||(++t.redraws>yv?(Ev(e),console.warn(`[Polyglot] message decorations: redraw limit reached for message`,e)):Sv(e,t,n,()=>Cv(t,n)))}function Ev(e){let t=bv.get(e);t&&(t.observer.disconnect(),t.frame!==null&&cancelAnimationFrame(t.frame),bv.delete(e))}function Z(e,t,n){let r=D(e);if(!r){n||Dv(e,t);return}let i=wv(e,r),a=i.layers[t];Sv(e,i,r,()=>{for(let e of[..._v].reverse())(e===t?a:i.layers[e])?.strip(r);n?i.layers[t]=n:delete i.layers[t],Cv(i,r)}),Object.keys(i.layers).length||Ev(e)}function Dv(e,t){let n=bv.get(e);n&&(delete n.layers[t],Object.keys(n.layers).length||Ev(e))}var Ov=(e,t)=>!!bv.get(e)?.layers[t],kv=e=>[...bv.entries()].filter(([,t])=>t.layers[e]).map(([e])=>e);function Av(e){for(let t of[...bv.keys()])e?Dv(t,e):Ev(t)}function jv(){for(let e of[...bv.keys()])D(e)||Ev(e)}var Mv=new Map;function Nv(e,t,n){let r=new Set(t);if(!r.size)return;let i=(Mv.get(e)??0)+1;Mv.set(e,i);let a=performance.now()+Se.restoreDeadline,o=()=>{if(Mv.get(e)!==i)return;let t=!1;for(let e of r)D(e)&&(r.delete(e),t=!0);t&&n(),r.size&&performance.now()<a&&setTimeout(o,Se.animFrame)};setTimeout(o,Se.animFrame)}function Pv(e){Mv.set(e,(Mv.get(e)??0)+1)}var Fv=`pg-dlg`;function Iv(e){let t=No(e);if(!t.length)return;let n=0;for(let r of Ut(e)){let e=n,i=n+r.data.length;if(n=i,r.parentElement?.closest(`code, pre`)||!t.some(t=>t.start<i&&t.end>e))continue;let a=[...new Set([e,i,...t.flatMap(e=>[e.start,e.end]).filter(t=>t>e&&t<i)])].sort((e,t)=>e-t),o=(e,n)=>t.some(t=>e>=t.start&&n<=t.end),s=document.createDocumentFragment();for(let t=0;t<a.length-1;t++){let[n,i]=[a[t],a[t+1]],c=r.data.slice(n-e,i-e);if(o(n,i)){let e=document.createElement(`span`);e.className=`${Fv} ${vv}`,e.textContent=c,s.append(e)}else s.append(c)}r.replaceWith(s)}}function Lv(e){e.querySelectorAll(`.${Fv}`).forEach(e=>e.replaceWith(...e.childNodes)),e.normalize()}function Rv(e){if(!f(e)||!Array.isArray(e.passages))return null;let t=e.passages.filter(e=>f(e)&&Number.isInteger(e.i)).map(e=>({i:e.i,words:Rt(e.words)}));return t.length?t:null}async function zv(e,t,n,r){let i=r?r.filter(t=>jt(e.slice(t.start,t.end))):zt(e),a=[];if(i.length){let{data:r}=await t.json({prompt:_t(i.map((t,n)=>({i:n,text:e.slice(t.start,t.end)}))),signal:n,accept:Rv,merge:Je(e=>String(e.i))});for(let t of r){let n=i[t.i];n&&a.push(...It(e,t.words,n.start,n.end))}a.sort((e,t)=>e[0]-t[0])}return{spans:a,uncovered:(r??[{start:0,end:e.length}]).flatMap(t=>Lt(e,a,t.start,t.end)).map(t=>e.slice(t.start,t.end))}}var Bv=`pg-ruby`;function Vv(e,t,n){let r=document.createElement(`ruby`);r.className=`${Bv} ${vv}`,r.dataset.pgSpan=String(n);let i=document.createElement(`rt`);return i.textContent=t,r.append(e,Object.assign(document.createElement(`rp`),{textContent:`(`}),i,Object.assign(document.createElement(`rp`),{textContent:`)`})),r}function Hv(e,t){let n=0,r=0;for(let i of Ut(e)){let e=r,a=r+i.data.length;for(r=a;n<t.length&&t[n][0]<e;)n++;if(n>=t.length)break;if(t[n][0]>=a||i.parentElement?.closest(`code, pre, ruby`))continue;let o=document.createDocumentFragment(),s=e;for(;n<t.length&&t[n][1]<=a;n++){let[r,a,c]=t[n];r<s||(r>s&&o.append(i.data.slice(s-e,r-e)),o.append(Vv(i.data.slice(r-e,a-e),c,n)),s=a)}s!==e&&(s<a&&o.append(i.data.slice(s-e)),i.replaceWith(o))}}function Uv(e){let t=e.querySelectorAll(`ruby.${Bv}`);t.length&&(t.forEach(e=>{e.querySelectorAll(`rt, rp`).forEach(e=>e.remove()),e.replaceWith(...e.childNodes)}),e.normalize())}var Wv=hn(y.furigana),Gv=6,Q=new Map,Kv=()=>Ne(w())&&x().furigana_enabled!==!1,qv=e=>s(Wv.get()?.[e]);function Jv(e){let t=D(e);if(!t)return;let n=Bt(k(t));return qv(e).find(e=>e.h===n)}function Yv(e,t){Wv.set({...Wv.get(),[e]:ze(qv(e),t,Gv)})}function Xv(e,t,n=!1){let r=Bt(t);return qv(e).find(e=>e.h===r&&!!e.d===n)}function Zv(e,t){Z(e,`furigana`,{draw:e=>{Bt(k(e))===t.h&&Hv(e,t.s)},strip:Uv})}var Qv=e=>Z(e,`furigana`,null);async function $v(e,t,n,r,a=[]){let o=M(),s=new AbortController;Q.set(e,s);let c=r??(a.length?bo(zt(xo(t,a)),a):void 0);try{let{spans:a,uncovered:l}=await zv(t,je,s.signal,c);if(s.signal.aborted||o!==M())return;let u=D(e);if(!u||k(u)!==t)return;let d={h:Bt(t),s:a,...r&&{d:!0}};Yv(e,d),Zv(e,d),!n&&l.length&&i(C(`furi.partial`,{n:l.length}),`warn`,4e3)}catch(e){if(s.signal.aborted)return;console.error(`[Polyglot] furigana error:`,e),i(C(`furi.error`,{msg:e instanceof Error?e.message:String(e)}),`err`,4e3)}finally{Q.get(e)===s&&Q.delete(e)}}async function ey(e,t){if(!Kv()||Q.has(e))return;let n=D(e);if(!n)return;let r=k(n);if(!jt(t?t.map(e=>r.slice(e.start,e.end)).join(``):r))return;let i=Xv(e,r,!!t);i?(Yv(e,{...i,hidden:!1}),Zv(e,i)):await $v(e,r,!1,t,jo(n))}function ty(e){Q.get(e)?.abort(),Q.delete(e),Qv(e);let t=Jv(e);t&&!t.hidden&&Yv(e,{...t,hidden:!0})}async function ny(e){let t=O(e),n=Number(e.dataset.pgSpan),a=t?Jv(t):void 0,o=a?.s[n];if(!t||!a||!o)return;let s=e.firstChild?.textContent??``,c=await r(C(`furi.editTitle`,{word:s}),{initial:o[2],hint:C(`furi.editHint`)});if(c===null)return;let l=Nt(c.replace(/\s+/g,``));if(l&&!Mt(l)){i(C(`furi.editKana`),`warn`,3e3);return}let u=Jv(t);if(!u||u.h!==a.h||!u.s[n])return;let d=l?u.s.map((e,t)=>t===n?[e[0],e[1],l]:e):u.s.filter((e,t)=>t!==n),f={...u,s:d};Yv(t,f),Ov(t,`furigana`)&&Zv(t,f)}function ry(){document.addEventListener(`click`,e=>{let t=(e.target?.closest?.(`rt`))?.closest(`ruby.pg-ruby[data-pg-span]`);t&&t.closest(E.mesText)&&(e.preventDefault(),e.stopPropagation(),ny(t))},{capture:!0})}function iy(){if(Kv())for(let e of Object.keys(Wv.get()??{})){if(Ov(e,`furigana`))continue;let t=Jv(e);t&&!t.hidden&&Zv(e,t)}}function ay(){let e=Wv.get(),t=qe().chat?.length,n=e&&typeof t==`number`&&te(e,Kt(),t);n&&Wv.set(n)}function oy(){Nv(`furigana`,Object.keys(Wv.get()??{}),iy)}var sy=Promise.resolve(),cy=0;function ly(e){if(!Kv()||!x().furigana_auto||Jv(e)?.hidden||Q.has(e))return;let t=cy;sy=sy.then(async()=>{if(t!==cy)return;let n=D(e);if(!n||!n.closest(E.aiMes))return;let r=k(n);if(!jt(r)||Q.has(e))return;let i=Xv(e,r);i?Ov(e,`furigana`)||Zv(e,i):await $v(e,r,!0,void 0,jo(n))})}function uy(e){Q.get(e)?.abort(),Q.delete(e),Qv(e)}function dy(){kv(`furigana`).forEach(Qv),fy(),Wv.delete()}function fy(){Pv(`furigana`),Q.forEach(e=>e.abort()),Q.clear(),Av(`furigana`),cy++,sy=Promise.resolve()}function py(){my(),Kv()?iy():kv(`furigana`).forEach(Qv)}function my(){let e=x();document.body.classList.toggle(`pg-furi-hover`,e.furigana_display===`hover`),document.body.classList.toggle(`pg-furi-off`,!Kv()),document.body.style.setProperty(`--pg-furi-size`,`${e.furigana_size??.65}em`)}function hy(){let e=document.querySelector(`${E.mesText} ruby.pg-ruby rt`),t=e?.parentElement;if(!e||!t)return;let n=parseFloat(getComputedStyle(t).fontSize)*(x().furigana_size??.65),r=parseFloat(getComputedStyle(e).fontSize);r>n+.5&&i(C(`furi.sizeClamped`,{px:Math.round(r)}),`warn`,8e3)}var gy=new Map;function _y(e,t){if(gy.set(e,t),document.getElementById(`pg-snackbar`))return;let n=Object.assign(document.createElement(`div`),{id:`pg-snackbar`,className:`pg-snackbar`});j(n,A`
        <span class="pg-snackbar-text"><i class="fa-solid fa-spinner fa-spin"></i>&nbsp; ${C(`ann.analysing`)}</span>
        <button class="pg-snackbar-stop">${C(`ann.stop`)}</button>`),n.querySelector(`.pg-snackbar-stop`)?.addEventListener(`click`,()=>{let e=[...gy.values()];gy.clear(),e.forEach(e=>e()),yy()}),document.body.appendChild(n),n.offsetWidth,n.classList.add(`pg-snackbar-visible`)}function vy(e){gy.delete(e),gy.size||yy()}function yy(){let e=document.getElementById(`pg-snackbar`);e&&(e.id=``,e.classList.remove(`pg-snackbar-visible`),setTimeout(()=>e.remove(),Se.snackbarFadeOut))}var by=()=>{};function xy(e){by=e}var Sy=`pg-saved-mark`,Cy=`pg-saved-word`,wy=new Set([`SCRIPT`,`STYLE`,`CODE`,`PRE`,`RUBY`,`RT`,`RP`]),Ty=()=>x().mark_saved_words!==!1,Ey=e=>(e??``).normalize(`NFKC`).toLowerCase().trim(),Dy=null,Oy=!0,ky=new Map,Ay=null,jy=null;function My(){Oy=!0}function Ny(){let e=w();if(jy||Ay&&Ay.version===an()&&Ay.lang===e)return;let t=an();jy=fn(e).then(n=>{ky=new Map(n.map(e=>[Ey(e.word),e.data])),Ay={version:t,lang:e}}).catch(()=>{Ay={version:t,lang:e}}).finally(()=>{jy=null,Oy=!0,Gy()})}function Py(){if(Dy&&!Oy&&Dy.key.startsWith(`${w()}|`))return Dy;let e=V(`all`),t=Dt(e.map(e=>[e.word,e.base_form,e.original_form,e.example_form,e.reading,...e.forms??[]].join(``)).join(``)),n=`${w()}|${Ay?.version??-1}|${e.length}|${t}`,r=new Map(e.map(e=>[e.word,e]));return Dy={key:n,forms:Dy?.key===n?Dy.forms:new nr(e.map(e=>({word:e.word,forms:tr(e,ky.get(Ey(e.base_form))??ky.get(Ey(e.word)))}))),byWord:r},Oy=!1,Dy}var Fy=(e,t)=>{let n=t?e.byWord.get(t):void 0;return n?nu(n):null};function Iy(e,t){let n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e instanceof Element&&(wy.has(e.tagName)||e.classList.contains(`pg-clickable-word`)||e.matches(`.pg-tap-bubble`))?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),r=[];for(let e=n.nextNode();e;e=n.nextNode())e instanceof Text&&!t.has(e)&&r.push(e);return r}function Ly(e){return{type:`word`,data:{word:e.word,base_form:e.base_form,meaning:e.meaning,level:e.level,pos_info:e.pos_info??``,context_meaning:e.context_meaning??``,...e.reading&&{reading:e.reading}}}}function Ry(e,t){let n=document.createElement(`span`);return n.className=`${Sy} ${vv}`,n.textContent=e,n.dataset.word=t,n.addEventListener(`click`,()=>{let e=z().find(e=>e.word===t);e&&by(`learn`,Ly(e))}),n}function zy(e,t,n){return e.forms.find(t).filter(r=>Fy(e,r.word)===`learning`&&!n(t.slice(r.start,r.end),r.word))}function By(e){let t=Py(),n=Vo();for(let r of Iy(e,Mo(e))){let e=r.data,i=zy(t,e,n);if(!i.length)continue;let a=document.createDocumentFragment(),o=0;for(let t of i)t.start>o&&a.append(e.slice(o,t.start)),a.append(Ry(e.slice(t.start,t.end),t.word)),o=t.end;o<e.length&&a.append(e.slice(o)),r.replaceWith(a)}e.querySelectorAll(`.pg-clickable-word`).forEach(e=>{Fy(t,t.forms.wordOf(e.textContent??``))===`learning`&&e.classList.add(Cy)})}function Vy(e){e.querySelectorAll(`.${Sy}`).forEach(e=>e.replaceWith(e.textContent??``)),e.querySelectorAll(`.${Cy}`).forEach(e=>e.classList.remove(Cy)),e.normalize()}var Hy={draw:By,strip:Vy},Uy=new Map;function Wy(e,t,n){let r=new Set;for(let i of Iy(t,Mo(t)))for(let t of zy(e,i.data,n))r.add(t.word);return t.querySelectorAll(`.pg-clickable-word`).forEach(t=>{let n=e.forms.wordOf(t.textContent??``);n&&Fy(e,n)===`learning`&&r.add(`~${n}`)}),[...r].sort().join(``)}function Gy(e){if(!Ty()){Ky();return}Ny();let t=Py(),n=Vo(),r=e??[...document.querySelectorAll(E.aiMes)].map(e=>O(e)).filter(e=>!!e);for(let e of r){let r=D(e);if(!r||r.closest(E.mes)?.getAttribute(`is_user`)===`true`)continue;let i=Wy(t,r,n);(Uy.get(e)!==i||!Ov(e,`saved`)&&i)&&(Uy.set(e,i),Z(e,`saved`,i?Hy:null))}}function Ky(){for(let e of kv(`saved`))Z(e,`saved`,null);Uy.clear()}function qy(){Uy.clear(),Av(`saved`)}function Jy(e,t=60){let n=Py(),r=new Set;for(let i of n.forms.find(e))if(Fy(n,i.word)===`known`&&r.add(e.slice(i.start,i.end)),r.size>=t)break;return[...r]}var Yy=(e=>(...t)=>{let n=Py();return t.some(t=>Fy(n,n.forms.wordOf(t))===e)})(`known`);function Xy(e){let t=Py(),n=z(),r=new Map(n.map(e=>[e.word,e])),i=!1;for(let{word:a,base_form:o}of e){if(!a?.trim())continue;let e=r.get(t.forms.wordOf(a)??``)??r.get(t.forms.wordOf(o)??``)??n.find(e=>Ey(e.base_form)===Ey(o));e&&!tr(e).includes(Ey(a))&&(e.forms=rr(e.forms,a),i=!0)}i&&B(n,!0)}var Zy=new Map;function Qy(e){let t=D(e);if(!t||t.closest(E.mes)?.getAttribute(`is_user`)===`true`)return;let n=Py(),r=Vo(),i=new Set(zy(n,k(t),r).map(e=>e.word)),a=Zy.get(e)??new Set,o=[...i].filter(e=>!a.has(e));if(!o.length)return;o.forEach(e=>a.add(e)),Zy.set(e,a);let s=z();for(let e of s)o.includes(e.word)&&(e.seen=(e.seen??0)+1);B(s,!0)}function $y(){Zy.clear()}var eb=()=>{};function tb(e){eb=e}var nb=new Map,rb=new Map,ib=hn(y.annotations),ab=6,ob=!1,sb=e=>s(ib.get()?.[e]);function cb(e,t){let n=sb(e),r=Bt(k(t));return n.find(e=>e.h===r)??n.find(e=>!e.h)}function lb(e,t){ib.set({...ib.get(),[e]:ze(sb(e),t,ab)})}function ub(e,t){let n=ib.get();if(!n||!(e in n))return;let{[e]:r,...i}=n,a=s(r).filter(e=>e.h!==t.h);ib.set(a.length?{...i,[e]:a}:i)}function db(e){if(e.type===`idiom`)return`pg-hl-idiom`;if(e.type===`grammar`)return`pg-hl-grammar`;let t=oe(e.data.level);return t===`grammar`||t===`sentence`?`pg-hl-c`:`pg-hl-${t[0].toLowerCase()}`}function fb(e){let t=Vo();return[...(e.hard_words??[]).filter(e=>!t(e.word,e.base_form)&&!Yy(e.word,e.base_form)).map(e=>({type:`word`,text:e.word,data:e})),...(e.grammar_patterns??[]).map(e=>({type:`grammar`,text:e.pattern,data:e})),...(e.idioms??[]).filter(e=>!t(e.phrase,e.base_form)).map(e=>({type:`idiom`,text:e.phrase,data:e}))].filter(e=>typeof e.text==`string`&&e.text.length>0).sort((e,t)=>t.text.length-e.text.length)}function pb(e,t){let n=null;for(let r of t){let t=d(e,r.text);t!==-1&&(!n||t<n.index)&&(n={index:t,token:r})}return n}function mb(e){let t=document.createElement(`span`);return t.className=`pg-clickable-word ${vv} ${db(e)}`,t.textContent=e.text,t.addEventListener(`click`,()=>eb(`learn`,e)),t}function hb(e,t){let n=e.textContent??``;if(!n.trim())return;let r=document.createDocumentFragment(),i=!1;for(let e=pb(n,t);e;e=pb(n,t))e.index>0&&r.append(n.slice(0,e.index)),r.append(mb(e.token)),n=n.slice(e.index+e.token.text.length),i=!0;i&&(n&&r.append(n),e.replaceWith(r))}var gb=new Set([`SCRIPT`,`STYLE`,`CODE`,`PRE`,`RUBY`]);function _b(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e instanceof Element&&(gb.has(e.tagName)||e.classList.contains(`pg-clickable-word`))?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),n=[];for(let e=t.nextNode();e;e=t.nextNode())e instanceof Text&&n.push(e);return n}function vb(e,t){let n=fb(t),r=Mo(e);_b(e).filter(e=>!r.has(e)&&(!t.dialogue||e.parentElement?.closest(`.pg-dlg`))).forEach(e=>hb(e,n))}function yb(e){e.querySelectorAll(`.pg-clickable-word`).forEach(e=>e.replaceWith(e.textContent??``)),e.normalize()}function bb(e){return e.querySelector(`.pg-annotate-btn`)}function xb(e,t,n){e.querySelector(E.mesText)&&(nb.set(t,n),Z(t,`dialogue`,n.dialogue?{draw:Iv,strip:Lv}:null),Z(t,`annotation`,{draw:e=>vb(e,n),strip:yb}),bb(e)?.classList.add(`pg-btn-active`))}function Sb(e,t){let n=nb.get(t);ty(t),Cb(t),bb(e)?.classList.remove(`pg-btn-active`),n&&ub(t,n)}function Cb(e){Z(e,`annotation`,null),Z(e,`dialogue`,null),nb.delete(e)}function wb(){document.querySelectorAll(`.pg-annotate-btn`).forEach(e=>{let t=O(e);e.classList.toggle(`pg-btn-active`,!!t&&nb.has(t))})}function Tb(){jv();for(let e of nb.keys())Ov(e,`annotation`)||nb.delete(e)}var Eb=(e,t)=>!e.h||e.h===Bt(k(t));function Db(){if(Tb(),ob||!x().enabled_annotator)wb();else{for(let[e,t]of nb){let n=D(e);n&&!Eb(t,n)&&jb(e)}for(let e of Object.keys(ib.get()??{})){if(nb.has(e))continue;let t=document.querySelector(Ct(e)),n=t?.querySelector(E.mesText),r=n&&cb(e,n);t&&r&&xb(t,e,r)}wb()}}function Ob(){let e=ib.get(),t=qe().chat?.length,n=e&&typeof t==`number`&&te(e,Kt(),t);n&&ib.set(n)}function kb(){Nv(`annotation`,Object.keys(ib.get()??{}),Db)}function Ab(){Pv(`annotation`),rb.forEach(e=>e.abort()),rb.clear(),Av(`annotation`),Av(`dialogue`),nb.clear()}function jb(e){rb.get(e)?.abort(),rb.delete(e),Cb(e);let t=sb(e);if(t.some(e=>!e.h)){let{[e]:n,...r}=ib.get()??{},i=t.filter(e=>e.h);ib.set(i.length?{...r,[e]:i}:r)}(document.querySelector(Ct(e))?.querySelector(`.pg-annotate-btn`))?.classList.remove(`pg-btn-active`,`pg-btn-busy`)}function Mb(){ob=!0,kv(`annotation`).forEach(e=>Z(e,`annotation`,null)),kv(`dialogue`).forEach(e=>Z(e,`dialogue`,null)),Ab(),ib.delete(),dy(),document.querySelectorAll(`.pg-annotate-btn`).forEach(e=>e.classList.remove(`pg-btn-active`)),setTimeout(()=>{ob=!1},0)}function Nb(e,t,n){let r=Object.assign(document.createElement(`div`),{className:`mes_button ${e} interactable`,title:t,tabIndex:0});return r.addEventListener(`click`,n),r}function Pb(){x().enabled_annotator&&document.querySelectorAll(E.aiMes).forEach(e=>{let t=O(e),n=e.querySelector(E.extraMesButtons);t&&n&&!e.querySelector(`.pg-annotate-btn`)&&n.prepend(Nb(`pg-annotate-btn fa-solid fa-book-open`,`Polyglot: annotate for study`,()=>{let t=O(e);t&&Vb(e,t)}),Nb(`pg-open-btn fa-solid fa-earth-europe`,`Open Polyglot panel`,()=>eb(`learn`,null)))})}function Fb(e=[]){if(x().auto_save_idioms===!1)return 0;let t=Vo();return e.filter(e=>e.phrase?.trim()&&e.meaning?.trim()&&!t(e.phrase,e.base_form)).map(e=>hs({word:e.phrase,base_form:e.base_form?.trim()||e.phrase.trim(),meaning:e.meaning,meaning_lang:S(),level:`idiom`,context_meaning:e.context_meaning},{quiet:!0})).filter(e=>e===`added`).length}var Ib={hard_words:[`word`,`base_form`,`pos_info`,`meaning`,`context_meaning`,`level`],grammar_patterns:[`pattern`,`meaning`,`structure`,`words_used`],idioms:[`phrase`,`base_form`,`meaning`,`context_meaning`]};function Lb(e){if(!f(e)||!Object.keys(Ib).some(t=>Array.isArray(e[t])))return null;let t=(e,t)=>(Array.isArray(e)?e:[]).filter(e=>f(e)&&typeof e[t[0]]==`string`&&e[t[0]].trim()).map(e=>n(e,t));return{hard_words:t(e.hard_words,Ib.hard_words),grammar_patterns:t(e.grammar_patterns,Ib.grammar_patterns),idioms:t(e.idioms,Ib.idioms)}}function Rb(e,t){let n=(e,t,n)=>Je(n)(e??[],t??[]);return{hard_words:n(e.hard_words,t.hard_words,e=>e.word),grammar_patterns:n(e.grammar_patterns,t.grammar_patterns,e=>e.pattern),idioms:n(e.idioms,t.idioms,e=>e.phrase)}}function zb(){for(let[e,t]of nb){let n=document.querySelector(Ct(e));n&&xb(n,e,t)}}var Bb=e=>nb.has(e);async function Vb(e,t){if(!x().enabled_annotator||rb.has(t))return;if(nb.has(t)){Sb(e,t);return}let n=e.querySelector(E.mesText);if(!n)return;let r=!!x().dialogue_only,{text:a,plain:o,lines:s}=Po(n,r);if(s&&!s.length){i(C(`dlg.none`),`info`,3e3);return}if(!a.trim()){i(C(`ann.allSkipped`),`info`,3e3);return}let c=M(),l=Bt(o),u=bb(e),d=new AbortController;rb.set(t,d),u?.classList.add(`pg-btn-busy`),_y(d,()=>{d.abort(),ty(t)});let f=ey(t,s);try{let{data:e}=await je.json({prompt:$e(a,w(),x().cefr_level,S(),zo(),Jy(a)),signal:d.signal,accept:Lb,merge:Rb});if(d.signal.aborted||c!==M())return;let n=D(t),o=n?.closest(E.mes);if(!n||!o||Bt(k(n))!==l)return;let s={...e,h:l,...r&&{dialogue:!0}};xb(o,t,s),lb(t,s),Xy(e.hard_words??[]);let u=Fb(e.idioms);u&&i(C(`ann.idiomsAdded`,{n:u}),`info`,2500),await f}catch(e){if(d.signal.aborted)return;console.error(`[Polyglot] Annotation error:`,e),i(C(`ann.error`,{msg:e instanceof Error?e.message:String(e)}),`err`,3e3)}finally{u?.classList.remove(`pg-btn-busy`),rb.get(t)===d&&rb.delete(t),vy(d)}}var Hb=`pg-learning-panel`,Ub=`pg-box-${Hb}`;function Wb(){return document.getElementById(Ub)??document.querySelector(`.pg-sidebar`)}var Gb=()=>window.matchMedia(`(pointer: coarse) and (max-width: 600px)`).matches;function Kb(){let e=Wb();if(!e)return;let{panel_theme:t,panel_bg_image:n}=x();t&&t!==`dark`?e.dataset.pgTheme=t:delete e.dataset.pgTheme;let r=n?.replace(/"/g,`%22`)??``;r?e.style.setProperty(`--pg-panel-bg-image`,`url("${r}")`):e.style.removeProperty(`--pg-panel-bg-image`),e.toggleAttribute(`data-has-bg`,!!r)}function qb(){Kb(),requestAnimationFrame(Kb),setTimeout(Kb,80),!Gb()&&requestAnimationFrame(()=>{let e=Wb();e&&x().panel_floating&&Yb(e,!0)})}var Jb=[`top`,`left`,`right`,`bottom`];function Yb(e,t){if(!t){e.classList.remove(`pg-sidebar-floating`),Jb.forEach(t=>e.style.removeProperty(t));return}if(e.classList.contains(`pg-sidebar-floating`))return;let{top:n,left:r}=e.getBoundingClientRect();e.classList.add(`pg-sidebar-floating`),e.style.setProperty(`right`,`auto`,`important`),e.style.setProperty(`bottom`,`auto`,`important`),e.style.setProperty(`top`,`${n}px`,`important`),e.style.setProperty(`left`,`${r}px`,`important`),Zb(e)}var Xb=new WeakSet;function Zb(e){if(Xb.has(e))return;Xb.add(e);let t=e.querySelector(`.pg-box-title`)??e,n=null;t.addEventListener(`pointerdown`,r=>{if(!e.classList.contains(`pg-sidebar-floating`))return;let i=r.target;if(i.closest(`button, input, select, a`)||t===e&&i.closest(`.pg-nav-view, .pg-box-pane`))return;let a=e.getBoundingClientRect();n={x:r.clientX-a.left,y:r.clientY-a.top},e.setPointerCapture(r.pointerId),r.preventDefault()}),e.addEventListener(`pointermove`,t=>{if(!n)return;let r=(e,t)=>Math.max(0,Math.min(e,t)),i=r(t.clientX-n.x,window.innerWidth-e.offsetWidth),a=r(t.clientY-n.y,window.innerHeight-e.offsetHeight);e.style.setProperty(`left`,`${i}px`,`important`),e.style.setProperty(`top`,`${a}px`,`important`)});let r=()=>{n=null};e.addEventListener(`pointerup`,r),e.addEventListener(`pointercancel`,r)}function Qb(e){let t=es(),n=M();j(e,A`
        <div class="pg-chats-head">
            <span class="pg-pset-label">${C(`pnl.set.chats`)}</span>
        </div>
        ${t.length?A`
        <ul class="pg-chats-list">${t.map(e=>A`
            <li>
                <label class="pg-chats-row ${e.chatId===n&&`pg-chats-current`}" title="${e.chatId||C(`pnl.set.unsorted`)}">
                    <input type="checkbox" class="pg-chats-check" value="${e.chatId}">
                    <span class="pg-chats-name">${e.chatId||C(`pnl.set.unsorted`)}</span>
                    ${e.chatId===n&&A`<span class="pg-chats-badge">${C(`pnl.set.thisChat`)}</span>`}
                    <span class="pg-chats-count">${e.count}</span>
                </label>
            </li>`)}
        </ul>
        <div class="pg-chats-actions" hidden>
            <button class="pg-btn pg-btn-secondary" data-chats="move">${C(`pnl.set.moveHere`)}</button>
            <button class="pg-btn pg-btn-secondary pg-btn-danger" data-chats="delete">${C(`pnl.set.deleteChats`)}</button>
        </div>`:A`<div class="pg-pset-hint">${C(`pnl.set.chatsEmpty`)}</div>`}`)}var $b=e=>[...e.querySelectorAll(`.pg-chats-check:checked`)].map(e=>e.value);async function ex(e,t){let n=$b(e);if(n.length){if(t===`move`){if(!M()){i(C(`pnl.set.noChatOpen`),`warn`);return}i(C(`pnl.set.moved`,{n:ts(n)}),`ok`)}else{if(!await g(C(`pnl.set.deleteChatsConfirm`,{n:n.length}),{yes:C(`wb.delSetBtn`),no:C(`confirmNo`)}))return;i(C(`pnl.set.chatsDeleted`,{n:ns(n)}),`ok`)}Qb(e),J()}}function tx(e){Qb(e),e.addEventListener(`change`,()=>{let t=e.querySelector(`.pg-chats-actions`);t&&(t.hidden=$b(e).length===0)}),e.addEventListener(`click`,t=>{let n=t.target.closest(`[data-chats]`)?.dataset.chats;n&&ex(e,n)})}var nx=[{value:`browser`,key:`tts.pBrowser`},{value:`host`,key:`tts.pHost`},{value:`st`,key:`tts.pSt`},{value:`elevenlabs`,name:`ElevenLabs`},{value:`google`,name:`Google Cloud`},{value:`openai`,key:`tts.pOpenai`},{value:`fish`,name:`Fish Audio`}].filter(e=>(b.stVoice||e.value!==`st`)&&(b.ai||e.value!==`host`)),rx={"0.75":`tts.speedSlow`,"0.9":`tts.speedLittle`,1:`tts.speedNormal`},ix=(e,t,n,r=``)=>A`
    <label class="pg-pset-field">
        <span class="pg-pset-label">${t}</span>
        <input type="text" class="text_pole" data-setting="${e}" value="${n}" placeholder="${r}"
               autocomplete="off" spellcheck="false">
    </label>`,ax=e=>A`
    <label class="pg-pset-field">
        <span class="pg-pset-label">${C(`tts.key`)}</span>
        <input type="password" class="text_pole" data-setting="${e}" data-key-field autocomplete="new-password" spellcheck="false">
    </label>`;function ox(e){let t=x();e.querySelectorAll(`input[data-key-field]`).forEach(e=>{e.value=String(t[e.dataset.setting??``]??``)})}var sx=(e,t,n,r)=>A`
    <div class="pg-pset-field">
        <span class="pg-pset-label">${C(`tts.voice`)}</span>
        <div class="pg-voice-pick">
            <input type="text" class="text_pole" data-setting="${e}" value="${t}" placeholder="${n}"
                   autocomplete="off" spellcheck="false" list="pg-voice-list" aria-label="${C(`tts.voice`)}">
            ${r&&A`<button class="pg-btn pg-btn-secondary pg-btn-compact" data-voice="list">${C(`tts.voiceList`)}</button>`}
        </div>
        <datalist id="pg-voice-list"></datalist>
    </div>`;function cx(e){let t=e.voice_provider??`browser`,n={browser:A`<span class="pg-pset-hint">${C(`tts.hintBrowser`)}</span>`,host:A`
            ${sx(`voice_host_voice`,e.voice_host_voice??``,C(`tts.hostVoicePh`),!0)}
            <span class="pg-pset-hint">${C(`tts.hintHost`,{name:b.ai?.name??``})}</span>`,st:A`
            ${ix(`voice_st_voice`,C(`tts.stVoice`),e.voice_st_voice??``,C(`tts.stVoicePh`))}
            <span class="pg-pset-hint">${C(`tts.hintSt`)}</span>`,elevenlabs:A`
            ${ax(`voice_el_key`)}
            ${sx(`voice_el_voice`,e.voice_el_voice??``,C(`tts.voiceIdPh`),!0)}
            ${ix(`voice_el_model`,C(`tts.model`),e.voice_el_model??``,Bc.elevenlabsModel)}`,google:A`
            ${ax(`voice_gg_key`)}
            ${sx(`voice_gg_voice`,e.voice_gg_voice??``,C(`tts.voiceDefaultPh`),!0)}`,openai:A`
            ${ix(`voice_oa_url`,C(`tts.url`),e.voice_oa_url??``,Bc.openaiUrl)}
            ${ax(`voice_oa_key`)}
            ${sx(`voice_oa_voice`,e.voice_oa_voice??``,Bc.openaiVoice,!1)}
            ${ix(`voice_oa_model`,C(`tts.model`),e.voice_oa_model??``,Bc.openaiModel)}
            <span class="pg-pset-hint">${C(`tts.hintOpenai`)}</span>`,fish:A`
            ${ax(`voice_fish_key`)}
            ${sx(`voice_fish_voice`,e.voice_fish_voice??``,C(`tts.fishVoicePh`),!1)}
            ${ix(`voice_fish_model`,C(`tts.model`),e.voice_fish_model??``,Bc.fishModel)}`},r=Rc.includes(t);return A`
        ${n[t]??n.browser}
        ${r&&A`
        ${t!==`host`&&A`<label class="pg-pset-row">
            <span class="pg-pset-label">${C(`tts.speed`)}</span>
            <select class="text_pole pg-pset-select" data-setting="voice_speed">${Vc.map(t=>A`
                <option value="${t}" ${t===(e.voice_speed??`0.9`)&&A`selected`}>${C(rx[t])}</option>`)}
            </select>
        </label>`}
        <label class="pg-pset-row">
            <span class="pg-pset-label">${C(`tts.save`)}</span>
            <input type="checkbox" class="pg-pset-check" data-setting="voice_save" ${e.voice_save!==!1&&A`checked`}>
        </label>
        ${b.stVoice&&A`<label class="pg-pset-row">
            <span class="pg-pset-label">${C(`tts.proxy`)}</span>
            <input type="checkbox" class="pg-pset-check" data-setting="voice_proxy" ${!!e.voice_proxy&&A`checked`}>
        </label>
        <span class="pg-pset-hint">${C(`tts.hintProxy`)}</span>`}`}
        <details class="pg-voice-cast">
            <summary>${C(`cast.title`)}</summary>
            <div class="pg-voice-cast-rows"></div>
        </details>
        <button class="pg-btn pg-btn-secondary pg-btn-block" data-voice="try">🔊 ${C(`tts.try`)}</button>`}function lx(e){let t=e.voice_provider??`browser`;if(t===`st`)return A`<span class="pg-pset-hint">${C(`cast.hintSt`)}</span>`;let n=[...new Set([...Eu(),...Tu(t)])],r=t===`browser`?`pg-cast-voices`:`pg-voice-list`;return A`
        ${n.length?n.map(e=>A`
        <label class="pg-pset-field">
            <span class="pg-pset-label">${e}</span>
            <input type="text" class="text_pole" data-cast="${e}" value="${Cu(t,e)}" placeholder="${C(`cast.default`)}"
                   autocomplete="off" spellcheck="false" list="${r}">
        </label>`):A`<span class="pg-pset-hint">${C(`cast.none`)}</span>`}
        ${t===`browser`&&A`<datalist id="pg-cast-voices">${Sc(ic(w())).map(e=>A`<option value="${e}"></option>`)}</datalist>`}
        <span class="pg-pset-hint">${C(`cast.hint`)}</span>`}function ux(e){return A`
        <label class="pg-pset-row">
            <span class="pg-pset-label">${C(`tts.service`)}</span>
            <select class="text_pole pg-pset-select" data-setting="voice_provider">${nx.map(t=>A`
                <option value="${t.value}" ${t.value===(e.voice_provider??`browser`)&&A`selected`}>${`key`in t?C(t.key,{name:b.ai?.name??``}):t.name}</option>`)}
            </select>
        </label>
        <div class="pg-voice-rows">${cx(e)}</div>`}async function dx(e,t){let n=e.querySelector(`#pg-voice-list`);if(n){t.disabled=!0;try{let t=await Bu(w());j(n,A`${t.map(e=>A`<option value="${e.id}">${e.label}</option>`)}`),i(C(`tts.voicesFound`,{n:t.length}),`info`,3e3),e.querySelector(`.pg-voice-pick input`)?.focus()}catch(e){Mu(e)}finally{t.disabled=!1}}}function fx(e){e.addEventListener(`change`,t=>{if(t.target.dataset?.setting!==`voice_provider`)return;let n=e.querySelector(`.pg-voice-rows`);n&&(j(n,cx(x())),ox(n))}),ox(e),e.addEventListener(`toggle`,e=>{let t=e.target;if(!t.matches?.(`.pg-voice-cast`)||!t.open)return;let n=t.querySelector(`.pg-voice-cast-rows`);n&&j(n,lx(x()))},!0),e.addEventListener(`change`,e=>{let t=e.target;t.dataset?.cast!==void 0&&wu(x().voice_provider??`browser`,t.dataset.cast,t.value)}),e.addEventListener(`click`,t=>{let n=t.target.closest(`button[data-voice]`);n&&(n.dataset.voice===`try`?Hu(w()):dx(e,n))})}var px=e=>e.trim().replace(/^\||\|$/g,``).split(`|`).map(e=>e.trim());function mx(e){let t=_(`div`,{className:`pg-licenses`}),n=e.replace(/\r/g,``).split(`
`),r=[],i=()=>{let e=r.join(`
`).trim();e&&t.append(_(`pre`,{className:`pg-licenses-text`,textContent:e})),r=[]};for(let e=0;e<n.length;e++){let a=n[e],o=/^(#{1,3})\s+(.*)$/.exec(a);if(o)i(),t.append(_(o[1].length===1?`h3`:`h4`,{textContent:o[2]}));else if(a.startsWith(`|`)){i();let r=[];for(;e<n.length&&n[e].startsWith(`|`);e++)/^\|[\s|:-]+\|$/.test(n[e].trim())||r.push(px(n[e]));e--;let[a,...o]=r;t.append(_(`table`,{className:`pg-licenses-table`},[_(`thead`,{},[_(`tr`,{},a.map(e=>_(`th`,{textContent:e})))]),_(`tbody`,{},o.map(e=>_(`tr`,{},e.map(e=>_(`td`,{textContent:e})))))]))}else r.push(a.replace(/`/g,``))}return i(),t}async function hx(){try{Ce(C(`lic.title`),mx(await b.notices()))}catch(e){i(C(`lic.failed`,{msg:e instanceof Error?e.message:String(e)}),`err`,4e3)}}async function gx(){try{return await b.version()}catch{return`?`}}async function _x(){let e=x();return{Polyglot:await gx(),Connection:e.provider===`st`||e.provider===`profile`||!e.model?e.provider:`${e.provider} (${e.model})`,Storage:R(),"Study language":w(),Browser:navigator.userAgent,Time:new Date().toISOString()}}async function vx(){let e=v(await _x());try{await navigator.clipboard.writeText(e),i(C(`diag.copied`),`ok`,4e3)}catch{Ce(C(`diag.title`),_(`pre`,{className:`pg-licenses-text`,textContent:e}))}}var yx=[{action:`import`,icon:`fa-file-import`,title:`pnl.set.import`},{action:`csv`,icon:`fa-file-csv`,title:`pnl.set.export`},{action:`txt`,icon:`fa-file-lines`,title:`pnl.set.exportTxt`},{action:`apkg`,icon:`fa-layer-group`,title:`pnl.set.exportApkg`},{action:`pdf`,icon:`fa-file-pdf`,title:`pnl.set.exportPdf`},{action:`backup`,icon:`fa-box-archive`,title:`pnl.set.backup`}],bx={file:`data.whereFile`,offline:`data.whereOffline`,loading:`data.whereLoading`,chat:`data.whereChat`},xx=[{value:`show`,label:`furi.show`},{value:`hover`,label:`furi.hover`}],Sx=[{value:`0.5`,label:`furi.small`},{value:`0.65`,label:`furi.medium`},{value:`0.8`,label:`furi.large`}],Cx=[{value:`dark`,label:`set.themeDark`},{value:`light`,label:`set.themeLight`},{value:`breeze`,label:`set.themeBreeze`},{value:`milk`,label:`set.themeMilk`}],wx=(e,t)=>A`
    <section class="pg-pset-section">
        <h3 class="pg-pset-section-title">${e}</h3>
        ${t}
    </section>`,Tx=(e,t,n)=>A`
    <label class="pg-pset-row">
        <span class="pg-pset-label">${t}</span>
        <input type="checkbox" class="pg-pset-check" data-setting="${e}" ${n&&A`checked`}>
    </label>`,Ex=(e,t,n,r)=>A`
    <label class="pg-pset-row">
        <span class="pg-pset-label">${t}</span>
        <select class="text_pole pg-pset-select" data-setting="${e}">${r.map(e=>A`
            <option value="${e.value}" ${e.value===n&&A`selected`}>${C(e.label)}</option>`)}
        </select>
    </label>`,Dx=(e,t,n,r,i)=>A`
    <label class="pg-pset-field">
        <span class="pg-pset-label">${t}</span>
        <input type="text" class="text_pole" data-setting="${e}" value="${n}"
               placeholder="${r}" autocomplete="off" spellcheck="false">
        ${i&&A`<span class="pg-pset-hint">${i}</span>`}
    </label>`,Ox=(e,t,n)=>A`
    <label class="pg-pset-row">
        <span class="pg-pset-label">${t}</span>
        <input type="number" class="text_pole pg-pset-number" data-setting="${e}" value="${n}" min="0" max="999" step="1">
    </label>`,kx=(e,t)=>A`
    <button class="pg-btn pg-btn-secondary pg-btn-block pg-btn-danger" data-action="${e}">${t}</button>`;function Ax(e){let t=e.panel_theme??`dark`;return A`
    <div class="pg-pset">
        ${wx(C(`tab.wordbook`),A`
            <div class="pg-pset-icon-row">${yx.map(e=>A`
                <button class="pg-pset-icon-btn" data-action="${e.action}" title="${C(e.title)}" aria-label="${C(e.title)}">
                    <i class="fa-solid ${e.icon}"></i>
                </button>`)}
            </div>
            <div class="pg-pset-hint pg-io-progress" aria-live="polite" hidden></div>
            <button class="pg-btn pg-btn-secondary pg-btn-block" data-action="reanalyse" title="${C(`wb.reanalyseTip`)}">
                ✨ ${C(`wb.reanalyse`)}
            </button>
            <div class="pg-run-bar pg-reanalysis-bar" hidden></div>
            ${Uo()&&A`
            <label class="pg-pset-row">
                <span class="pg-pset-label">${C(`pnl.set.chatOnly`)}</span>
                <input type="checkbox" class="pg-pset-check pg-scope-check" ${Ho()===`chat`&&A`checked`}>
            </label>`}
            ${Tx(`wordbook_lang_only`,C(`pnl.set.langOnly`,{lang:w()}),e.wordbook_lang_only!==!1)}
            ${Tx(`wordbook_hide_known`,C(`pnl.set.hideKnown`),e.wordbook_hide_known!==!1)}
            ${Ko()>0&&A`
            <button class="pg-btn pg-btn-secondary pg-btn-block" data-action="adopt-lang">
                ${C(`pnl.set.adoptLang`,{n:Ko(),lang:w()})}
            </button>`}
            ${Uo()&&A`<div class="pg-pset-chats"></div>`}
            <div class="pg-pset-hint pg-pset-store">${C(`data.where`)}: ${C(R()===`file`&&De()?`data.whereBrowser`:bx[R()])}</div>`)}

        ${wx(C(`tab.learn`),A`
            ${Tx(`auto_save_idioms`,C(`pnl.set.autoIdioms`),e.auto_save_idioms!==!1)}
            ${Ox(`srs_new_per_day`,C(`pnl.set.newPerDay`),e.srs_new_per_day??20)}
            ${kx(`reset-srs`,C(`pnl.set.resetSrs`))}
            ${kx(`clear-conj`,C(`pnl.set.clearConj`))}
            ${kx(`clear-chat`,C(`pnl.set.clearChat`))}
            ${Dx(`dict_url_custom`,C(`pnl.set.dictUrl`),e.dict_url_custom??``,C(`pnl.set.dictUrlPh`),C(`pnl.set.dictUrlDesc`))}`)}

        ${wx(C(`tts.section`),ux(e))}

        ${Kv()&&wx(C(`furi.section`),A`
            ${Ex(`furigana_display`,C(`furi.display`),e.furigana_display??`show`,xx)}
            ${Ex(`furigana_size`,C(`furi.size`),String(e.furigana_size??.65),Sx)}
            ${Tx(`furigana_auto`,C(`furi.auto`),!!e.furigana_auto)}
            <span class="pg-pset-hint">${C(`furi.autoHint`)}</span>`)}

        ${wx(C(`set.panelSection`),A`
            <label class="pg-pset-row">
                <span class="pg-pset-label">${C(`pnl.set.theme`)}</span>
                <select class="text_pole pg-pset-select" data-setting="panel_theme">${Cx.map(e=>A`
                    <option value="${e.value}" ${e.value===t&&A`selected`}>${C(e.label)}</option>`)}
                </select>
            </label>
            ${Tx(`panel_floating`,C(`pnl.set.floating`),!!e.panel_floating)}
            ${Dx(`panel_bg_image`,C(`pnl.set.bgUrl`),e.panel_bg_image??``,C(`pnl.set.bgUrlPh`))}`)}

        <footer class="pg-pset-footer">
            <button class="pg-link-btn" data-action="licenses">${C(`lic.link`)}</button>
            <button class="pg-link-btn" data-action="diagnostics">${C(`diag.link`)}</button>
        </footer>
    </div>`}async function jx(e,t,n){await g(e)&&(await n(),i(`${t} ✓`))}async function Mx(e,t){let n=e.innerHTML;e.disabled=!0,e.setAttribute(`aria-busy`,`true`),e.innerHTML=`<i class="fa-solid fa-spinner fa-spin"></i>`;let r=e.closest(`.pg-pset`)?.querySelector(`.pg-io-progress`),a=(e,t)=>{r&&t&&(r.textContent=C(`pnl.set.mediaProgress`,{done:e.toLocaleString(),total:t.toLocaleString()}),r.hidden=!1)};try{await t(a)}catch(e){console.error(`[Polyglot] export failed`,e),i(C(`pnl.set.exportFailed`,{err:e instanceof Error?e.message:String(e)}),`err`,8e3)}finally{r&&(r.hidden=!0),e.disabled=!1,e.removeAttribute(`aria-busy`),e.innerHTML=n}}function Nx(){let e=new Set(V().map(e=>e.word)),t=z();for(let n of t)if(e.has(n.word)){for(let e of Fr)delete n[e];delete n.known,n.srs_reset_at=Date.now()}B(t)}var Px=1e3;async function Fx(e){let t=V();t.length?t.length>Px&&!await g(C(`pnl.set.pdfLarge`,{n:t.length,pages:t.length*2}))||await Mx(e,async()=>E_(t,await fn(w()))):i(C(`wb.noExport`),`warn`)}async function Ix(e){let t=V();t.length?await Mx(e,async e=>{let n=await gv(t,ls(),w(),e);i([C(`pnl.set.apkgDone`,{n:n.words,m:n.media}),n.missing?C(`pnl.set.apkgMissing`,{n:n.missing}):``].filter(Boolean).join(` `),n.missing?`warn`:`info`,4e3)}):i(C(`wb.noExport`),`warn`)}function Lx(e,t){let n=e.querySelector(`.pg-reanalysis-bar`);n&&im(n,e=>{t.textContent=e?C(`wb.reanalysing`):`✨ ${C(`wb.reanalyse`)}`})}var Rx={import:()=>rm(),csv:()=>gs(V()),txt:()=>vs(V()),backup:(e,t)=>Mx(t,async e=>{await gf(!1,e)}),pdf:(e,t)=>Fx(t),apkg:(e,t)=>Ix(t),reanalyse:Lx,licenses:()=>hx(),diagnostics:()=>vx(),"reset-srs":()=>jx(C(`pnl.set.resetSrsConfirm`),C(`pnl.set.resetSrs`),Nx),"clear-conj":()=>jx(C(`pnl.set.clearConjConfirm`),C(`pnl.set.clearConj`),cs),"clear-chat":()=>jx(C(`pnl.set.clearChatConfirm`),C(`pnl.set.clearChat`),Mb),"adopt-lang":async(e,t)=>{let n=Ko();await g(C(`pnl.set.adoptLangConfirm`,{n,lang:w()}),{yes:C(`pnl.set.adoptLangYes`),no:C(`wb.editCancel`)})&&(i(C(`pnl.set.adoptLangDone`,{n:Jo(),lang:w()}),`info`,3e3),t.remove(),J())}},zx={panel_theme:Kb,furigana_display:my,furigana_size:()=>{my(),hy()},panel_bg_image:Kb,panel_floating:e=>{let t=Wb();t&&Yb(t,!!e)},wordbook_lang_only:()=>J(),wordbook_hide_known:()=>J()};function Bx(e){if(e instanceof HTMLInputElement&&e.type===`checkbox`)return e.checked;if(e.dataset.setting===`furigana_size`)return Number(e.value);if(e instanceof HTMLInputElement&&e.type===`number`){let t=e.value.trim()===``?NaN:Math.round(Number(e.value));return Number.isFinite(t)?Math.min(Math.max(t,0),999):20}return e.dataset.setting===`panel_bg_image`?e.value.trim():e.value}function Vx(){let e=document.createElement(`div`);e.className=`pg-box-pane`,j(e,Ax(x()));let t=e.querySelector(`.pg-pset-chats`);t&&tx(t),e.addEventListener(`click`,t=>{let n=t.target.closest(`button[data-action]`);n&&Rx[n.dataset.action??``]?.(e,n)});let n=e=>{let t=e.target.closest(`[data-setting]`),n=t?.dataset.setting;if(!t||!n)return;let r=Bx(t);Ke({[n]:r}),zx[n]?.(r)},r=e=>[`text`,`password`].includes(e.target.type);return e.addEventListener(`input`,e=>{r(e)&&n(e)}),e.addEventListener(`change`,e=>{r(e)||n(e)}),fx(e),e.querySelector(`.pg-scope-check`)?.addEventListener(`change`,e=>{Ke({wordbook_scope:e.target.checked?`chat`:`all`}),J()}),e}var Hx=[`wordbook`,`learn`,`settings`],Ux=null,Wx=null;function Gx(e,t){let n=e.querySelector(`.pg-nav-tab[data-tab-id="${t}"]`);n&&!n.classList.contains(`active`)&&n.click()}function Kx(e=`learn`,t=null){let n=document.getElementById(Ub);if(n){if(!t){Gx(n,e);return}Ux?Ux.showDetail(t):Wx=t,e===`learn`&&Gx(n,`learn`);return}Wx=t;let r=Ue([{name:C(`tab.wordbook`),id:`wordbook`,render:()=>{let e=Object.assign(document.createElement(`div`),{className:`pg-box-pane`});return q(e),e}},{name:C(`tab.learn`),id:`learn`,render:()=>(Ux?.dispose(),Ux=new p_(Wx,{lookup:e=>Jx(e),save:am,ignore:e=>{$o(e),J()}}),Wx=null,Ux.el),onShow:()=>Ux?.refresh()},{name:C(`tab.settings`),id:`settings`,render:Vx}],t?`learn`:e);h(r,{panelId:Hb,extra:`pg-sidebar`,onDismiss:()=>{Yx(),Mc(),nm(),Ux?.dispose(),Ux=null,Wx=null}}),qb()}var qx=null;async function Jx(e,t=``){qx?.abort();let r=new AbortController;qx=r,Kx(`learn`,{type:`loading`,word:e});try{let i=it(w()),{data:a}=await je.json({prompt:at(e,t,w(),x().cefr_level,S()),signal:r.signal,accept:l,missing:e=>[...ne(e,i),...Array.isArray(e.word_family)?[]:[`word_family`]]}),o=n(a,i);o.word_family=(Array.isArray(a.word_family)?a.word_family:[]).filter(e=>typeof e?.form==`string`&&e.form.trim()),r.signal.aborted||Kx(`learn`,{type:`word`,data:{...o,word:o.word||e}})}catch(t){r.signal.aborted||Kx(`learn`,{type:`error`,word:e,message:t instanceof Error?t.message:String(t)})}finally{qx===r&&(qx=null)}}function Yx(){qx?.abort(),qx=null}var Xx=200,Zx={above:44,below:8,margin:4},Qx=null;function $x(){Qx?.remove(),Qx=null}function eS(e){let t=e.getRangeAt(0),n=Et(t.startContainer);if(!n)return``;let r=k(n),i=Yt(e).trim(),a=qt(n,t.startContainer,t.startOffset);return a<0&&(a=r.indexOf(i)),a<0?r.slice(0,Xx):Tt(r,a,a+i.length)}function tS(e,t,n){let r=e.offsetWidth,i=t.left+scrollX+t.width/2;e.style.left=`${Math.max(Zx.margin+scrollX,Math.min(i-r/2,scrollX+innerWidth-r-Zx.margin))}px`;let a=t.top+scrollY-Zx.above,o=t.bottom+scrollY+Zx.below;e.style.top=`${n||a<scrollY+Zx.margin?o:a}px`}function nS(e,t,n){let r=Yt(e).trim(),i=eS(e),a=e.getRangeAt(0).cloneRange(),o=a.getBoundingClientRect();$x(),Qx=Object.assign(document.createElement(`div`),{className:`pg-sel-tooltip`}),j(Qx,A`
        <button class="pg-sel-btn" data-sel="lookup"><i class="fa-solid fa-magnifying-glass"></i> ${C(`tap.lookUp`)}</button>
        ${t&&n.canTranslate(a)&&A`
        <button class="pg-sel-btn" data-sel="translate"><i class="fa-solid fa-language"></i> ${C(`tap.translate`)}</button>`}`),Qx.addEventListener(`click`,e=>{let t=e.target.closest(`[data-sel]`)?.dataset.sel;t&&(e.stopPropagation(),$x(),getSelection()?.removeAllRanges(),t===`translate`?n.translate(a):Jx(r,i))}),document.body.appendChild(Qx);let s=Qx;requestAnimationFrame(()=>tS(s,o,t))}function rS(e){let t=t=>{Qx?.contains(t.target)||(document.querySelector(E.chat)?.contains(t.target)?setTimeout(()=>{let n=getSelection(),r=n?Yt(n).trim():``;!n?.rangeCount||!r||r.length>Xx?$x():nS(n,t.type===`touchend`,e)},Se.tooltipShow):$x())},n=e=>{Qx&&!Qx.contains(e.target)&&$x()};document.addEventListener(`mouseup`,t),document.addEventListener(`mousedown`,n),document.addEventListener(`touchend`,t,{passive:!0}),document.addEventListener(`touchstart`,n,{passive:!0});let r=!1,i=()=>{let e=document.querySelector(E.chat);e&&!r&&(e.addEventListener(`scroll`,$x,{passive:!0}),r=!0)};i(),setTimeout(i,Se.menuReattach)}var iS=3,aS=800,oS=new Map;function sS(e,t){let n=null,r=0;if(document.caretRangeFromPoint){let i=document.caretRangeFromPoint(e,t);i&&(n=i.startContainer,r=i.startOffset)}else if(document.caretPositionFromPoint){let i=document.caretPositionFromPoint(e,t);i&&(n=i.offsetNode,r=i.offset)}let i=n instanceof Element?n:n?.parentElement,a=i?.closest(E.aiMes);return!n||!a||i?.closest(`.pg-clickable-word, .pg-tap-bubble`)?null:{node:n,offset:r,mesId:O(a)??``}}function cS({node:e,offset:t}){let n=Et(e);if(!n)return null;let r=k(n),i=qt(n,e,t),a=n.querySelector(`.pg-dlg`)?No(n,r).find(e=>i>=e.start&&i<e.end):void 0,o=a?r.slice(a.start,a.end).trim():Tt(r,Math.max(0,i));if(o.length<iS)return null;let s=e;for(;s&&s.parentNode!==n;)s=s.parentNode;return{textEl:n,anchorEl:s instanceof HTMLElement?s:null,sentence:o}}var lS=e=>typeof e==`string`?e:``,uS=e=>(Array.isArray(e)?e:[]).filter(e=>f(e)&&typeof e.form==`string`&&!!e.form.trim()).map(e=>({form:e.form,base:lS(e.base)||e.form,meaning:lS(e.meaning),...typeof e.level==`string`&&{level:e.level},...typeof e.reading==`string`&&{reading:e.reading}})),dS=e=>f(e)&&typeof e.translation==`string`?{translation:e.translation,...typeof e.literal==`string`&&{literal:e.literal},key_verbs:uS(e.key_verbs)}:null,fS=new Map,pS=300;async function mS(e,t){let n=`${w()}\u0000${S()}\u0000${e.sentence}`;if(oS.get(t)?.abort(),!Dm(e,{kind:`loading`}))return;let r=fS.get(n);if(r){Dm(e,{kind:`result`,result:r});return}let i=new AbortController;oS.set(t,i);try{let{data:t}=await je.json({prompt:ot(e.sentence,w(),S()),signal:i.signal,accept:dS});fS.size>=pS&&fS.delete(fS.keys().next().value),fS.set(n,t),i.signal.aborted||Dm(e,{kind:`result`,result:t})}catch(t){i.signal.aborted||Dm(e,{kind:`error`,message:t instanceof Error?t.message:String(t)})}finally{oS.get(t)===i&&oS.delete(t)}}async function hS(e){let t=cS(e);t&&await mS(t,e.mesId)}var gS=e=>!!document.querySelector(E.chat)?.contains(e),_S=-1/0;function vS(e){if(performance.now()-_S<aS||!gS(e.target))return;let t=sS(e.clientX,e.clientY);t&&(getSelection()?.removeAllRanges(),$x(),hS(t))}function yS(e){e.target.closest(`.pg-tap-bubble, #pg-box-pg-learning-panel, .pg-conj-overlay`)||SS()}function bS(e){let t=(e.startContainer instanceof Element?e.startContainer:e.startContainer.parentElement)?.closest(E.aiMes);t&&hS({node:e.startContainer,offset:e.startOffset,mesId:O(t)??``})}function xS(){document.addEventListener(`touchstart`,()=>{_S=performance.now()},{passive:!0,capture:!0}),document.addEventListener(`dblclick`,vS),document.addEventListener(`click`,yS);let e=e=>!!(e instanceof Element?e:e.parentElement)?.closest(`.pg-tap-bubble`);rS({translate:bS,canTranslate:t=>!e(t.startContainer)&&!!Et(t.startContainer)?.closest(E.aiMes)})}function SS(e=null){let t=e?`${Ct(e)} `:``;document.querySelectorAll(`${t}.pg-tap-bubble`).forEach(Tm)}function CS(){oS.forEach(e=>e.abort()),oS.clear()}var wS={min:500,max:1e5,step:500,fallback:4e3},TS=`__custom__`,ES=[[`English`,`🇺🇸 English`],[`Spanish`,`🇪🇸 Spanish`],[`Japanese`,`🇯🇵 Japanese`],[`Italian`,`🇮🇹 Italian`],[`French`,`🇫🇷 French`],[`German`,`🇩🇪 German`],[`Chinese`,`🇨🇳 Chinese`],[`Korean`,`🇰🇷 Korean`],[`Custom`,`✏️ Custom`]],DS=[[`en`,`🇺🇸 English`],[`es`,`🇪🇸 Spanish`],[`it`,`🇮🇹 Italian`],[`ko`,`🇰🇷 Korean`],[`custom`,`✏️ Custom`]],OS=[...b.ai?[[`host`,``]]:[],...b.stConnection?[[`st`,``],[`profile`,``]]:[],...p.filter(e=>b.stConnection||e.id!==`vertexai`).map(e=>[e.id,e.label]),[`custom`,`⚙️ Custom`]],kS=(e,t)=>A`${e.map(([e,n])=>A`<option value="${e}" ${e===t&&A`selected`}>${n}</option>`)}`,$=(e,t)=>A`
    <div class="flex-container flexGap5 pg-set-field"><label>${e}</label>${t}</div>`,AS=(e,t,n,r)=>A`
    <input type="text" class="text_pole" data-setting="${e}" data-trim value="${t}" placeholder="${n}" autocomplete="off" spellcheck="false" ${r}>`,jS=(e,t,n,r)=>A`
    <label class="checkbox_label" title="${r}"><input type="checkbox" data-setting="${e}" ${t&&A`checked`}><span>${n}</span></label>`;function MS(e){return A`
        <div class="pg-set-field"><b>${C(`set.skipHead`)}</b></div>
        <div class="flex-container flexGap5 pg-set-field">
            ${jS(`skip_names`,e.skip_names,C(`set.skipNames`),C(`set.skipNamesHint`))}
            ${jS(`skip_blocks`,e.skip_blocks,C(`set.skipBlocks`),C(`set.skipBlocksHint`))}
            ${jS(`skip_brackets`,e.skip_brackets,C(`set.skipBrackets`),C(`set.skipBracketsHint`))}
        </div>
        ${$(C(`set.skipTags`),AS(`skip_tags`,e.skip_tags,`status, info`,A`title="${C(`set.skipTagsHint`)}"`))}
        ${$(C(`set.skipWords`),AS(`skip_words`,e.skip_words,C(`set.skipWordsPh`)))}
        <div class="pg-set-field">
            <div class="menu_button pg-skip-preview-btn">${C(`set.skipPreview`)}</div>
        </div>
        <div class="pg-skip-preview" hidden></div>`}function NS(e){let t=e.querySelector(`.pg-skip-preview`);if(!t)return;t.hidden=!1;let n=[...document.querySelectorAll(`${E.aiMes} ${E.mesText}`)].pop(),r=zo(),i=r.length?A`<div class="pg-skip-preview-names">${C(`set.skipPreviewNames`,{list:r.join(`, `)})}</div>`:A``;if(!n){j(t,A`<div>${C(`set.skipPreviewNone`)}</div>${i}`);return}let a=Po(n,!!x().dialogue_only);j(t,A`
        <div>${C(`set.skipPreviewCount`,{n:a.skipped.length})}</div>
        <div class="pg-skip-preview-text">${a.text}</div>
        ${i}`)}function PS(e){let t=!!(e.route_chat_source||e.route_model);return A`
        <div class="pg-st-info-box">
            <span class="pg-st-info-icon">🔗</span>
            <span class="pg-st-info-text pg-st-live"></span>
        </div>
        <label class="pg-set-override-toggle">
            <input type="checkbox" class="pg-st-override" ${t&&A`checked`}> ${C(`set.stAdvanced`)}
        </label>
        <div class="pg-st-override-rows" ${!t&&A`hidden`}>
            ${$(`Source`,AS(`route_chat_source`,e.route_chat_source,`e.g. vertexai, makersuite, openai…`))}
            ${$(`Model`,AS(`route_model`,e.route_model,C(`set.stModelPh`)))}
        </div>`}function FS(e){let t=Be();return A`
        ${!t.some(t=>t.id===e)&&A`<option value="" selected disabled>${C(`set.profilePick`)}</option>`}
        ${kS(t.map(e=>[e.id,me(e)]),e)}`}function IS(e){return Be().length?A`
        ${$(C(`set.profile`),A`<select class="text_pole pg-profile-select" data-setting="profile_id">${FS(e.profile_id)}</select>`)}`:A`
            <div class="pg-st-info-box">
                <span class="pg-st-info-icon">🔌</span>
                <span class="pg-st-info-text">${C(`set.profileNone`)}</span>
            </div>
            <div class="pg-set-field"><div class="menu_button pg-profile-recheck">${C(`set.profileRecheck`)}</div></div>`}function LS(e){return A`
        ${$(C(`set.hostConnection`),A`
            <select class="text_pole pg-host-select" data-setting="host_connection">
                <option value="" ${!e.host_connection&&A`selected`}>${C(`set.hostCurrent`)}</option>
                ${e.host_connection&&A`<option value="${e.host_connection}" selected>${e.host_connection}</option>`}
            </select>`)}`}async function RS(e){let t=await b.ai?.connections().catch(()=>[])??[],n=x().host_connection;j(e,A`
        <option value="">${C(`set.hostCurrent`)}</option>
        ${n&&!t.some(e=>e.id===n)&&A`<option value="${n}">${C(`set.hostGone`)}</option>`}
        ${kS(t.map(e=>[e.id,e.label]),n)}`),e.value=n}function zS(e){j(e,FS(x().profile_id))}function BS(e){let t=m(e.provider)?.models??[],n=!!e.model&&!t.includes(e.model);return A`
        ${b.ownKeys&&$(`API Key`,A`<input type="password" class="text_pole pg-api-key pg-own-key" placeholder="${C(`set.ownKeyPh`)}" autocomplete="off">`)}
        ${$(`Model`,A`
            <select class="text_pole pg-model-select">
                ${kS(t.map(e=>[e,e]),n?TS:e.model)}
                <option value="${TS}" ${n&&A`selected`}>${C(`set.modelManual`)}</option>
            </select>`)}
        <div class="pg-model-manual" ${!n&&A`hidden`}>
            ${AS(`model`,n?e.model:``,C(`set.modelPh`),A`data-remember-model`)}
        </div>`}function VS(e){return A`
        ${$(`Base URL`,AS(`ext_base_url`,e.ext_base_url,`https://...`))}
        ${$(`API Key`,A`<input type="password" class="text_pole pg-api-key" data-setting="ext_api_key" data-trim placeholder="sk-..." autocomplete="off">`)}
        ${$(`Model`,AS(`model`,e.model,`Model name`))}`}function HS(e){return e.provider===`host`?LS(e):e.provider===`st`?PS(e):e.provider===`profile`?IS(e):e.provider===`custom`?VS(e):m(e.provider)?BS(e):A``}function US(e){let t=e.querySelector(`.pg-st-live`);if(!t)return;let n=x(),r=qe().chatCompletionSettings??{},i=r.chat_completion_source||`(none)`,a=r[we.get(i)||`model`]||r.model||``;j(t,n.route_chat_source||n.route_model?A`Active: <b>${n.route_chat_source||i}</b> / <b>${n.route_model||a||`default`}</b>
               <span class="pg-st-override-note">${C(`set.advOverrideActive`)}</span>`:A`ST connection: <b>${i}</b>${a&&A` / <b>${a}</b>`}`)}function WS(e){let t=e.querySelector(`.pg-provider-detail`);if(!t)return;j(t,HS(x()));let n=t.querySelector(`.pg-api-key`);n&&(n.value=n.matches(`.pg-own-key`)?x().own_keys?.[x().provider]??``:x().ext_api_key);let r=t.querySelector(`.pg-host-select`);r&&RS(r),US(e)}function GS(e){return A`
        <div class="inline-drawer">
            <div class="inline-drawer-toggle inline-drawer-header">
                <b>🌐 Polyglot</b>
                <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
            </div>
            <div class="inline-drawer-content" style="display:none;">
                <div class="flex-container flexGap5 pg-set-field">
                    <label class="checkbox_label"><input type="checkbox" data-setting="enabled_checker" ${e.enabled_checker&&A`checked`}><span>${C(`set.checker`)}</span></label>
                    <label class="checkbox_label"><input type="checkbox" data-setting="enabled_annotator" ${e.enabled_annotator&&A`checked`}><span>${C(`set.aiStudy`)}</span></label>
                    <label class="checkbox_label" title="${C(`set.dialogueOnlyHint`)}"><input type="checkbox" data-setting="dialogue_only" ${e.dialogue_only&&A`checked`}><span>${C(`set.dialogueOnly`)}</span></label>
                    <label class="checkbox_label" title="${C(`set.markSavedHint`)}"><input type="checkbox" data-setting="mark_saved_words" ${e.mark_saved_words!==!1&&A`checked`}><span>${C(`set.markSaved`)}</span></label>
                    <label class="checkbox_label" title="${C(`set.lineVoiceHint`)}"><input type="checkbox" data-setting="line_voice" ${e.line_voice!==!1&&A`checked`}><span>${C(`set.lineVoice`)}</span></label>
                </div>

                ${$(C(`set.targetLang`),A`<select class="text_pole" data-setting="language">${kS(ES,e.language)}</select>`)}
                <div class="pg-set-field pg-lang-custom" ${e.language!==`Custom`&&A`hidden`}>
                    <input type="text" class="text_pole" data-setting="language_custom" value="${e.language_custom}" placeholder="${C(`set.langCustomPh`)}">
                </div>
                <div class="pg-set-field pg-furi-toggle" ${!Ne(w())&&A`hidden`}>
                    <label class="checkbox_label" title="${C(`set.furiganaHint`)}">
                        <input type="checkbox" data-setting="furigana_enabled" ${e.furigana_enabled!==!1&&A`checked`}>
                        <span>${C(`set.furigana`)}</span>
                    </label>
                </div>

                ${$(C(`set.explainLang`),A`<select class="text_pole" data-setting="native_lang">${kS(DS,e.native_lang)}</select>`)}
                <div class="pg-set-field pg-native-custom" ${e.native_lang!==`custom`&&A`hidden`}>
                    <input type="text" class="text_pole" data-setting="native_lang_custom" value="${e.native_lang_custom??``}" placeholder="${C(`set.nativeLangPh`)}">
                </div>

                ${$(C(`set.cefrLevel`),A`<select class="text_pole" data-setting="cefr_level">${kS(Fe.map(e=>[e,e]),e.cefr_level)}</select>`)}

                <hr class="pg-set-divider">
                ${MS(e)}

                <hr class="pg-set-divider">
                ${$(C(`set.aiProvider`),A`
                    <select class="text_pole pg-provider-select">${kS(OS.map(([e,t])=>[e,t||(e===`host`?C(`set.hostOption`,{name:b.ai?.name??``}):C(e===`profile`?`set.profileOption`:`set.stDefault`))]),e.provider)}</select>`)}
                <div class="pg-provider-detail"></div>

                <hr class="pg-set-divider">
                <div class="pg-set-field">
                    <label>${C(`set.maxTokens`)} <b class="pg-tokens-display">${e.max_tokens}</b></label>
                    <div class="flex-container flexGap5 pg-tokens-row">
                        <input type="range"  class="pg-tokens" min="${wS.min}" max="${wS.max}" step="${wS.step}" value="${e.max_tokens}">
                        <input type="number" class="text_pole pg-tokens" min="${wS.min}" max="${wS.max}" step="${wS.step}" value="${e.max_tokens}">
                    </div>
                </div>
            </div>
        </div>`}var KS=(e,t,n)=>{let r=e.querySelector(t);r&&(r.hidden=!n)};function qS(e){KS(e,`.pg-furi-toggle`,Ne(w())),document.dispatchEvent(new CustomEvent(`pg:language-change`))}var JS;function YS(){clearTimeout(JS),JS=setTimeout(()=>document.dispatchEvent(new CustomEvent(`pg:study-scope-change`)),400)}var XS={enabled_checker:(e,t)=>document.dispatchEvent(new CustomEvent(`pg:checker-toggle`,{detail:{on:t}})),enabled_annotator:(e,t)=>document.dispatchEvent(new CustomEvent(`pg:annotator-toggle`,{detail:{on:t}})),mark_saved_words:(e,t)=>document.dispatchEvent(new CustomEvent(`pg:saved-marks-toggle`,{detail:{on:t}})),line_voice:(e,t)=>document.dispatchEvent(new CustomEvent(`pg:line-voice-toggle`,{detail:{on:t}})),language:(e,t,n)=>{KS(e,`.pg-lang-custom`,t===`Custom`),qS(e),t!==n&&cs().then(()=>i(C(`set.langChanged`),`info`,3e3))},language_custom:e=>qS(e),furigana_enabled:()=>document.dispatchEvent(new CustomEvent(`pg:language-change`)),native_lang:(e,t)=>KS(e,`.pg-native-custom`,t===`custom`),skip_names:YS,skip_words:YS,skip_tags:YS,skip_blocks:YS,skip_brackets:YS,route_chat_source:e=>US(e),route_model:e=>US(e)};function ZS(e){m(e.provider)&&(e._model_history[e.provider]=e.model)}function QS(e,t){let n=t.dataset.setting,r=x(),i=r[n],a=t instanceof HTMLInputElement&&t.type===`checkbox`?t.checked:`trim`in t.dataset?t.value.trim():t.value;r[n]=a,`rememberModel`in t.dataset&&ZS(r),T(),XS[n]?.(e,a,i)}function $S(e,t){let n=x();m(n.provider)&&n.model&&(n._model_history[n.provider]=n.model),n.provider=t;let r=m(t);r&&(n.model=n._model_history[t]||r.defaultModel,ZS(n)),T(),WS(e)}function eC(e,t){let n=t===TS;if(KS(e,`.pg-model-manual`,n),n){e.querySelector(`.pg-model-manual input`)?.focus();return}let r=x();r.model=t,ZS(r),T()}function tC(e,t){KS(e,`.pg-st-override-rows`,t),!t&&(Object.assign(x(),{route_chat_source:``,route_model:``}),T(),e.querySelectorAll(`.pg-st-override-rows input`).forEach(e=>{e.value=``}),US(e))}function nC(e){let t=x();t.own_keys={...t.own_keys,[t.provider]:e.trim()},T()}function rC(e,t){let n=Math.max(wS.min,Math.min(wS.max,parseInt(t,10)||wS.fallback));e.querySelectorAll(`.pg-tokens`).forEach(e=>{e.value=String(n)});let r=e.querySelector(`.pg-tokens-display`);r&&(r.textContent=String(n)),x().max_tokens=n,T()}function iC(e){let t=t=>{let n=t.target;n.dataset.setting?QS(e,n):n.matches(`.pg-provider-select`)?$S(e,n.value):n.matches(`.pg-model-select`)?eC(e,n.value):n.matches(`.pg-own-key`)?nC(n.value):n.matches(`.pg-st-override`)&&tC(e,n.checked)};e.addEventListener(`input`,n=>{let r=n.target;r.matches(`.pg-tokens[type="range"]`)?rC(e,r.value):(r.type===`text`||r.type===`password`)&&t(n)}),e.querySelector(`.pg-skip-preview-btn`)?.addEventListener(`click`,()=>NS(e)),e.addEventListener(`click`,t=>{t.target.closest(`.pg-profile-recheck`)&&WS(e)}),e.addEventListener(`focusin`,e=>{let t=e.target;t.matches(`.pg-profile-select`)&&zS(t)}),e.addEventListener(`change`,n=>{let r=n.target;r.matches(`.pg-tokens[type="number"]`)?rC(e,r.value):r.type!==`text`&&r.type!==`password`&&t(n)})}function aC(){let e=document.querySelector(E.extensionsSettings);if(!e||document.getElementById(`pg-settings-panel`))return;let t=Object.assign(document.createElement(`div`),{id:`pg-settings-panel`,className:`extension_container`});j(t,GS(x())),e.appendChild(t),WS(t),iC(t)}function oC(e,t,n){let r=t.trim()||n.trim(),i=n.trim();return!r||r===e&&(!i||i===e)?null:i&&i!==r?`${r}\n---\n${i}`:r}var sC=null;async function cC(e){let t=e.getSettings();if(!t.enabled_checker)return;let n=document.querySelector(E.sendTextarea);if(!(n instanceof HTMLTextAreaElement))return;let r=n.value.trim();if(!r)return;sC?.abort();let a=new AbortController;sC=a,e.setWandBusy(!0);try{let{data:o}=await e.ai.json({prompt:Qe(r,e.getLang(),t.cefr_level,e.getNativeLang()),signal:a.signal,accept:l,missing:e=>ne(e,Ze)});if(a.signal.aborted)return;let s=e=>typeof e==`string`?e.trim():``,c=s(o.grammar),u=s(o.natural);if(!c&&!u)return;let d=oC(r,c,u);if(!d){i(C(`chk.looksGood`),`ok`,2e3);return}e.archive({lang:e.langKey(),original:r,grammar:c||u,natural:u,explanation:s(o.explanation)}),n.value.trim()===r?(n.value=d,n.dispatchEvent(new Event(`input`,{bubbles:!0}))):i(C(`chk.changed`,{text:d}),`info`,1e4)}catch(e){if(a.signal.aborted)return;console.error(`[Polyglot] Checker error:`,e),i(`${C(`chk.error`)} (${c(e)})`,`err`,6e3)}finally{sC===a&&(sC=null,e.setWandBusy(!1))}}var lC=`pg-lines-play-btn`,uC=`pg-line-tools`,dC=`pg-line-save`,fC=`pg-heard`,pC=`pg-playing`,mC=()=>x().line_voice!==!1;function hC(e){let t=k(e);return No(e,t).map(e=>({text:t.slice(e.start,e.end).trim(),after:e.after})).filter(e=>/\p{L}/u.test(e.text))}function gC(e){let t=e.closest(E.mes),n=O(t),r=n===null?void 0:qe().chat?.[Number(n)]?.name;return typeof r==`string`&&r?r:t?.getAttribute(`ch_name`)??void 0}var _C=e=>e?.parentElement?.classList.add(fC);function vC(e){let t=Xu(`${C(`line.play`)}: ${e}`,t=>{_C(t),Yu(t,()=>Lu(e,w(),{speaker:gC(t)}))});return t.title=C(`line.play`),t.classList.add(vv),t.addEventListener(`dblclick`,e=>e.stopPropagation()),t}function yC(e){e.classList.replace(`fa-regular`,`fa-solid`),e.classList.add(`pg-saved`),e.title=C(`line.saved`),e.setAttribute(`aria-label`,C(`line.saved`))}function bC(e,t){let n=Xu(C(`line.save`),()=>{if(n.classList.contains(`pg-saved`))return;let t=gC(n);hs({word:e.slice(0,300),base_form:``,meaning:``,level:`sentence`,...t&&{speaker:t}},{quiet:!0}),document.querySelectorAll(`.${dC}`).forEach(t=>{t.dataset.line===e&&yC(t)}),i(C(`line.savedNote`),`info`,3e3)});return n.className=`${dC} fa-regular fa-bookmark`,n.dataset.line=e,t&&yC(n),n.addEventListener(`dblclick`,e=>e.stopPropagation()),n}async function xC(e,t){if(t.classList.contains(pC)){Ru();return}let n=O(e),r=n===null?null:D(n);if(!r)return;let i=gC(r),a=hC(r).map(e=>({text:e.text,speaker:i}));t.classList.add(pC);let o=null;try{await zu(a,w(),e=>{e>=0?(Ju(o=r.querySelectorAll(`.pg-line-play`)[e]??null),_C(o)):qu(o)&&Ju(null)})}finally{t.classList.remove(pC)}}function SC(e,t){let n=e?.querySelector(E.extraMesButtons),r=e?.querySelector(`.${lC}`);if(!t){r?.remove();return}if(!n||r)return;let i=Object.assign(document.createElement(`div`),{className:`mes_button ${lC} fa-solid fa-headphones interactable`,title:C(`line.playAll`),tabIndex:0});i.addEventListener(`click`,()=>{e&&xC(e,i)}),n.prepend(i)}function CC(e){e.querySelectorAll(`.${uC}`).forEach(e=>e.remove());let t=hC(e);if(!t.length)return;let n=[],r=0;for(let t of Ut(e))n.push({node:t,start:r}),r+=t.data.length;let i=new Set(z().filter(e=>e.level===`sentence`).map(e=>e.word));for(let e of[...t].reverse()){let t=e.after-1,r=n.find(e=>t>=e.start&&t<e.start+e.node.data.length);if(!r)continue;let a=e.after-r.start;a<r.node.data.length&&r.node.splitText(a);let o=document.createElement(`span`);o.className=`${uC} ${vv}`,o.append(vC(e.text),bC(e.text,i.has(e.text.slice(0,300)))),r.node.after(o)}}function wC(e){e.querySelectorAll(`.${uC}`).forEach(e=>e.remove()),e.normalize()}var TC={draw:CC,strip:wC},EC=new Map;function DC(e){if(!mC()){OC();return}let t=e??[...document.querySelectorAll(E.aiMes)].map(e=>O(e)).filter(e=>!!e);for(let e of t){let t=D(e);if(!t||t.closest(E.mes)?.getAttribute(`is_user`)===`true`)continue;let n=hC(t).map(e=>e.text).join(``);SC(t.closest(E.mes),!!n),(EC.get(e)!==n||!Ov(e,`voice`)&&n)&&(EC.set(e,n),Z(e,`voice`,n?TC:null))}}function OC(){for(let e of kv(`voice`))Z(e,`voice`,null);document.querySelectorAll(`.${lC}`).forEach(e=>e.remove()),EC.clear()}function kC(){EC.clear(),Av(`voice`)}var AC=`<i class="fa-solid fa-earth-europe"></i>`,jC=`<i class="fa-solid fa-spinner fa-spin"></i>`,MC=()=>({ai:je,getSettings:x,getLang:w,getNativeLang:S,setWandBusy:PC,langKey:Wo,archive:e=>{Ig(e),Am()}});function NC(){if(!x().enabled_checker||document.getElementById(`pg-wand-btn`))return;let e=document.querySelector(E.sendBtn);if(!e?.parentNode)return;let t=Object.assign(document.createElement(`div`),{id:`pg-wand-btn`,className:`pg-wand-btn interactable`,title:C(`chk.btnTitle`),tabIndex:0,innerHTML:AC});t.addEventListener(`click`,()=>cC(MC())),e.parentNode.insertBefore(t,e)}function PC(e){let t=document.getElementById(`pg-wand-btn`);t&&(t.innerHTML=e?jC:AC,t.classList.toggle(`pg-wand-busy`,e),t.setAttribute(`aria-busy`,String(e)))}function FC(){if(document.getElementById(`pg-ext-menu-btn`))return;let e=document.querySelector(E.extensionsMenu);if(!e)return;let t=Object.assign(document.createElement(`div`),{id:`pg-ext-menu-btn`,className:`list-group-item flex-container flexGap5 interactable`,title:C(`ext.panelTitle`)}),n=Object.assign(document.createElement(`div`),{className:`fa-solid fa-earth-europe extensionsMenuExtensionButton`}),r=Object.assign(document.createElement(`span`),{textContent:C(`ext.menuLabel`)});t.append(n,r),t.addEventListener(`click`,()=>{St(),Kx()}),e.appendChild(t)}function IC(){NC(),Pb()}async function LC(){J();let e=await ss();e&&(i(C(`wb.migrated`,{n:e}),`info`,4e3),J())}function RC(){Ab(),fy(),qy(),kC(),$y(),Yx(),CS(),SS(),setTimeout(()=>{IC(),Db(),oy(),zC(),LC()},Se.chatSwitch)}function zC(e){Gy(e),DC(e)}function BC(e,t){document.addEventListener(e,e=>t(e.detail.on))}(function(){tb(Kx),xy(Kx),fa(()=>{My(),Gy()}),aC(),sa(J),ye.on(le.APP_READY,()=>{Fa().then(()=>{My(),zC(),setTimeout(()=>zC(),Se.chatSwitch*3),R()===`file`&&LC()}),IC(),FC(),xS(),Zt(),ry(),my(),kb(),oy()}),ye.on(le.CHARACTER_MESSAGE_RENDERED,e=>{Pb(),Db(),iy(),e!==void 0&&(ly(String(e)),zC([String(e)]),Qy(String(e)))}),ye.on(le.CHAT_CHANGED,RC),ye.on(le.MESSAGE_SWIPED,e=>{jb(String(e)),uy(String(e)),Db(),iy(),zC([String(e)])}),le.MESSAGE_UPDATED&&ye.on(le.MESSAGE_UPDATED,()=>{Db(),iy(),zC()}),le.MESSAGE_DELETED&&ye.on(le.MESSAGE_DELETED,()=>{Ob(),ay(),Db(),iy(),zC()}),le.MORE_MESSAGES_LOADED&&ye.on(le.MORE_MESSAGES_LOADED,()=>{Pb(),Ob(),ay(),Db(),iy(),zC()}),IC(),FC(),BC(`pg:checker-toggle`,e=>{e?NC():document.getElementById(`pg-wand-btn`)?.remove()}),document.addEventListener(`pg:language-change`,py),document.addEventListener(`pg:language-change`,J),document.addEventListener(`pg:study-scope-change`,()=>{zb(),zC()}),BC(`pg:saved-marks-toggle`,e=>e?Gy():Ky()),BC(`pg:line-voice-toggle`,e=>e?DC():OC()),BC(`pg:annotator-toggle`,e=>{e?Pb():document.querySelectorAll(`.pg-annotate-btn, .pg-open-btn`).forEach(e=>e.remove())})})(),be.addCommandObject(Me.fromProps({name:`pg-check`,callback:async(e,t)=>{if(!x().enabled_checker)return i(C(`chk.slashOff`),`warn`,4e3),`The input assistant is turned off.`;let n=document.querySelector(E.sendTextarea),r=t?.trim();return r&&n&&(n.value=r,n.dispatchEvent(new Event(`input`,{bubbles:!0}))),n?.value.trim()?(await cC(MC()),`Done.`):(i(C(`chk.slashEmpty`),`info`,4e3),`Nothing to check.`)},helpString:`Polyglot: check and translate a text (same as the 🌍 button), put back in the input box. Example: /pg-check Ciao, come stai? Without text it checks what is in the input box (for Quick Replies and scripts).`,unnamedArgumentList:[Ee.fromProps({name:`text`,description:`Text to check (defaults to the input box)`,typeList:[ve.STRING],isRequired:!1})]})),be.addCommandObject(Me.fromProps({name:`pg-annotate`,callback:async e=>{let t=qe(),n=e.mesid?String(e.mesid):String((t.chat?.length??1)-1),r=document.querySelector(Ct(n));return r?Bb(n)?`Message #${n} is already annotated.`:(await Vb(r,n),Bb(n)?`Message #${n} annotated.`:`Message #${n} could not be annotated.`):`Message ID ${n} not found.`},helpString:`Polyglot: annotate a message for study. Omit mesid to annotate the last message.`,namedArgumentList:[Ee.fromProps({name:`mesid`,description:`ID of the message to annotate (defaults to the last message)`,typeList:[ve.NUMBER],isRequired:!1,defaultValue:`{{lastMessageId}}`})]})),be.addCommandObject(Me.fromProps({name:`pg-lookup`,callback:async(e,t)=>{let n=t?.trim();return n?(await Jx(n),`"${n}" looked up.`):`Please provide a word. Example: /pg-lookup hablar`},helpString:`Polyglot: look up a word and open the learning panel. Example: /pg-lookup hablar`,unnamedArgumentList:[Ee.fromProps({name:`word`,description:`Word or phrase to look up`,typeList:[ve.STRING],isRequired:!0})]})),be.addCommandObject(Me.fromProps({name:`pg-panel`,callback:async e=>{let t=String(e.tab||`learn`);return Kx(Hx.includes(t)?t:`learn`),`Learning panel opened.`},helpString:`Polyglot: open the learning panel. tab: wordbook | learn | settings`,namedArgumentList:[Ee.fromProps({name:`tab`,description:`Tab to open (wordbook | learn | settings)`,typeList:[ve.STRING],isRequired:!1,defaultValue:`learn`})]}));