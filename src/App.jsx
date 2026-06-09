import { useEffect, useMemo, useRef, useState } from 'react';
import { tourConfig } from '../tour.js';

const NAVIGATION_SECTIONS = [
  {
    title: 'Main Areas',
    items: [
      { label: 'Entrance', sceneId: 'sceneZero' },
      { label: 'Main Hall', sceneId: 'mainHall' }
    ]
  },
  {
    title: 'Campus Facilities',
    items: [
      { label: 'Basketball Court', sceneId: 'basketball court' },
      { label: 'Canteen', sceneId: 'canteen' },
      { label: 'Boutique', sceneId: 'major hallway 10' },
      { label: 'University Bookstore', sceneId: 'major hallway 9' },
      { label: 'Prayer Room', sceneId: 'prayer room' },
      { label: 'Clinic', sceneId: 'clinic' },
      { label: 'Demo Room', sceneId: '4TH A' }
    ]
  },
  {
    title: 'Admin & Offices',
    items: [
      { label: 'ICT Office', sceneId: 'major hallway 11' },
      { label: 'VP for Academic Services', sceneId: 'major hallway 7' },
      { label: 'Finance Services Office', sceneId: 'major hallway 9' },
      { label: 'University Registrar', sceneId: 'mh 1' },
      { label: 'Guidance & Counseling', sceneId: 'left hallway' },
      { label: 'College Freshmen Program (CFP)', sceneId: 'HALLWAY' },
      { label: 'LIAISON OFFICE FOR ALUMNI', sceneId: 'HALLWAY' },
      { label: 'Publication, Brand & Marketing Office', sceneId: 'HALLWAY' },
      { label: 'VICE PRESIDENT FOR ADMINISTRATIVE SERVICES', sceneId: 'open space' },
      { label: 'UNIVERSITY CHAPLAIN', sceneId: 'left hallway 2' },
      { label: 'PRISM OFFICE', sceneId: 'left hallway 2' },
      { label: 'Human Resource Management Office', sceneId: 'major hallway' },
      { label: 'DEAN OF GRADUATE SCHOOL', sceneId: 'major hallway 2' },
      { label: "PRESIDENT'S OFFICE", sceneId: 'major hallway 3' },
      { label: "PRESIDENT'S BOARDROOM", sceneId: 'major hallway 4' },
      { label: 'INSPIRE', sceneId: 'major hallway 4' },
      { label: 'COMMUNITY DEVELOPMENT SERVICES', sceneId: 'major hallway 5' }
    ]
  },
  {
    title: 'Academic Buildings',
    items: [
      { label: 'Second Floor', sceneId: 'library' },
      { label: 'Fourth Floor', sceneId: '4th 1' }
    ]
  },
  {
    title: 'College Departments',
    items: [
      { label: 'CEIT', sceneId: '' },
      { label: 'CBMA', sceneId: '' },
      { label: 'CEAS', sceneId: '' },
      { label: 'CHS', sceneId: '' },
      { label: 'CCJE', sceneId: '' }
    ]
  },
  {
    title: 'Campus Laboratories',
    items: [
      { label: 'Computer Systems Servicing (CSS) 1', sceneId: '4th 1' },
      { label: 'Computer Systems Servicing (CSS) 2', sceneId: '4th 1' },
      { label: 'Computer Laboratory 1', sceneId: '4th 2' },
      { label: 'Computer Laboratory 2', sceneId: '4th 2' },
      { label: 'Computer Laboratory 3', sceneId: '4th 3' },
      { label: 'iMac Laboratory', sceneId: 'imac' },
      { label: 'CRIMINALISTICS LABORATORY', sceneId: '3rd 2' },
      { label: 'CARAGA CULINARY CENTER (HRM LAB)', sceneId: 'hrm' }
    ]
  }
];

