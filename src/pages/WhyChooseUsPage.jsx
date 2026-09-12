import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import { whyChooseUs } from '../data/companyInfo';

const WhyChooseUsPage = () => {
  useEffect(() => {
    document.title = 'Why Choose Us | ARSOS Trading';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <span className="breadcrumb-text">Home / Why Choose Us</span>
            <h1>Why Choose ARSOS</h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 700, margin: '15px auto 0' }}>
              Five reasons businesses trust ARSOS as their diversified trading partner.
            </p>
          </div>
        </div>
      </section>

      <section className="why-page section-padding">
        <div className="container">
          <SectionTitle
            subtitle="Our Strengths"
            title="What Sets Us Apart"
            description="ARSOS combines a diversified portfolio with a service-driven approach to become a complete partner for our clients."
          />

          <div className="row g-4">
            {whyChooseUs.map((item, i) => (
              <div className="col-lg-6" key={item.title}>
                <div className="why-page-card reveal">
                  <div className="wpc-number">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="wpc-content">
                    <div className="wpc-icon">
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .why-page-card {
            display: flex;
            gap: 25px;
            background: #fff;
            padding: 35px 30px;
            border-radius: 12px;
            box-shadow: var(--arsos-shadow-sm);
            height: 100%;
            transition: var(--arsos-transition);
            position: relative;
            overflow: hidden;
            border-left: 5px solid var(--arsos-navy);
          }
          .why-page-card:hover {
            transform: translateX(10px);
            box-shadow: var(--arsos-shadow-lg);
            border-left-color: var(--arsos-gold);
          }
          .wpc-number {
            font-family: 'Montserrat', sans-serif;
            font-size: 3rem;
            font-weight: 900;
            color: var(--arsos-gray-dark);
            line-height: 1;
            transition: var(--arsos-transition);
          }
          .why-page-card:hover .wpc-number {
            color: var(--arsos-gold);
          }
          .wpc-content { flex: 1; }
          .wpc-icon {
            width: 55px;
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
            border-radius: 12px;
            margin-bottom: 15px;
          }
          .wpc-icon i {
            font-size: 1.5rem;
            color: var(--arsos-gold);
          }
          .wpc-content h4 {
            font-size: 1.2rem;
            margin-bottom: 10px;
          }
          .wpc-content p {
            color: var(--arsos-text-light);
            font-size: 0.95rem;
            line-height: 1.75;
            margin: 0;
          }
        `}</style>
      </section>

      {/* Comparison Matrix */}
      <section className="comparison-section section-padding bg-gray">
        <div className="container">
          <SectionTitle
            subtitle="The ARSOS Advantage"
            title="ARSOS vs. Traditional Multi-Vendor Supply"
            description="See why consolidating your commercial procurement with ARSOS saves time, overhead costs, and operational hassle."
          />

          <div className="table-responsive bg-white p-4 rounded-3 shadow-sm border">
            <table className="table table-bordered table-striped align-middle mb-0 text-center">
              <thead className="table-dark" style={{ backgroundColor: 'var(--arsos-navy)' }}>
                <tr>
                  <th scope="col" className="text-start">Key Feature / Operational Factor</th>
                  <th scope="col" style={{ color: 'var(--arsos-gold)', width: '35%' }}>ARSOS Trading Partnership</th>
                  <th scope="col" style={{ width: '35%' }}>Multiple Single-Sector Suppliers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-start"><strong>Vendor Consolidation</strong></td>
                  <td className="table-success"><i className="bi bi-check-circle-fill text-success me-2"></i> Single contact for 4 major B2B sectors</td>
                  <td className="table-danger"><i className="bi bi-x-circle-fill text-danger me-2"></i> 4+ different vendor contracts & accounts</td>
                </tr>
                <tr>
                  <td className="text-start"><strong>Quality Verification</strong></td>
                  <td className="table-success"><i className="bi bi-check-circle-fill text-success me-2"></i> Standardized batch testing & ISO alignment</td>
                  <td className="table-secondary"><i className="bi bi-dash-circle text-muted me-2"></i> Inconsistent quality across vendors</td>
                </tr>
                <tr>
                  <td className="text-start"><strong>B2B Pricing & Volume Discounts</strong></td>
                  <td className="table-success"><i className="bi bi-check-circle-fill text-success me-2"></i> Combined multi-sector volume savings</td>
                  <td className="table-danger"><i className="bi bi-x-circle-fill text-danger me-2"></i> Separate tier pricing per small order</td>
                </tr>
                <tr>
                  <td className="text-start"><strong>Account Support & SLA</strong></td>
                  <td className="table-success"><i className="bi bi-check-circle-fill text-success me-2"></i> Dedicated account manager & fast dispatch</td>
                  <td className="table-secondary"><i className="bi bi-dash-circle text-muted me-2"></i> Fragmented support and unpredictable delays</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default WhyChooseUsPage;