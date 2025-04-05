import { useState } from 'react';
import {
  HomeIcon,
  InfoIcon,
  PhoneIcon,
  CodeIcon,
  LogOutIcon,
  MenuIcon,
  XIcon,
} from 'lucide-react';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Mobile sidebar toggle */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarOpen ? <XIcon /> : <MenuIcon />}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h1 className="sidebar-title">Dashboard</h1>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            <li className="nav-item active">
              <a href="#" className="nav-link">
                <HomeIcon className="nav-icon" />
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <InfoIcon className="nav-icon" />
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <PhoneIcon className="nav-icon" />
                <span>Contact</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <CodeIcon className="nav-icon" />
                <span>API</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-button">
            <LogOutIcon className="nav-icon" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="content-header">
          <h1>Welcome to your Dashboard</h1>
        </header>
      </main>
    </div>
  );
}
