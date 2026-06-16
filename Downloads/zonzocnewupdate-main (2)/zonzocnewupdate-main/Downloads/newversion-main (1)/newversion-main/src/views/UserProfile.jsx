'use client';
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import "../styles/UserProfile.css";


const UserProfile = () => {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    } else if (user?.role !== "user") {
      router.push("/");
    }
  }, [isAuthenticated, user, router]);

  if (!isAuthenticated || !user || user.role !== "user") return null;

  const handleNav = (path) => {
    router.push(path);
  };

  return (
    <div className="dashboard-layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-logo">■ ■</div>

       <nav className="sidebar-menu">
  <button
    className={pathname === "/dashboard" ? "active" : ""}
    onClick={() => handleNav("/dashboard")}>
    ▦
  </button>
  <button
    className={pathname === "/tasks" ? "active" : ""}
    onClick={() => handleNav("/tasks")}>
    ◷
  </button>
  <button
    className={pathname === "/achievements" ? "active" : ""}
    onClick={() => handleNav("/achievements")}>
    🏅
  </button>
  <button
    className={pathname === "/messages" ? "active" : ""}
    onClick={() => handleNav("/messages")}>
    💬
  </button>
  <button
    className={pathname === "/settings" ? "active" : ""}
    onClick={() => handleNav("/settings")}>
    ⚙️
  </button>
</nav>

      </aside>

      {/* MAIN */}
      <main className="dashboard-main">
        {/* HEADER */}
        <div className="dashboard-header">
          <h1>Welcome, {user.name?.split(" ")[0] || "User"}</h1>
          <p>{new Date().toDateString()}</p>
        </div>

        {/* PROFILE CARD */}
        <div className="profile-wrapper">
          <div className="profile-cover"></div>
          <div className="profile-card">
            {/* TOP */}
            <div className="profile-top">
              <div className="avatar-block">
                <img
                  src={user.avatar || "https://via.placeholder.com/90"}
                  alt="avatar"
                />
                <div>
                  <h2>{user.name || "User Name"}</h2>
                  <span>{user.email}</span>
                </div>
              </div>

              <button className="edit-btn">Edit</button>
            </div>

            {/* PERSONAL INFO */}
            <section>
              <h3>Personal Information</h3>
              <div className="info-grid">
                <div>
                  <label>First Name</label>
                  <input
                    value={user.name?.split(" ")[0] || ""}
                    disabled
                  />
                </div>
                <div>
                  <label>Last Name</label>
                  <input
                    value={user.name?.split(" ").slice(1).join(" ") || ""}
                    disabled
                  />
                </div>
                <div>
                  <label>Gender</label>
                  <input value={user.gender || ""} disabled />
                </div>
                <div>
                  <label>Country</label>
                  <input value={user.country || ""} disabled />
                </div>
                <div>
                  <label>Language</label>
                  <input value={user.language || "English"} disabled />
                </div>
                <div>
                  <label>Time Zone</label>
                  <input value={user.timezone || ""} disabled />
                </div>
              </div>
            </section>

            {/* EMAIL */}
            <section className="email-section">
              <h3>My Email Address</h3>
              <div className="email-box">
                <div className="email-icon">@</div>
                <div>
                  <strong>{user.email}</strong>
                  <span>
                    {user.emailVerified ? "Verified" : "Not Verified"}
                  </span>
                </div>
              </div>
              <button className="add-email">+ Add Email Address</button>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
