export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] font-sans">
      <div className="relative z-10 w-full px-4 pt-32 md:pt-24 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <a href="/" className="inline-block transition-transform hover:scale-105 cursor-pointer">
              <img
                src="/logo.png"
                alt="milestone.fun"
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </a>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="text-center mb-12">
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                milestone.fun is a Solana-native execution-gated capital protocol built to fund real software work — not hype, not speculation. It targets feature-scoped capital raises ($25k–$50k) and aligns funding with verifiable delivery using smart contracts, community verification, and composable primitives.
              </p>
            </div>

            <p className="text-neutral-400 leading-relaxed mb-6">
              Unlike traditional fundraising mechanisms that distribute capital up front or rely on subjective grant allocation, milestone.fun enforces on-chain escrow semantics where SPL-USDC is held in vaults until predefined milestones are achieved and verified. Funds are only released when milestone conditions are met and verified by a curated ReviewerSet, and verified progress is anchored on-chain using receipts and proofs.
            </p>

            <p className="text-neutral-400 leading-relaxed mb-6">
              To safeguard early token distribution and community participation in project fundraising, milestone.fun integrates with Meteora's Alpha Vault — a Solana launch-oriented vault primitive designed to provide fair, anti-bot participation prior to pool activation. Alpha Vault's configurable pro-rata and FCFS modes give genuine supporters early access while maintaining uniform pricing and configurable caps, serving as a trust-aligned bootstrap mechanism for fundraising rounds that include token allocations.
            </p>

            <h2 className="text-2xl font-light text-white mt-10 mb-4">Protocol Principles</h2>
            
            <p className="text-neutral-400 leading-relaxed mb-4">
              The protocol is built with the following principles:
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Execution-Gated Capital</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Funding is conditional on delivery. Teams define discrete milestones, and only upon verified completion do escrowed funds get released.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">On-Chain Custody</h3>
                <p className="text-neutral-400 leading-relaxed">
                  SPL-USDC stays in program-controlled vaults; off-chain trust surfaces are minimized.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Proof Anchoring</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Milestone completion is demonstrated via on-chain proofs (transaction hashes, commit anchors, or deploy receipts) submitted with verifiable metadata.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Community Transparency</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Builders commit to quarterly updates and provide milestone evidence, enabling reputation to accrue based on real delivery, not marketing narratives.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Composability & Integration</h3>
                <p className="text-neutral-400 leading-relaxed">
                  The protocol's primitives (RoundConfig, MilestoneVault, ReviewReceipts) are designed to interoperate with Solana tooling (Anchor, CPI-ready, UI SDKs).
                </p>
              </div>
            </div>

            <p className="text-neutral-400 leading-relaxed mb-8">
              By integrating Meteora's Alpha Vault for fair launch participation and combining on-chain milestone enforcement with protocol-appointed verification, milestone.fun creates a progress-indexed capital market on Solana where backers fund actual work and builders ship actual deliverables.
            </p>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 mb-10">
              <h3 className="text-lg font-semibold text-white mb-3">Canonical Definition</h3>
              <p className="text-neutral-300 leading-relaxed italic">
                milestone.fun — a Solana execution-gated capital primitive for feature-scoped funding with program-enforced escrow and milestone verification.
              </p>
            </div>

            <h2 className="text-2xl font-light text-white mt-12 mb-4">Problem Statement & Motivation</h2>
            <p className="text-neutral-500 text-sm italic mb-6">Founder-grade, Solana-native, technical & opinionated</p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Problem — capital is broken for builders</h3>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Solana has an enormous supply of technical talent and small teams building real infra. Yet the funding primitives available to them are hostile to incremental progress:
            </p>

            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-8">
              <li><strong className="text-white">VCs want scale, not completion.</strong> They fund narratives and runway, not discrete features. Small, targeted needs ($5k–$25k) are invisible to them.</li>
              <li><strong className="text-white">Grants are slow and political.</strong> Approval cycles, opaque criteria, and non-standard deliverables make grants unreliable for shipping fast.</li>
              <li><strong className="text-white">Presales and ICOs optimize for speculation.</strong> They encourage over-raising, token velocity hacks, and marketing-first behavior that misalign incentives versus shipping.</li>
              <li><strong className="text-white">Bot-driven launches & sniper dynamics distort early distribution.</strong> Even when token allocation is appropriate, anti-bot mismatches create winners who are not builders.</li>
              <li><strong className="text-white">Custody and verification are fragmented.</strong> Off-chain "escrows," manual disbursements, or discretionary review processes reintroduce centralization risk and make audits painful.</li>
            </ul>

            <p className="text-neutral-400 leading-relaxed mb-8">
              <strong className="text-white">Result:</strong> builders either dilute too early, sit on ideas, or ship half-finished features. The ecosystem loses iterated product velocity.
            </p>

            <h3 className="text-xl font-semibold text-white mt-10 mb-3">Why existing fixes fail</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-8">
              <li><strong className="text-white">Smaller raises get cannibalized by tooling designed for large rounds.</strong> Token mechanics, liquidity bootstraps, and automated market makers push projects toward scale to make incentives "work."</li>
              <li><strong className="text-white">Permissionless presales attract rent-seeking.</strong> No real gating for delivery means backers are buying promises, not progress.</li>
              <li><strong className="text-white">Grant and DAO systems trade speed for oversight.</strong> They lock teams into slow cycles and high coordination costs—bad for engineers shipping product.</li>
              <li><strong className="text-white">Anti-bot tech (Alpha Vaults, whitelists) helps distribution but doesn't solve post-raise accountability.</strong> They protect pricing at launch but say nothing about whether the funded feature ever ships.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-10 mb-3">Threat model (who can break funding)</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4">
              <li><strong className="text-white">Toxic teams:</strong> raise small capital, ghost, and never deliver.</li>
              <li><strong className="text-white">Colluding reviewers:</strong> false verifications to unlock funds.</li>
              <li><strong className="text-white">Oracles/metrics fakery:</strong> forged or gamed metrics used as "proof" of completion.</li>
              <li><strong className="text-white">Bots & speculators:</strong> capture early allocations even when product delivery is the objective.</li>
              <li><strong className="text-white">Protocol bugs / admin keys:</strong> any off-chain admin path that can move funds away from programmed intents.</li>
            </ul>

            <p className="text-neutral-400 leading-relaxed mb-8">
              Any viable solution must minimize these vectors or constrain them into bounded, auditable surfaces.
            </p>

            <h3 className="text-xl font-semibold text-white mt-10 mb-3">Design goals — what milestone.fun must achieve</h3>
            <ol className="list-decimal list-inside text-neutral-400 space-y-2 mb-8">
              <li><strong className="text-white">Capital follows execution.</strong> Tranches only release against verifiable artifacts (commits, tx receipts, deploy hashes).</li>
              <li><strong className="text-white">On-chain custody.</strong> SPL-USDC lives in PDA vaults (MilestoneVault) controlled by program logic, not off-chain gatekeepers.</li>
              <li><strong className="text-white">Minimal trusted surface.</strong> Trust limited to two bounded roles: Developer and ReviewerSet. Both are auditable and replaceable.</li>
              <li><strong className="text-white">Verifiable receipts.</strong> Milestone completion must anchor to immutable artifacts (Git commit CIDs, on-chain deploy txs, IPFS snapshots).</li>
              <li><strong className="text-white">Anti-bot fair distribution.</strong> Integrate launch protection (Alpha Vault) where token allocation is part of the round.</li>
              <li><strong className="text-white">Dispute resilience.</strong> Timelocks, emergency windows, slashing/replacement for reviewers, and transparent dispute records.</li>
              <li><strong className="text-white">Composability.</strong> Anchor as lightweight Solana programs (Anchor/CPI friendly) so other protocols and frontends can reuse primitives.</li>
            </ol>

            <h3 className="text-xl font-semibold text-white mt-10 mb-3">How milestone.fun fixes it — core primitives & flow</h3>
            <ol className="list-decimal list-inside text-neutral-400 space-y-2 mb-8">
              <li><strong className="text-white">RoundConfig (on-chain):</strong> parameters (target amount, tranche sizes, milestone definitions, reviewer multisig, timelocks, Alpha Vault integration flag).</li>
              <li><strong className="text-white">MilestoneVault (PDA):</strong> holds SPL-USDC; each tranche is encoded on-chain. Funds cannot be moved except by the milestone release instruction.</li>
              <li><strong className="text-white">ReviewerSet (multisig):</strong> protocol-appointed or project-curated multisig that submits ExecutionReceipts. Reviewers are slashed/replaced on proven misbehavior.</li>
              <li><strong className="text-white">ExecutionReceipt:</strong> an on-chain record with metadata — Git commit CID, IPFS artifacts, deploy txs, testnet/mainnet tx hashes, and optional metrics snapshot CID. Receipts are verifiable by anyone.</li>
              <li><strong className="text-white">Release logic:</strong> when N-of-M reviewers submit receipts passing validation, the MilestoneVault automatically releases the tranche to the developer PDA. Releases are atomic and logged.</li>
              <li><strong className="text-white">Alpha Vault integration:</strong> for rounds that include token allocations, the Alpha Vault manages pre-launch deposits and uniform pricing/anti-bot distribution. Token releases to participants are conditioned on milestone completion (token unlock = milestone pass).</li>
              <li><strong className="text-white">Safety rails:</strong> timelocked release windows, refund paths if milestones fail within dispute windows, and reviewer rotation mechanics.</li>
            </ol>

            <h3 className="text-xl font-semibold text-white mt-10 mb-3">Why this is Solana-native (not generic)</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-8">
              <li><strong className="text-white">Low latency, low fee micro-tranches:</strong> Solana's throughput and cheap SPL-USDC transfers make $5k–$25k rounds operationally cheap and frictionless.</li>
              <li><strong className="text-white">PDA custody & CPI composability:</strong> MilestoneVaults as PDAs allow safe, auditable custody without custodial accounts. Anchor/CPI integration makes the primitive usable by existing Solana infra (launchpads, wallets, frontends).</li>
              <li><strong className="text-white">Native integration with Meteora Alpha Vault:</strong> use the proven anti-bot primitives for fair on-chain distribution while keeping post-raise accountability on the milestone protocol.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-10 mb-3">Concrete behavioral changes in the market</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-8">
              <li><strong className="text-white">Less over-raising:</strong> projects only take what they can credibly ship, limiting dilution and hype cycles.</li>
              <li><strong className="text-white">Faster product iteration:</strong> small funded tranches enable continuous shipping instead of stalled, large-round planning.</li>
              <li><strong className="text-white">Reputation ≠ narrative:</strong> on-chain receipts and history create machine-readable delivery records that compound trust.</li>
              <li><strong className="text-white">Cleaner token mechanics:</strong> token allocations can be gated by delivery, reducing immediate sell pressure.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-10 mb-3">Metrics of success (what we measure)</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-8">
              <li><strong className="text-white">Delivery rate:</strong> percent of rounds that successfully complete all milestones.</li>
              <li><strong className="text-white">Time-to-feature:</strong> median time between tranche release and proof anchor.</li>
              <li><strong className="text-white">Refund rate:</strong> percent of funds returned due to failed milestones/disputes.</li>
              <li><strong className="text-white">Alpha Vault fairness metric:</strong> fraction of deposits that were non-bot (measured via participation patterns + whitelists).</li>
              <li><strong className="text-white">Reputation growth:</strong> repeat-applicant success and backer retention.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-10 mb-3">Closing</h3>
            <p className="text-neutral-400 leading-relaxed mb-8">
              We are not building another launchpad or another grant UI. We are building a funding primitive: <strong className="text-white">execution-gated capital</strong> for Solana. Integrating Alpha Vault solves fair distribution at launch; milestone.fun enforces delivery after funding. Together they turn early capital from a one-time bet into a stream of accountable, composable, on-chain commitments.
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-0 right-0 w-full px-6 md:px-12 z-20 flex flex-col md:flex-row justify-between items-center text-gray-50 text-sm md:text-[16.8px] font-medium gap-4">
        <a 
          href="https://x.com/milestonedotfun"
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <span>Follow on</span>
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/db152321-d045-41b8-a835-86af80fecc29-umbraprivacy-com/assets/images/6926cf463980cb3f607d741d_twitter-1.avif" 
            alt="Twitter" 
            className="w-5 h-5 object-contain opacity-80"
          />
        </a>
      </div>
    </section>
  );
}