import React, { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { companyInfo } from '../data/companyInfo';
import { sectors } from '../data/sectors';

const Contact = () => {
  const [activeSector, setActiveSector] = useState(sectors[0].slug);
  const [copiedText, setCopiedText] = useState('');
  const [quoteSubject, setQuoteSubject] = useState('Bulk Order Inquiry');
  const [companyName, setCompanyName] = useState('');

  useEffect(() => {
    document.title = 'Contact Us | ARSOS Trading';
    window.scrollTo(0, 0);
  }, []);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(''), 3000);
  };

  const currentSectorData = sectors.find((s) => s.slug === activeSector) || sectors[0];

  const handleMailto = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${quoteSubject}] ${companyName ? 'for ' + companyName : 'B2B Inquiry'}`);
    const body = encodeURIComponent(
      `Hello ARSOS Trading Team,\n\nI am interested in learning more about your ${currentSectorData.title} division services.\n\nCompany Name: ${companyName || 'N/A'}\nInquiry Type: ${quoteSubject}\n\nPlease get in touch with me regarding product catalog and pricing.\n\nBest regards,`
    );
    window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
  };

  const contactCards = [
    {
      icon: 'bi-telephone-fill',
      title: 'Direct Call & Hotline',
      value: companyInfo.phone,
      actionText: 'Click to Call',
      actionLink: `tel:${companyInfo.phone.replace(/\s+/g, '')}`,
      type: 'phone',
    },
    {
      icon: 'bi-envelope-fill',
      title: 'Email Procurement',
      value: companyInfo.email,
      actionText: 'Send Email',
      actionLink: `mailto:${companyInfo.email}`,
      type: 'email',
    },
    {
      icon: 'bi-clock-fill',
      title: 'Response SLA',
      value: '< 2 Hours SLA',
      subtext: 'Rapid Response Guaranteed',
      type: 'sla',
    },
  ];

  return (
    <>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <span className="breadcrumb-text">Home / Contact</span>
            <h1>Connect With ARSOS Trading</h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 700, margin: '15px auto 0' }}>
              Direct B2B procurement support for commercial supplies, industrial chemical orders, IT services, and hospitality inventory.
            </p>
          </div>
        </div>
      </section>

      {/* Main Direct Action Cards */}
      <section className="contact-cards section-padding">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {contactCards.map((c, i) => (
              <div className="col-lg-4 col-md-6" key={c.title}>
                <div className="contact-card reveal hover-lift">
                  <div className="cc-icon">
                    <i className={`bi ${c.icon}`}></i>
                  </div>
                  <h5>{c.title}</h5>
                  <strong className="cc-value">{c.value}</strong>
                  {c.subtext && <p className="cc-subtext">{c.subtext}</p>}
                  
                  {c.actionLink ? (
                    <div className="d-flex gap-2 justify-content-center mt-3">
                      <a href={c.actionLink} className="btn-cc-action">
                        {c.actionText} <i className="bi bi-arrow-up-right"></i>
                      </a>
                      <button
                        onClick={() => handleCopy(c.value, c.type)}
                        className="btn-cc-copy"
                        title="Copy to clipboard"
                      >
                        {copiedText === c.type ? (
                          <i className="bi bi-check2 text-success fs-5"></i>
                        ) : (
                          <i className="bi bi-clipboard fs-6"></i>
                        )}
                      </button>
                    </div>
                  ) : (
                    <span className="badge bg-success mt-3 py-2 px-3">Verified Active Line</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .contact-card {
            background: #fff;
            padding: 38px 28px;
            border-radius: 16px;
            text-align: center;
            height: 100%;
            box-shadow: var(--arsos-shadow-sm);
            transition: var(--arsos-transition);
            border-top: 4px solid var(--arsos-gold);
          }
          .contact-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--arsos-shadow-lg);
          }
          .cc-icon {
            width: 65px;
            height: 65px;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
            border-radius: 14px;
            box-shadow: 0 8px 20px rgba(11,37,69,0.15);
          }
          .cc-icon i { font-size: 1.6rem; color: var(--arsos-gold); }
          .contact-card h5 { font-size: 1.1rem; color: var(--arsos-navy); margin-bottom: 8px; }
          .cc-value { display: block; font-family: 'Montserrat', sans-serif; font-size: 1.15rem; color: var(--arsos-navy); font-weight: 800; margin-bottom: 4px; }
          .cc-subtext { color: var(--arsos-text-light); font-size: 0.85rem; margin: 0; }
          .btn-cc-action {
            background: var(--arsos-navy);
            color: #fff;
            font-size: 0.84rem;
            font-weight: 700;
            padding: 8px 18px;
            border-radius: 8px;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: all 0.3s ease;
          }
          .btn-cc-action:hover { background: var(--arsos-gold); color: var(--arsos-navy); }
          .btn-cc-copy {
            background: var(--arsos-gray);
            border: 1px solid var(--arsos-gray-dark);
            border-radius: 8px;
            padding: 6px 12px;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          .btn-cc-copy:hover { background: #fff; border-color: var(--arsos-gold); }
        `}</style>
      </section>

      {/* Interactive Sector Inquiry Hub */}
      <section className="sector-hub section-padding bg-gray">
        <div className="container">
          <SectionTitle
            subtitle="Department Directory"
            title="Interactive Sector Inquiry Hub"
            description="Select a trading division to view direct product lines, fulfillment SLAs, and one-click quote triggers."
          />

          <div className="row g-4 align-items-center">
            {/* Sector Tabs */}
            <div className="col-lg-4">
              <div className="sector-nav-list reveal-left">
                {sectors.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => setActiveSector(s.slug)}
                    className={`sector-nav-btn ${activeSector === s.slug ? 'active' : ''}`}
                  >
                    <i className={`bi ${s.icon}`}></i>
                    <div className="text-start">
                      <strong>{s.title}</strong>
                      <small>{s.shortDesc.slice(0, 45)}...</small>
                    </div>
                    <i className="bi bi-chevron-right ms-auto arrow-icon"></i>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Sector Details Box */}
            <div className="col-lg-8">
              <div className="sector-detail-display reveal-right">
                <div className="sdd-header">
                  <div className="d-flex align-items-center gap-3">
                    <div className="sdd-icon"><i className={`bi ${currentSectorData.icon}`}></i></div>
                    <div>
                      <span className="badge bg-warning text-dark mb-1">Active Division</span>
                      <h3 className="mb-0 text-navy">{currentSectorData.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="sdd-body mt-4">
                  <p className="lead fs-6 text-muted mb-4">{currentSectorData.intro}</p>
                  
                  <h5 className="fw-bold text-navy mb-3">Key Solutions & Product Catalog:</h5>
                  <div className="row g-2 mb-4">
                    {currentSectorData.list.map((item) => (
                      <div className="col-md-6" key={item}>
                        <div className="catalog-item">
                          <i className="bi bi-check-circle-fill text-gold"></i>
                          <span>{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="sdd-action-box">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                      <div>
                        <small className="d-block text-muted">Direct Department Email</small>
                        <strong className="text-navy fs-6">{companyInfo.email}</strong>
                      </div>
                      <a
                        href={`mailto:${companyInfo.email}?subject=Inquiry regarding ${currentSectorData.title}`}
                        className="btn-arsos btn-arsos-primary"
                      >
                        Inquire For {currentSectorData.title} <i className="bi bi-envelope-paper-fill"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .sector-nav-list { display: flex; flex-direction: column; gap: 12px; }
          .sector-nav-btn {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 18px;
            background: #fff;
            border: 2px solid transparent;
            border-radius: 12px;
            text-align: left;
            cursor: pointer;
            box-shadow: var(--arsos-shadow-sm);
            transition: all 0.3s ease;
          }
          .sector-nav-btn:hover { border-color: var(--arsos-gold); transform: translateX(5px); }
          .sector-nav-btn.active {
            background: var(--arsos-navy);
            color: #fff;
            border-color: var(--arsos-navy);
          }
          .sector-nav-btn i { font-size: 1.5rem; color: var(--arsos-gold); }
          .sector-nav-btn.active small { color: rgba(255,255,255,0.7); }
          .sector-nav-btn small { display: block; color: var(--arsos-text-light); font-size: 0.78rem; }
          .sector-nav-btn strong { display: block; font-family: 'Montserrat', sans-serif; font-size: 0.95rem; }
          .sector-nav-btn .arrow-icon { font-size: 0.9rem; }

          .sector-detail-display {
            background: #fff;
            padding: 40px;
            border-radius: 20px;
            box-shadow: var(--arsos-shadow);
            border-left: 6px solid var(--arsos-gold);
          }
          .sdd-icon {
            width: 55px;
            height: 55px;
            background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
            color: var(--arsos-gold);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
          }
          .catalog-item {
            display: flex;
            align-items: center;
            gap: 10px;
            background: var(--arsos-gray);
            padding: 10px 14px;
            border-radius: 8px;
            font-size: 0.88rem;
            font-weight: 500;
          }
          .sdd-action-box {
            background: linear-gradient(135deg, rgba(201,169,97,0.1), rgba(11,37,69,0.05));
            border: 1px dashed var(--arsos-gold);
            padding: 20px 24px;
            border-radius: 12px;
          }
        `}</style>
      </section>

      {/* Pre-Formatted Quote Mailto Generator */}
      <section className="quote-generator section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="generator-card reveal">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                    <span className="section-subtitle">Instant Email Link</span>
                    <h2 className="section-title text-start mb-3">
                      Generate Pre-Formatted Quote Request
                    </h2>
                    <p className="text-muted mb-4">
                      Select your inquiry topic and company details below. Clicking launch will automatically open your computer's mail application with all parameters filled.
                    </p>
                    
                    <div className="mb-3">
                      <label className="fw-bold mb-1 small text-navy">Select Requirement Topic:</label>
                      <select
                        value={quoteSubject}
                        onChange={(e) => setQuoteSubject(e.target.value)}
                        className="form-select py-2"
                      >
                        <option value="Bulk Wholesale Order">Bulk Wholesale Order</option>
                        <option value="Product Pricing & Quotation">Product Pricing & Quotation</option>
                        <option value="Product Samples Request">Product Samples Request</option>
                        <option value="B2B Contract & Partnership">B2B Contract & Partnership</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="fw-bold mb-1 small text-navy">Company Name (Optional):</label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Acme Commercial Ltd"
                        className="form-control py-2"
                      />
                    </div>

                    <button onClick={handleMailto} className="btn-arsos btn-arsos-navy w-100 py-3">
                      Open Email App With Draft <i className="bi bi-box-arrow-up-right ms-2"></i>
                    </button>
                  </div>

                  <div className="col-lg-6">
                    <div className="mail-preview-box">
                      <div className="mp-header">
                        <span className="dot bg-danger"></span>
                        <span className="dot bg-warning"></span>
                        <span className="dot bg-success"></span>
                        <small className="ms-2 text-white-50">Draft Email Preview</small>
                      </div>
                      <div className="mp-body">
                        <p><strong>To:</strong> {companyInfo.email}</p>
                        <p><strong>Subject:</strong> [{quoteSubject}] {companyName ? 'for ' + companyName : 'B2B Inquiry'}</p>
                        <hr className="border-secondary" />
                        <p className="text-white-50 small mb-0">
                          "Hello ARSOS Trading Team,<br /><br />
                          I am interested in learning more about your {currentSectorData.title} division.<br />
                          Company: {companyName || '[Your Company]'}<br />
                          Inquiry Type: {quoteSubject}<br /><br />
                          Please provide catalog and pricing details."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .generator-card {
            background: #fff;
            padding: 45px;
            border-radius: 20px;
            box-shadow: var(--arsos-shadow-lg);
            border-top: 5px solid var(--arsos-navy);
          }
          .mail-preview-box {
            background: var(--arsos-navy-dark);
            border-radius: 12px;
            overflow: hidden;
            color: #fff;
            box-shadow: 0 15px 35px rgba(0,0,0,0.25);
          }
          .mp-header {
            background: rgba(255,255,255,0.08);
            padding: 10px 16px;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          .mp-header .dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
          .mp-body { padding: 20px; font-family: monospace; font-size: 0.88rem; }
        `}</style>
      </section>

      {/* Support SLA & FAQ */}
      <section className="contact-faq section-padding bg-gray">
        <div className="container">
          <SectionTitle
            subtitle="Support Standards"
            title="Procurement & Contact FAQs"
            description="Common questions about placing B2B orders and direct communication channels."
          />

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="faq-list">
                <div className="faq-card reveal">
                  <h5><i className="bi bi-clock-history text-gold me-2"></i> How fast is your response time for B2B requests?</h5>
                  <p>Our dedicated procurement account managers respond to direct call and email inquiries within 2 hours during active business days.</p>
                </div>

                <div className="faq-card reveal" style={{ transitionDelay: '0.1s' }}>
                  <h5><i className="bi bi-phone-vibrate text-gold me-2"></i> Can I reach out directly via phone or WhatsApp?</h5>
                  <p>Yes! You can contact our phone hotline at <strong>{companyInfo.phone}</strong> for urgent restock orders or commercial supply availability.</p>
                </div>

                <div className="faq-card reveal" style={{ transitionDelay: '0.2s' }}>
                  <h5><i className="bi bi-shield-check text-gold me-2"></i> What information should I include for wholesale pricing?</h5>
                  <p>Mention your required product quantities, delivery frequency, and target sector division so our team can prepare an accurate wholesale quote.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .faq-list { display: flex; flex-direction: column; gap: 16px; }
          .faq-card {
            background: #fff;
            padding: 24px 28px;
            border-radius: 12px;
            box-shadow: var(--arsos-shadow-sm);
            border-left: 4px solid var(--arsos-navy);
          }
          .faq-card h5 { font-size: 1rem; color: var(--arsos-navy); font-weight: 700; margin-bottom: 8px; }
          .faq-card p { color: var(--arsos-text-light); font-size: 0.9rem; margin: 0; line-height: 1.6; }
        `}</style>
      </section>
    </>
  );
};

export default Contact;