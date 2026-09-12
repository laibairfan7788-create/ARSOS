import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import SectorCard from '../components/SectorCard';
import CTASection from '../components/CTASection';
import { sectors } from '../data/sectors';

const OurSectors = () => {
  useEffect(() => {
    document.title = 'Our Trading Sectors | ARSOS Trading';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <span className="breadcrumb-text">Home / Sectors</span>
            <h1>Our Trading Sectors</h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 700, margin: '15px auto 0' }}>
              Four companies. One trusted brand. Discover the diversified sectors
              that make ARSOS a complete business partner.
            </p>
          </div>
        </div>
      </section>

      <section className="sectors-list section-padding">
        <div className="container">
          <SectionTitle
            subtitle="What We Do"
            title="Diversified Business Under One Roof"
            description="Each of our four sectors operates with the same commitment to quality, reliability, and customer focus."
          />

          <div className="row g-4">
            {sectors.map((s, i) => (
              <div className="col-lg-6" key={s.slug}>
                <div className="sector-detail-card reveal">
                  <div className="sdc-image" style={{ position: 'relative' }}>
                    <div className="sdc-overlay"></div>
                    <i className={`bi ${s.icon}`}></i>
                  </div>
                  <div className="sdc-body">
                    <h3>{s.title}</h3>
                    <p>{s.intro}</p>
                    <ul className="sdc-list">
                      {s.list.slice(0, 3).map((item) => (
                        <li key={item}>
                          <i className="bi bi-check2-circle"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/sectors/${s.slug}`} className="btn-arsos btn-arsos-navy">
                      Explore Sector <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .sector-detail-card {
            background: #fff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: var(--arsos-shadow-sm);
            display: flex;
            flex-direction: row;
            height: 100%;
            transition: var(--arsos-transition);
            border-left: 5px solid var(--arsos-gold);
          }
          .sector-detail-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--arsos-shadow-lg);
          }
          .sdc-image {
            flex: 0 0 40%;
            background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 320px;
            position: relative;
            overflow: hidden;
          }
          .sdc-overlay {
            position: absolute;
            inset: 0;
            background-image: radial-gradient(circle at 30% 30%, rgba(201,169,97,0.35), transparent 60%);
          }
          .sdc-image i {
            font-size: 4.5rem;
            color: var(--arsos-gold);
            position: relative;
            z-index: 2;
            transition: var(--arsos-transition);
          }
          .sector-detail-card:hover .sdc-image i {
            transform: scale(1.15) rotate(-6deg);
          }
          .sdc-body {
            padding: 35px 30px;
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          .sdc-body h3 {
            font-size: 1.35rem;
            margin-bottom: 15px;
          }
          .sdc-body p {
            color: var(--arsos-text-light);
            font-size: 0.93rem;
            line-height: 1.75;
            margin-bottom: 18px;
          }
          .sdc-list {
            list-style: none;
            padding: 0;
            margin-bottom: 22px;
          }
          .sdc-list li {
            display: flex;
            gap: 10px;
            align-items: flex-start;
            color: var(--arsos-text);
            font-size: 0.9rem;
            margin-bottom: 8px;
          }
          .sdc-list li i {
            color: var(--arsos-gold);
            margin-top: 3px;
          }
          .sdc-body .btn-arsos {
            padding: 10px 24px;
            font-size: 0.82rem;
            align-self: flex-start;
            margin-top: auto;
          }
          @media (max-width: 767px) {
            .sector-detail-card { flex-direction: column; }
            .sdc-image { min-height: 200px; flex: none; }
          }
        `}</style>
      </section>

      {/* B2B Procurement Capabilities */}
      <section className="capabilities-section section-padding bg-gray">
        <div className="container">
          <SectionTitle
            subtitle="Commercial Scale"
            title="Multi-Sector Procurement Matrix"
            description="A quick glance at how ARSOS supports enterprise clients across our active divisions."
          />

          <div className="table-responsive bg-white p-4 rounded-3 shadow-sm border">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-dark" style={{ backgroundColor: 'var(--arsos-navy)' }}>
                <tr>
                  <th scope="col" style={{ width: '22%' }}>Sector Division</th>
                  <th scope="col" style={{ width: '30%' }}>Primary Product Range</th>
                  <th scope="col" style={{ width: '28%' }}>Target Client Base</th>
                  <th scope="col" style={{ width: '20%' }}>Fulfillment Standard</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong className="d-flex align-items-center gap-2 text-navy">
                      <i className="bi bi-droplet-half text-gold"></i> Cleaning Items
                    </strong>
                  </td>
                  <td>Commercial detergents, sanitizers, microfiber equipment, janitorial tools</td>
                  <td>Hotels, Offices, Hospitals, Facilities</td>
                  <td><span className="badge bg-success">Express B2B Stock</span></td>
                </tr>
                <tr>
                  <td>
                    <strong className="d-flex align-items-center gap-2 text-navy">
                      <i className="bi bi-beaker text-gold"></i> Chemical Business
                    </strong>
                  </td>
                  <td>Industrial solvents, water treatment, maintenance chemicals, raw compounds</td>
                  <td>Factories, Water Plants, Commercial Units</td>
                  <td><span className="badge bg-primary">ISO Compliant Batch</span></td>
                </tr>
                <tr>
                  <td>
                    <strong className="d-flex align-items-center gap-2 text-navy">
                      <i className="bi bi-cpu-fill text-gold"></i> IT Services
                    </strong>
                  </td>
                  <td>Network infrastructure, hardware supply, enterprise software & IT consulting</td>
                  <td>Corporate Companies, SMEs, Retail Tech</td>
                  <td><span className="badge bg-warning text-dark">SLA Guaranteed Support</span></td>
                </tr>
                <tr>
                  <td>
                    <strong className="d-flex align-items-center gap-2 text-navy">
                      <i className="bi bi-building-fill-check text-gold"></i> Hotel Supplies
                    </strong>
                  </td>
                  <td>Guest amenities, linens, housekeeping products, front-of-house supplies</td>
                  <td>Hotels, Resorts, Serviced Apartments</td>
                  <td><span className="badge bg-info text-dark">Scheduled Delivery</span></td>
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

export default OurSectors;