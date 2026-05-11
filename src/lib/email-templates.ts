import type { ContactFormData, DemoFormData } from './validations'

const baseStyle = `
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #080B14;
  color: #F0F4FF;
  padding: 40px;
  max-width: 600px;
  margin: 0 auto;
`

const labelStyle = `
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8892A4;
  margin-bottom: 4px;
`

const valueStyle = `
  font-size: 15px;
  color: #F0F4FF;
  margin-bottom: 20px;
  padding: 12px 16px;
  background: #111827;
  border: 1px solid #1A2235;
  border-radius: 8px;
`

const headerStyle = `
  font-size: 24px;
  font-weight: 700;
  color: #F0F4FF;
  margin-bottom: 8px;
`

const badgeStyle = `
  display: inline-block;
  background: #00C2E020;
  color: #00C2E0;
  border: 1px solid #00C2E040;
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 24px;
`

function field(label: string, value: string | undefined) {
  if (!value) return ''
  return `
    <div>
      <div style="${labelStyle}">${label}</div>
      <div style="${valueStyle}">${value}</div>
    </div>
  `
}

export function contactEmailHtml(data: ContactFormData): string {
  return `
    <div style="${baseStyle}">
      <div style="${badgeStyle}">New Contact Inquiry</div>
      <h1 style="${headerStyle}">SafeNest Contact Form</h1>
      <p style="color:#8892A4;margin-bottom:32px;">A new message has been submitted via the contact form.</p>
      ${field('Name', `${data.firstName} ${data.lastName}`)}
      ${field('Email', data.email)}
      ${field('Phone', data.phone)}
      ${field('Company', data.company)}
      ${field('Message', data.message)}
      <hr style="border:none;border-top:1px solid #1A2235;margin:32px 0;" />
      <p style="font-size:12px;color:#4A5568;">Sent from safenestsafety.com</p>
    </div>
  `
}

export function demoEmailHtml(data: DemoFormData): string {
  const interestLabels: Record<string, string> = {
    'smart-platform': 'Smart Monitoring Platform',
    'safenest-car': 'SafeNest Car Seat Safety',
    'defensenest-k9': 'DefenseNest K9 Protection',
    'enterprise': 'Enterprise Solutions',
    'partnership': 'Strategic Partnership',
    'other': 'Other / General',
  }

  return `
    <div style="${baseStyle}">
      <div style="${badgeStyle}">New Demo Request</div>
      <h1 style="${headerStyle}">SafeNest Demo Request</h1>
      <p style="color:#8892A4;margin-bottom:32px;">A new demo request has been submitted.</p>
      ${field('Name', `${data.firstName} ${data.lastName}`)}
      ${field('Email', data.email)}
      ${field('Phone', data.phone)}
      ${field('Company', data.company)}
      ${field('Area of Interest', interestLabels[data.interest] ?? data.interest)}
      ${field('Message', data.message)}
      <hr style="border:none;border-top:1px solid #1A2235;margin:32px 0;" />
      <p style="font-size:12px;color:#4A5568;">Sent from safenestsafety.com</p>
    </div>
  `
}
