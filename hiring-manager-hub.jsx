import { useState } from "react";

// ── Helper Components ───────────────────────────────────────────────

const Callout = ({ icon, bg, border, text, children }) => (
  <div className={`${bg} ${border} border rounded-xl p-4 mb-6 flex gap-3`}>
    <span className="text-lg flex-shrink-0">{icon}</span>
    <div className={`text-sm ${text} leading-relaxed`}>{children}</div>
  </div>
);

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg mb-2 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-800 text-sm">{title}</span>
        <span className="text-gray-400 text-xs ml-4 flex-shrink-0">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 pt-3 bg-gray-50 border-t border-gray-100 text-sm text-gray-700 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

const DataTable = ({ headers, rows }) => (
  <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-indigo-50">
          {headers.map((h, i) => (
            <th key={i} className="text-left px-4 py-3 text-indigo-900 font-semibold border-b border-indigo-100 whitespace-nowrap">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-3 border-b border-gray-100 text-gray-700 align-top">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Checklist = ({ title, items }) => {
  const [checked, setChecked] = useState({});
  const toggle = (i) => setChecked((p) => ({ ...p, [i]: !p[i] }));
  const count = Object.values(checked).filter(Boolean).length;

  return (
    <div className="mb-6">
      {title && <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">{title}</h3>}
      <div className="flex items-center gap-3 mb-3">
        <div className="flex-1 bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-green-500 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${items.length ? (count / items.length) * 100 : 0}%` }}
          />
        </div>
        <span className="text-xs text-gray-400 font-medium flex-shrink-0">{count}/{items.length}</span>
      </div>
      {items.map((item, i) => (
        <label key={i} className="flex items-start gap-3 py-1.5 cursor-pointer group">
          <input
            type="checkbox"
            checked={!!checked[i]}
            onChange={() => toggle(i)}
            className="mt-0.5 h-4 w-4 accent-indigo-600 cursor-pointer flex-shrink-0"
          />
          <span className={`text-sm leading-relaxed transition-colors ${checked[i] ? "line-through text-gray-400" : "text-gray-700"}`}>
            {item}
          </span>
        </label>
      ))}
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-100">{title}</h2>
    {children}
  </div>
);

const Tag = ({ children }) => (
  <span className="inline-block text-xs text-indigo-500 italic">{children}</span>
);

// ── Nav Cards ───────────────────────────────────────────────────────

const navCards = [
  { id: "roleApproval", icon: "📝", title: "Getting a Role Approved", desc: "Submit a headcount request, build your business case, and get sign-off from Talent & Finance.", tag: "Start here before you hire." },
  { id: "resignation", icon: "🚶", title: "When Someone Resigns", desc: "What to do in the first 24 hours, knowledge transfer, and when to trigger a backfill.", tag: "Act fast, do it right." },
  { id: "preStart", icon: "⏰", title: "3 Weeks Before Start Date", desc: "Your pre-start checklist. Everything IT, people, and culture need from you before Day 1.", tag: "Don't get caught unprepared." },
  { id: "newStarter", icon: "🎉", title: "When Your New Starter Arrives", desc: "Day 1 agenda, first week rituals, and what great looks like in the first month.", tag: "Make their first impression count." },
  { id: "onboarding", icon: "📈", title: "Onboarding Plan Template", desc: "A ready-to-use 30/60/90 day plan, 1:1 framework, and success criteria to adapt for your hire.", tag: "Set them up to win." },
];

// ── Pages ───────────────────────────────────────────────────────────

const HomePage = ({ setPage }) => (
  <div>
    <Callout icon="👋" bg="bg-blue-50" border="border-blue-200" text="text-blue-900">
      <strong>Welcome, Hiring Manager.</strong> Everything you need to hire well, onboard confidently, and set your people up to succeed — in one place.
    </Callout>

    <div className="bg-gray-900 rounded-xl p-6 mb-8 text-center">
      <p className="text-gray-400 text-xs mb-2 uppercase tracking-widest">One question guides every step</p>
      <p className="text-white font-semibold text-lg leading-snug">"Am I giving this person the best possible chance to succeed?"</p>
    </div>

    <h2 className="font-bold text-gray-900 mb-4">Your Hiring Manager Map</h2>

    <div className="space-y-3 mb-8">
      {navCards.map((card) => (
        <button
          key={card.id}
          onClick={() => setPage(card.id)}
          className="w-full text-left bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition-all group"
        >
          <div className="flex items-start gap-4">
            <span className="text-2xl flex-shrink-0 mt-0.5">{card.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 mb-0.5 group-hover:text-indigo-700 transition-colors">{card.title}</p>
              <p className="text-sm text-gray-500 mb-1.5 leading-relaxed">{card.desc}</p>
              <Tag>{card.tag}</Tag>
            </div>
            <span className="text-gray-300 group-hover:text-indigo-400 transition-colors text-lg flex-shrink-0">→</span>
          </div>
        </button>
      ))}
    </div>

    <Callout icon="⚡" bg="bg-red-50" border="border-red-200" text="text-red-800">
      <strong>The hiring manager is the single biggest factor in whether a new starter succeeds.</strong> Show up, be present, and invest the time — it compounds fast.
    </Callout>
  </div>
);

const RoleApprovalPage = () => (
  <div>
    <Callout icon="⚠️" bg="bg-yellow-50" border="border-yellow-200" text="text-yellow-800">
      All new roles and backfills require approval <strong>before</strong> recruiting begins. Skipping this step means Talent can't start work.
    </Callout>

    <Section title="📍 The Process at a Glance">
      <DataTable
        headers={["Step", "Who", "What happens"]}
        rows={[
          ["1", "Hiring Manager", "Submit headcount request form"],
          ["2", "Talent Team", "Routes for approvals (manager, finance, CEO where needed)"],
          ["3", "Talent Team", "Confirms approval and kicks off search"],
          ["4", "Hiring Manager", "Brief Talent on the role and ideal candidate"],
          ["5", "Talent Team", "Posts role and begins sourcing"],
        ]}
      />
    </Section>

    <Section title="📄 Step 1: Submit the Headcount Request">
      <p className="text-sm text-gray-700 mb-4 leading-relaxed">Fill this in as completely as possible. Vague requests slow everything down. Talent will follow up with questions before routing for approval.</p>
      <a
        href="https://app.notion.com/p/549e480f19c94de4931ae4a1747ac186"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-indigo-600 text-white text-sm px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
      >
        Submit Headcount Request →
      </a>
    </Section>

    <Section title="💼 What to Include in Your Business Case">
      <Accordion title="Why is this role needed now?">
        <p>Be specific about what's breaking, slowing down, or won't happen without this person. Tie it to a team goal or company priority.</p>
        <p className="mt-2 italic text-gray-500 bg-white rounded p-2 border border-gray-200">"We're launching in the US market in Q3 and don't have anyone who can own enterprise sales cycles. Without this hire, our US revenue target is at risk."</p>
      </Accordion>
      <Accordion title="What impact will this person have?">
        <p>What does success look like in 90 days? What will be different? Be concrete — metrics, outcomes, decisions that will change.</p>
      </Accordion>
      <Accordion title="Why can't this be done by someone already at Blinq?">
        <p>Have you considered redistributing work, upskilling someone, or creating a stretch opportunity? Be honest — this will be asked in the approval process.</p>
      </Accordion>
      <Accordion title="Why can't AI do this?">
        <p>This is a guardrail Blinq takes seriously. Consider: could AI tools (Claude, ChatGPT, etc.) handle a significant portion of this work? If yes, is the role scoped correctly? If no, explain why human judgment, relationships, or creativity are essential.</p>
      </Accordion>
      <Accordion title="Is this a backfill or net new headcount?">
        <p>Not all backfills are automatically approved. Approval is still required. Net-new headcount needs a stronger business case and executive sign-off.</p>
      </Accordion>
    </Section>

    <Section title="✅ Guardrails — Your Request Will Be Assessed Against These">
      <DataTable
        headers={["Guardrail", "What it means"]}
        rows={[
          ["Business priority alignment", "Does this hire directly support a current company or team goal?"],
          ["Can't be redistributed", "Is the work truly beyond existing team capacity?"],
          ["Can't be automated", "Have AI tools been genuinely considered?"],
          ["Budget available", "Is there an approved headcount slot in budget?"],
          ["Level appropriate", "Is the seniority right for the work, not inflated?"],
        ]}
      />
    </Section>

    <Section title="🕒 What to Expect After Submitting">
      <DataTable
        headers={["Timeline", "What happens"]}
        rows={[
          ["1–2 business days", "Talent reviews and routes for approval"],
          ["1–2 business days", "Approvals completed (standard roles)"],
          ["1–2 business days", "Senior or exec-level roles (CEO sign-off required)"],
          ["Once approved", "Talent schedules a role brief with you"],
        ]}
      />
      <p className="text-sm text-gray-500 italic">Got questions? Reach out to Ty on Slack.</p>
    </Section>

    <Section title="💬 The Role Brief — Once Approved">
      <p className="text-sm text-gray-700 mb-3 leading-relaxed">After approval, Talent will book a <strong>role brief</strong> with you. Come prepared to discuss:</p>
      <div className="bg-gray-50 rounded-xl p-4 space-y-2">
        {[
          "What does the ideal candidate look like? (skills, experience, mindset)",
          "What does bad look like? (dealbreakers, red flags)",
          "Where should we look? (networks, industries, competitors)",
          "What's the interview process? (stages, who's involved, what we're testing)",
          "What's the hiring timeline? (when do you need them to start?)",
          "What's the compensation range?",
        ].map((item, i) => (
          <p key={i} className="text-sm text-gray-700 flex gap-2">
            <span className="text-indigo-400 flex-shrink-0">•</span>
            {item}
          </p>
        ))}
      </div>
      <Callout icon="💡" bg="bg-gray-50" border="border-gray-200" text="text-gray-700">
        The better your brief, the better your candidates. Talent can only find what you help them define.
      </Callout>
    </Section>
  </div>
);

const ResignationPage = () => (
  <div>
    <Callout icon="⚠️" bg="bg-red-50" border="border-red-200" text="text-red-800">
      When someone resigns, the first 24 hours matter. Move fast on the practical stuff so you can focus the remaining time on a great exit.
    </Callout>

    <Section title="☑️ Day 1: The Essentials">
      <Checklist items={[
        "Accept the resignation formally (verbal is fine, written is better)",
        "Confirm notice period and last working day",
        "Notify the People team immediately — they'll manage the formal process",
        "Notify your own manager",
        "Keep it confidential until you've agreed a communication plan with the person",
      ]} />
    </Section>

    <Section title="☑️ Week 1: Plan the Exit">
      <Checklist items={[
        "Schedule a 1:1 with the person to discuss knowledge transfer priorities",
        "Identify their top 3–5 responsibilities and who will own each after they leave",
        "Create a handover document (or ask them to start one in Notion)",
        "List all tools, accounts, and access they hold — IT will need this",
        "Decide: do you want to trigger a backfill? If yes, start the headcount request process now",
        "Agree on a communication date to tell the broader team",
      ]} />
    </Section>

    <Section title="☑️ Before Their Last Day">
      <Checklist items={[
        "Handover document completed and reviewed",
        "Key relationships and stakeholders introduced or briefed",
        "Exit interview scheduled with People team",
        "Access revocation list sent to IT (#it-support on Slack)",
        "Equipment return arranged (laptop, any hardware)",
        "Thank you / farewell organised (team lunch, Slack send-off in #people-parade)",
        "Any outstanding expenses or payroll items flagged to Finance",
      ]} />
    </Section>

    <Section title="📄 The Handover Document">
      <p className="text-sm text-gray-700 mb-4">Ask your leaver to create a Notion handover page covering:</p>
      <DataTable
        headers={["Section", "What to include"]}
        rows={[
          ["Current projects", "Status, next steps, key contacts, risks"],
          ["Recurring responsibilities", "What happens weekly/monthly and how"],
          ["Key relationships", "Who they work with, what those relationships involve"],
          ["Tribal knowledge", "Things not written down anywhere that the team needs to know"],
          ["Tools & access", "All systems they use and relevant logins/contexts"],
          ["Open items", "Anything unfinished that needs a new owner"],
        ]}
      />
    </Section>

    <Section title="🔄 Triggering a Backfill">
      <p className="text-sm text-gray-700 mb-4 leading-relaxed">Backfills still need approval — they're not automatic. As soon as you know you want to replace the role:</p>
      <div className="bg-gray-50 rounded-xl p-4 space-y-2 mb-4">
        {[
          "Submit the headcount request form — even a straight backfill needs to be logged",
          "Flag urgency — if there's a hard dependency on the notice period, say so in the form",
          "Talent will fast-track backfills where there's a clear business impact",
        ].map((item, i) => (
          <p key={i} className="text-sm text-gray-700 flex gap-2">
            <span className="text-indigo-400 font-bold flex-shrink-0">{i + 1}.</span>
            {item}
          </p>
        ))}
      </div>
      <a href="https://app.notion.com/p/549e480f19c94de4931ae4a1747ac186" target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white text-sm px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
        Submit Headcount Request →
      </a>
    </Section>

    <Section title="❓ Common Questions">
      <Accordion title="What's the notice period at Blinq?">
        <p>Notice periods are in the employment contract. The People team can confirm. Typically 2–4 weeks for most roles, longer for senior positions.</p>
      </Accordion>
      <Accordion title="Can we put someone on garden leave?">
        <p>This is a People team decision. Raise it with them early if you're concerned about knowledge risk or competitive sensitivity.</p>
      </Accordion>
      <Accordion title="What if the exit is difficult or unexpected?">
        <p>Call the People team immediately. Don't try to manage it alone. They'll support you with the right process.</p>
      </Accordion>
      <Accordion title="Do I have to do an exit interview?">
        <p>People team runs exit interviews — it's not on you to conduct it. But do encourage the person to be honest; it helps Blinq improve.</p>
      </Accordion>
    </Section>
  </div>
);

const PreStartPage = () => (
  <div>
    <Callout icon="💡" bg="bg-yellow-50" border="border-yellow-200" text="text-yellow-800">
      The two weeks before someone starts are the most underrated part of onboarding. What you do (or don't do) now determines whether Day 1 feels prepared or chaotic.
    </Callout>

    <Section title="☑️ 3 Weeks Out">
      <Checklist title="Communications" items={[
        "Reach out to your new starter by email or phone to congratulate them on accepting the offer",
      ]} />
    </Section>

    <Section title="☑️ 2 Weeks Out">
      <Checklist title="IT & Access" items={[
        "Submit IT setup request for new starter (laptop, email, Slack, Notion, all role-specific tools)",
        "Confirm which tools they need access to on Day 1 vs. Week 1",
        "Check: do they need a specific laptop config? (Engineering vs. non-technical)",
        "Flag any tools that have seat limits or need budget approval (Figma, HubSpot, etc.)",
      ]} />
      <Checklist title="People & Culture" items={[
        "Confirm start date, location, and reporting structure with People team",
        "Assign an onboarding buddy and brief them on what's expected",
        "Confirm their Blinq card activation email will be sent before Day 1",
      ]} />
      <Checklist title="Team Preparation" items={[
        "Tell your team someone is joining (name, role, start date)",
        "Ask a team member to be their buddy for the first couple of weeks",
        "(Optional) Invite your new starter to a team lunch or happy hour before their first day",
      ]} />
    </Section>

    <Section title="☑️ 1 Week Out">
      <Checklist title="Day 1 Plan" items={[
        "Block your own calendar for Day 1 morning — be present, not in back-to-back meetings",
        "Prepare a Day 1 agenda (see template below)",
        "Book their Week 1 1:1s with you",
        "Send calendar invites for: All-Hands, team stand-up, Showcase, and any recurring team meetings",
        "Book intro meetings with 3–5 key stakeholders they should meet in Week 1",
      ]} />
      <Checklist title="Workspace" items={[
        "Confirm their desk or workspace (hot desk, dedicated, remote setup)",
        "Arrange any equipment beyond the standard IT kit if needed",
      ]} />
      <Checklist title="Communication" items={[
        "Draft the Slack welcome message for #people-parade (post on Day 1 morning)",
      ]} />
    </Section>

    <Section title="☑️ 2–3 Days Out">
      <Checklist items={[
        "Confirm IT has everything ready — check with #it-support",
        "Send the new starter a welcome message (personal note from you goes a long way). Include: what to expect on Day 1, where to go, what time, who to ask for",
        "Confirm their onboarding buddy has reached out",
        "Have their 30/60/90 day onboarding plan drafted (see Onboarding Plan Template)",
      ]} />
    </Section>

    <Section title="📝 Day 1 Agenda Template">
      <DataTable
        headers={["Time", "Activity", "Who"]}
        rows={[
          ["10:00am", "Welcome & office tour / remote setup call", "Hiring Manager"],
          ["10:30am", "IT setup & account access", "IT / Self-guided"],
          ["11:30am", "1:1 with Hiring Manager — role context, first week plan", "Hiring Manager"],
          ["12:00pm", "Lunch with team or buddy", "Team"],
          ["1:30pm", "Orientation with People & Culture", "People Team"],
          ["2:30pm", "Review Newbie Hub + Employee Handbook", "Self-guided"],
          ["3:30pm", "Coffee chat with buddy", "Buddy"],
          ["4:30pm", "Debrief check-in with Hiring Manager", "Hiring Manager"],
        ]}
      />
      <p className="text-sm text-gray-500 italic">Adapt this to your team and the person's role. Don't overload Day 1 — leave space to breathe.</p>
    </Section>

    <Section title="🤔 Common Mistakes to Avoid">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-red-50 border border-red-100 rounded-xl p-4">
          <p className="font-semibold text-red-700 text-sm mb-3">❌ What not to do</p>
          <div className="space-y-2">
            {[
              "Leaving IT access until Day 1",
              "Not telling your team they're joining",
              "Packing Day 1 with back-to-back calls",
              "No plan for the first week",
              "Forgetting to assign a buddy",
            ].map((item, i) => (
              <p key={i} className="text-xs text-red-700 flex gap-1.5"><span>•</span>{item}</p>
            ))}
          </div>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-xl p-4">
          <p className="font-semibold text-green-700 text-sm mb-3">✅ What great looks like</p>
          <div className="space-y-2">
            {[
              "Laptop ready and waiting on Day 1",
              "Team excited and briefed in advance",
              "Day 1 agenda sent ahead of time",
              "First week 1:1s already in the diary",
              "Buddy has already messaged them",
            ].map((item, i) => (
              <p key={i} className="text-xs text-green-700 flex gap-1.5"><span>•</span>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  </div>
);

const NewStarterPage = () => (
  <div>
    <Callout icon="💡" bg="bg-blue-50" border="border-blue-200" text="text-blue-900">
      Your most important job in the first month isn't to get them productive. It's to make them feel like they made the right decision.
    </Callout>

    <Section title="📅 Day 1: What You Must Do">
      <Checklist items={[
        "Be present and available — this is not a day to be heads-down",
        "Give them a warm, human welcome (not just \"here's your laptop\")",
        "Walk them through the Day 1 agenda you prepared",
        "Do your first 1:1: cover their role, your expectations, and how you work together",
        "Post the Slack welcome in #people-parade: name, role, fun fact, what they'll be working on",
        "End the day with a 15-min check-in: how was it? What questions do they have?",
      ]} />
    </Section>

    <Section title="🗓️ Week 1: The Manager's Checklist">
      <Checklist items={[
        "Daily informal check-in (doesn't need to be formal — a Slack message counts)",
        "Ensure their buddy is actively engaged",
        "Introduce them to all 3–5 key stakeholders you planned",
        "Walk them through the team's current goals and roadmap",
        "Explain how the team works: stand-ups, sprint rhythm, how decisions are made",
        "Give them one small, achievable task to complete in Week 1 (confidence builder)",
        "End-of-week 1:1: how are they finding it? Adjust the plan based on feedback",
      ]} />
    </Section>

    <Section title="💬 Your 1:1 Cadence (First 90 Days)">
      <p className="text-sm text-gray-700 mb-4 leading-relaxed">For the first 90 days, 1:1s should be <strong>weekly</strong> — not fortnightly. These are the most important investment you make in a new starter.</p>
      <DataTable
        headers={["Week", "Focus"]}
        rows={[
          ["Week 1", "Role clarity, first impressions, immediate questions"],
          ["Weeks 2–3", "How they're settling in, any blockers, team dynamics"],
          ["Month 1 check-in", "Formal Month 1 review: role clarity, early wins, areas to develop"],
          ["Month 2–3", "Contribution, ownership, growing independence"],
          ["Month 3 (probation)", "Formal mid-probation review in Lattice"],
        ]}
      />
    </Section>

    <Section title="🏆 The Month 1 Check-In (End of Week 4)">
      <p className="text-sm text-gray-700 mb-3 leading-relaxed">This is a structured conversation — not just a regular 1:1. Cover:</p>
      <div className="bg-gray-50 rounded-xl p-4 space-y-2 mb-4">
        {[
          "How are they feeling about the role vs. expectations?",
          "Do they understand what success looks like in their role?",
          "Have they got the tools, access, and context they need?",
          "What's going well? What's been harder than expected?",
          "Are they building relationships across the team?",
          "What support do they need from you in Month 2?",
        ].map((item, i) => (
          <p key={i} className="text-sm text-gray-700 flex gap-2"><span className="text-indigo-400">•</span>{item}</p>
        ))}
      </div>
    </Section>

    <Section title="📊 Probation Check-In Schedule">
      <DataTable
        headers={["Milestone", "When", "What happens"]}
        rows={[
          ["Week 1 check-in", "End of Week 1", "Informal — how's it going?"],
          ["Month 1 check-in", "End of Month 1", "Structured conversation (see above)"],
          ["Mid-probation review", "Month 3", "Formal Lattice review — self + manager"],
          ["Final probation review", "Month 6", "Final Lattice review — pass/extend/exit decision"],
        ]}
      />
      <p className="text-sm text-gray-500 italic">Reach out to the People team if you have concerns at any point — don't wait until a formal review.</p>
    </Section>

    <Section title="❗ Red Flags to Watch For">
      <Callout icon="👀" bg="bg-orange-50" border="border-orange-200" text="text-orange-800">
        If you notice any of these in the first 30 days, address them early rather than hoping they improve: not asking questions, disengaged in team meetings, missing small deadlines, misalignment on role expectations, or relationship friction.
        <p className="mt-2 font-medium">Have a direct, kind conversation early. Most issues in the first 90 days are fixable with the right support. Contact the People team if you need guidance.</p>
      </Callout>
    </Section>

    <Section title="🚫 What Not to Do">
      <div className="space-y-3">
        {[
          ["Don't disappear", "After Day 1 and assume they'll figure it out"],
          ["Don't overload", "Them with information in Week 1 — drip feed what matters"],
          ["Don't skip 1:1s", "In the first 90 days, even when busy"],
          ["Don't wait", "Until Month 3 to give feedback — weekly coaching is more effective"],
          ["Don't assume", "They're fine because they seem confident"],
        ].map(([bold, rest], i) => (
          <div key={i} className="flex gap-3 items-start">
            <span className="text-red-400 font-bold text-sm flex-shrink-0 mt-0.5">✗</span>
            <p className="text-sm text-gray-700"><strong>{bold}</strong> {rest}</p>
          </div>
        ))}
      </div>
    </Section>
  </div>
);

const OnboardingPage = () => (
  <div>
    <Callout icon="📌" bg="bg-gray-50" border="border-gray-200" text="text-gray-700">
      Copy this page and adapt it for your new starter. Share it with them on Day 1 so they have a clear picture of what success looks like and what you'll be working on together.
    </Callout>

    <Section title="🎯 Role Details">
      <div className="grid grid-cols-2 gap-3 mb-2">
        {["Name", "Job Title", "Start date", "Manager", "Buddy", "Team"].map((label) => (
          <div key={label} className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-400 mb-1">{label}</p>
            <p className="text-sm text-gray-400 italic">[ {label} ]</p>
          </div>
        ))}
      </div>
    </Section>

    <Section title="📝 First 30 Days — Learn">
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
        <p className="text-sm text-blue-900 font-semibold mb-1">Goal</p>
        <p className="text-sm text-blue-800">Understand the role, the team, the product, and the context. Ask questions. Don't try to fix things yet.</p>
        <p className="text-sm text-blue-900 font-semibold mt-3 mb-1">Manager's focus</p>
        <p className="text-sm text-blue-800">Be available. Overinvest in 1:1s. Give them structured learning, not just "explore and figure it out."</p>
      </div>
      <Checklist title="Key learning objectives" items={[
        "Understand Blinq's mission, product, and business model",
        "Know the team's goals for this half and how this role contributes",
        "Complete all technical/non-technical setup",
        "Meet all immediate teammates + 3–5 key cross-functional stakeholders",
        "Shadow key processes, meetings, and workflows relevant to their role",
        "Understand how success is measured in this role",
        "[Add role-specific learning objectives here]",
      ]} />
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <p className="text-sm font-semibold text-gray-700 mb-2">By Day 30, this person should be able to:</p>
        <p className="text-sm text-gray-400 italic">[Write 3–5 specific outcomes that signal they're on track]</p>
      </div>
    </Section>

    <Section title="📝 First 60 Days — Contribute">
      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-4">
        <p className="text-sm text-indigo-900 font-semibold mb-1">Goal</p>
        <p className="text-sm text-indigo-800">Take ownership of their first workstream. Start contributing independently. Build relationships and trust.</p>
        <p className="text-sm text-indigo-900 font-semibold mt-3 mb-1">Manager's focus</p>
        <p className="text-sm text-indigo-800">Step back slightly. Give them something to own. Provide coaching, not direction.</p>
      </div>
      <Checklist title="Key contribution objectives" items={[
        "Own at least one project or workstream end-to-end",
        "Contribute meaningfully to team rituals (stand-up, reviews, planning)",
        "Build relationships with key stakeholders outside immediate team",
        "Confidently represent the team's work in the Showcase or equivalent",
        "[Add role-specific contribution objectives here]",
      ]} />
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <p className="text-sm font-semibold text-gray-700 mb-2">By Day 60, this person should be able to:</p>
        <p className="text-sm text-gray-400 italic">[Write 3–5 specific outcomes that signal they're on track]</p>
      </div>
    </Section>

    <Section title="📝 First 90 Days — Impact">
      <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-4">
        <p className="text-sm text-green-900 font-semibold mb-1">Goal</p>
        <p className="text-sm text-green-800">Deliver measurable impact. Have a clear point of view on the role and what they want to achieve. Be a known, trusted member of the team.</p>
        <p className="text-sm text-green-900 font-semibold mt-3 mb-1">Manager's focus</p>
        <p className="text-sm text-green-800">Increase accountability. Move from coaching to performance conversations. Formal mid-probation review at Month 3.</p>
      </div>
      <Checklist title="Key impact objectives" items={[
        "Deliver one piece of work with clear, measurable business impact",
        "Have a developed view on their longer-term priorities",
        "Be a proactive contributor — identifying problems, not just solving assigned ones",
        "Complete mid-probation review in Lattice",
        "Have a 6-month development plan agreed with manager",
        "[Add role-specific impact objectives here]",
      ]} />
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <p className="text-sm font-semibold text-gray-700 mb-2">By Day 90, this person should be able to:</p>
        <p className="text-sm text-gray-400 italic">[Write 3–5 specific outcomes that signal they're on track]</p>
      </div>
    </Section>

    <Section title="💬 1:1 Framework">
      <DataTable
        headers={["Section", "Questions to ask"]}
        rows={[
          ["Check-in", "How are you feeling? What's giving you energy this week? What's draining it?"],
          ["Progress", "What did you work on? What went well? Any blockers?"],
          ["Learning", "What's one thing you've learned this week? What do you still want to understand better?"],
          ["Relationships", "Who have you connected with? Are there relationships I can help you build?"],
          ["Feedback", "What can I do better to support you? Here's one thing I'd like you to focus on…"],
          ["Next week", "What's your priority next week? What would make it a success?"],
        ]}
      />
    </Section>

    <Section title="🌟 What Success Looks Like">
      <DataTable
        headers={["Timeframe", "What does \"great\" look like?"]}
        rows={[
          ["30 days", "[Fill in with hiring manager]"],
          ["60 days", "[Fill in with hiring manager]"],
          ["90 days", "[Fill in with hiring manager]"],
        ]}
      />
    </Section>

    <Section title="📚 Key Resources">
      <div className="space-y-2">
        <a href="https://app.notion.com/p/1fa69a35ad8f806588d9cdce4b037475" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
          <span>📖</span> Employee Handbook →
        </a>
        <a href="https://app.notion.com/p/38269a35ad8f818386cee14674b9d1b4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
          <span>🌱</span> Blinq Newbie Hub →
        </a>
      </div>
    </Section>
  </div>
);

// ── Main App ────────────────────────────────────────────────────────

const pageMap = {
  roleApproval: RoleApprovalPage,
  resignation: ResignationPage,
  preStart: PreStartPage,
  newStarter: NewStarterPage,
  onboarding: OnboardingPage,
};

export default function App() {
  const [page, setPage] = useState("home");
  const card = navCards.find((c) => c.id === page);
  const PageComponent = pageMap[page];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          {page !== "home" && (
            <button
              onClick={() => setPage("home")}
              className="text-sm text-indigo-500 hover:text-indigo-700 flex items-center gap-1 mb-4 transition-colors"
            >
              ← Back to Hub
            </button>
          )}
          <div className="flex items-center gap-3">
            <span className="text-4xl">{page === "home" ? "💼" : card?.icon}</span>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                {page === "home" ? "Hiring Manager Hub" : card?.title}
              </h1>
              <p className="text-sm text-gray-400 mt-0.5">Blinq · Talent Team</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          {page === "home" ? <HomePage setPage={setPage} /> : <PageComponent />}
        </div>

        {/* Footer nav */}
        {page !== "home" && (
          <div className="mt-4 flex justify-between items-center">
            <button onClick={() => setPage("home")} className="text-sm text-gray-400 hover:text-indigo-500 transition-colors">
              ← Back to Hub
            </button>
            <div className="flex gap-1">
              {navCards.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setPage(c.id)}
                  title={c.title}
                  className={`w-2 h-2 rounded-full transition-all ${c.id === page ? "bg-indigo-500 w-6" : "bg-gray-300 hover:bg-gray-400"}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
