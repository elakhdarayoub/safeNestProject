-- SafeNest Articles Seed Data
-- Run this in Supabase SQL Editor AFTER creating the tables.
-- Pastes the 6 placeholder articles from src/data/articles.ts into production.

INSERT INTO articles (slug, title, category, date, last_modified, read_time, excerpt, content, author_name, author_role, author_initials, published)
VALUES

(
  'predictive-ai-industrial-incidents',
  'How Predictive AI Reduced Industrial Incidents by 40% in Global Manufacturing Facilities',
  'Case Study',
  'Oct 12, 2026',
  'Oct 14, 2026',
  '8 min read',
  'A comprehensive look at our deployment across 12 Fortune 500 manufacturing plants, detailing how the SafeNest intelligence platform transitioned these facilities from reactive monitoring to proactive incident prevention.',
  E'## The Reactive Monitoring Problem\nFor decades, industrial safety has relied on a fundamentally flawed premise: that observing an incident as it happens, or recording it for later review, constitutes "security." Traditional CCTV systems and standard environmental sensors are passive observers. They tell you what went wrong, but they cannot tell you what is about to go wrong.\n\nWhen a multinational manufacturing conglomerate approached SafeNest, their problem was clear. Despite investing heavily in standard monitoring infrastructure across their 12 global facilities, their incident rate remained stagnant. They needed a paradigm shift.\n\n> "SafeNest didn''t just upgrade our safety protocols; it completely redefined them. It''s the difference between reviewing an incident and preventing one."\n> — Director of Safety, Fortune 500 Manufacturing\n\n## The Architecture of Prevention\nWe deployed the SafeNest intelligence platform across all 12 sites, establishing a network of multi-sensor fusion edge nodes. These nodes combined visual, acoustic, and thermal data, processing it in real-time locally without relying on cloud round-trips.\n\n### Multi-Sensor Correlation\n- **Thermal signatures:** Detecting abnormal equipment heating before combustion.\n- **Acoustic anomalies:** Identifying irregular machine patterns that precede failure.\n- **Visual context:** Understanding human movement in relation to restricted or high-risk zones.\n\nBy fusing these distinct data streams, the AI risk modeling engine achieved an unprecedented zero-false-positive accuracy rate within the first 90 days.\n\n## Results and Impact\nThe outcomes exceeded initial projections. Over a 12-month period, the facilities equipped with SafeNest saw a **40% reduction in measurable safety incidents**. More importantly, the system successfully identified and proactively intervened in 14 "critical anomaly" scenarios—instances that, under the previous passive system, would have likely resulted in significant harm or operational downtime.',
  'Dr. Sarah Thorne',
  'Chief AI Architect',
  'DT',
  true
),

(
  'safenest-core-v2-4',
  'SafeNest Core V2.4: Enhanced Sensor Fusion Capabilities',
  'Platform Update',
  'Oct 15, 2026',
  'Oct 16, 2026',
  '5 min read',
  'Exploring the balance between comprehensive environmental monitoring and privacy preservation in our latest architecture update.',
  E'## Introducing SafeNest Core V2.4\nWe are thrilled to announce the general availability of SafeNest Core V2.4. This update brings significant enhancements to our sensor fusion algorithms, allowing for even greater accuracy in complex, noisy environments.\n\n## Privacy at the Edge\nOne of our primary goals with V2.4 was to enhance privacy preservation without compromising on safety. By processing data at the edge, we ensure that sensitive environmental data never leaves the facility. The new update includes advanced anonymization techniques that obscure personal identifiers while retaining behavioral context.',
  'James Reynolds',
  'VP of Engineering',
  'JR',
  true
),

(
  'ethical-implications-edge-computing',
  'The Ethical Implications of Edge Computing in Public Spaces',
  'AI Safety',
  'Oct 18, 2026',
  'Oct 18, 2026',
  '12 min read',
  'How we balance public safety with individual privacy through decentralized, anonymized AI processing at the edge.',
  E'## The Privacy vs. Security Paradox\nFor years, the deployment of intelligent monitoring in public spaces has been hindered by a critical tension: the need for safety versus the fundamental right to privacy. Traditional cloud-based surveillance systems often fail on both fronts—they are too slow for real-time prevention and too intrusive with data storage.\n\n## Decentralized Intelligence\nEdge computing provides the technical foundation to resolve this paradox. By pushing the AI inference directly to the sensor node, we can analyze an environment without recording it. SafeNest''s architecture ensures that the only data transmitted is an "alert state" and relevant context—not continuous video feeds.',
  'Dr. Sarah Thorne',
  'Chief AI Architect',
  'DT',
  true
),

(
  'safenest-expansion-europe',
  'SafeNest Expands to European Markets: New Berlin HQ',
  'News',
  'Oct 20, 2026',
  'Oct 21, 2026',
  '3 min read',
  'SafeNest Technologies officially opens its European headquarters in Berlin, marking a significant milestone in our global mission to standardize AI safety.',
  E'## Global Expansion\nOur mission has always been global. With the opening of our Berlin headquarters, we are better positioned to support our European partners and navigate the unique regulatory landscape of the EU.\n\n## Why Berlin?\nBerlin represents a hub of innovation and a commitment to data privacy—values that are core to the SafeNest philosophy. Our new team will focus on localized AI risk models tailored to European infrastructure and industrial standards.',
  'Elena Fischer',
  'Director of Global Operations',
  'EF',
  true
),

(
  'smart-city-singapore',
  'Case Study: Real-time Pedestrian Safety in Singapore Smart Districts',
  'Case Study',
  'Oct 22, 2026',
  'Oct 22, 2026',
  '10 min read',
  'How SafeNest sensors are protecting pedestrians at high-risk intersections in Singapore through predictive behavioral analysis.',
  E'## Urban Safety Challenges\nBusy urban intersections are some of the most complex environments for safety systems. The sheer volume of data and the unpredictability of human behavior require a level of intelligence that traditional traffic systems lack.\n\n## The Singapore Pilot\nIn collaboration with local transport authorities, we deployed SafeNest nodes at three major intersections. Using our proprietary behavioral modeling, the system identifies potential collisions up to 2 seconds before they occur, triggering localized warnings for both drivers and pedestrians.',
  'Dr. Sarah Thorne',
  'Chief AI Architect',
  'DT',
  true
),

(
  'mobile-app-release',
  'SafeNest Mobile: Real-time Alerts Now in Your Pocket',
  'Platform Update',
  'Oct 25, 2026',
  'Oct 26, 2026',
  '4 min read',
  'The long-awaited SafeNest mobile application is here, bringing critical environmental alerts and facility status to security teams on the move.',
  E'## Mobility for Security Teams\nSecurity is not a desk job. Our partners have consistently requested a way to stay connected to their facility status while on patrol or off-site.\n\n## Key Features\n- **Push Notifications:** Instant alerts for critical risk detections.\n- **Facility Live-View:** Abstracted, privacy-compliant status maps.\n- **Incident Response:** One-tap activation of safety protocols.',
  'James Reynolds',
  'VP of Engineering',
  'JR',
  true
);