export default function App() {
  const panoramaRef = useRef(null);
  const viewerRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [introVisible, setIntroVisible] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    if (!window.pannellum || !panoramaRef.current) {
      return undefined;
    }

    const viewer = window.pannellum.viewer(panoramaRef.current, tourConfig);
    viewerRef.current = viewer;

    return () => {
      viewerRef.current = null;
      if (typeof viewer.destroy === 'function') {
        viewer.destroy();
      }
    };
  }, []);

  const normalizedSearch = searchTerm.trim().toLowerCase();

  useEffect(() => {
    if (normalizedSearch === '') {
      setExpanded({});
    }
  }, [normalizedSearch]);

  const sections = useMemo(() => {
    return NAVIGATION_SECTIONS.map((section) => {
      const items = section.items.filter((item) =>
        item.label.toLowerCase().includes(normalizedSearch)
      );

      return {
        ...section,
        items,
        visible: normalizedSearch === '' ? true : items.length > 0
      };
    }).filter((section) => section.visible);
  }, [normalizedSearch]);

  const goToLocation = (sceneId) => {
    if (!sceneId) {
      return;
    }

    viewerRef.current?.loadScene(sceneId);
    setSidebarOpen(false);
  };

  return (
    <div className="app-shell">
      <button
        className="menu-btn"
        type="button"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open navigation"
      >
        Menu
      </button>

      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button
          className="close-btn"
          type="button"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close navigation"
        >
          &times;
        </button>
        <h2>Jump To...</h2>

        <input
          type="text"
          className="search-input"
          placeholder="Search locations..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <div className="nav-container">
          {sections.map((section) => {
            const expandedForSection =
              normalizedSearch !== '' ? true : !!expanded[section.title];

            return (
              <div key={section.title}>
                <button
                  type="button"
                  className={`nav-category ${expandedForSection ? 'active' : ''}`}
                  onClick={() =>
                    setExpanded((current) => ({
                      ...current,
                      [section.title]: !current[section.title]
                    }))
                  }
                >
                  <span>{section.title}</span>
                  <span className="caret">v</span>
                </button>

                <ul
                  className="sub-nav-list"
                  style={{
                    maxHeight:
                      expandedForSection && section.items.length > 0
                        ? `${Math.max(section.items.length * 48, 48)}px`
                        : '0px'
                  }}
                >
                  {section.items.map((item) => (
                    <li key={`${section.title}-${item.label}`}>
                      <button type="button" onClick={() => goToLocation(item.sceneId)}>
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </aside>

      <div className={`intro-screen ${introVisible ? '' : 'hidden'}`}>
        <div className="intro-content">
          <img src="/images/spus.png" alt="University Logo" className="intro-logo" />
          <h1 className="intro-title">Saint Paul University Surigao</h1>
          <p className="intro-subtitle">SPUS</p>
          <hr className="intro-divider" />

          <div className="instruction-grid">
            <div>Look Around</div>
            <div className="icon-group">
              <div className="mouse-icon" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path
                  d="M12 2v20M2 12h20M12 2l-3 3M12 2l3 3M12 22l-3-3M12 22l3-3M2 12l3-3M2 12l3 3M22 12l-3-3M22 12l3 3"
                  style={{ filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))' }}
                />
              </svg>
            </div>
            <div>or</div>
            <div className="key-grid">
              <div />
              <kbd>Up</kbd>
              <div />
              <kbd>Left</kbd>
              <kbd>Down</kbd>
              <kbd>Right</kbd>
            </div>

            <div>Zoom In/Out</div>
            <div className="icon-group">
              <div className="mouse-icon" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path
                  d="M12 2v20M12 2l-3 3M12 2l3 3M12 22l-3-3M12 22l3-3"
                  style={{ filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))' }}
                />
              </svg>
            </div>
            <div>or</div>
            <div className="key-stack">
              <kbd className="key-wide">Shift</kbd>
              <kbd className="key-wide">Ctrl</kbd>
            </div>
          </div>

          <button
            className="explore-btn"
            type="button"
            onClick={() => setIntroVisible(false)}
          >
            Explore Now
          </button>
        </div>
      </div>

      <div id="panorama" ref={panoramaRef} />
    </div>
  );
}
