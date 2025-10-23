import React, { useEffect, useState, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import styles from "./Audit.module.css";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import axios from "axios";
import baseUrl from "../../baseUrl.js";
import { useLocation, useNavigate } from "react-router-dom";

const Audit = () => {
  const [services, setServices] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const tabsScrollRef = useRef(null);

  useEffect(() => {
    const getAuditData = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/v1/user/kpoDetails`);
        console.log('=== API RESPONSE DEBUG ===');
        console.log('Total items received:', res.data?.data?.length);
        console.log('Full data:', res.data.data);

        if (res.data && res.data.data && res.data.data.length > 0) {
          // Check each item in detail
          res.data.data.forEach((item, index) => {
            console.log(`\n--- Item ${index + 1} ---`);
            console.log('ID:', item._id);
            console.log('Title:', item.title);
            console.log('Has title?', !!item.title);
            console.log('Title length:', item.title?.length);
            console.log('Has description?', !!item.description);
            console.log('Has image?', !!item.image);
            console.log('Has icon?', !!item.icon);
            console.log('Full item:', item);
          });

          // Don't filter anything - take all items as-is
          const allServices = res.data.data;
          console.log('\n=== SETTING SERVICES ===');
          console.log('Total services to set:', allServices.length);

          setServices(allServices);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching audit data:', error);
        setIsLoading(false);
      }
    };
    getAuditData();
  }, []);

  // Debug effect to monitor services state
  useEffect(() => {
    console.log('\n=== SERVICES STATE UPDATE ===');
    console.log('Total services in state:', services.length);
    services.forEach((s, i) => {
      console.log(`Service ${i + 1}:`, s.title);
    });
  }, [services]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 968);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const checkTabsScroll = () => {
    const container = tabsScrollRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 10);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const scrollTabs = (direction) => {
    const container = tabsScrollRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = tabsScrollRef.current;
    if (container && !isMobile) {
      checkTabsScroll();
      window.addEventListener('resize', checkTabsScroll);
      return () => window.removeEventListener('resize', checkTabsScroll);
    }
  }, [services, isMobile]);

  const handleTabChange = (index) => {
    if (index >= 0 && index < services.length) {
      console.log('Changing to tab:', index, 'Service:', services[index]?.title);
      setActiveTab(index);
    }
  };

  const goToPrevious = () => {
    if (activeTab > 0) {
      handleTabChange(activeTab - 1);
    }
  };

  const goToNext = () => {
    if (activeTab < services.length - 1) {
      handleTabChange(activeTab + 1);
    }
  };

  const activeService = services[activeTab];
  const prevService = activeTab > 0 ? services[activeTab - 1] : null;
  const nextService = activeTab < services.length - 1 ? services[activeTab + 1] : null;

  if (isLoading || !activeService) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
        <div style={{ fontSize: '20px', color: '#666' }}>Loading services...</div>
      </div>
    );
  }

  return (
    <>
      <Header></Header>
      <div className={styles.banner}>
        <div className={styles.bannerImageWrapper}>
          <div className={styles.bannerFrontGradient}></div>
          <div className={styles.image}>
            <img
              src="data:image/svg+xml,%3Csvg class='banner-back-gradient' width='100%25' height='100%25' preserveAspectRatio='none' viewBox='0 0 1440 600' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3ClinearGradient x1='100.573144%25' y1='48.7599269%25' x2='15.0713926%25' y2='51.2104952%25' id='linearGradient-1'%3E%3Cstop stop-color='%23DFDFDF' stop-opacity='1' offset='0%25'%3E%3C/stop%3E%3Cstop stop-color='%23BBBBBB' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Rendering/Promotion/Banner-V1'%3E%3Cg id='Banner'%3E%3Cpolygon id='BG' fill='%23FFFFFF' points='1440 404.224609 1440 600 0 600'%3E%3C/polygon%3E%3Cpath d='M196.861674,573.050676 L208.036633,576.915602 C211.888361,591.342893 230.150897,598.914462 248.734154,597.105386 L1440,481.135878 L1440,481.135878 L1440,404.224609 L196.861674,573.050676 Z' id='Color-2' fill='url(%23linearGradient-1)'%3E%3C/path%3E%3Cpath d='M1193.32727,421.355789 L1440,0 L1440,0 L1440,404.224609 L0,600 L1162.74551,441.75298 C1175.53154,440.01283 L186.80798,432.491753 L193.32727,421.355789 Z' id='Color-1' fill='%23F9F9F9'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
              alt="Third Party Audit, Review & Compliance Services"
              style={{ opacity: 1 }}
            />
          </div>
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>
            Human Resource – Consulting and Advisory Services
          </h1>
          <p className={styles.description}>
            At Planafin, we empower business leaders to focus on strategic
            growth by providing expert-driven HR solutions that efficiently
            manage and develop workforces as part of our Knowledge Process
            Outsourcing (KPO) offerings.
          </p>
        </div>
      </div>

      <div style={{ width: '100%', background: '#fff', padding: 'clamp(30px, 5vw, 60px) 20px', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 4vw, 40px)' }}>
            <div style={{
              fontSize: 'clamp(9px, 1.5vw, 14px)',
              fontWeight: '700',
              letterSpacing: '2px',
              color: '#2d9bff',
              marginBottom: '12px'
            }}>
              FEATURED INDUSTRIES
            </div>
            <h1 style={{
              fontSize: 'clamp(24px, 4vw, 48px)',
              fontWeight: '400',
              marginBottom: '16px',
              color: '#1a1a1a',
              lineHeight: '1.3',
              fontFamily: 'Georgia, serif',
              padding: '0 20px'
            }}>
              Our Comprehensive HR KPO Offerings include:
            </h1>

            <p style={{
              color: '#6d6b80ff',
              fontSize: 'clamp(13px, 2vw, 15px)',
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto',
              padding: '0 20px'
            }}>
              Our HR services are designed to seamlessly integrate with your core business operations, delivering tailored solutions that drive workforce excellence.
            </p>
          </div>

          {/* Tabs - Desktop with Arrow Navigation */}
          {!isMobile && (
            <div style={{ position: 'relative' }}>
              {/* Left Fade & Arrow */}
              {showLeftArrow && (
                <>
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '80px',
                    background: 'linear-gradient(to right, white, transparent)',
                    zIndex: 10,
                    pointerEvents: 'none'
                  }} />
                  <button
                    onClick={() => scrollTabs('left')}
                    style={{
                      position: 'absolute',
                      left: '8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 20,
                      background: '#fff',
                      border: 'none',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f9fafb'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
                  >
                    <ChevronLeft style={{ width: '20px', height: '20px', color: '#374151' }} />
                  </button>
                </>
              )}

              {/* Right Fade & Arrow */}
              {showRightArrow && (
                <>
                  <div style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: '80px',
                    background: 'linear-gradient(to left, white, transparent)',
                    zIndex: 10,
                    pointerEvents: 'none'
                  }} />
                  <button
                    onClick={() => scrollTabs('right')}
                    style={{
                      position: 'absolute',
                      right: '8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 20,
                      background: '#fff',
                      border: 'none',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f9fafb'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
                  >
                    <ChevronRight style={{ width: '20px', height: '20px', color: '#374151' }} />
                  </button>
                </>
              )}

              {/* Tabs Container */}
              <div
                ref={tabsScrollRef}
                onScroll={checkTabsScroll}
                className={styles.customscrollbar}
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  borderBottom: '1px solid #e5e7eb',
                  overflowX: 'auto',
                  overflowY: 'hidden',
                  whiteSpace: 'nowrap',
                  WebkitOverflowScrolling: 'touch',
                  paddingBottom: '4px',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
              >
                {services.map((service, index) => {
                  if (!service || !service.title) return null;
                  return (
                    <button
                      key={`tab-${service._id || index}`}
                      onClick={() => handleTabChange(index)}
                      style={{
                        flexShrink: 0,
                        padding: '20px 28px',
                        border: 'none',
                        background: 'transparent',
                        fontWeight: '500',
                        fontSize: '14px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        color: activeTab === index ? '#2d9bff ' : '#9ca3af',
                        borderBottom: activeTab === index ? '3px solid #2d9bff ' : '3px solid transparent',
                        marginBottom: '-1px',
                        whiteSpace: 'nowrap',
                        fontFamily: 'system-ui, -apple-system, sans-serif'
                      }}
                    >
                      {service.title}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tabs - Mobile (Scrollable Pills) */}
          {isMobile && (
            <div className="custom-scrollbar"
              style={{
                display: 'flex',
                gap: '10px',
                padding: '0 20px 10px',
                overflowX: 'auto',
                overflowY: 'hidden',
                whiteSpace: 'nowrap',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <div
                className="mobile-tabs-container"
                style={{
                  display: 'flex',
                  gap: '10px',
                  padding: '0 20px 10px'
                }}
              >
                {services.map((service, index) => {
                  if (!service || !service.title) return null;
                  return (
                    <button
                      key={`mobile-tab-${service._id || index}`}
                      onClick={() => handleTabChange(index)}
                      style={{
                        flexShrink: 0,
                        padding: '10px 20px',
                        border: 'none',
                        background: activeTab === index ? '#2d9bff ' : '#f3f4f6',
                        color: activeTab === index ? '#fff' : '#6b7280',
                        borderRadius: '20px',
                        fontWeight: '600',
                        fontSize: '13px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        whiteSpace: 'nowrap',
                        boxShadow: activeTab === index ? '0 2px 8px rgba(234, 88, 12, 0.3)' : 'none'
                      }}

                    >
                      {service.title}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Carousel */}
          <div style={{
            position: 'relative',
            marginTop: '0',
            padding: isMobile ? '20px 0' : '40px 0'
          }}>
            {/* Navigation Arrows - Desktop only */}
            {!isMobile && prevService && (
              <button
                onClick={goToPrevious}
                style={{
                  position: 'absolute',
                  left: '-20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 20,
                  background: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '56px',
                  height: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.3s ease'
                }}
              >
                <ChevronLeft style={{ width: '28px', height: '28px', color: '#2d9bff ' }} />
              </button>
            )}

            {!isMobile && nextService && (
              <button
                onClick={goToNext}
                style={{
                  position: 'absolute',
                  right: '-20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 20,
                  background: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '56px',
                  height: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.3s ease'
                }}
              >
                <ChevronRight style={{ width: '28px', height: '28px', color: '#2d9bff ' }} />
              </button>
            )}

            {/* Mobile: Single slide */}
            {isMobile ? (
              <div style={{ padding: '0 10px' }} key="mobile-carousel">
                <ServiceCard service={activeService} isMobile={true} />
              </div>
            ) : (
              /* Desktop: 3-slide carousel with orange background */
              <div style={{ position: 'relative' }} key="desktop-carousel">
                {/* Orange Background Layer */}
                <div 
                  key="orange-bg"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '85%',
                    height: '85%',
                   background: 'linear-gradient(135deg, #2d9bff  0%, #2d9bff  50%, #2d9bff  100%)',
                    borderRadius: '40px',
                    zIndex: 0,
                    boxShadow: '0 20px 60px rgba(255, 107, 53, 0.3)'
                  }} 
                />

                {/* Carousel Slides */}
                <div 
                  key="carousel-slides"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '30px',
                    position: 'relative',
                    zIndex: 1,
                    padding: '60px 40px'
                  }}>
                  {/* Left slide */}
                  {prevService && (
                    <div
                      key={`prev-${prevService._id || activeTab - 1}`}
                      onClick={() => handleTabChange(activeTab - 1)}
                      style={{
                        flex: '0 0 280px',
                        opacity: 0.3,
                        transform: 'scale(0.75)',
                        cursor: 'pointer',
                        transition: 'all 0.4s ease',
                        filter: 'blur(1px)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '0.5';
                        e.currentTarget.style.transform = 'scale(0.78)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '0.3';
                        e.currentTarget.style.transform = 'scale(0.75)';
                      }}
                    >
                      <MiniServiceCard service={prevService} />
                    </div>
                  )}

                  {/* Center slide */}
                  <div 
                    key={`center-${activeService._id || activeTab}`}
                    style={{
                      flex: '0 0 900px',
                      maxWidth: '900px',
                      transition: 'all 0.4s ease',
                      zIndex: 5
                    }}>
                    <ServiceCard service={activeService} isMobile={false} />
                  </div>

                  {/* Right slide */}
                  {nextService && (
                    <div
                      key={`next-${nextService._id || activeTab + 1}`}
                      onClick={() => handleTabChange(activeTab + 1)}
                      style={{
                        flex: '0 0 280px',
                        opacity: 0.3,
                        transform: 'scale(0.75)',
                        cursor: 'pointer',
                        transition: 'all 0.4s ease',
                        filter: 'blur(1px)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '0.5';
                        e.currentTarget.style.transform = 'scale(0.78)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '0.3';
                        e.currentTarget.style.transform = 'scale(0.75)';
                      }}
                    >
                      <MiniServiceCard service={nextService} />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Navigation dots and arrows for mobile */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            marginTop: '30px'
          }}>
            {isMobile && prevService && (
              <button
                onClick={goToPrevious}
                style={{
                  background: '#fff',
                  border: '2px solid #2d9bff ',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              >
                <ChevronLeft style={{ width: '20px', height: '20px', color: '#2d9bff ' }} />
              </button>
            )}

            {/* Dots */}
            <div style={{
              display: 'flex',
              gap: '8px'
            }}>
              {services.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => handleTabChange(index)}
                  style={{
                    width: activeTab === index ? '32px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    border: 'none',
                    background: activeTab === index ? '#2d9bff ' : '#d1d5db',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>

            {isMobile && nextService && (
              <button
                onClick={goToNext}
                style={{
                  background: '#fff',
                  border: '2px solid #2d9bff ',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              >
                <ChevronRight style={{ width: '20px', height: '20px', color: '#2d9bff ' }} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="">
        <div className={styles.container}>
          <h1 className={styles.title}>Why Partner with Planafin?</h1>
          <div className="">
            <p className={styles.cardDescription}>
              Choosing Planafin for your HR KPO needs means leveraging our
              commitment to precision, confidentiality, and innovation. We
              combine industry best practices with advanced technology to reduce
              administrative burdens, enhance employee satisfaction, and enable
              your leadership team to focus on what matters most—accelerating
              business performance.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Main Service Card
const ServiceCard = ({ service, isMobile }) => {
  const navigate = useNavigate();

  if (!service) {
    return <div>No service data</div>;
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #2d9bff  0%, #2d9bff  50%, #2d9bff  100%)',
      borderRadius: isMobile ? '20px' : '24px',
      padding: isMobile ? '6px' : '8px',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: isMobile ? '14px' : '16px',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '50% 50%',
          minHeight: isMobile ? 'auto' : '500px'
        }}>
          {/* Left Content */}
          <div style={{
            padding: isMobile ? '30px 20px' : 'clamp(40px, 5vw, 60px) clamp(30px, 4vw, 50px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: '#fff'
          }}>
            <div style={{
              color: '#2d9bff ',
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: '700',
              marginBottom: isMobile ? '16px' : '20px',
              letterSpacing: '1.5px'
            }}>
              {service.subTitle || service.title || 'UNTITLED'}
            </div>

            <p style={{
              color: '#374151',
              marginBottom: isMobile ? '24px' : '32px',
              lineHeight: '1.7',
              fontSize: isMobile ? '14px' : '15px'
            }}>
              {service.description || 'No description available'}
            </p>

            {service.features && service.features.length > 0 && (
              <div style={{ marginBottom: isMobile ? '24px' : '32px' }}>
                <h3 style={{
                  fontSize: isMobile ? '13px' : '14px',
                  fontWeight: '700',
                  color: '#2d9bff ',
                  marginBottom: isMobile ? '12px' : '16px',
                  letterSpacing: '0.5px'
                }}>
                  Featured Solutions & Services
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                  gap: '12px'
                }}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{
                        display: 'inline-block',
                        width: '5px',
                        height: '5px',
                        background: '#2d9bff ',
                        borderRadius: '50%',
                        marginTop: '7px',
                        marginRight: '10px',
                        flexShrink: 0
                      }}></span>
                      <span style={{
                        color: '#4b5563',
                        fontSize: isMobile ? '12px' : '13px',
                        lineHeight: '1.5'
                      }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button onClick={() => navigate("/lets-talk")} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#ffd700 ',
              color: '#000',
              padding: isMobile ? '10px 24px' : '12px 28px',
              borderRadius: '50px',
              border: 'none',
              fontWeight: '600',
              fontSize: isMobile ? '12px' : '13px',
              cursor: 'pointer',
              width: 'fit-content',
              boxShadow: '0 4px 12px rgba(234, 88, 12, 0.25)'
            }}>
              Get in Touch
              <ChevronRight style={{ width: '16px', height: '16px' }} />
            </button>
          </div>

          {/* Right Side */}
          <div style={{
            background: '#f8f9fa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '30px 20px' : 'clamp(30px, 4vw, 50px)',
            position: 'relative'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: isMobile ? '100%' : '400px'
            }}>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
              }}>
                <img
                  src={`${baseUrl}${service.image}`}
                  alt={service.title || 'Service image'}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>

              {/* Icon */}
              {service.icon && (
                <div style={{
                  position: 'absolute',
                  top: isMobile ? '15px' : '20px',
                  left: isMobile ? '15px' : '20px',
                  width: isMobile ? '80px' : '100px',
                  height: isMobile ? '80px' : '100px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  <img
                    src={`${baseUrl}${service.icon}`}
                    alt="icon"
                    style={{
                      position:"absolute",
                      top: 0,
                      left: 0,
                      width: '60%',
                      height: '60%',
                      objectFit: 'contain',
                      borderRadius: "10px"
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mini Card
const MiniServiceCard = ({ service }) => {
  if (!service) {
    return null;
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #2d9bff  0%, #2d9bff  50%, #2d9bff  100%)',
      borderRadius: '20px',
      padding: '6px',
      height: '400px'
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '14px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '30px 20px',
        justifyContent: 'center'
      }}>
        <div style={{
          color: '#2d9bff ',
          fontSize: '9px',
          fontWeight: '700',
          marginBottom: '12px',
          letterSpacing: '1.2px'
        }}>
          {service.subTitle || service.title || 'UNTITLED'}
        </div>

        <p style={{
          color: '#4b5563',
          fontSize: '12px',
          lineHeight: '1.5',
          marginBottom: '16px'
        }}>
          {service.description ? service.description.slice(0, 100) + '...' : 'No description'}
        </p>

        {service.icon && (
          <div style={{
            marginTop: 'auto',
            textAlign: 'center',
            paddingTop: '20px'
          }}>
            <img
              src={`${baseUrl}${service.icon}`}
              alt="icon"
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'contain'
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Audit;