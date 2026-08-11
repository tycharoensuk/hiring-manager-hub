<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hiring Manager Hub | Blinq</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            cream: '#EDE8E3',
            coral: '#E05A3A',
            ink: '#1C1A18',
          },
          fontFamily: {
            serif: ['Fraunces', 'Georgia', 'serif'],
            sans: ['Inter', 'system-ui', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>
    body { background-color: #EDE8E3; font-family: 'Inter', system-ui, sans-serif; }
  </style>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    const { useState } = React;

    const HC_REQUEST_URL = "https://headcount-dashboard-tycharoensuk-5506s-projects.vercel.app/submit";

    const Callout = ({ icon, bg, border, text, children }) => (
      <div className={`${bg} ${border} border rounded-2xl p-4 mb-6 flex gap-3`}>
        <span className="text-lg flex-shrink-0">{icon}</span>
        <div className={`text-sm ${text} leading-relaxed`}>{children}</div>
      </div>
    );

    const Accordion = ({ title, children }) => {
      const [open, setOpen] = useState(false);
      return (
        <div className="border border-stone-200 rounded-xl mb-2 overflow-hidden">
          <button onClick={() => setOpen(!open)} className="w-full text-left px-4 py-3 flex justify-between items-center bg-white hover:bg-stone-50 transition-colors">
            <span className="font-medium text-ink text-sm">{title}</span>
            <span className="text-stone-400 text-xs ml-4 flex-shrink-0">{open ? "▲" : "▼"}</span>
          </button>
          {open && <div className="px-4 pb-4 pt-3 bg-stone-50 border-t border-stone-100 text-sm text-stone-700 leading-relaxed">{children}</div>}
        </div>
      );
    };

    const DataTable = ({ headers, rows }) => (
      <div className="overflow-x-auto rounded-xl border border-stone-200 mb-6">
        <table className="w-full text-sm">
          <thead><tr style={{backgroundColor:'#EDE8E3'}}>{headers.map((h, i) => <th key={i} className="text-left px-4 py-3 font-semibold border-b border-stone-200 whitespace-nowrap text-ink">{h}</th>)}</tr></thead>
          <tbody>{rows.map((row, i) => <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>{row.map((cell, j) => <td key={j} className="px-4 py-3 border-b border-stone-100 text-stone-700 align-top">{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
    );

    const Checklist = ({ title, items }) => {
      const [checked, setChecked] = useState({});
      const toggle = (i) => setChecked(p => ({ ...p, [i]: !p[i] }));
      const count = Object.values(checked).filter(Boolean).length;
      return (
        <div className="mb-6">
          {title && <h3 className="font-semibold text-stone-500 mb-3 text-xs uppercase tracking-wider">{title}</h3>}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-1 bg-stone-200 rounded-full h-1.5">
              <div className="h-1.5 rounded-full transition-all duration-300" style={{ width: `${items.length ? (count / items.length) * 100 : 0}%`, backgroundColor:'#E05A3A' }} />
            </div>
            <span className="text-xs text-stone-400 font-medium flex-shrink-0">{count}/{items.length}</span>
          </div>
          {items.map((item, i) => (
            <label key={i} className="flex items-start gap-3 py-1.5 cursor-pointer">
              <input type="checkbox" checked={!!checked[i]} onChange={() => toggle(i)} className="mt-0.5 h-4 w-4 cursor-pointer flex-shrink-0" style={{accentColor:'#E05A3A'}} />
              <span className={`text-sm leading-relaxed transition-colors ${checked[i] ? "line-through text-stone-400" : "text-stone-700"}`}>{item}</span>
            </label>
          ))}
        </div>
      );
    };

    const Section = ({ title, children }) => (
      <div className="mb-8">
        <h2 className="font-serif font-bold text-ink mb-4 pb-2 border-b-2 border-stone-200 text-base">{title}</h2>
        {children}
      </div>
    );

    const CoralBtn = ({ href, children }) => (
      <a href={href} target="_blank" rel="noopener noreferrer"
        className="inline-block text-white text-sm px-6 py-2.5 rounded-full font-semibold transition-opacity hover:opacity-90"
        style={{backgroundColor:'#E05A3A'}}>
        {children}
      </a>
    );

    const navCards = [
      { id: "roleApproval", icon: "📝", title: "Getting a Role Approved", desc: "Submit a headcount request, build your business case, and get sign-off from Talent & Finance.", tag: "Start here before you hire." },
      { id: "resignation", icon: "🚶", title: "When Someone Resigns", desc: "What to do in the first 24 hours, knowledge transfer, and when to trigger a backfill.", tag: "Act fast, do it right." },
      { id: "preStart", icon: "⏰", title: "3 Weeks Before Start Date", desc: "Your pre-start checklist. Everything IT, people, and culture need from you before Day 1.", tag: "Don't get caught unprepared." },
      { id: "newStarter", icon: "🎉", title: "When Your New Starter Arrives", desc: "Day 1 agenda, first week rituals, and what great looks like in the first month.", tag: "Make their first impression count." },
      { id: "onboarding", icon: "📈", title: "Onboarding Plan Template", desc: "A ready-to-use 30/60/90 day plan, 1:1 framework, and success criteria to adapt for your hire.", tag: "Set them up to win." },
    ];

    const HomePage = ({ setPage }) => (
      <div>
        <div className="rounded-2xl p-5 mb-6 flex gap-3 border" style={{backgroundColor:'#FDF6F3', borderColor:'#F0C4B4'}}>
          <span className="text-lg flex-shrink-0">👋</span>
          <div className="text-sm leading-relaxed" style={{color:'#7A2E18'}}>
            <strong>Welcome, Hiring Manager.</strong> Everything you need to hire well, onboard confidently, and set your people up to succeed — in one place.
          </div>
        </div>
        <div className="rounded-2xl p-6 mb-8 text-center" style={{backgroundColor:'#1C1A18'}}>
          <p className="text-xs mb-2 uppercase tracking-widest" style={{color:'#9C958E'}}>One question guides every step</p>
          <p className="font-serif font-bold text-xl leading-snug" style={{color:'#EDE8E3'}}>"Am I giving this person the best possible chance to succeed?"</p>
        </div>
        <h2 className="font-serif font-bold text-ink mb-4 text-base">Your Hiring Manager Map</h2>
        <div className="space-y-3 mb-8">
          {navCards.map(card => (
            <button key={card.id} onClick={() => setPage(card.id)}
              className="w-full text-left bg-white border border-stone-200 rounded-2xl p-4 hover:border-stone-400 hover:shadow-md transition-all group">
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0 mt-0.5">{card.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-ink mb-0.5" style={{transition:'color 0.15s'}}
                    onMouseEnter={e => e.target.style.color='#E05A3A'} onMouseLeave={e => e.target.style.color=''}>{card.title}</p>
                  <p className="text-sm text-stone-500 mb-1.5 leading-relaxed">{card.desc}</p>
                  <span className="text-xs text-stone-400 italic">{card.tag}</span>
                </div>
                <span className="text-stone-300 text-lg flex-shrink-0">→</span>
              </div>
            </button>
          ))}
        </div>
        <div className="rounded-2xl p-5 flex gap-3 border" style={{backgroundColor:'#FDF6F3', borderColor:'#F0C4B4'}}>
          <span className="text-lg flex-shrink-0">⚡</span>
          <p className="text-sm leading-relaxed" style={{color:'#7A2E18'}}><strong>The hiring manager is the single biggest factor in whether a new starter succeeds.</strong> Show up, be present, and invest the time — it compounds fast.</p>
        </div>
      </div>
    );

    const RoleApprovalPage = () => (
      <div>
        <Callout icon="⚠️" bg="bg-amber-50" border="border-amber-200" text="text-amber-800">All new roles and backfills require approval <strong>before</strong> recruiting begins. Skipping this step means Talent can't start work.</Callout>
        <Section title="📍 The Process at a Glance">
          <DataTable headers={["Step","Who","What happens"]} rows={[["1","Hiring Manager","Submit headcount request form"],["2","Talent Team","Routes for approvals (manager, finance, CEO where needed)"],["3","Talent Team","Confirms approval and kicks off search"],["4","Hiring Manager","Brief Talent on the role and ideal candidate"],["5","Talent Team","Posts role and begins sourcing"]]} />
        </Section>
        <Section title="📄 Step 1: Submit the Headcount Request">
          <p className="text-sm text-stone-600 mb-4 leading-relaxed">Fill this in as completely as possible. Vague requests slow everything down.</p>
          <CoralBtn href={HC_REQUEST_URL}>Submit Headcount Request →</CoralBtn>
        </Section>
        <Section title="💼 What to Include in Your Business Case">
          <Accordion title="Why is this role needed now?"><p>Be specific about what's breaking, slowing down, or won't happen without this person. Tie it to a team goal or company priority.</p><p className="mt-2 italic text-stone-500 bg-white rounded p-2 border border-stone-200">"We're launching in the US market in Q3 and don't have anyone who can own enterprise sales cycles. Without this hire, our US revenue target is at risk."</p></Accordion>
          <Accordion title="What impact will this person have?"><p>What does success look like in 90 days? Be concrete — metrics, outcomes, decisions that will change.</p></Accordion>
          <Accordion title="Why can't this be done by someone already at Blinq?"><p>Have you considered redistributing work, upskilling someone, or creating a stretch opportunity? Be honest — this will be asked in the approval process.</p></Accordion>
          <Accordion title="Why can't AI do this?"><p>This is a guardrail Blinq takes seriously. Could AI tools handle a significant portion of this work? If no, explain why human judgment, relationships, or creativity are essential.</p></Accordion>
          <Accordion title="Is this a backfill or net new headcount?"><p>Not all backfills are automatically approved. Net-new headcount needs a stronger business case and executive sign-off.</p></Accordion>
        </Section>
        <Section title="✅ Guardrails">
          <DataTable headers={["Guardrail","What it means"]} rows={[["Business priority alignment","Does this hire directly support a current company or team goal?"],["Can't be redistributed","Is the work truly beyond existing team capacity?"],["Can't be automated","Have AI tools been genuinely considered?"],["Budget available","Is there an approved headcount slot in budget?"],["Level appropriate","Is the seniority right for the work, not inflated?"]]} />
        </Section>
        <Section title="🕒 What to Expect After Submitting">
          <DataTable headers={["Timeline","What happens"]} rows={[["1–2 business days","Talent reviews and routes for approval"],["1–2 business days","Approvals completed (standard roles)"],["1–2 business days","Senior or exec-level roles (CEO sign-off required)"],["Once approved","Talent schedules a role brief with you"]]} />
          <p className="text-sm text-stone-400 italic">Got questions? Reach out to Ty on Slack.</p>
        </Section>
        <Section title="💬 The Role Brief">
          <p className="text-sm text-stone-600 mb-3">After approval, Talent will book a <strong>role brief</strong> with you. Come prepared to discuss:</p>
          <div className="rounded-2xl p-4 space-y-2" style={{backgroundColor:'#EDE8E3'}}>
            {["What does the ideal candidate look like? (skills, experience, mindset)","What does bad look like? (dealbreakers, red flags)","Where should we look? (networks, industries, competitors)","What's the interview process? (stages, who's involved, what we're testing)","What's the hiring timeline?","What's the compensation range?"].map((item,i) => <p key={i} className="text-sm text-stone-700 flex gap-2"><span style={{color:'#E05A3A'}} className="flex-shrink-0">•</span>{item}</p>)}
          </div>
        </Section>
      </div>
    );

    const ResignationPage = () => (
      <div>
        <Callout icon="⚠️" bg="bg-red-50" border="border-red-200" text="text-red-800">When someone resigns, the first 24 hours matter. Move fast on the practical stuff so you can focus the remaining time on a great exit.</Callout>
        <Section title="☑️ Day 1: The Essentials"><Checklist items={["Accept the resignation formally (verbal is fine, written is better)","Confirm notice period and last working day","Notify the People team immediately — they'll manage the formal process","Notify your own manager","Keep it confidential until you've agreed a communication plan with the person"]} /></Section>
        <Section title="☑️ Week 1: Plan the Exit"><Checklist items={["Schedule a 1:1 to discuss knowledge transfer priorities","Identify their top 3–5 responsibilities and who will own each after they leave","Create a handover document (or ask them to start one in Notion)","List all tools, accounts, and access they hold — IT will need this","Decide: do you want to trigger a backfill? If yes, start the headcount request process now","Agree on a communication date to tell the broader team"]} /></Section>
        <Section title="☑️ Before Their Last Day"><Checklist items={["Handover document completed and reviewed","Key relationships and stakeholders introduced or briefed","Exit interview scheduled with People team","Access revocation list sent to IT (#it-support on Slack)","Equipment return arranged (laptop, any hardware)","Thank you / farewell organised (team lunch, Slack send-off in #people-parade)","Any outstanding expenses or payroll items flagged to Finance"]} /></Section>
        <Section title="📄 The Handover Document">
          <DataTable headers={["Section","What to include"]} rows={[["Current projects","Status, next steps, key contacts, risks"],["Recurring responsibilities","What happens weekly/monthly and how"],["Key relationships","Who they work with, what those relationships involve"],["Tribal knowledge","Things not written down anywhere that the team needs to know"],["Tools & access","All systems they use and relevant logins/contexts"],["Open items","Anything unfinished that needs a new owner"]]} />
        </Section>
        <Section title="🔄 Triggering a Backfill">
          <p className="text-sm text-stone-600 mb-4">Backfills still need approval — they're not automatic.</p>
          <div className="rounded-2xl p-4 space-y-2 mb-4" style={{backgroundColor:'#EDE8E3'}}>
            {["Submit the headcount request form — even a straight backfill needs to be logged","Flag urgency — if there's a hard dependency on the notice period, say so","Talent will fast-track backfills where there's a clear business impact"].map((item,i) => <p key={i} className="text-sm text-stone-700 flex gap-2"><span className="font-bold flex-shrink-0" style={{color:'#E05A3A'}}>{i+1}.</span>{item}</p>)}
          </div>
          <CoralBtn href={HC_REQUEST_URL}>Submit Headcount Request →</CoralBtn>
        </Section>
        <Section title="❓ Common Questions">
          <Accordion title="What's the notice period at Blinq?"><p>Notice periods are in the employment contract. The People team can confirm. Typically 2–4 weeks for most roles, longer for senior positions.</p></Accordion>
          <Accordion title="Can we put someone on garden leave?"><p>This is a People team decision. Raise it with them early if you're concerned about knowledge risk or competitive sensitivity.</p></Accordion>
          <Accordion title="What if the exit is difficult or unexpected?"><p>Call the People team immediately. Don't try to manage it alone.</p></Accordion>
          <Accordion title="Do I have to do an exit interview?"><p>People team runs exit interviews. Encourage the person to be honest; it helps Blinq improve.</p></Accordion>
        </Section>
      </div>
    );

    const PreStartPage = () => (
      <div>
        <Callout icon="💡" bg="bg-amber-50" border="border-amber-200" text="text-amber-800">The two weeks before someone starts are the most underrated part of onboarding. What you do (or don't do) now determines whether Day 1 feels prepared or chaotic.</Callout>
        <Section title="☑️ 3 Weeks Out"><Checklist title="Communications" items={["Reach out to your new starter by email or phone to congratulate them on accepting the offer"]} /></Section>
        <Section title="☑️ 2 Weeks Out">
          <Checklist title="IT & Access" items={["Submit IT setup request (laptop, email, Slack, Notion, all role-specific tools)","Confirm which tools they need on Day 1 vs. Week 1","Check: do they need a specific laptop config? (Engineering vs. non-technical)","Flag any tools with seat limits or budget approval needed"]} />
          <Checklist title="People & Culture" items={["Confirm start date, location, and reporting structure with People team","Assign an onboarding buddy and brief them on what's expected","Confirm their Blinq card activation email will be sent before Day 1"]} />
          <Checklist title="Team Preparation" items={["Tell your team someone is joining (name, role, start date)","Ask a team member to be their buddy for the first couple of weeks","(Optional) Invite your new starter to a team lunch before their first day"]} />
        </Section>
        <Section title="☑️ 1 Week Out">
          <Checklist title="Day 1 Plan" items={["Block your own calendar for Day 1 morning","Prepare a Day 1 agenda","Book their Week 1 1:1s with you","Send calendar invites: All-Hands, stand-up, Showcase, recurring meetings","Book intro meetings with 3–5 key stakeholders for Week 1"]} />
          <Checklist title="Workspace & Comms" items={["Confirm their desk or workspace","Draft the Slack welcome message for #people-parade"]} />
        </Section>
        <Section title="☑️ 2–3 Days Out"><Checklist items={["Confirm IT has everything ready — check with #it-support","Send a personal welcome note with what to expect on Day 1","Confirm their onboarding buddy has reached out","Have their 30/60/90 day onboarding plan drafted"]} /></Section>
        <Section title="📝 Day 1 Agenda Template">
          <DataTable headers={["Time","Activity","Who"]} rows={[["10:00am","Welcome & office tour / remote setup call","Hiring Manager"],["10:30am","IT setup & account access","IT / Self-guided"],["11:30am","1:1 — role context, first week plan","Hiring Manager"],["12:00pm","Lunch with team or buddy","Team"],["1:30pm","Orientation with People & Culture","People Team"],["2:30pm","Review Newbie Hub + Employee Handbook","Self-guided"],["3:30pm","Coffee chat with buddy","Buddy"],["4:30pm","Debrief check-in","Hiring Manager"]]} />
        </Section>
        <Section title="🤔 Common Mistakes to Avoid">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-4">
              <p className="font-semibold text-red-700 text-sm mb-3">❌ What not to do</p>
              {["Leaving IT access until Day 1","Not telling your team they're joining","Packing Day 1 with back-to-back calls","No plan for the first week","Forgetting to assign a buddy"].map((item,i) => <p key={i} className="text-xs text-red-700 flex gap-1.5 mb-1"><span>•</span>{item}</p>)}
            </div>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-4">
              <p className="font-semibold text-green-700 text-sm mb-3">✅ What great looks like</p>
              {["Laptop ready and waiting on Day 1","Team excited and briefed in advance","Day 1 agenda sent ahead of time","First week 1:1s already in the diary","Buddy has already messaged them"].map((item,i) => <p key={i} className="text-xs text-green-700 flex gap-1.5 mb-1"><span>•</span>{item}</p>)}
            </div>
          </div>
        </Section>
      </div>
    );

    const NewStarterPage = () => (
      <div>
        <div className="rounded-2xl p-4 mb-6 flex gap-3 border" style={{backgroundColor:'#FDF6F3', borderColor:'#F0C4B4'}}>
          <span className="text-lg flex-shrink-0">💡</span>
          <div className="text-sm leading-relaxed" style={{color:'#7A2E18'}}>Your most important job in the first month isn't to get them productive. It's to make them feel like they made the right decision.</div>
        </div>
        <Section title="📅 Day 1: What You Must Do"><Checklist items={["Be present and available — this is not a day to be heads-down","Give them a warm, human welcome (not just \"here's your laptop\")","Walk them through the Day 1 agenda you prepared","Do your first 1:1: cover their role, your expectations, and how you work together","Post the Slack welcome in #people-parade","End the day with a 15-min check-in: how was it?"]} /></Section>
        <Section title="🗓️ Week 1: Manager's Checklist"><Checklist items={["Daily informal check-in (a Slack message counts)","Ensure their buddy is actively engaged","Introduce them to all 3–5 key stakeholders","Walk them through the team's current goals and roadmap","Explain how the team works: stand-ups, sprint rhythm, how decisions are made","Give them one small, achievable task (confidence builder)","End-of-week 1:1: how are they finding it?"]} /></Section>
        <Section title="💬 Your 1:1 Cadence (First 90 Days)">
          <p className="text-sm text-stone-600 mb-4">For the first 90 days, 1:1s should be <strong>weekly</strong> — not fortnightly.</p>
          <DataTable headers={["Week","Focus"]} rows={[["Week 1","Role clarity, first impressions, immediate questions"],["Weeks 2–3","How they're settling in, any blockers, team dynamics"],["Month 1 check-in","Formal review: role clarity, early wins, areas to develop"],["Month 2–3","Contribution, ownership, growing independence"],["Month 3 (probation)","Formal mid-probation review in Lattice"]]} />
        </Section>
        <Section title="📊 Probation Check-In Schedule">
          <DataTable headers={["Milestone","When","What happens"]} rows={[["Week 1 check-in","End of Week 1","Informal — how's it going?"],["Month 1 check-in","End of Month 1","Structured conversation"],["Mid-probation review","Month 3","Formal Lattice review — self + manager"],["Final probation review","Month 6","Final Lattice review — pass/extend/exit decision"]]} />
        </Section>
        <Section title="❗ Red Flags to Watch For">
          <Callout icon="👀" bg="bg-orange-50" border="border-orange-200" text="text-orange-800">Not asking questions · Disengaged in meetings · Missing small deadlines · Misalignment on role · Relationship friction.<p className="mt-2 font-medium">Have a direct, kind conversation early. Contact People team if you need guidance.</p></Callout>
        </Section>
        <Section title="🚫 What Not to Do">
          <div className="space-y-2.5">
            {[["Don't disappear","after Day 1 and assume they'll figure it out"],["Don't overload","them with information in Week 1 — drip feed what matters"],["Don't skip 1:1s","in the first 90 days, even when busy"],["Don't wait","until Month 3 to give feedback"],["Don't assume","they're fine because they seem confident"]].map(([bold,rest],i) => <div key={i} className="flex gap-3 items-start"><span className="font-bold text-sm flex-shrink-0 mt-0.5" style={{color:'#E05A3A'}}>✗</span><p className="text-sm text-stone-700"><strong>{bold}</strong> {rest}</p></div>)}
          </div>
        </Section>
      </div>
    );

    const OnboardingPage = () => (
      <div>
        <Callout icon="📌" bg="bg-stone-50" border="border-stone-200" text="text-stone-700">Adapt this template for your new starter. Share it with them on Day 1 so they have a clear picture of what success looks like.</Callout>
        <Section title="🎯 Role Details">
          <div className="grid grid-cols-2 gap-3 mb-2">
            {["Name","Job Title","Start date","Manager","Buddy","Team"].map(label => <div key={label} className="rounded-xl p-3" style={{backgroundColor:'#EDE8E3'}}><p className="text-xs text-stone-400 mb-1">{label}</p><p className="text-sm text-stone-400 italic">[ fill in ]</p></div>)}
          </div>
        </Section>
        <Section title="📝 First 30 Days — Learn">
          <div className="rounded-2xl p-4 mb-4 border" style={{backgroundColor:'#EEF4FF', borderColor:'#C7D7F5'}}>
            <p className="text-sm font-semibold text-blue-900 mb-1">Goal</p><p className="text-sm text-blue-800">Understand the role, the team, the product, and the context. Ask questions. Don't try to fix things yet.</p>
            <p className="text-sm font-semibold text-blue-900 mt-3 mb-1">Manager's focus</p><p className="text-sm text-blue-800">Be available. Overinvest in 1:1s. Give structured learning, not just "explore and figure it out."</p>
          </div>
          <Checklist title="Key learning objectives" items={["Understand Blinq's mission, product, and business model","Know the team's goals for this half and how this role contributes","Complete all technical/non-technical setup","Meet all immediate teammates + 3–5 cross-functional stakeholders","Shadow key processes, meetings, and workflows","Understand how success is measured in this role","[Add role-specific learning objectives here]"]} />
          <div className="rounded-2xl p-4 mb-4" style={{backgroundColor:'#EDE8E3'}}><p className="text-sm font-semibold text-stone-700 mb-2">By Day 30, this person should be able to:</p><p className="text-sm text-stone-400 italic">[Write 3–5 specific outcomes that signal they're on track]</p></div>
        </Section>
        <Section title="📝 First 60 Days — Contribute">
          <div className="rounded-2xl p-4 mb-4 border" style={{backgroundColor:'#FDF6F3', borderColor:'#F0C4B4'}}>
            <p className="text-sm font-semibold mb-1" style={{color:'#7A2E18'}}>Goal</p><p className="text-sm" style={{color:'#7A2E18'}}>Take ownership of their first workstream. Start contributing independently. Build relationships and trust.</p>
            <p className="text-sm font-semibold mt-3 mb-1" style={{color:'#7A2E18'}}>Manager's focus</p><p className="text-sm" style={{color:'#7A2E18'}}>Step back slightly. Give them something to own. Provide coaching, not direction.</p>
          </div>
          <Checklist title="Key contribution objectives" items={["Own at least one project or workstream end-to-end","Contribute meaningfully to team rituals","Build relationships with key stakeholders outside immediate team","Confidently represent the team's work in the Showcase","[Add role-specific contribution objectives here]"]} />
          <div className="rounded-2xl p-4 mb-4" style={{backgroundColor:'#EDE8E3'}}><p className="text-sm font-semibold text-stone-700 mb-2">By Day 60, this person should be able to:</p><p className="text-sm text-stone-400 italic">[Write 3–5 specific outcomes that signal they're on track]</p></div>
        </Section>
        <Section title="📝 First 90 Days — Impact">
          <div className="rounded-2xl p-4 mb-4 border bg-green-50 border-green-100">
            <p className="text-sm font-semibold text-green-900 mb-1">Goal</p><p className="text-sm text-green-800">Deliver measurable impact. Be a known, trusted member of the team.</p>
            <p className="text-sm font-semibold text-green-900 mt-3 mb-1">Manager's focus</p><p className="text-sm text-green-800">Increase accountability. Move from coaching to performance conversations. Formal mid-probation review at Month 3.</p>
          </div>
          <Checklist title="Key impact objectives" items={["Deliver one piece of work with clear, measurable business impact","Have a developed view on longer-term priorities","Be a proactive contributor — identifying problems, not just solving assigned ones","Complete mid-probation review in Lattice","Have a 6-month development plan agreed with manager","[Add role-specific impact objectives here]"]} />
          <div className="rounded-2xl p-4 mb-4" style={{backgroundColor:'#EDE8E3'}}><p className="text-sm font-semibold text-stone-700 mb-2">By Day 90, this person should be able to:</p><p className="text-sm text-stone-400 italic">[Write 3–5 specific outcomes that signal they're on track]</p></div>
        </Section>
        <Section title="💬 1:1 Framework">
          <DataTable headers={["Section","Questions to ask"]} rows={[["Check-in","How are you feeling? What's giving you energy? What's draining it?"],["Progress","What did you work on? What went well? Any blockers?"],["Learning","What's one thing you've learned? What do you still want to understand better?"],["Relationships","Who have you connected with? Are there relationships I can help you build?"],["Feedback","What can I do better to support you? Here's one thing I'd like you to focus on…"],["Next week","What's your priority? What would make it a success?"]]} />
        </Section>
        <Section title="🌟 What Success Looks Like">
          <DataTable headers={["Timeframe","What does \"great\" look like?"]} rows={[["30 days","[Fill in with hiring manager]"],["60 days","[Fill in with hiring manager]"],["90 days","[Fill in with hiring manager]"]]} />
        </Section>
        <Section title="📚 Key Resources">
          <div className="space-y-2">
            <a href="https://app.notion.com/p/1fa69a35ad8f806588d9cdce4b037475" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity" style={{color:'#E05A3A'}}>📖 Employee Handbook →</a>
            <a href="https://app.notion.com/p/38269a35ad8f818386cee14674b9d1b4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity" style={{color:'#E05A3A'}}>🌱 Blinq Newbie Hub →</a>
          </div>
        </Section>
      </div>
    );

    const pageMap = { roleApproval: RoleApprovalPage, resignation: ResignationPage, preStart: PreStartPage, newStarter: NewStarterPage, onboarding: OnboardingPage };

    function App() {
      const [page, setPage] = useState("home");
      const card = navCards.find(c => c.id === page);
      const PageComponent = pageMap[page];
      return (
        <div className="min-h-screen" style={{backgroundColor:'#EDE8E3'}}>
          <div className="border-b border-stone-200 bg-white/70 backdrop-blur-sm sticky top-0 z-10">
            <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
              <button onClick={() => setPage("home")} className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                <span className="font-serif font-black text-ink tracking-tight">Blinq</span>
                <span className="text-stone-300 mx-1">·</span>
                <span className="text-sm text-stone-500">Hiring Manager Hub</span>
              </button>
              {page !== "home" && (
                <button onClick={() => setPage("home")} className="text-xs font-medium px-3 py-1.5 rounded-full border border-stone-300 text-stone-600 hover:border-stone-400 transition-colors">
                  ← Hub
                </button>
              )}
            </div>
          </div>
          <div className="max-w-2xl mx-auto px-4 py-8">
            {page !== "home" && (
              <div className="mb-6 flex items-center gap-3">
                <span className="text-4xl">{card?.icon}</span>
                <h1 className="font-serif font-black text-2xl text-ink leading-tight">{card?.title}</h1>
              </div>
            )}
            {page === "home" && (
              <div className="mb-8">
                <h1 className="font-serif font-black text-3xl text-ink mb-1">Hiring Manager Hub</h1>
                <p className="text-stone-500 text-sm">Talent Team · Blinq</p>
              </div>
            )}
            <div className="bg-white rounded-3xl shadow-sm border border-stone-200 p-6">
              {page === "home" ? <HomePage setPage={setPage} /> : <PageComponent />}
            </div>
            {page !== "home" && (
              <div className="mt-4 flex justify-center gap-1.5 items-center">
                {navCards.map(c => (
                  <button key={c.id} onClick={() => setPage(c.id)} title={c.title}
                    className="h-2 rounded-full transition-all"
                    style={{width: c.id === page ? '24px' : '8px', backgroundColor: c.id === page ? '#E05A3A' : '#C8C3BC'}} />
                ))}
              </div>
            )}
            <p className="text-center text-xs text-stone-400 mt-6">Blinq Talent Team · {new Date().getFullYear()}</p>
          </div>
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<App />);
  </script>
</body>
</html>
