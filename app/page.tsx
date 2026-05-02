export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Churn Prevention
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict customer churn<br />
          <span className="text-[#58a6ff]">30–60 days early</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          ChurnGuard connects to your analytics stack — Google Analytics, Mixpanel, Amplitude — and surfaces usage pattern changes that signal churn before your customers cancel.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start for $19/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn more
          </a>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            ["30–60 days", "Early warning"],
            ["3 integrations", "GA · Mixpanel · Amplitude"],
            ["Real-time", "Automated alerts"]
          ].map(([stat, label]) => (
            <div key={stat} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-bold text-sm">{stat}</div>
              <div className="text-[#8b949e] text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Connect GA, Mixpanel & Amplitude",
              "Churn risk scoring per user",
              "30–60 day early warning alerts",
              "Intervention recommendations",
              "Slack & email notifications",
              "Unlimited team members"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get started
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-6">
          {[
            [
              "How does ChurnGuard predict churn?",
              "ChurnGuard analyzes behavioral signals from your analytics tools — login frequency, feature usage drops, session length changes — and scores each user against configurable churn risk models. When a score crosses your threshold, you get an alert with recommended actions."
            ],
            [
              "Which analytics platforms are supported?",
              "ChurnGuard integrates with Google Analytics 4, Mixpanel, and Amplitude out of the box. Connect one or all three; ChurnGuard merges the data into a unified risk view per user."
            ],
            [
              "Can I cancel my subscription anytime?",
              "Yes. There are no long-term contracts. Cancel from your account dashboard at any time and you won't be charged again. Your data is exportable before cancellation."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} ChurnGuard. All rights reserved.
      </footer>
    </main>
  );
}
