// netlify/functions/optimize.js
const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.handler = async (event) => {
    const { resume, jd } = JSON.parse(event.body);

    // 1) Extract missing keywords
    const kwPrompt = `
Here’s a job posting:
${jd}

Here’s a candidate’s resume:
${resume}

Q: List the top 15 keywords present in the JD but MISSING or under-used in the resume. Return a JSON array of strings.
  `;
    const kwResp = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: kwPrompt }],
    });
    const keywords = JSON.parse(kwResp.choices[0].message.content);

    // 2) Rewrite bullets (assume user bullets are lines starting with “-”)
    const bullets = resume
        .split('\n')
        .filter(line => line.trim().startsWith('-'))
        .slice(0, 10);

    const rewritePrompt = `
You are an ATS optimizer.
Missing keywords:
${keywords.join(', ')}

Original bullets:
${bullets.join('\n')}

Rewrite each to include relevant keywords, strong verbs, and quantify impact. Return JSON: [{"original":"…","rewritten":"…"},…]
  `;
    const rwResp = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: rewritePrompt }],
    });
    const rewrites = JSON.parse(rwResp.choices[0].message.content);

    return {
        statusCode: 200,
        body: JSON.stringify({ keywords, rewrites }),
    };
};