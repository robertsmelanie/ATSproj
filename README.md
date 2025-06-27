Work in progress

## 📋 About

**ATS Project** is a lightweight, serverless web app that helps job seekers tailor their resumes to specific job descriptions using AI. It compares your resume text against a job posting, identifies missing or underused keywords, and rewrites your bullet points to better align with the role—improving your chances of passing automated Applicant Tracking Systems (ATS).

Built using hand-rolled HTML/CSS/JS and deployed with Netlify or Vercel, this tool offers a fast, privacy-conscious, and deploy-it-yourself alternative to bulky resume platforms.

---

## ✨ Features

- 🧠 AI-powered keyword matching against job descriptions
- ✍️ Smart rewriting of resume bullet points to match industry phrasing
- 🪶 Lightweight UI – no frameworks or dependencies
- 🔐 Serverless backend to protect your API key
- 🚀 One-click deploy to Netlify or Vercel
- 📝 Paste-in-text interface (PDF/DOCX optional in future)

---

## 🚀 Demo

> _Coming soon..._

---

## 🛠 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/ats-project.git
   cd ats-project
Deploy to Netlify or Vercel:

Connect your repo to the platform

Ensure OPENAI_API_KEY is set in the environment variables

Deploy!

💡 Usage
Paste your resume text into the first field

Paste a job description into the second

Click Analyze

Review:

🔍 Missing Keywords – terms found in the JD but not in your resume

✨ Rewritten Bullets – AI-enhanced versions of your original lines

⚙️ API & Configuration
Requires an OpenAI API key (OPENAI_API_KEY) stored as an environment variable

Hosted serverless function handles all AI calls securely