import{$ as e,A as t,B as n,C as r,Ct as i,D as a,E as o,F as s,G as c,H as l,I as u,J as d,K as f,L as p,M as m,N as h,O as ee,P as te,Q as ne,R as re,S as g,St as _,T as v,Tt as ie,U as ae,V as oe,W as se,X as ce,Y as le,Z as ue,_ as y,_t as de,a as fe,at as pe,b as me,bt as he,c as ge,ct as _e,d as ve,dt as ye,et as be,f as xe,ft as Se,g as b,gt as Ce,h as we,ht as Te,i as Ee,it as De,j as Oe,k as x,l as ke,lt as Ae,m as je,mt as Me,n as Ne,nt as Pe,o as Fe,ot as Ie,p as Le,pt as Re,q as ze,r as Be,rt as Ve,s as He,st as S,t as Ue,tt as We,u as Ge,ut as Ke,v as C,vt as qe,w,wt as Je,x as Ye,xt as Xe,y as Ze,yt as Qe,z as T}from"./index-BH-7UTH5.js";function $e(e){let t=e.toLowerCase();return[`spanish`,`espanol`,`español`,`portuguese`,`português`].some(e=>t.includes(e))?`dictionary form — verbs as infinitive (e.g. "hablar"/"falar"), nouns with definite article (e.g. "el libro"/"o livro", "la casa"/"a casa"), adjectives in masculine singular (e.g. "alto")`:[`italian`,`italiano`].some(e=>t.includes(e))?`dictionary form — verbs as infinitive (e.g. "parlare"), nouns with definite article (e.g. "il gatto", "la porta"), adjectives in masculine singular (e.g. "bello")`:[`french`,`français`,`francais`].some(e=>t.includes(e))?`dictionary form — verbs as infinitive (e.g. "parler"), nouns with definite article (e.g. "le livre", "la maison"), adjectives in masculine singular (e.g. "grand")`:[`german`,`deutsch`].some(e=>t.includes(e))?`dictionary form — verbs as infinitive (e.g. "sprechen"), nouns with definite article and capitalized (e.g. "der Hund", "die Katze", "das Haus")`:[`japanese`,`日本語`].some(e=>t.includes(e))?`dictionary form — verbs in plain form (e.g. "話す"), nouns as-is (e.g. "本"), i-adjectives in plain form (e.g. "高い")`:[`chinese`,`中文`,`普通话`].some(e=>t.includes(e))?`the word in its standard simplified Chinese form, no conjugation needed`:[`korean`,`한국어`].some(e=>t.includes(e))?`dictionary form — verbs/adjectives ending in 다 (e.g. "먹다", "예쁘다"), nouns as-is`:`dictionary/infinitive form — verbs as base infinitive (e.g. "run", not "ran"), nouns in singular (e.g. "book"), adjectives in base form (e.g. "good")`}function et(e,t){return/japanese|日本語/i.test(e)?[`- "reading": hiragana reading of ${t} (e.g. "たべる")\n`,`, "reading": "..."`]:[``,``]}var tt=[`grammar`,`natural`,`explanation`];function nt(e,t,n,r){return`You are a ${t} language tutor for CEFR ${n} learners.
The user wants to express something in ${t}.

Instructions:
- Detect the language of the input text.
- If the input IS already in ${t}:
  - "grammar": fix ONLY grammar and spelling mistakes. Do not change the wording, word choice or style; leave what is correct exactly as it is.
  - "natural": the same message as people who speak ${t} from birth would put it, at CEFR ${n} level.
- If the input is in ANY OTHER language:
  - "grammar": a faithful translation into ${t} that keeps the original wording where it can.
  - "natural": a natural ${t} way to say it at CEFR ${n} level.
- Both must always be in ${t}. When the text needs no change, both equal the input.

Return ONLY valid JSON (no markdown, no extra text):
{ "grammar": "...", "natural": "...", "explanation": "..." }

- "explanation": brief explanation in ${r} — if translated, say which language was detected; list the grammar fixes, then what makes the natural version more natural; if nothing changed, say "no change"

Text:
<text>${e}</text>`}function rt(e,t,n,r,i=[],a=[]){let o=$e(t),s=et(t,`the BASE FORM`);return`You are a meticulous language tutor. Analyze the following ${t} text for a CEFR ${n} learner.
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
<text>${e}</text>`}function it(e,t,n,r,i=5){return`You are an expert ${t} language tutor creating a diagnostic quiz for a CEFR ${n} learner.
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
<text>${e}</text>`}var at=e=>e.map(e=>`- ${e.word}${e.meaning?` (${e.meaning})`:``}`).join(`
`);function ot(e,t,n,r=[]){return`You are an expert ${e} language tutor. ${r.length?`Create exactly ${r.length} fill-in-the-blank questions for a CEFR ${t} learner whose native language is ${n}, one on each of these ${e} words or expressions the learner is studying (the meaning in parentheses is only a guide):
${at(r)}
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
}`}function st(e,t,n){return`You are an expert ${e} language examiner. Create a half-length mock reading exam for a CEFR ${t} learner whose native language is ${n}.

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

For Section B questions set "passage" to the reading text. For Section A set "passage" to null.`}var ct=e=>[`word`,`base_form`,`pos_info`,`meaning`,`context_meaning`,`level`,.../japanese|日本語/i.test(e)?[`reading`]:[]];function lt(e,t,n,r,i){let a=$e(n),o=et(n,`the BASE FORM`);return`You are a language tutor for ${n} learners at CEFR level ${r}.
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
}`}function ut(e,t,n){let r=et(t,`the base form`);return`You are a ${t}-to-${n} translation assistant.
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

Sentence: "${e}"`}function dt(e,t,n){return`You are a ${t} grammar expert.
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
}`}var ft=[`sentence`,`translation`,`form`];function pt(e,t,n,r){return`Create a short example sentence in ${t} for a CEFR ${n} learner using the word "${e}".

Rules:
- "sentence": one clear, natural ${t} sentence (max 12 words) showing typical usage
- "translation": natural ${r} translation of that sentence
- "form": the word exactly as written in the sentence (inflected or conjugated if it is)
- Difficulty should match CEFR ${n}

Return ONLY valid JSON (no markdown, no extra text):
{ "sentence": "...", "translation": "...", "form": "..." }`}function mt(e,t,n){return`You are an expert ${t} grammar tutor. Perform a deep syntactic and dependency analysis of the following ${t} sentence for a language learner whose native language is ${n}.

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
- "explanation": concrete, learner-focused, written in ${n}.`}var ht=e=>`- "meaning": ONLY for words marked [needs meaning] — the dictionary meaning of the base form in ${e}, short (1–6 words). Otherwise "".
- "level": ONLY for words marked [needs level] — CEFR level A1|A2|B1|B2|C1|C2. Otherwise "".`,gt=e=>`${e.needsMeaning?` [needs meaning]`:``}${e.needsLevel?` [needs level]`:``}`;function _t(e,t,n){return`You are a precise ${t} linguistics assistant.
Analyse the following ${t} words for a language learner.

${e.map((e,t)=>`${t+1}. word: "${e.word}", base_form: "${e.base_form}"${gt(e)}`).join(`
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
${ht(n)}`}function vt(e,t,n,r,i={}){return`You are a precise ${n} linguistics assistant.
Analyse the following ${n} word for a language learner.

Word (surface form): "${e}"${gt(i)}
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
${ht(r)}`}function yt(e,t,n,r,i=10){let a=e.filter(e=>e.table).map(e=>`${e.word}: ${JSON.stringify(e.table)}`).join(`
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
}`}function bt(e,t,n){return`You are a ${t} language tutor creating a targeted remedial exam.
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
}`}function xt(e){return`You add furigana to Japanese text. For each passage, list EVERY word that contains kanji, in the order the words appear.

Rules:
- Write each word as surface=reading, separated by single spaces, all in one string.
- surface: the word exactly as written, with its okurigana (食べた, 取り扱い, 対する, 分かり).
- reading: hiragana for the whole surface, as read IN THIS CONTEXT (今日=きょう or 今日=こんにち).
- Repeat a word each time it appears. Skip words without kanji. Names: most likely reading.
- Every kanji must be inside some surface — none may be left out.

Return ONLY:
{ "passages": [ { "i": 0, "words": "暗闇=くらやみ 中=なか 放たれる=はなたれる" } ] }

${e.map(e=>`<passage i="${e.i}">${e.text}</passage>`).join(`
`)}`}var St={letter:`a letter or email answering a concrete situation (an invitation, a complaint, a request, news to a friend…). Say who writes to whom and why; the register (formal or informal) follows from the situation.`,opinion:`a text giving and supporting an opinion on a topic (an article, a forum post, a review or an essay). At A1–A2 make it a simple text about the learner's own life, likes and plans instead.`,scene:`an in-story text based on the conversation below: a message, letter or diary entry the learner's character writes about what happened. Keep names and situations from the story.`};function Ct(e,t,n,r,i,a=``){return`You are an examiner writing a ${t} writing task for a CEFR ${n} learner whose native language is ${r}.
Model it on the writing tasks standardised ${t} exams set at ${n}, without copying any real exam.

The task: ${St[e]}
Length: ${i}.

Rules:
- "title": a short title in ${t}.
- "instructions": the task in ${t}, 2–4 sentences, at a level a ${n} learner reads easily.
- "points": 3–4 things the text must include, in ${t}.
- "register": "formal", "informal" or "neutral".
- "instructions_native": the instructions and points translated into ${r}, one short paragraph.
${a&&`\nThe conversation (use it only as the story):\n<conversation>\n${a}\n</conversation>\n`}
Return ONLY:
{ "title": "", "instructions": "", "points": ["", ""], "register": "", "instructions_native": "" }`}function wt(e,t,n,r,i,a){return`You are an experienced rater of ${n} writing exams. Rate this text by a CEFR ${r} learner whose native language is ${i}, as raters of standardised exams do.

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
  "corrected": "", "errors": [{ "original": "", "correction": "", "type": "", "explanation": "" }], "model": "" }`}function Tt(e,t,n,r=10,i={grammar:[],words:[]}){let{grammar:a,words:o}=i;return`You are an expert ${e} tutor writing the grammar section of a ${e} exam for a CEFR ${t} learner whose native language is ${n}.
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
${o.length?`\nWhere natural, build the sentences with these words the learner is studying, and when a sentence uses one of them, give it in "word" exactly as listed:\n${at(o)}\n`:``}
Return ONLY:
{ "questions": [{ "sentence": "", "hint": "", "answers": [""], "point": "", "explanation": "", "word": "" }] }`}function Et(e,t,n,r={}){let i=[[r.charName&&`Character: ${r.charName}`,r.userName&&`User: ${r.userName}`].filter(Boolean).join(`
`),r.before?.length?`<previous_messages>\n${r.before.join(`

`)}\n</previous_messages>`:``,r.lastTranslation?.trim()?`<last_translation>\n${r.lastTranslation.trim()}\n</last_translation>`:``].filter(Boolean).join(`
`),a=`You translate ${t} chat messages into ${n} for a ${n} speaker who is learning ${t}.

## How the translation is used
The messages are a story the reader writes together with an AI. Each paragraph's translation is shown under it: the reader works through the ${t} and looks down when they get stuck, then back up. Inside a paragraph, sentences may take whatever shape ${n} needs; between paragraphs nothing moves.

## What the reader needs from it
- To find the ${t} in it. Whatever part of the ${t} they look up must be there in the ${n}, and nothing should be there that the ${t} leaves unsaid.
- To trust its tone. Learners read how a line feels from its translation, so the translation has to carry that feeling as it is: any shift would teach them the wrong thing about the ${t}. That includes what a line means without saying it (a tease, a jab, a double meaning): it should stay implied in the translation too.
- To learn what the words really say. The reader is studying the ${t}, so crude, explicit or sexual words get their real meaning in the translation; a cleaned-up rendering would teach them a meaning the words do not have.
- To know who is talking to whom. When ${n} has to choose between levels of politeness or forms of "you", choose from the characters' relationship as the background shows it, keep that choice, and change it only where the ${t} changes its own. Characters call each other what the ${t} has them call each other: a name stays a name, and no address word that exists only in ${n}${/korean|한국어/i.test(n)?` (언니, 오빠, 형, 누나, 선배 and the like)`:/japanese|日本語/i.test(n)?` (先輩, お兄ちゃん, -さん, -くん and the like)`:``} is brought in for them.
- To stay in the story's world. Everything in the story keeps its own identity, and each name keeps one spelling, the one ${n} normally uses for names from that language.
- To read it without effort. It should read as ${n} prose in its own right: ${n} word order, punctuation and quotation marks, set phrases rendered by meaning.

## Notes
Add a note (in ${n}, one or two sentences) only where someone reading the translation alone would misunderstand the ${t} line. Most paragraphs have none.${r.wishes?.trim()?`\n\n## The reader's wishes\nWhere they differ from the guidelines above, these win; the answer format stays as given.\n${r.wishes.trim()}`:``}`,o=e.map((e,t)=>`<p i="${t}">${e}</p>`).join(`
`);return{system:a,user:`${i?`Background for the scene (read it, leave it untranslated):\n${i}\n\n`:``}The message: ${e.length} paragraph${e.length===1?``:`s`}. The <p> blocks are the message to translate.
${o}

Answer with one <t> per paragraph, in order, with the same i, and a <n> only when a note is needed. Nothing else:
<t i="0">translation</t>
<n i="0">note</n>`}}var E={chat:`#chat`,mes:`.mes`,mesText:`.mes_text`,aiMes:`.mes[is_user="false"]`,extraMesButtons:`.extraMesButtons`,sendBtn:`#send_but`,sendTextarea:`#send_textarea`,extensionsMenu:`#extensionsMenu`,extensionsSettings:`#extensions_settings`};function Dt(){let e=window.$;e?e(E.extensionsMenu).hide():document.querySelector(E.extensionsMenu)?.setAttribute(`hidden`,``)}var Ot=e=>`${E.mes}[mesid="${CSS.escape(e)}"]`,D=e=>document.querySelector(`${Ot(e)} ${E.mesText}`),O=e=>e?.closest(E.mes)?.getAttribute(`mesid`)??null,kt=/[.!?。！？\n]/;function At(e,t,n=t){let r=Math.max(0,Math.min(t,e.length-1));for(;r>0&&!kt.test(e[r-1]);)r--;let i=Math.max(r,Math.min(n,e.length));for(;i<e.length&&!kt.test(e[i]);)i++;return e.slice(r,i<e.length?i+1:i).trim()}function jt(e){return(e instanceof Element?e:e?.parentElement??null)?.closest(E.mesText)??null}function Mt(e){let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return t>>>0}var Nt=/[\p{Script=Han}々〆ヵヶ]/u,Pt=/[\p{Script=Han}々〆ヵヶ]+/gu,Ft=/^[ぁ-ゖァ-ヺー・]+$/,It=e=>Nt.test(e),Lt=e=>Ft.test(e),Rt=e=>e.replace(/[ァ-ヶ]/g,e=>String.fromCharCode(e.charCodeAt(0)-96));function zt(e,t){if(!t.startsWith(e[0]))return null;let n=e.length-1,r=[],i=new Set,a=(o,s)=>{let c=o*(t.length+1)+s;if(i.has(c))return!1;let l=e[o+1];for(let e=s+1;e+l.length<=t.length;e++){if(!t.startsWith(l,e))continue;let i=e+l.length;if(o+1===n?i===t.length:a(o+1,i))return r[o]=t.slice(s,e),!0}return i.add(c),!1};return a(0,e[0].length)?r:null}function Bt(e,t,{strict:n=!1}={}){let r=Rt(t.replace(/\s+/g,``)),i=[...e.matchAll(Pt)].map(e=>({start:e.index,end:e.index+e[0].length}));if(!i.length||!r||!Lt(r))return[];let a=[],o=0;for(let t of i)a.push(Rt(e.slice(o,t.start))),o=t.end;a.push(Rt(e.slice(o)));let s=zt(a,r);if(s)return i.map((e,t)=>[e.start,e.end,s[t]]);if(n)return[];let c=i[0].start,l=i[i.length-1].end,u=Rt(e.slice(0,c)),d=Rt(e.slice(l));return[[c,l,r.startsWith(u)&&r.endsWith(d)&&r.length>u.length+d.length?r.slice(u.length,r.length-d.length):r]]}function Vt(e,t,n=0,r=e.length){let i=[],a=n;for(let[n,o]of t){if(!n||!It(n))continue;let t=e.indexOf(n,a);t===-1||t+n.length>r||(i.push(...Bt(n,o).map(([e,n,r])=>[t+e,t+n,r])),a=t+n.length)}return i}function Ht(e,t,n=0,r=e.length){let i=new Set;for(let[e,n]of t)for(let t=e;t<n;t++)i.add(t);let a=[];for(let t=n;t<r;t++){if(!Nt.test(e[t])||i.has(t))continue;let n=a[a.length-1];n&&n.end===t?n.end=t+1:a.push({start:t,end:t+1})}return a}function Ut(e){return Array.isArray(e)?e.filter(e=>Array.isArray(e)&&typeof e[0]==`string`&&typeof e[1]==`string`).map(([e,t])=>[e.trim(),t.trim()]):typeof e==`string`?e.split(/[\s,、]+/).flatMap(e=>{let[t,n]=e.split(/[=＝]/);return t&&n?[[t,n]]:[]}):[]}function Wt(e,t=400){let n=typeof Intl.Segmenter==`function`?[...new Intl.Segmenter(`ja`,{granularity:`sentence`}).segment(e)].map(e=>({start:e.index,end:e.index+e.segment.length})):[...e.matchAll(/[^。！？!?\n]*[。！？!?\n]?/g)].filter(e=>e[0]).map(e=>({start:e.index,end:e.index+e[0].length})),r=[];for(let e of n){let n=r[r.length-1];n&&n.end===e.start&&e.end-n.start<=t?n.end=e.end:r.push({...e})}return r.filter(t=>It(e.slice(t.start,t.end)))}function k(e){return Mt(e).toString(36)+e.length.toString(36)}var Gt=new Set([`SCRIPT`,`STYLE`,`RT`,`RP`]),Kt=`.pg-tap-bubble, .pg-para-trans`,qt=e=>Gt.has(e.tagName)||e.matches(`.pg-tap-bubble, .pg-para-trans`);function Jt(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e instanceof Element&&qt(e)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),n=[];for(let e=t.nextNode();e;e=t.nextNode())e instanceof Text&&n.push(e);return n}var A=e=>Jt(e).map(e=>e.data).join(``),Yt=new Set(`P.DIV.LI.UL.OL.DL.DT.DD.BLOCKQUOTE.H1.H2.H3.H4.H5.H6.PRE.TABLE.THEAD.TBODY.TR.TD.TH.SECTION.ARTICLE.ASIDE.HEADER.FOOTER.MAIN.NAV.CENTER.FIGURE.FIGCAPTION.DETAILS.SUMMARY.HR`.split(`.`)),Xt=[...Yt].map(e=>e.toLowerCase()).join(`, `);function Zt(e){let t=new Set([0]),n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e instanceof Element&&qt(e)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),r=0,i,a=!1;for(let e=n.nextNode();e;e=n.nextNode()){if(e instanceof Element){e.tagName===`BR`&&(a=!0);continue}if(!(e instanceof Text))continue;let n=e.parentElement?.closest(Xt)??null;(a||i!==void 0&&n!==i)&&t.add(r),a=!1,i=n,r+=e.data.length}return t}function Qt(){let e=new Map;for(let t of document.querySelectorAll(`${E.mes} ${E.mesText}`)){let n=O(t);n!==null&&e.set(n,k(A(t)))}return e}function $t(e,t,n){if(!e.contains(t))return-1;let r=0;for(let i of Jt(e)){if(i===t)return r+n;if(t.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING)return r;r+=i.data.length}return r}function en(e){return e.querySelectorAll(`rt, rp, ${Kt}`).forEach(e=>e.remove()),e.textContent??``}function tn(e){if(!e.rangeCount)return``;let t=e.getRangeAt(0),n=t.commonAncestorContainer instanceof Element?t.commonAncestorContainer:t.commonAncestorContainer.parentElement;return!n?.closest(`ruby`)&&!n?.querySelector(`ruby, .pg-tap-bubble, .pg-para-trans`)?e.toString():en(t.cloneContents())}function nn(e){if(!e.querySelector(`ruby, .pg-tap-bubble, .pg-para-trans`))return e.innerText;let t=e.cloneNode(!0);return t.querySelectorAll(`rt, rp, ${Kt}`).forEach(e=>e.remove()),t.querySelectorAll(`p, br, div, li`).forEach(e=>e.append(`
`)),(t.textContent??``).replace(/\n{3,}/g,`

`).trim()}function rn(){document.addEventListener(`copy`,e=>{let t=getSelection();if(!t?.rangeCount||!e.clipboardData)return;let n=t.getRangeAt(0),r=n.commonAncestorContainer instanceof Element?n.commonAncestorContainer:n.commonAncestorContainer.parentElement;r?.closest(E.chat)&&(r.closest(`ruby`)||r.querySelector(`ruby`))&&(e.clipboardData.setData(`text/plain`,tn(t)),e.preventDefault())})}var an=Symbol(`pg-safe-html`);function on(e){return{[an]:!0,value:e,toString:()=>e}}function sn(e){return typeof e==`object`&&!!e&&an in e}function cn(e){return e==null||e===!1?``:sn(e)?e.value:Array.isArray(e)?e.map(cn).join(``):ee(e)}function j(e,...t){return on(e.reduce((e,n,r)=>e+n+(r<t.length?cn(t[r]):``),``))}function M(e,t){e.innerHTML=t.value}var ln=null,un=0,dn=()=>un;function fn(){return ln??=new Promise((e,t)=>{let n=indexedDB.open(S.conjDB,S.conjDBVersion);n.onupgradeneeded=()=>{n.result.createObjectStore(S.conjStore)},n.onsuccess=()=>{let t=n.result;t.onversionchange=()=>{t.close(),ln=null},e(t)},n.onerror=()=>{ln=null,t(n.error)}}),ln}async function pn(e,t){try{let n=await fn(),r=await new Promise((t,r)=>{let i=n.transaction(S.conjStore).objectStore(S.conjStore).get(e);i.onsuccess=()=>t(i.result),i.onerror=()=>r(i.error)});return!r||r.lang!==t?null:r.data}catch{return null}}async function mn(e,t,n){un++;try{let r=await fn(),i={data:t,lang:n,cachedAt:Date.now()};await new Promise((t,n)=>{let a=r.transaction(S.conjStore,`readwrite`).objectStore(S.conjStore).put(i,e);a.onsuccess=()=>t(),a.onerror=()=>n(a.error)})}catch{}}async function hn(e){un++;try{let t=await fn();await new Promise((n,r)=>{let i=t.transaction(S.conjStore,`readwrite`).objectStore(S.conjStore).delete(e);i.onsuccess=()=>n(),i.onerror=()=>r(i.error)})}catch(t){console.warn(`[Polyglot] conj-cache: deleteConjCache failed for word:`,e,t)}}async function gn(){un++;try{let e=await fn();await new Promise((t,n)=>{let r=e.transaction(S.conjStore,`readwrite`).objectStore(S.conjStore).clear();r.onsuccess=()=>t(),r.onerror=()=>n(r.error)})}catch(e){console.warn(`[Polyglot] conj-cache: clearConjCacheStore failed`,e)}}async function _n(){try{let e=await fn();return await new Promise((t,n)=>{let r=[],i=e.transaction(S.conjStore,`readonly`).objectStore(S.conjStore).openCursor();i.onsuccess=()=>{let e=i.result;if(!e){t(r);return}let n=e.value;n?.data?.tenses?.length&&r.push({word:String(e.key),lang:n.lang,data:n.data}),e.continue()},i.onerror=()=>n(i.error)})}catch{return[]}}async function vn(e){return(await _n()).filter(t=>t.lang===e).map(({word:e,data:t})=>({word:e,data:t}))}function yn(){return _()?.chatMetadata??null}function bn(){Je()}function xn(e){return{get(){return yn()?.[e]},set(t){let n=yn();return n?(n[e]=t,bn(),!0):!1},delete(){let t=yn();t&&e in t&&(delete t[e],bn())}}}function N(){return _()?.chatId??null}var Sn=/^pg-media-[0-9a-f]{16}\.[a-z0-9]{2,5}$/,Cn=e=>typeof e==`string`&&Sn.test(e),wn=new Set([`mp3`,`ogg`,`oga`,`opus`,`wav`,`m4a`,`aac`,`flac`,`webm`]),Tn=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`avif`,`bmp`]),En=e=>/\.([a-z0-9]+)$/i.exec(e)?.[1].toLowerCase()??``;function Dn(e){let t=2166136261,n=16777619^e.length;for(let r=0;r<e.length;r++)t=Math.imul(t^e[r],16777619),n=Math.imul(n^e[r],1540483477)^n>>>15;return(t>>>0).toString(16).padStart(8,`0`)+(n>>>0).toString(16).padStart(8,`0`)}var On=(e,t)=>`pg-media-${Dn(e)}.${En(t)}`,kn=(e,t)=>(t===`sound`?wn:Tn).has(En(e));function An(e){let t=new Set;for(let n of e)Cn(n.audio)&&t.add(n.audio),Cn(n.image)&&t.add(n.image),Cn(n.example_audio)&&t.add(n.example_audio);return t}async function jn(e){return(await ge([e])).get(e)===!1}async function Mn(e){for(let t of e)Fn.delete(t),Pn.delete(t);await In;let t=await ge(e);return new Set(e.filter(e=>t.get(e)===!0))}async function Nn(e,t,n){let r=0;await Promise.all(Array.from({length:Math.min(t,e.length)},async()=>{for(;r<e.length;)await n(e[r++])}))}var Pn=new Set,Fn=new Set,In=null;function Ln(e){for(let t of e)Cn(t)&&Pn.add(t)}var Rn=864e5;function zn(){try{let e=JSON.parse(localStorage.getItem(S.mediaPending)??`{}`);return e&&typeof e==`object`&&!Array.isArray(e)?e:{}}catch{return{}}}function Bn(e){try{Object.keys(e).length?localStorage.setItem(S.mediaPending,JSON.stringify(e)):localStorage.removeItem(S.mediaPending)}catch{}}function Vn(e,t=Date.now()){let n=[...e].filter(Cn);if(!n.length)return;let r=zn();for(let e of n)r[e]=t;Bn(r)}function Hn(e){let t=zn(),n=!1;for(let r of e)Object.hasOwn(t,r)&&(delete t[r],n=!0);n&&Bn(t)}function Un(e,t=Date.now()){let n=zn(),r=Object.keys(n).filter(e=>!(t-n[e]<Rn)&&!Pn.has(e));Hn(r.filter(t=>e.has(t)||!Cn(t))),Gn(r.filter(t=>!e.has(t)&&Cn(t)))}function Wn(e,t,n=t,r=Date.now()){let i=[...new Set([...e,...Pn])].filter(e=>!t.has(e)&&!n.has(e)&&Cn(e));Hn(t);for(let e of[...Pn])(t.has(e)||!n.has(e))&&Pn.delete(e);Vn(i,r)}function Gn(e){e.length&&(e.forEach(e=>Fn.add(e)),(async()=>{for(let t of e)Fn.delete(t)&&(In=Ue(t),await In?Hn([t]):console.warn(`[Polyglot] could not delete unused media file`,t),In=null)})())}var Kn=500,qn=`tab-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,Jn=nr(),Yn=null,Xn;function Zn(e){Yn=e,Xn??=setTimeout(Qn,Kn)}function Qn(){clearTimeout(Xn),Xn=void 0;let e=Yn;Yn=null,e&&Jn.put(qn,e()).catch(()=>{})}function $n(){clearTimeout(Xn),Xn=void 0,Yn=null,Jn.remove(qn).catch(()=>{})}async function er(){try{return await Jn.all()}catch{return[]}}function tr(e){for(let[t,n]of e)Jn.remove(t,n.at).catch(()=>{})}function nr(){let e=null,t=()=>e??=new Promise((t,n)=>{let r=indexedDB.open(S.journalDB,1);r.onupgradeneeded=()=>{r.result.createObjectStore(S.journalStore)},r.onsuccess=()=>{let n=r.result;n.onversionchange=()=>{n.close(),e=null},t(n)},r.onerror=()=>{e=null,n(r.error)}}),n=async(e,n)=>{let r=(await t()).transaction(S.journalStore,e),i=n(r.objectStore(S.journalStore));return new Promise((e,t)=>{r.oncomplete=()=>e(i()),r.onerror=r.onabort=()=>t(r.error)})};return{put:(e,t)=>n(`readwrite`,n=>(n.put(t,e),()=>void 0)),all:()=>n(`readonly`,e=>{let t=e.getAllKeys(),n=e.getAll();return()=>t.result.map((e,t)=>[String(e),n.result[t]])}),remove:(e,t)=>n(`readwrite`,n=>{if(t===void 0)n.delete(e);else{let r=n.get(e);r.onsuccess=()=>{r.result?.at===t&&n.delete(e)}}return()=>void 0})}}var rr=e=>e.normalize(`NFKC`).toLowerCase().trim(),ir=/\p{Script=Hangul}/u,ar=3;function or(e){return e.split(/\s+/).filter(Boolean).reduce((e,t)=>t.length>e.length?t:e,``)}function sr(e,t){let n=[e.word,e.base_form,e.original_form,e.example_form,e.reading,...e.forms??[]];for(let e of t?.tenses??[])for(let t of e.rows??[])typeof t?.form==`string`&&n.push(or(t.form));return[...new Set(n.filter(e=>typeof e==`string`).map(rr).filter(e=>e.length>0))]}var cr=class{tokens=new Map;unspaced=new Map;phrases=[];all=new Map;constructor(e){for(let{word:t,forms:n}of e)for(let e of n)if(this.all.has(e)||this.all.set(e,t),f.test(e)){if([...e].length<2)continue;let n=this.unspaced.get(e[0])??[];n.push({form:e,word:t}),this.unspaced.set(e[0],n)}else/\s/.test(e)?this.phrases.push({form:e,word:t}):this.tokens.has(e)||this.tokens.set(e,t);for(let e of this.unspaced.values())e.sort((e,t)=>t.form.length-e.form.length)}wordOf(e){return e?this.all.get(rr(e)):void 0}get size(){return this.tokens.size+this.phrases.length+[...this.unspaced.values()].reduce((e,t)=>e+t.length,0)}find(e){let t=e.toLowerCase();if(t.length!==e.length)return[];let n=[];for(let{form:e,word:r}of this.phrases)for(let i=d(t,e);i!==-1;i=d(t,e,i+e.length))n.push({start:i,end:i+e.length,word:r});for(let e of t.matchAll(/[\p{L}\p{M}\p{N}]+(?:['’][\p{L}\p{M}\p{N}]+)*/gu)){let t=e[0],r=e.index;if(f.test(t))continue;let i=this.tokenHit(t);i&&n.push({start:r+i.offset,end:r+i.offset+i.length,word:i.word})}if(this.unspaced.size)for(let e=0;e<t.length;e++){let r=this.unspaced.get(t[e]);if(!r)continue;let i=r.find(n=>t.startsWith(n.form,e));i&&(n.push({start:e,end:e+i.form.length,word:i.word}),e+=i.form.length-1)}n.sort((e,t)=>e.start-t.start||t.end-t.start-(e.end-e.start));let r=[];for(let e of n)(!r.length||e.start>=r[r.length-1].end)&&r.push(e);return r}tokenHit(e){let t=this.tokens.get(e);if(t)return{offset:0,length:e.length,word:t};let n=e.search(/['’][^'’]*$/);if(n>0){let t=e.slice(n+1),r=e.slice(0,n),i=this.tokens.get(t);if(i)return{offset:n+1,length:t.length,word:i};let a=this.tokens.get(r);if(a)return{offset:0,length:r.length,word:a}}if(ir.test(e)){let t=[...e];for(let e=1;e<=ar&&t.length-e>=2;e++){let n=t.slice(0,t.length-e).join(``),r=this.tokens.get(n);if(r)return{offset:0,length:n.length,word:r}}}return null}};function lr(e,t){let n=rr(t),r=e??[];return!n||r.map(rr).includes(n)?[...r]:[...r,t.trim()].slice(-8)}var ur=[`audio`,`example_audio`],dr=(e,t)=>(t===`audio`?e.word:e.example??``).trim(),fr=(e,t)=>!!e[t],pr=(e,t)=>!!e[t]&&(e.made_sounds??[]).includes(e[t]);function mr(e,t){let n=new Set(ur.map(t=>e[t]).filter(Boolean)),r=[...new Set(t)].filter(e=>n.has(e)),{made_sounds:i,...a}=e;return r.length?{...a,made_sounds:r}:a}function hr(e,t,n,r){let i={...e,[t]:n},a=(e.made_sounds??[]).filter(e=>e!==n);return mr(i,r?[...a,n]:a)}function gr(e,t){let n={...e};return delete n[t],mr(n,e.made_sounds??[])}var _r=e=>ur.some(t=>!!dr(e,t)&&!fr(e,t));function vr(e,t){let n=e.langs??[];return!n.length||n.includes(ce(t))?t:n[0]}function yr(e,t,n){let r=dr(e,t);return r?{word:e.word,field:t,text:r,lang:vr(e,n),current:e[t]??``}:null}var br=(e,t)=>!!e&&dr(e,t.field)===t.text&&(e[t.field]??``)===t.current;function xr(e,t,n){let r=[];for(let i of e)for(let e of ur){let a=yr(i,e,n);a&&(!fr(i,e)||t===`remake`&&pr(i,e))&&r.push(a)}return r}var Sr=e=>e.reduce((e,t)=>e+t.text.length,0);function Cr(e){let t={audio:0,example_audio:0};for(let n of e)t[n.field]++;return t}var wr=[`example`,`example_translation`,`example_form`,`example_audio`];function Tr(e,t){let n={...e};for(let e of wr)t[e]===void 0?delete n[e]:n[e]=t[e];return n}function Er(e,t,n){let r=e.example&&t.example&&e.example!==t.example?Tr(n,e):n;return r.audio&&r.audio===t.audio&&t.word!==r.word&&pr(t,`audio`)&&(r={...r},delete r.audio),mr(r,[...e.made_sounds??[],...t.made_sounds??[]])}function Dr(e,t){return e.word!==t&&pr(e,`audio`)?gr(e,`audio`):e}var Or=e=>e.chats??[];function kr(e,t,n){return t===`all`||!n||Or(e).includes(n)}var Ar=e=>e.langs??[],jr=(e,t)=>!t||!Ar(e).length||Ar(e).includes(t),Mr=e=>Or(e).length?Or(e):[``];function Nr(e=[],t=[]){return[...new Set([...e,...t])]}function Pr(e,t){return!t||Or(e).includes(t)?!1:(e.chats=[...Or(e),t],!0)}function Fr(e,t){return!t||Ar(e).includes(t)?!1:(e.langs=[...Ar(e),t],!0)}function Ir(e){let t=e.srs_reviewed_at??0,n=e.srs_reset_at??0;return n>t?[n,0]:[t,e.srs_stability??e.srs_interval??0]}function Lr(e,t){let[n,r]=Ir(e),[i,a]=Ir(t);return n===i?r>=a:n>i}function Rr(e,t){return!e||!t||e===t?e||t||void 0:e.includes(t)?e:t.includes(e)?t:`${e}\n${t}`}var zr=(e,t)=>e?t?e<t?e:t:e:t;function Br(e,t){let n=Lr(e,t)?e:t,r={...t,...Xr(e)};for(let e of Vr)delete r[e];return Er(e,t,{...r,setIds:Nr(e.setIds,t.setIds),chats:Nr(e.chats,t.chats),langs:Nr(e.langs,t.langs),collocations:e.collocations?.length?e.collocations:t.collocations,...(e.forms||t.forms)&&{forms:Nr(e.forms,t.forms).slice(-8)},...(e.seen||t.seen)&&{seen:Math.max(e.seen??0,t.seen??0)},notes:Rr(e.notes,t.notes),dateAdded:zr(e.dateAdded,t.dateAdded),conj_cached:!!(e.conj_cached||t.conj_cached),...Hr(n)})}var Vr=[`srs_stability`,`srs_difficulty`,`srs_due`,`srs_reviewed_at`,`srs_lapses`,`srs_interval`,`srs_ease`,`srs_streak`,`srs_reset_at`];function Hr(e){let t={};for(let n of Vr)e[n]!==void 0&&(t[n]=e[n]);return t}var Ur=new Set([`setIds`,`chats`,`langs`,`made_sounds`,`forms`,`renamed_from`]);function Wr(e,t){if(!Lr(t,e)||JSON.stringify(Hr(t))===JSON.stringify(Hr(e)))return e;let n={...e};for(let e of Vr)delete n[e];return{...n,...Hr(t)}}var Gr=(e,t)=>JSON.stringify(e)===JSON.stringify(t);function Kr(e=[],t=[],n=[]){let r=r=>e.includes(r)&&(!t.includes(r)||!n.includes(r));return Nr(t,n).filter(e=>!r(e))}function qr(e,t,n){let r=e,i=t,a=n,o=e=>Vr.some(t=>!Gr(e[t],r[t])),s=o(i)?o(a)?Lr(t,n)?i:a:i:a,c={};for(let e of new Set([...Object.keys(r),...Object.keys(i),...Object.keys(a)])){let t;t=Vr.includes(e)?s[e]:Gr(i[e],r[e])?a[e]:Gr(a[e],r[e])?i[e]:Ur.has(e)?Kr(r[e],i[e],a[e]):e===`notes`?Rr(i[e],a[e]):e===`seen`?Math.max(Number(i[e])||0,Number(a[e])||0):i[e],t!==void 0&&(c[e]=t)}let l=e=>!Gr(e.example,r.example),u=Tr(c,l(i)?t:l(a)?n:(e=>wr.some(t=>!Gr(e[t],r[t])))(i)?t:n);return mr(u,u.made_sounds??[])}var Jr=new Set([...Vr,`conj_cached`,`chats`,`langs`,`forms`,`seen`]);function Yr(e,t,n){let r=e,i=t,a=new Set(t.made_sounds??[]),o=e=>Jr.has(e)||e===`made_sounds`||(e===`audio`||e===`example_audio`)&&a.has(i[e]);if(![...new Set([...Object.keys(r),...Object.keys(i)])].some(e=>!o(e)&&!Gr(i[e],r[e])))return null;let s={...t};return s.audio&&s.audio===e.audio&&!n.has(s.audio)&&delete s.audio,s.example_audio&&s.example_audio===e.example_audio&&!n.has(s.example_audio)&&delete s.example_audio,s.image&&s.image===e.image&&!n.has(s.image)&&delete s.image,s}function Xr(e){return Object.fromEntries(Object.entries(e).filter(([,e])=>e!==void 0&&e!==``))}function Zr(e,t){let n=new Map(e.map(e=>[e.word,e])),r=0,i=0;for(let e of t){if(!e?.word)continue;let t=n.get(e.word);t?(n.set(e.word,Br(t,e)),i++):(n.set(e.word,e),r++)}return{wordbook:[...n.values()],added:r,merged:i}}function Qr(e,t,n){let r=new Set(t),i=[];return{wordbook:e.flatMap(e=>{if(n&&!n.has(e.word)||!Mr(e).some(e=>r.has(e)))return[e];let t=Or(e).filter(e=>!r.has(e));return t.length?[{...e,chats:t}]:(i.push(e.word),[])}),deleted:i}}function $r(e,t){return{wordbook:e.filter(e=>!t.has(e.word)),deleted:e.filter(e=>t.has(e.word)).map(e=>e.word)}}function ei(e,t,n){let r=new Set(t),i=0;return{wordbook:e.map(e=>Mr(e).some(e=>r.has(e))?(i++,{...e,chats:Nr(Or(e).filter(e=>!r.has(e)),[n])}):e),moved:i}}function ti(e){let t=new Map;for(let n of e)for(let e of Mr(n))t.set(e,(t.get(e)??0)+1);return[...t].map(([e,t])=>({chatId:e,count:t})).sort((e,t)=>e.chatId===``?1:t.chatId===``?-1:t.count-e.count)}var ni=e=>(e??``).normalize(`NFKC`).toLowerCase().replace(/\s+/g,` `).trim();function ri(e){let t=e.filter(e=>e.level!==`grammar`&&e.level!==`sentence`),n=t.map((e,t)=>t),r=e=>n[e]===e?e:n[e]=r(n[e]),i=new Map;t.forEach((e,t)=>{let a=ni(e.word),o=i.get(a);o===void 0?i.set(a,t):n[r(t)]=r(o)}),t.forEach((e,t)=>{let a=i.get(ni(e.base_form));a!==void 0&&(n[r(t)]=r(a))});let a=new Map;t.forEach((e,t)=>a.set(r(t),[...a.get(r(t))??[],e]));let o=(e,t)=>t.some(t=>t!==e&&ni(t.base_form)===ni(e.word));return[...a.values()].filter(e=>e.length>1).map(e=>[...e].sort((t,n)=>Number(o(n,e))-Number(o(t,e))||Number(Lr(n,t))-Number(Lr(t,n))))}function ii(e,t){let[n,...r]=t,i=e.find(e=>e.word===n),a=r.map(t=>e.find(e=>e.word===t)).filter(e=>!!e&&e!==i);if(!i||!a.length)return{wordbook:e,removed:[]};let o=a.reduce((e,t)=>({...Br(e,t),word:i.word}),i),s=new Set(a.map(e=>e.word));return{wordbook:e.filter(e=>!s.has(e.word)).map(e=>e===i?o:e),removed:[...s]}}function ai(e,t,n){let r=e.find(e=>e.word===t);if(!r)return{wordbook:e,word:t,merged:!1,formChanged:!1};let i=Object.fromEntries(Object.entries(n).map(([e,t])=>[e,typeof t==`string`?t.trim():t])),a=i.word||r.word,o=Dr({...r,...i,word:a,base_form:i.base_form||a},r.word);a!==r.word&&(o.renamed_from=[...new Set([...r.renamed_from??[],r.word])].filter(e=>e!==a).slice(-3));let s=o.word!==r.word||o.base_form!==r.base_form;s&&(o.conj_cached=!1);let c=a===t?void 0:e.find(e=>e.word===a);if(c){let t={...Br(o,c),word:a};return{wordbook:e.filter(e=>e!==r).map(e=>e===c?t:e),word:a,merged:!0,formChanged:s}}return{wordbook:e.map(e=>e===r?o:e),word:a,merged:!1,formChanged:s}}var oi=e=>e.length<=500?e:[...e].sort((e,t)=>(e.savedAt??0)-(t.savedAt??0)).slice(-500),si=e=>[...e].sort((e,t)=>t.at-e.at).slice(0,100),ci=`polyglot-data`,li=3,ui=()=>({wordbook:[],sets:[],wrongAnswers:[],checks:[],days:[]}),di=e=>e.wordbook.length>0||e.sets.length>0||e.wrongAnswers.length>0||e.checks.length>0||e.days.length>0,fi=e=>Array.isArray(e)?e.filter(e=>typeof e==`string`):[],pi=(e,t)=>typeof e==`number`&&Number.isFinite(e)?e:t,mi=[`meaning_lang`,`pos_info`,`pos`,`ipa`,`reading`,`notes`,`original_form`,`context_meaning`,`example`,`example_translation`,`example_form`,`example_audio`,`audio`,`image`,`dateAdded`,`speaker`];function hi(e){let t={...e};for(let e of mi)e in t&&typeof t[e]!=`string`&&delete t[e];for(let e of[`collocations`,`made_sounds`,`forms`,`renamed_from`])e in t&&(Array.isArray(t[e])?t[e]=t[e].filter(e=>typeof e==`string`):delete t[e]);for(let e of Vr)e in t&&!Number.isFinite(t[e])&&delete t[e];if(`seen`in t&&!(Number.isFinite(t.seen)&&t.seen>=0)&&delete t.seen,t.srs_reviewed_at===void 0&&t.srs_stability===void 0)for(let e of[`srs_interval`,`srs_ease`,`srs_due`,`srs_streak`])delete t[e];return`conj_cached`in t&&typeof t.conj_cached!=`boolean`&&delete t.conj_cached,`known`in t&&t.known!==!0&&delete t.known,t}function gi(e){return!T(e)||typeof e.word!=`string`||!e.word.trim()?null:{...hi(e),base_form:typeof e.base_form==`string`?e.base_form:e.word,meaning:typeof e.meaning==`string`?e.meaning:``,level:typeof e.level==`string`?e.level:``,setIds:fi(e.setIds),chats:fi(e.chats),...e.langs!==void 0&&{langs:fi(e.langs)}}}var _i=(e,t)=>Array.isArray(e)?e.filter(t):[],vi=e=>T(e)&&typeof e.id==`string`&&typeof e.name==`string`,yi=e=>T(e)&&typeof e.question==`string`;function bi(e){if(!T(e)||typeof e.id!=`string`||typeof e.original!=`string`)return null;let t=e=>typeof e==`string`?e:``;return{id:e.id,at:pi(e.at,0),lang:t(e.lang),original:e.original,grammar:t(e.grammar),natural:t(e.natural),explanation:t(e.explanation),...typeof e.note==`string`&&e.note&&{note:e.note}}}var xi=/^\d{4}-\d{2}-\d{2}$/,Si=e=>Math.max(0,Math.round(pi(e,0))),Ci=e=>e.sort((e,t)=>e.d<t.d?-1:+(e.d>t.d)),wi=(e,t)=>t>0?{...e,o:t}:e,Ti=(e,t)=>wi({d:e.d,n:Math.max(e.n,t.n),r:Math.max(e.r,t.r),a:Math.max(e.a,t.a)},Math.max(e.o??0,t.o??0));function Ei(e){let t=new Map;for(let n of e.flat()){let e=t.get(n.d);t.set(n.d,e?Ti(e,n):n)}return Ci([...t.values()])}function Di(e){return Ei([(Array.isArray(e)?e:[]).filter(e=>T(e)&&typeof e.d==`string`&&xi.test(e.d)).map(e=>wi({d:e.d,n:Si(e.n),r:Si(e.r),a:Si(e.a)},Si(e.o)))])}function Oi(e){return{wordbook:(Array.isArray(e.wordbook)?e.wordbook:[]).map(gi).filter(e=>e!==null),sets:_i(e.sets,vi),wrongAnswers:oi(_i(e.wrongAnswers,yi)),checks:si((Array.isArray(e.checks)?e.checks:[]).map(bi).filter(e=>e!==null)),days:Di(e.days)}}function ki(e,t){let{wordbook:n,added:r,merged:i}=Zr(e.wordbook,t.wordbook),a=new Set(e.sets.map(e=>e.id)),o=new Set(e.wrongAnswers.map(e=>e.question)),s=new Set(e.checks.map(e=>e.id));return{wordbook:n,added:r,merged:i,sets:[...e.sets,...t.sets.filter(e=>!a.has(e.id))],wrongAnswers:[...e.wrongAnswers,...t.wrongAnswers.filter(e=>!o.has(e.question))],checks:si([...e.checks,...t.checks.filter(e=>!s.has(e.id))]),days:Ei([e.days,t.days])}}function Ai(e,t,n){let r=new Set(n.wordbook.flatMap(e=>[e.audio,e.example_audio,e.image]));return{wordbook:ji(e.wordbook,t.wordbook,n.wordbook,Ni(e.wordbook,t.wordbook,n.wordbook,e=>e.word,(e,t,n)=>n?qr(n,e,t):Br(e,t),(e,t)=>Yr(t,e,r))),sets:Ni(e.sets,t.sets,n.sets,e=>e.id,e=>e),wrongAnswers:Ni(e.wrongAnswers,t.wrongAnswers,n.wrongAnswers,e=>e.question,e=>e),checks:si(Ni(e.checks,t.checks,n.checks,e=>e.id,e=>e)),days:Mi(e.days,t.days,n.days)}}function ji(e,t,n,r){let i=new Map(e.map(e=>[e.word,e])),a=e=>{let t=i.get(e.word);return!!t&&Vr.some(n=>t[n]!==e[n])},o=new Map;for(let e of[...t,...n])a(e)&&o.set(e.word,o.get(e.word)??e);if(!o.size)return r;let s=new Set(r.map(e=>e.word));return r.map(e=>{let t=e;for(let n of e.renamed_from??[]){let e=s.has(n)?void 0:o.get(n);e&&(t=Wr(t,e))}return t})}function Mi(e,t,n){let r=e=>({d:e,n:0,r:0,a:0}),i=e=>new Map(e.map(e=>[e.d,e])),a=i(e),o=i(t),s=i(n),c=(e,t)=>Math.max(0,((s.get(e)??r(e))[t]??0)+((o.get(e)??r(e))[t]??0)-((a.get(e)??r(e))[t]??0));return Ci([...new Set([...o.keys(),...s.keys()])].map(e=>wi({d:e,n:c(e,`n`),r:c(e,`r`),a:c(e,`a`)},c(e,`o`))))}function Ni(e,t,n,r,i,a=e=>e){let o=new Map(e.map(e=>[r(e),e])),s=new Map(n.map(e=>[r(e),e])),c=(e,t)=>JSON.stringify(e)===JSON.stringify(t),l=new Map;for(let e of t){let t=r(e),n=o.get(t),u=s.get(t);if(u===void 0){let r=n===void 0?e:c(e,n)?null:a(e,n);r&&l.set(t,r)}else c(e,n)||c(e,u)?l.set(t,u):c(u,n)?l.set(t,e):l.set(t,i(e,u,n))}for(let e of n)!l.has(r(e))&&!o.has(r(e))&&l.set(r(e),e);return[...l.values()]}function Pi(e,t=new Date,n){return JSON.stringify({format:ci,version:li,savedAt:t.toISOString(),...n?.length&&{revs:n},wordbook:e.wordbook,sets:e.sets,wrongAnswers:e.wrongAnswers,checks:e.checks,days:e.days})}function Fi(e){let t;try{t=JSON.parse(e)}catch{return{ok:!1,reason:`invalid`}}if(!T(t)||t.format!==`polyglot-data`)return{ok:!1,reason:`invalid`};if(pi(t.version,0)>li)return{ok:!1,reason:`newer`};let n=Array.isArray(t.revs)&&t.revs.length&&t.revs.every(e=>typeof e==`string`)?t.revs:null;return{ok:!0,data:Oi(t),revs:n}}var Ii=`polyglot-data.json`,Li=`polyglot-data-before-migration.json`,Ri=800,zi=8e3,Bi=[2e3,5e3,15e3,3e4,6e4],Vi=64,Hi=15e3,P=`loading`,F=ui(),I=!1,Ui=null,Wi,Gi=!1,Ki,qi=0,Ji=``,L=null,Yi=!1,Xi=null,Zi=!0,Qi=null,$i,ea=new Set,ta=``,na=new Set,ra=[`_wordbook`,`_sets`,`saved_wrong_answers`,`saved_checks`,`saved_days`];function ia(e){let t=C();return Array.isArray(t[e])||(t[e]=[]),t[e]}function aa(){let e=C(),t=t=>Array.isArray(e[t])?e[t]:[];return{wordbook:t(`_wordbook`),sets:t(`_sets`),wrongAnswers:t(`saved_wrong_answers`),checks:t(`saved_checks`),days:t(`saved_days`)}}function oa(){let e=C();ra.forEach(t=>delete e[t]),me()}var R=()=>P;function sa(){let e=yn();return e?(Array.isArray(e[S.wordbook])||(e[S.wordbook]=[]),e[S.wordbook]):ia(`_wordbook`)}function ca(){return P===`chat`?sa():F.wordbook}function la(){return P===`chat`?ia(`_sets`):F.sets}function ua(){return P===`chat`?ia(`saved_wrong_answers`):F.wrongAnswers}function da(){return P===`chat`?ia(`saved_checks`):F.checks}function fa(){return P===`chat`?ia(`saved_days`):F.days}function pa(){return{wordbook:ca(),sets:la(),wrongAnswers:ua(),checks:da(),days:fa()}}function ma(e){return na.add(e),()=>na.delete(e)}var ha=()=>{na.forEach(e=>e()),ba()},ga=new Set,_a,va=300;function ya(e){return ga.add(e),()=>ga.delete(e)}function ba(){ga.size&&(clearTimeout(_a),_a=setTimeout(()=>ga.forEach(e=>e()),va))}function xa(){let e=crypto.getRandomValues(new Uint8Array(6));return Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}function Sa(e,t=!1){if(P===`chat`){let t=yn();e.wordbook&&(t?t[S.wordbook]=e.wordbook:C()._wordbook=e.wordbook),e.sets&&(C()._sets=e.sets),e.wrongAnswers&&(C().saved_wrong_answers=e.wrongAnswers),e.checks&&(C().saved_checks=e.checks),e.days&&(C().saved_days=e.days)}else F={...F,...e};Ca(t)}function Ca(e=!1){ba(),P===`chat`?(yn()&&bn(),me()):(Gi=e&&(Gi||!I),I=!0,Zn(()=>({data:F,baseText:Ji,at:Date.now()})),!(P!==`file`||qi>0)&&(e?Wi===void 0&&Ta(zi):Ta(Ri)))}function wa(){clearTimeout(Wi),Wi=void 0}function Ta(e){wa(),Wi=setTimeout(()=>{Wi=void 0,Ma()},e)}async function Ea(){let e=await Ee(Ii,L??void 0);if(e.status===`error`)return`retry`;if(e.status===`unchanged`||e.status===`missing`)return`ok`;if(e.text===Ji)return L=e.etag??null,Yi=!0,`ok`;if(Qi&&e.text===Qi.text)return Oa(Qi.text,Qi.revs,Qi.media,e.etag),`ok`;let t=Fi(e.text);if(!t.ok)return t.reason===`newer`?`newer`:await Pa(e.text)?`ok`:`retry`;let n=Da(t.revs);if(n!==null){let e=Fi(n);F=Ai(e.ok?e.data:ui(),F,t.data)}else{console.warn(`[Polyglot] the data file was written over by another device; merging both copies`);let{added:e,merged:n,...r}=ki(t.data,F);F=r}return Oa(e.text,t.revs,An(t.data.wordbook),e.etag),ha(),`ok`}function Da(e){return Qi&&e?.includes(Qi.revs[0])?Qi.text:!e||!Xi||e.includes(Xi[0])||Zi&&e.length>=Vi?Ji:null}function Oa(e,t,n,r){Ji=e,L=r??null,Yi=!0,Xi=t,Zi=!0,Qi=null,ea=new Set([...ea,...n])}async function ka(e){let t=await He(Ii);return t&&t.size===new TextEncoder().encode(e).length?t.etag:null}function Aa(){clearTimeout($i),$i=setTimeout(()=>{ja()},Hi)}async function ja(){if(P!==`file`||Ui||I||Zi)return;let e=await Ee(Ii,Yi?L??void 0:void 0);if(P!==`file`||Ui||I)return;if(e.status===`unchanged`){Zi=!0;return}if(e.status!==`ok`)return;if(e.text===Ji){Zi=!0,L=e.etag??null,Yi=!0;return}L=null;let t=Fi(e.text);t.ok&&(Da(t.revs)===null?(I=!0,Ma()):Zi=!0)}function Ma(){return Ui||(wa(),P===`file`?(Ui=(async()=>{I=!1,Gi=!1;let e=await Ea();if(e===`newer`){I=!0,Ba();return}let t=[xa(),...Xi??[]].slice(0,Vi),n=Pi(F,new Date,t),r=An(F.wordbook),i=e===`ok`?await ke(Ii,n):`error`;i===`ok`?(Ji=n,Xi=t,Zi=!1,L=await ka(n),Yi=!1,Qi=null,Wn(ea,r,An(F.wordbook)),ea=r,I||$n(),qi>0&&x(h(`data.saveRecovered`),`ok`,3e3),qi=0,Aa()):(e===`ok`&&i===`error`&&(Qi={text:n,revs:t,media:r}),I=!0,i===`unsupported`?Ia():(qi===0&&x(h(`data.saveFailed`),`warn`,6e3),Ta(Bi[Math.min(qi,Bi.length-1)]),qi++))})().finally(()=>{Ui=null,I&&P===`file`&&qi===0&&Ta(Gi?zi:Ri)}),Ui):Promise.resolve())}async function Na(){if(P===`chat`)return!0;if(P!==`file`)return!1;for(;Ui;)await Ui;return I&&await Ma(),!I}async function Pa(e){if(e===ta)return!0;let t=await ke(`polyglot-data-unreadable-${Date.now()}.json`,e)===`ok`;return t&&(ta=e),t}async function Fa(e,t){let n=await ke(e,t);if(n!==`ok`)return n;let r=await Ee(e);return r.status===`missing`?`unsupported`:r.status===`ok`&&r.text===t?`ok`:`error`}function Ia(){if(P===`chat`)return;let e=F;P=`chat`,wa(),clearTimeout(Ki),$n(),I=!1;let t=ki(aa(),e);Object.assign(C(),{_wordbook:t.wordbook,_sets:t.sets,saved_wrong_answers:t.wrongAnswers,saved_checks:t.checks,saved_days:t.days}),me(),x(h(`data.chatMode`),`warn`,8e3),ha()}function La(){P!==`offline`&&x(h(`data.loadFailed`),`warn`,8e3),P=`offline`,clearTimeout(Ki),Ki=setTimeout(()=>{Ua()},Bi.at(-1))}var Ra=!1,za=3e5;function Ba(){Ra||x(h(`data.newerFile`),`err`,15e3),Ra=!0,P=`offline`,wa(),clearTimeout(Ki),Ki=setTimeout(()=>{Ua()},za)}var Va=null;function Ha(){return Va??=Ua().finally(()=>{Va=null}),Va}async function Ua(){if(P===`chat`)return;P===`loading`&&!di(F)&&(F=structuredClone(aa()));let e=await Ee(Ii);if(e.status===`error`){La();return}let t=null,n=null;if(e.status===`ok`){let r=Fi(e.text);if(r.ok)t=r.data,n=r.revs;else if(r.reason===`newer`){Ba();return}else if(!await Pa(e.text)){La();return}}let r=aa(),i=di(r),a=!t;i&&await ke(Li,Pi(r));let o=t??ui(),s=await er();for(let[,e]of s)o=Wa(o,n,e);if(s.length&&console.info(`[Polyglot] took in unsaved changes kept by ${s.length} tab(s)`),I||i){let{added:e,merged:t,...n}=ki(o,F);o=n}if(F=o,I||i||a||s.length){I=!1;let e=[xa(),...n??[]].slice(0,Vi),t=Pi(F,new Date,e),a=await Fa(Ii,t);if(a===`unsupported`){Ia();return}if(a===`error`){I=!0,La();return}Ji=t,Xi=e,L=await ka(t),Yi=!1,tr(s),I||$n(),i&&(oa(),x(h(`data.migrated`,{n:r.wordbook.length}),`ok`,5e3))}else Ji=e.status===`ok`?e.text:``,L=e.status===`ok`?e.etag??null:null,Yi=!0,Xi=n;Zi=!0,Qi=null,ea=An(F.wordbook),Un(ea);let c=P===`offline`;P=`file`,qi=0,clearTimeout(Ki),c&&x(h(`data.saveRecovered`),`ok`,3e3),I&&Ta(Ri),ha()}function Wa(e,t,n){let r;try{let t=Fi(Pi(n.data));if(!t.ok)return e;r=t.data}catch{return e}let i=n.baseText?Fi(n.baseText):null,a=i?.ok?i.revs?.[0]:void 0;if(i?.ok&&a&&t?.includes(a))return Ai(i.data,r,e);let{added:o,merged:s,...c}=ki(e,r);return c}async function Ga(){if(P!==`file`||I||Ui)return;let e=await Ee(Ii,Yi?L??void 0:void 0);if(e.status!==`ok`||I||Ui)return;if(e.text===Ji){L=e.etag??null,Yi=!0;return}let t=Fi(e.text);t.ok&&(Da(t.revs)===null?(I=!0,Ma()):(F=t.data,Ji=e.text,L=e.etag??null,Yi=!0,Xi=t.revs,Zi=!0,ea=An(F.wordbook),ha()))}var Ka=()=>P!==`chat`&&(I||Ui!==null);typeof window<`u`&&(window.addEventListener(`beforeunload`,e=>{Ka()&&(Qn(),Ma(),e.preventDefault())}),window.addEventListener(`pagehide`,Qn),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`visible`?Ga():(Qn(),I&&Ma())}));function qa(e,t,n=`text/plain`){let r=n===`text/plain`?`﻿`:``,i=URL.createObjectURL(new Blob([r+e],{type:`${n};charset=utf-8`})),a=Object.assign(document.createElement(`a`),{href:i,download:t});document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(i),6e4)}function Ja(e,t){let n=URL.createObjectURL(e),r=Object.assign(document.createElement(`a`),{href:n,download:t});document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),6e4)}var Ya={"“":`”`,"„":`“”`,"«":`»`,"»":`«`,"‹":`›`,"›":`‹`,"「":`」`,"『":`』`,"〝":`〟〞`,"”":`”`,'"':`"`,"＂":`＂`,"‘":`’`,"‚":`‘’`,"'":`'`},Xa=new Set([`'`,`‘`,`’`,`‚`]),Za=/[\p{L}\p{M}\p{N}]/u,Qa=(e,t)=>t>=0&&t<e.length&&Za.test(e[t]);function $a(e,t){return!Xa.has(e[t])||!Qa(e,t-1)&&t+1<e.length&&!/\s/.test(e[t+1])}function eo(e,t){return!Xa.has(e[t])||t>0&&!/\s/.test(e[t-1])&&!Qa(e,t+1)}var to=`—–―`,no=/[—–―] ?[\p{L}\p{N}¿¡«“"]/uy,ro=/^[\s.,;:]+/u;function io(e,t,n){let r=t;for(;n?.has(r)!==!0&&r>0&&/[ \t\u00a0]/.test(e[r-1]);)r--;return r===0||e[r-1]===`
`||n?.has(r)===!0}function ao(e,t,n){let r=e.indexOf(`
`,t);r===-1&&(r=e.length);for(let e of n??[])e>t&&e<r&&(r=e);return r}function oo(e,t,n){let r=[],i=!0,a=t+1;for(let o=t+1;o<=n;o++)if(!(o<n&&!to.includes(e[o]))){if(i){let t=e.slice(a,o),n=a+(t.match(ro)?.[0].length??0),i=a+t.trimEnd().length;i>n&&r.push({start:n,end:i,after:i})}i=!i,a=o+1}return r}function so(e,t){let n=[];for(let r=0;r<e.length;r++){let i=e[r];if(to.includes(i)){if(no.lastIndex=r,!no.test(e)||!io(e,r,t))continue;let i=ao(e,r,t);n.push(...oo(e,r,i)),r=i-1;continue}let a=Ya[i];if(!a||!$a(e,r))continue;let o=Xa.has(i),s=1,c=r+1;for(;c<e.length;c++){let t=e[c];if(o&&t===`
`){c=e.length;break}if(t===i&&!a.includes(i)&&$a(e,c))s++;else if(a.includes(t)&&eo(e,c)&&--s===0)break}c>=e.length||(e.slice(r+1,c).trim()&&n.push({start:r+1,end:c,after:c+1}),r=c)}return n}var co=(e,t)=>t.map(t=>e.slice(t.start,t.end).trim()).join(`
`),lo={amp:`&`,lt:`<`,gt:`>`,quot:`"`,apos:`'`,nbsp:` `},uo=e=>e.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi,(e,t)=>{if(t[0]!==`#`)return lo[t.toLowerCase()]??e;let n=t[1]===`x`||t[1]===`X`?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return Number.isFinite(n)&&n>0&&n<=1114111?String.fromCodePoint(n):e}),fo=e=>uo(e.replace(/\[sound:[^\]]*\]/gi,` `).replace(/<(rt|rp)\b[^>]*>[\s\S]*?<\/\1>/gi,``).replace(/<(script|style)[\s\S]*?<\/\1>/gi,` `).replace(/<br\s*\/?>|<\/(div|p|li)>/gi,` `).replace(/<[^>]*>/g,``)).replace(/\s+/g,` `).trim();function po(e){return{sounds:[...e.matchAll(/\[sound:([^\]]+)\]/gi)].map(e=>uo(e[1].trim())),images:[...e.matchAll(/<img\b[^>]*?\bsrc\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi)].map(e=>uo((e[1]??e[2]??e[3]).trim())).filter(e=>e&&!/^(https?:|data:)/i.test(e))}}var mo=/ ?([^\s[\]]+?)\[([^\]]+)\]/g,ho=e=>/[^\s[\]]\[[^\]]+\]/.test(e),go=e=>e.replace(/<ruby\b[^>]*>([\s\S]*?)<\/ruby>/gi,(e,t)=>t.replace(/<rp\b[^>]*>[\s\S]*?<\/rp>/gi,``).replace(/([^<]*)<rt\b[^>]*>([\s\S]*?)<\/rt>/gi,(e,t,n)=>`${t.trim()}[${n.trim()}]`));function _o(e){return ho(e)?{text:e.replace(mo,`$1`),reading:e.replace(mo,`$2`)}:{text:e,reading:``}}var vo=[`word`,`meaning`,`reading`,`example`,`notes`],yo=[[`reading`,/reading|kana|furigana|hiragana|pronunciation|pinyin|romaji|ipa|発音|読み|よみ|읽기|발음/i],[`example`,/example|sentence|context|usage|esempio|ejemplo|frase|例文|例|예문/i],[`meaning`,/meaning|definition|translation|gloss|english|back|answer|significato|significado|traducci|意味|訳|뜻|의미|번역/i],[`word`,/^(word|vocab|vocabulary|expression|term|front|question|kanji|lemma|parola|palabra|単語|語彙|단어|표현)/i],[`notes`,/note|extra|comment|memo|hint|メモ|備考|메모/i]];function bo(e){let t={word:-1,meaning:-1,reading:-1,example:-1,notes:-1},n=new Set;for(let[r,i]of yo){let a=e.findIndex((e,t)=>!n.has(t)&&e.trim().toLowerCase()===r),o=a>=0?a:e.findIndex((e,t)=>!n.has(t)&&i.test(e.trim()));o>=0&&(t[r]=o,n.add(o))}let r=()=>e.findIndex((e,t)=>!n.has(t));return t.word<0&&(t.word=r(),t.word>=0&&n.add(t.word)),t.meaning<0&&(t.meaning=r(),t.meaning>=0&&n.add(t.meaning)),t}function xo(e,t){let n=[];for(let r of e){let e=t.get(r.typeId);if(!e)continue;let i=t=>e[t]>=0?go(r.fields[e[t]]??``):``,a=_o(fo(i(`word`)));if(!a.text)continue;let o=r.fields.map(po),s={word:a.text,meaning:_o(fo(i(`meaning`))).text,deck:r.deck},c=_o(fo(i(`reading`))),l=c.reading||c.text||a.reading,u=_o(fo(i(`example`))).text,d=fo(i(`notes`)),f=e.example??-1,p=o.flatMap((e,t)=>t===f?[]:e.sounds)[0],m=f>=0?o[f]?.sounds[0]:void 0,h=o.flatMap(e=>e.images)[0];l&&(s.reading=l),u&&(s.example=u),d&&(s.notes=d),p&&(s.sound=p),m&&u&&(s.exampleSound=m),h&&(s.image=h),n.push(s)}return n}function So(e,t){return e.map(e=>{let n=t.filter(t=>t.typeId===e.id);return{type:e,count:n.length,sample:n[0],mapping:bo(e.fields)}}).filter(e=>e.count>0)}var Co=e=>typeof e==`string`?e.split(/[,\n]/).map(e=>e.trim()).filter(Boolean):[],wo=e=>Co(e).filter(e=>/^[\w:-]+$/.test(e)),To=e=>RegExp(`<(${e.join(`|`)})\\b[^>]*>([\\s\\S]*?)<\\/\\1\\s*>`,`gi`);function Eo(e){let t=[];for(let n of[...e].sort((e,t)=>e.start-t.start)){let e=t[t.length-1];e&&n.start<=e.end?e.end=Math.max(e.end,n.end):n.end>n.start&&t.push({...n})}return t}function Do(e,t){let n=[];for(let r of e){let e=r.start;for(let i of t)i.end<=e||i.start>=r.end||(i.start>e&&n.push({start:e,end:i.start}),e=Math.max(e,i.end));e<r.end&&n.push({start:e,end:r.end})}return n}var Oo=(e,t)=>t.reduce((e,t)=>e.slice(0,t.start)+e.slice(t.start,t.end).replace(/[^\n]/g,` `)+e.slice(t.end),e),ko=(e,t)=>Do([{start:0,end:e.length}],t).map(t=>e.slice(t.start,t.end).trim()).filter(Boolean).join(`
`),Ao=/^\s*(\[[^[\]\n]*[^\s[\]][^[\]\n]*\]|【[^【】\n]+】)\s*$/;function jo(e,t){return t.length?[...e.matchAll(To(t))].map(e=>({start:e.index,end:e.index+e[0].length})):[]}var Mo=/[\s*_~`#>|+=-]/;function No(e){let t=``,n=[];for(let r=0;r<e.length;r++)Mo.test(e[r])||(t+=e[r],n.push(r));return{out:t,at:n}}function Po(e,t,n){let r=No(fo(n[2])).out;if(r.length<2)return null;let i=No(fo(t.slice(0,n.index))).out.length,a=-1;for(let t=e.out.indexOf(r);t>=0;t=e.out.indexOf(r,t+1))(a<0||Math.abs(t-i)<Math.abs(a-i))&&(a=t);return a<0?null:{start:e.at[a],end:e.at[a+r.length-1]+1}}function Fo(e,t,n){if(!n.length)return[];let r=No(e);return[...t.matchAll(To(n))].map(e=>Po(r,t,e)).filter(e=>!!e)}var Io=e=>[`.TH-render`,...e.skip_blocks?[`pre`,`code`,`details`]:[]].join(`, `);function Lo(e){if(typeof e.checkVisibility!=`function`||!e.checkVisibility())return()=>!1;let t=new Map;return n=>{let r=n.parentElement;if(!r||r===e)return!1;let i=t.get(r);return i===void 0&&t.set(r,i=!r.checkVisibility()),i}}function Ro(e){let t=C(),n=Io(t),r=Jt(e),i=Lo(e),a=[],o=0;for(let s of r){let r=o,c=o+s.data.length;o=c;let l=s.parentElement?.closest(n);(l&&l!==e&&e.contains(l)||i(s)||t.skip_brackets&&Ao.test(s.data))&&a.push({start:r,end:c})}let s=wo(t.skip_tags);if(s.length){let t=r.map(e=>e.data).join(``),n=O(e),i=n===null?void 0:_().chat?.[Number(n)]?.mes;a.push(...jo(t,s)),typeof i==`string`&&a.push(...Fo(t,i,s))}return Eo(a)}function zo(e,t=Ro(e)){let n=new Set;if(!t.length)return n;let r=0;for(let i of Jt(e)){let e=r+(i.data.length-i.data.trimStart().length),a=r+i.data.trimEnd().length;r+=i.data.length,e<a&&t.some(t=>t.start<=e&&t.end>=a)&&n.add(i)}return n}function Bo(e,t=A(e),n=Ro(e)){return so(Oo(t,n),Zt(e))}function Vo(e,t){let n=A(e),r=Ro(e);if(t){let t=Bo(e,n,r);return{text:co(n,t),plain:n,skipped:r,lines:t}}return{text:r.length?ko(n,r):nn(e),plain:n,skipped:r}}function Ho(e,t){let n=e,r=wo(t.skip_tags);return r.length&&(n=n.replace(To(r),``)),t.skip_blocks&&(n=n.replace(/```[\s\S]*?```/g,``).replace(/<(pre|details)\b[^>]*>[\s\S]*?<\/\1\s*>/gi,``)),t.skip_brackets&&(n=n.split(`
`).filter(e=>!Ao.test(e)).join(`
`)),n.replace(/\n{3,}/g,`

`).trim()}var Uo=e=>e.normalize(`NFKC`).toLowerCase().replace(/^[\p{P}\p{S}\s]+|[\p{P}\p{S}\s]+$/gu,``).replace(/['’]s$/u,``);function Wo(e,t){let n=new Set;for(let t of e){n.add(Uo(t));for(let e of t.split(/[\s\p{P}]+/u))e.length>=2&&n.add(Uo(e))}for(let e of t)n.add(Uo(e));return n.delete(``),n}function Go(){let e=_(),t=[e.name1];if(e.groupId){let n=e.groups?.find(t=>t.id===e.groupId);for(let r of n?.members??[])t.push(e.characters?.find(e=>e.avatar===r)?.name)}else e.name2!==`SillyTavern System`&&t.push(e.name2);return t.filter(e=>typeof e==`string`&&!!e.trim())}function Ko(){let e=C(),t=[...e.skip_names?Go():[],...Co(e.skip_words)];return[...new Set(t.map(e=>e.trim()))].filter(e=>e.length<=40).slice(0,20)}function qo(e){let t=C(),n=Co(t.skip_words),r=new Set(n.map(Uo)),i=[];for(let t of e.map(e=>e.trim())){let e=Uo(t);!e||/[,\n]/.test(t)||r.has(e)||(r.add(e),i.push(t))}return i.length?(t.skip_words=[...n,...i].join(`, `),me(),document.querySelectorAll(`input[data-setting="skip_words"]`).forEach(e=>{e.value=t.skip_words}),document.dispatchEvent(new CustomEvent(`pg:study-scope-change`)),i.length):0}function Jo(){let e=C(),t=Wo(e.skip_names?Go():[],Co(e.skip_words));return(...e)=>t.size>0&&e.some(e=>!!e&&t.has(Uo(e)))}function z(){return ca()}function B(e,t=!1){Sa({wordbook:e},t)}var Yo=()=>C().wordbook_scope??`chat`,Xo=()=>R()!==`chat`,Zo=()=>ce(b()),Qo=()=>C().wordbook_lang_only===!1?null:Zo();function V(e=Yo()){let t=Qo(),n=N();return z().filter(r=>jr(r,t)&&(!Xo()||kr(r,e,n)))}var $o=()=>z().filter(e=>!Ar(e).length).length,es=()=>{let e=Zo();return z().some(t=>Ar(t).length>0&&!Ar(t).includes(e))};function ts(){let e=Zo(),t=z(),n=t.filter(t=>!Ar(t).length&&Fr(t,e)).length;return n&&B(t),n}function ns(e){e.forEach(hn)}function rs(e){let t=N(),n=new Set(e),{wordbook:r,deleted:i}=Yo()===`chat`&&t&&Xo()?Qr(z(),[t],n):$r(z(),n);B(r),ns(i)}function is(e,t,n,r=!1){let i=z(),a=i.findIndex(t=>t.word===e);return a<0?!1:(i[a]=n?hr(i[a],t,n,r):gr(i[a],t),B(i),!0)}function as(e,t){let n=new Set(e),r=z();for(let e of r)n.has(e.word)&&(t?e.known=!0:delete e.known);B(r)}function os(e){let t=new Set(e),n=z(),r=n.filter(e=>t.has(e.word)).map(e=>e.base_form),{wordbook:i,deleted:a}=$r(n,t);a.length&&(B(i),ns(a)),qo([...e,...r])}var ss=()=>ti(z());function cs(e){let t=N();if(!t)return 0;let{wordbook:n,moved:r}=ei(z(),e.filter(e=>e!==t),t);return B(n),r}function ls(e){let{wordbook:t,deleted:n}=Qr(z(),e);return B(t),ns(n),n.length}var us=()=>ri(V());function ds(e){let{wordbook:t,removed:n}=ii(z(),e);return n.length?(B(t),ns(n),n.length):0}function fs(e,t){let n=ai(z(),e,t);return B(n.wordbook),n.formChanged&&hn(e),n}var ps=xn(S.wordbook);async function ms(){let e=N(),t=ps.get();if(!e||!Array.isArray(t)||R()!==`file`)return 0;let n=Oi({wordbook:t}).wordbook.map(({audio:t,example_audio:n,image:r,made_sounds:i,...a})=>({...a,chats:[e]}));return n.length&&B(Zr(z(),n).wordbook),!await Na()||N()!==e?0:(ps.delete(),n.length)}async function hs(){await gn();let e=z(),t=!1;e.forEach(e=>{e.conj_cached&&(e.conj_cached=!1,t=!0)}),t&&B(e)}function gs(){return la()}function _s(e){Sa({sets:e})}function vs(){return`set_`+Date.now()+`_`+Math.random().toString(36).slice(2)}function ys(e){let t=gs(),n=vs();return t.push({id:n,name:e}),_s(t),n}function bs(e){_s(gs().filter(t=>t.id!==e));let t=z();t.forEach(t=>{t.setIds=(t.setIds||[]).filter(t=>t!==e)}),B(t)}function xs(e,t){let n=z(),r=n.find(t=>t.word===e);if(!r)return;r.setIds??=[];let i=r.setIds.indexOf(t);i===-1?r.setIds.push(t):r.setIds.splice(i,1),B(n)}function Ss(e,{quiet:t=!1}={}){let n=z(),r=e.base_form?.trim()||e.word;if(!r?.trim())return null;let i=N(),a=n.find(e=>e.word===r);if(a){let e=Pr(a,i);return(Fr(a,Zo())||e)&&B(n),t||x(h(e?`wb.addedToChat`:`wb.alreadyIn`,{word:r}),`info`),e?`tagged`:null}let o=e.original_form??(e.word===r?void 0:e.word),s=e.conj_cache;return n.push({word:r,base_form:e.base_form??r,level:e.level??``,meaning:e.meaning,meaning_lang:e.meaning_lang,pos_info:e.pos_info,reading:e.reading,original_form:o,context_meaning:e.context_meaning||(o?e.meaning:void 0),...typeof e.pos==`string`&&e.pos&&{pos:e.pos},...typeof e.ipa==`string`&&e.ipa&&{ipa:e.ipa},...typeof e.notes==`string`&&e.notes&&{notes:e.notes},...typeof e.speaker==`string`&&e.speaker&&{speaker:e.speaker},...Array.isArray(e.collocations)&&e.collocations.length&&{collocations:e.collocations.filter(e=>typeof e==`string`)},setIds:[],chats:i?[i]:[],langs:[Zo()],dateAdded:new Date().toISOString(),conj_cached:!!s}),B(n),s&&mn(r,s,b()),`added`}function Cs(e){e.length?qa(ws(e),`Polyglot_Wordbook.csv`):x(h(`wb.noExport`),`warn`)}function ws(e){let t=e=>String(e||``).replace(/[\n\r]/g,` `).replace(/^[=+\-@\t]/,`'$&`).replace(/"/g,`""`);return[`"word","base_form","meaning","level","original_form","context_meaning"`,...e.map(e=>`"${t(e.word)}","${t(e.base_form)}","${t(e.meaning)}","${t(e.level)}","${t(e.original_form)}","${t(e.context_meaning)}"`)].join(`
`)}function Ts(e){e.length?qa(Es(e),`Polyglot_Flashcards.txt`):x(h(`wb.noExport`),`warn`)}function Es(e){let t=e=>ee(String(e||``).replace(/[\t\n\r]/g,` `));return`#separator:tab
#html:true
#tags column:4
`+e.map(e=>{let n=t(e.word),r=t(e.base_form),i=t(e.meaning);return r&&r!==n&&(i+=`<br><br><i style="color:gray;">Base: ${r}</i>`),`${n}\t${i}\t${t(e.level)}\tPolyglot\t${t(e.original_form)}\t${t(e.context_meaning)}`}).join(`
`)}function Ds(e){let t=[],n=``,r=!1;for(let i=0;i<e.length;i++){let a=e[i];if(a===`"`){if(r&&e[i+1]===`"`){n+=`""`,i++;continue}r=!r,n+=a}else a===`
`&&!r?(t.push(n),n=``):a===`\r`||(n+=a)}return n.trim()&&t.push(n),t}function Os(e){if(!T(e)||!Array.isArray(e.tenses))return null;let t=e.tenses.filter(e=>T(e)&&Array.isArray(e.rows)&&e.rows.length);return t.length?{base:String(e.base??``),translation:String(e.translation??``),tenses:t}:null}async function ks(e,t,n,r){let i=await pn(e,t);if(i?.tenses?.length)return i;let{data:a,partial:o}=await n.ai.json({prompt:dt(e,t,n.getNativeLang()),signal:r,accept:Os});return o||(await mn(e,a,t),As(e)),a}function As(e){let t=z(),n=t.find(t=>t.word===e||t.base_form===e);n&&!n.conj_cached&&(n.conj_cached=!0,B(t))}var js=null;function Ms(e,t){js?.();let n=document.createElement(`div`);n.className=`pg-conj-overlay`,M(n,j`
        <div class="pg-conj-modal" role="dialog" aria-modal="true" aria-label="${e}">
            <div class="pg-conj-header">
                <span class="pg-conj-base">${e}</span>
                ${t&&j`<span class="pg-conj-lang-badge">${t}</span>`}
                <button class="pg-conj-close" title="Close" aria-label="Close"></button>
            </div>
            <div class="pg-conj-body"></div>
        </div>`),document.body.appendChild(n);let r=new AbortController,i=e=>{e.key===`Escape`&&(e.stopPropagation(),e.preventDefault(),a())},a=()=>{r.abort(),n.remove(),window.removeEventListener(`keydown`,i,!0),js===a&&(js=null)};return js=a,n.addEventListener(`pointerdown`,e=>{e.target===n&&(e.stopPropagation(),a())}),n.querySelector(`.pg-conj-close`)?.addEventListener(`click`,a),window.addEventListener(`keydown`,i,!0),{body:n.querySelector(`.pg-conj-body`),signal:r.signal}}function Ns(e,t,n){e.className=t===`ready`?`pg-conj-body`:`pg-conj-body pg-conj-${t}`,M(e,n)}function Ps(e,{base:t,translation:n,tenses:r}){let i=e.closest(`.pg-conj-modal`),a=i?.querySelector(`.pg-conj-base`);a&&t&&(a.textContent=t),a&&n&&!i?.querySelector(`.pg-conj-meaning`)&&a.insertAdjacentElement(`afterend`,Object.assign(document.createElement(`span`),{className:`pg-conj-meaning`,textContent:n})),Ns(e,`ready`,j`
        <div class="pg-conj-grid">${r.map(e=>j`
            <div class="pg-conj-tense-col">
                <div class="pg-conj-tense-head">
                    <span class="pg-conj-tense-name">${e.name}</span>
                    <span class="pg-conj-tense-ko">${e.name_native}</span>
                </div>
                <table class="pg-conj-table"><tbody>${(e.rows??[]).map(e=>j`
                    <tr><td class="pg-conj-person">${e.person}</td><td class="pg-conj-form">${e.form}</td></tr>`)}
                </tbody></table>
            </div>`)}
        </div>`)}async function Fs(e,t,n,r){let{body:i,signal:a}=Ms(e,r);Ns(i,`loading`,j`<i class="fa-solid fa-spinner fa-spin"></i> ${h(`conj.loading`)}`);try{Ps(i,await ks(e,t,n,a))}catch(e){if(a.aborted)return;let t=e instanceof Error?e.message:String(e);Ns(i,`error`,j`<i class="fa-solid fa-triangle-exclamation"></i> ${h(`conj.failed`,{msg:t})}`)}}function Is(e,t,n){return Fs(e,t,n,t)}function Ls(e,t){return Fs(e,t.getLang(),t)}var Rs=null;function zs(){return Rs!==null}function Bs(){Rs?.abort()}var Vs=e=>typeof e==`string`?e.trim():void 0;function Hs(e){let t=Vs(e.pos),n=Vs(e.level)?.toUpperCase();return{meaning:Vs(e.meaning)?.slice(0,200),level:n&&pe.includes(n)?n:void 0,base_form_verified:Vs(e.base_form_verified),pos:t===void 0?void 0:Ke.includes(t)?t:`phrase`,ipa:Vs(e.ipa),collocations:Array.isArray(e.collocations)?e.collocations.filter(e=>typeof e==`string`&&e.trim().length>0).map(e=>e.trim().slice(0,80)).slice(0,4):void 0}}var Us=e=>({pos:e.pos,ipa:e.ipa||void 0,collocations:JSON.stringify(e.collocations??[]),base_form:e.base_form});function Ws(e,t,n,r,i=Us(e)){let a=!1,o=Us(e);!e.meaning?.trim()&&t.meaning&&(e.meaning=t.meaning,e.meaning_lang??=r,a=!0),!e.level&&t.level&&(e.level=t.level,a=!0),t.pos&&e.pos!==t.pos&&o.pos===i.pos&&(e.pos=t.pos,a=!0);let s=t.ipa||void 0;if(t.ipa!==void 0&&s!==e.ipa&&o.ipa===i.ipa&&(e.ipa=s,a=!0),t.collocations&&o.collocations===i.collocations&&(t.collocations.length>0||e.collocations&&e.collocations.length>0)){let n=t.collocations.length>0?t.collocations:void 0;JSON.stringify(e.collocations)!==JSON.stringify(n)&&(e.collocations=n,a=!0)}return t.base_form_verified&&t.base_form_verified!==e.base_form&&o.base_form===i.base_form&&(e.base_form=t.base_form_verified,e.conj_cached=!1,hn(n),a=!0),a}var Gs=e=>({needsMeaning:!e.meaning?.trim(),needsLevel:!e.level}),Ks=10,qs=3,Js=4,Ys=e=>!(e instanceof u),Xs=e=>T(e)?Hs(e):null,Zs=e=>{if(!Array.isArray(e))return null;let t=e.filter(e=>T(e)&&typeof e.word==`string`);return t.length?t:null};function Qs(e,t,n){let r=z(),i=new Map(r.map(e=>[e.word,e])),a=!1;for(let{word:r,result:o}of e){let e=i.get(r);e&&Ws(e,o,r,t,n.get(r))&&(a=!0)}a&&B(r)}async function $s(e,t={}){Rs?.abort();let n=new AbortController;Rs=n;let{signal:r}=n,i=e.getLang(),a=e.getNativeLang(),o=t.words?new Set(t.words):null,s=z().filter(e=>o?o.has(e.word):e.level!==`grammar`&&e.level!==`sentence`),c=s.length,l=0,u=0,d=(e,n=1)=>{l+=n,t.onProgress?.(l,c,e)},f=0,p=0,m,h=()=>{f=0,p=0},ee=e=>{m=e,n.abort()},te=e=>{if(r.aborted)return;let t=e instanceof Error?e.message:String(e);(Ys(e)?++f>=qs:++p>=Js)&&ee(t)},ne=async t=>{let n=new Map([[t.word,Us(t)]]);try{let{data:o,partial:s}=await e.ai.json({prompt:vt(t.word,t.base_form,i,a,Gs(t)),signal:r,accept:Xs});if(s){console.warn(`[Polyglot] reanalysis reply was cut off; not applied for`,t.word),u++,++p>=Js&&ee(`the replies were cut off (raise the max tokens)`);return}h(),Qs([{word:t.word,result:o}],a,n)}catch(e){if(r.aborted)return;console.warn(`[Polyglot] reanalysis failed for`,t.word,e),u++,te(e)}};try{for(let n=0;n<s.length&&!r.aborted;n+=Ks){let o=s.slice(n,n+Ks);t.onProgress?.(l,c,o[0].word);let u=new Set,f=new Map(o.map(e=>[e.word,Us(e)]));try{let{data:t,partial:n}=await e.ai.json({prompt:_t(o.map(e=>({word:e.word,base_form:e.base_form,...Gs(e)})),i,a),signal:r,accept:Zs,merge:oe(e=>e.word)});if(n||h(),!n){let e=t.filter(e=>f.has(e.word));Qs(e.map(e=>({word:e.word,result:Hs(e)})),a,f),u=new Set(e.map(e=>e.word))}}catch(e){if(r.aborted||(te(e),r.aborted))break;console.warn(`[Polyglot] reanalysis batch failed — retrying word by word`,e)}let p=o.filter(e=>u.has(e.word));p.length&&d(p[p.length-1].word,p.length);for(let e of o.filter(e=>!u.has(e.word))){if(r.aborted)break;await ne(e),d(e.word)}}}finally{Rs===n&&(Rs=null),t.onDone?.(l,c,r.aborted,m,u)}}var ec=new Set;function tc(){ec.forEach(e=>e())}function nc(e,t,n){let r=()=>typeof e==`function`?e():e,i={text:t,ratio:0};function a(){let e=r();return e?(e.querySelector(`.pg-run-progress`)||(M(e,j`
                <div class="pg-run-progress">
                    <span class="pg-run-text" aria-live="polite"></span>
                    <button class="pg-run-stop">${h(`ann.stop`)}</button>
                </div>
                <div class="pg-run-track"><div class="pg-run-fill"></div></div>`),e.querySelector(`.pg-run-stop`)?.addEventListener(`click`,n)),e.hidden=!1,e):null}function o(){let e=a(),t=e?.querySelector(`.pg-run-text`),n=e?.querySelector(`.pg-run-fill`);t&&(t.textContent=i.text),n&&(n.style.width=`${Math.round(i.ratio*100)}%`)}return o(),ec.add(o),{update(e,t,n){i={text:e,ratio:n?t/n:0},o()},close(){ec.delete(o);let e=r();e&&(e.hidden=!0,M(e,j``))}}}var rc=e=>V().filter(t=>e?e.has(t.word):t.level!==`grammar`&&t.level!==`sentence`);async function ic({bar:e,words:t,confirm:n,onBusy:r,onDone:i}){if(zs()){Bs();return}let a=rc(t&&new Set(t)).map(e=>e.word),o=a.length;if(!o){x(h(`wb.reanalyseNone`),`warn`);return}if(n&&!await w(h(`wb.reanalyseConfirm`,{n:o}),{yes:h(`wb.reanalyseStart`),no:h(`confirmNo`)}))return;let s=nc(e,h(`wb.reanalyseProgress`,{done:0,total:o}),Bs);r?.(!0),await $s({ai:je,getLang:b,getNativeLang:y},{words:a,onProgress(e,t,n){s.update(h(`wb.reanalyseProgress`,{done:e,total:t,word:n}),e,t)},onDone(e,t,n,a,o){s.close(),r?.(!1),a?x(h(`wb.reanalyseFailed`,{done:e,total:t,msg:a}),`err`,6e3):n?x(h(`wb.reanalyseStopped`,{done:e,total:t}),`warn`,3e3):o?x(h(`wb.reanalyseSome`,{n:e-o,failed:o}),`warn`,6e3):x(h(`wb.reanalyseDone`,{n:e}),`ok`,3e3),i?.()}})}var ac=e=>e.toLowerCase().normalize(`NFD`).replace(/\p{M}/gu,``).normalize(`NFC`).replace(/[^\p{L}\p{N}]/gu,``);function oc(e,t){if(typeof Intl.Segmenter==`function`)try{return[...new Intl.Segmenter(t||void 0,{granularity:`word`}).segment(e)].map(e=>({text:e.segment,word:!!e.isWordLike&&!!ac(e.segment)}))}catch{}return e.split(/([\p{L}\p{M}\p{N}'’-]+)/u).filter(Boolean).map(e=>({text:e,word:!!ac(e)}))}var sc=(t,n)=>t===n||t.length>=4&&n.length>=4&&e(t,n)<=1;function cc(e,t){let n=Array.from({length:e.length+1},()=>Array(t.length+1).fill(0));for(let r=e.length-1;r>=0;r--)for(let i=t.length-1;i>=0;i--)n[r][i]=sc(e[r],t[i])?n[r+1][i+1]+1:Math.max(n[r+1][i],n[r][i+1]);let r=new Map;for(let i=0,a=0;i<e.length&&a<t.length;)sc(e[i],t[a])?(r.set(i,a),i++,a++):n[i+1][a]>=n[i][a+1]?i++:a++;return r}function lc(e,t,n){let r=oc(e,n),i=oc(t,n).filter(e=>e.word).map(e=>ac(e.text));if(!i.length)return r;let a=r.filter(e=>e.word),o=cc(a.map(e=>ac(e.text)),i);return a.forEach((e,t)=>{o.has(t)||(e.missed=!0)}),r}function uc(e,t,n){let r=oc(e,n),i=t.filter(e=>e.error!==`Insertion`),a=r.filter(e=>e.word),o=cc(a.map(e=>ac(e.text)),i.map(e=>ac(e.word)));return a.forEach((e,t)=>{let n=i[o.get(t)??-1];!n||n.error===`Omission`?e.missed=!0:(e.score=Math.round(n.score),(n.error===`Mispronunciation`||n.score<60)&&(e.wrong=!0))}),r}var dc=class extends Error{kind;constructor(e,t=e){super(t),this.kind=e}},fc=/^[a-z0-9]+$/,pc=3e4;function mc(e){let t=(e.pron_azure_key??``).trim(),n=(e.pron_azure_region??``).trim().toLowerCase();return e.pron_engine===`azure`&&t&&fc.test(n)?{key:t,region:n}:null}function hc(e){return fe(JSON.stringify({ReferenceText:e,GradingSystem:`HundredMark`,Granularity:`Word`,Dimension:`Comprehensive`,EnableMiscue:!0}))}var gc=e=>typeof e==`number`&&Number.isFinite(e)?e:0;function _c(e){let t=e,n=t?.NBest?.[0];if(!t||t.RecognitionStatus!==`Success`||!n)return null;let r={...n,...n.PronunciationAssessment};return{text:t.DisplayText??n.Display??``,score:gc(r.PronScore),accuracy:gc(r.AccuracyScore),fluency:gc(r.FluencyScore),completeness:gc(r.CompletenessScore),words:(n.Words??[]).map(e=>{let t={...e,...e.PronunciationAssessment};return{word:e.Word??``,score:gc(t.AccuracyScore),error:t.ErrorType??`None`}})}}function vc(e,t){let n=new Uint8Array(44+e.length*2),r=new DataView(n.buffer),i=(e,t)=>[...t].forEach((t,n)=>r.setUint8(e+n,t.charCodeAt(0)));return i(0,`RIFF`),r.setUint32(4,36+e.length*2,!0),i(8,`WAVE`),i(12,`fmt `),r.setUint32(16,16,!0),r.setUint16(20,1,!0),r.setUint16(22,1,!0),r.setUint32(24,t,!0),r.setUint32(28,t*2,!0),r.setUint16(32,2,!0),r.setUint16(34,16,!0),i(36,`data`),r.setUint32(40,e.length*2,!0),e.forEach((e,t)=>r.setInt16(44+t*2,Math.max(-1,Math.min(1,e))*32767,!0)),n}var yc=16e3;async function bc(e){let t=new AudioContext;try{let n=await t.decodeAudioData(await e.arrayBuffer()),r=new OfflineAudioContext(1,Math.max(1,Math.ceil(n.duration*yc)),yc),i=r.createBufferSource();return i.buffer=n,i.connect(r.destination),i.start(),vc((await r.startRendering()).getChannelData(0),yc)}finally{t.close()}}async function xc(e,t,n,r,i){let a=`https://${e.region}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=${encodeURIComponent(r)}&format=detailed`,o;try{o=await fetch(a,{method:`POST`,headers:{"Ocp-Apim-Subscription-Key":e.key,"Content-Type":`audio/wav; codecs=audio/pcm; samplerate=16000`,"Pronunciation-Assessment":hc(n),Accept:`application/json`},body:t,signal:De(i,pc)})}catch(e){throw i?.aborted?e:new dc(`network`,String(e.message??e))}if(o.status===401||o.status===403)throw new dc(`key`,`HTTP ${o.status}`);if(!o.ok){let e=(await o.text().catch(()=>``)).slice(0,160);throw new dc(o.status===400&&/language|locale/i.test(e)?`language`:`other`,`HTTP ${o.status} ${e}`.trim())}let s=_c(await o.json().catch(()=>null));if(!s)throw new dc(`nothing`);return s}var Sc=6e4;function Cc(e){let t=((e.voice_oa_url??``).trim()||`https://api.openai.com/v1`).replace(/\/+$/,``),n=(e.voice_oa_key??``).trim();if(n||t!==`https://api.openai.com/v1`)return{via:`direct`,url:t,key:n};if(g.stConnection)return ie[Te.OPENAI]?{via:`st`}:null;let r=(e.own_keys?.openai??``).trim();return r?{via:`direct`,url:t,key:r}:null}function wc(e){let t=Cc(e);return t&&{route:t,sttModel:(e.pron_stt_model??``).trim()||`gpt-4o-mini-transcribe`,adviceModel:(e.pron_advice_model??``).trim()||`gpt-audio`}}var Tc=e=>e.pron_engine===`openai`?wc(e):null,Ec=e=>e.pron_advice?wc(e):null;async function Dc(e,t,n){let r;try{r=await fetch(e,{...t,method:`POST`,signal:De(n,Sc)})}catch(e){throw n?.aborted?e:new dc(`network`,String(e.message??e))}if(r.status===401||r.status===403)throw new dc(`key`,`HTTP ${r.status}`);let i=await r.text().catch(()=>``),a=null;try{a=JSON.parse(i)}catch{}if(!r.ok){let e=a?.error?.message??i;throw r.status===400&&!i.trim()?new dc(`key`,`no key saved`):new dc(`other`,`HTTP ${r.status} ${e}`.trim().slice(0,200))}return a}var Oc=(e,t)=>({url:`${e.url}${t}`,headers:e.key?{Authorization:`Bearer ${e.key}`}:{}});function kc(e){return`speech.${/ogg/.test(e)?`ogg`:/mp4|aac|m4a/.test(e)?`m4a`:/wav/.test(e)?`wav`:/mpeg|mp3/.test(e)?`mp3`:`webm`}`}async function Ac(e,t,n,r){let a=new FormData,o;if(e.route.via===`st`){a.append(`avatar`,new Blob([await bc(t)],{type:`audio/wav`}),`speech.wav`),a.append(`model`,e.sttModel),n&&a.append(`language`,n.split(`-`)[0]);let s={...i()};delete s[`Content-Type`],o=await Dc(`/api/openai/transcribe-audio`,{headers:s,body:a},r)}else{a.append(`file`,t,kc(t.type)),a.append(`model`,e.sttModel),n&&a.append(`language`,n.split(`-`)[0]),a.append(`response_format`,`json`);let i=Oc(e.route,`/audio/transcriptions`);o=await Dc(i.url,{headers:i.headers,body:a},r)}let s=o?.text?.trim()??``;if(!s)throw new dc(`nothing`);return s}function jc(e,t,n,r,i){return{model:e,modalities:[`text`],max_tokens:400,messages:[{role:`system`,content:`You coach pronunciation for someone learning ${r}. You will hear them read a text aloud. Give at most three short, concrete tips about the sounds, stress or rhythm that differ from how a native speaker would say it, naming the word each tip is about. If it already sounds natural, say so in one sentence. Give no score or number. Write in ${i}, plainly, without headings.`},{role:`user`,content:[{type:`text`,text:`The text they read: "${n}"`},{type:`input_audio`,input_audio:{data:t,format:`wav`}}]}]}}async function Mc(e,t,n,r,a,o){let s=jc(e.adviceModel,fe(t),n,r,a),c;if(e.route.via===`st`){let t=s.messages.map(e=>({...e,content:Array.isArray(e.content)?e.content.map(e=>e.type===`input_audio`?{type:`audio_url`,audio_url:{url:`data:audio/wav;base64,${e.input_audio?.data}`}}:e):e.content}));c=await Dc(`/api/backends/chat-completions/generate`,{headers:i(),body:JSON.stringify({chat_completion_source:`openai`,model:e.adviceModel,messages:t,max_tokens:s.max_tokens,stream:!1})},o)}else{let t=Oc(e.route,`/chat/completions`);c=await Dc(t.url,{headers:{...t.headers,"Content-Type":`application/json`},body:JSON.stringify(s)},o)}let l=c?.choices?.[0]?.message?.content,u=(typeof l==`string`?l:(l??[]).map(e=>e.text??``).join(``)).trim();if(!u)throw new dc(`other`,`empty answer`);return u}var Nc=15e3,Pc=8e3,Fc=1200,Ic=.02,Lc=100;function Rc(){return typeof MediaRecorder<`u`&&!!navigator.mediaDevices?.getUserMedia}async function zc({maxMs:e=Nc,waitMs:t=Pc,silenceMs:n=Fc}={}){let r=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0}}),i,a,o;try{i=new MediaRecorder(r),a=new AudioContext,o=a.createAnalyser(),o.fftSize=2048,a.createMediaStreamSource(r).connect(o)}catch(e){throw r.getTracks().forEach(e=>e.stop()),a?.close(),e}let s=[];i.ondataavailable=e=>{e.data.size&&s.push(e.data)};let c=new Float32Array(o.fftSize),l=()=>(o.getFloatTimeDomainData(c),Math.sqrt(c.reduce((e,t)=>e+t*t,0)/c.length)),u=!1,d=0,f=!1,p=Date.now(),m=new Promise(e=>{i.onstop=()=>{clearInterval(ee),r.getTracks().forEach(e=>e.stop()),a?.close(),e(f||!u||!s.length?null:new Blob(s,{type:i.mimeType}))}}),h=()=>{i.state!==`inactive`&&i.stop()},ee=setInterval(()=>{let r=Date.now();l()>Ic?(u=!0,d=0):u&&(d||=r),(u&&d&&r-d>n||r-p>e||!u&&r-p>t)&&h()},Lc);try{i.start()}catch(e){throw clearInterval(ee),r.getTracks().forEach(e=>e.stop()),a?.close(),e}return{stop:()=>{u=!0,h()},abort:()=>{f=!0,h()},done:m,started:p}}var Bc=[[[`spanish`,`español`],`es-ES`],[[`italian`,`italiano`],`it-IT`],[[`french`,`français`],`fr-FR`],[[`german`,`deutsch`],`de-DE`],[[`japanese`,`日本語`],`ja-JP`],[[`chinese`,`中文`],`zh-CN`],[[`korean`,`한국어`],`ko-KR`],[[`portuguese`],`pt-PT`]];function Vc(e){let t=e.toLowerCase();return t.includes(`english`)?`en-US`:Bc.find(([e])=>e.some(e=>t.includes(e)))?.[1]??null}var Hc=e=>Vc(e)??`en-US`,Uc=.85,Wc=12,Gc=[[`ja`,8],[`zh`,8],[`ko`,10]],Kc=15;function qc(e,t=Uc){let n=Gc.find(([t])=>e.startsWith(t))?.[1]??Kc;return Math.floor(n*t*Wc)}var Jc=[(e,t)=>typeof Intl.Segmenter==`function`?[...new Intl.Segmenter(t,{granularity:`sentence`}).segment(e)].map(e=>e.segment):e.split(/(?<=[.!?。！？…]\s*)/),e=>e.split(/(?<=[,;:，、；：])/),e=>e.split(/(?<=\s)/)];function Yc(e,t,n,r=0){if(e.length<=n)return[e];let i=Jc[r];return i?i(e,t).flatMap(e=>Yc(e,t,n,r+1)):Array.from({length:Math.ceil(e.length/n)},(t,r)=>e.slice(r*n,(r+1)*n))}function Xc(e,t,n=qc(t)){let r=[];for(let i of Yc(e.trim(),t,n)){let e=r.length-1;e>=0&&r[e].length+i.length<=n?r[e]+=i:r.push(i)}return r.map(e=>e.trim()).filter(Boolean)}var Zc=[],Qc=null,$c=null,el=e=>{e.startsWith(`blob:`)&&URL.revokeObjectURL(e)},tl=e=>1e4+e.length*250;function nl(){Qc&&(Qc.pause(),el(Qc.src)),Qc=null,`speechSynthesis`in window&&window.speechSynthesis.cancel(),$c?.(),$c=null}function rl(){$c?.();let e=()=>{},t=new Promise(t=>{e=()=>{$c===e&&($c=null),t()}});return $c=e,{done:e,ended:t}}function il(e,t){return new Promise(n=>{let r=rl(),i=!1;r.ended.then(()=>{i||n()});let a=Qc=new Audio(e);a.onended=()=>{el(e),r.done()},a.play().catch(async o=>{el(e);try{Qc===a&&(Qc=null,i=!0,await t(o))}finally{r.done(),n()}})})}function al(e,t,n=``){if(!(`speechSynthesis`in window))return x(h(`tts.noSupport`),`err`,2500),Promise.resolve();window.speechSynthesis.cancel();let r=rl(),i=n?window.speechSynthesis.getVoices?.().find(e=>e.name===n):void 0,a=Xc(e,t).map(e=>Object.assign(new SpeechSynthesisUtterance(e),{lang:i?.lang??t,rate:Uc},i&&{voice:i}));if(Zc=a,!a.length)return r.done(),r.ended;let o=a[a.length-1];o.onend=o.onerror=()=>{Zc===a&&(Zc=[]),r.done()};let s=setTimeout(r.done,tl(e));return a.forEach(e=>window.speechSynthesis.speak(e)),r.ended.finally(()=>clearTimeout(s))}function ol(e){if(!(`speechSynthesis`in window))return[];let t=e.slice(0,2).toLowerCase();return(window.speechSynthesis.getVoices?.()??[]).filter(e=>e.lang.toLowerCase().startsWith(t)).map(e=>e.name)}function sl(e){return e.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``).normalize(`NFC`).replace(/[^\p{L}\p{N}\s'-]/gu,``).replace(/\s+/g,` `).trim()}function cl(e,t){let n=sl(e);return n?Pe(n,sl(t)):0}var ll=[{min:85,grade:`excellent`,label:`tts.perfect`},{min:65,grade:`good`,label:`tts.great`},{min:40,grade:`fair`,label:`tts.keep`},{min:0,grade:`poor`,label:`tts.tryAgain`}];function ul(e){return ll.find(t=>e>=t.min)??ll[ll.length-1]}var dl=1e4;function fl(){return!!(window.SpeechRecognition||window.webkitSpeechRecognition)}var pl=null;function ml(e){pl=e}function hl(){return pl}function gl(){pl?.abort(),pl=null}function _l(e,t,n=``){e.className=t===`idle`?`pg-pronun-result`:`pg-pronun-result pg-pronun-${t}`,e.textContent=n}function vl(e,t,n,r,i){bl(e,t,n,lc(r,n,i))}var yl=(e,t,n)=>j`<span class="pg-pronun-${t}" role="button" tabindex="0" data-action="say-word" data-word="${e.text}" title="${n}">${e.text}</span>`;function bl(e,t,n,r,i){let{grade:a,label:o}=ul(t),s=r.filter(e=>e.word).length>1;e.className=`pg-pronun-result pg-pronun-${a}`,M(e,j`
        <span class="pg-pronun-score">${t}</span>
        <span class="pg-pronun-label">${h(o)}</span>
        ${s?j`<span class="pg-pronun-words" title="${n}">${r.map(e=>e.missed?yl(e,`missed`,h(`speak.missed`)):e.wrong?yl(e,`wrong`,h(`pron.wrong`,{n:e.score??0})):e.text)}</span>`:j`<span class="pg-pronun-heard">"${n}"</span>`}
        ${i&&j`<span class="pg-pronun-sub">${h(`pron.sub`,{a:Math.round(i.accuracy),f:Math.round(i.fluency),c:Math.round(i.completeness)})}</span>`}`)}function xl(e,t){e.dataset.active=String(t),e.textContent=t?`🔴`:`🎤`,e.title=h(t?`tts.listening`:`fl.mic`)}function Sl(e){return Array.from(e.results[0]??[]).reduce((e,t)=>!e||t.confidence>e.confidence?t:e,void 0)?.transcript??``}function Cl(e,t,n,r,i){let a=window.SpeechRecognition||window.webkitSpeechRecognition;if(!a)return _l(r,`error`,h(`tts.noRecog`)),null;let o=Object.assign(new a,{lang:Hc(t),continuous:!1,interimResults:!1,maxAlternatives:3}),s=!1,c=()=>!s&&(s=!0),l=()=>document.contains(r);xl(n,!0),_l(r,`listening`,h(`tts.listening`));let u=e=>{e.stopPropagation(),o.abort()};n.onclick=u;let d=e=>{_l(r,`error`,e),i?.()};o.onresult=t=>{if(!l()||!c())return;let n=Sl(t);vl(r,cl(e,n),n.trim(),e,o.lang),i?.()},o.onerror=e=>{l()&&c()&&(e.error===`aborted`||e.error===`no-speech`?(xl(n,!1),_l(r,`idle`)):d(e.error===`not-allowed`?h(`tts.noMic`):h(`tts.recogError`,{err:e.error})))};let f=setTimeout(()=>{c()&&(o.abort(),l()&&(d(h(`tts.noRecog`)),xl(n,!1)))},dl);return o.onend=()=>{clearTimeout(f),n.onclick===u&&(n.onclick=null),l()&&(c()&&d(h(`tts.noSpeech`)),xl(n,!1))},o.start(),o}var wl=Rc,Tl={key:`pron.errKey`,network:`pron.errNetwork`,language:`pron.errLang`,nothing:`tts.noSpeech`,other:`pron.errOther`},El=e=>e instanceof dc?h(Tl[e.kind],{msg:e.message}):e instanceof DOMException&&(e.name===`NotAllowedError`||e.name===`NotFoundError`)?h(`tts.noMic`):h(`pron.errOther`,{msg:String(e.message??e)}),Dl=e=>{e instanceof dc&&e.kind===`nothing`||e instanceof DOMException&&e.name===`NotAllowedError`||c(`voice`,`pronunciation check: ${String(e.message??e)}`)};function Ol(e,t,n,r,i){let a=document.createElement(`span`);a.className=`pg-pronun-advice`;let o=Object.assign(document.createElement(`button`),{type:`button`,className:`pg-pronun-advice-btn`,textContent:`🗣 ${h(`pron.advice`)}`});a.append(o),e.append(a),o.addEventListener(`click`,async e=>{e.stopPropagation(),o.remove(),a.textContent=h(`pron.adviceWait`);try{let e=await Mc(r.cfg,await bc(t),n,r.studyLang,r.nativeLang,i);a.textContent=e}catch(e){if(i.aborted)return;Dl(e),a.textContent=El(e)}})}function kl(e,t,n,r,i,a,o){let s=Vc(t);if(!s&&n.kind===`azure`)return _l(i,`error`,h(`pron.errLang`)),null;let c=()=>document.contains(i),l=new AbortController,u=!1,d=null;xl(r,!0),_l(i,`listening`,h(`tts.listening`));let f=e=>{e.stopPropagation(),d?.stop()};r.onclick=f;let p=()=>{r.onclick===f&&(r.onclick=null),c()&&xl(r,!1)};return(async()=>{try{if(d=await zc(),u){d.abort();return}let r=await d.done;if(p(),u)return;if(!r){c()&&_l(i,`idle`);return}if(_l(i,`listening`,h(`pron.assessing`)),n.kind===`azure`){let t=await xc(n.cfg,await bc(r),e,s??``,l.signal);if(!c()||u)return;bl(i,Math.round(t.score),t.text,uc(e,t.words,s??``),t)}else{let a=await Ac(n.cfg,r,s??``,l.signal);if(!c()||u)return;vl(i,cl(e,a),a,e,s??Hc(t))}o&&Ol(i,r,e,o,l.signal),a?.()}catch(e){if(u||(p(),!c()))return;Dl(e),_l(i,`error`,El(e)),a?.()}})(),{abort:()=>{u=!0,d?.abort(),l.abort(),p(),c()&&_l(i,`idle`)}}}var Al=[`host`,`elevenlabs`,`google`,`openai`,`fish`],jl=6e4,H={elevenlabsModel:`eleven_multilingual_v2`,openaiUrl:`https://api.openai.com/v1`,openaiModel:`gpt-4o-mini-tts`,openaiVoice:`alloy`,fishModel:`s2-pro`},Ml=[`0.75`,`0.9`,`1`];function Nl(e){let t=e.voice_provider??`browser`,n=Number(Ml.includes(e.voice_speed??``)?e.voice_speed:`0.9`),r=(r,i,a,o)=>({provider:t,key:(r??``).trim(),voice:(i??``).trim(),model:(a??``).trim(),baseUrl:(o??``).trim(),speed:n,proxy:!!e.voice_proxy});switch(t){case`elevenlabs`:return r(e.voice_el_key,e.voice_el_voice,e.voice_el_model);case`google`:return r(e.voice_gg_key,e.voice_gg_voice);case`openai`:{let t=Cc(e);return t?.via===`st`?{...r(``,e.voice_oa_voice,e.voice_oa_model),viaSt:!0}:t?r(t.key,e.voice_oa_voice,e.voice_oa_model,t.url===`https://api.openai.com/v1`?``:t.url):r(``,e.voice_oa_voice,e.voice_oa_model,e.voice_oa_url)}case`fish`:return r(e.voice_fish_key,e.voice_fish_voice,e.voice_fish_model);case`host`:return r(``,e.voice_host_voice);default:return r(``,e.voice_st_voice)}}function Pl(e){if(!Al.includes(e.provider)||e.provider===`host`||e.viaSt)return``;let t=e.provider===`openai`&&e.baseUrl&&!e.baseUrl.startsWith(H.openaiUrl);return!e.key&&!t?`key`:e.provider===`elevenlabs`&&!e.voice?`voice`:``}var Fl=(e,t,n)=>Math.min(n,Math.max(t,e)),Il=e=>{let t=e.split(`-`)[0].toLowerCase();return t===`cmn`||t===`yue`?`zh`:t},Ll=e=>/^[a-z]{2,3}-[A-Z]{2}/.exec(e)?.[0];function Rl(e,t,n){let r=e=>JSON.stringify(e);switch(e.provider){case`elevenlabs`:return{url:`https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(e.voice)}?output_format=mp3_44100_128`,headers:{"xi-api-key":e.key,"Content-Type":`application/json`,Accept:`audio/mpeg`},body:r({text:t,model_id:e.model||H.elevenlabsModel,voice_settings:{stability:.5,similarity_boost:.75,speed:Fl(e.speed,.7,1.2)}}),json:!1};case`google`:{let i=e.voice&&(!n||Il(Ll(e.voice)??``)===Il(n))?e.voice:``;return{url:`https://texttospeech.googleapis.com/v1/text:synthesize`,headers:{"X-Goog-Api-Key":e.key,"Content-Type":`application/json`},body:r({input:{text:t},voice:{languageCode:i&&Ll(i)||n||`en-US`,...i&&{name:i}},audioConfig:{audioEncoding:`MP3`,speakingRate:Fl(e.speed,.25,4)}}),json:!0}}case`openai`:return{url:`${(e.baseUrl||H.openaiUrl).replace(/\/+$/,``)}/audio/speech`,headers:{"Content-Type":`application/json`,...e.key&&{Authorization:`Bearer ${e.key}`}},body:r({model:e.model||H.openaiModel,input:t,voice:e.voice||H.openaiVoice,speed:Fl(e.speed,.25,4),response_format:`mp3`}),json:!1};case`fish`:return{url:`https://api.fish.audio/v1/tts`,headers:{Authorization:`Bearer ${e.key}`,"Content-Type":`application/json`,model:e.model||H.fishModel},body:r({text:t,...e.voice&&{reference_id:e.voice},format:`mp3`,mp3_bitrate:128,prosody:{speed:Fl(e.speed,.5,2),volume:0}}),json:!1};default:throw Error(`not a direct voice service: ${e.provider}`)}}function zl(e,t,n){return[e.provider,e.voice,e.model,e.baseUrl,e.speed,n,t].join(``)}var Bl=class extends Error{network;constructor(e,t=!1){super(e),this.network=t}};async function Vl(e){let t=await e.text().catch(()=>``);try{let e=JSON.parse(t),n=e=>typeof e==`string`?e:e?.message;return(n(e.error)??n(e.detail)??e.message??t).slice(0,200)}catch{return t.slice(0,200)}}var Hl=e=>Uint8Array.from(atob(e),e=>e.charCodeAt(0));async function Ul(e,t,n,r){let i,a=De(n.signal,jl);try{i=await fetch(e.proxy?`/proxy/${t}`:t,{...n,signal:a,headers:e.proxy?{...r,...n.headers}:n.headers})}catch(e){throw n.signal?.aborted?e:a.aborted?new Bl(`no answer within ${jl/1e3} s`):new Bl(String(e.message??e),!0)}if(!i.ok)throw new Bl(`${i.status} ${await Vl(i)}`.trim());return i}var Wl=/json|html|text\//i,Gl=(e,t,n)=>[...n].every((n,r)=>e[t+r]===n.charCodeAt(0));function Kl(e){return Gl(e,0,`ID3`)?`mp3`:Gl(e,0,`RIFF`)&&Gl(e,8,`WAVE`)?`wav`:Gl(e,0,`OggS`)?Gl(e,28,`OpusHead`)?`opus`:`ogg`:Gl(e,0,`fLaC`)?`flac`:Gl(e,4,`ftyp`)?`m4a`:e[0]===26&&e[1]===69&&e[2]===223&&e[3]===163?`webm`:e[0]===255&&(e[1]&224)==224?e[1]&6?`mp3`:`aac`:null}async function ql(e,t,n,r={},i){if(e.provider===`host`){if(!g.ai)throw new Bl(`no voice service here`);let n=await g.ai.speak(t,e.voice,De(i,jl));if(!Kl(n))throw new Bl(`not a sound`);return n}if(e.viaSt){let n=await Ul({...e,proxy:!1},`/api/openai/generate-voice`,{method:`POST`,signal:i,headers:{...r,"Content-Type":`application/json`},body:JSON.stringify({text:t,voice:e.voice||H.openaiVoice,model:e.model||H.openaiModel,speed:Fl(e.speed,.25,4)})},r),a=new Uint8Array(await n.arrayBuffer());if(!Kl(a))throw new Bl(`not a sound`);return a}let a=Rl(e,t,n),o=await Ul(e,a.url,{method:`POST`,headers:a.headers,body:a.body,signal:i},r);if(a.json){let e=await o.json().catch(()=>null);if(!e?.audioContent)throw new Bl(`no audio in the answer`);return Hl(e.audioContent)}let s=o.headers.get(`content-type`)??``;if(Wl.test(s))throw new Bl(`not a sound (${s.split(`;`)[0]}): ${(await Vl(o)).slice(0,120)}`);let c=new Uint8Array(await o.arrayBuffer());if(!c.length)throw new Bl(`empty answer`);if(!/^audio\//i.test(s)&&!Kl(c))throw new Bl(`not a sound: ${new TextDecoder().decode(c.slice(0,120))}`);return c}async function Jl(e,t,n={}){if(e.provider===`host`)return g.ai?.voices()??[];let r=async(t,r)=>(await Ul(e,t,{headers:r},n)).json();return e.provider===`elevenlabs`?((await r(`https://api.elevenlabs.io/v1/voices`,{"xi-api-key":e.key})).voices??[]).map(e=>({id:e.voice_id,label:e.name})):e.provider===`google`?((await r(`https://texttospeech.googleapis.com/v1/voices${t?`?languageCode=${encodeURIComponent(t)}`:``}`,{"X-Goog-Api-Key":e.key})).voices??[]).filter(e=>!t||!e.languageCodes||e.languageCodes.some(e=>Il(e)===Il(t))).map(e=>({id:e.name,label:`${e.name}${e.ssmlGender?` (${e.ssmlGender.toLowerCase()})`:``}`})):[]}function Yl(){let e=Nl(C());return Al.includes(e.provider)?Pl(e)||(R()===`file`?``:`storage`):`service`}var Xl=()=>![`service`,`storage`].includes(Yl()),Zl=new Map,Ql=60,$l=new Map;async function eu(e,t,{signal:n,fresh:r=!1,cache:a=!0,voice:o}={}){let s={...Nl(C()),...o&&{voice:o}},c=Vc(t)??``,l=zl(s,`${t}\u0002${e}`,c),u=r?void 0:Zl.get(l);if(u)return u;let d=!n&&!r,f=d?$l.get(l):void 0;if(f)return f;let p=ql(s,e,c,i(),n);d&&$l.set(l,p);try{let e=await p;return a&&(Zl.delete(l),Zl.set(l,e),Zl.size>Ql&&Zl.delete(Zl.keys().next().value)),e}finally{$l.get(l)===p&&$l.delete(l)}}var tu=e=>br(z().find(t=>t.word===e.word),e);async function nu(e){let t=On(e,`voice.${Kl(e)??`mp3`}`);return(await Mn([t])).has(t)?t:(Vn([t]),await ke(t,e)===`ok`?t:null)}function ru(e,t,n=!1){Ln([t]);let r=z(),i=r.findIndex(t=>t.word===e.word);return i<0||!br(r[i],e)?!1:(r[i]=hr(r[i],e.field,t,!0),B(r,n),!0)}async function iu(e,t){if(R()!==`file`||!tu(e))return`skipped`;let n=await nu(t);return n?ru(e,n)?`stored`:`skipped`:`failed`}async function au(e){return iu(e,await eu(e.text,e.lang,{fresh:!0,cache:!1}))}var ou=3,su=null,cu=()=>su!==null,lu=()=>su?.abort();async function uu(e,t,n){if(su)throw Error(`a sound run is already active`);let r=su=new AbortController,i={made:0,failed:0,stopped:!1,gaveUp:!1},a=0,o=!1,s=(e,t=!1)=>{i.failed++,i.error=e,o=t||++a>=ou};try{for(let[c,l]of e.entries()){if(n(c,e.length),r.signal.aborted)break;if(o){i.gaveUp=!0;break}if(R()!==`file`){s(`storage`,!0),i.gaveUp=!0;break}if(tu(l))try{let e=await nu(await eu(l.text,l.lang,{signal:r.signal,fresh:t,cache:!1}));if(!e){s(`upload`);continue}ru(l,e,!0)&&i.made++,a=0}catch(e){if(r.signal.aborted)break;s(e.message,e instanceof Bl&&e.network)}}}finally{i.stopped=r.signal.aborted,su=null,i.made&&B(z())}return i}var du={service:`snd.needService`,key:`snd.needKey`,voice:`snd.needVoice`,storage:`snd.needStorage`};function fu(){let e=Yl();return e&&x(h(du[e]),`warn`,4e3),!e}async function pu(e,t){let n=t.length-e.length;if(!e.length&&!n)return x(h(`snd.none`),`info`,3e3),null;let i=Cr(e),a=[e.length?h(`snd.askMissing`,{words:i.audio,examples:i.example_audio,chars:Sr(e).toLocaleString()}):h(`snd.allHave`),n>0?h(`snd.askRemake`,{n}):``,h(`snd.cost`)].filter(Boolean).join(`

`),o=[{value:`no`,label:h(`confirmNo`)}];n>0&&o.push({value:`remake`,label:h(`snd.remakeAll`),primary:!e.length}),e.length&&o.push({value:`missing`,label:h(`snd.makeMissing`),primary:!0});let s=await r(a,o);return s===`no`?null:s}var mu={upload:()=>h(`snd.uploadFailed`),storage:()=>h(`snd.needStorage`)};function hu(e,t){let n=e.error&&(mu[e.error]?.()??e.error);e.gaveUp?x(h(`snd.failed`,{done:e.made,total:t,msg:n??``}),`err`,6e3):e.stopped?x(h(`snd.stopped`,{done:e.made,total:t}),`warn`,3e3):e.failed?x(h(`snd.doneSome`,{n:e.made,failed:e.failed,msg:n??``}),`warn`,6e3):x(h(`snd.done`,{n:e.made}),`ok`,3e3)}var gu=(e,t)=>xr(z().filter(t=>e.has(t.word)),t,b());async function _u({bar:e,words:t,onDone:n}){if(cu()){x(h(`snd.running`),`info`,3e3);return}if(!fu())return;let r=new Set(t),i=await pu(gu(r,`missing`),gu(r,`remake`));if(!i||cu())return;let a=gu(r,i),o=nc(e,h(`snd.progress`,{done:0,total:a.length}),lu);try{hu(await uu(a,i===`remake`,(e,t)=>o.update(h(`snd.progress`,{done:e,total:t}),e,t)),a.length)}finally{o.close(),n?.()}}var U=[.212,1.2931,2.3065,8.2956,6.4133,.8334,3.0194,.001,1.8722,.1666,.796,1.4835,.0614,.2629,1.6483,.6014,1.8729,.5425,.0912,.0658,.1542],vu=.9,yu=36500,bu=.001,xu=864e5,Su=4,Cu=e=>Math.round(e*1e8)/1e8,wu=(e,t,n)=>Math.min(Math.max(e,t),n),Tu=-U[20],Eu=Cu(Math.exp(Math.log(.9)/Tu)-1),Du=Cu((vu**(1/Tu)-1)/Eu),Ou=(e,t)=>Cu((1+Eu*e/t)**+Tu),ku=e=>Math.max(U[e-1],.1),Au=e=>Cu(U[4]-Math.exp((e-1)*U[5])+1);function ju(e,t){let n=e+Cu(-U[6]*(t-3)*(10-e)/9);return wu(Cu(U[7]*Au(4)+(1-U[7])*n),1,10)}function Mu(e,t,n,r){let i=r===2?U[15]:1,a=r===4?U[16]:1;return Cu(wu(t*(1+Math.exp(U[8])*(11-e)*t**+-U[9]*(Math.exp((1-n)*U[10])-1)*i*a),bu,yu))}function Nu(e,t,n){return Cu(wu(U[11]*e**+-U[12]*((t+1)**+U[13]-1)*Math.exp((1-n)*U[14]),bu,yu))}function Pu(e,t,n){if(!e)return{difficulty:wu(Au(n),1,10),stability:ku(n)};let r=Ou(t,e.stability),i=n===1?wu(Cu(e.stability),bu,Nu(e.difficulty,e.stability,r)):Mu(e.difficulty,e.stability,r,n);return{difficulty:ju(e.difficulty,n),stability:i}}function Fu(e,t){let n=1;for(let[t,r,i]of[[2.5,7,.15],[7,20,.1],[20,1/0,.05]])n+=i*Math.max(Math.min(e,r)-t,0);e=Math.min(e,yu);let r=Math.max(2,Math.round(e-n)),i=Math.min(Math.round(e+n),yu);return e>t&&(r=Math.max(r,t+1)),{min:Math.min(r,i),max:i}}function Iu(e,t,n){let r=Math.min(Math.max(1,Math.round(e*Du)),yu);if(n===null||r<2.5)return r;let{min:i,max:a}=Fu(r,t);return Math.floor(n*(a-i+1)+i)}function Lu(e,t,n){let r=e?t:0,i=[1,2,3,4].map(t=>Pu(e,r,t)),[a,o,s,c]=i.map(e=>Iu(e.stability,r,n)),l=Math.min(a,o),u=Math.max(o,l+1),d=Math.max(s,u+1);return[l,u,d,Math.max(c,d+1)].map((e,t)=>({memory:i[t],days:e}))}function Ru(e){let t=new Date(e);return t.getHours()<Su&&t.setDate(t.getDate()-1),Math.round(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())/xu)}function zu(e){let t=new Date(e*xu);return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),Su).getTime()}var Bu=e=>new Date(e*xu).toISOString().slice(0,10),Vu=e=>typeof e==`number`&&Number.isFinite(e);function Hu(e,t){let n=Math.max(t,bu)*Eu/(.9**(1/Tu)-1),r=11-(e-1)/(Math.exp(U[8])*n**+-U[9]*Math.expm1(.1*U[10]));return{stability:wu(n,bu,yu),difficulty:wu(r,1,10)}}function Uu(e){return Vu(e.srs_stability)&&Vu(e.srs_difficulty)?{stability:wu(e.srs_stability,bu,yu),difficulty:wu(e.srs_difficulty,1,10)}:Vu(e.srs_reviewed_at)?Hu(Vu(e.srs_ease)?e.srs_ease:2.5,Vu(e.srs_interval)?e.srs_interval:1):null}var Wu=e=>Uu(e)===null,W=e=>e.level!==`grammar`&&e.level!==`sentence`,Gu=e=>e.known===!0||(Uu(e)?.stability??0)>=21,Ku=e=>Wu(e)&&e.known!==!0,qu=e=>Gu(e)?`known`:Wu(e)?`new`:`learning`,Ju=e=>(e.srs_lapses??0)>=4&&!Gu(e),Yu=(e,t)=>Vu(e)?Math.max(0,Ru(t)-Ru(e)):0;function Xu(e){return Mt(`${e.word}|${e.srs_reviewed_at??0}`)/2**32}var Zu=(e,t)=>Lu(Uu(e),Yu(e.srs_reviewed_at,t),Xu(e)),Qu=(e,t=Date.now())=>Zu(e,t).map(e=>e.days);function $u(e,t,n=Date.now()){let r=Wu(e),i=Zu(e,n)[t];return t===0&&!r&&Yu(e.srs_reviewed_at,n)>0&&(e.srs_lapses=(e.srs_lapses??0)+1),e.srs_stability=i.memory.stability,e.srs_difficulty=i.memory.difficulty,e.srs_due=zu(Ru(n)+i.days),e.srs_reviewed_at=n,delete e.srs_interval,delete e.srs_ease,delete e.srs_streak,{requeue:t===0,wasNew:r}}var ed=e=>!Wu(e)&&e.known!==!0,td=(e,t)=>ed(e)&&(e.srs_due??0)<=t,nd=(e,t=Date.now())=>e.filter(e=>td(e,t)).length;function rd(e,t,n=Date.now()){let r=e.filter(e=>td(e,n)).sort((e,t)=>(e.srs_due??0)-(t.srs_due??0)),i=e.filter(Ku).sort((e,t)=>(e.dateAdded??``).localeCompare(t.dateAdded??``));return[...r,...i.slice(0,Math.max(0,t))]}function id(e,t,n=Date.now()){let r=Ru(n),i=Array(t).fill(0);for(let n of e){if(!ed(n))continue;let e=Ru(n.srs_due??0)-r;e>=1&&e<=t&&i[e-1]++}return i}function ad(e,t=Date.now()){let n=id(e,7,t);return{tomorrow:n[0],week:n.reduce((e,t)=>e+t,0)}}var od=()=>({level:`all`,setId:`all`,pos:``,query:``,missed:!1,noSound:!1,status:`all`});function sd(e){return e.level!==`all`||e.setId!==`all`||!!e.pos||!!e.query.trim()||e.missed||e.noSound||e.status!==`all`}function cd(e,t){return t===`all`?!0:t===`grammar`?!e.level||e.level===`grammar`:e.level===t}function ld(e,t){let n=e=>!!e&&e.toLowerCase().includes(t);return n(e.word)||n(e.base_form)||n(e.meaning)||n(e.notes)||(e.collocations??[]).some(n)}var ud=(e,t,n)=>n&&t.status!==`known`&&!t.query.trim()&&W(e)&&qu(e)===`known`;function dd(e,t,n=!1){let r=t.query.trim().toLowerCase();return e.filter(e=>!ud(e,t,n)&&cd(e,t.level)&&(!t.pos||e.pos===t.pos)&&(!t.missed||Ju(e))&&(!t.noSound||_r(e))&&(t.status===`all`||W(e)&&qu(e)===t.status)&&(t.setId===`all`||(e.setIds??[]).includes(t.setId))&&(!r||ld(e,r))).reverse()}function fd(e,t){let n=t.trim();if(!n||!e)return null;let r=new RegExp(n.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),`iu`).exec(e);return r?[e.slice(0,r.index),r[0],e.slice(r.index+r[0].length)]:null}var pd=e=>{let t=C().voice_cast?.[e];return t&&typeof t==`object`?t:{}};function md(e,t){if(!t)return``;let n=pd(e)[t];return typeof n==`string`?n.trim():``}function hd(e,t,n){let r=C(),i={...pd(e)};n.trim()?i[t]=n.trim():delete i[t],r.voice_cast={...r.voice_cast??{},[e]:i},me()}var gd=e=>Object.keys(pd(e));function _d(){let e=_();return e.groupId?(e.groups?.find(t=>t.id===e.groupId)?.members??[]).map(t=>e.characters?.find(e=>e.avatar===t)?.name).filter(e=>!!e):e.name2?[e.name2]:[]}var vd=`disabled`;function yd(){let e=Xe.tts,t=typeof e?.currentProvider==`string`?e.currentProvider:``,n=e?.[t]?.voiceMap,r=typeof n==`string`?n.split(`,`).map(e=>e.split(`:`).map(e=>e.trim())):n&&typeof n==`object`?Object.entries(n):[];return new Set(r.filter(([e,t])=>e&&typeof t==`string`&&t&&t!==vd).map(([e])=>e))}function bd(e,t){return e&&yd().has(e)?e:t}var xd=0,Sd=-1;function Cd(e){let t=e instanceof Bl&&e.network&&!C().voice_proxy;x(h(t?g.stVoice?`tts.blocked`:`tts.blockedDirect`:`tts.failed`,{msg:e.message}),`err`,6e3)}function wd(e,t){let n=qe.commands?.speak;if(!n||Xe.tts?.enabled!==!0)return!1;try{let r=e.map(e=>`"${e.replace(/["“”]/g,``)}"`).join(` `);return Promise.resolve(n.callback(t?{voice:t}:{},r)).catch(()=>{}),!0}catch{return!1}}async function Td(e,t,n,r,i){let a=Hc(t),o=Nl(C()),s=md(o.provider,i);if(o.provider===`st`){if(wd([e],bd(i,o.voice)))return;Sd!==r&&x(h(`tts.stOff`),`warn`,3500),Sd=r}if(!Al.includes(o.provider))return al(e,a,o.provider===`browser`?s:``);let c=Pl(s?{...o,voice:s}:o);if(c)return x(h(c===`key`?`tts.needKey`:`tts.needVoice`),`warn`,3500),al(e,a);let l;try{l=await eu(e,t,{voice:s})}catch(t){return xd===r?(Cd(t),al(e,a)):void 0}if(n&&C().voice_save!==!1&&iu(n,l),xd===r)return il(URL.createObjectURL(new Blob([l],{type:`audio/mpeg`})),()=>{if(xd===r)return al(e,a)})}function Ed(e,t,n){let r=n&&z().find(e=>e.word===n.word),i=r&&n?yr(r,n.field,t):null;return i&&i.text===e.trim()?i:null}function Dd(e,t,{audio:n,keep:r,speaker:i},a){let o=Ed(e,t,r),s=o?.lang??t,c=o?o.current:n;return c?il(Fe(c),async()=>{let t=!!o&&await jn(c);xd===a&&await Td(e,s,t?o:null,a,i)}):Td(e,s,o,a,i)}function Od(e,t,n={}){return nl(),Dd(e,t,n,++xd)}function kd(){xd++,nl()}async function Ad(e,t,n=()=>{}){nl();let r=++xd,i=Nl(C());try{if(i.provider===`st`&&e.length&&wd(e.map(e=>e.text),bd(e[0].speaker,i.voice)))return;for(let a=0;a<e.length&&xd===r;a++){n(a);let o=Dd(e[a].text,t,{speaker:e[a].speaker},r),s=e[a+1];if(s&&Al.includes(i.provider)){let e=md(i.provider,s.speaker);Pl(e?{...i,voice:e}:i)||eu(s.text,t,{voice:e}).catch(()=>{})}await o}}finally{n(-1)}}var jd=e=>Jl(Nl(C()),Vc(e)??``,i()),Md={it:`Ciao! Come stai oggi?`,es:`Hola, ¿qué tal estás hoy?`,fr:`Bonjour, comment ça va aujourd’hui ?`,de:`Hallo, wie geht es dir heute?`,ja:`こんにちは、今日は元気ですか？`,zh:`你好，今天过得怎么样？`,ko:`안녕하세요, 오늘 기분이 어때요?`,pt:`Olá, como você está hoje?`,en:`Hello, how are you today?`};function Nd(e){Od(Md[Hc(e).slice(0,2)]??Md.en,e)}var Pd=({saved:e,label:t,cls:n=``,action:r})=>j`
    <button class="pg-speak-btn ${n} ${e&&`pg-speak-saved`}" ${r&&j`data-action="${r}"`}
            title="${e?h(`snd.listenSaved`):t}" aria-label="${e?`${t} (${h(`snd.listenSaved`)})`:t}">🔊</button>`,Fd=`pg-line-play`,Id=`pg-playing`,Ld=null,Rd=e=>!!e&&e===Ld;function zd(e){Ld?.classList.remove(Id,`fa-stop`),Ld?.classList.add(`fa-play`),Ld=e,e?.classList.remove(`fa-play`),e?.classList.add(Id,`fa-stop`)}function Bd(e,t){e.classList.contains(Id)?kd():(zd(e),t().finally(()=>{Ld===e&&zd(null)}))}function Vd(e,t){let n=document.createElement(`span`);return n.className=`${Fd} fa-solid fa-play`,n.setAttribute(`role`,`button`),n.tabIndex=0,n.title=e,n.setAttribute(`aria-label`,e),n.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),t(n)}),n.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n.click())}),n}var Hd=(e,t,n)=>j`
    <span class="${Fd} fa-solid fa-play" role="button" tabindex="0" data-action="${n}" title="${t}" aria-label="${e}"></span>`;function Ud(e){for(let t of[e.reading,e.ipa]){let e=t?.trim();if(e&&Lt(e))return e}}function Wd(e){if(le(b())&&C().furigana_enabled!==!1)return Ud(e)}function Gd(e,t){let n=t?Bt(e,t,{strict:!0}):[];if(!n.length)return j`${e}`;let r=[],i=0;for(let[t,a,o]of n)r.push(j`${e.slice(i,t)}<ruby class="pg-ruby">${e.slice(t,a)}<rt>${o}</rt></ruby>`),i=a;return j`${r}${e.slice(i)}`}var Kd=150;function qd(e){return!e.hidden}function Jd({editor:e,preview:t}){e.hidden=!0,e.replaceChildren(),t&&(t.hidden=!t.textContent)}function Yd(e,t){let{editor:n,preview:r,button:i}=e,a=z().find(e=>e.word===t)?.notes??``;r&&(r.hidden=!0),n.hidden=!1,M(n,j`
        <textarea class="pg-wb-note-textarea" placeholder="${h(`wb.notePh`)}" rows="3">${a}</textarea>
        <div class="pg-wb-note-actions">
            <span class="pg-wb-note-hint">${h(`wb.noteHint`)}</span>
            <button class="pg-wb-note-cancel pg-wb-row-btn">${h(`wb.noteCancel`)}</button>
            <button class="pg-wb-note-save pg-wb-row-btn pg-wb-note-save-btn">${h(`wb.noteSave`)}</button>
        </div>`);let o=n.querySelector(`textarea`);if(!o)return;o.focus(),o.setSelectionRange(o.value.length,o.value.length);let s=!1,c=()=>{if(s)return;s=!0;let n=o.value.trim(),a=z(),c=a.find(e=>e.word===t);c&&(c.notes=n||void 0,B(a)),r&&(r.textContent=n),i?.classList.toggle(`pg-wb-note-btn-has`,!!n),Jd(e),e.onSaved?.(n)},l=()=>{s||(s=!0,Jd(e))};n.querySelector(`.pg-wb-note-save`)?.addEventListener(`click`,e=>{e.stopPropagation(),c()}),n.querySelector(`.pg-wb-note-cancel`)?.addEventListener(`click`,e=>{e.stopPropagation(),l()}),o.addEventListener(`keydown`,e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),l()),e.key===`Enter`&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),c())}),o.addEventListener(`blur`,()=>setTimeout(c,Kd))}function Xd(e,t){qd(e.editor)?Jd(e):Yd(e,t)}var Zd=8,Qd=null,$d=!1;function ef(){Qd?.el.remove(),Qd=null}function tf(e,t,n){if(Qd?.anchor===e){ef();return}ef();let r=Object.assign(document.createElement(`div`),{className:`pg-wb-popover`});M(r,j`
        <div class="pg-wb-popover-word">${t}</div>
        <div class="pg-wb-popover-meaning">${n}</div>`),document.body.appendChild(r),Qd={el:r,anchor:e};let i=e.getBoundingClientRect(),a=r.offsetWidth||200,o=r.offsetHeight||60,s=Math.min(i.left,innerWidth-a-Zd),c=i.bottom+4;c+o>innerHeight-Zd&&(c=i.top-o-4),s=Math.max(4,s),c=Math.max(4,c),r.style.left=`${s}px`,r.style.top=`${c}px`,requestAnimationFrame(()=>r.classList.add(`pg-wb-popover-visible`)),$d||($d=!0,document.addEventListener(`click`,e=>{Qd&&!Qd.el.contains(e.target)&&e.target!==Qd.anchor&&ef()}))}var nf={audio:`snd.word`,example_audio:`snd.example`},rf=(e,t,n,r=!1)=>j`
    <button type="button" class="pg-wb-row-btn ${r&&`pg-wb-row-btn-danger`}" data-sound="${e}"
            aria-label="${h(t)} — ${h(nf[n])}">${h(t)}</button>`;function af(e,t,n){let r=dr(e,t),i=fr(e,t),a=r?i?pr(e,t)?`snd.madeTag`:`snd.recording`:`snd.empty`:`snd.noExample`;return j`
        <div class="pg-wb-sound-row" data-field="${t}">
            <span class="pg-wb-sound-name">${h(nf[t])}</span>
            <span class="pg-wb-sound-state">${h(a)}</span>
            ${i&&rf(`play`,`snd.play`,t)}
            ${r&&n&&rf(`make`,i?`snd.remake`:`snd.makeOne`,t)}
            ${i&&rf(`remove`,`snd.remove`,t,!0)}
        </div>`}function of(e){let t=Xl();return!t&&!ur.some(t=>fr(e,t))?j``:j`
        <div class="pg-wb-sounds">
            <span class="pg-wb-sounds-title">${h(`snd.section`)}</span>
            ${ur.map(n=>af(e,n,t))}
        </div>`}var sf=e=>z().find(t=>t.word===e),cf=(e,t,n,r)=>!fr(e,t)||pr(e,t)?Promise.resolve(!0):w(h(n),{yes:h(r),no:h(`confirmNo`)});async function lf(e,t){if(!fu())return!1;let n=sf(e);if(!n||!await cf(n,t,`snd.replaceRecording`,`snd.remake`))return!1;let r=yr(sf(e)??n,t,b());if(!r)return!1;try{return await au(r)===`stored`?(x(h(`snd.remade`),`ok`,2500),Od(r.text,r.lang,{audio:sf(e)?.[t]}),!0):(x(h(`snd.notKept`),`err`,4e3),!1)}catch(e){return Cd(e),!1}}async function uf(e,t){let n=sf(e);return!n||!await cf(n,t,`snd.removeRecording`,`snd.remove`)?!1:is(e,t,null)}function df(e,t){e.addEventListener(`click`,async n=>{let r=n.target.closest(`button[data-sound]`),i=r?.closest(`.pg-wb-sound-row`)?.dataset.field,a=sf(t);if(!r||r.disabled||!i||!a)return;if(r.dataset.sound===`play`){Od(dr(a,i),b(),{audio:a[i]});return}r.disabled=!0;let o=r.dataset.sound===`make`?await lf(t,i):await uf(t,i);r.disabled=!1;let s=e.querySelector(`.pg-wb-sounds`),c=sf(t);o&&s&&c&&(s.outerHTML=of(c).value)})}var ff=[...pe,`idiom`,`grammar`,`sentence`];function pf(e,t,n){let r=z().find(e=>e.word===t);if(!r)return;let i=le(b()),a=(e,t,n,r=!1)=>j`
        <label class="pg-wb-edit-field ${r&&`pg-wb-edit-wide`}">
            <span>${t}</span>
            <input type="text" class="pg-soft-input" name="${e}" value="${n??``}" autocomplete="off" spellcheck="false">
        </label>`;e.classList.add(`pg-wb-editing`),M(e,j`
        <form class="pg-wb-edit">
            ${a(`word`,h(`wb.fWord`),r.word)}
            ${a(`base_form`,h(`wb.fBase`),r.base_form)}
            ${a(`meaning`,h(`wb.fMeaning`),r.meaning,!0)}
            ${a(`context_meaning`,h(`wb.fContext`),r.context_meaning,!0)}
            ${i?a(`reading`,h(`wb.fReading`),r.reading??r.ipa):a(`ipa`,h(`wb.fIpa`),r.ipa)}
            <label class="pg-wb-edit-field">
                <span>${h(`wb.fLevel`)}</span>
                <select class="pg-set-select" name="level">
                    <option value="" ${!r.level&&j`selected`}>—</option>
                    ${ff.map(e=>j`<option value="${e}" ${r.level===e&&j`selected`}>${ne(e)}</option>`)}
                </select>
            </label>
            <label class="pg-wb-edit-field">
                <span>${h(`wb.fPos`)}</span>
                <select class="pg-set-select" name="pos">
                    <option value="" ${!r.pos&&j`selected`}>—</option>
                    ${Ke.map(e=>j`<option value="${e}" ${r.pos===e&&j`selected`}>${e}</option>`)}
                </select>
            </label>
            ${of(r)}
            <div class="pg-wb-edit-actions">
                <button type="button" class="pg-wb-row-btn" data-edit="cancel">${h(`wb.editCancel`)}</button>
                <button type="submit" class="pg-btn pg-btn-primary pg-btn-compact">${h(`wb.editSave`)}</button>
            </div>
        </form>`);let o=e.querySelector(`form`);o&&(o.querySelector(`input[name="meaning"]`)?.focus(),o.querySelector(`[data-edit="cancel"]`)?.addEventListener(`click`,n),df(o,t),o.addEventListener(`keydown`,e=>{e.key===`Escape`&&(e.stopPropagation(),n())}),o.addEventListener(`submit`,e=>{e.preventDefault();let r=Object.fromEntries(new FormData(o));if(!r.word?.trim()){x(h(`wb.editNeedWord`),`warn`);return}let i=fs(t,{...r,pos:r.pos||void 0});i.merged&&x(h(`wb.editMerged`,{word:i.word}),`info`,3e3),n()}))}var mf=new WeakMap,hf=200,gf=new WeakMap;function _f(e,t){let n=fd(e??``,t);return n?j`${n[0]}<mark class="pg-wb-hl">${n[1]}</mark>${n[2]}`:j`${e??``}`}var vf=e=>e?new Date(e).toLocaleDateString(m(),{month:`short`,day:`numeric`}):``;function yf(e,t){let{filter:n,sets:r}=t,i=e.pos?Ae[e.pos]:void 0,a=vf(e.dateAdded);return j`
        <div class="pg-wordbook-item" data-word="${e.word}">
            <div class="pg-wb-head">
                <div class="pg-wb-head-left">
                    <input type="checkbox" class="pg-wb-row-chk" data-word="${e.word}" title="${h(`wb.selectRow`)}" aria-label="${h(`wb.selectRow`)}">
                    <strong>${n.query?_f(e.word,n.query):Gd(e.word,Wd(e))}${e.level===`sentence`&&Hd(`${h(`line.play`)}: ${e.word}`,h(`wb.listen`),`play-sentence`)}</strong>
                    ${i&&j`
                    <button class="pg-pos-chip${n.pos===e.pos?` pg-pos-chip-active`:``}" data-action="filter-pos" data-pos="${e.pos}" title="${h(`wb.filterByPos`)}">${i}</button>`}
                </div>
                <div class="pg-wb-head-right">
                    ${e.level!==`sentence`&&Pd({saved:!!e.audio,label:h(`wb.listen`),cls:`pg-icon-btn`,action:`speak`})}
                    ${W(e)&&j`
                    <button class="pg-icon-btn pg-wb-known-btn ${e.known&&`pg-wb-known-on`}" data-action="known" aria-pressed="${e.known?`true`:`false`}"
                        title="${h(e.known?`wb.unmarkKnown`:`wb.markKnown`)}" aria-label="${h(e.known?`wb.unmarkKnown`:`wb.markKnown`)}"><i class="fa-solid fa-check"></i></button>`}
                    <button class="pg-icon-btn pg-wb-edit-btn" data-action="edit" title="${h(`wb.edit`)}" aria-label="${h(`wb.edit`)}"><i class="fa-solid fa-pen"></i></button>
                    <button class="pg-icon-btn pg-wb-del" data-action="delete" title="${h(`wb.deleteWord`)}" aria-label="${h(`wb.deleteWord`)}"><i class="fa-solid fa-xmark"></i></button>
                </div>
            </div>
            <div class="pg-wb-mean">${_f(e.meaning,n.query)}</div>
            <div class="pg-wb-meta">
                ${e.ipa&&j`<span class="pg-ipa-chip">${e.ipa}</span>`}
                <span class="pg-level-badge level-${ue(e.level||`grammar`)}">${ne(e.level)}</span>
                ${Ju(e)&&j`<span class="pg-missed-tag" title="${h(`wb.missedTip`)}">${h(`wb.missedTag`)}</span>`}
                ${W(e)&&Gu(e)&&j`<span class="pg-known-tag" title="${h(e.known?`wb.knownSetTip`:`wb.knownTip`)}">${h(`wb.knownTag`)}</span>`}
                ${e.conj_cached&&j`<button class="pg-icon-btn pg-wb-conj-btn" data-action="conjugate" title="${h(`wb.conjTable`)}">📊</button>`}
                <button class="pg-icon-btn pg-wb-note-btn${e.notes?` pg-wb-note-btn-has`:``}" data-action="note" title="${h(`wb.noteTitle`)}">📝</button>
                ${a&&j`<span class="pg-wb-date">${a}</span>`}
            </div>
            <div class="pg-wb-secondary" aria-hidden="true">
                ${e.image&&j`<img class="pg-word-img" src="${Fe(e.image)}" alt="" loading="lazy">`}
                ${e.pos_info&&j`<div class="pg-wb-pos-info">${e.pos_info}</div>`}
                ${e.original_form&&j`<button class="pg-wb-ctx-btn" data-action="context" title="${h(`wb.viewCtx`)}">${e.original_form}</button>`}
                ${(e.collocations?.length??0)>0&&j`<div class="pg-colloc-row">${(e.collocations??[]).map(e=>j`<span class="pg-colloc-chip">${e}</span>`)}</div>`}
                ${r.length>0&&j`
                <div class="pg-set-checks">${r.map(t=>j`
                    <label class="pg-set-check" title="${t.name}">
                        <input type="checkbox" data-set="${t.id}" ${(e.setIds??[]).includes(t.id)&&j`checked`}>
                        <span>${t.name}</span>
                    </label>`)}
                </div>`}
            </div>
            <div class="pg-wb-notes-preview" data-action="note-preview" ${!e.notes&&j`hidden`}>${e.notes??``}</div>
            <div class="pg-wb-note-editor" hidden></div>
        </div>`}function bf(e,t,n){return e?n===e?h(`wb.allKnownHidden`):t.trim()?h(`wb.noMatchSearch`,{q:t}):h(`wb.noMatch`):h(`wb.empty`)}var xf=e=>({editor:e.querySelector(`.pg-wb-note-editor`),preview:e.querySelector(`.pg-wb-notes-preview`),button:e.querySelector(`.pg-wb-note-btn`)});function Sf(e,t){let n=mf.get(e),r=t.target;if(n&&r.closest(`.pg-wb-more`)){let t=gf.get(e);t&&(t.limit+=hf),wf(e,n);return}let i=r.closest(`.pg-wordbook-item`);if(!n||!i)return;let a=i.dataset.word??``,o=r.closest(`[data-action]`);if(o)switch(t.stopPropagation(),o.dataset.action){case`speak`:Od(a,b(),{audio:z().find(e=>e.word===a)?.audio,keep:{word:a,field:`audio`}});break;case`play-sentence`:Bd(o,()=>{let e=z().find(e=>e.word===a);return Od(a,b(),{audio:e?.audio,keep:{word:a,field:`audio`},speaker:e?.speaker})});break;case`edit`:pf(i,a,n.refresh);break;case`delete`:rs([a]),n.refresh();break;case`known`:as([a],!z().find(e=>e.word===a)?.known),n.refresh();break;case`filter-pos`:{let e=o.dataset.pos??``;n.filter.pos=n.filter.pos===e?``:e,n.refresh();break}case`conjugate`:Ls(a,{ai:je,getLang:b,getNativeLang:y});break;case`note`:Xd(xf(i),a);break;case`note-preview`:{let e=xf(i);qd(e.editor)||Yd(e,a);break}case`context`:{let e=z().find(e=>e.word===a);e?.context_meaning&&tf(o,e.original_form??``,e.context_meaning);break}}else{if(r.closest(`button, input, a, select, label, textarea`))return;let e=i.classList.toggle(`pg-wb-expanded`);i.querySelector(`.pg-wb-secondary`)?.setAttribute(`aria-hidden`,String(!e))}}function Cf(e,t){let n=t.target,r=n.closest(`.pg-wordbook-item`)?.dataset.word;n.dataset.set&&r&&xs(r,n.dataset.set),n.classList.contains(`pg-wb-row-chk`)&&mf.get(e)?.onSelect()}function wf(e,t){let n=V(),r=C().wordbook_hide_known!==!1,i=dd(n,t.filter,r),a=r?n.filter(e=>ud(e,t.filter,!0)).length:0,o=e.scrollTop;mf.has(e)||(e.addEventListener(`click`,t=>Sf(e,t)),e.addEventListener(`change`,t=>Cf(e,t)),e.addEventListener(`keydown`,e=>{let t=e.target;(e.key===`Enter`||e.key===` `)&&t.matches(`[role="button"][data-action]`)&&(e.preventDefault(),t.click())})),mf.set(e,t);let s=JSON.stringify(t.filter),c=gf.get(e)?.key===s?gf.get(e):{key:s,limit:hf};gf.set(e,c);let l=i.length-c.limit;return M(e,i.length?j`${i.slice(0,c.limit).map(e=>yf(e,t))}
               ${l>0&&j`<button class="pg-btn pg-btn-secondary pg-btn-block pg-wb-more">${h(`wb.showMore`,{n:Math.min(l,hf),rest:l})}</button>`}`:j`<div class="pg-empty-hint">${bf(n.length,t.filter.query,a)}</div>`),e.scrollTop=o,[i.length,n.length,a]}function Tf([e,t,n=0],r){return sd(r)?`${e} / ${t}`:n?h(`wb.nWordsHidden`,{n:e,k:n}):h(`wb.nWords`,{n:t})}function Ef(e){return[...e.querySelectorAll(`.pg-wb-row-chk:checked`)].map(e=>e.dataset.word??``).filter(Boolean)}var Df=class extends Error{},G=e=>{throw new Df(`zip: ${e}`)},Of=101010256,kf=101075792,Af=117853008,jf=33639248,Mf=67324752,Nf=4294967295,Pf=536870912;async function Ff(e,t,n){return new DataView(await e.slice(t,n).arrayBuffer())}var If=(e,t)=>e.getUint32(t,!0)+e.getUint32(t+4,!0)*2**32;async function Lf(e){let t=await Ff(e,Math.max(0,e.size-22-65535),e.size),n=-1;for(let e=t.byteLength-22;e>=0;e--)if(t.getUint32(e,!0)===Of){n=e;break}n<0&&G(`not a zip file`);let r=t.getUint16(n+10,!0),i=t.getUint32(n+12,!0),a=t.getUint32(n+16,!0);if(r===65535||i===Nf||a===Nf){let o=n-20;(o<0||t.getUint32(o,!0)!==Af)&&G(`zip64 locator missing`);let s=If(t,o+8);s+56>e.size&&G(`zip64 record out of range`);let c=await Ff(e,s,s+56);c.getUint32(0,!0)!==kf&&G(`zip64 record missing`),r=If(c,32),i=If(c,40),a=If(c,48)}a+i>e.size&&G(`central directory out of range`),r*46>i&&G(`bad central directory`);let o=await Ff(e,a,a+i),s=new TextDecoder,c=new Map,l=0;for(let t=0;t<r;t++){(l+46>o.byteLength||o.getUint32(l,!0)!==jf)&&G(`bad central directory`);let t=o.getUint16(l+10,!0),n=o.getUint32(l+16,!0),r=o.getUint32(l+20,!0),i=o.getUint32(l+24,!0),a=o.getUint16(l+28,!0),u=o.getUint16(l+30,!0),d=o.getUint16(l+32,!0),f=o.getUint32(l+42,!0);l+46+a+u+d>o.byteLength&&G(`bad central directory`);let p=s.decode(new Uint8Array(o.buffer,l+46,a));for(let e=l+46+a;e+4<=l+46+a+u;){let t=o.getUint16(e,!0),n=o.getUint16(e+2,!0);if(t===1){let t=e+4;t+n>o.byteLength&&G(`bad zip64 field`),i===Nf&&(i=If(o,t),t+=8),r===Nf&&(r=If(o,t),t+=8),f===Nf&&(f=If(o,t))}e+=4+n}f+30+r>e.size&&G(`${p} lies past the end of the file`),c.set(p,{name:p,method:t,compressed:r,size:i,crc:n,offset:f}),l+=46+a+u+d}return c}async function Rf(e,t,n=Pf){let{name:r}=t;t.size>n&&G(`${r} is too large (${t.size} bytes)`),t.offset+30>e.size&&G(`${r} lies past the end of the file`);let i=await Ff(e,t.offset,t.offset+30);i.getUint32(0,!0)!==Mf&&G(`bad local header for ${r}`);let a=t.offset+30+i.getUint16(26,!0)+i.getUint16(28,!0);a+t.compressed>e.size&&G(`${r} lies past the end of the file`);let o=e.slice(a,a+t.compressed),s;if(t.method===0)t.compressed!==t.size&&G(`${r}: stored size mismatch`),s=new Uint8Array(await o.arrayBuffer());else if(t.method===8)s=await zf(o,t);else return G(`unsupported compression ${t.method} for ${r}`);return Vf(s)!==t.crc&&G(`${r} is corrupt (CRC mismatch)`),s}async function zf(e,t){let n=new Uint8Array(t.size),r=e.stream().pipeThrough(new DecompressionStream(`deflate-raw`)).getReader(),i=0;try{for(;;){let{done:e,value:a}=await r.read();if(e)break;i+a.length>n.length&&G(`${t.name} inflates past its stated size`),n.set(a,i),i+=a.length}}catch(e){if(r.cancel().catch(()=>{}),e instanceof Df)throw e;G(`${t.name} is corrupt (${e instanceof Error?e.message:String(e)})`)}return i!==n.length&&G(`${t.name} is shorter than its stated size`),n}var Bf=(()=>{let e=new Uint32Array(256);for(let t=0;t<256;t++){let n=t;for(let e=0;e<8;e++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n>>>0}return e})();function Vf(e){let t=4294967295;for(let n=0;n<e.length;n++)t=Bf[(t^e[n])&255]^t>>>8;return(t^4294967295)>>>0}function Hf(e){e.length>65535&&G(`too many files for one zip (${e.length})`);let t=[],n=[],r=new TextEncoder,i=0;for(let{name:a,data:o}of e){let e=r.encode(a),s=Vf(o),c=new DataView(new ArrayBuffer(30));c.setUint32(0,Mf,!0),c.setUint16(4,20,!0),c.setUint16(6,2048,!0),c.setUint32(14,s,!0),c.setUint32(18,o.length,!0),c.setUint32(22,o.length,!0),c.setUint16(26,e.length,!0),t.push(c.buffer,e,o);let l=new DataView(new ArrayBuffer(46));l.setUint32(0,jf,!0),l.setUint16(4,20,!0),l.setUint16(6,20,!0),l.setUint16(8,2048,!0),l.setUint32(16,s,!0),l.setUint32(20,o.length,!0),l.setUint32(24,o.length,!0),l.setUint16(28,e.length,!0),l.setUint32(42,i,!0),n.push(new Uint8Array(l.buffer),e),i+=30+e.length+o.length,i>Nf&&G(`backup larger than 4 GB`)}let a=n.reduce((e,t)=>e+t.length,0),o=new DataView(new ArrayBuffer(22));return o.setUint32(0,Of,!0),o.setUint16(8,e.length,!0),o.setUint16(10,e.length,!0),o.setUint32(12,a,!0),o.setUint32(16,i,!0),new Blob([...t,...n,o.buffer],{type:`application/zip`})}var Uf=`polyglot-backup`,Wf=1,Gf=new Set([`_wordbook`,`_sets`,`saved_wrong_answers`,`saved_checks`,`saved_days`,`ext_api_key`,`ext_base_url`,`provider`,`model`,`_model_history`,`route_chat_source`,`route_model`,`profile_id`,`host_connection`,`voice_provider`,`voice_oa_url`,`voice_proxy`]),Kf=e=>e.endsWith(`_key`),qf=new Set(Object.keys(Le).filter(e=>!Gf.has(e)&&!Kf(e)));function Jf(e,t,n,r=new Date){return{format:Uf,version:Wf,exportedAt:r.toISOString(),settings:Object.fromEntries(Object.entries(e).filter(([e])=>qf.has(e))),wordbook:t.wordbook,sets:t.sets,wrongAnswers:t.wrongAnswers,checks:t.checks,days:t.days,conjugations:n}}var Yf=e=>T(e)&&typeof e.word==`string`&&typeof e.lang==`string`&&T(e.data)&&Array.isArray(e.data.tenses);function Xf(e){let t;try{t=JSON.parse(e)}catch{return{ok:!1,reason:`invalid`}}if(!T(t)||t.format!==`polyglot-backup`)return{ok:!1,reason:`invalid`};if(pi(t.version,0)>Wf)return{ok:!1,reason:`newer`};let n=T(t.settings)?Object.fromEntries(Object.entries(t.settings).filter(([e])=>qf.has(e))):{};return{ok:!0,backup:{format:Uf,version:pi(t.version,Wf),exportedAt:typeof t.exportedAt==`string`?t.exportedAt:``,settings:n,...Oi(t),conjugations:_i(t.conjugations,Yf)}}}var Zf=`polyglot-backup.json`,Qf=`media/`;async function $f(e){let t=Jf(C(),pa(),await _n()),n=`Polyglot_Backup_${t.exportedAt.slice(0,10)}`,r=JSON.stringify(t,null,1),i=R()===`file`?[...An(t.wordbook)]:[];if(!i.length)return qa(r,`${n}.json`,`application/json`),{words:t.wordbook.length,media:0,missing:0};let a=[{name:Zf,data:new TextEncoder().encode(r)}],o=[],s=[],c=0;e?.(0,i.length),await Nn(i.map((e,t)=>t),6,async t=>{s[t]=await Be(i[t]),e?.(++c,i.length)}),i.forEach((e,t)=>{let n=s[t];n?a.push({name:Qf+e,data:n}):o.push(e)}),Ja(Hf(a),`${n}.zip`);let l=(await Mn(o)).size;return{words:t.wordbook.length,media:a.length-1,missing:l}}async function ep(e){let t=await Lf(e),n=t.get(Zf);return n?{text:new TextDecoder().decode(await Rf(e,n)),restoreMedia:async n=>{let r=0,i=[],a=e=>kn(e,`sound`)||kn(e,`image`),o=[...An(n)].filter(e=>Cn(e)&&t.has(Qf+e)),s=o.filter(a);r+=o.length-s.length;let c=await Mn(s),l=s.flatMap(e=>{let n=t.get(Qf+e);return n&&!c.has(e)?[{name:e,entry:n}]:[]});return Vn(l.map(e=>e.name)),await Nn(l,6,async({name:t,entry:n})=>{await Rf(e,n).then(e=>ke(t,e)).then(e=>e===`ok`,()=>!1)?i.push(t):r++}),Ln(i),r}}:null}var tp=[`panel_bg_image`,`dict_url_custom`];function np(e,t){return tp.flatMap(n=>{let r=e.settings[n];return typeof r==`string`&&r.trim()&&r!==t[n]?[r]:[]})}function rp(e){let t={...e.settings};for(let e of tp)delete t[e];return{...e,settings:t}}function ip(e){return{...e,wordbook:e.wordbook.map(({audio:e,example_audio:t,image:n,made_sounds:r,...i})=>i)}}async function ap(e,t){t&&await gn();let n=t?new Set:new Set((await _n()).map(e=>e.word));await Promise.all(e.filter(e=>!n.has(e.word)).map(e=>mn(e.word,e.data,e.lang)))}async function op(e,t){if(t===`replace`){let t=C();return Object.assign(t,e.settings,{ext_api_key:t.ext_api_key}),Ze(t),me(),Sa({wordbook:e.wordbook,sets:e.sets,wrongAnswers:e.wrongAnswers,checks:e.checks,days:e.days}),await ap(e.conjugations,!0),{added:e.wordbook.length,merged:0}}let{added:n,merged:r,...i}=ki(pa(),e);return Sa(i),await ap(e.conjugations,!1),{added:n,merged:r}}async function sp(e=!1,t){try{let{words:n,media:r,missing:i}=await $f(t);return x(r?h(`pnl.set.backupDoneMedia`,{n,m:r}):h(`pnl.set.backupDone`,{n}),`ok`,3e3),i&&x(h(`pnl.set.backupMissing`,{n:i}),`warn`,8e3),R()===`chat`&&x(h(`pnl.set.backupChatOnly`),`warn`,1e4),!(e&&i)}catch(e){return console.error(`[Polyglot] Backup failed:`,e),x(h(`pnl.set.backupFailed`,{err:e instanceof Error?e.message:String(e)}),`err`,6e3),!1}}var cp=e=>e?new Date(e).toLocaleString(m(),{dateStyle:`medium`,timeStyle:`short`}):`?`;async function lp(e){if(!/\.zip$/i.test(e.name))return up(await e.text());let t=await ep(e).catch(()=>null);return t?up(t.text,t):(x(h(`pnl.set.restoreInvalid`),`err`,4e3),!1)}async function up(e,t){let n=Xf(e);if(!n.ok)return x(h(n.reason===`newer`?`pnl.set.restoreNewer`:`pnl.set.restoreInvalid`),`err`,4e3),!1;let{backup:i}=n;if(R()===`loading`||R()===`offline`)return x(h(`pnl.set.restoreNotLoaded`),`warn`,6e3),!1;let a=await r(h(`pnl.set.restoreAsk`,{date:cp(i.exportedAt),n:i.wordbook.length}),[{value:`cancel`,label:h(`confirmNo`)},{value:`replace`,label:h(`pnl.set.restoreReplace`)},{value:`merge`,label:h(`pnl.set.restoreMerge`),primary:!0}]);if(!a||a===`cancel`)return!1;let o=a===`replace`?np(i,C()):[];if(o.length&&await r(h(`pnl.set.restoreAddresses`,{list:o.join(`
`)}),[{value:`keep`,label:h(`pnl.set.restoreAddrKeep`)},{value:`skip`,label:h(`pnl.set.restoreAddrSkip`),primary:!0}])!==`keep`&&(i=rp(i)),a===`replace`){if(!await sp(!0))return x(h(`pnl.set.restoreNoSafety`),`err`,8e3),!1;if(!await w(h(`pnl.set.restoreSafetySaved`),{yes:h(`pnl.set.restoreReplace`),no:h(`confirmNo`)}))return!1}if(R()!==`file`)i=ip(i);else if(t){let e=await t.restoreMedia(i.wordbook);if(e&&a===`replace`&&!await w(h(`pnl.set.restoreMediaAsk`,{n:e}),{yes:h(`pnl.set.restoreReplace`),no:h(`confirmNo`)}))return!1;e&&x(h(`anki.mediaFailed`,{n:e}),`warn`,6e3)}let{added:s,merged:c}=await op(i,a);return x(a===`merge`?h(`pnl.set.restoreMerged`,{added:s,merged:c}):h(`pnl.set.restoreReplaced`,{n:s}),`ok`,4e3),!0}var dp=class extends Error{},K=e=>{throw new dp(`zstd: ${e}`)},fp=e=>31-Math.clz32(e),pp=536870912,mp=class{max;buf;len=0;constructor(e,t){this.max=t,this.buf=new Uint8Array(Math.min(Math.max(e,1024),t))}reserve(e){if(e>=0||K(`bad length`),this.len+e>this.max&&K(`output larger than ${this.max} bytes`),this.len+e<=this.buf.length)return;let t=this.buf.length*2;for(;t<this.len+e;)t*=2;t=Math.min(t,this.max);let n=new Uint8Array(t);n.set(this.buf.subarray(0,this.len)),this.buf=n}bytes(e,t,n){this.reserve(n),this.buf.set(e.subarray(t,t+n),this.len),this.len+=n}fill(e,t){this.reserve(t),this.buf.fill(e,this.len,this.len+t),this.len+=t}match(e,t){e>0&&e<=this.len||K(`match offset out of range`),this.reserve(t);let n=this.buf,r=this.len-e;if(e>=t)n.copyWithin(this.len,r,r+t);else for(let e=0;e<t;e++)n[this.len+e]=n[r++];this.len+=t}},hp=class{data;end;pos;constructor(e,t,n){this.data=e,this.end=n,this.pos=t*8}peek(e){let t=0;for(let n=0;n<e;n++){let e=this.pos+n,r=e>>3;r<this.end&&this.data[r]>>(e&7)&1&&(t+=2**n)}return t}skip(e){this.pos+=e}get byteEnd(){return Math.ceil(this.pos/8)}},gp=class{data;start;left;length;constructor(e,t,n){this.data=e,this.start=t,n<=t&&K(`empty bitstream`);let r=e[n-1];r||K(`bitstream without end marker`),this.length=n-t,this.left=(this.length-1)*8+fp(r)}byte(e){return e>=0&&e<this.length?this.data[this.start+e]:0}peek(e){if(!e)return 0;let t=this.left-e,n=Math.floor(t/8),r=t-n*8;if(e+r<=24&&n>=0)return(this.data[this.start+n]|this.byte(n+1)<<8|this.byte(n+2)<<16)>>>r&(1<<e)-1;let i=0;for(let e=4;e>=0;e--)i=i*256+this.byte(n+e);return Math.floor(i/2**r)%2**e}read(e){let t=this.peek(e);return this.left-=e,t}};function _p(e,t,n,r,i){let a=new hp(e,t,n),o=a.peek(4)+5;a.skip(4),o>r&&K(`FSE accuracy too large`);let s=[],c=(1<<o)+1,l=1<<o,u=o+1,d=!1;for(;c>1&&s.length<=i;){if(d){let e=a.peek(2);a.skip(2);let t=e;for(;e===3;)e=a.peek(2),a.skip(2),t+=e;for(let e=0;e<t;e++)s.push(0);if(s.length>i)break}let e=2*l-1-c,t,n=a.peek(u-1);for(n<e?(t=n,a.skip(u-1)):(t=a.peek(u),t>=l&&(t-=e),a.skip(u)),t--,c-=Math.abs(t),s.push(t),d=t===0;c<l;)u--,l>>=1}return c!==1&&K(`bad FSE distribution`),{norm:s,log:o,next:a.byteEnd}}function vp(e,t){let n=1<<t,r=new Uint8Array(n),i=new Uint8Array(n),a=new Uint16Array(n),o=Array(e.length),s=n-1;e.forEach((e,t)=>{e===-1?(r[s--]=t,o[t]=1):o[t]=e});let c=(n>>1)+(n>>3)+3,l=0;e.forEach((e,t)=>{for(let i=0;i<e;i++){r[l]=t;do l=l+c&n-1;while(l>s)}}),l!==0&&K(`bad FSE table`);for(let e=0;e<n;e++){let s=r[e],c=o[s]++;i[e]=t-fp(c),a[e]=(c<<i[e])-n}return{log:t,symbol:r,bits:i,baseline:a}}var yp=e=>({log:0,symbol:Uint8Array.of(e),bits:Uint8Array.of(0),baseline:Uint16Array.of(0)}),bp=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,20,22,24,28,32,40,48,64,128,256,512,1024,2048,4096,8192,16384,32768,65536],xp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,3,3,4,6,7,8,9,10,11,12,13,14,15,16],Sp=[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,39,41,43,47,51,59,67,83,99,131,259,515,1027,2051,4099,8195,16387,32771,65539],Cp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,3,3,4,4,5,7,8,9,10,11,12,13,14,15,16],wp=vp([4,3,2,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,3,2,1,1,1,1,1,-1,-1,-1,-1],6),Tp=vp([1,4,3,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,-1],6),Ep=vp([1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1,-1,-1,-1,-1],5);function Dp(e,t){let n=e[t],r,i;if(n<128){let a=t+1+n,{norm:o,log:s,next:c}=_p(e,t+1,a,6,255),l=vp(o,s),u=new gp(e,c,a),d=u.read(s),f=u.read(s);for(r=[];;){if(r.push(l.symbol[d]),d=l.baseline[d]+u.read(l.bits[d]),u.left<0){r.push(l.symbol[f]);break}if(r.push(l.symbol[f]),f=l.baseline[f]+u.read(l.bits[f]),u.left<0){r.push(l.symbol[d]);break}r.length>255&&K(`too many Huffman weights`)}i=a}else{let a=n-127;r=[];for(let n=0;n<a;n++){let i=e[t+1+(n>>1)];r.push(n&1?i&15:i>>4)}i=t+1+Math.ceil(a/2)}let a=0;for(let e of r)e&&(a+=1<<e-1);a||K(`empty Huffman tree`);let o=fp(a)+1,s=(1<<o)-a;s&s-1&&K(`bad Huffman tree`),r.push(fp(s)+1),o>11&&K(`Huffman code too long`);let c=1<<o,l=new Uint8Array(c),u=new Uint8Array(c),d=0;for(let e=1;e<=o;e++)r.forEach((t,n)=>{if(t!==e)return;let r=1<<e-1;l.fill(n,d,d+r),u.fill(o+1-e,d,d+r),d+=r});return{table:{maxBits:o,symbol:l,bits:u},next:i}}function Op(e,t,n,r,i,a,o){let s=new gp(e,t,n);for(let e=0;e<o;e++){let t=s.peek(r.maxBits);i[a+e]=r.symbol[t],s.left-=r.bits[t]}s.left!==0&&K(`Huffman stream not fully consumed`)}function kp(e,t,n){let r=e[t],i=r&3,a=r>>2&3;if(i===0||i===1){let n,o;a===0||a===2?(n=r>>3,o=1):a===1?(n=(r>>4)+(e[t+1]<<4),o=2):(n=(r>>4)+(e[t+1]<<4)+(e[t+2]<<12),o=3);let s=t+o;return i===0?(s+n>e.length&&K(`literals past the end`),{literals:e.subarray(s,s+n),next:s+n}):{literals:new Uint8Array(n).fill(e[s]),next:s+1}}let o,s,c,l=4;if(a<=1){let n=r|e[t+1]<<8|e[t+2]<<16;o=n>>4&1023,s=n>>14&1023,c=3,a===0&&(l=1)}else if(a===2){let n=(r|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0;o=n>>>4&16383,s=n>>>18,c=4}else{let n=(r|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0;o=n>>>4&262143,s=(n>>>22)+e[t+4]*1024,c=5}let u=t+c,d=u+s;if(d>e.length&&K(`literals past the end`),i===2){let t=Dp(e,u);n.huffman=t.table,u=t.next}let f=n.huffman??K(`treeless literals without a previous tree`),p=new Uint8Array(o);if(l===1)Op(e,u,d,f,p,0,o);else{let t=e[u]|e[u+1]<<8,n=e[u+2]|e[u+3]<<8,r=e[u+4]|e[u+5]<<8,i=Math.ceil(o/4),a=u+6;[t,n,r,d-a-t-n-r].forEach((t,n)=>{let r=n<3?i:o-3*i;Op(e,a,a+t,f,p,n*i,r),a+=t})}return{literals:p,next:d}}function Ap(e,t,n,r,i,a,o){switch(n){case 0:return{table:r,next:t};case 1:return{table:yp(e[t]),next:t+1};case 2:{let{norm:n,log:r,next:i}=_p(e,t,e.length,a,o);return{table:vp(n,r),next:i}}default:return{table:i??K(`repeated table without a previous one`),next:t}}}function jp(e,t,n,r,i){let a=e.subarray(0,n),{literals:o,next:s}=kp(a,t,i),c=s;c>=n&&K(`missing sequences section`);let l=a[c],u;if(l<128?(u=l,c+=1):l<255?(u=(l-128<<8)+a[c+1],c+=2):(u=a[c+1]+(a[c+2]<<8)+32512,c+=3),c>n&&K(`truncated sequences header`),!u){c!==n&&K(`bytes after an empty sequences section`),r.bytes(o,0,o.length);return}let d=a[c++],f=Ap(a,c,d>>6,wp,i.ll,9,35),p=Ap(a,f.next,d>>4&3,Ep,i.of,8,31),m=Ap(a,p.next,d>>2&3,Tp,i.ml,9,52);i.ll=f.table,i.of=p.table,i.ml=m.table;let h=new gp(a,m.next,n),ee=f.table,te=p.table,ne=m.table,re=h.read(ee.log),g=h.read(te.log),_=h.read(ne.log),v=i.reps,ie=0;for(let e=0;e<u;e++){let t=te.symbol[g],n=ne.symbol[_],i=ee.symbol[re];(t===void 0||n===void 0||i===void 0)&&K(`bad sequence state`),t>31&&K(`offset code too large`);let a=2**t+h.read(t),s=Sp[n]+h.read(Cp[n]),c=bp[i]+h.read(xp[i]);h.left<0&&K(`sequence stream over-read`);let l;if(a>3)l=a-3,v[2]=v[1],v[1]=v[0],v[0]=l;else{let e=a-1+ +(c===0);e===0?l=v[0]:(l=e===3?v[0]-1:v[e],e!==1&&(v[2]=v[1]),v[1]=v[0],v[0]=l)}ie+c>o.length&&K(`literal length past the literals`),r.bytes(o,ie,c),ie+=c,r.match(l,s),e<u-1&&(re=ee.baseline[re]+h.read(ee.bits[re]),_=ne.baseline[_]+h.read(ne.bits[_]),g=te.baseline[g]+h.read(te.bits[g]))}h.left!==0&&K(`sequence stream not fully consumed`),r.bytes(o,ie,o.length-ie)}var Mp=4247762216,Np=(e,t)=>(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0;function Pp(e,t=pp){let n=new mp(e.length*4,t),r=0;for(;r<e.length;){r+4>e.length&&K(`truncated`);let i=Np(e,r);if((i&4294967280)==407710288){r+8>e.length&&K(`truncated`),r+=8+Np(e,r+4);continue}i!==Mp&&K(`not a zstd frame`),r+=4,r+1>e.length&&K(`truncated frame header`);let a=e[r++],o=a>>6,s=a>>5&1,c=a>>2&1,l=a&3;if(a&8&&K(`reserved bit set`),r+ +!s+[0,1,2,4][l]+[+!!s,2,4,8][o]>e.length&&K(`truncated frame header`),s||r++,l){let t=[0,1,2,4][l],n=0;for(let i=t-1;i>=0;i--)n=n*256+e[r+i];n&&K(`dictionaries are not supported`),r+=t}let u=[+!!s,2,4,8][o],d=-1;if(u){u===8&&(e[r+6]||e[r+7])&&K(`output larger than ${t} bytes`),d=0;for(let t=Math.min(u,6)-1;t>=0;t--)d=d*256+e[r+t];u===2&&(d+=256),n.len+d>t&&K(`output larger than ${t} bytes`),n.reserve(Math.min(d,e.length*64)),r+=u}let f=n.len,p={reps:[1,4,8]};for(let t=0;!t;){r+3>e.length&&K(`truncated block`);let i=e[r]|e[r+1]<<8|e[r+2]<<16;r+=3,t=i&1;let a=i>>1&3,o=i>>3;a===0?(r+o>e.length&&K(`truncated block`),n.bytes(e,r,o),r+=o):a===1?(r>=e.length&&K(`truncated block`),n.fill(e[r],o),r+=1):a===2?(r+o>e.length&&K(`truncated block`),jp(e,r,r+o,n,p),r+=o):K(`reserved block type`)}d>=0&&n.len-f!==d&&K(`frame size does not match its header`),c&&(r+=4),r>e.length&&K(`truncated`)}return n.buf.slice(0,n.len)}var Fp=e=>e.length>=4&&Np(e,0)===Mp,Ip=class extends Error{},Lp=e=>{throw new Ip(`sqlite: ${e}`)},Rp=`SQLite format 3\0`,zp=class{data;view;pageSize;usable;decoder;schema;constructor(e){this.data=e,(e.length<100||new TextDecoder().decode(e.subarray(0,16))!==Rp)&&Lp(`not a SQLite file`),this.view=new DataView(e.buffer,e.byteOffset,e.byteLength);let t=this.view.getUint16(16);this.pageSize=t===1?65536:t,this.usable=this.pageSize-e[20],(this.pageSize<512||this.pageSize&this.pageSize-1||this.usable<480)&&Lp(`bad page size`);let n=this.view.getUint32(56);this.decoder=new TextDecoder(n===2?`utf-16le`:n===3?`utf-16be`:`utf-8`)}tables(){return this.schemaRows().filter(e=>e.type===`table`).map(e=>e.name)}hasTable(e){return this.schemaRows().some(t=>t.type===`table`&&t.name===e)}*rows(e){let t=this.schemaRows().find(t=>t.type===`table`&&t.name===e)??Lp(`no table ${e}`);yield*this.guarded(this.walk(t.root,new Set))}schemaRows(){return this.schema??=[...this.guarded(this.walk(1,new Set))].map(({values:[e,t,,n,r]})=>({type:String(e),name:String(t),root:Number(n),sql:String(r??``)})),this.schema}*guarded(e){try{yield*e}catch(e){throw e instanceof RangeError?new Ip(`sqlite: damaged file`):e}}*walk(e,t){(t.has(e)||e<1||e*this.pageSize>this.data.length)&&Lp(`bad page reference`),t.add(e);let n=(e-1)*this.pageSize,r=n+(e===1?100:0),i=this.data[r],a=this.view.getUint16(r+3),o=i===10||i===13,s=r+(o?8:12);[2,5,10,13].includes(i)||Lp(`unknown page type ${i}`);for(let e=0;e<a;e++){let r=n+this.view.getUint16(s+e*2);if(i===13){let[e,t]=this.varint(r);r+=t;let[n,i]=this.varint(r);r+=i,yield{rowid:n,values:this.record(this.payload(r,e,!0))}}else if(i===10){let[e,t]=this.varint(r);yield{values:this.record(this.payload(r+t,e,!1))}}else if(i===5)yield*this.walk(this.view.getUint32(r),t);else{yield*this.walk(this.view.getUint32(r),t);let[e,n]=this.varint(r+4);yield{values:this.record(this.payload(r+4+n,e,!1))}}}o||(yield*this.walk(this.view.getUint32(r+8),t))}payload(e,t,n){t>this.data.length&&Lp(`record larger than the file`);let r=this.usable,i=n?r-35:Math.floor((r-12)*64/255)-23;if(t<=i)return this.data.subarray(e,e+t);let a=Math.floor((r-12)*32/255)-23,o=a+(t-a)%(r-4),s=o<=i?o:a,c=new Uint8Array(t);c.set(this.data.subarray(e,e+s));let l=s,u=this.view.getUint32(e+s),d=new Set;for(;l<t;){(!u||d.has(u)||u*this.pageSize>this.data.length)&&Lp(`broken overflow chain`),d.add(u);let e=(u-1)*this.pageSize,n=Math.min(r-4,t-l);c.set(this.data.subarray(e+4,e+4+n),l),l+=n,u=this.view.getUint32(e)}return c}varint(e,t=this.data){let n=0;for(let r=0;r<8;r++){let i=t[e+r];if(i===void 0&&Lp(`varint past the end`),n=n*128+(i&127),i<128)return[n,r+1]}return e+8>=t.length&&Lp(`varint past the end`),[n*256+t[e+8],9]}record(e){let[t,n]=this.varint(0,e);t>e.length&&Lp(`record header larger than the record`);let r=[];for(let i=n;i<t;){let[t,n]=this.varint(i,e);r.push(t),i+=n}let i=new DataView(e.buffer,e.byteOffset,e.byteLength),a=[],o=t;for(let t of r)if(t===0)a.push(null);else if(t<=6){let n=[0,1,2,3,4,6,8][t];a.push(Bp(e,o,n)),o+=n}else if(t===7)a.push(i.getFloat64(o)),o+=8;else if(t===8)a.push(0);else if(t===9)a.push(1);else if(t>=12){let n=(t-(t&1?13:12))/2,r=e.subarray(o,o+n);a.push(t&1?this.decoder.decode(r):r),o+=n}else Lp(`reserved serial type ${t}`);return a}};function Bp(e,t,n){let r=!!(e[t]&128),i=0;for(let a=0;a<n;a++)i=i*256+(r?255-e[t+a]:e[t+a]);return r?-i-1:i}var Vp=class extends Error{},Hp=``,Up=67108864;function Wp(e){let[t]=[...e.rows(`col`)],n=JSON.parse(String(t?.values[9]??`{}`)),r=JSON.parse(String(t?.values[10]??`{}`));return{noteTypes:Object.entries(n).map(([e,t])=>({id:Number(t.id??e),name:String(t.name??e),fields:[...t.flds??[]].sort((e,t)=>e.ord-t.ord).map(e=>e.name)})),decks:new Map(Object.entries(r).map(([e,t])=>[Number(e),String(t.name??``)]))}}function Gp(e){let t=new Map;for(let{values:[n,r,i]}of e.rows(`fields`)){let e=t.get(Number(n))??[];e.push({ord:Number(r),name:String(i)}),t.set(Number(n),e)}return{noteTypes:[...e.rows(`notetypes`)].map(({rowid:e,values:n})=>({id:Number(e),name:String(n[1]),fields:(t.get(Number(e))??[]).sort((e,t)=>e.ord-t.ord).map(e=>e.name)})),decks:new Map([...e.rows(`decks`)].map(({rowid:e,values:t})=>[Number(e),String(t[1]).split(Hp).join(`::`)]))}}function Kp(e){let{noteTypes:t,decks:n}=e.hasTable(`notetypes`)?Gp(e):Wp(e),r=new Map;for(let{values:t}of e.rows(`cards`)){let[,e,n,i]=t,a=Number(t[15])||Number(n),o=r.get(Number(e));(!o||Number(i)<o.ord)&&r.set(Number(e),{ord:Number(i),did:a})}let i=[];for(let{rowid:t,values:a}of e.rows(`notes`))i.push({typeId:Number(a[2]),fields:String(a[6]??``).split(Hp),tags:String(a[5]??``).trim().split(/\s+/).filter(Boolean),deck:n.get(r.get(Number(t))?.did??-1)??``});return{noteTypes:t,notes:i}}function qp(e){let t=[],n=new TextDecoder,r=()=>{throw new Vp(`bad media list`)},i=t=>{let n=0,i=1,a=t;for(;e[a]&128;a++,i*=128)n+=(e[a]&127)*i;return a>=e.length&&r(),[n+e[a]*i,a+1]},a=(t,n,a)=>{n>e.length&&r();for(let e=t;e<n;){let[t,o]=i(e),s=Math.floor(t/8),c=t&7;if(c===0)e=i(o)[1];else if(c===2){let[t,c]=i(o);c+t>n&&r(),a(s,c,c+t),e=c+t}else c===5?e=o+4:c===1?e=o+8:r()}};return a(0,e.length,(r,i,o)=>{if(r!==1)return;let s=``;a(i,o,(t,r,i)=>{t===1&&(s=n.decode(e.subarray(r,i)))}),t.push(s)}),t}var Jp=/please update to the latest anki version/i;async function Yp(e){let t=await Lf(e),n=e=>t.get(e),r=(t,n)=>Rf(e,t,n),i=n(`collection.anki21b`),a=n(`collection.anki21`)??n(`collection.anki2`);if(!i&&!a)throw new Vp(`no collection in package`);let{noteTypes:o,notes:s}=Kp(new zp(i?Pp(await r(i)):await r(a)));if(!i&&s.length===1&&Jp.test(s[0].fields[0]??``))throw new Vp(`stub collection`);let c=n(`media`),l={};if(c){let e=await r(c);l=Fp(e)?Object.fromEntries(qp(Pp(e)).map((e,t)=>[String(t),e])):JSON.parse(new TextDecoder().decode(e)||`{}`)}let u=new Map(Object.entries(l).map(([e,t])=>[t,e]));return{noteTypes:o.filter(e=>s.some(t=>t.typeId===e.id)),notes:s,media:new Set(u.keys()),readMedia:async e=>{let t=u.get(e),i=t===void 0?void 0:n(t);if(!i)return null;let a=await r(i,Up);return Fp(a)?Pp(a,Up):a}}}var Xp=200,Zp=134217728,Qp=6;async function $p(e,t,n,r){let i=new Map,a=new Set,o=0,s=0,c=()=>n({done:++o,total:e.length});for(let n=0;n<e.length&&!r?.aborted;){let o=new Map,l=0;for(;n<e.length&&o.size<Xp&&l<Zp;){let r=e[n++],i=await t(r).catch(()=>null);i?(o.set(r,{file:On(i,r),bytes:i}),l+=i.length):(s++,c())}let u=await Mn([...new Set([...o.values()].map(e=>e.file))].filter(e=>!a.has(e))),d=[];for(let e of o){let[t,{file:n}]=e;u.has(n)||a.has(n)?(i.set(t,n),c()):d.push(e)}Vn(d.map(([,{file:e}])=>e));let f=new Map;await Nn(d,Qp,async([e,{file:t,bytes:n}])=>{if(r?.aborted)return;let o=f.get(t);o||(o=ke(t,n,r).then(e=>e===`ok`,()=>!1),f.set(t,o)),await o?(i.set(e,t),a.add(t)):s++,c()})}return Ln(a),{stored:i,failed:s}}var em=()=>R()===`file`;function tm(e,t){let n=new Set;for(let r of e){for(let e of[r.sound,r.exampleSound])e&&t.has(e)&&kn(e,`sound`)&&n.add(e);r.image&&t.has(r.image)&&kn(r.image,`image`)&&n.add(r.image)}return[...n]}function nm(e,t){let n=t.get(e);return n||(n=gs().find(t=>t.name===e)?.id??ys(e),t.set(e,n)),n}function rm(e,t,n){let r=N(),i=y()||void 0,a=new Date().toISOString(),o=new Map,s=new Map;for(let c of e){let e=nm(c.deck||t,o),l=s.get(c.word);l?l.setIds.includes(e)||l.setIds.push(e):s.set(c.word,{word:c.word,base_form:c.word,meaning:c.meaning,meaning_lang:i,level:``,...c.reading&&{reading:c.reading},...c.example&&{example:c.example},...c.notes&&{notes:c.notes},...c.sound&&n.has(c.sound)&&{audio:n.get(c.sound)},...c.exampleSound&&n.has(c.exampleSound)&&{example_audio:n.get(c.exampleSound)},...c.image&&n.has(c.image)&&{image:n.get(c.image)},setIds:[e],chats:r?[r]:[],langs:[Zo()],dateAdded:a})}let{wordbook:c,added:l,merged:u}=Zr(z(),[...s.values()]);return B(c),{added:l,updated:u,setIds:[...o.values()]}}var im={word:`anki.fWord`,meaning:`anki.fMeaning`,reading:`anki.fReading`,example:`anki.fExample`,notes:`anki.fNotes`},am=(e,t)=>{let n=n=>e&&t[n]>=0?_o(fo(e.fields[t[n]]??``)).text:``;return h(`anki.sample`,{word:n(`word`)||`—`,meaning:n(`meaning`)||`—`})};async function om(e){x(h(`anki.reading`),`info`,2e3);let t;try{t=await Yp(e)}catch(e){return console.error(`[Polyglot] Anki import:`,e),x(e instanceof Vp&&e.message===`stub collection`?h(`anki.stub`):h(`anki.fail`,{msg:e instanceof Error?e.message:String(e)}),`err`,8e3),[]}let n=So(t.noteTypes,t.notes);return n.length?sm(e.name,t,n):(x(h(`wb.importNone`),`warn`),[])}function sm(e,t,n){return new Promise(r=>{let i=em(),a=new AbortController,o=!1,s=document.createElement(`div`);s.className=`pg-dim`,M(s,j`
            <div class="pg-dialog pg-doc-dialog pg-deck-dialog" role="dialog" aria-modal="true">
                <h3 class="pg-doc-title">${h(`anki.title`,{file:e})}</h3>
                <div class="pg-doc-body">
                    ${n.map(({type:e,count:t,sample:n,mapping:r})=>j`
                    <fieldset class="pg-anki-type" data-type="${e.id}">
                        <legend>
                            <label><input type="checkbox" data-include checked> <b>${e.name}</b>
                            <span class="pg-anki-count">${h(`anki.notes`,{n:t})}</span></label>
                        </legend>
                        <div class="pg-anki-map">${vo.map(t=>j`
                            <label>
                                <span>${h(im[t])}</span>
                                <select class="pg-set-select" data-target="${t}">
                                    <option value="-1">${h(`anki.none`)}</option>
                                    ${e.fields.map((e,n)=>j`<option value="${n}" ${r[t]===n&&j`selected`}>${e}</option>`)}
                                </select>
                            </label>`)}
                        </div>
                        <div class="pg-anki-sample">${am(n,r)}</div>
                    </fieldset>`)}
                    ${i?j`<label class="pg-anki-media"><input type="checkbox" data-media checked> <span></span></label>`:j`<p class="pg-anki-hint">${h(`anki.mediaUnavailable`)}</p>`}
                    <p class="pg-anki-hint">${h(`anki.hint`)}</p>
                    <div class="pg-anki-progress" hidden></div>
                </div>
                <div class="pg-dialog-row">
                    <button class="pg-btn pg-btn-secondary" data-anki="cancel">${h(`anki.cancel`)}</button>
                    <button class="pg-btn pg-btn-primary" data-anki="import">${h(`anki.import`)}</button>
                </div>
            </div>`);let l=e=>s.querySelector(e),u=[...s.querySelectorAll(`.pg-anki-type`)],d=e=>Object.fromEntries(vo.map(t=>[t,Number(e.querySelector(`[data-target="${t}"]`)?.value??-1)])),f=()=>new Map(u.filter(e=>e.querySelector(`[data-include]`)?.checked).map(e=>[Number(e.dataset.type),d(e)])),p=()=>{let e=l(`.pg-anki-media span`);e&&(e.textContent=h(`anki.media`,{n:tm(xo(t.notes,f()),t.media).length}))};p(),s.addEventListener(`change`,e=>{let t=e.target.closest(`.pg-anki-type`);if(t){let e=n.find(e=>e.type.id===Number(t.dataset.type)),r=t.querySelector(`.pg-anki-sample`);r&&(r.textContent=am(e?.sample,d(t))),t.classList.toggle(`pg-anki-off`,!t.querySelector(`[data-include]`)?.checked)}p()});let m=e=>{a.abort(),window.removeEventListener(`keydown`,ee,!0),s.remove(),r(e)},ee=e=>{e.key===`Escape`&&(e.stopPropagation(),o||m([]))};window.addEventListener(`keydown`,ee,!0),s.addEventListener(`pointerdown`,e=>{e.target===s&&!o&&m([])});let te=async()=>{let n=f();if([...n.values()].some(e=>e.word<0)){x(h(`anki.noWord`),`warn`,4e3);return}let r=xo(t.notes,n);if(!r.length){x(h(`wb.importNone`),`warn`);return}o=!0;let i=s.querySelectorAll(`input, select, [data-anki="import"]`);i.forEach(e=>{e.disabled=!0});let u=l(`.pg-anki-progress`);try{let n=new Map,i=l(`[data-media]`)?.checked?tm(r,t.media):[];if(i.length&&u){u.hidden=!1;let e=await $p(i,t.readMedia,e=>{u.textContent=h(`anki.progressMedia`,{done:e.done,total:e.total})},a.signal);if(a.signal.aborted)return;n=e.stored,e.failed&&x(h(`anki.mediaFailed`,{n:e.failed}),`warn`,6e3)}let o=rm(r,e.replace(/\.(apkg|colpkg)$/i,``),n);x(h(`anki.done`,{added:o.added,updated:o.updated,sets:o.setIds.length}),`ok`,5e3),m(o.setIds)}catch(e){c(`anki`,`import: ${se(e)}`),x(h(`anki.importFailed`,{msg:se(e)}),`err`,8e3),o=!1,i.forEach(e=>{e.disabled=!1}),u&&(u.hidden=!0)}};s.addEventListener(`click`,e=>{let t=e.target.closest(`[data-anki]`)?.dataset.anki;t===`cancel`&&m([]),t===`import`&&te()}),document.body.append(s),l(`[data-anki="import"]`)?.focus()})}var cm=new Set([...pe,`grammar`,`sentence`,`idiom`]),lm=/^["']?word["']?[,\t]/i;function um(e){let t=[],n=``,r=!1;for(let i=0;i<e.length;i++){let a=e[i];a===`"`&&r&&e[i+1]===`"`?(n+=`"`,i++):a===`"`?r=!r:a===`,`&&!r?(t.push(n),n=``):n+=a}return t.push(n),t}var dm=(e=``)=>e.replace(/<img[^>]*>/gi,``).replace(/\[sound:[^\]]*\]/gi,``).trim();function fm(e){let t=e.trim();return cm.has(t.toUpperCase())?t.toUpperCase():cm.has(t)?t:`A1`}var pm=[`word`,`base_form`,`meaning`,`level`,`original_form`,`context_meaning`];function mm(e,t){if(e){let t=e.map(e=>e.toLowerCase());return Object.fromEntries(pm.map(e=>[e,t.indexOf(e)]).filter(([,e])=>e>=0))}let n=+!!t;return{word:0,meaning:1,level:2,original_form:3+n,context_meaning:4+n}}function hm(e){let t=e.split(`
`).find(e=>e.trim()&&!e.startsWith(`#`))??``,n=/^#separator:tab/m.test(e)||t.includes(`	`)&&!t.startsWith(`"`),r=(n?e.split(`
`):Ds(e)).filter(e=>e.trim()&&!e.startsWith(`#`)),i=e=>(n?e.split(`	`).map(e=>e.replace(/^"|"$/g,``)):um(e).map(e=>e.replace(/^'(?=[=+\-@\t])/,``))).map(dm),a=e=>n?fo(e):e,o=mm(r.length&&lm.test(r[0].trim())?i(r.shift()):null,n),s=(e,t)=>o[t]===void 0?``:e[o[t]]??``,c=(e,t)=>a(s(e,t)),l=[];for(let e of r){let t=i(e),n=c(t,`word`),r=s(t,`meaning`);if(!n||!r)continue;let o=/Base:\s*([^<]+)/i.exec(r)?.[1],u=o?a(o).trim():void 0,d=c(t,`level`);l.push({word:n,base_form:c(t,`base_form`)||u||n,meaning:fo(r).replace(/\s*Base:[^.]*$/i,``).trim(),level:d?fm(d):`A1`,original_form:c(t,`original_form`)||void 0,context_meaning:c(t,`context_meaning`)||void 0})}return l}function gm(e,t){let n=hm(e),r=t.replace(/\.(csv|txt)$/i,``);if(!n.length)return x(h(`wb.importNone`),`warn`),null;let i=ys(r),a=N(),o=z(),s=new Map(o.map(e=>[e.word,e])),c=0,l=0;for(let e of n){let t=s.get(e.word);if(t){t.setIds??=[];let e=t.setIds.includes(i);e||t.setIds.push(i);let n=Fr(t,Zo());(Pr(t,a)||!e||n)&&l++;continue}let n={...e,meaning_lang:y()||void 0,setIds:[i],chats:a?[a]:[],langs:[Zo()],dateAdded:new Date().toISOString()};o.push(n),s.set(e.word,n),c++}return!c&&!l?(bs(i),x(h(`wb.importNone`),`warn`),null):(B(o),x(c&&l?h(`wb.importBoth`,{added:c,updated:l,set:r}):c?h(`wb.importNew`,{n:c,set:r}):h(`wb.importUpdate`,{n:l,set:r}),`ok`,4e3),{setId:i})}function _m(){return new Promise(e=>{let t=Object.assign(document.createElement(`input`),{type:`file`,accept:`.csv,.txt,.json,.zip,.apkg,.colpkg`});t.addEventListener(`change`,async()=>{let n=t.files?.[0];if(!n)e(null);else if(/\.(apkg|colpkg)$/i.test(n.name)){let t=await om(n);e(t.length?{setId:t.length===1?t[0]:void 0}:null)}else try{/\.(json|zip)$/i.test(n.name)?e(await lp(n)?{}:null):e(gm(await n.text(),n.name))}catch{x(h(`wb.importFail`),`err`),e(null)}}),t.click()})}function vm(e,t){let n=us();e.hidden=!1,M(e,n.length?j`
        <div class="pg-wb-dupes-head">
            <b>${h(`wb.dupTitle`,{n:n.length})}</b>
            <button class="pg-wb-row-btn" data-dupes="all">${h(`wb.dupMergeAll`)}</button>
            <button class="pg-wb-row-btn" data-dupes="close">${h(`wb.dupClose`)}</button>
        </div>
        <ul class="pg-wb-dupes-list">${n.map((e,t)=>j`
            <li>
                <span class="pg-wb-dupes-keep">${e[0].word}</span>
                <span class="pg-wb-dupes-rest">← ${e.slice(1).map(e=>e.word).join(`, `)}</span>
                <button class="pg-wb-row-btn" data-dupes="${t}">${h(`wb.dupMerge`)}</button>
            </li>`)}
        </ul>`:j`
        <div class="pg-wb-dupes-head">
            <span>${h(`wb.dupNone`)}</span>
            <button class="pg-wb-row-btn" data-dupes="close">${h(`wb.dupClose`)}</button>
        </div>`),e.onclick=r=>{let i=r.target.closest(`[data-dupes]`)?.dataset.dupes;if(!i)return;if(i===`close`){e.hidden=!0;return}let a=(i===`all`?n:[n[Number(i)]].filter(Boolean)).reduce((e,t)=>e+ds(t.map(e=>e.word)),0);a&&x(h(`wb.dupMerged`,{n:a}),`ok`,3e3),t(),vm(e,t)}}var ym=(...e)=>V().some(t=>e.includes(t.word)),bm=e=>j`${e.split(`
`).map((e,t)=>j`${t>0&&on(`<br>`)}${e}`)}`,xm=(e,t,n)=>j`
    <div class="pg-word-detail-header"><h2>${e}</h2>${n}${t}</div>`,Sm=(e,t,n=!1)=>(t||n)&&j`
    <div class="pg-grammar-section"><span class="pg-g-label">${e}</span>${t??``}</div>`;function Cm(e,t){return j`
        <button class="pg-btn pg-btn-primary pg-btn-full pg-detail-save" ${e&&j`disabled`}>
            ${e?h(`det.saved`):t}
        </button>`}var wm=()=>j`<button class="pg-detail-ignore" title="${h(`wb.ignoreTip`)}">${h(`det.ignore`)}</button>`;function Tm(e,t,n){let r=[...new Set(t.map(e=>e?.trim()).filter(e=>!!e))],i=e.querySelector(`.pg-detail-ignore`);i?.addEventListener(`click`,async()=>{let t=z().find(e=>r.includes(e.word))?.word;(!t||await w(h(`det.ignoreSaved`,{word:t}),{yes:h(`wb.ignore`)}))&&i.isConnected&&(n.ignore(r),M(e,j`<div class="pg-empty-hint">${h(`det.ignored`)}</div>`))})}function Em(e,t,n){let r=e.querySelector(`.pg-detail-save`);r?.addEventListener(`click`,()=>{n.save(t),r.textContent=h(`det.saved`),r.disabled=!0},{once:!0})}var Dm=j`
    <div class="pg-detail-skeleton">
        <div class="pg-skeleton pg-detail-skeleton-title"></div>
        <div class="pg-skeleton"></div><div class="pg-skeleton"></div>
        <div class="pg-skeleton"></div><div class="pg-skeleton"></div>
        <div class="pg-skeleton pg-detail-skeleton-button"></div>
    </div>`;function Om(e,t,n,r){M(e,j`
        ${xm(t,on(``))}
        <div class="pg-error-msg">${h(`det.failed`)} ${n}</div>
        <button class="pg-btn pg-btn-secondary pg-btn-full pg-detail-retry">${h(`det.retry`)}</button>`),e.querySelector(`.pg-detail-retry`)?.addEventListener(`click`,()=>r.lookup(t))}function km(e){return j`
        <div class="pg-det-notes-wrap">
            <div class="pg-det-notes-header">
                <span class="pg-det-notes-label">${h(`wb.noteLabel`)}</span>
                <button class="pg-icon-btn pg-det-note-edit" title="${h(`wb.noteTitle`)}">📝</button>
            </div>
            <div class="${e?`pg-det-notes-text`:`pg-det-notes-empty`}">${e||h(`wb.noteEmpty`)}</div>
            <div class="pg-wb-note-editor" hidden></div>
        </div>`}function Am(e,t,n){let r=t.base_form?.trim()||t.word,i=V().find(e=>e.word===r||e.word===t.word),a=C(),o=Re(a.language,t.word,a.dict_url_custom),s=Wd(t)??(i&&Wd(i));M(e,j`
        ${xm(Gd(t.word,s),j`<span class="pg-level-badge level-${ue(t.level)}">${ne(t.level)}</span>`,j`
            ${o&&j`<a href="${o}" target="_blank" rel="noopener" class="pg-icon-btn pg-dict-btn" title="${h(`tap.lookUp`)}">📖</a>`}
            ${Pd({saved:!!i?.audio,label:h(`wb.listen`)})}`)}
        <div class="pg-word-meta">
            <span class="pg-meta-base">${t.base_form?Gd(t.base_form,s):``}</span>
            <span class="pg-meta-pos">${t.pos_info??``}</span>
        </div>
        <div class="pg-word-meaning">${t.meaning}</div>
        ${(i?.seen??0)>0&&j`<div class="pg-det-seen">${h(`det.seen`,{n:i?.seen??0})}</div>`}
        ${i?.image&&j`<img class="pg-word-img" src="${Fe(i.image)}" alt="">`}
        ${(t.word_family?.length??0)>0&&j`
        <div class="pg-det-family">
            <span class="pg-det-family-label">${h(`det.wordFamily`)}</span>
            <div class="pg-det-family-chips">${t.word_family?.map(e=>j`
                <button class="pg-det-family-chip" data-word="${e.form}" title="${e.meaning}">
                    <span class="pg-det-family-form">${e.form}</span>
                    <span class="pg-det-family-pos">${e.pos}</span>
                </button>`)}
            </div>
        </div>`}
        ${i&&km(i.notes)}
        ${Cm(!!i,h(`det.addWord`))}
        ${wm()}`),e.querySelector(`.pg-speak-btn`)?.addEventListener(`click`,()=>Od(r,b(),{audio:i?.audio,keep:i&&{word:i.word,field:`audio`}})),e.querySelector(`.pg-det-family-chips`)?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-word]`)?.dataset.word;t&&n.lookup(t)}),e.querySelector(`.pg-det-note-edit`)?.addEventListener(`click`,()=>Xd({editor:e.querySelector(`.pg-det-notes-wrap .pg-wb-note-editor`),preview:e.querySelector(`.pg-det-notes-wrap > :is(.pg-det-notes-text, .pg-det-notes-empty)`),onSaved:()=>Am(e,t,n)},r)),i||Em(e,t,n),Tm(e,[t.word,t.base_form,i?.word],n)}function jm(e,t,n){let r=ym(t.pattern);M(e,j`
        ${xm(t.pattern,j`<span class="pg-level-badge level-grammar">${h(`det.gram`)}</span>`)}
        ${Sm(h(`det.meaning`),t.meaning,!0)}
        ${Sm(h(`det.structure`),t.structure,!0)}
        ${Sm(h(`det.words`),t.words_used,!0)}
        ${Cm(r,h(`det.addGram`))}`),r||Em(e,{word:t.pattern,base_form:t.pattern,meaning:t.meaning||``,level:`grammar`,pos_info:[t.structure,t.words_used].filter(Boolean).join(` · `)},n)}function Mm(e,t,n){let r=t.base_form||t.phrase,i=ym(r);M(e,j`
        ${xm(t.phrase,j`<span class="pg-level-badge level-idiom">${h(`det.idiom`)}</span>`)}
        ${r!==t.phrase&&Sm(h(`det.baseForm`),r)}
        ${Sm(h(`det.meaning`),t.meaning,!0)}
        ${Sm(h(`det.context`),t.context_meaning)}
        ${Cm(i,h(`det.addToWb`))}
        ${wm()}`),Tm(e,[t.phrase,r],n),i||Em(e,{word:t.phrase,base_form:r,meaning:t.meaning,level:`idiom`,context_meaning:t.context_meaning},n)}function Nm(e,t,n){if(!t)M(e,j`<div class="pg-empty-hint">${bm(h(`det.hint`))}</div>`);else switch(t.type){case`loading`:M(e,Dm);break;case`error`:Om(e,t.word,t.message,n);break;case`word`:Am(e,t.data,n);break;case`grammar`:jm(e,t.data,n);break;case`idiom`:Mm(e,t.data,n)}}var Pm=150,q=od(),Fm=[..._e,`sentence`],Im=[`new`,`learning`,`known`];function Lm(){let e={new:0,learning:0,known:0};for(let t of V())W(t)&&e[qu(t)]++;return e}function Rm(){let e=V();return{missed:e.filter(Ju).length,status:Lm(),noSound:Xl()?e.filter(_r).length:null}}var zm=null,Bm=(e,{missed:t,status:n,noSound:r})=>j`
    <div class="pg-run-bar pg-wb-reanalysis-bar" hidden></div>
    <div class="pg-run-bar pg-wb-sound-bar" hidden></div>

    <div class="pg-wb-search-row">
        <input type="search" class="pg-wb-search-inp" placeholder="${h(`wb.searchPh`)}" value="${q.query}" aria-label="${h(`wb.searchPh`)}">
        ${q.query&&j`<button class="pg-wb-search-clear" data-action="clear-search" title="${h(`wb.clearSearch`)}">✕</button>`}
    </div>

    <div class="pg-wb-filters">
        <div class="pg-filter-pills">${Fm.map(e=>j`
            <button class="pg-filter-pill ${q.level===e&&`active`}" data-action="level" data-level="${e}">
                ${e===`all`?h(`wb.filterAll`):ne(e)}
            </button>`)}
            ${(t>0||q.missed)&&j`
            <button class="pg-filter-pill pg-filter-missed ${q.missed&&`active`}" data-action="missed" title="${h(`wb.missedTip`)}">
                ${h(`wb.missed`,{n:t})}
            </button>`}
            ${((r??0)>0||q.noSound)&&j`
            <button class="pg-filter-pill ${q.noSound&&`active`}" data-action="no-sound" title="${h(`snd.noSoundTip`)}">
                ${h(`snd.noSound`,{n:r??0})}
            </button>`}
        </div>
        <div class="pg-wb-set-row">
            <select class="pg-set-select pg-status-select" aria-label="${h(`wb.allStatus`)}">
                <option value="all">${h(`wb.allStatus`)}</option>
                ${Im.map(e=>j`<option value="${e}" ${q.status===e&&j`selected`}>${h(`wb.status.${e}`)} ${n[e]}</option>`)}
            </select>
            <select class="pg-set-select" aria-label="${h(`wb.allSets`)}">
                <option value="all">${h(`wb.allSets`)}</option>
                ${e.map(e=>j`<option value="${e.id}" ${q.setId===e.id&&j`selected`}>${e.name}</option>`)}
            </select>
            <button class="pg-icon-btn" data-action="new-set" title="${h(`wb.newSetTitle`)}"><i class="fa-solid fa-plus"></i></button>
        </div>
    </div>

    <div class="pg-wb-count-row">
        <span class="pg-wb-count"></span>
        <span class="pg-wb-sel-count" hidden></span>
        <button class="pg-wb-row-btn pg-wb-row-btn-danger pg-wb-when-selected" data-action="delete-selected" hidden>${h(`wb.delete`)}</button>
        <button class="pg-wb-row-btn pg-wb-when-selected" data-action="reanalyse-selected" hidden>${h(`wb.reanalyse`)}</button>
        <button class="pg-wb-row-btn pg-wb-when-selected" data-action="known-selected" title="${h(`wb.markKnown`)}" hidden>${h(`wb.toKnown`)}</button>
        <button class="pg-wb-row-btn pg-wb-when-selected" data-action="ignore-selected" title="${h(`wb.ignoreTip`)}" hidden>${h(`wb.ignore`)}</button>
        ${r!==null&&j`
        <button class="pg-wb-row-btn pg-wb-when-selected" data-action="sounds-selected" title="${h(`snd.makeTip`)}" hidden>${h(`snd.make`)}</button>`}
        <span class="pg-wb-count-spacer"></span>
        <button class="pg-wb-row-btn" data-action="dupes" title="${h(`wb.dupFindTip`)}">${h(`wb.dupFind`)}</button>
        <button class="pg-wb-row-btn" data-action="select-all">${h(`wb.selectAll`)}</button>
    </div>
    <div class="pg-wb-dupes" hidden></div>

    <div class="pg-wb-list"></div>

    ${e.length>0&&j`
    <div class="pg-set-manager">
        <div class="pg-set-manager-title">${h(`wb.manageSets`)}</div>
        ${e.map(e=>j`
        <div class="pg-set-row">
            <span class="pg-set-name">${e.name}</span>
            <button class="pg-icon-btn pg-set-del" data-action="delete-set" data-id="${e.id}" title="${h(`wb.deleteSet`)}">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>`)}
    </div>`}`,Vm=e=>e.querySelector(`.pg-wb-list`);function Hm(e){let t=Vm(e);if(!t)return;let n=Ef(t).length,r=t.querySelectorAll(`.pg-wb-row-chk`).length,i=e.querySelector(`.pg-wb-count`),a=e.querySelector(`.pg-wb-sel-count`);i&&(i.hidden=n>0),a&&(a.hidden=n===0,a.textContent=h(`wb.nSelected`,{n,total:r})),e.querySelectorAll(`.pg-wb-when-selected`).forEach(e=>{e.hidden=n===0});let o=e.querySelector(`[data-action="select-all"]`);o&&(o.textContent=h(r>0&&n===r?`wb.deselectAll`:`wb.selectAll`))}function Um(e){let t=Vm(e);if(!t)return;let n=wf(t,{filter:q,sets:gs(),refresh:()=>J(e),onSelect:()=>Hm(e)}),r=e.querySelector(`.pg-wb-count`),i=[Qo()&&es()?b():``,N()&&Xo()&&Yo()===`chat`?h(`wb.scopeChat`):``].filter(Boolean);r instanceof HTMLElement&&(r.title=r.textContent=[Tf(n,q),...i].join(` · `)),Hm(e)}var Wm={"clear-search":e=>{q.query=``,J(e)},dupes:e=>{let t=e.querySelector(`.pg-wb-dupes`);t&&vm(t,()=>Um(e))},missed:e=>{q.missed=!q.missed,J(e)},"no-sound":e=>{q.noSound=!q.noSound,J(e)},level:(e,t)=>{q.level=t.dataset.level??`all`,q.pos=``,J(e)},"new-set":async e=>{let t=(await v(h(`wb.newSet`),{hint:h(`wb.newSetHint`)}))?.trim();t&&(ys(t),J(e))},"select-all":e=>{let t=[...e.querySelectorAll(`.pg-wb-row-chk`)],n=t.every(e=>e.checked);t.forEach(e=>{e.checked=!n}),Hm(e)},"delete-selected":async e=>{let t=Vm(e),n=t?Ef(t):[];n.length&&await w(h(`wb.delConfirm`,{n:n.length}),{yes:h(`wb.delSetBtn`)})&&(rs(n),J(e))},"known-selected":e=>{let t=Vm(e),n=t?Ef(t):[];n.length&&(as(n,!0),J(e))},"ignore-selected":async e=>{let t=Vm(e),n=new Set(V().filter(W).map(e=>e.word)),r=(t?Ef(t):[]).filter(e=>n.has(e));r.length?await w(h(`wb.ignoreConfirm`,{n:r.length}),{yes:h(`wb.ignore`)})&&(os(r),J(e)):x(h(`wb.ignoreNone`),`info`)},"reanalyse-selected":e=>{let t=Vm(e),n=t?Ef(t):[];n.length&&ic({bar:()=>zm?.querySelector(`.pg-wb-reanalysis-bar`)??null,words:n,confirm:!0,onDone:()=>{zm&&Um(zm)}})},"sounds-selected":e=>{let t=Vm(e),n=t?Ef(t):[];n.length&&_u({bar:()=>zm?.querySelector(`.pg-wb-sound-bar`)??null,words:n,onDone:Y})},"delete-set":async(e,t)=>{let n=t.dataset.id??``,r=gs().find(e=>e.id===n)?.name??``;await w(h(`wb.delSet`,{name:r}),{yes:h(`wb.delSetBtn`)})&&(bs(n),q.setId===n&&(q.setId=`all`),J(e))}};function Gm(e){e.addEventListener(`click`,t=>{let n=t.target.closest(`[data-action]`);n&&!n.closest(`.pg-wb-list`)&&Wm[n.dataset.action??``]?.(e,n)});let t;e.addEventListener(`input`,n=>{let r=n.target;r.classList.contains(`pg-wb-search-inp`)&&(q.query=r.value,clearTimeout(t),t=setTimeout(()=>Um(e),Pm))}),e.addEventListener(`change`,t=>{let n=t.target;n.closest(`.pg-wb-list`)||(n.classList.contains(`pg-status-select`)?(q.status=n.value,J(e)):n.classList.contains(`pg-set-select`)&&(q.setId=n.value,J(e)))})}var Km=new WeakSet;function J(e){Vm(e)||(q.query=``);let t=Vm(e)?.scrollTop??0;zm=e,M(e,Bm(gs(),Rm())),tc(),Km.has(e)||(Gm(e),Km.add(e)),Um(e);let n=Vm(e);n&&(n.scrollTop=t)}function Y(){zm&&J(zm)}function qm(){zm=null}async function Jm(){let e=await _m();e&&(e.setId&&(q.setId=e.setId),Y())}function Ym(e,t){return ic({bar:e,onBusy:t,onDone:Y})}function Xm(e){if(!e.meaning_lang){let t=C();e.meaning_lang=t.native_lang===`custom`?t.native_lang_custom?.slice(0,10)||`custom`:t.native_lang??`en`}Ss(e)&&Y()}var Zm={subject:`pg-deep-role-subj`,verb:`pg-deep-role-verb`,auxiliary:`pg-deep-role-verb`,object:`pg-deep-role-obj`,complement:`pg-deep-role-comp`,modifier:`pg-deep-role-mod`,conjunction:`pg-deep-role-conj`,particle:`pg-deep-role-part`,article:`pg-deep-role-art`,preposition:`pg-deep-role-prep`,pronoun:`pg-deep-role-pron`},Qm={gap:8,charWidth:8.5,chipPadding:16,minChip:36,top:4,lane:14};function $m(e){let t=e.map(e=>Math.max(String(e.text??``).length*Qm.charWidth+Qm.chipPadding,Qm.minChip)),n=[],r=0;for(let e of t)n.push(r+e/2),r+=e+Qm.gap;let i=Math.max(0,r-Qm.gap),a=e.map((e,t)=>({from:t,to:e.head_idx??-1,label:e.dep_label??``})).filter(t=>t.to>=0&&t.to<e.length&&t.to!==t.from).sort((e,t)=>Math.abs(e.from-e.to)-Math.abs(t.from-t.to)),o=Qm.top+a.length*Qm.lane+6;return{width:i,height:o,paths:a.map((e,t)=>{let r=n[e.from],i=n[e.to],a=o-Qm.top-t*Qm.lane,s=a-Qm.lane*1.2;return{d:`M${r},${a} Q${(r+i)/2},${s} ${i},${a}`,labelX:(r+i)/2,labelY:s-2,label:e.label,forward:e.from<e.to}})}}var eh=0;function th(e){let{width:t,height:n,paths:r}=$m(e);if(!r.length)return on(``);let i=`pg-deep-arrow-${++eh}`;return j`
        <div class="pg-deep-arc-wrap">
            <svg class="pg-deep-arcs" width="${t}" height="${n}" viewBox="0 0 ${t} ${n}" aria-hidden="true">
                <defs>
                    <marker id="${i}" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M1 1L7 4L1 7" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </marker>
                </defs>
                ${r.map(e=>j`
                <g class="${e.forward?`pg-deep-arc-fwd`:`pg-deep-arc-back`}">
                    <path d="${e.d}" marker-end="url(#${i})"/>
                    ${e.label&&j`<text x="${e.labelX}" y="${e.labelY}" text-anchor="middle">${e.label}</text>`}
                </g>`)}
            </svg>
        </div>`}function nh(e){let t=e.tokens??[],n=e.grammar??[];return j`
        <div class="pg-deep-result">
            ${th(t)}
            <div class="pg-deep-tokens">${t.map((e,t)=>j`
                <span class="pg-deep-token ${Zm[e.role]??`pg-deep-role-mod`}" data-idx="${t}" title="${e.note??``}">
                    <span class="pg-deep-token-text">${e.text}</span>
                    <span class="pg-deep-token-label">${e.label}</span>
                </span>`)}
            </div>
            ${n.length>0&&j`
            <div class="pg-deep-grammar">${n.map(e=>j`
                <div class="pg-deep-gram-item">
                    <span class="pg-deep-gram-point">${e.point}</span>
                    <span class="pg-deep-gram-exp">${e.explanation}</span>
                </div>`)}
            </div>`}
            ${e.summary&&j`<div class="pg-deep-summary">${e.summary}</div>`}
        </div>`}var rh=j`
    <div class="pg-deep-skeleton">
        <div class="pg-skeleton"></div><div class="pg-skeleton"></div><div class="pg-skeleton"></div>
        <div class="pg-skeleton"></div><div class="pg-skeleton"></div>
    </div>`,ih=e=>typeof e==`string`?e:``,ah=e=>T(e)&&Array.isArray(e.tokens)?{...e,tokens:e.tokens.filter(e=>T(e)&&typeof e.text==`string`),grammar:(Array.isArray(e.grammar)?e.grammar:[]).filter(e=>T(e)&&typeof e.point==`string`).map(e=>({point:e.point,explanation:ih(e.explanation)})),summary:ih(e.summary)}:null,oh=new WeakMap;function sh(e){oh.get(e)?.abort()}async function ch(e,t,n){if(n.disabled)return;sh(t);let r=new AbortController;oh.set(t,r);let i=t.querySelector(`.pg-deep-area`);i||(i=Object.assign(document.createElement(`div`),{className:`pg-deep-area`}),t.querySelector(`.pg-tap-bubble-inner`)?.appendChild(i));let a=n.innerHTML;n.disabled=!0,n.setAttribute(`aria-busy`,`true`),M(n,j`<i class="fa-solid fa-spinner fa-spin"></i>`),M(i,rh);try{let{data:t}=await je.json({prompt:mt(e,b(),y()),signal:r.signal,accept:ah});r.signal.aborted||M(i,nh(t))}catch(e){r.signal.aborted||M(i,j`<div class="pg-deep-error">${h(`tap.deepFailed`)} (${se(e)})</div>`)}finally{n.innerHTML=a,n.disabled=!1,n.removeAttribute(`aria-busy`)}}var lh=j`
    <div class="pg-tap-bubble-inner pg-tap-loading">
        <div class="pg-tap-skeleton">
            <div class="pg-skeleton"></div><div class="pg-skeleton"></div><div class="pg-skeleton"></div>
        </div>
    </div>`,uh=e=>j`
    <div class="pg-tap-bubble-inner pg-tap-error"><span>${h(`tap.failed`,{msg:e})}</span></div>`,dh=(e,t)=>j`
    <span class="pg-tap-verb-chip">
        <b>${e.form}</b><span class="pg-tap-verb-arrow">→</span>${Gd(e.base,Wd(e))}
        <span class="pg-tap-verb-meaning">${e.meaning}</span>
        <button class="pg-tap-conj-btn" data-action="conjugate" data-verb="${t}" title="${h(`wb.conjTable`)}">📊</button>
        <button class="pg-tap-save-btn" data-action="save-verb" data-verb="${t}" title="${h(`wb.addWord`)}">＋</button>
    </span>`;function fh({translation:e,literal:t,key_verbs:n=[]}){return j`
        <div class="pg-tap-bubble-inner">
            <div class="pg-tap-translation">${e}</div>
            ${t&&t!==e&&j`<div class="pg-tap-literal">${t}</div>`}
            ${n.length>0&&j`<div class="pg-tap-verbs">${n.map(dh)}</div>`}
            <div class="pg-tap-actions">
                <button class="pg-tap-deep" data-action="deep" title="${h(`tap.deepTitle`)}">${h(`tap.deep`)}</button>
                <button class="pg-tap-save-sentence" data-action="save-sentence" title="${h(`tap.saveSentenceTitle`)}">${h(`tap.saveSentence`)}</button>
                <button class="pg-tap-close" data-action="close" title="${h(`tap.close`)}" aria-label="${h(`tap.close`)}"></button>
            </div>
        </div>`}function ph(e,t){e.textContent=t,e.disabled=!0}async function mh(e,t){let n=e.base||e.form,r=await pn(n,b()).catch(()=>null);Xm({word:e.form,base_form:n,meaning:e.meaning,level:e.level??``,reading:Ud(e),conj_cache:r??void 0}),ph(t,h(`tap.saved`))}function hh(e,t,n){let r=n.key_verbs??[];e.addEventListener(`click`,i=>{let a=i.target.closest(`button[data-action]`);if(!a)return;i.stopPropagation();let o=r[Number(a.dataset.verb)];switch(a.dataset.action){case`close`:gh(e);break;case`conjugate`:o&&Is(o.base,b(),{ai:je,getLang:b,getNativeLang:y});break;case`save-verb`:o&&mh(o,a);break;case`save-sentence`:Xm({word:t.trim().slice(0,300),base_form:``,meaning:n.translation,level:`sentence`}),ph(a,h(`wb.saved`));break;case`deep`:ch(t,e,a)}})}function gh(e){sh(e),e.remove()}function _h(e){return e.querySelector(`.pg-tap-bubble`)}function vh({textEl:e,anchorEl:t,sentence:n},r){let i=_h(e);if(i&&(gh(i),r.kind===`loading`&&i.dataset.sentence===n))return!1;let a=Object.assign(document.createElement(`div`),{className:`pg-tap-bubble`});switch(a.dataset.sentence=n,r.kind){case`loading`:M(a,lh);break;case`error`:M(a,uh(r.message));break;case`result`:M(a,fh(r.result)),hh(a,n,r.result)}return t?.parentNode===e?t.after(a):e.appendChild(a),!0}var yh=e=>Bu(Ru(e));function bh(e,t=!1,n=Date.now()){let r=yh(n),i=fa(),a=i.find(e=>e.d===r)??{d:r,n:0,r:0,a:0},o={...a,n:a.n+ +!!e.wasNew,r:a.r+ +!e.wasNew,a:a.a+ +!!e.forgot};Sa({days:[...i.filter(e=>e.d!==r),o]},t)}function xh(e=1,t=Date.now()){let n=yh(t),r=fa(),i=r.find(e=>e.d===n)??{d:n,n:0,r:0,a:0};Sa({days:[...r.filter(e=>e.d!==n),{...i,o:(i.o??0)+e}]},!0)}var Sh=(e=Date.now())=>fa().find(t=>t.d===yh(e))?.n??0,Ch={min:10,max:20},wh=e=>W(e)&&!Gu(e),Th=e=>({word:e.word,meaning:e.meaning??``}),Eh=(e,t)=>We(e).slice(0,t);function Dh(e,t=Math.random){let n=Ch.min+Math.floor(t()*(Ch.max-Ch.min+1));return Eh(e.filter(wh),n).map(Th)}function Oh(e,t=5){return Eh(e.filter(e=>e.level===`grammar`&&e.word.trim()),t).map(e=>({pattern:e.word,meaning:e.meaning??``}))}function kh(e,t=3){return Eh(e.filter(e=>e.pos===`verb`&&W(e)&&!Gu(e)),t).map(e=>({word:e.base_form?.trim()||e.word,meaning:e.meaning??``}))}var Ah=e=>(e??``).normalize(`NFKC`).toLowerCase().trim();function jh(e,t,n=Date.now()){let r=new Map;for(let t of e)if(W(t))for(let e of[Ah(t.word),Ah(t.base_form)])e&&!r.has(e)&&r.set(e,t);let i=new Set;for(let e of t){let t=r.get(Ah(e));!t||Wu(t)||Gu(t)||(t.srs_due??1/0)<=n||(t.srs_due=n,i.add(t))}return[...i]}var Mh=864e5,Nh=e=>Math.round(Date.UTC(+e.slice(0,4),e.slice(5,7)-1,+e.slice(8,10))/Mh),Ph=e=>e.n+e.r+(e.o??0),Fh=e=>Ph(e)>0;function Ih(e,t,n=Date.now()){let r=Ru(n),i=new Map(e.map(e=>[Nh(e.d),e])),a=new Set([...i].filter(([,e])=>Fh(e)).map(([e])=>e)),o=a.has(r),s=0;for(let e=o?r:r-1;a.has(e);e--)s++;let c=0,l=0,u=NaN;for(let e of[...a].sort((e,t)=>e-t))l=e===u+1?l+1:1,c=Math.max(c,l),u=e;let d=0,f=0;for(let e=r-29;e<=r;e++){let t=i.get(e);t&&(d+=t.n+t.r,f+=t.a)}return{streak:s,best:c,studiedToday:o,day:r,counts:new Map([...i].filter(([,e])=>Fh(e)).map(([e,t])=>[e,Ph(t)])),today:i.get(r)??{d:Bu(r),n:0,r:0,a:0},accuracy:d?Math.max(0,1-f/d):null,ratings30:d,ahead:id(t,7,n),words:t.length,known:t.filter(Gu).length,due:nd(t,n)}}var Lh=864e5,Rh=e=>new Date(e*Lh),zh=e=>j`${e.split(`
`).map((e,t)=>j`${t>0&&on(`<br>`)}${e}`)}`;function Bh(e){let t=[e.streak===0?h(`rec.start`):e.studiedToday?``:h(`rec.keepUp`,{n:e.streak+1}),e.best>1?h(`rec.best`,{n:e.best}):``].filter(Boolean).join(` · `);return j`
        <div class="pg-record-streak"><b>${e.streak}</b><span>${h(`rec.streakUnit`)}</span></div>
        ${t&&j`<div class="pg-record-sub">${t}</div>`}`}function Vh(e){let t=Rh(e.day),n=t.getUTCFullYear(),r=t.getUTCMonth(),i=Math.round(Date.UTC(n,r,1)/Lh),a=Math.round(Date.UTC(n,r+1,0)/Lh),o=Rh(i).getUTCDay(),s=t=>t>=i&&t<=a&&e.counts.has(t),c=Array.from({length:o},()=>j`<span></span>`);for(let t=i;t<=a;t++){let n=Rh(t).getUTCDay(),r=Rh(t).toLocaleDateString(void 0,{month:`short`,day:`numeric`,timeZone:`UTC`}),i=[`pg-mday`,s(t)&&`pg-mday-on`,s(t)&&n>0&&s(t-1)&&`pg-join-l`,s(t)&&n<6&&s(t+1)&&`pg-join-r`,t===e.day&&`pg-mday-today`,t>e.day&&`pg-mday-future`].filter(Boolean).join(` `),a=s(t)?h(`rec.cell`,{date:r,n:e.counts.get(t)??0}):r;c.push(j`<span class="${i}" title="${a}"><span>${Rh(t).getUTCDate()}</span></span>`)}let l=Array.from({length:7},(e,t)=>Rh(i-o+t).toLocaleDateString(void 0,{weekday:`narrow`,timeZone:`UTC`}));return j`
        <div class="pg-month">
            <div class="pg-month-title">${t.toLocaleDateString(void 0,{month:`long`,timeZone:`UTC`})}</div>
            <div class="pg-month-grid pg-month-wd">${l.map(e=>j`<span>${e}</span>`)}</div>
            <div class="pg-month-grid">${c}</div>
        </div>`}function Hh(e,t){let n=e.accuracy===null?`—`:`${Math.round(e.accuracy*100)}%`,r=e.due+t,i=(e,t,n)=>n?j`<button class="pg-record-stat pg-record-go" data-go="${n}"><span class="pg-record-val">${e}</span><span class="pg-record-lab">${t} ›</span></button>`:j`<div class="pg-record-stat"><span class="pg-record-val">${e}</span><span class="pg-record-lab">${t}</span></div>`;return j`
        <div class="pg-record-stats">
            ${i(Ph(e.today),h(`rec.today`))}
            ${i(r,h(`rec.due`),r>0?`review`:void 0)}
            ${i(n,h(`rec.accuracy`))}
            ${i(`${e.known}/${e.words}`,h(`rec.words`))}
        </div>`}function Uh(e,t){let n=Math.max(1,...e);return j`
        <div class="pg-record-ahead">
            <span class="pg-record-ahead-lab">${h(`rec.ahead`)}</span>
            <span class="pg-record-ahead-bars">${e.map((e,r)=>{let i=Rh(t+r).toLocaleDateString(void 0,{weekday:`narrow`,timeZone:`UTC`});return j`<span class="pg-record-ab" title="${i}: ${e}">
                    <i style="height:${e?Math.max(15,Math.round(100*e/n)):0}%"></i><b>${i}</b></span>`})}</span>
            <span class="pg-record-ahead-lab">${h(`rec.aheadTotal`,{n:e.reduce((e,t)=>e+t,0)})}</span>
        </div>`}function Wh(e,t){let n=V().filter(W),r=Ih(fa(),n),i=Math.min(n.filter(Ku).length,Math.max(0,(C().srs_new_per_day??20)-r.today.n));M(e,j`
        <div class="pg-record">
            ${Bh(r)}
            ${Vh(r)}
            ${Hh(r,i)}
            ${Uh(r.ahead,r.day+1)}
            <div class="pg-empty-hint pg-record-hint">${zh(h(`det.hint`))}</div>
        </div>`),e.querySelector(`[data-go="review"]`)?.addEventListener(`click`,t)}var Gh=e=>/japanese|日本語|chinese|中文|汉语|普通话|mandarin|cantonese|korean|한국어/i.test(e),Kh={A1:[30,50],A2:[60,80],B1:[100,150],B2:[150,200],C1:[220,260],C2:[300,400]},qh={A1:[80,150],A2:[150,250],B1:[250,400],B2:[400,600],C1:[600,800],C2:[800,1e3]};function Jh(e,t){let n=Gh(t),[r,i]=(n?qh:Kh)[e]??(n?qh.B1:Kh.B1);return{min:r,max:i,unit:n?`chars`:`words`}}function Yh(e,t){return t===`chars`?e.replace(/\s/g,``).length:e.split(/\s+/).filter(e=>/[\p{L}\p{N}]/u.test(e)).length}var X=e=>typeof e==`string`?e.trim():``,Xh=(e,t)=>Array.isArray(e)?e.map(X).filter(Boolean).slice(0,t):[];function Zh(e){if(!T(e))return null;let t=X(e.instructions);if(!t)return null;let n=e.register===`formal`||e.register===`informal`?e.register:`neutral`;return{title:X(e.title),instructions:t,points:Xh(e.points,6),register:n,native:X(e.instructions_native)}}var Qh=[`task`,`coherence`,`accuracy`,`range`],$h=new Set([`grammar`,`vocabulary`,`spelling`,`punctuation`,`register`,`style`]),eg=e=>{let t=typeof e==`number`?e:typeof e==`string`?Number(e):NaN;return Number.isFinite(t)?Math.max(0,Math.min(3,Math.round(t))):0};function tg(e){return t=>{if(!T(t)||!T(t.scores))return null;let n=t.scores,r=X(t.level).toUpperCase(),i=(Array.isArray(t.errors)?t.errors:[]).filter(T).map(e=>({original:X(e.original),correction:X(e.correction),type:$h.has(X(e.type))?X(e.type):`grammar`,explanation:X(e.explanation)})).filter(e=>e.original&&e.correction&&e.original!==e.correction).slice(0,40);return{scores:Object.fromEntries(Qh.map(e=>[e,eg(n[e])])),level:pe.includes(r)?r:``,summary:X(t.summary),corrected:X(t.corrected)||e,errors:i,model:X(t.model)}}}var ng=(e,t)=>t?[...e]:e.split(/(\s+)/).filter(Boolean),rg=4e6;function ig(e,t,n=!1){let r=ng(e,n),i=ng(t,n);if((r.length+1)*(i.length+1)>rg)return null;let a=i.length+1,o=new Uint16Array((r.length+1)*a);for(let e=r.length-1;e>=0;e--)for(let t=i.length-1;t>=0;t--)o[e*a+t]=r[e]===i[t]?o[(e+1)*a+t+1]+1:Math.max(o[(e+1)*a+t],o[e*a+t+1]);let s=[],c=(e,t)=>{let n=s[s.length-1];n?.kind===e?n.text+=t:s.push({kind:e,text:t})},l=0,u=0;for(;l<r.length&&u<i.length;)r[l]===i[u]?(c(`same`,r[l]),l++,u++):o[(l+1)*a+u]>=o[l*a+u+1]?c(`del`,r[l++]):c(`ins`,i[u++]);for(;l<r.length;)c(`del`,r[l++]);for(;u<i.length;)c(`ins`,i[u++]);return s}function ag(e){if(!T(e)||!Array.isArray(e.questions))return null;let t=e.questions.filter(T).map(e=>({sentence:X(e.sentence).replace(/_{3,}/g,`___`),hint:X(e.hint),answers:Xh(e.answers,5),point:X(e.point),explanation:X(e.explanation),...X(e.word)&&{word:X(e.word)}})).filter(e=>e.sentence.split(`___`).length===2&&e.answers.length>0);return t.length?t:null}var og=e=>e.normalize(`NFC`).toLocaleLowerCase().trim().replace(/\s+/g,` `).replace(/^[\p{P}\s]+|[\p{P}\s]+$/gu,``),sg=e=>e.normalize(`NFD`).replace(/\p{M}/gu,``).normalize(`NFC`);function cg(e,t){let n=og(e);if(!n)return`wrong`;let r=t.map(og);return r.includes(n)?`correct`:r.some(e=>sg(e)===sg(n))?`close`:`wrong`}var lg=4,ug=4,dg=3;function fg(e,t,n,r){let i=[],a=0;for(let o=d(t,n);o!==-1;o=d(t,n,o+r))i.push(e.slice(a,o)),a=o+r;if(!i.length)return null;let o=i[0].length;return i.push(e.slice(a)),{parts:i,answer:e.slice(o,o+r)}}function pg(e){let t=e.example?.trim();if(!t)return null;let n=t.toLocaleLowerCase(),r=n.length===t.length?n:t;for(let i of[e.example_form,e.word,e.base_form,e.original_form]){let e=i?.trim();if(!e)continue;let a=fg(t,r,r===n&&e.toLocaleLowerCase().length===e.length?e.toLocaleLowerCase():e,e.length);if(a)return a}let i=(e.base_form||e.word).toLocaleLowerCase();if(i.length<ug||/\s/.test(i)||f.test(i)||r!==n)return null;let a=i.slice(0,Math.max(ug,i.length-3)),o=null;for(let[e]of n.matchAll(/[\p{L}\p{M}]+/gu)){if(!e.startsWith(a)||e.length>i.length+dg)continue;let t=a.length;for(;t<i.length&&e[t]===i[t];)t++;let n=o&&t===o.shared&&Math.abs(e.length-i.length)<Math.abs(o.token.length-i.length);(!o||t>o.shared||n)&&(o={token:e,shared:t})}return o&&fg(t,n,o.token,o.token.length)}var mg=Mt;function hg(e){if(Wu(e))return`meaning`;let t=[`meaning`];return pg(e)&&t.push(`cloze`),e.word.trim().split(/\s+/).length<=lg&&t.push(`typing`),t[mg(`${e.word}\n${e.srs_reviewed_at??0}`)%t.length]}function gg(e,t){return cg(t,[e.word,e.base_form,e.reading].filter(e=>!!e?.trim()))}var _g=[{rating:0,key:`fl.again`,cls:`pg-srs-again`},{rating:1,key:`fl.hard`,cls:`pg-srs-hard`},{rating:2,key:`fl.good`,cls:`pg-srs-good`},{rating:3,key:`fl.easy`,cls:`pg-srs-easy`}],vg=10;function yg(e){let t=e=>(e<10?Math.round(e*10)/10:Math.round(e)).toLocaleString(m());return e<30?h(`fl.ivlDays`,{n:e}):e<365?h(`fl.ivlMonths`,{n:t(e/30)}):h(`fl.ivlYears`,{n:t(e/365)})}function bg(e){return j`
        <div class="pg-srs-rating">${_g.map(t=>j`
            <button class="pg-srs-btn ${t.cls}" data-action="rate" data-rating="${t.rating}">
                <span class="pg-srs-label">${h(t.key)}</span>
                <span class="pg-srs-preview">${t.rating===0?h(`fl.ivlSoon`):yg(e[t.rating])}</span>
            </button>`)}
        </div>
        <button class="pg-srs-known" data-action="set-known" title="${h(`wb.markKnown`)}">${h(`fl.knowIt`)}</button>`}var xg=e=>j`${e.split(`
`).map((e,t)=>j`${t>0&&on(`<br>`)}${e}`)}`,Sg=null;function Cg(e,t=!1){return t?j`${e.parts.map((e,t)=>j`${t>0&&j`<span class="pg-cloze-blank" aria-label="${h(`qz.typedBlank`)}"></span>`}${e}`)}`:j`${e.parts.map((t,n)=>j`${n>0&&j`<b class="pg-cloze-answer">${e.answer}</b>`}${t}`)}`}function wg(e){if(!e.example)return j`
        <div class="pg-flash-example-wrap">
            <div class="pg-flash-example pg-flash-example-loading"><i class="fa-solid fa-spinner fa-spin"></i></div>
        </div>`;let t=pg(e);return j`
        <div class="pg-flash-example-wrap">
            <div class="pg-flash-example">${t?Cg(t):e.example}
                ${Pd({saved:!!e.example_audio,label:h(`fl.listenExample`),cls:`pg-flash-example-speak`,action:`speak-example`})}</div>
            ${e.example_translation&&j`<div class="pg-flash-example-trans">${e.example_translation}</div>`}
        </div>`}async function Tg(e,t,r){Sg?.abort();let i=new AbortController;Sg=i;let a=t.querySelector(`.pg-flash-example-wrap`);try{let{data:t}=await r.ai.json({prompt:pt(e.base_form||e.word,r.getLang(),r.getSettings().cefr_level,r.getNativeLang()),signal:i.signal,accept:re,missing:e=>n(e,ft)}),o=t.sentence?.trim();if(i.signal.aborted||!o)return;let s=z(),c=s.findIndex(t=>t.word===e.word),l=t.translation?.trim()||void 0,u=typeof t.form==`string`&&d(o,t.form.trim())!==-1?t.form.trim():void 0;if(c>=0){let e={...s[c],example:o,example_translation:l??s[c].example_translation};u?e.example_form=u:delete e.example_form,s[c]=gr(e,`example_audio`),B(s)}Object.assign(e,{example:o,example_translation:l??e.example_translation}),u?e.example_form=u:delete e.example_form,delete e.example_audio,a?.isConnected&&(a.outerHTML=wg(e).value)}catch(e){if(i.signal.aborted||!a?.isConnected)return;M(a,j`<div class="pg-flash-example pg-flash-example-err" title="${se(e)}">—</div>`)}finally{Sg===i&&(Sg=null)}}var Eg=class{root;deps;deck=[];index=0;flipped=!1;srs=!1;reviewed=0;extraNew=0;kinds=new Map;typed=null;setSelect;area;constructor(e,t,n){this.root=e,this.deps=t,this.srs=n,M(e,j`
            <div class="pg-flash-controls">
                <select class="pg-set-select pg-flash-set" aria-label="${h(`fl.allWords`)}">
                    <option value="all">${h(`fl.allWords`)}</option>
                    ${gs().map(e=>j`<option value="${e.id}">${e.name}</option>`)}
                </select>
                <button class="pg-btn pg-btn-secondary pg-srs-toggle" data-action="toggle-srs" title="${h(`fl.srsTitle`)}">
                    🔁 SRS <span class="pg-srs-badge" hidden>0</span>
                </button>
                <button class="pg-btn pg-btn-secondary pg-flash-shuffle" data-action="shuffle" title="${h(`fl.shuffle`)}">🔀</button>
            </div>
            <div class="pg-flash-area"></div>`),this.setSelect=e.querySelector(`.pg-flash-set`),this.area=e.querySelector(`.pg-flash-area`),e.addEventListener(`click`,e=>this.onClick(e)),e.addEventListener(`submit`,e=>{e.target.matches?.(`.pg-flash-type`)&&(e.preventDefault(),this.check())}),this.setSelect.addEventListener(`change`,()=>this.restart()),this.restart()}get card(){return this.deck[this.index]}kindOf(e){if(!this.srs)return`meaning`;let t=`${e.word}\n${e.srs_reviewed_at??0}`,n=this.kinds.get(t);return n||this.kinds.set(t,n=hg(e)),n}pool(){let e=this.setSelect.value;return V().filter(t=>W(t)&&(e===`all`||(t.setIds??[]).includes(e)))}newLeft(){let e=this.deps.getSettings().srs_new_per_day??20;return Math.max(0,e+this.extraNew-Sh())}restart(){let e=this.pool();this.deck=this.srs?rd(e,this.newLeft()):e,this.index=0,this.flipped=!1,this.typed=null,this.reviewed=0,this.updateControls(e),this.render()}updateControls(e=this.pool()){let t=this.srs?this.deck.length:rd(e,this.newLeft()).length,n=this.root.querySelector(`.pg-srs-badge`);n&&(n.textContent=String(t),n.hidden=t===0),this.root.querySelector(`.pg-srs-toggle`)?.classList.toggle(`pg-srs-active`,this.srs);let r=this.root.querySelector(`.pg-flash-shuffle`);r&&(r.disabled=this.srs)}emptyView(){if(!this.srs)return j`<div class="pg-empty-hint">${xg(h(`fl.noWords`))}</div>`;let e=this.pool(),t=ad(e),n=e.some(Ku);return j`
            <div class="pg-srs-complete">
                <div class="pg-srs-complete-icon">🎉</div>
                <div class="pg-srs-complete-title">${h(`fl.allDone`)}</div>
                <div class="pg-srs-complete-sub">${h(`fl.allDoneSub`,{n:this.reviewed})}</div>
                <div class="pg-srs-forecast">${h(`fl.forecast`,{tomorrow:t.tomorrow,week:t.week})}</div>
                ${n&&j`<button class="pg-btn pg-btn-secondary pg-btn-full" data-action="more-new">${h(`fl.moreNew`,{n:vg})}</button>`}
                <button class="pg-btn pg-btn-secondary pg-btn-full" data-action="browse-all">${h(`fl.backAll`)}</button>
            </div>`}cardView(e){let{flipped:t,srs:n}=this,r=n?`${h(`fl.remaining`,{n:this.deck.length})} · ${h(`fl.doneSess`,{n:this.reviewed})}`:`${this.index+1} / ${this.deck.length}`,i=n&&t?Qu(e):[],a=this.kindOf(e);return a===`meaning`?j`
            <div class="pg-flash-progress">${n&&Wu(e)&&j`<span class="pg-srs-new">${h(`fl.newBadge`)}</span> `}${Ju(e)&&j`<span class="pg-srs-new pg-missed-tag">${h(`wb.missedTag`)}</span> `}${r}</div>
            <div class="pg-flash-card ${t&&`pg-flash-flipped`}" data-action="flip">
                <div class="pg-flash-front">
                    <div class="pg-flash-word">${Gd(e.word,Wd(e))}</div>
                    ${e.pos_info&&j`<div class="pg-flash-pos">${e.pos_info}</div>`}
                    <div class="pg-flash-btn-row">
                        ${Pd({saved:!!e.audio,label:h(`fl.listen`),cls:`pg-flash-speak`,action:`speak`})}
                        ${this.deps.hasSpeechRecog()&&j`<button class="pg-flash-mic" data-action="mic" title="${h(`fl.mic`)}" data-active="false">🎤</button>`}
                    </div>
                </div>
                <div class="pg-flash-back">
                    ${t&&e.image&&j`<img class="pg-word-img" src="${Fe(e.image)}" alt="">`}
                    <div class="pg-flash-meaning">${e.meaning}</div>
                    ${e.base_form&&e.base_form!==e.word&&j`<div class="pg-flash-pos">${e.base_form}</div>`}
                    ${e.context_meaning&&e.context_meaning!==e.meaning&&j`<div class="pg-flash-ctx">${e.context_meaning}</div>`}
                    ${t&&wg(e)}
                    ${e.notes&&j`<div class="pg-flash-notes">${e.notes}</div>`}
                </div>
            </div>
            <div class="pg-pronun-result"></div>
            <div class="pg-flash-hint">${!t&&h(n?`fl.clickReveal`:`fl.tapReveal`)}</div>
            ${n&&t&&bg(i)}
            ${!n&&j`
            <div class="pg-flash-nav">
                <button class="pg-btn pg-btn-secondary" data-action="prev" ${this.index===0&&j`disabled`}>${h(`fl.prev`)}</button>
                <button class="pg-btn pg-btn-primary" data-action="flip">${h(t?`fl.showWord`:`fl.showMeaning`)}</button>
                <button class="pg-btn pg-btn-secondary" data-action="next" ${this.index===this.deck.length-1&&j`disabled`}>${h(`fl.next`)}</button>
            </div>`}`:this.askView(e,a,r,i)}askView(e,t,n,r){let{flipped:i,typed:a}=this,o=t===`cloze`?pg(e):null,s=a&&j`
            <div class="pg-flash-typed pg-flash-typed-${a.grade}">
                ${a.grade===`correct`?`✓`:j`✗ <s>${a.text}</s>`}
                ${a.grade===`close`&&j`<span class="pg-typed-close">${h(`qz.typedClose`)}</span>`}
            </div>`;return j`
            <div class="pg-flash-progress">${Ju(e)&&j`<span class="pg-srs-new pg-missed-tag">${h(`wb.missedTag`)}</span> `}${n}</div>
            <div class="pg-flash-card pg-flash-ask ${i&&`pg-flash-flipped`}" data-action="flip">
                <div class="pg-flash-front">
                    ${o?j`<div class="pg-flash-cloze">${Cg(o,!0)}</div>
                               ${e.example_translation&&j`<div class="pg-flash-example-trans">${e.example_translation}</div>`}`:j`<div class="pg-flash-meaning">${e.meaning}</div>
                               ${e.pos_info&&j`<div class="pg-flash-pos">${e.pos_info}</div>`}`}
                </div>
                <div class="pg-flash-back">
                    ${i&&e.image&&j`<img class="pg-word-img" src="${Fe(e.image)}" alt="">`}
                    <div class="pg-flash-word">${Gd(e.word,Wd(e))}</div>
                    ${s}
                    <div class="pg-flash-meaning">${e.meaning}</div>
                    ${e.base_form&&e.base_form!==e.word&&j`<div class="pg-flash-pos">${e.base_form}</div>`}
                    ${i&&wg(e)}
                    ${e.notes&&j`<div class="pg-flash-notes">${e.notes}</div>`}
                    <div class="pg-flash-btn-row">
                        ${Pd({saved:!!e.audio,label:h(`fl.listen`),cls:`pg-flash-speak`,action:`speak`})}
                        ${this.deps.hasSpeechRecog()&&j`<button class="pg-flash-mic" data-action="mic" title="${h(`fl.mic`)}" data-active="false">🎤</button>`}
                    </div>
                </div>
            </div>
            ${t===`typing`&&!i&&j`
            <form class="pg-flash-type">
                <input class="pg-soft-input pg-flash-input" type="text" autocomplete="off" spellcheck="false"
                    autocapitalize="off" enterkeyhint="done" placeholder="${h(`fl.typeHere`)}" aria-label="${h(`fl.typeHere`)}">
                <button type="submit" class="pg-btn pg-btn-primary">${h(`speak.check`)}</button>
            </form>`}
            <div class="pg-pronun-result"></div>
            <div class="pg-flash-hint">${!i&&h(t===`cloze`?`fl.clozeHint`:`fl.typeHint`)}</div>
            ${i&&bg(r)}`}render(){Sg?.abort();let e=this.card;M(this.area,e?this.cardView(e):this.emptyView()),e&&this.flipped&&!e.example&&Tg(e,this.area,this.deps),this.area.querySelector(`.pg-flash-input`)?.focus({preventScroll:!0})}check(){let e=this.card,t=this.area.querySelector(`.pg-flash-input`)?.value.trim();e&&t&&(this.typed={text:t,grade:gg(e,t)},this.flipped=!0,this.render())}stopMic(){this.deps.getActiveRecog()?.abort(),this.deps.setActiveRecog(null)}go(e){let t=this.index+e;t<0||t>=this.deck.length||(this.index=t,this.flipped=!1,this.typed=null,this.render())}rate(e){let t=this.card;if(!t)return;let n=z(),r=n.find(e=>e.word===t.word);if(!r)return;let{requeue:i,wasNew:a}=$u(r,e);B(n,!0),bh({wasNew:a,forgot:e===0},!0),this.deck.splice(this.index,1),i?this.deck.push(r):this.reviewed++,this.index=Math.min(this.index,Math.max(0,this.deck.length-1)),this.flipped=!1,this.typed=null,this.updateControls(),this.render()}setKnown(){let e=this.card;e&&(as([e.word],!0),this.deck=this.deck.filter(t=>t.word!==e.word),this.index=Math.min(this.index,Math.max(0,this.deck.length-1)),this.flipped=!1,this.typed=null,this.updateControls(),this.render())}onClick(e){let t=e.target.closest(`[data-action]`);if(!t||!this.root.contains(t))return;let n=t.dataset.action;n!==`mic`&&this.stopMic();let r=this.card;switch(n){case`flip`:this.flipped=!this.flipped,this.render();break;case`prev`:e.stopPropagation(),this.go(-1);break;case`next`:e.stopPropagation(),this.go(1);break;case`rate`:this.rate(Number(t.dataset.rating));break;case`set-known`:this.setKnown();break;case`toggle-srs`:this.srs=!this.srs,this.restart();break;case`browse-all`:this.srs=!1,this.restart();break;case`more-new`:this.extraNew+=vg,this.restart();break;case`shuffle`:if(this.srs)break;this.restart(),this.deck=We(this.deck),this.render();break;case`speak`:e.stopPropagation(),r&&this.deps.speak(r.word,this.deps.getLang(),{audio:r.audio,keep:{word:r.word,field:`audio`}});break;case`speak-example`:e.stopPropagation(),r?.example&&this.deps.speak(r.example,this.deps.getLang(),{audio:r.example_audio,keep:{word:r.word,field:`example_audio`}});break;case`mic`:{if(e.stopPropagation(),t.dataset.active===`true`){this.stopMic();break}let n=this.area.querySelector(`.pg-pronun-result`);r&&n&&this.deps.setActiveRecog(this.deps.runPronunCheck(r.word,t,n));break}}}};function Dg(e,t,n=!1){new Eg(e,t,n)}var Og=[{source:`words`,key:`speak.srcWords`},{source:`sentences`,key:`speak.srcSentences`}],kg=[{mode:`random`,key:`speak.modeRandom`},{mode:`dictation`,key:`speak.modeDictation`},{mode:`shadowing`,key:`speak.modeShadowing`}],Ag=/[^\p{L}\p{M}\p{N} ]/gu,jg=e=>e.normalize(`NFC`).toLowerCase().trim().replace(Ag,``);function Mg(e,t){let n=jg(e),r=jg(t);return n?r?Pe(n,r):0:100}var Ng=[{min:95,key:`tts.perfect`,cls:`pg-pronun-perfect`},{min:75,key:`tts.great`,cls:`pg-pronun-great`},{min:50,key:`tts.keep`,cls:`pg-pronun-ok`},{min:0,key:`tts.tryAgain`,cls:`pg-pronun-tryagain`}],Pg=e=>Ng.find(t=>e>=t.min)??Ng[Ng.length-1],Fg=e=>j`
    <span class="pg-speak-answer">${e.word}</span>
    ${e.meaning&&j`<span class="pg-speak-meaning">${e.meaning}</span>`}`;function Ig(e){let t=e===`dictation`;return j`
        <div class="pg-speak-card">
            <div class="pg-speak-card-badge">${h(t?`speak.modeDictation`:`speak.modeShadowing`)}</div>
            <button class="pg-speak-play-btn" data-action="play" title="${h(`speak.play`)}" aria-label="${h(`speak.play`)}">🔊</button>
            <div class="pg-speak-hint">${h(t?`speak.dictHint`:`speak.shadHint`)}</div>
            ${t?j`
            <textarea class="pg-speak-textarea text_pole" placeholder="${h(`speak.dictPh`)}" rows="2"
                      autocomplete="off" autocorrect="off" spellcheck="false"></textarea>
            <button class="pg-btn pg-btn-primary pg-btn-full" data-action="check">${h(`speak.check`)}</button>
            <div class="pg-pronun-result"></div>`:j`
            <div class="pg-speak-mic-row">
                <button class="pg-speak-mic-btn" data-action="mic" title="${h(`speak.mic`)}" aria-label="${h(`speak.mic`)}">🎤</button>
                <div class="pg-pronun-result"></div>
            </div>`}
            <div class="pg-speak-reveal" hidden></div>
            <button class="pg-btn pg-btn-secondary pg-btn-full pg-speak-next" data-action="next" hidden>${h(`speak.next`)}</button>
        </div>`}var Lg=class{root;sources;deps;pool=[];index=0;choice=`random`;source;recognition=null;area;constructor(e,t,n,r){this.root=e,this.sources=t,this.deps=n,this.source=r&&t[r].length?r:t.words.length?`words`:`sentences`,M(e,j`
            ${t.sentences.length>0&&j`
            <div class="pg-speak-mode-group pg-speak-source" role="group">${Og.map(e=>j`
                <button class="pg-speak-mode-btn ${e.source===this.source&&`active`}" data-action="source" data-source="${e.source}" ${!t[e.source].length&&j`disabled`}>${h(e.key)} ${t[e.source].length}</button>`)}
            </div>`}
            <div class="pg-speak-controls">
                <div class="pg-speak-mode-group" role="group">${kg.map(e=>j`
                    <button class="pg-speak-mode-btn ${e.mode===this.choice&&`active`}" data-action="mode" data-mode="${e.mode}">${h(e.key)}</button>`)}
                </div>
                <span class="pg-speak-progress"></span>
            </div>
            <div class="pg-speak-card-area"></div>`),this.area=e.querySelector(`.pg-speak-card-area`),e.addEventListener(`click`,e=>this.onClick(e)),e.addEventListener(`keydown`,e=>{let t=e.target;(e.key===`Enter`||e.key===` `)&&t.matches(`[role="button"][data-action]`)&&(e.preventDefault(),t.click())}),this.restart()}get entry(){return this.pool[this.index]}restart(){this.pool=We(this.sources[this.source]),this.index=0,this.render()}modeFor(){let e=this.choice===`random`?Math.random()<.5?`dictation`:`shadowing`:this.choice;return e===`shadowing`&&!this.deps.hasSpeechRecognition()?`dictation`:e}render(){this.recognition?.abort(),this.recognition=null;let e=this.root.querySelector(`.pg-speak-progress`);e&&(e.textContent=`${Math.min(this.index+1,this.pool.length)} / ${this.pool.length}`);let t=this.entry;t?(M(this.area,Ig(this.modeFor())),this.deps.speak(t.word,this.deps.getLang(),{audio:t.audio,keep:{word:t.word,field:`audio`},speaker:t.speaker})):M(this.area,j`
                <div class="pg-score-perfect">${h(`speak.done`)}</div>
                <button class="pg-btn pg-btn-secondary pg-btn-full pg-speak-restart" data-action="restart">${h(`speak.restart`)}</button>`)}reveal(){let e=this.entry,t=this.area.querySelector(`.pg-speak-reveal`);if(!e||!t)return;M(t,Fg(e)),t.hidden=!1;let n=this.area.querySelector(`.pg-speak-next`);n&&(n.hidden=!1)}check(e){let t=this.entry,n=this.area.querySelector(`textarea`)?.value.trim(),r=this.area.querySelector(`.pg-pronun-result`);if(!t||!n||!r)return;let i=Mg(t.word,n),a=Pg(i);r.className=`pg-pronun-result ${a.cls}`,r.textContent=`${i}% — ${h(a.key)}`,e.hidden=!0,this.deps.logStudy?.(),this.reveal()}listen(e){if(e.dataset.active===`true`){this.recognition?.abort();return}let t=this.area.querySelector(`.pg-pronun-result`),n=this.entry;n&&t&&(this.recognition=this.deps.runPronunciationCheck(n.word,e,t,()=>{this.deps.logStudy?.(),this.reveal()}))}onClick(e){let t=e.target.closest(`[data-action]`);if(t)switch(t.dataset.action){case`mode`:this.root.querySelectorAll(`[data-action="mode"]`).forEach(e=>e.classList.toggle(`active`,e===t)),this.choice=t.dataset.mode,this.restart();break;case`source`:this.root.querySelectorAll(`[data-action="source"]`).forEach(e=>e.classList.toggle(`active`,e===t)),this.source=t.dataset.source,this.restart();break;case`play`:this.entry&&this.deps.speak(this.entry.word,this.deps.getLang(),{audio:this.entry.audio,keep:{word:this.entry.word,field:`audio`},speaker:this.entry.speaker});break;case`check`:this.check(t);break;case`say-word`:t.dataset.word&&this.deps.speak(t.dataset.word,this.deps.getLang());break;case`mic`:this.listen(t);break;case`next`:this.index++,this.render();break;case`restart`:this.restart()}}};function Rg(e,t,n){let r=V().filter(e=>e.word?.trim()),i={words:r.filter(W),sentences:r.filter(e=>e.level===`sentence`)};!i.words.length&&!i.sentences.length?M(e,j`<div class="pg-error-msg">${h(`speak.noEntries`)}</div>`):new Lg(e,i,t,n)}var zg=12,Bg=4,Vg=600;function Hg(e,t){return V().filter(n=>n.level!==`grammar`&&n.level!==`sentence`&&(e===`all`||(e===`missed`?Ju(n):(n.setIds??[]).includes(e)))&&(t===`all`||n.level===t))}function Ug(e,t){let n=We(t).slice(0,zg),r=0,i={},a=(e,t)=>j`
        <button class="pg-match-card pg-match-${t}" data-side="${t}" data-word="${e.word}">${t===`word`?e.word:e.meaning}</button>`;M(e,j`
        <div class="pg-match-header">
            <span class="pg-match-score" aria-live="polite">0 / ${n.length}</span>
            <button class="pg-icon-btn pg-match-quit" title="${h(`mat.quit`)}" aria-label="${h(`mat.quit`)}"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="pg-match-grid">
            <div class="pg-match-col">${We(n).map(e=>a(e,`word`))}</div>
            <div class="pg-match-col">${We(n).map(e=>a(e,`mean`))}</div>
        </div>`);let o=()=>{let{word:t,mean:a}=i;if(!t||!a)return;if(i.word=i.mean=void 0,t.dataset.word!==a.dataset.word){t.classList.add(`pg-match-wrong`),a.classList.add(`pg-match-wrong`),setTimeout(()=>[t,a].forEach(e=>e.classList.remove(`pg-match-wrong`,`pg-match-selected`)),Vg);return}t.classList.add(`pg-match-correct`),a.classList.add(`pg-match-correct`);let o=e.querySelector(`.pg-match-score`);o&&(o.textContent=`${++r} / ${n.length}`),xh(),r===n.length&&setTimeout(()=>M(e,j`<div class="pg-match-complete">${h(`mat.done`,{n:n.length})}</div>`),Vg)};e.onclick=t=>{let n=t.target;if(n.closest(`.pg-match-quit`)){e.replaceChildren();return}let r=n.closest(`.pg-match-card`);if(!r||r.matches(`.pg-match-correct, .pg-match-wrong`))return;let a=r.dataset.side;i[a]?.classList.remove(`pg-match-selected`),i[a]=r,r.classList.add(`pg-match-selected`),o()}}function Wg(e){let t=Hg(`missed`,`all`).length;M(e,j`
        <div class="pg-match-setup">
            <div class="pg-match-setup-title">${h(`mat.title`)}</div>
            <div class="pg-match-options">
                <select class="pg-set-select pg-match-set" aria-label="${h(`mat.allWords`)}">
                    <option value="all">${h(`mat.allWords`)}</option>
                    ${t>0&&j`<option value="missed">${h(`wb.missed`,{n:t})}</option>`}
                    ${gs().map(e=>j`<option value="${e.id}">${e.name}</option>`)}
                </select>
                <select class="pg-set-select pg-match-level" aria-label="${h(`mat.allLevels`)}">
                    <option value="all">${h(`mat.allLevels`)}</option>
                    ${pe.map(e=>j`<option value="${e}">${e}</option>`)}
                </select>
            </div>
            <div class="pg-match-count"></div>
            <button class="pg-btn pg-btn-primary pg-btn-full pg-match-start">${h(`mat.start`)}</button>
        </div>
        <div class="pg-match-game"></div>`);let n=t=>e.querySelector(t)?.value??`all`,r=()=>Hg(n(`.pg-match-set`),n(`.pg-match-level`)),i=e.querySelector(`.pg-match-count`),a=e.querySelector(`.pg-match-start`),o=()=>{let e=r().length;i&&(i.textContent=e>=Bg?h(`mat.available`,{total:e,n:Math.min(e,zg)}):h(`mat.notEnough`,{n:e})),a&&(a.disabled=e<Bg)};e.querySelector(`.pg-match-options`)?.addEventListener(`change`,o),a?.addEventListener(`click`,()=>Ug(e.querySelector(`.pg-match-game`),r())),o()}var Gg=(e,t)=>j`
    <div class="pg-score-text">${h(`qz.score`,{n:e-t,total:e})}</div>
    ${t?j`<button class="pg-btn pg-btn-secondary pg-btn-full pg-quiz-retry">${h(`qz.retry`,{n:t})}</button>`:j`<div class="pg-score-perfect">${h(`qz.allCorrect`)}</div>`}`,Kg=4;function qg(e){return e.normalize(`NFC`).trim().replace(/\s+/g,` `).toLocaleLowerCase()}var Jg=e=>typeof e==`string`||typeof e==`number`?String(e).trim():``;function Yg(e,t){let n=Array.isArray(e)?e:e&&typeof e==`object`?Object.values(e):[],r=new Map;for(let e of n.map(Jg)){if(!e)continue;let n=qg(e);(!r.has(n)||e===t)&&r.set(n,e)}return[...r.values()]}function Xg(e,t){let n=qg(e),r=t.findIndex(e=>qg(e)===n);if(r!==-1)return r;let i=/^([a-z])[).:]?$/i.exec(e.trim());if(i){let e=i[1].toLowerCase().charCodeAt(0)-97;if(e<t.length)return e}let a=/^(\d+)[).:]?$/.exec(e.trim());if(a){let e=Number(a[1])-1;if(e>=0&&e<t.length)return e}return-1}function Zg(e,t,n){let r=t.slice(0,3),i=Math.floor(n()*(r.length+1));return[...r.slice(0,i),e,...r.slice(i)]}function Qg(e,t=Math.random){if(!e||typeof e!=`object`)return null;let n=e,r=Jg(n.question),i=Jg(n.answer),a=Yg(n.options,i);if(!r||!i)return null;let o=Xg(i,a);if(o===-1?a=Zg(i,a,t):i=a[o],a.length>Kg){let e=a.filter(e=>e!==i).slice(0,3);a=a.filter(t=>t===i||e.includes(t))}if(a.length<2)return null;let s=Jg(n.passage),c=Jg(n.word);return{type:Jg(n.type),question:r,options:a,answer:i,explanation:Jg(n.explanation),...s?{passage:s}:{},...c?{word:c}:{}}}function $g(e,t=Math.random){return(Array.isArray(e)?e:[]).map(e=>Qg(e,t)).filter(e=>e!==null)}function e_(e,t){let n=t.filter(e=>!!e);n.length&&e.material?.relearn(n)}var t_=e=>j`<div class="pg-quiz-note">${h(`qz.generalNote`,{level:e})}</div>`,n_=5,r_=oe(e=>e.question.trim().toLowerCase()),i_=new WeakMap;function a_(e){i_.get(e)?.abort();let t=new AbortController;return i_.set(e,t),t.signal}var o_=(e=4)=>j`${Array.from({length:e},()=>j`
    <div class="pg-skeleton-quiz pg-skeleton">
        <div class="pg-skeleton-line pg-skeleton"></div>
        <div class="pg-skeleton-q pg-skeleton"></div>
        <div class="pg-skeleton-opt pg-skeleton"></div>
        <div class="pg-skeleton-opt pg-skeleton"></div>
        <div class="pg-skeleton-opt pg-skeleton"></div>
        <div class="pg-skeleton-opt pg-skeleton"></div>
    </div>`)}`,s_=(e,t)=>j`<div class="${e===`error`?`pg-error-msg`:`pg-empty-hint`}">${t}</div>`;function c_(e,t,n){let r=ye[e.type]??e.type;return j`
        <div class="pg-quiz-card" data-idx="${t}">
            ${n&&j`<div class="pg-quiz-passage">${e.passage}</div>`}
            <div class="pg-quiz-type-badge">${r}</div>
            <div class="pg-quiz-q">Q${t+1}. ${e.question}</div>
            <div class="pg-quiz-options">${e.options.map(t=>j`
                <button class="pg-opt-btn" ${t===e.answer&&j`data-correct`}>${t}</button>`)}
            </div>
            <div class="pg-quiz-exp" hidden>
                <span class="pg-quiz-correct-label">Answer: ${e.answer}</span><br>
                ${e.explanation}
            </div>
        </div>`}function l_(e){return j`${e.map((t,n)=>c_(t,n,!!t.passage&&t.passage!==e[n-1]?.passage))}`}function u_(e,t){let n=t.wrongAnswers();n.some(t=>t.question===e.question)||t.saveWrongAnswers([...n,{type:e.type,question:e.question,options:e.options,answer:e.answer,explanation:e.explanation,savedAt:Date.now()}])}function d_(e,t,n){let r=e.container.querySelector(`.pg-quiz-score`);if(r){r.hidden=!1,M(r,Gg(t.length,n.length)),e_(e.deps,n.map(e=>t[e].word)),r.querySelector(`.pg-quiz-retry`)?.addEventListener(`click`,()=>{f_(e,n.map(e=>({...t[e],options:We(t[e].options)})),!0)});for(let r of n){let n=e.container.querySelector(`.pg-quiz-card[data-idx="${r}"] .pg-quiz-exp`);if(!n)continue;let i=Object.assign(document.createElement(`button`),{className:`pg-btn pg-btn-secondary pg-quiz-save-btn`,textContent:h(`qz.saveWrong`)});i.addEventListener(`click`,()=>{u_(t[r],e.deps),i.textContent=h(`qz.wrongSaved`),i.disabled=!0}),n.after(i)}}}function f_(e,t,n=!1){let{container:r,signal:i}=e;M(r,j`
        ${e.header}
        ${n&&j`<div class="pg-quiz-retry-header">${h(`qz.retryHeader`)}</div>`}
        ${l_(t)}
        <div class="pg-quiz-score" hidden></div>`);let a=new AbortController;i.addEventListener(`abort`,()=>a.abort(),{once:!0});let o=[],s=0;r.addEventListener(`click`,n=>{let r=n.target.closest(`.pg-opt-btn`),i=r?.closest(`.pg-quiz-card`);if(!r||!i||i.classList.contains(`pg-answered`))return;let c=`correct`in r.dataset;i.classList.add(`pg-answered`),r.classList.add(c?`pg-opt-correct`:`pg-opt-wrong`),i.querySelector(`.pg-quiz-exp`)?.removeAttribute(`hidden`),c||o.push(Number(i.dataset.idx)),e.deps.logStudy?.(),++s===t.length&&(a.abort(),d_(e,t,o.sort((e,t)=>e-t)))},{signal:a.signal})}async function p_(e,t,n,r=a_(e)){M(e,j`${n.header}${o_(n.skeleton)}`);try{let{data:i}=await t.ai.json({prompt:n.prompt,signal:r,accept:p(`questions`,$g),merge:r_});if(r.aborted)return;f_({container:e,deps:t,signal:r,header:n.header},i)}catch(t){if(r.aborted)return;M(e,s_(`error`,h(`qz.genFail`,{msg:t instanceof Error?t.message:String(t)})))}}async function m_(e,t,n=Se.quizHistoryMessages,r=5){let i=a_(e),a=(t.getContext().chat??[]).map(e=>({name:e.name,mes:Ho(e.mes??``,t.getSettings())})).filter(e=>e.mes);if(a.length<2){M(e,s_(`empty`,h(`qz.noMessages`)));return}let o=a.slice(-n).map(e=>`${e.name}: ${e.mes}`).join(`
`),{cefr_level:s}=t.getSettings();return p_(e,t,{prompt:it(o,t.getLang(),s,t.getNativeLang(),r)},i)}function h_(e,t){let n=t.getSettings().cefr_level,r=t.material?.words()??[],i=r.length>=5;return p_(e,t,{prompt:ot(t.getLang(),n,t.getNativeLang(),i?r:[]),header:i?void 0:t_(n)})}function g_(e,t){let{cefr_level:n}=t.getSettings();return p_(e,t,{prompt:st(t.getLang(),n,t.getNativeLang()),skeleton:6,header:j`
            <div class="pg-exam-header">
                <span class="pg-exam-title">${h(`qz.examTitle`)}</span>
                <span class="pg-exam-level">${n}</span>
            </div>`})}async function __(e,t){let n=a_(e),r=t.getLang(),i=t.getSettings().cefr_level;M(e,o_(3));let a=t.material?.verbs()??[],o=a.length?await t.getAllConjCache(r).catch(()=>[]):[];if(n.aborted)return;let s=e=>e.normalize(`NFKC`).toLowerCase().trim(),c=new Map(o.map(e=>[s(e.word),e.data])),l=a.map(e=>({word:e.word,table:c.get(s(e.word))}));return p_(e,t,{prompt:yt(l,r,i,t.getNativeLang()),skeleton:3,header:l.length?j`<div class="pg-quiz-drill-header">${l.map(e=>j`<span class="pg-quiz-drill-verb">${e.word}</span>`)}</div>`:t_(i)},n)}function v_(e,t){let n=a_(e),r=t.wrongAnswers();return r.length?(e.addEventListener(`click`,async n=>{n.target.closest(`.pg-targeted-clear`)&&await t.askConfirm(h(`qz.clearWrong`)+`?`)&&(t.saveWrongAnswers([]),a_(e),M(e,s_(`error`,h(`qz.noWrong`))))},{signal:n}),p_(e,t,{prompt:bt(We(r).slice(0,n_),t.getLang(),t.getNativeLang()),header:j`
            <div class="pg-quiz-targeted-header">
                <span>${h(`qz.wrongCount`,{n:r.length})}</span>
                <button class="pg-btn pg-btn-secondary pg-btn-compact pg-targeted-clear">${h(`qz.clearWrong`)}</button>
            </div>`},n)):(M(e,s_(`error`,h(`qz.noWrong`))),Promise.resolve())}var y_=10,b_=()=>j`${[0,1,2].map(()=>j`
    <div class="pg-skeleton-quiz pg-skeleton">
        <div class="pg-skeleton-line pg-skeleton"></div>
        <div class="pg-skeleton-q pg-skeleton"></div>
    </div>`)}`;function x_(e,t){let[n,r]=e.sentence.split(`___`);return j`
        <div class="pg-quiz-card pg-typed-card" data-idx="${t}">
            ${e.point&&j`<div class="pg-quiz-type-badge">${e.point}</div>`}
            <div class="pg-quiz-q">
                Q${t+1}. ${n}<form class="pg-typed-form"><input class="pg-soft-input pg-typed-input" type="text" autocomplete="off"
                    spellcheck="false" autocapitalize="off" enterkeyhint="done" aria-label="${e.hint||h(`qz.typedBlank`)}"></form>${r}
                ${e.hint&&j`<span class="pg-typed-hint">${e.hint}</span>`}
            </div>
            <div class="pg-quiz-exp" hidden>
                <span class="pg-quiz-correct-label">${h(`qz.typedAnswer`,{answer:e.answers.join(` / `)})}</span>
                <span class="pg-typed-close" hidden>${h(`qz.typedClose`)}</span><br>
                ${e.explanation}
            </div>
        </div>`}function S_(e,t){let n=t.wrongAnswers(),r=`${e.sentence} ${e.hint}`.trim();n.some(e=>e.question===r)||t.saveWrongAnswers([...n,{type:`grammar`,question:r,options:[],answer:e.answers[0],explanation:e.explanation,savedAt:Date.now()}])}function C_(e,t,n,r,i=!1){M(e,j`
        ${i&&j`<div class="pg-quiz-retry-header">${h(`qz.retryHeader`)}</div>`}
        ${n.map((e,t)=>x_(e,t))}
        <button class="pg-btn pg-btn-primary pg-btn-full pg-typed-grade-all">${h(`qz.typedGradeAll`)}</button>
        <div class="pg-quiz-score" hidden></div>`);let a=[],o=0,s=(i,s=!1)=>{let c=i.closest(`.pg-typed-card`);if(!c||c.classList.contains(`pg-answered`)||!i.value.trim()&&!s)return;let l=Number(c.dataset.idx),u=cg(i.value,n[l].answers);c.classList.add(`pg-answered`),i.readOnly=!0,i.classList.add(u===`correct`?`pg-typed-ok`:`pg-typed-bad`),c.querySelector(`.pg-quiz-exp`)?.removeAttribute(`hidden`),u===`close`&&c.querySelector(`.pg-typed-close`)?.removeAttribute(`hidden`),u!==`correct`&&a.push(l),t.logStudy?.();let d=[...e.querySelectorAll(`.pg-typed-input`)].find(e=>!e.readOnly);s||d?.focus({preventScroll:!1}),++o===n.length&&(e.querySelector(`.pg-typed-grade-all`)?.remove(),w_(e,t,n,a.sort((e,t)=>e-t),r))};e.addEventListener(`submit`,e=>{let t=e.target;if(!t.matches?.(`.pg-typed-form`))return;e.preventDefault();let n=t.querySelector(`.pg-typed-input`);n&&s(n)},{signal:r}),e.querySelector(`.pg-typed-grade-all`)?.addEventListener(`click`,()=>{for(let t of e.querySelectorAll(`.pg-typed-input`))s(t,!0)},{signal:r}),e.querySelector(`.pg-typed-input`)?.focus({preventScroll:!0})}function w_(e,t,n,r,i){let a=e.querySelector(`.pg-quiz-score`);if(a){a.hidden=!1,M(a,Gg(n.length,r.length)),e_(t,r.map(e=>n[e].word)),a.querySelector(`.pg-quiz-retry`)?.addEventListener(`click`,()=>{C_(e,t,r.map(e=>n[e]),a_(e),!0)});for(let a of r){let r=e.querySelector(`.pg-typed-card[data-idx="${a}"] .pg-quiz-exp`);if(!r)continue;let o=Object.assign(document.createElement(`button`),{className:`pg-btn pg-btn-secondary pg-quiz-save-btn`,textContent:h(`qz.saveWrong`)});o.addEventListener(`click`,()=>{S_(n[a],t),o.textContent=h(`qz.wrongSaved`),o.disabled=!0},{signal:i}),r.after(o)}}}async function T_(e,t){let n=a_(e),r=t.getSettings().cefr_level,i=t.material?.grammar()??[],a=t.material?.words()??[],o=i.length>0||a.length>=5,s=o?null:t_(r);M(e,j`${s}${b_()}`);try{let{data:c}=await t.ai.json({prompt:Tt(t.getLang(),r,t.getNativeLang(),y_,o?{grammar:i,words:a}:void 0),signal:n,accept:ag,merge:oe(e=>e.sentence)});if(n.aborted)return;if(C_(e,t,c,n),s){let t=document.createElement(`div`);M(t,s),e.prepend(...t.childNodes)}}catch(t){if(n.aborted)return;M(e,j`<div class="pg-error-msg">${h(`qz.genFail`,{msg:t instanceof Error?t.message:String(t)})}</div>`)}}var E_=()=>`chk_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`;function D_(e,t=Date.now()){Sa({checks:si([{...e,id:E_(),at:t},...da()])})}var O_=e=>si(da()).filter(t=>t.lang===e);function k_(e){Sa({checks:da().filter(t=>t.id!==e)})}function A_(e,t){Sa({checks:da().map(n=>{if(n.id!==e)return n;let{note:r,...i}=n;return t.trim()?{...i,note:t.trim()}:i})})}var j_=[{id:`letter`,icon:`✉️`,title:`wr.kindLetter`,desc:`wr.kindLetterDesc`},{id:`opinion`,icon:`💬`,title:`wr.kindOpinion`,desc:`wr.kindOpinionDesc`},{id:`scene`,icon:`🎭`,title:`wr.kindScene`,desc:`wr.kindSceneDesc`}],M_={task:`wr.cTask`,coherence:`wr.cCoherence`,accuracy:`wr.cAccuracy`,range:`wr.cRange`},N_=3e3,P_=null,F_=null;function I_(e){return h(e.unit===`chars`?`wr.lengthChars`:`wr.lengthWords`,{min:e.min,max:e.max})}function L_(e){let t=e.getSettings(),n=(e.getContext().chat??[]).map(e=>({name:e.name,mes:Ho(e.mes??``,t)})).filter(e=>e.mes).slice(-6).map(e=>`${e.name}: ${e.mes}`).join(`
`);return n.length>N_?n.slice(-3e3):n}var R_=e=>e instanceof Error?e.message:String(e),z_=()=>j`
    <div class="pg-quiz-modes">${j_.map(e=>j`
        <button class="pg-quiz-mode-btn" data-kind="${e.id}">
            <span class="pg-qmode-icon">${e.icon}</span>
            <span class="pg-qmode-title">${h(e.title)}</span>
            <span class="pg-qmode-desc">${h(e.desc)}</span>
        </button>`)}
        <button class="pg-quiz-mode-btn pg-quiz-mode-wide" data-kind="archive">
            <span class="pg-qmode-icon">🪄</span>
            <span class="pg-qmode-text">
                <span class="pg-qmode-title">${h(`wr.archive`)}</span>
                <span class="pg-qmode-desc">${h(`wr.archiveDesc`)}</span>
            </span>
            <span class="pg-qmode-count">${h(`wr.archiveCount`,{n:O_(Zo()).length})}</span>
        </button>
    </div>`,B_=()=>j`
    <div class="pg-skeleton-quiz pg-skeleton">
        <div class="pg-skeleton-line pg-skeleton"></div>
        <div class="pg-skeleton-q pg-skeleton"></div>
        <div class="pg-skeleton-opt pg-skeleton"></div>
        <div class="pg-skeleton-opt pg-skeleton"></div>
    </div>`;function V_(e,t){let{task:n}=e;return j`
        <div class="pg-quiz-card pg-write-task">
            <div class="pg-write-meta">${e.level} · ${h(`wr.reg_${n.register}`)} · ${I_(t)}</div>
            ${n.title&&j`<div class="pg-write-title">${n.title}</div>`}
            <div class="pg-write-instr">${n.instructions}</div>
            ${n.points.length>0&&j`<ul class="pg-write-points">${n.points.map(e=>j`<li>${e}</li>`)}</ul>`}
            ${n.native&&j`
                <button class="pg-link-btn" data-write="native">${h(`wr.showNative`)}</button>
                <div class="pg-write-native" hidden>${n.native}</div>`}
        </div>`}var H_=e=>j`<span class="pg-write-dots" aria-label="${e} / 3">${[0,1,2].map(t=>j`<i class="${t<e&&`on`}"></i>`)}</span>`;function U_(e,t,n){let r=ig(e,t,Gh(n)),i=r?.filter(e=>e.kind===`same`).reduce((e,t)=>e+t.text.length,0)??0;return!r||i<.3*Math.max(e.length,t.length)?j`${t}`:j`${r.map(e=>e.kind===`same`?j`${e.text}`:e.kind===`del`?j`<del>${e.text}</del>`:j`<ins>${e.text}</ins>`)}`}function W_(e,t,n){return j`
        <div class="pg-quiz-card pg-write-feedback">
            <div class="pg-write-level">
                ${t.level&&j`<b>${h(`wr.levelShown`,{level:t.level})}</b>`}
                <span class="pg-write-muted">${h(`wr.levelTarget`,{level:e.level})} · ${h(`wr.estimate`)}</span>
            </div>
            <div class="pg-write-scores">${Qh.map(e=>j`
                <div class="pg-write-score"><span>${h(M_[e])}</span>${H_(t.scores[e])}</div>`)}
            </div>
            ${t.summary&&j`<p class="pg-write-summary">${t.summary}</p>`}
            ${n&&j`<p class="pg-write-muted">${h(`wr.partial`)}</p>`}

            <div class="pg-write-head">${h(`wr.corrected`)}</div>
            <div class="pg-write-diff">${U_(e.rated??e.text,t.corrected,e.lang)}</div>

            ${t.errors.length>0&&j`
                <div class="pg-write-head">${h(`wr.errors`,{n:t.errors.length})}</div>
                <ul class="pg-write-errors">${t.errors.map(e=>j`
                    <li>
                        <div><del>${e.original}</del> → <ins>${e.correction}</ins> <span class="pg-write-type">${h(`wr.type_${e.type}`)}</span></div>
                        ${e.explanation&&j`<div class="pg-write-muted">${e.explanation}</div>`}
                    </li>`)}
                </ul>
                <button class="pg-wb-row-btn" data-write="save-errors">${h(`wr.saveErrors`)}</button>`}

            ${t.model&&j`
                <button class="pg-link-btn" data-write="model">${h(`wr.showModel`)}</button>
                <div class="pg-write-model-wrap" hidden>
                    <div class="pg-write-head">${h(`wr.model`)}</div>
                    <div class="pg-write-model">${t.model}</div>
                </div>`}
        </div>`}function G_(e,t){e.onclick=null,M(e,j`${z_()}<div class="pg-write-area"></div>`),e.querySelector(`.pg-quiz-modes`)?.addEventListener(`click`,n=>{let r=n.target.closest(`[data-kind]`)?.dataset.kind;r===`archive`?X_(e,t):r&&K_(e,t,r)})}async function K_(e,t,n){let r=t.getLang(),i=t.getSettings().cefr_level,a=Jh(i,r),o=n===`scene`?L_(t):``,s=e.querySelector(`.pg-write-area`)??e;if(n===`scene`&&!o){M(s,j`<div class="pg-empty-hint">${h(`wr.noScene`)}</div>`);return}F_?.abort();let c=F_=new AbortController;M(s,B_());try{let{data:s}=await t.ai.json({prompt:Ct(n,r,i,t.getNativeLang(),I_(a),o),signal:c.signal,accept:Zh});if(c.signal.aborted)return;P_={lang:r,level:i,kind:n,task:s,text:``},q_(e,t)}catch(e){if(c.signal.aborted)return;M(s,j`<div class="pg-error-msg">${h(`wr.taskFail`,{msg:R_(e)})}</div>`)}}function q_(e,t,n=!1){let r=P_;if(!r){G_(e,t);return}let i=Jh(r.level,r.lang);M(e,j`
        ${V_(r,i)}
        <textarea class="pg-soft-input pg-write-text" spellcheck="false" placeholder="${h(`wr.placeholder`)}"></textarea>
        <div class="pg-write-bar">
            <span class="pg-write-count"></span>
            <span class="pg-wb-count-spacer"></span>
            <button class="pg-wb-row-btn" data-write="new">${h(`wr.newTask`)}</button>
            <button class="pg-btn pg-btn-primary pg-btn-compact" data-write="rate">${h(`wr.rate`)}</button>
        </div>
        <div class="pg-write-result">${r.feedback&&W_(r,r.feedback,n)}</div>`);let a=e.querySelector(`.pg-write-text`),o=e.querySelector(`.pg-write-count`);if(!a||!o)return;let s=()=>{let e=Yh(a.value,i.unit);o.textContent=`${e} / ${I_(i)}`,o.classList.toggle(`pg-write-ok`,e>=i.min&&e<=i.max)};a.value=r.text,s(),a.addEventListener(`input`,()=>{r.text=a.value,s()}),e.onclick=n=>{let r=n.target.closest(`[data-write]`)?.dataset.write,i=(t,n)=>{let r=e.querySelector(t);r&&(r.hidden=!r.hidden,n.remove())};r===`new`&&(F_?.abort(),P_=null,G_(e,t)),r===`rate`&&J_(e,t),r===`native`&&i(`.pg-write-native`,n.target),r===`model`&&i(`.pg-write-model-wrap`,n.target),r===`save-errors`&&Y_(t,n.target)}}async function J_(e,t){let n=P_;if(!n)return;let r=Jh(n.level,n.lang),i=n.text.trim();if(Yh(i,r.unit)<Math.min(10,r.min)){x(h(`wr.tooShort`),`warn`,3e3);return}F_?.abort();let a=F_=new AbortController,o=e.querySelector(`.pg-write-result`),s=e.querySelector(`[data-write="rate"]`);o&&M(o,B_()),s&&(s.disabled=!0);try{let{data:o,partial:s}=await t.ai.json({prompt:wt(n.task,i,n.lang,n.level,t.getNativeLang(),I_(r)),signal:a.signal,accept:tg(i)});if(a.signal.aborted||P_!==n)return;n.rated!==i&&t.logStudy?.(),n.feedback=o,n.rated=i,q_(e,t,s),e.querySelector(`.pg-write-feedback`)?.scrollIntoView({behavior:`smooth`,block:`start`})}catch(e){if(a.signal.aborted)return;o&&M(o,j`<div class="pg-error-msg">${h(`wr.rateFail`,{msg:R_(e)})}</div>`)}finally{s&&F_===a&&(s.disabled=!1)}}function Y_(e,t){let n=P_?.feedback?.errors??[],r=e.wrongAnswers(),i=new Set(r.map(e=>e.question)),a=n.map(e=>({type:e.type===`vocabulary`?`vocab`:`grammar`,question:h(`wr.wrongQuestion`,{text:e.original}),options:[],answer:e.correction,explanation:e.explanation,savedAt:Date.now()})).filter(e=>!i.has(e.question));a.length&&e.saveWrongAnswers([...r,...a]),t.textContent=h(`qz.wrongSaved`),t.disabled=!0}function X_(e,t){let n=t.getLang(),r=O_(Zo()),i=e=>new Date(e).toLocaleDateString(void 0,{month:`short`,day:`numeric`});M(e,j`
        <div class="pg-write-bar">
            <span class="pg-write-title">${h(`wr.archive`)}</span>
            <span class="pg-wb-count-spacer"></span>
            <button class="pg-wb-row-btn" data-write="tasks">${h(`wr.backToTasks`)}</button>
        </div>
        ${r.length?r.map(e=>j`
        <div class="pg-quiz-card pg-check-card" data-id="${e.id}">
            <div class="pg-write-meta">${i(e.at)}</div>
            <div class="pg-check-original">${e.original}</div>
            <div class="pg-write-diff">${U_(e.original,e.grammar,n)}</div>
            ${e.natural&&e.natural!==e.grammar&&j`
                <div class="pg-check-natural"><span class="pg-write-type">${h(`wr.natural`)}</span> ${e.natural}</div>`}
            ${e.explanation&&j`<div class="pg-write-muted pg-check-why">${e.explanation}</div>`}
            ${e.note&&j`<div class="pg-check-note">${e.note}</div>`}
            <div class="pg-check-actions">
                <button class="pg-wb-row-btn" data-write="note">${h(`wr.note`)}</button>
                <button class="pg-wb-row-btn pg-wb-row-btn-danger" data-write="delete">${h(`wb.delete`)}</button>
            </div>
        </div>`):j`<div class="pg-empty-hint">${h(`wr.archiveEmpty`)}</div>`}`),e.onclick=async n=>{let i=n.target.closest(`[data-write]`),a=i?.closest(`[data-id]`)?.dataset.id,o=i?.dataset.write;if(o===`tasks`)G_(e,t);else if(a){if(o===`delete`&&k_(a),o===`note`){let e=await v(h(`wr.note`),{initial:r.find(e=>e.id===a)?.note??``});if(e===null)return;A_(a,e)}X_(e,t)}}}function Z_(e,t){P_&&(P_.lang!==t.getLang()||P_.level!==t.getSettings().cefr_level)&&(P_=null),P_?q_(e,t):G_(e,t)}function Q_(){F_?.abort(),F_=null}function $_(){if(!wl())return null;let e=C(),t=mc(e);if(t)return{kind:`azure`,cfg:t};let n=Tc(e);return n?{kind:`openai`,cfg:n}:null}function ev(e,t,n,r){gl();let i=$_(),a=Ec(C()),o=i?kl(e,b(),i,t,n,r,a&&{cfg:a,studyLang:b(),nativeLang:y()}):Cl(e,b(),t,n,r);return ml(o),o}var tv=()=>fl()||!!$_(),nv={ai:je,getContext:_,getSettings:C,getLang:b,getNativeLang:y,askConfirm:w,wrongAnswers:ua,saveWrongAnswers:e=>Sa({wrongAnswers:oi(e)}),getAllConjCache:e=>vn(e),logStudy:()=>xh(),material:{words:()=>Dh(V(`all`)),grammar:()=>Oh(V(`all`)),verbs:()=>kh(V(`all`)),relearn:e=>{let t=z(),n=jh(t,e);n.length&&(B(t),x(h(`qz.relearned`,{n:n.length}),`info`,4e3))}}},rv=[{id:`quick`,icon:`⚡`,title:`qz.modeQuick`,desc:`qz.modeQuickDesc`,run:e=>m_(e,nv,3,5)},{id:`full`,icon:`📝`,title:`qz.modeFull`,desc:`qz.modeFullDesc`,run:e=>m_(e,nv,6,20)},{id:`cloze`,icon:`✏️`,title:`qz.modeCloze`,desc:`qz.modeClozeDesc`,run:e=>h_(e,nv)},{id:`typed`,icon:`⌨️`,title:`qz.modeTyped`,desc:`qz.modeTypedDesc`,run:e=>T_(e,nv)},{id:`exam`,icon:`🎓`,title:`qz.modeExam`,desc:`qz.modeExamDesc`,run:e=>g_(e,nv)},{id:`conj`,icon:`🔀`,title:`qz.modeConj`,desc:`qz.modeConjDesc`,run:e=>__(e,nv)},{id:`targeted`,icon:`🎯`,title:`qz.modeTargeted`,desc:`qz.modeTargetedDesc`,run:e=>v_(e,nv),wide:!0}];function iv(e){M(e,j`
        <div class="pg-quiz-modes">${rv.map(e=>e.wide?j`
            <button class="pg-quiz-mode-btn pg-quiz-mode-wide" data-quiz="${e.id}">
                <span class="pg-qmode-icon">${e.icon}</span>
                <span class="pg-qmode-text">
                    <span class="pg-qmode-title">${h(e.title)}</span>
                    <span class="pg-qmode-desc">${h(e.desc)}</span>
                </span>
                <span class="pg-qmode-count">${h(`qz.wrongCount`,{n:ua().length})}</span>
            </button>`:j`
            <button class="pg-quiz-mode-btn" data-quiz="${e.id}">
                <span class="pg-qmode-icon">${e.icon}</span>
                <span class="pg-qmode-title">${h(e.title)}</span>
                <span class="pg-qmode-desc">${h(e.desc)}</span>
            </button>`)}
        </div>
        <div id="pg-quiz-container" class="pg-quiz-container"></div>`);let t=e.querySelector(`.pg-quiz-container`);e.querySelector(`.pg-quiz-modes`)?.addEventListener(`click`,e=>{let n=e.target.closest(`[data-quiz]`)?.dataset.quiz,r=rv.find(e=>e.id===n);r&&t&&r.run(t)})}var av=[{id:`flash`,icon:`🃏`,key:`pnl.learn.flash`,render:(e,t)=>Dg(e,{ai:je,getLang:b,getNativeLang:y,getSettings:C,speak:Od,hasSpeechRecog:tv,runPronunCheck:ev,setActiveRecog:ml,getActiveRecog:hl},t.review)},{id:`quiz`,icon:`🎯`,key:`pnl.learn.quiz`,render:iv},{id:`write`,icon:`✍️`,key:`pnl.learn.write`,render:e=>Z_(e,nv)},{id:`match`,icon:`🎮`,key:`pnl.learn.match`,render:Wg},{id:`speak`,icon:`🎤`,key:`pnl.learn.speak`,render:e=>Rg(e,{speak:Od,getLang:b,hasSpeechRecognition:tv,runPronunciationCheck:ev,logStudy:()=>xh()})}],ov=class{actions;el=document.createElement(`div`);detail=document.createElement(`div`);mode=document.createElement(`div`);bar=document.createElement(`div`);current;unsubscribe;constructor(e,t){this.actions=t,this.el.className=`pg-box-pane pg-learn-tab`,this.detail.className=`pg-learn-detail-area`,this.mode.className=`pg-learn-mode-area`,this.bar.className=`pg-learn-bar`,this.mode.hidden=!0,M(this.bar,j`${av.map(e=>j`
            <button class="pg-learn-mode-btn" data-mode="${e.id}" title="${h(e.key)}" aria-label="${h(e.key)}">${e.icon}</button>`)}`),this.bar.addEventListener(`click`,e=>{let t=e.target.closest(`[data-mode]`)?.dataset.mode;t&&this.enter(t)}),this.current=e,e?Nm(this.detail,e,t):this.showRecord(),this.unsubscribe=ma(()=>this.refresh()),this.el.append(this.detail,this.mode,this.bar)}refresh(){!this.current&&this.mode.hidden&&this.showRecord()}dispose(){this.unsubscribe()}showDetail(e){this.current=e,Nm(this.detail,e,this.actions),this.exit()}showRecord(){Wh(this.detail,()=>this.enter(`flash`,{review:!0}))}enter(e,t={}){let n=av.find(t=>t.id===e);if(!n)return;let r=Object.assign(document.createElement(`button`),{className:`pg-learn-back-btn pg-btn pg-btn-secondary`,textContent:h(`pnl.learn.back`),onclick:()=>this.exit()}),i=Object.assign(document.createElement(`div`),{className:`pg-learn-mode-inner`});gl(),Q_(),this.mode.replaceChildren(r,i),this.setActive(e),n.render(i,t)}exit(){this.mode.hidden||(gl(),Q_(),this.mode.replaceChildren(),this.setActive(null),this.current||this.showRecord())}setActive(e){this.detail.hidden=e!==null,this.mode.hidden=e===null,this.bar.querySelectorAll(`[data-mode]`).forEach(t=>t.classList.toggle(`active`,t.dataset.mode===e))}},sv=`
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
`;function cv(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var lv,uv=4;function dv(e,t){let n=e.level??``;return j`
    <div class="pg-card-header">
        <span class="pg-level-badge" data-level="${n}">${n||`?`}</span>
        ${e.pos&&j`<span class="pg-pos-badge">${e.pos}</span>`}
        ${t}
    </div>`}function fv(e,t,n){let r=e.original_form&&e.original_form!==e.word;return j`
<section class="pg-card pg-front">
    ${dv(e,j`<span class="pg-card-num">${t+1} / ${n}</span>`)}
    <div class="pg-card-body">
        <div class="pg-word">${Gd(e.word,Wd(e))}</div>
        ${e.ipa&&!Wd(e)&&j`<div class="pg-ipa">${e.ipa}</div>`}
        ${r&&j`<div class="pg-orig-form">${e.original_form}</div>`}
    </div>
    <div class="pg-card-footer">
        <span class="pg-hint">▼ flip for meaning</span>
    </div>
</section>`}function pv(e){let t=(e.collocations??[]).slice(0,uv),n=e.context_meaning&&e.context_meaning!==e.meaning;return j`
<section class="pg-card pg-back">
    ${dv(e,j`<div class="pg-word-sm">${e.word}</div>`)}
    <div class="pg-card-body">
        <div class="pg-meaning">${e.meaning}</div>
        ${n&&j`<div class="pg-context-meaning">${e.context_meaning}</div>`}
        ${t.length>0&&j`
        <div class="pg-collocs">${t.map(e=>j`<span class="pg-colloc-chip">${e}</span>`)}</div>`}
        ${e.example&&j`
        <div class="pg-example">"${e.example}"${e.example_translation&&j`<div class="pg-example-trans">${e.example_translation}</div>`}</div>`}
    </div>
</section>`}function mv(e){return j`
        <div class="pg-conj-tense">
            <div class="pg-tense-name">${e.name}<span class="pg-tense-native">${e.name_native}</span></div>
            <table class="pg-conj-table">${(e.rows??[]).map(e=>j`
                <tr><td class="pg-person">${e.person}</td><td class="pg-form">${e.form}</td></tr>`)}
            </table>
        </div>`}function hv({word:e,data:t}){return j`
<section class="pg-conj-page">
    <div class="pg-conj-header">
        <span class="pg-conj-verb">${e}</span>
        ${t.translation&&j`<span class="pg-conj-trans">${t.translation}</span>`}
    </div>
    <div class="pg-conj-grid">${(t.tenses??[]).map(mv)}</div>
</section>`}function gv(e){return e.length?j`
<section class="pg-section-title pg-conj-section-title">
    <h2>Conjugation Tables</h2>
    <p>${e.length} verb${e.length>1?`s`:``}</p>
</section>
${e.map(hv)}`:on(``)}function _v(e,t=[]){let n=e.length;return j(lv||=cv([`<!DOCTYPE html>
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
</html>`]),n,on(sv),e.map((e,t)=>[fv(e,t,n),pv(e)]),gv(t)).value}var vv=6e4;function yv(e,t=[]){if(!e.length){x(h(`wb.noExport`),`warn`);return}let n=new Blob([_v(e,t)],{type:`text/html;charset=utf-8`}),r=URL.createObjectURL(n);window.open(r,`_blank`,`width=900,height=700`)?setTimeout(()=>URL.revokeObjectURL(r),vv):(URL.revokeObjectURL(r),x(h(`wb.pdfPopupBlocked`),`err`,4e3))}var bv=4096,xv=4061,Sv=1002,Cv=489,wv=13,Tv=5,Ev=10,Dv=2,Ov=new TextEncoder;function kv(e){if(!Number.isSafeInteger(e)||e<0)throw RangeError(`varint: ${e}`);let t=[e%128];for(let n=Math.floor(e/128);n>0;n=Math.floor(n/128))t.unshift(n%128|128);if(t.length>8)throw RangeError(`varint: ${e}`);return t}function Av(e){if(e===null)return[0,new Uint8Array];if(typeof e==`string`){let t=Ov.encode(e);return[t.length*2+13,t]}if(!Number.isInteger(e)){let t=new Uint8Array(8);return new DataView(t.buffer).setFloat64(0,e),[7,t]}if(e===0)return[8,new Uint8Array];if(e===1)return[9,new Uint8Array];for(let[t,n]of[[1,1],[2,2],[3,3],[4,4],[5,6],[6,8]]){let r=BigInt(n*8),i=BigInt(e);if(i>=-(1n<<r-1n)&&i<1n<<r-1n){let e=BigInt.asUintN(n*8,i),r=new Uint8Array(n);for(let t=n-1;t>=0;t--)r[t]=Number(e&255n),e>>=8n;return[t,r]}}throw RangeError(`integer out of range: ${e}`)}function jv(e){let t=e.map(Av),n=t.flatMap(([e])=>kv(e)),r=n.length+1;for(;kv(r).length+n.length!==r;)r=kv(r).length+n.length;let i=[Uint8Array.from([...kv(r),...n]),...t.map(([,e])=>e)],a=new Uint8Array(i.reduce((e,t)=>e+t.length,0)),o=0;for(let e of i)a.set(e,o),o+=e.length;return a}function Mv(e,t){let n=e=>e===null?0:typeof e==`number`?1:2;if(n(e)!==n(t))return n(e)-n(t);if(typeof e==`number`&&typeof t==`number`)return e-t;if(typeof e==`string`&&typeof t==`string`){let n=Ov.encode(e),r=Ov.encode(t);for(let e=0;e<Math.min(n.length,r.length);e++)if(n[e]!==r[e])return n[e]-r[e];return n.length-r.length}return 0}var Nv=class{pages=[];next=2;alloc(){return this.next++}set(e,t){this.pages[e-1]=t}get count(){return this.next-1}file(){let e=new Uint8Array(this.count*bv);return this.pages.forEach((t,n)=>{t&&e.set(t,n*bv)}),e}};function Pv(e,t,n){let r=e.length;if(r<=t)return e;let i=Cv+(r-Cv)%4092,a=i<=t?i:Cv,o=4092,s=[];for(let e=a;e<r;e+=o)s.push(n.alloc());s.forEach((t,r)=>{let i=new Uint8Array(bv);new DataView(i.buffer).setUint32(0,s[r+1]??0),i.set(e.subarray(a+r*o,a+(r+1)*o),4),n.set(t,i)});let c=new Uint8Array(a+4);return c.set(e.subarray(0,a)),new DataView(c.buffer).setUint32(a,s[0]),c}var Fv=(...e)=>{let t=new Uint8Array(e.reduce((e,t)=>e+t.length,0)),n=0;for(let r of e)t.set(r,n),n+=r.length;return t};function Iv(e,t,n,r){let i=new Uint8Array(bv),a=new DataView(i.buffer),o=r?100:0,s=n===null?8:12,c=bv;return t.forEach((e,t)=>{c-=e.length,i.set(e,c),a.setUint16(o+s+t*2,c)}),i[o]=e,a.setUint16(o+3,t.length),a.setUint16(o+5,c),n!==null&&a.setUint32(o+8,n),i}var Lv=(e,t)=>bv-(t?100:0)-(e?12:8),Rv=(e,t,n)=>e.reduce((e,t)=>e+t.length+2,0)<=Lv(t,n);function zv(e,t){let n=[],r=[];for(let i of e)r.length&&!t([...r,i])&&(n.push(r),r=[]),r.push(i);return n.push(r),n.length>1&&n[n.length-1].length===1&&n[n.length-2].length>2&&n[n.length-1].unshift(n[n.length-2].pop()),n.length===1&&r.length>1?[r.slice(0,r.length>>1),r.slice(r.length>>1)]:n}function Bv(e,t,n){let r=[...e].sort((e,t)=>e.rowid-t.rowid),i=n===1,a=r.map(e=>({cell:Fv(kv(e.payload.length),kv(e.rowid),Pv(e.payload,xv,t)),key:e.rowid}));if(Rv(a.map(e=>e.cell),!1,i)){let e=n??t.alloc();return t.set(e,Iv(wv,a.map(e=>e.cell),null,i)),e}let o=zv(a,e=>Rv(e.map(e=>e.cell),!1,!1)).map(e=>{let n=t.alloc();return t.set(n,Iv(wv,e.map(e=>e.cell),null,!1)),{no:n,maxKey:e[e.length-1].key}});for(;;){let e=e=>{let t=Fv([0,0,0,0],kv(e.maxKey));return new DataView(t.buffer).setUint32(0,e.no),t},r=t=>t.slice(0,-1).map(e);if(Rv(r(o),!0,i)&&o.length>1){let e=n??t.alloc();return t.set(e,Iv(Tv,r(o),o[o.length-1].no,i)),e}o=zv(o,e=>Rv(r(e),!0,!1)).map(e=>{let n=t.alloc();return t.set(n,Iv(Tv,r(e),e[e.length-1].no,!1)),{no:n,maxKey:e[e.length-1].maxKey}})}}function Vv(e,t){let n=[...e].sort((e,t)=>{for(let n=0;n<e.length;n++){let r=Mv(e[n],t[n]);if(r)return r}return 0}).map(e=>{let n=jv(e);return Fv(kv(n.length),Pv(n,Sv,t))}),r=null;for(;;){let e=r!==null,i=(e,t)=>{let n=Fv([0,0,0,0],e);return new DataView(n.buffer).setUint32(0,t),n},a=[],o=[],s=[],c=0;for(let t=0;t<n.length;t++){let l=e?i(n[t],r[t]):n[t];if(s.length&&!Rv([...s,l],e,!1)){if(t===n.length-1)o.push(n[t-1]),s.pop(),a.push({cells:s,first:c}),s=[],c=t;else{a.push({cells:s,first:c}),o.push(n[t]),s=[],c=t+1;continue}}s.push(l)}a.push({cells:s,first:c});let l=e?Dv:Ev,u=t=>e?r[t.first+t.cells.length]:null;if(a.length===1){let e=t.alloc();return t.set(e,Iv(l,a[0].cells,u(a[0]),!1)),e}let d=a.map(e=>{let n=t.alloc();return t.set(n,Iv(l,e.cells,u(e),!1)),n});n=o,r=d}}function Hv(e){let t=new Nv,n=[];for(let r of e){let e=Bv(r.rows.map(e=>({rowid:e.rowid,payload:jv(e.values)})),t);n.push({rowid:n.length+1,payload:jv([`table`,r.name,r.name,e,r.sql])});for(let e of r.indexes??[]){let i=Vv(r.rows.map(t=>[...e.columns.map(e=>t.values[e]),t.rowid]),t);n.push({rowid:n.length+1,payload:jv([`index`,e.name,r.name,i,e.sql])})}}Bv(n,t,1);let r=t.file(),i=new DataView(r.buffer);return r.set(Ov.encode(`SQLite format 3\0`),0),i.setUint16(16,bv),r[18]=1,r[19]=1,r[20]=0,r[21]=64,r[22]=32,r[23]=32,i.setUint32(24,1),i.setUint32(28,t.count),i.setUint32(40,1),i.setUint32(44,4),i.setUint32(56,1),i.setUint32(92,1),i.setUint32(96,3045001),r}function Uv(e){let t=new TextEncoder().encode(e),n=(t.length+8>>6)+1<<6,r=new Uint8Array(n);r.set(t),r[t.length]=128;let i=new DataView(r.buffer);i.setUint32(n-8,Math.floor(t.length/536870912)),i.setUint32(n-4,t.length*8>>>0);let a=1732584193,o=4023233417,s=2562383102,c=271733878,l=3285377520,u=new Uint32Array(80),d=(e,t)=>e<<t|e>>>32-t;for(let e=0;e<n;e+=64){for(let t=0;t<16;t++)u[t]=i.getUint32(e+t*4);for(let e=16;e<80;e++)u[e]=d(u[e-3]^u[e-8]^u[e-14]^u[e-16],1);let t=a,n=o,r=s,f=c,p=l;for(let e=0;e<80;e++){let[i,a]=e<20?[n&r|~n&f,1518500249]:e<40?[n^r^f,1859775393]:e<60?[n&r|n&f|r&f,2400959708]:[n^r^f,3395469782],o=d(t,5)+i+p+a+u[e]>>>0;p=f,f=r,r=d(n,30)>>>0,n=t,t=o}a=a+t>>>0,o=o+n>>>0,s=s+r>>>0,c=c+f>>>0,l=l+p>>>0}return[a,o,s,c,l].map(e=>e.toString(16).padStart(8,`0`)).join(``)}var Wv=1747000000123,Gv=`Polyglot`,Kv=[`Word`,`Pronunciation`,`Meaning`,`Context`,`BaseForm`,`PartOfSpeech`,`Example`,`ExampleTranslation`,`Notes`,`Audio`,`Image`],qv=`<div class="pg-word">{{Word}}</div>
{{#Pronunciation}}<div class="pg-pron">{{Pronunciation}}</div>{{/Pronunciation}}
{{Audio}}`,Jv=`{{FrontSide}}
<hr id="answer">
<div class="pg-meaning">{{Meaning}}</div>
{{#Context}}<div class="pg-sub">{{Context}}</div>{{/Context}}
{{#BaseForm}}<div class="pg-sub">{{BaseForm}}</div>{{/BaseForm}}
{{#PartOfSpeech}}<div class="pg-pos">{{PartOfSpeech}}</div>{{/PartOfSpeech}}
{{#Image}}<div class="pg-img">{{Image}}</div>{{/Image}}
{{#Example}}<div class="pg-example">{{Example}}</div>{{/Example}}
{{#ExampleTranslation}}<div class="pg-sub">{{ExampleTranslation}}</div>{{/ExampleTranslation}}
{{#Notes}}<div class="pg-notes">{{Notes}}</div>{{/Notes}}`,Yv=`.card { font-family: sans-serif; font-size: 20px; text-align: center; }
.pg-word { font-size: 1.8em; font-weight: 600; }
.pg-pron, .pg-sub, .pg-pos { opacity: 0.6; font-size: 0.85em; }
.pg-pos { font-style: italic; }
.pg-meaning { font-size: 1.2em; margin-bottom: 0.3em; }
.pg-example { margin-top: 0.8em; }
.pg-notes { margin-top: 0.8em; font-size: 0.85em; opacity: 0.8; }
.pg-img img { max-width: 100%; max-height: 260px; margin-top: 0.6em; }`,Xv=`\\documentclass[12pt]{article}
\\special{papersize=3in,5in}
\\usepackage[utf8]{inputenc}
\\usepackage{amssymb,amsmath}
\\pagestyle{empty}
\\setlength{\\parindent}{0in}
\\begin{document}
`,Zv={col:`CREATE TABLE col (id integer primary key, crt integer not null, mod integer not null, scm integer not null, ver integer not null, dty integer not null, usn integer not null, ls integer not null, conf text not null, models text not null, decks text not null, dconf text not null, tags text not null)`,notes:`CREATE TABLE notes (id integer primary key, guid text not null, mid integer not null, mod integer not null, usn integer not null, tags text not null, flds text not null, sfld integer not null, csum integer not null, flags integer not null, data text not null)`,cards:`CREATE TABLE cards (id integer primary key, nid integer not null, did integer not null, ord integer not null, mod integer not null, usn integer not null, type integer not null, queue integer not null, due integer not null, ivl integer not null, factor integer not null, reps integer not null, lapses integer not null, left integer not null, odue integer not null, odid integer not null, flags integer not null, data text not null)`,revlog:`CREATE TABLE revlog (id integer primary key, cid integer not null, usn integer not null, ease integer not null, ivl integer not null, lastIvl integer not null, factor integer not null, time integer not null, type integer not null)`,graves:`CREATE TABLE graves (usn integer not null, oid integer not null, type integer not null)`},Qv={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},$v=e=>(e??``).replace(/[&<>"']/g,e=>Qv[e]).replace(/\r?\n/g,`<br>`).replace(/[\u0000-\u0008\u000b-\u001f\u007f]/g,``);function ey(e){let t=pg(e);return t?t.parts.map($v).join(`<b>${$v(t.answer)}</b>`):$v(e.example)}var ty=e=>e.trim().replace(/\s+/g,`_`);function ny(e,t){let n=[`Polyglot`,`Polyglot::Level::${ty(e.level||`grammar`)}`];for(let t of e.langs??[])n.push(`Polyglot::Lang::${ty(t)}`);for(let r of e.setIds??[]){let e=t.get(r);e&&n.push(`Polyglot::Set::${ty(e)}`)}return W(e)&&n.push(`Polyglot::${{new:`New`,learning:`Learning`,known:`Known`}[qu(e)]}`),Ju(e)&&n.push(`Polyglot::Missed`),[...new Set(n)]}function ry(e,t){return[$v(e.word),$v(e.reading||e.ipa),$v(e.meaning),e.context_meaning&&e.context_meaning!==e.meaning?$v(e.context_meaning):``,e.base_form&&e.base_form!==e.word?$v(e.base_form):``,$v(e.pos_info),ey(e)+(e.example_audio&&t.has(e.example_audio)?` [sound:${e.example_audio}]`:``),$v(e.example_translation),$v(e.notes),e.audio&&t.has(e.audio)?`[sound:${e.audio}]`:``,e.image&&t.has(e.image)?`<img src="${$v(e.image)}">`:``]}var iy=e=>`pg${Uv(`${(e.langs??[]).join(`,`)}\u001f${e.word}`).slice(0,14)}`,ay=e=>parseInt(Uv(e).slice(0,8),16),oy=e=>17471e8+parseInt(Uv(e).slice(0,7),16)%1e8;function sy({entries:e,sets:t,deckName:n,media:r,now:i=Date.now()}){let a=Math.floor(i/1e3),o=oy(n),s=new Map(t.map(e=>[e.id,e.name])),c=new Set(r.keys()),l={id:Wv,name:Gv,type:0,mod:a,usn:-1,sortf:0,did:o,tmpls:[{name:`Card 1`,ord:0,qfmt:qv,afmt:Jv,did:null,bqfmt:``,bafmt:``}],flds:Kv.map((e,t)=>({name:e,ord:t,sticky:!1,rtl:!1,font:`Arial`,size:20,media:[]})),css:Yv,latexPre:Xv,latexPost:`\\end{document}`,latexsvg:!1,req:[[0,`any`,[0]]],tags:[],vers:[]},u=(e,t)=>({id:e,name:t,desc:``,mod:a,usn:-1,collapsed:!1,browserCollapsed:!1,dyn:0,conf:1,extendNew:0,extendRev:50,newToday:[0,0],revToday:[0,0],lrnToday:[0,0],timeToday:[0,0]}),d={id:1,name:`Default`,mod:0,usn:0,maxTaken:60,autoplay:!0,timer:0,replayq:!0,dyn:!1,new:{bury:!1,delays:[1,10],initialFactor:2500,ints:[1,4,0],order:1,perDay:20},rev:{bury:!1,ease4:1.3,ivlFct:1,maxIvl:36500,perDay:200,hardFactor:1.2},lapse:{delays:[10],leechAction:1,leechFails:8,minInt:1,mult:0}},f={activeDecks:[1],curDeck:1,newSpread:0,collapseTime:1200,timeLim:0,estTimes:!0,dueCounts:!0,curModel:String(Wv),nextPos:e.length+1,sortType:`noteFld`,sortBackwards:!1,addToCur:!0},p=e.map((t,n)=>{let r=i-e.length+n,o=ry(t,c),l=ny(t,s);return{rowid:r,values:[null,iy(t),Wv,a,-1,` ${l.join(` `)} `,o.join(``),t.word,ay(t.word),0,``]}}),m=p.map((e,t)=>({rowid:e.rowid,values:[null,e.rowid,o,0,a,-1,0,0,t+1,0,0,0,0,0,0,0,0,``]}));return[{name:`col`,sql:Zv.col,rows:[{rowid:1,values:[null,Math.floor(a/86400)*86400,i,i,11,0,0,0,JSON.stringify(f),JSON.stringify({[Wv]:l}),JSON.stringify({1:u(1,`Default`),[o]:u(o,n)}),JSON.stringify({1:d}),`{}`]}]},{name:`notes`,sql:Zv.notes,rows:p,indexes:[{name:`ix_notes_usn`,sql:`CREATE INDEX ix_notes_usn on notes (usn)`,columns:[4]},{name:`ix_notes_csum`,sql:`CREATE INDEX ix_notes_csum on notes (csum)`,columns:[8]}]},{name:`cards`,sql:Zv.cards,rows:m,indexes:[{name:`ix_cards_usn`,sql:`CREATE INDEX ix_cards_usn on cards (usn)`,columns:[5]},{name:`ix_cards_nid`,sql:`CREATE INDEX ix_cards_nid on cards (nid)`,columns:[1]},{name:`ix_cards_sched`,sql:`CREATE INDEX ix_cards_sched on cards (did, queue, due)`,columns:[2,7,8]}]},{name:`revlog`,sql:Zv.revlog,rows:[],indexes:[{name:`ix_revlog_usn`,sql:`CREATE INDEX ix_revlog_usn on revlog (usn)`,columns:[2]},{name:`ix_revlog_cid`,sql:`CREATE INDEX ix_revlog_cid on revlog (cid)`,columns:[1]}]},{name:`graves`,sql:Zv.graves,rows:[]}]}function cy(e){let t=[...e.media.keys()];return Hf([{name:`collection.anki2`,data:Hv(sy(e))},{name:`media`,data:new TextEncoder().encode(JSON.stringify(Object.fromEntries(t.map((e,t)=>[String(t),e]))))},...t.map((t,n)=>({name:String(n),data:e.media.get(t)}))])}var ly=4;async function uy(e,t,n,r){let i=R()===`file`?[...An(e)]:[],a=new Map,o=0;r?.(0,i.length),await Nn(i,ly,async e=>{let t=await Be(e);t&&a.set(e,t),r?.(++o,i.length)});let s=n.trim()||`Words`;return Ja(cy({entries:e,sets:t,deckName:`Polyglot::${s}`,media:a}),`Polyglot_${s.replace(/[^\p{L}\p{N}_-]+/gu,`_`)}_${new Date().toISOString().slice(0,10)}.apkg`),{words:e.length,media:a.size,missing:i.length-a.size}}function dy(e){let t=e.get(),n=_().chat?.length,r=t&&typeof n==`number`&&be(t,Qt(),n);r&&e.set(r)}var fy=[`dialogue`,`annotation`,`saved`,`furigana`,`voice`,`translation`],py=`pg-decor`,my=20,hy=new Map,gy={childList:!0,subtree:!0};function _y(e,t,n,r){t.observer.disconnect(),t.frame!==null&&cancelAnimationFrame(t.frame),r(),t.drawn=n.firstChild,t.frame=requestAnimationFrame(()=>{t.frame=null,hy.get(e)===t&&(t.observer.observe(n,gy),n.firstChild!==t.drawn&&by(e,t,n))})}function vy(e,t){for(let n of fy)e.layers[n]?.draw(t)}function yy(e,t){let n=hy.get(e);if(n)return n;let r={layers:{},observer:new MutationObserver(()=>by(e,r,t)),frame:null,redraws:0,drawn:null};return hy.set(e,r),r.observer.observe(t,gy),r}function by(e,t,n){n.querySelector(`.pg-decor, .pg-tap-bubble`)||(++t.redraws>my?(xy(e),console.warn(`[Polyglot] message decorations: redraw limit reached for message`,e)):_y(e,t,n,()=>vy(t,n)))}function xy(e){let t=hy.get(e);t&&(t.observer.disconnect(),t.frame!==null&&cancelAnimationFrame(t.frame),hy.delete(e))}function Z(e,t,n){let r=D(e);if(!r){n||Sy(e,t);return}let i=yy(e,r),a=i.layers[t];_y(e,i,r,()=>{for(let e of[...fy].reverse())(e===t?a:i.layers[e])?.strip(r);n?i.layers[t]=n:delete i.layers[t],vy(i,r)}),Object.keys(i.layers).length||xy(e)}function Sy(e,t){let n=hy.get(e);n&&(delete n.layers[t],Object.keys(n.layers).length||xy(e))}var Cy=(e,t)=>!!hy.get(e)?.layers[t],wy=e=>[...hy.entries()].filter(([,t])=>t.layers[e]).map(([e])=>e);function Ty(e){for(let t of[...hy.keys()])e?Sy(t,e):xy(t)}function Ey(){for(let e of[...hy.keys()])D(e)||xy(e)}var Dy=new Map;function Oy(e,t,n){let r=new Set(t);if(!r.size)return;let i=(Dy.get(e)??0)+1;Dy.set(e,i);let a=performance.now()+Ie.restoreDeadline,o=()=>{if(Dy.get(e)!==i)return;let t=!1;for(let e of r)D(e)&&(r.delete(e),t=!0);t&&n(),r.size&&performance.now()<a&&setTimeout(o,Ie.animFrame)};setTimeout(o,Ie.animFrame)}function ky(e){Dy.set(e,(Dy.get(e)??0)+1)}var Ay=`pg-dlg`;function jy(e){let t=Bo(e);if(!t.length)return;let n=0;for(let r of Jt(e)){let e=n,i=n+r.data.length;if(n=i,r.parentElement?.closest(`code, pre`)||!t.some(t=>t.start<i&&t.end>e))continue;let a=[...new Set([e,i,...t.flatMap(e=>[e.start,e.end]).filter(t=>t>e&&t<i)])].sort((e,t)=>e-t),o=(e,n)=>t.some(t=>e>=t.start&&n<=t.end),s=document.createDocumentFragment();for(let t=0;t<a.length-1;t++){let[n,i]=[a[t],a[t+1]],c=r.data.slice(n-e,i-e);if(o(n,i)){let e=document.createElement(`span`);e.className=`${Ay} ${py}`,e.textContent=c,s.append(e)}else s.append(c)}r.replaceWith(s)}}function My(e){e.querySelectorAll(`.${Ay}`).forEach(e=>e.replaceWith(...e.childNodes)),e.normalize()}function Ny(e){if(!T(e)||!Array.isArray(e.passages))return null;let t=e.passages.filter(e=>T(e)&&Number.isInteger(e.i)).map(e=>({i:e.i,words:Ut(e.words)}));return t.length?t:null}async function Py(e,t,n,r){let i=r?r.filter(t=>It(e.slice(t.start,t.end))):Wt(e),a=[];if(i.length){let{data:r}=await t.json({prompt:xt(i.map((t,n)=>({i:n,text:e.slice(t.start,t.end)}))),signal:n,accept:Ny,merge:oe(e=>String(e.i))});for(let t of r){let n=i[t.i];n&&a.push(...Vt(e,t.words,n.start,n.end))}a.sort((e,t)=>e[0]-t[0])}return{spans:a,uncovered:(r??[{start:0,end:e.length}]).flatMap(t=>Ht(e,a,t.start,t.end)).map(t=>e.slice(t.start,t.end))}}var Fy=`pg-ruby`;function Iy(e,t,n){let r=document.createElement(`ruby`);r.className=`${Fy} ${py}`,r.dataset.pgSpan=String(n);let i=document.createElement(`rt`);return i.textContent=t,r.append(e,Object.assign(document.createElement(`rp`),{textContent:`(`}),i,Object.assign(document.createElement(`rp`),{textContent:`)`})),r}function Ly(e,t){let n=0,r=0;for(let i of Jt(e)){let e=r,a=r+i.data.length;for(r=a;n<t.length&&t[n][0]<e;)n++;if(n>=t.length)break;if(t[n][0]>=a||i.parentElement?.closest(`code, pre, ruby`))continue;let o=document.createDocumentFragment(),s=e;for(;n<t.length&&t[n][1]<=a;n++){let[r,a,c]=t[n];r<s||(r>s&&o.append(i.data.slice(s-e,r-e)),o.append(Iy(i.data.slice(r-e,a-e),c,n)),s=a)}s!==e&&(s<a&&o.append(i.data.slice(s-e)),i.replaceWith(o))}}function Ry(e){let t=e.querySelectorAll(`ruby.${Fy}`);t.length&&(t.forEach(e=>{e.querySelectorAll(`rt, rp`).forEach(e=>e.remove()),e.replaceWith(...e.childNodes)}),e.normalize())}var zy=xn(S.furigana),By=6,Vy=new Map,Hy=()=>le(b())&&C().furigana_enabled!==!1,Uy=e=>ze(zy.get()?.[e]);function Wy(e){let t=D(e);if(!t)return;let n=k(A(t));return Uy(e).find(e=>e.h===n)}function Gy(e,t){zy.set({...zy.get(),[e]:Ve(Uy(e),t,By)})}function Ky(e,t,n=!1){let r=k(t);return Uy(e).find(e=>e.h===r&&!!e.d===n)}function qy(e,t){Z(e,`furigana`,{draw:e=>{k(A(e))===t.h&&Ly(e,t.s)},strip:Ry})}var Jy=e=>Z(e,`furigana`,null);async function Yy(e,t,n,r,i=[]){let a=N(),o=new AbortController;Vy.set(e,o);let s=r??(i.length?Do(Wt(Oo(t,i)),i):void 0);try{let{spans:i,uncovered:c}=await Py(t,je,o.signal,s);if(o.signal.aborted||a!==N())return;let l=D(e);if(!l||A(l)!==t)return;let u={h:k(t),s:i,...r&&{d:!0}};Gy(e,u),qy(e,u),!n&&c.length&&x(h(`furi.partial`,{n:c.length}),`warn`,4e3)}catch(e){if(o.signal.aborted)return;console.error(`[Polyglot] furigana error:`,e),x(h(`furi.error`,{msg:e instanceof Error?e.message:String(e)}),`err`,4e3)}finally{Vy.get(e)===o&&Vy.delete(e)}}async function Xy(e,t){if(!Hy()||Vy.has(e))return;let n=D(e);if(!n)return;let r=A(n);if(!It(t?t.map(e=>r.slice(e.start,e.end)).join(``):r))return;let i=Ky(e,r,!!t);i?(Gy(e,{...i,hidden:!1}),qy(e,i)):await Yy(e,r,!1,t,Ro(n))}function Zy(e){Vy.get(e)?.abort(),Vy.delete(e),Jy(e);let t=Wy(e);t&&!t.hidden&&Gy(e,{...t,hidden:!0})}async function Qy(e){let t=O(e),n=Number(e.dataset.pgSpan),r=t?Wy(t):void 0,i=r?.s[n];if(!t||!r||!i)return;let a=e.firstChild?.textContent??``,o=await v(h(`furi.editTitle`,{word:a}),{initial:i[2],hint:h(`furi.editHint`)});if(o===null)return;let s=Rt(o.replace(/\s+/g,``));if(s&&!Lt(s)){x(h(`furi.editKana`),`warn`,3e3);return}let c=Wy(t);if(!c||c.h!==r.h||!c.s[n])return;let l=s?c.s.map((e,t)=>t===n?[e[0],e[1],s]:e):c.s.filter((e,t)=>t!==n),u={...c,s:l};Gy(t,u),Cy(t,`furigana`)&&qy(t,u)}function $y(){document.addEventListener(`click`,e=>{let t=(e.target?.closest?.(`rt`))?.closest(`ruby.pg-ruby[data-pg-span]`);t&&t.closest(E.mesText)&&(e.preventDefault(),e.stopPropagation(),Qy(t))},{capture:!0})}function eb(){if(Hy())for(let e of Object.keys(zy.get()??{})){if(Cy(e,`furigana`))continue;let t=Wy(e);t&&!t.hidden&&qy(e,t)}}var tb=()=>dy(zy);function nb(){Oy(`furigana`,Object.keys(zy.get()??{}),eb)}var rb=Promise.resolve(),ib=0;function ab(e){if(!Hy()||!C().furigana_auto||Wy(e)?.hidden||Vy.has(e))return;let t=ib;rb=rb.then(async()=>{if(t!==ib)return;let n=D(e);if(!n||!n.closest(E.aiMes))return;let r=A(n);if(!It(r)||Vy.has(e))return;let i=Ky(e,r);i?Cy(e,`furigana`)||qy(e,i):await Yy(e,r,!0,void 0,Ro(n))})}function ob(e){Vy.get(e)?.abort(),Vy.delete(e),Jy(e)}function sb(){wy(`furigana`).forEach(Jy),cb(),zy.delete()}function cb(){ky(`furigana`),Vy.forEach(e=>e.abort()),Vy.clear(),Ty(`furigana`),ib++,rb=Promise.resolve()}function lb(){ub(),Hy()?eb():wy(`furigana`).forEach(Jy)}function ub(){let e=C();document.body.classList.toggle(`pg-furi-hover`,e.furigana_display===`hover`),document.body.classList.toggle(`pg-furi-off`,!Hy()),document.body.style.setProperty(`--pg-furi-size`,`${e.furigana_size??.65}em`)}function db(){let e=document.querySelector(`${E.mesText} ruby.pg-ruby rt`),t=e?.parentElement;if(!e||!t)return;let n=parseFloat(getComputedStyle(t).fontSize)*(C().furigana_size??.65),r=parseFloat(getComputedStyle(e).fontSize);r>n+.5&&x(h(`furi.sizeClamped`,{px:Math.round(r)}),`warn`,8e3)}var fb=new Map;function pb(){let e=new Set([...fb.values()].map(e=>e.label));return e.size===1?[...e][0]:h(`stop.busy`)}function mb(e,t,n=h(`ann.analysing`)){fb.set(e,{stop:t,label:n});let r=document.getElementById(`pg-snackbar`);if(r){gb(r);return}let i=Object.assign(document.createElement(`div`),{id:`pg-snackbar`,className:`pg-snackbar`});M(i,j`
        <span class="pg-snackbar-text"><i class="fa-solid fa-spinner fa-spin"></i>&nbsp; <span class="pg-snackbar-label">${pb()}</span></span>
        <button class="pg-snackbar-stop">${h(`ann.stop`)}</button>`),i.querySelector(`.pg-snackbar-stop`)?.addEventListener(`click`,()=>{let e=[...fb.values()].map(e=>e.stop);fb.clear(),e.forEach(e=>e()),_b()}),document.body.appendChild(i),i.offsetWidth,i.classList.add(`pg-snackbar-visible`)}function hb(e){fb.delete(e);let t=document.getElementById(`pg-snackbar`);fb.size?t&&gb(t):_b()}function gb(e){let t=e.querySelector(`.pg-snackbar-label`);t&&(t.textContent=pb())}function _b(){let e=document.getElementById(`pg-snackbar`);e&&(e.id=``,e.classList.remove(`pg-snackbar-visible`),setTimeout(()=>e.remove(),Ie.snackbarFadeOut))}var vb=()=>{};function yb(e){vb=e}var bb=`pg-saved-mark`,xb=`pg-saved-word`,Sb=new Set([`SCRIPT`,`STYLE`,`CODE`,`PRE`,`RUBY`,`RT`,`RP`]),Cb=()=>C().mark_saved_words!==!1,wb=e=>(e??``).normalize(`NFKC`).toLowerCase().trim(),Tb=null,Eb=!0,Db=new Map,Ob=null,kb=null;function Ab(){Eb=!0}function jb(){let e=b();if(kb||Ob&&Ob.version===dn()&&Ob.lang===e)return;let t=dn();kb=vn(e).then(n=>{Db=new Map(n.map(e=>[wb(e.word),e.data])),Ob={version:t,lang:e}}).catch(()=>{Ob={version:t,lang:e}}).finally(()=>{kb=null,Eb=!0,Ub()})}function Mb(){if(Tb&&!Eb&&Tb.key.startsWith(`${b()}|`))return Tb;let e=V(`all`),t=Mt(e.map(e=>[e.word,e.base_form,e.original_form,e.example_form,e.reading,...e.forms??[]].join(``)).join(``)),n=`${b()}|${Ob?.version??-1}|${e.length}|${t}`,r=new Map(e.map(e=>[e.word,e]));return Tb={key:n,forms:Tb?.key===n?Tb.forms:new cr(e.map(e=>({word:e.word,forms:sr(e,Db.get(wb(e.base_form))??Db.get(wb(e.word)))}))),byWord:r},Eb=!1,Tb}var Nb=(e,t)=>{let n=t?e.byWord.get(t):void 0;return n?qu(n):null};function Pb(e,t){let n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e instanceof Element&&(Sb.has(e.tagName)||e.classList.contains(`pg-clickable-word`)||qt(e))?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),r=[];for(let e=n.nextNode();e;e=n.nextNode())e instanceof Text&&!t.has(e)&&r.push(e);return r}function Fb(e){return{type:`word`,data:{word:e.word,base_form:e.base_form,meaning:e.meaning,level:e.level,pos_info:e.pos_info??``,context_meaning:e.context_meaning??``,...e.reading&&{reading:e.reading}}}}function Ib(e,t){let n=document.createElement(`span`);return n.className=`${bb} ${py}`,n.textContent=e,n.dataset.word=t,n.addEventListener(`click`,()=>{let e=z().find(e=>e.word===t);e&&vb(`learn`,Fb(e))}),n}function Lb(e,t,n){return e.forms.find(t).filter(r=>Nb(e,r.word)===`learning`&&!n(t.slice(r.start,r.end),r.word))}function Rb(e){let t=Mb(),n=Jo();for(let r of Pb(e,zo(e))){let e=r.data,i=Lb(t,e,n);if(!i.length)continue;let a=document.createDocumentFragment(),o=0;for(let t of i)t.start>o&&a.append(e.slice(o,t.start)),a.append(Ib(e.slice(t.start,t.end),t.word)),o=t.end;o<e.length&&a.append(e.slice(o)),r.replaceWith(a)}e.querySelectorAll(`.pg-clickable-word`).forEach(e=>{Nb(t,t.forms.wordOf(e.textContent??``))===`learning`&&e.classList.add(xb)})}function zb(e){e.querySelectorAll(`.${bb}`).forEach(e=>e.replaceWith(e.textContent??``)),e.querySelectorAll(`.${xb}`).forEach(e=>e.classList.remove(xb)),e.normalize()}var Bb={draw:Rb,strip:zb},Vb=new Map;function Hb(e,t,n){let r=new Set;for(let i of Pb(t,zo(t)))for(let t of Lb(e,i.data,n))r.add(t.word);return t.querySelectorAll(`.pg-clickable-word`).forEach(t=>{let n=e.forms.wordOf(t.textContent??``);n&&Nb(e,n)===`learning`&&r.add(`~${n}`)}),[...r].sort().join(``)}function Ub(e){if(!Cb()){Wb();return}jb();let t=Mb(),n=Jo(),r=e??[...document.querySelectorAll(E.aiMes)].map(e=>O(e)).filter(e=>!!e);for(let e of r){let r=D(e);if(!r||r.closest(E.mes)?.getAttribute(`is_user`)===`true`)continue;let i=Hb(t,r,n);(Vb.get(e)!==i||!Cy(e,`saved`)&&i)&&(Vb.set(e,i),Z(e,`saved`,i?Bb:null))}}function Wb(){for(let e of wy(`saved`))Z(e,`saved`,null);Vb.clear()}function Gb(){Vb.clear(),Ty(`saved`)}function Kb(e,t=60){let n=Mb(),r=new Set;for(let i of n.forms.find(e))if(Nb(n,i.word)===`known`&&r.add(e.slice(i.start,i.end)),r.size>=t)break;return[...r]}var qb=(e=>(...t)=>{let n=Mb();return t.some(t=>Nb(n,n.forms.wordOf(t))===e)})(`known`);function Jb(e){let t=Mb(),n=z(),r=new Map(n.map(e=>[e.word,e])),i=!1;for(let{word:a,base_form:o}of e){if(!a?.trim())continue;let e=r.get(t.forms.wordOf(a)??``)??r.get(t.forms.wordOf(o)??``)??n.find(e=>wb(e.base_form)===wb(o));e&&!sr(e).includes(wb(a))&&(e.forms=lr(e.forms,a),i=!0)}i&&B(n,!0)}var Yb=new Map;function Xb(e){let t=D(e);if(!t||t.closest(E.mes)?.getAttribute(`is_user`)===`true`)return;let n=Mb(),r=Jo(),i=new Set(Lb(n,A(t),r).map(e=>e.word)),a=Yb.get(e)??new Set,o=[...i].filter(e=>!a.has(e));if(!o.length)return;o.forEach(e=>a.add(e)),Yb.set(e,a);let s=z();for(let e of s)o.includes(e.word)&&(e.seen=(e.seen??0)+1);B(s,!0)}function Zb(){Yb.clear()}var Qb=()=>{};function $b(e){Qb=e}var ex=new Map,tx=new Map,nx=xn(S.annotations),rx=6,ix=!1,ax=e=>ze(nx.get()?.[e]);function ox(e,t){let n=ax(e),r=k(A(t));return n.find(e=>e.h===r)??n.find(e=>!e.h)}function sx(e,t){nx.set({...nx.get(),[e]:Ve(ax(e),t,rx)})}function cx(e,t){let n=nx.get();if(!n||!(e in n))return;let{[e]:r,...i}=n,a=ze(r).filter(e=>e.h!==t.h);nx.set(a.length?{...i,[e]:a}:i)}function lx(e){if(e.type===`idiom`)return`pg-hl-idiom`;if(e.type===`grammar`)return`pg-hl-grammar`;let t=ue(e.data.level);return t===`grammar`||t===`sentence`?`pg-hl-c`:`pg-hl-${t[0].toLowerCase()}`}function ux(e){let t=Jo();return[...(e.hard_words??[]).filter(e=>!t(e.word,e.base_form)&&!qb(e.word,e.base_form)).map(e=>({type:`word`,text:e.word,data:e})),...(e.grammar_patterns??[]).map(e=>({type:`grammar`,text:e.pattern,data:e})),...(e.idioms??[]).filter(e=>!t(e.phrase,e.base_form)).map(e=>({type:`idiom`,text:e.phrase,data:e}))].filter(e=>typeof e.text==`string`&&e.text.length>0).sort((e,t)=>t.text.length-e.text.length)}function dx(e,t){let n=null;for(let r of t){let t=d(e,r.text);t!==-1&&(!n||t<n.index)&&(n={index:t,token:r})}return n}function fx(e){let t=document.createElement(`span`);return t.className=`pg-clickable-word ${py} ${lx(e)}`,t.textContent=e.text,t.addEventListener(`click`,()=>Qb(`learn`,e)),t}function px(e,t){let n=e.textContent??``;if(!n.trim())return;let r=document.createDocumentFragment(),i=!1;for(let e=dx(n,t);e;e=dx(n,t))e.index>0&&r.append(n.slice(0,e.index)),r.append(fx(e.token)),n=n.slice(e.index+e.token.text.length),i=!0;i&&(n&&r.append(n),e.replaceWith(r))}var mx=new Set([`SCRIPT`,`STYLE`,`CODE`,`PRE`,`RUBY`]);function hx(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e instanceof Element&&(mx.has(e.tagName)||e.classList.contains(`pg-clickable-word`)||qt(e))?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),n=[];for(let e=t.nextNode();e;e=t.nextNode())e instanceof Text&&n.push(e);return n}function gx(e,t){let n=ux(t),r=zo(e);hx(e).filter(e=>!r.has(e)&&(!t.dialogue||e.parentElement?.closest(`.pg-dlg`))).forEach(e=>px(e,n))}function _x(e){e.querySelectorAll(`.pg-clickable-word`).forEach(e=>e.replaceWith(e.textContent??``)),e.normalize()}function vx(e){return e.querySelector(`.pg-annotate-btn`)}function yx(e,t,n){e.querySelector(E.mesText)&&(ex.set(t,n),Z(t,`dialogue`,n.dialogue?{draw:jy,strip:My}:null),Z(t,`annotation`,{draw:e=>gx(e,n),strip:_x}),vx(e)?.classList.add(`pg-btn-active`))}function bx(e,t){let n=ex.get(t);Zy(t),xx(t),vx(e)?.classList.remove(`pg-btn-active`),n&&cx(t,n)}function xx(e){Z(e,`annotation`,null),Z(e,`dialogue`,null),ex.delete(e)}function Sx(){document.querySelectorAll(`.pg-annotate-btn`).forEach(e=>{let t=O(e);e.classList.toggle(`pg-btn-active`,!!t&&ex.has(t))})}function Cx(){Ey();for(let e of ex.keys())Cy(e,`annotation`)||ex.delete(e)}var wx=(e,t)=>!e.h||e.h===k(A(t));function Tx(){if(Cx(),ix||!C().enabled_annotator)Sx();else{for(let[e,t]of ex){let n=D(e);n&&!wx(t,n)&&kx(e)}for(let e of Object.keys(nx.get()??{})){if(ex.has(e))continue;let t=document.querySelector(Ot(e)),n=t?.querySelector(E.mesText),r=n&&ox(e,n);t&&r&&yx(t,e,r)}Sx()}}var Ex=()=>dy(nx);function Dx(){Oy(`annotation`,Object.keys(nx.get()??{}),Tx)}function Ox(){ky(`annotation`),tx.forEach(e=>e.abort()),tx.clear(),Ty(`annotation`),Ty(`dialogue`),ex.clear()}function kx(e){tx.get(e)?.abort(),tx.delete(e),xx(e);let t=ax(e);if(t.some(e=>!e.h)){let{[e]:n,...r}=nx.get()??{},i=t.filter(e=>e.h);nx.set(i.length?{...r,[e]:i}:r)}(document.querySelector(Ot(e))?.querySelector(`.pg-annotate-btn`))?.classList.remove(`pg-btn-active`,`pg-btn-busy`)}function Ax(){ix=!0,wy(`annotation`).forEach(e=>Z(e,`annotation`,null)),wy(`dialogue`).forEach(e=>Z(e,`dialogue`,null)),Ox(),nx.delete(),sb(),document.querySelectorAll(`.pg-annotate-btn`).forEach(e=>e.classList.remove(`pg-btn-active`)),setTimeout(()=>{ix=!1},0)}function jx(e,t,n){let r=Object.assign(document.createElement(`div`),{className:`mes_button ${e} interactable`,title:t,tabIndex:0});return r.addEventListener(`click`,n),r}function Mx(){C().enabled_annotator&&document.querySelectorAll(E.aiMes).forEach(e=>{let t=O(e),n=e.querySelector(E.extraMesButtons);t&&n&&!e.querySelector(`.pg-annotate-btn`)&&n.prepend(jx(`pg-annotate-btn fa-solid fa-book-open`,`Polyglot: annotate for study`,()=>{let t=O(e);t&&zx(e,t)}),jx(`pg-open-btn fa-solid fa-earth-europe`,`Open Polyglot panel`,()=>Qb(`learn`,null)))})}function Nx(e=[]){if(C().auto_save_idioms===!1)return 0;let t=Jo();return e.filter(e=>e.phrase?.trim()&&e.meaning?.trim()&&!t(e.phrase,e.base_form)).map(e=>Ss({word:e.phrase,base_form:e.base_form?.trim()||e.phrase.trim(),meaning:e.meaning,meaning_lang:y(),level:`idiom`,context_meaning:e.context_meaning},{quiet:!0})).filter(e=>e===`added`).length}var Px={hard_words:[`word`,`base_form`,`pos_info`,`meaning`,`context_meaning`,`level`],grammar_patterns:[`pattern`,`meaning`,`structure`,`words_used`],idioms:[`phrase`,`base_form`,`meaning`,`context_meaning`]};function Fx(e){if(!T(e)||!Object.keys(Px).some(t=>Array.isArray(e[t])))return null;let t=(e,t)=>(Array.isArray(e)?e:[]).filter(e=>T(e)&&typeof e[t[0]]==`string`&&e[t[0]].trim()).map(e=>l(e,t));return{hard_words:t(e.hard_words,Px.hard_words),grammar_patterns:t(e.grammar_patterns,Px.grammar_patterns),idioms:t(e.idioms,Px.idioms)}}function Ix(e,t){let n=(e,t,n)=>oe(n)(e??[],t??[]);return{hard_words:n(e.hard_words,t.hard_words,e=>e.word),grammar_patterns:n(e.grammar_patterns,t.grammar_patterns,e=>e.pattern),idioms:n(e.idioms,t.idioms,e=>e.phrase)}}function Lx(){for(let[e,t]of ex){let n=document.querySelector(Ot(e));n&&yx(n,e,t)}}var Rx=e=>ex.has(e);async function zx(e,t){if(!C().enabled_annotator||tx.has(t))return;if(ex.has(t)){bx(e,t);return}let n=e.querySelector(E.mesText);if(!n)return;let r=!!C().dialogue_only,{text:i,plain:a,lines:o}=Vo(n,r);if(o&&!o.length){x(h(`dlg.none`),`info`,3e3);return}if(!i.trim()){x(h(`ann.allSkipped`),`info`,3e3);return}let s=N(),c=k(a),l=vx(e),u=new AbortController;tx.set(t,u),l?.classList.add(`pg-btn-busy`),mb(u,()=>{u.abort(),Zy(t)});let d=Xy(t,o);try{let{data:e}=await je.json({prompt:rt(i,b(),C().cefr_level,y(),Ko(),Kb(i)),signal:u.signal,accept:Fx,merge:Ix});if(u.signal.aborted||s!==N())return;let n=D(t),a=n?.closest(E.mes);if(!n||!a||k(A(n))!==c)return;let o={...e,h:c,...r&&{dialogue:!0}};yx(a,t,o),sx(t,o),Jb(e.hard_words??[]);let l=Nx(e.idioms);l&&x(h(`ann.idiomsAdded`,{n:l}),`info`,2500),await d}catch(e){if(u.signal.aborted)return;console.error(`[Polyglot] Annotation error:`,e),x(h(`ann.error`,{msg:e instanceof Error?e.message:String(e)}),`err`,3e3)}finally{l?.classList.remove(`pg-btn-busy`),tx.get(t)===u&&tx.delete(t),hb(u)}}var Bx=`pg-learning-panel`,Vx=`pg-box-${Bx}`;function Hx(){return document.getElementById(Vx)??document.querySelector(`.pg-sidebar`)}var Ux=()=>window.matchMedia(`(pointer: coarse) and (max-width: 600px)`).matches;function Wx(){let e=Hx();if(!e)return;let{panel_theme:t,panel_bg_image:n}=C();t&&t!==`dark`?e.dataset.pgTheme=t:delete e.dataset.pgTheme;let r=n?.replace(/"/g,`%22`)??``;r?e.style.setProperty(`--pg-panel-bg-image`,`url("${r}")`):e.style.removeProperty(`--pg-panel-bg-image`),e.toggleAttribute(`data-has-bg`,!!r)}function Gx(){Wx(),requestAnimationFrame(Wx),setTimeout(Wx,80),!Ux()&&requestAnimationFrame(()=>{let e=Hx();e&&C().panel_floating&&qx(e,!0)})}var Kx=[`top`,`left`,`right`,`bottom`];function qx(e,t){if(!t){e.classList.remove(`pg-sidebar-floating`),Kx.forEach(t=>e.style.removeProperty(t));return}if(e.classList.contains(`pg-sidebar-floating`))return;let{top:n,left:r}=e.getBoundingClientRect();e.classList.add(`pg-sidebar-floating`),e.style.setProperty(`right`,`auto`,`important`),e.style.setProperty(`bottom`,`auto`,`important`),e.style.setProperty(`top`,`${n}px`,`important`),e.style.setProperty(`left`,`${r}px`,`important`),Yx(e)}var Jx=new WeakSet;function Yx(e){if(Jx.has(e))return;Jx.add(e);let t=e.querySelector(`.pg-box-title`)??e,n=null;t.addEventListener(`pointerdown`,r=>{if(!e.classList.contains(`pg-sidebar-floating`))return;let i=r.target;if(i.closest(`button, input, select, a`)||t===e&&i.closest(`.pg-nav-view, .pg-box-pane`))return;let a=e.getBoundingClientRect();n={x:r.clientX-a.left,y:r.clientY-a.top},e.setPointerCapture(r.pointerId),r.preventDefault()}),e.addEventListener(`pointermove`,t=>{if(!n)return;let r=(e,t)=>Math.max(0,Math.min(e,t)),i=r(t.clientX-n.x,window.innerWidth-e.offsetWidth),a=r(t.clientY-n.y,window.innerHeight-e.offsetHeight);e.style.setProperty(`left`,`${i}px`,`important`),e.style.setProperty(`top`,`${a}px`,`important`)});let r=()=>{n=null};e.addEventListener(`pointerup`,r),e.addEventListener(`pointercancel`,r)}function Xx(e){let t=ss(),n=N();M(e,j`
        <div class="pg-chats-head">
            <span class="pg-pset-label">${h(`pnl.set.chats`)}</span>
        </div>
        ${t.length?j`
        <ul class="pg-chats-list">${t.map(e=>j`
            <li>
                <label class="pg-chats-row ${e.chatId===n&&`pg-chats-current`}" title="${e.chatId||h(`pnl.set.unsorted`)}">
                    <input type="checkbox" class="pg-chats-check" value="${e.chatId}">
                    <span class="pg-chats-name">${e.chatId||h(`pnl.set.unsorted`)}</span>
                    ${e.chatId===n&&j`<span class="pg-chats-badge">${h(`pnl.set.thisChat`)}</span>`}
                    <span class="pg-chats-count">${e.count}</span>
                </label>
            </li>`)}
        </ul>
        <div class="pg-chats-actions" hidden>
            <button class="pg-btn pg-btn-secondary" data-chats="move">${h(`pnl.set.moveHere`)}</button>
            <button class="pg-btn pg-btn-secondary pg-btn-danger" data-chats="delete">${h(`pnl.set.deleteChats`)}</button>
        </div>`:j`<div class="pg-pset-hint">${h(`pnl.set.chatsEmpty`)}</div>`}`)}var Zx=e=>[...e.querySelectorAll(`.pg-chats-check:checked`)].map(e=>e.value);async function Qx(e,t){let n=Zx(e);if(n.length){if(t===`move`){if(!N()){x(h(`pnl.set.noChatOpen`),`warn`);return}x(h(`pnl.set.moved`,{n:cs(n)}),`ok`)}else{if(!await w(h(`pnl.set.deleteChatsConfirm`,{n:n.length}),{yes:h(`wb.delSetBtn`),no:h(`confirmNo`)}))return;x(h(`pnl.set.chatsDeleted`,{n:ls(n)}),`ok`)}Xx(e),Y()}}function $x(e){Xx(e),e.addEventListener(`change`,()=>{let t=e.querySelector(`.pg-chats-actions`);t&&(t.hidden=Zx(e).length===0)}),e.addEventListener(`click`,t=>{let n=t.target.closest(`[data-chats]`)?.dataset.chats;n&&Qx(e,n)})}var eS=[{value:`browser`,key:`tts.pBrowser`},{value:`host`,key:`tts.pHost`},{value:`st`,key:`tts.pSt`},{value:`elevenlabs`,name:`ElevenLabs`},{value:`google`,name:`Google Cloud`},{value:`openai`,key:`tts.pOpenai`},{value:`fish`,name:`Fish Audio`}].filter(e=>(g.stVoice||e.value!==`st`)&&(g.ai||e.value!==`host`)),tS={"0.75":`tts.speedSlow`,"0.9":`tts.speedLittle`,1:`tts.speedNormal`},nS=(e,t,n,r=``)=>j`
    <label class="pg-pset-field">
        <span class="pg-pset-label">${t}</span>
        <input type="text" class="text_pole" data-setting="${e}" value="${n}" placeholder="${r}"
               autocomplete="off" spellcheck="false">
    </label>`,rS=e=>j`
    <label class="pg-pset-field">
        <span class="pg-pset-label">${h(`tts.key`)}</span>
        <input type="password" class="text_pole" data-setting="${e}" data-key-field autocomplete="new-password" spellcheck="false">
    </label>`;function iS(e){let t=C();e.querySelectorAll(`input[data-key-field]`).forEach(e=>{e.value=String(t[e.dataset.setting??``]??``)})}var aS=(e,t,n,r)=>j`
    <div class="pg-pset-field">
        <span class="pg-pset-label">${h(`tts.voice`)}</span>
        <div class="pg-voice-pick">
            <input type="text" class="text_pole" data-setting="${e}" value="${t}" placeholder="${n}"
                   autocomplete="off" spellcheck="false" list="pg-voice-list" aria-label="${h(`tts.voice`)}">
            ${r&&j`<button class="pg-btn pg-btn-secondary pg-btn-compact" data-voice="list">${h(`tts.voiceList`)}</button>`}
        </div>
        <datalist id="pg-voice-list"></datalist>
    </div>`;function oS(e){let t=e.voice_provider??`browser`,n={browser:j`<span class="pg-pset-hint">${h(`tts.hintBrowser`)}</span>`,host:j`
            ${aS(`voice_host_voice`,e.voice_host_voice??``,h(`tts.hostVoicePh`),!0)}
            <span class="pg-pset-hint">${h(`tts.hintHost`,{name:g.ai?.name??``})}</span>`,st:j`
            ${nS(`voice_st_voice`,h(`tts.stVoice`),e.voice_st_voice??``,h(`tts.stVoicePh`))}
            <span class="pg-pset-hint">${h(`tts.hintSt`)}</span>`,elevenlabs:j`
            ${rS(`voice_el_key`)}
            ${aS(`voice_el_voice`,e.voice_el_voice??``,h(`tts.voiceIdPh`),!0)}
            ${nS(`voice_el_model`,h(`tts.model`),e.voice_el_model??``,H.elevenlabsModel)}`,google:j`
            ${rS(`voice_gg_key`)}
            ${aS(`voice_gg_voice`,e.voice_gg_voice??``,h(`tts.voiceDefaultPh`),!0)}`,openai:j`
            ${aS(`voice_oa_voice`,e.voice_oa_voice??``,H.openaiVoice,!1)}`,fish:j`
            ${rS(`voice_fish_key`)}
            ${aS(`voice_fish_voice`,e.voice_fish_voice??``,h(`tts.fishVoicePh`),!1)}
            ${nS(`voice_fish_model`,h(`tts.model`),e.voice_fish_model??``,H.fishModel)}`},r=Al.includes(t);return j`
        ${n[t]??n.browser}
        ${r&&j`
        ${t!==`host`&&j`<label class="pg-pset-row">
            <span class="pg-pset-label">${h(`tts.speed`)}</span>
            <select class="text_pole pg-pset-select" data-setting="voice_speed">${Ml.map(t=>j`
                <option value="${t}" ${t===(e.voice_speed??`0.9`)&&j`selected`}>${h(tS[t])}</option>`)}
            </select>
        </label>`}
        <label class="pg-pset-row">
            <span class="pg-pset-label">${h(`tts.save`)}</span>
            <input type="checkbox" class="pg-pset-check" data-setting="voice_save" ${e.voice_save!==!1&&j`checked`}>
        </label>
        ${g.stVoice&&j`<label class="pg-pset-row">
            <span class="pg-pset-label">${h(`tts.proxy`)}</span>
            <input type="checkbox" class="pg-pset-check" data-setting="voice_proxy" ${!!e.voice_proxy&&j`checked`}>
        </label>
        <span class="pg-pset-hint">${h(`tts.hintProxy`)}</span>`}`}
        <details class="pg-voice-cast">
            <summary>${h(`cast.title`)}</summary>
            <div class="pg-voice-cast-rows"></div>
        </details>
        <button class="pg-btn pg-btn-secondary pg-btn-block" data-voice="try">🔊 ${h(`tts.try`)}</button>`}function sS(e){let t=e.voice_provider??`browser`;if(t===`st`)return j`<span class="pg-pset-hint">${h(`cast.hintSt`)}</span>`;let n=[...new Set([..._d(),...gd(t)])],r=t===`browser`?`pg-cast-voices`:`pg-voice-list`;return j`
        ${n.length?n.map(e=>j`
        <label class="pg-pset-field">
            <span class="pg-pset-label">${e}</span>
            <input type="text" class="text_pole" data-cast="${e}" value="${md(t,e)}" placeholder="${h(`cast.default`)}"
                   autocomplete="off" spellcheck="false" list="${r}">
        </label>`):j`<span class="pg-pset-hint">${h(`cast.none`)}</span>`}
        ${t===`browser`&&j`<datalist id="pg-cast-voices">${ol(Hc(b())).map(e=>j`<option value="${e}"></option>`)}</datalist>`}
        <span class="pg-pset-hint">${h(`cast.hint`)}</span>`}var cS=[{value:`browser`,key:`pron.engineBrowser`},{value:`azure`,key:`pron.engineAzure`},{value:`openai`,key:`pron.engineOpenai`}],lS=(e,t,n,r)=>j`
    <label class="pg-pset-row">
        <span class="pg-pset-label">${t}</span>
        <select class="text_pole pg-pset-select" data-setting="${e}">${r.map(e=>j`
            <option value="${e.value}" ${e.value===n&&j`selected`}>${e.label}</option>`)}
        </select>
    </label>`,uS=(e,t,n)=>j`
    <label class="pg-pset-row">
        <span class="pg-pset-label">${t}</span>
        <input type="checkbox" class="pg-pset-check" data-setting="${e}" ${n&&j`checked`}>
    </label>`;function dS(e){let t=e.pron_engine??`browser`,n=e.voice_provider===`openai`,r=t===`openai`,i=!!e.pron_advice,a=g.stConnection&&!(e.voice_oa_key??``).trim()&&!(e.voice_oa_url??``).trim()&&!ie[Te.OPENAI];return j`
        ${i&&t===`browser`&&j`<span class="pg-pset-hint">${h(`pron.adviceNeedsRec`)}</span>`}
        ${(n||r||i)&&j`
        <div class="pg-voice-conn-block">
            <span class="pg-pset-label pg-voice-conn-title">OpenAI</span>
            ${rS(`voice_oa_key`)}
            <span class="pg-pset-hint">${h(g.stConnection?`voice.keyFallbackSt`:`voice.keyFallback`)}</span>
            ${a&&j`<span class="pg-pset-hint">${h(`voice.useStNone`)}</span>`}
            <details class="pg-voice-adv">
                <summary>${h(`voice.advanced`)}</summary>
                ${nS(`voice_oa_url`,h(`tts.url`),e.voice_oa_url??``,`https://api.openai.com/v1`)}
                ${n&&nS(`voice_oa_model`,h(`voice.ttsModel`),e.voice_oa_model??``,H.openaiModel)}
                ${r&&nS(`pron_stt_model`,h(`pron.sttModel`),e.pron_stt_model??``,`gpt-4o-mini-transcribe`)}
                ${i&&nS(`pron_advice_model`,h(`pron.adviceModel`),e.pron_advice_model??``,`gpt-audio`)}
                <span class="pg-pset-hint">${h(`pron.hintOpenai`)}</span>
            </details>
        </div>`}
        ${t===`azure`&&j`
        <div class="pg-voice-conn-block">
            <span class="pg-pset-label pg-voice-conn-title">Azure</span>
            ${rS(`pron_azure_key`)}
            ${nS(`pron_azure_region`,h(`pron.region`),e.pron_azure_region??``,h(`pron.regionPh`))}
            <span class="pg-pset-hint">${h(`pron.hint`)}</span>
        </div>`}`}function fS(e){return j`
        ${lS(`voice_provider`,h(`tts.service`),e.voice_provider??`browser`,eS.map(e=>({value:e.value,label:`key`in e?h(e.key,{name:g.ai?.name??``}):e.name})))}
        <div class="pg-voice-rows">${oS(e)}</div>
        ${lS(`pron_engine`,h(`pron.engine`),e.pron_engine??`browser`,cS.map(e=>({value:e.value,label:h(e.key)})))}
        ${uS(`pron_advice`,h(`pron.adviceToggle`),!!e.pron_advice)}
        <div class="pg-voice-conn">${dS(e)}</div>`}async function pS(e,t){let n=e.querySelector(`#pg-voice-list`);if(n){t.disabled=!0;try{let t=await jd(b());M(n,j`${t.map(e=>j`<option value="${e.id}">${e.label}</option>`)}`),x(h(`tts.voicesFound`,{n:t.length}),`info`,3e3),e.querySelector(`.pg-voice-pick input`)?.focus()}catch(e){Cd(e)}finally{t.disabled=!1}}}function mS(e){let t=new Set([`voice_provider`,`pron_engine`,`pron_advice`]);e.addEventListener(`change`,n=>{let r=n.target.dataset?.setting??``;if(r===`voice_provider`){let t=e.querySelector(`.pg-voice-rows`);t&&(M(t,oS(C())),iS(t))}if(t.has(r)){let t=e.querySelector(`.pg-voice-conn`);t&&(M(t,dS(C())),iS(t))}}),iS(e),e.addEventListener(`toggle`,e=>{let t=e.target;if(!t.matches?.(`.pg-voice-cast`)||!t.open)return;let n=t.querySelector(`.pg-voice-cast-rows`);n&&M(n,sS(C()))},!0),e.addEventListener(`change`,e=>{let t=e.target;t.dataset?.cast!==void 0&&hd(C().voice_provider??`browser`,t.dataset.cast,t.value)}),e.addEventListener(`click`,t=>{let n=t.target.closest(`button[data-voice]`);n&&(n.dataset.voice===`try`?Nd(b()):pS(e,n))})}var hS=e=>e.trim().replace(/^\||\|$/g,``).split(`|`).map(e=>e.trim());function gS(e){let t=a(`div`,{className:`pg-licenses`}),n=e.replace(/\r/g,``).split(`
`),r=[],i=()=>{let e=r.join(`
`).trim();e&&t.append(a(`pre`,{className:`pg-licenses-text`,textContent:e})),r=[]};for(let e=0;e<n.length;e++){let o=n[e],s=/^(#{1,3})\s+(.*)$/.exec(o);if(s)i(),t.append(a(s[1].length===1?`h3`:`h4`,{textContent:s[2]}));else if(o.startsWith(`|`)){i();let r=[];for(;e<n.length&&n[e].startsWith(`|`);e++)/^\|[\s|:-]+\|$/.test(n[e].trim())||r.push(hS(n[e]));e--;let[o,...s]=r;t.append(a(`table`,{className:`pg-licenses-table`},[a(`thead`,{},[a(`tr`,{},o.map(e=>a(`th`,{textContent:e})))]),a(`tbody`,{},s.map(e=>a(`tr`,{},e.map(e=>a(`td`,{textContent:e})))))]))}else r.push(o.replace(/`/g,``))}return i(),t}async function _S(){try{Oe(h(`lic.title`),gS(await g.notices()))}catch(e){x(h(`lic.failed`,{msg:e instanceof Error?e.message:String(e)}),`err`,4e3)}}async function vS(){try{return await g.version()}catch{return`?`}}async function yS(){let e=C();return{Polyglot:await vS(),Connection:e.provider===`st`||e.provider===`profile`||!e.model?e.provider:`${e.provider} (${e.model})`,Storage:R(),"Study language":b(),Browser:navigator.userAgent,Time:new Date().toISOString()}}async function bS(){let e=ae(await yS());try{await navigator.clipboard.writeText(e),x(h(`diag.copied`),`ok`,4e3)}catch{Oe(h(`diag.title`),a(`pre`,{className:`pg-licenses-text`,textContent:e}))}}var xS=[{action:`import`,icon:`fa-file-import`,title:`pnl.set.import`},{action:`csv`,icon:`fa-file-csv`,title:`pnl.set.export`},{action:`txt`,icon:`fa-file-lines`,title:`pnl.set.exportTxt`},{action:`apkg`,icon:`fa-layer-group`,title:`pnl.set.exportApkg`},{action:`pdf`,icon:`fa-file-pdf`,title:`pnl.set.exportPdf`},{action:`backup`,icon:`fa-box-archive`,title:`pnl.set.backup`}],SS={file:`data.whereFile`,offline:`data.whereOffline`,loading:`data.whereLoading`,chat:`data.whereChat`},CS=[{value:`show`,label:`furi.show`},{value:`hover`,label:`furi.hover`}],wS=[{value:`0.5`,label:`furi.small`},{value:`0.65`,label:`furi.medium`},{value:`0.8`,label:`furi.large`}],TS=[{value:`dark`,label:`set.themeDark`},{value:`light`,label:`set.themeLight`},{value:`breeze`,label:`set.themeBreeze`},{value:`milk`,label:`set.themeMilk`}],ES=(e,t)=>j`
    <section class="pg-pset-section">
        <h3 class="pg-pset-section-title">${e}</h3>
        ${t}
    </section>`,DS=(e,t,n)=>j`
    <label class="pg-pset-row">
        <span class="pg-pset-label">${t}</span>
        <input type="checkbox" class="pg-pset-check" data-setting="${e}" ${n&&j`checked`}>
    </label>`,OS=(e,t,n,r)=>j`
    <label class="pg-pset-row">
        <span class="pg-pset-label">${t}</span>
        <select class="text_pole pg-pset-select" data-setting="${e}">${r.map(e=>j`
            <option value="${e.value}" ${e.value===n&&j`selected`}>${h(e.label)}</option>`)}
        </select>
    </label>`,kS=(e,t,n,r,i)=>j`
    <label class="pg-pset-field">
        <span class="pg-pset-label">${t}</span>
        <input type="text" class="text_pole" data-setting="${e}" value="${n}"
               placeholder="${r}" autocomplete="off" spellcheck="false">
        ${i&&j`<span class="pg-pset-hint">${i}</span>`}
    </label>`,AS=(e,t,n)=>j`
    <label class="pg-pset-row">
        <span class="pg-pset-label">${t}</span>
        <input type="number" class="text_pole pg-pset-number" data-setting="${e}" value="${n}" min="0" max="999" step="1">
    </label>`,jS=(e,t)=>j`
    <button class="pg-btn pg-btn-secondary pg-btn-block pg-btn-danger" data-action="${e}">${t}</button>`;function MS(e){let t=e.panel_theme??`dark`;return j`
    <div class="pg-pset">
        ${ES(h(`tab.wordbook`),j`
            <div class="pg-pset-icon-row">${xS.map(e=>j`
                <button class="pg-pset-icon-btn" data-action="${e.action}" title="${h(e.title)}" aria-label="${h(e.title)}">
                    <i class="fa-solid ${e.icon}"></i>
                </button>`)}
            </div>
            <div class="pg-pset-hint pg-io-progress" aria-live="polite" hidden></div>
            <button class="pg-btn pg-btn-secondary pg-btn-block" data-action="reanalyse" title="${h(`wb.reanalyseTip`)}">
                ✨ ${h(`wb.reanalyse`)}
            </button>
            <div class="pg-run-bar pg-reanalysis-bar" hidden></div>
            ${Xo()&&j`
            <label class="pg-pset-row">
                <span class="pg-pset-label">${h(`pnl.set.chatOnly`)}</span>
                <input type="checkbox" class="pg-pset-check pg-scope-check" ${Yo()===`chat`&&j`checked`}>
            </label>`}
            ${DS(`wordbook_lang_only`,h(`pnl.set.langOnly`,{lang:b()}),e.wordbook_lang_only!==!1)}
            ${DS(`wordbook_hide_known`,h(`pnl.set.hideKnown`),e.wordbook_hide_known!==!1)}
            ${$o()>0&&j`
            <button class="pg-btn pg-btn-secondary pg-btn-block" data-action="adopt-lang">
                ${h(`pnl.set.adoptLang`,{n:$o(),lang:b()})}
            </button>`}
            ${Xo()&&j`<div class="pg-pset-chats"></div>`}
            <div class="pg-pset-hint pg-pset-store">${h(`data.where`)}: ${h(R()===`file`&&Ne()?`data.whereBrowser`:SS[R()])}</div>`)}

        ${ES(h(`tab.learn`),j`
            ${DS(`auto_save_idioms`,h(`pnl.set.autoIdioms`),e.auto_save_idioms!==!1)}
            ${AS(`srs_new_per_day`,h(`pnl.set.newPerDay`),e.srs_new_per_day??20)}
            ${jS(`reset-srs`,h(`pnl.set.resetSrs`))}
            ${jS(`clear-conj`,h(`pnl.set.clearConj`))}
            ${jS(`clear-chat`,h(`pnl.set.clearChat`))}
            ${kS(`dict_url_custom`,h(`pnl.set.dictUrl`),e.dict_url_custom??``,h(`pnl.set.dictUrlPh`),h(`pnl.set.dictUrlDesc`))}`)}

        ${ES(h(`tts.section`),fS(e))}

        ${Hy()&&ES(h(`furi.section`),j`
            ${OS(`furigana_display`,h(`furi.display`),e.furigana_display??`show`,CS)}
            ${OS(`furigana_size`,h(`furi.size`),String(e.furigana_size??.65),wS)}
            ${DS(`furigana_auto`,h(`furi.auto`),!!e.furigana_auto)}
            <span class="pg-pset-hint">${h(`furi.autoHint`)}</span>`)}

        ${ES(h(`set.panelSection`),j`
            <label class="pg-pset-row">
                <span class="pg-pset-label">${h(`pnl.set.theme`)}</span>
                <select class="text_pole pg-pset-select" data-setting="panel_theme">${TS.map(e=>j`
                    <option value="${e.value}" ${e.value===t&&j`selected`}>${h(e.label)}</option>`)}
                </select>
            </label>
            ${DS(`panel_floating`,h(`pnl.set.floating`),!!e.panel_floating)}
            ${kS(`panel_bg_image`,h(`pnl.set.bgUrl`),e.panel_bg_image??``,h(`pnl.set.bgUrlPh`))}`)}

        <footer class="pg-pset-footer">
            <button class="pg-link-btn" data-action="licenses">${h(`lic.link`)}</button>
            <button class="pg-link-btn" data-action="diagnostics">${h(`diag.link`)}</button>
        </footer>
    </div>`}async function NS(e,t,n){await w(e)&&(await n(),x(`${t} ✓`))}async function PS(e,t){let n=e.innerHTML;e.disabled=!0,e.setAttribute(`aria-busy`,`true`),e.innerHTML=`<i class="fa-solid fa-spinner fa-spin"></i>`;let r=e.closest(`.pg-pset`)?.querySelector(`.pg-io-progress`),i=(e,t)=>{r&&t&&(r.textContent=h(`pnl.set.mediaProgress`,{done:e.toLocaleString(),total:t.toLocaleString()}),r.hidden=!1)};try{await t(i)}catch(e){console.error(`[Polyglot] export failed`,e),x(h(`pnl.set.exportFailed`,{err:e instanceof Error?e.message:String(e)}),`err`,8e3)}finally{r&&(r.hidden=!0),e.disabled=!1,e.removeAttribute(`aria-busy`),e.innerHTML=n}}function FS(){let e=new Set(V().map(e=>e.word)),t=z();for(let n of t)if(e.has(n.word)){for(let e of Vr)delete n[e];delete n.known,n.srs_reset_at=Date.now()}B(t)}var IS=1e3;async function LS(e){let t=V();t.length?t.length>IS&&!await w(h(`pnl.set.pdfLarge`,{n:t.length,pages:t.length*2}))||await PS(e,async()=>yv(t,await vn(b()))):x(h(`wb.noExport`),`warn`)}async function RS(e){let t=V();t.length?await PS(e,async e=>{let n=await uy(t,gs(),b(),e);x([h(`pnl.set.apkgDone`,{n:n.words,m:n.media}),n.missing?h(`pnl.set.apkgMissing`,{n:n.missing}):``].filter(Boolean).join(` `),n.missing?`warn`:`info`,4e3)}):x(h(`wb.noExport`),`warn`)}function zS(e,t){let n=e.querySelector(`.pg-reanalysis-bar`);n&&Ym(n,e=>{t.textContent=e?h(`wb.reanalysing`):`✨ ${h(`wb.reanalyse`)}`})}var BS={import:()=>Jm(),csv:()=>Cs(V()),txt:()=>Ts(V()),backup:(e,t)=>PS(t,async e=>{await sp(!1,e)}),pdf:(e,t)=>LS(t),apkg:(e,t)=>RS(t),reanalyse:zS,licenses:()=>_S(),diagnostics:()=>bS(),"reset-srs":()=>NS(h(`pnl.set.resetSrsConfirm`),h(`pnl.set.resetSrs`),FS),"clear-conj":()=>NS(h(`pnl.set.clearConjConfirm`),h(`pnl.set.clearConj`),hs),"clear-chat":()=>NS(h(`pnl.set.clearChatConfirm`),h(`pnl.set.clearChat`),Ax),"adopt-lang":async(e,t)=>{let n=$o();await w(h(`pnl.set.adoptLangConfirm`,{n,lang:b()}),{yes:h(`pnl.set.adoptLangYes`),no:h(`wb.editCancel`)})&&(x(h(`pnl.set.adoptLangDone`,{n:ts(),lang:b()}),`info`,3e3),t.remove(),Y())}},VS={panel_theme:Wx,furigana_display:ub,furigana_size:()=>{ub(),db()},panel_bg_image:Wx,panel_floating:e=>{let t=Hx();t&&qx(t,!!e)},wordbook_lang_only:()=>Y(),wordbook_hide_known:()=>Y()};function HS(e){if(e instanceof HTMLInputElement&&e.type===`checkbox`)return e.checked;if(e.dataset.setting===`furigana_size`)return Number(e.value);if(e instanceof HTMLInputElement&&e.type===`number`){let t=e.value.trim()===``?NaN:Math.round(Number(e.value));return Number.isFinite(t)?Math.min(Math.max(t,0),999):20}return e.dataset.setting===`panel_bg_image`?e.value.trim():e.value}function US(){let e=document.createElement(`div`);e.className=`pg-box-pane`,M(e,MS(C()));let t=e.querySelector(`.pg-pset-chats`);t&&$x(t),e.addEventListener(`click`,t=>{let n=t.target.closest(`button[data-action]`);n&&BS[n.dataset.action??``]?.(e,n)});let n=e=>{let t=e.target.closest(`[data-setting]`),n=t?.dataset.setting;if(!t||!n)return;let r=HS(t);Ye({[n]:r}),VS[n]?.(r)},r=e=>[`text`,`password`].includes(e.target.type);return e.addEventListener(`input`,e=>{r(e)&&n(e)}),e.addEventListener(`change`,e=>{r(e)||n(e)}),mS(e),e.querySelector(`.pg-scope-check`)?.addEventListener(`change`,e=>{Ye({wordbook_scope:e.target.checked?`chat`:`all`}),Y()}),e}var WS=[`wordbook`,`learn`,`settings`],GS=null,KS=null;function qS(e,t){let n=e.querySelector(`.pg-nav-tab[data-tab-id="${t}"]`);n&&!n.classList.contains(`active`)&&n.click()}function JS(e=`learn`,n=null){let r=document.getElementById(Vx);if(r){if(!n){qS(r,e);return}GS?GS.showDetail(n):KS=n,e===`learn`&&qS(r,`learn`);return}KS=n;let i=o([{name:h(`tab.wordbook`),id:`wordbook`,render:()=>{let e=Object.assign(document.createElement(`div`),{className:`pg-box-pane`});return J(e),e}},{name:h(`tab.learn`),id:`learn`,render:()=>(GS?.dispose(),GS=new ov(KS,{lookup:e=>XS(e),save:Xm,ignore:e=>{os(e),Y()}}),KS=null,GS.el),onShow:()=>GS?.refresh()},{name:h(`tab.settings`),id:`settings`,render:US}],n?`learn`:e);t(i,{panelId:Bx,extra:`pg-sidebar`,onDismiss:()=>{ZS(),gl(),qm(),GS?.dispose(),GS=null,KS=null}}),Gx()}var YS=null;async function XS(e,t=``){YS?.abort();let r=new AbortController;YS=r,JS(`learn`,{type:`loading`,word:e});try{let i=ct(b()),{data:a}=await je.json({prompt:lt(e,t,b(),C().cefr_level,y()),signal:r.signal,accept:re,missing:e=>[...n(e,i),...Array.isArray(e.word_family)?[]:[`word_family`]]}),o=l(a,i);o.word_family=(Array.isArray(a.word_family)?a.word_family:[]).filter(e=>typeof e?.form==`string`&&e.form.trim()),r.signal.aborted||JS(`learn`,{type:`word`,data:{...o,word:o.word||e}})}catch(t){r.signal.aborted||JS(`learn`,{type:`error`,word:e,message:t instanceof Error?t.message:String(t)})}finally{YS===r&&(YS=null)}}function ZS(){YS?.abort(),YS=null}var QS=200,$S={above:44,below:8,margin:4},eC=null;function tC(){eC?.remove(),eC=null}function nC(e){let t=e.getRangeAt(0),n=jt(t.startContainer);if(!n)return``;let r=A(n),i=tn(e).trim(),a=$t(n,t.startContainer,t.startOffset);return a<0&&(a=r.indexOf(i)),a<0?r.slice(0,QS):At(r,a,a+i.length)}function rC(e,t,n){let r=e.offsetWidth,i=t.left+scrollX+t.width/2;e.style.left=`${Math.max($S.margin+scrollX,Math.min(i-r/2,scrollX+innerWidth-r-$S.margin))}px`;let a=t.top+scrollY-$S.above,o=t.bottom+scrollY+$S.below;e.style.top=`${n||a<scrollY+$S.margin?o:a}px`}function iC(e,t,n){let r=tn(e).trim(),i=nC(e),a=e.getRangeAt(0).cloneRange(),o=a.getBoundingClientRect();tC(),eC=Object.assign(document.createElement(`div`),{className:`pg-sel-tooltip`}),M(eC,j`
        <button class="pg-sel-btn" data-sel="lookup"><i class="fa-solid fa-magnifying-glass"></i> ${h(`tap.lookUp`)}</button>
        ${t&&n.canTranslate(a)&&j`
        <button class="pg-sel-btn" data-sel="translate"><i class="fa-solid fa-language"></i> ${h(`tap.translate`)}</button>`}`),eC.addEventListener(`click`,e=>{let t=e.target.closest(`[data-sel]`)?.dataset.sel;t&&(e.stopPropagation(),tC(),getSelection()?.removeAllRanges(),t===`translate`?n.translate(a):XS(r,i))}),document.body.appendChild(eC);let s=eC;requestAnimationFrame(()=>rC(s,o,t))}function aC(e){let t=t=>{eC?.contains(t.target)||(document.querySelector(E.chat)?.contains(t.target)?setTimeout(()=>{let n=getSelection(),r=n?tn(n).trim():``;!n?.rangeCount||!r||r.length>QS?tC():iC(n,t.type===`touchend`,e)},Ie.tooltipShow):tC())},n=e=>{eC&&!eC.contains(e.target)&&tC()};document.addEventListener(`mouseup`,t),document.addEventListener(`mousedown`,n),document.addEventListener(`touchend`,t,{passive:!0}),document.addEventListener(`touchstart`,n,{passive:!0});let r=!1,i=()=>{let e=document.querySelector(E.chat);e&&!r&&(e.addEventListener(`scroll`,tC,{passive:!0}),r=!0)};i(),setTimeout(i,Ie.menuReattach)}var oC=3,sC=800,cC=new Map;function lC(e,t){let n=null,r=0;if(document.caretRangeFromPoint){let i=document.caretRangeFromPoint(e,t);i&&(n=i.startContainer,r=i.startOffset)}else if(document.caretPositionFromPoint){let i=document.caretPositionFromPoint(e,t);i&&(n=i.offsetNode,r=i.offset)}let i=n instanceof Element?n:n?.parentElement,a=i?.closest(E.aiMes);return!n||!a||i?.closest(`.pg-clickable-word, .pg-tap-bubble, .pg-para-trans`)?null:{node:n,offset:r,mesId:O(a)??``}}function uC({node:e,offset:t}){let n=jt(e);if(!n)return null;let r=A(n),i=$t(n,e,t),a=n.querySelector(`.pg-dlg`)?Bo(n,r).find(e=>i>=e.start&&i<e.end):void 0,o=a?r.slice(a.start,a.end).trim():At(r,Math.max(0,i));if(o.length<oC)return null;let s=e;for(;s&&s.parentNode!==n;)s=s.parentNode;return{textEl:n,anchorEl:s instanceof HTMLElement?s:null,sentence:o}}var dC=e=>typeof e==`string`?e:``,fC=e=>(Array.isArray(e)?e:[]).filter(e=>T(e)&&typeof e.form==`string`&&!!e.form.trim()).map(e=>({form:e.form,base:dC(e.base)||e.form,meaning:dC(e.meaning),...typeof e.level==`string`&&{level:e.level},...typeof e.reading==`string`&&{reading:e.reading}})),pC=e=>T(e)&&typeof e.translation==`string`?{translation:e.translation,...typeof e.literal==`string`&&{literal:e.literal},key_verbs:fC(e.key_verbs)}:null,mC=new Map,hC=300;async function gC(e,t){let n=`${b()}\u0000${y()}\u0000${e.sentence}`;if(cC.get(t)?.abort(),!vh(e,{kind:`loading`}))return;let r=mC.get(n);if(r){vh(e,{kind:`result`,result:r});return}let i=new AbortController;cC.set(t,i);try{let{data:t}=await je.json({prompt:ut(e.sentence,b(),y()),signal:i.signal,accept:pC});mC.size>=hC&&mC.delete(mC.keys().next().value),mC.set(n,t),i.signal.aborted||vh(e,{kind:`result`,result:t})}catch(t){i.signal.aborted||vh(e,{kind:`error`,message:t instanceof Error?t.message:String(t)})}finally{cC.get(t)===i&&cC.delete(t)}}async function _C(e){let t=uC(e);t&&await gC(t,e.mesId)}var vC=e=>!!document.querySelector(E.chat)?.contains(e),yC=-1/0;function bC(e){if(performance.now()-yC<sC||!vC(e.target))return;let t=lC(e.clientX,e.clientY);t&&(getSelection()?.removeAllRanges(),tC(),_C(t))}function xC(e){e.target.closest(`.pg-tap-bubble, #pg-box-pg-learning-panel, .pg-conj-overlay`)||wC()}function SC(e){let t=(e.startContainer instanceof Element?e.startContainer:e.startContainer.parentElement)?.closest(E.aiMes);t&&_C({node:e.startContainer,offset:e.startOffset,mesId:O(t)??``})}function CC(){document.addEventListener(`touchstart`,()=>{yC=performance.now()},{passive:!0,capture:!0}),document.addEventListener(`dblclick`,bC),document.addEventListener(`click`,xC);let e=e=>!!(e instanceof Element?e:e.parentElement)?.closest(Kt);aC({translate:SC,canTranslate:t=>!e(t.startContainer)&&!!jt(t.startContainer)?.closest(E.aiMes)})}function wC(e=null){let t=e?`${Ot(e)} `:``;document.querySelectorAll(`${t}.pg-tap-bubble`).forEach(gh)}function TC(){cC.forEach(e=>e.abort()),cC.clear()}var EC=new Set([`PRE`,`TABLE`,`HR`,`SCRIPT`,`STYLE`,`TEMPLATE`,`IFRAME`,`svg`]),DC=new Set([`P`,`H1`,`H2`,`H3`,`H4`,`H5`,`H6`,`DT`,`SUMMARY`]);function OC(e,t){let n=``,r=e=>{e instanceof Text?t.has(e)||(n+=e.data):e instanceof Element&&!qt(e)&&(e.tagName===`BR`?n+=`
`:e.childNodes.forEach(r))};return e.forEach(r),n.replace(/[ \t\u00a0]+/g,` `).replace(/ *\n */g,`
`).trim()}var kC=e=>e instanceof Element&&e.tagName===`BR`,AC=e=>e instanceof Text&&!e.data.trim();function jC(e){let t=e.nextSibling;for(;t&&AC(t);)t=t.nextSibling;return t}function MC(e,t=new Set){let n=[],r=i=>{let a=[],o=[],s=!1,c=()=>{let e=o.length?OC(o,t):``;if(e){let t={text:e,key:k(e),place:()=>{}};a.push({paragraph:t,nodes:o}),n.push(t)}o=[]};for(let e of[...i.childNodes]){if(e instanceof Element){if(qt(e)||EC.has(e.tagName)){c();continue}if(Yt.has(e.tagName)||e.querySelector(Xt)){c(),s=!0,r(e);continue}if(kC(e)&&kC(jC(e))){c();continue}}o.push(e)}c();let l=a.length===1&&!s&&i!==e&&DC.has(i.tagName);for(let{paragraph:e,nodes:t}of a){let n=[...t].reverse().find(e=>!kC(e)&&!AC(e))??t[t.length-1];e.place=e=>{l?i.after(e):n.parentNode?.insertBefore(e,n.nextSibling)}}};return r(e),n}var NC=`pg-para-trans`,PC=`pg-para-btn`,FC=xn(S.translations),IC=6,LC=new Map,Q=new Map,RC=new Map,zC=()=>(C().para_translate??`button`)!==`off`;function BC(e){let t=Object.assign(document.createElement(`div`),{className:`${NC} ${py}`});return e.t.split(`
`).forEach((e,n)=>{n&&t.append(document.createElement(`br`)),t.append(e)}),e.n&&t.append(Object.assign(document.createElement(`div`),{className:`pg-para-note`,textContent:e.n})),t}function VC(e){let t=Object.assign(document.createElement(`span`),{className:`pg-para-redo fa-solid fa-rotate-right`,title:h(`para.redo`),role:`button`,tabIndex:0});return t.addEventListener(`click`,n=>{n.stopPropagation(),e(t)}),t.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),t.click())}),t}function HC(e,t,n){let r=MC(e,zo(e)),i=new Map(t.p.map(e=>[e.k,e])),a=r.length===t.p.length,o=null;r.forEach((e,n)=>{let r=i.get(e.key)??(a?t.p[n]:void 0);r?.t&&(o=BC(r),e.place(o))}),o&&n&&o.append(VC(n))}function UC(e){e.querySelectorAll(`.${NC}`).forEach(e=>e.remove())}var WC=e=>T(e)&&typeof e.k==`string`&&typeof e.t==`string`&&(e.n===void 0||typeof e.n==`string`),GC=e=>T(e)&&typeof e.h==`string`&&Array.isArray(e.p)&&e.p.every(WC),KC=e=>ze(FC.get()?.[e]).filter(GC);function qC(e,t){let n=k(A(t));return KC(e).find(e=>e.h===n)}function JC(e,t){FC.set({...FC.get(),[e]:Ve(KC(e),t,IC)})}var YC=e=>document.querySelector(Ot(e))?.querySelector(`.${PC}`);function XC(e,t){LC.set(e,t),Z(e,`translation`,{draw:e=>HC(e,t,aw),strip:UC}),YC(e)?.classList.add(`pg-btn-active`)}function ZC(e){Z(e,`translation`,null),LC.delete(e),YC(e)?.classList.remove(`pg-btn-active`)}function QC(){document.querySelectorAll(`.${PC}`).forEach(e=>{let t=O(e);e.classList.toggle(`pg-btn-active`,!!t&&LC.has(t))})}var $C=/<([tn])\s+i\s*=\s*["']?(\d+)["']?[^>]*>([\s\S]*?)<\/\1\s*>/g;function ew(e,t){let n=new Map,r=new Map;for(let[,i,a,o]of e.matchAll($C)){let e=Number(a),s=o.trim(),c=i===`t`?n:r;e<t&&s&&!c.has(e)&&c.set(e,s)}return[...n].sort(([e],[t])=>e-t).map(([e,t])=>({i:e,text:t,note:r.get(e)??``}))}var tw=2;function nw(e){let t=_(),n=Number(e),r=t.chat??[],i=e=>r[e]?.name||(r[e]?.is_user?t.name1:t.name2)||`?`,a=[];for(let e=n-1;e>=0&&a.length<tw;e--){let t=r[e],n=t&&!t.is_system&&typeof t.mes==`string`?Ho(t.mes,C()):``;n&&a.unshift(`${i(e)}: ${n}`)}let o=``;for(let e=n-1;e>=0&&!o;e--){let t=KC(String(e)),n=t.length?D(String(e)):null,r=n?t.find(e=>e.h===k(A(n))):t.at(-1);r?.p.length&&(o=`${i(e)}: ${r.p.map(e=>e.t).join(`

`)}`)}return{charName:t.name2,userName:t.name1,before:a,lastTranslation:o,wishes:C().para_translate_wishes}}async function rw(e,t){let n=D(e);if(!n||Q.has(e))return;let r=MC(n,zo(n));if(!r.length){t||x(h(`para.nothing`),`info`,3e3);return}let i=N(),a=k(A(n)),o=new AbortController;Q.set(e,o),RC.set(o,a);let s=()=>[...Q].find(([,e])=>e===o)?.[0]??e;YC(s())?.classList.add(`pg-btn-busy`),mb(o,()=>o.abort(),h(`para.translating`));try{let{system:t,user:n}=Et(r.map(e=>e.text),b(),y(),nw(e)),l=await we(t,n,o.signal),u=ew(l.text,r.length);if(!u.length)throw c(`ai`,`Paragraph translation: no <t> tags${l.truncated?` (cut off)`:``}. Reply: ${l.text.slice(0,300)}`),Error(h(l.truncated?`para.cut`:`para.unreadable`));if(o.signal.aborted||i!==N())return;let d=iw(a,s());if(!d){x(h(`para.changed`),`info`,3500);return}let f=new Map(u.map(e=>[e.i,e])),p={h:a,p:r.flatMap((e,t)=>{let n=f.get(t);return n?[{k:e.key,t:n.text,...n.note&&{n:n.note}}]:[]})};XC(d,p),JC(d,p),p.p.length<r.length&&x(h(l.truncated?`para.cut`:`para.partial`),`warn`,5e3)}catch(e){if(o.signal.aborted)return;console.error(`[Polyglot] Paragraph translation error:`,e),x(h(`para.error`,{msg:e instanceof Error?e.message:String(e)}),`err`,3500)}finally{let e=s();Q.get(e)===o&&Q.delete(e),RC.delete(o),Q.has(e)||YC(e)?.classList.remove(`pg-btn-busy`),hb(o)}}function iw(e,t){let n=D(t);if(n&&k(A(n))===e)return t;for(let[t,n]of Qt())if(n===e&&D(t)?.closest(E.aiMes))return t;return null}function aw(e){let t=O(e);t&&!Q.has(t)&&rw(t,!1)}function ow(e){if(!zC())return;let t=Q.get(e);if(t){t.abort();return}let n=D(e);if(!n)return;let r=LC.get(e);if(r){ZC(e),JC(e,{...r,hidden:!0});return}let i=qC(e,n);if(i){let t={h:i.h,p:i.p};XC(e,t),JC(e,t)}else rw(e,!1)}function sw(e,t){if(C().para_translate!==`auto`||t===`history`||Q.has(e))return;let n=D(e),r=_().chat??[];n&&n.closest(E.aiMes)&&Number(e)===r.length-1&&(qC(e,n)||rw(e,!0))}function cw(){zC()?document.querySelectorAll(E.aiMes).forEach(e=>{let t=e.querySelector(E.extraMesButtons);if(!t||e.querySelector(`.${PC}`))return;let n=Object.assign(document.createElement(`div`),{className:`mes_button ${PC} fa-solid fa-language interactable`,title:h(`para.button`),tabIndex:0});n.addEventListener(`click`,()=>{let t=O(e);t&&ow(t)});let r=t.querySelector(`.pg-annotate-btn`);r?r.after(n):t.prepend(n);let i=O(e);i&&LC.has(i)&&n.classList.add(`pg-btn-active`)}):document.querySelectorAll(`.${PC}`).forEach(e=>e.remove())}function lw(){Ey();for(let e of[...LC.keys()])Cy(e,`translation`)||LC.delete(e);if(!zC())QC();else{for(let[e,t]of LC){let n=D(e);n&&t.h!==k(A(n))&&ZC(e)}for(let e of Object.keys(FC.get()??{})){if(LC.has(e))continue;let t=D(e),n=t&&qC(e,t);n&&!n.hidden&&XC(e,n)}QC()}}function uw(){Oy(`translation`,Object.keys(FC.get()??{}),lw)}function dw(){Ty(`translation`),LC.clear(),document.querySelectorAll(`.${NC}`).forEach(e=>e.remove()),dy(FC);let e=Qt(),t=[...Q].sort(([t,n],[r,i])=>Number(e.get(r)===RC.get(i))-Number(e.get(t)===RC.get(n)));Q.clear();for(let[n,r]of t){let t=RC.get(r),i=e.get(n)===t?n:[...e].find(([e,n])=>n===t&&!Q.has(e)&&D(e)?.closest(E.aiMes))?.[0];i===void 0||Q.has(i)?r.abort():Q.set(i,r)}}function fw(e){Q.get(e)?.abort(),Q.delete(e),ZC(e)}function pw(){ky(`translation`),Q.forEach(e=>e.abort()),Q.clear(),Ty(`translation`),LC.clear()}function mw(){Q.forEach(e=>e.abort());for(let e of[...LC.keys()])ZC(e)}var hw={min:500,max:1e5,step:500,fallback:4e3},gw=`__custom__`,_w=[[`English`,`🇺🇸 English`],[`Spanish`,`🇪🇸 Spanish`],[`Japanese`,`🇯🇵 Japanese`],[`Italian`,`🇮🇹 Italian`],[`French`,`🇫🇷 French`],[`German`,`🇩🇪 German`],[`Chinese`,`🇨🇳 Chinese`],[`Korean`,`🇰🇷 Korean`],[`Custom`,`✏️ Custom`]],vw=[[`en`,`🇺🇸 English`],[`es`,`🇪🇸 Spanish`],[`it`,`🇮🇹 Italian`],[`ko`,`🇰🇷 Korean`],[`custom`,`✏️ Custom`]],yw=[...g.ai?[[`host`,``]]:[],...g.stConnection?[[`st`,``],[`profile`,``]]:[],...te.filter(e=>g.stConnection||e.id!==`vertexai`).map(e=>[e.id,e.label]),[`custom`,`⚙️ Custom`]],bw=(e,t)=>j`${e.map(([e,n])=>j`<option value="${e}" ${e===t&&j`selected`}>${n}</option>`)}`,$=(e,t)=>j`
    <div class="flex-container flexGap5 pg-set-field"><label>${e}</label>${t}</div>`,xw=(e,t,n,r)=>j`
    <input type="text" class="text_pole" data-setting="${e}" data-trim value="${t}" placeholder="${n}" autocomplete="off" spellcheck="false" ${r}>`,Sw=(e,t,n,r)=>j`
    <label class="checkbox_label" title="${r}"><input type="checkbox" data-setting="${e}" ${t&&j`checked`}><span>${n}</span></label>`;function Cw(e){return j`
        <div class="pg-set-field"><b>${h(`set.skipHead`)}</b></div>
        <div class="flex-container flexGap5 pg-set-field">
            ${Sw(`skip_names`,e.skip_names,h(`set.skipNames`),h(`set.skipNamesHint`))}
            ${Sw(`skip_blocks`,e.skip_blocks,h(`set.skipBlocks`),h(`set.skipBlocksHint`))}
            ${Sw(`skip_brackets`,e.skip_brackets,h(`set.skipBrackets`),h(`set.skipBracketsHint`))}
        </div>
        ${$(h(`set.skipTags`),xw(`skip_tags`,e.skip_tags,`status, info`,j`title="${h(`set.skipTagsHint`)}"`))}
        ${$(h(`set.skipWords`),xw(`skip_words`,e.skip_words,h(`set.skipWordsPh`)))}
        <div class="pg-set-field">
            <div class="menu_button pg-skip-preview-btn">${h(`set.skipPreview`)}</div>
        </div>
        <div class="pg-skip-preview" hidden></div>`}function ww(e){let t=e.querySelector(`.pg-skip-preview`);if(!t)return;t.hidden=!1;let n=[...document.querySelectorAll(`${E.aiMes} ${E.mesText}`)].pop(),r=Ko(),i=r.length?j`<div class="pg-skip-preview-names">${h(`set.skipPreviewNames`,{list:r.join(`, `)})}</div>`:j``;if(!n){M(t,j`<div>${h(`set.skipPreviewNone`)}</div>${i}`);return}let a=Vo(n,!!C().dialogue_only);M(t,j`
        <div>${h(`set.skipPreviewCount`,{n:a.skipped.length})}</div>
        <div class="pg-skip-preview-text">${a.text}</div>
        ${i}`)}function Tw(e){let t=!!(e.route_chat_source||e.route_model);return j`
        <div class="pg-st-info-box">
            <span class="pg-st-info-icon">🔗</span>
            <span class="pg-st-info-text pg-st-live"></span>
        </div>
        <label class="pg-set-override-toggle">
            <input type="checkbox" class="pg-st-override" ${t&&j`checked`}> ${h(`set.stAdvanced`)}
        </label>
        <div class="pg-st-override-rows" ${!t&&j`hidden`}>
            ${$(`Source`,xw(`route_chat_source`,e.route_chat_source,`e.g. vertexai, makersuite, openai…`))}
            ${$(`Model`,xw(`route_model`,e.route_model,h(`set.stModelPh`)))}
        </div>`}function Ew(e){let t=ve();return j`
        ${!t.some(t=>t.id===e)&&j`<option value="" selected disabled>${h(`set.profilePick`)}</option>`}
        ${bw(t.map(e=>[e.id,xe(e)]),e)}`}function Dw(e){return ve().length?j`
        ${$(h(`set.profile`),j`<select class="text_pole pg-profile-select" data-setting="profile_id">${Ew(e.profile_id)}</select>`)}`:j`
            <div class="pg-st-info-box">
                <span class="pg-st-info-icon">🔌</span>
                <span class="pg-st-info-text">${h(`set.profileNone`)}</span>
            </div>
            <div class="pg-set-field"><div class="menu_button pg-profile-recheck">${h(`set.profileRecheck`)}</div></div>`}function Ow(e){return j`
        ${$(h(`set.hostConnection`),j`
            <select class="text_pole pg-host-select" data-setting="host_connection">
                <option value="" ${!e.host_connection&&j`selected`}>${h(`set.hostCurrent`)}</option>
                ${e.host_connection&&j`<option value="${e.host_connection}" selected>${e.host_connection}</option>`}
            </select>`)}`}async function kw(e){let t=await g.ai?.connections().catch(()=>[])??[],n=C().host_connection;M(e,j`
        <option value="">${h(`set.hostCurrent`)}</option>
        ${n&&!t.some(e=>e.id===n)&&j`<option value="${n}">${h(`set.hostGone`)}</option>`}
        ${bw(t.map(e=>[e.id,e.label]),n)}`),e.value=n}function Aw(e){M(e,Ew(C().profile_id))}function jw(e){let t=s(e.provider)?.models??[],n=!!e.model&&!t.includes(e.model);return j`
        ${g.ownKeys&&$(`API Key`,j`<input type="password" class="text_pole pg-api-key pg-own-key" placeholder="${h(`set.ownKeyPh`)}" autocomplete="off">`)}
        ${$(`Model`,j`
            <select class="text_pole pg-model-select">
                ${bw(t.map(e=>[e,e]),n?gw:e.model)}
                <option value="${gw}" ${n&&j`selected`}>${h(`set.modelManual`)}</option>
            </select>`)}
        <div class="pg-model-manual" ${!n&&j`hidden`}>
            ${xw(`model`,n?e.model:``,h(`set.modelPh`),j`data-remember-model`)}
        </div>`}function Mw(e){return j`
        ${$(`Base URL`,xw(`ext_base_url`,e.ext_base_url,`https://...`))}
        ${$(`API Key`,j`<input type="password" class="text_pole pg-api-key" data-setting="ext_api_key" data-trim placeholder="sk-..." autocomplete="off">`)}
        ${$(`Model`,xw(`model`,e.model,`Model name`))}`}function Nw(e){return e.provider===`host`?Ow(e):e.provider===`st`?Tw(e):e.provider===`profile`?Dw(e):e.provider===`custom`?Mw(e):s(e.provider)?jw(e):j``}function Pw(e){let t=e.querySelector(`.pg-st-live`);if(!t)return;let n=C(),r=_().chatCompletionSettings??{},i=r.chat_completion_source||`(none)`,a=r[Ge.get(i)||`model`]||r.model||``;M(t,n.route_chat_source||n.route_model?j`Active: <b>${n.route_chat_source||i}</b> / <b>${n.route_model||a||`default`}</b>
               <span class="pg-st-override-note">${h(`set.advOverrideActive`)}</span>`:j`ST connection: <b>${i}</b>${a&&j` / <b>${a}</b>`}`)}function Fw(e){let t=e.querySelector(`.pg-provider-detail`);if(!t)return;M(t,Nw(C()));let n=t.querySelector(`.pg-api-key`);n&&(n.value=n.matches(`.pg-own-key`)?C().own_keys?.[C().provider]??``:C().ext_api_key);let r=t.querySelector(`.pg-host-select`);r&&kw(r),Pw(e)}function Iw(e){return j`
        <div class="inline-drawer">
            <div class="inline-drawer-toggle inline-drawer-header">
                <b>🌐 Polyglot</b>
                <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
            </div>
            <div class="inline-drawer-content" style="display:none;">
                <div class="flex-container flexGap5 pg-set-field">
                    <label class="checkbox_label"><input type="checkbox" data-setting="enabled_checker" ${e.enabled_checker&&j`checked`}><span>${h(`set.checker`)}</span></label>
                    <label class="checkbox_label"><input type="checkbox" data-setting="enabled_annotator" ${e.enabled_annotator&&j`checked`}><span>${h(`set.aiStudy`)}</span></label>
                    <label class="checkbox_label" title="${h(`set.dialogueOnlyHint`)}"><input type="checkbox" data-setting="dialogue_only" ${e.dialogue_only&&j`checked`}><span>${h(`set.dialogueOnly`)}</span></label>
                    <label class="checkbox_label" title="${h(`set.markSavedHint`)}"><input type="checkbox" data-setting="mark_saved_words" ${e.mark_saved_words!==!1&&j`checked`}><span>${h(`set.markSaved`)}</span></label>
                    <label class="checkbox_label" title="${h(`set.lineVoiceHint`)}"><input type="checkbox" data-setting="line_voice" ${e.line_voice!==!1&&j`checked`}><span>${h(`set.lineVoice`)}</span></label>
                </div>

                ${$(h(`set.targetLang`),j`<select class="text_pole" data-setting="language">${bw(_w,e.language)}</select>`)}
                <div class="pg-set-field pg-lang-custom" ${e.language!==`Custom`&&j`hidden`}>
                    <input type="text" class="text_pole" data-setting="language_custom" value="${e.language_custom}" placeholder="${h(`set.langCustomPh`)}">
                </div>
                <div class="pg-set-field pg-furi-toggle" ${!le(b())&&j`hidden`}>
                    <label class="checkbox_label" title="${h(`set.furiganaHint`)}">
                        <input type="checkbox" data-setting="furigana_enabled" ${e.furigana_enabled!==!1&&j`checked`}>
                        <span>${h(`set.furigana`)}</span>
                    </label>
                </div>

                ${$(h(`set.explainLang`),j`<select class="text_pole" data-setting="native_lang">${bw(vw,e.native_lang)}</select>`)}
                <div class="pg-set-field pg-native-custom" ${e.native_lang!==`custom`&&j`hidden`}>
                    <input type="text" class="text_pole" data-setting="native_lang_custom" value="${e.native_lang_custom??``}" placeholder="${h(`set.nativeLangPh`)}">
                </div>

                ${$(h(`set.cefrLevel`),j`<select class="text_pole" data-setting="cefr_level">${bw(pe.map(e=>[e,e]),e.cefr_level)}</select>`)}

                <hr class="pg-set-divider">
                ${$(h(`set.paraTranslate`),j`<select class="text_pole" data-setting="para_translate" title="${h(`set.paraTranslateHint`)}">${bw([[`off`,h(`set.paraOff`)],[`button`,h(`set.paraButton`)],[`auto`,h(`set.paraAuto`)]],e.para_translate??`button`)}</select>`)}
                <div class="pg-set-field pg-para-wishes" ${e.para_translate===`off`&&j`hidden`}>
                    <label>${h(`set.paraWishes`)}</label>
                    <textarea class="text_pole" rows="3" data-setting="para_translate_wishes" placeholder="${h(`set.paraWishesPh`)}">${e.para_translate_wishes??``}</textarea>
                </div>

                <hr class="pg-set-divider">
                ${Cw(e)}

                <hr class="pg-set-divider">
                ${$(h(`set.aiProvider`),j`
                    <select class="text_pole pg-provider-select">${bw(yw.map(([e,t])=>[e,t||(e===`host`?h(`set.hostOption`,{name:g.ai?.name??``}):h(e===`profile`?`set.profileOption`:`set.stDefault`))]),e.provider)}</select>`)}
                <div class="pg-provider-detail"></div>

                <hr class="pg-set-divider">
                <div class="pg-set-field">
                    <label>${h(`set.maxTokens`)} <b class="pg-tokens-display">${e.max_tokens}</b></label>
                    <div class="flex-container flexGap5 pg-tokens-row">
                        <input type="range"  class="pg-tokens" min="${hw.min}" max="${hw.max}" step="${hw.step}" value="${e.max_tokens}">
                        <input type="number" class="text_pole pg-tokens" min="${hw.min}" max="${hw.max}" step="${hw.step}" value="${e.max_tokens}">
                    </div>
                </div>
            </div>
        </div>`}var Lw=(e,t,n)=>{let r=e.querySelector(t);r&&(r.hidden=!n)};function Rw(e){Lw(e,`.pg-furi-toggle`,le(b())),document.dispatchEvent(new CustomEvent(`pg:language-change`))}var zw;function Bw(){clearTimeout(zw),zw=setTimeout(()=>document.dispatchEvent(new CustomEvent(`pg:study-scope-change`)),400)}var Vw={enabled_checker:(e,t)=>document.dispatchEvent(new CustomEvent(`pg:checker-toggle`,{detail:{on:t}})),enabled_annotator:(e,t)=>document.dispatchEvent(new CustomEvent(`pg:annotator-toggle`,{detail:{on:t}})),mark_saved_words:(e,t)=>document.dispatchEvent(new CustomEvent(`pg:saved-marks-toggle`,{detail:{on:t}})),line_voice:(e,t)=>document.dispatchEvent(new CustomEvent(`pg:line-voice-toggle`,{detail:{on:t}})),para_translate:(e,t)=>{Lw(e,`.pg-para-wishes`,t!==`off`),document.dispatchEvent(new CustomEvent(`pg:para-translate-change`))},language:(e,t,n)=>{Lw(e,`.pg-lang-custom`,t===`Custom`),Rw(e),t!==n&&hs().then(()=>x(h(`set.langChanged`),`info`,3e3))},language_custom:e=>Rw(e),furigana_enabled:()=>document.dispatchEvent(new CustomEvent(`pg:language-change`)),native_lang:(e,t)=>Lw(e,`.pg-native-custom`,t===`custom`),skip_names:Bw,skip_words:Bw,skip_tags:Bw,skip_blocks:Bw,skip_brackets:Bw,route_chat_source:e=>Pw(e),route_model:e=>Pw(e)};function Hw(e){s(e.provider)&&(e._model_history[e.provider]=e.model)}function Uw(e,t){let n=t.dataset.setting,r=C(),i=r[n],a=t instanceof HTMLInputElement&&t.type===`checkbox`?t.checked:`trim`in t.dataset?t.value.trim():t.value;r[n]=a,`rememberModel`in t.dataset&&Hw(r),me(),Vw[n]?.(e,a,i)}function Ww(e,t){let n=C();s(n.provider)&&n.model&&(n._model_history[n.provider]=n.model),n.provider=t;let r=s(t);r&&(n.model=n._model_history[t]||r.defaultModel,Hw(n)),me(),Fw(e)}function Gw(e,t){let n=t===gw;if(Lw(e,`.pg-model-manual`,n),n){e.querySelector(`.pg-model-manual input`)?.focus();return}let r=C();r.model=t,Hw(r),me()}function Kw(e,t){Lw(e,`.pg-st-override-rows`,t),!t&&(Object.assign(C(),{route_chat_source:``,route_model:``}),me(),e.querySelectorAll(`.pg-st-override-rows input`).forEach(e=>{e.value=``}),Pw(e))}function qw(e){let t=C();t.own_keys={...t.own_keys,[t.provider]:e.trim()},me()}function Jw(e,t){let n=Math.max(hw.min,Math.min(hw.max,parseInt(t,10)||hw.fallback));e.querySelectorAll(`.pg-tokens`).forEach(e=>{e.value=String(n)});let r=e.querySelector(`.pg-tokens-display`);r&&(r.textContent=String(n)),C().max_tokens=n,me()}function Yw(e){let t=t=>{let n=t.target;n.dataset.setting?Uw(e,n):n.matches(`.pg-provider-select`)?Ww(e,n.value):n.matches(`.pg-model-select`)?Gw(e,n.value):n.matches(`.pg-own-key`)?qw(n.value):n.matches(`.pg-st-override`)&&Kw(e,n.checked)};e.addEventListener(`input`,n=>{let r=n.target;r.matches(`.pg-tokens[type="range"]`)?Jw(e,r.value):(r.type===`text`||r.type===`password`||r.type===`textarea`)&&t(n)}),e.querySelector(`.pg-skip-preview-btn`)?.addEventListener(`click`,()=>ww(e)),e.addEventListener(`click`,t=>{t.target.closest(`.pg-profile-recheck`)&&Fw(e)}),e.addEventListener(`focusin`,e=>{let t=e.target;t.matches(`.pg-profile-select`)&&Aw(t)}),e.addEventListener(`change`,n=>{let r=n.target;r.matches(`.pg-tokens[type="number"]`)?Jw(e,r.value):r.type!==`text`&&r.type!==`password`&&r.type!==`textarea`&&t(n)})}function Xw(){let e=document.querySelector(E.extensionsSettings);if(!e||document.getElementById(`pg-settings-panel`))return;let t=Object.assign(document.createElement(`div`),{id:`pg-settings-panel`,className:`extension_container`});M(t,Iw(C())),e.appendChild(t),Fw(t),Yw(t)}function Zw(e,t,n){let r=t.trim()||n.trim(),i=n.trim();return!r||r===e&&(!i||i===e)?null:i&&i!==r?`${r}\n---\n${i}`:r}var Qw=null;async function $w(e){let t=e.getSettings();if(!t.enabled_checker)return;let r=document.querySelector(E.sendTextarea);if(!(r instanceof HTMLTextAreaElement))return;let i=r.value.trim();if(!i)return;Qw?.abort();let a=new AbortController;Qw=a,e.setWandBusy(!0);try{let{data:o}=await e.ai.json({prompt:nt(i,e.getLang(),t.cefr_level,e.getNativeLang()),signal:a.signal,accept:re,missing:e=>n(e,tt)});if(a.signal.aborted)return;let s=e=>typeof e==`string`?e.trim():``,c=s(o.grammar),l=s(o.natural);if(!c&&!l)return;let u=Zw(i,c,l);if(!u){x(h(`chk.looksGood`),`ok`,2e3);return}e.archive({lang:e.langKey(),original:i,grammar:c||l,natural:l,explanation:s(o.explanation)}),r.value.trim()===i?(r.value=u,r.dispatchEvent(new Event(`input`,{bubbles:!0}))):x(h(`chk.changed`,{text:u}),`info`,1e4)}catch(e){if(a.signal.aborted)return;console.error(`[Polyglot] Checker error:`,e),x(`${h(`chk.error`)} (${se(e)})`,`err`,6e3)}finally{Qw===a&&(Qw=null,e.setWandBusy(!1))}}var eT=`pg-lines-play-btn`,tT=`pg-line-tools`,nT=`pg-line-save`,rT=`pg-heard`,iT=`pg-playing`,aT=()=>C().line_voice!==!1;function oT(e){let t=A(e);return Bo(e,t).map(e=>({text:t.slice(e.start,e.end).trim(),after:e.after})).filter(e=>/\p{L}/u.test(e.text))}function sT(e){let t=e.closest(E.mes),n=O(t),r=n===null?void 0:_().chat?.[Number(n)]?.name;return typeof r==`string`&&r?r:t?.getAttribute(`ch_name`)??void 0}var cT=e=>e?.parentElement?.classList.add(rT);function lT(e){let t=Vd(`${h(`line.play`)}: ${e}`,t=>{cT(t),Bd(t,()=>Od(e,b(),{speaker:sT(t)}))});return t.title=h(`line.play`),t.classList.add(py),t.addEventListener(`dblclick`,e=>e.stopPropagation()),t}function uT(e){e.classList.replace(`fa-regular`,`fa-solid`),e.classList.add(`pg-saved`),e.title=h(`line.saved`),e.setAttribute(`aria-label`,h(`line.saved`))}function dT(e,t){let n=Vd(h(`line.save`),()=>{if(n.classList.contains(`pg-saved`))return;let t=sT(n);Ss({word:e.slice(0,300),base_form:``,meaning:``,level:`sentence`,...t&&{speaker:t}},{quiet:!0}),document.querySelectorAll(`.${nT}`).forEach(t=>{t.dataset.line===e&&uT(t)}),x(h(`line.savedNote`),`info`,3e3)});return n.className=`${nT} fa-regular fa-bookmark`,n.dataset.line=e,t&&uT(n),n.addEventListener(`dblclick`,e=>e.stopPropagation()),n}async function fT(e,t){if(t.classList.contains(iT)){kd();return}let n=O(e),r=n===null?null:D(n);if(!r)return;let i=sT(r),a=oT(r).map(e=>({text:e.text,speaker:i}));t.classList.add(iT);let o=null;try{await Ad(a,b(),e=>{e>=0?(zd(o=r.querySelectorAll(`.pg-line-play`)[e]??null),cT(o)):Rd(o)&&zd(null)})}finally{t.classList.remove(iT)}}function pT(e,t){let n=e?.querySelector(E.extraMesButtons),r=e?.querySelector(`.${eT}`);if(!t){r?.remove();return}if(!n||r)return;let i=Object.assign(document.createElement(`div`),{className:`mes_button ${eT} fa-solid fa-headphones interactable`,title:h(`line.playAll`),tabIndex:0});i.addEventListener(`click`,()=>{e&&fT(e,i)}),n.prepend(i)}function mT(e){e.querySelectorAll(`.${tT}`).forEach(e=>e.remove());let t=oT(e);if(!t.length)return;let n=[],r=0;for(let t of Jt(e))n.push({node:t,start:r}),r+=t.data.length;let i=new Set(z().filter(e=>e.level===`sentence`).map(e=>e.word));for(let e of[...t].reverse()){let t=e.after-1,r=n.find(e=>t>=e.start&&t<e.start+e.node.data.length);if(!r)continue;let a=e.after-r.start;a<r.node.data.length&&r.node.splitText(a);let o=document.createElement(`span`);o.className=`${tT} ${py}`,o.append(lT(e.text),dT(e.text,i.has(e.text.slice(0,300)))),r.node.after(o)}}function hT(e){e.querySelectorAll(`.${tT}`).forEach(e=>e.remove()),e.normalize()}var gT={draw:mT,strip:hT},_T=new Map;function vT(e){if(!aT()){yT();return}let t=e??[...document.querySelectorAll(E.aiMes)].map(e=>O(e)).filter(e=>!!e);for(let e of t){let t=D(e);if(!t||t.closest(E.mes)?.getAttribute(`is_user`)===`true`)continue;let n=oT(t).map(e=>e.text).join(``);pT(t.closest(E.mes),!!n),(_T.get(e)!==n||!Cy(e,`voice`)&&n)&&(_T.set(e,n),Z(e,`voice`,n?gT:null))}}function yT(){for(let e of wy(`voice`))Z(e,`voice`,null);document.querySelectorAll(`.${eT}`).forEach(e=>e.remove()),_T.clear()}function bT(){_T.clear(),Ty(`voice`)}var xT=`<i class="fa-solid fa-earth-europe"></i>`,ST=`<i class="fa-solid fa-spinner fa-spin"></i>`,CT=()=>({ai:je,getSettings:C,getLang:b,getNativeLang:y,setWandBusy:TT,langKey:Zo,archive:e=>{D_(e),xh()}});function wT(){if(!C().enabled_checker||document.getElementById(`pg-wand-btn`))return;let e=document.querySelector(E.sendBtn);if(!e?.parentNode)return;let t=Object.assign(document.createElement(`div`),{id:`pg-wand-btn`,className:`pg-wand-btn interactable`,title:h(`chk.btnTitle`),tabIndex:0,innerHTML:xT});t.addEventListener(`click`,()=>$w(CT())),e.parentNode.insertBefore(t,e)}function TT(e){let t=document.getElementById(`pg-wand-btn`);t&&(t.innerHTML=e?ST:xT,t.classList.toggle(`pg-wand-busy`,e),t.setAttribute(`aria-busy`,String(e)))}function ET(){if(document.getElementById(`pg-ext-menu-btn`))return;let e=document.querySelector(E.extensionsMenu);if(!e)return;let t=Object.assign(document.createElement(`div`),{id:`pg-ext-menu-btn`,className:`list-group-item flex-container flexGap5 interactable`,title:h(`ext.panelTitle`)}),n=Object.assign(document.createElement(`div`),{className:`fa-solid fa-earth-europe extensionsMenuExtensionButton`}),r=Object.assign(document.createElement(`span`),{textContent:h(`ext.menuLabel`)});t.append(n,r),t.addEventListener(`click`,()=>{Dt(),JS()}),e.appendChild(t)}function DT(){wT(),Mx(),cw()}async function OT(){Y();let e=await ms();e&&(x(h(`wb.migrated`,{n:e}),`info`,4e3),Y())}function kT(){Ox(),pw(),cb(),Gb(),bT(),Zb(),ZS(),TC(),wC(),setTimeout(()=>{DT(),Tx(),uw(),nb(),AT(),OT()},Ie.chatSwitch)}function AT(e){Ub(e),vT(e)}function jT(){Tx(),lw(),eb()}function MT(){Ex(),dw(),tb()}function NT(e,t){document.addEventListener(e,e=>t(e.detail.on))}(function(){$b(JS),yb(JS),ya(()=>{Ab(),Ub()}),Xw(),ma(Y),Qe.on(he.APP_READY,()=>{Ha().then(()=>{Ab(),AT(),setTimeout(()=>AT(),Ie.chatSwitch*3),R()===`file`&&OT()}),DT(),ET(),CC(),rn(),$y(),ub(),Dx(),uw(),nb()}),Qe.on(he.CHARACTER_MESSAGE_RENDERED,(e,t)=>{Mx(),cw(),jT(),e!==void 0&&(ab(String(e)),sw(String(e),t),AT([String(e)]),Xb(String(e)))}),Qe.on(he.CHAT_CHANGED,kT),Qe.on(he.MESSAGE_SWIPED,e=>{DT(),kx(String(e)),fw(String(e)),ob(String(e)),jT(),AT([String(e)])}),he.MESSAGE_UPDATED&&Qe.on(he.MESSAGE_UPDATED,()=>{DT(),jT(),AT()}),he.MESSAGE_DELETED&&Qe.on(he.MESSAGE_DELETED,()=>{DT(),MT(),jT(),AT()}),he.MORE_MESSAGES_LOADED&&Qe.on(he.MORE_MESSAGES_LOADED,()=>{Mx(),cw(),MT(),jT(),AT()}),DT(),ET(),NT(`pg:checker-toggle`,e=>{e?wT():document.getElementById(`pg-wand-btn`)?.remove()}),document.addEventListener(`pg:language-change`,lb),document.addEventListener(`pg:language-change`,Y),document.addEventListener(`pg:study-scope-change`,()=>{Lx(),AT()}),NT(`pg:saved-marks-toggle`,e=>e?Ub():Wb()),NT(`pg:line-voice-toggle`,e=>e?vT():yT()),document.addEventListener(`pg:para-translate-change`,()=>{cw(),C().para_translate===`off`?mw():lw()}),NT(`pg:annotator-toggle`,e=>{e?Mx():document.querySelectorAll(`.pg-annotate-btn, .pg-open-btn`).forEach(e=>e.remove())})})(),qe.addCommandObject(Ce.fromProps({name:`pg-check`,callback:async(e,t)=>{if(!C().enabled_checker)return x(h(`chk.slashOff`),`warn`,4e3),`The input assistant is turned off.`;let n=document.querySelector(E.sendTextarea),r=t?.trim();return r&&n&&(n.value=r,n.dispatchEvent(new Event(`input`,{bubbles:!0}))),n?.value.trim()?(await $w(CT()),`Done.`):(x(h(`chk.slashEmpty`),`info`,4e3),`Nothing to check.`)},helpString:`Polyglot: check and translate a text (same as the 🌍 button), put back in the input box. Example: /pg-check Ciao, come stai? Without text it checks what is in the input box (for Quick Replies and scripts).`,unnamedArgumentList:[de.fromProps({name:`text`,description:`Text to check (defaults to the input box)`,typeList:[Me.STRING],isRequired:!1})]})),qe.addCommandObject(Ce.fromProps({name:`pg-annotate`,callback:async e=>{let t=_(),n=e.mesid?String(e.mesid):String((t.chat?.length??1)-1),r=document.querySelector(Ot(n));return r?Rx(n)?`Message #${n} is already annotated.`:(await zx(r,n),Rx(n)?`Message #${n} annotated.`:`Message #${n} could not be annotated.`):`Message ID ${n} not found.`},helpString:`Polyglot: annotate a message for study. Omit mesid to annotate the last message.`,namedArgumentList:[de.fromProps({name:`mesid`,description:`ID of the message to annotate (defaults to the last message)`,typeList:[Me.NUMBER],isRequired:!1,defaultValue:`{{lastMessageId}}`})]})),qe.addCommandObject(Ce.fromProps({name:`pg-lookup`,callback:async(e,t)=>{let n=t?.trim();return n?(await XS(n),`"${n}" looked up.`):`Please provide a word. Example: /pg-lookup hablar`},helpString:`Polyglot: look up a word and open the learning panel. Example: /pg-lookup hablar`,unnamedArgumentList:[de.fromProps({name:`word`,description:`Word or phrase to look up`,typeList:[Me.STRING],isRequired:!0})]})),qe.addCommandObject(Ce.fromProps({name:`pg-panel`,callback:async e=>{let t=String(e.tab||`learn`);return JS(WS.includes(t)?t:`learn`),`Learning panel opened.`},helpString:`Polyglot: open the learning panel. tab: wordbook | learn | settings`,namedArgumentList:[de.fromProps({name:`tab`,description:`Tab to open (wordbook | learn | settings)`,typeList:[Me.STRING],isRequired:!1,defaultValue:`learn`})]}));