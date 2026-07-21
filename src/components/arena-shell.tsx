"use client";

import {
  ArrowUp,
  ChevronDown,
  CircleUserRound,
  Code2,
  Columns2,
  FilePlus2,
  Gamepad2,
  Globe2,
  ImageIcon,
  LayoutDashboard,
  Menu,
  MessageSquarePlus,
  PanelLeftClose,
  Search,
  ShoppingBag,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import type { ComponentType, FormEvent, KeyboardEvent } from "react";
import { useMemo, useState } from "react";

type Mode = "Battle" | "Direct";

type PromptCard = {
  title: string;
  description: string;
  prompt: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
};

const promptCards: PromptCard[] = [
  {
    title: "Create a landing page",
    description: "Design a sleek, modern product page",
    prompt: "Create a sleek landing page for an AI productivity app.",
    icon: Sparkles,
  },
  {
    title: "Build a dashboard",
    description: "Turn data into interactive charts",
    prompt: "Build a responsive analytics dashboard with interactive charts.",
    icon: LayoutDashboard,
  },
  {
    title: "Make a game",
    description: "Build a playable browser game",
    prompt: "Create a small browser game with keyboard controls and scoring.",
    icon: Gamepad2,
  },
  {
    title: "Design to code",
    description: "Convert a visual direction into UI",
    prompt: "Turn a minimalist editorial design into production-ready React components.",
    icon: ImageIcon,
  },
  {
    title: "Build a full-stack app",
    description: "Create an app structure and API plan",
    prompt: "Plan and scaffold a full-stack application with authentication.",
    icon: Code2,
  },
  {
    title: "Launch a storefront",
    description: "Create a polished online shop",
    prompt: "Design a premium storefront for a small independent brand.",
    icon: ShoppingBag,
  },
];

export function ArenaShell() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [mode, setMode] = useState<Mode>("Battle");
  const [prompt, setPrompt] = useState("");
  const [submittedPrompt, setSubmittedPrompt] = useState("");

  const canSubmit = useMemo(() => prompt.trim().length > 0, [prompt]);

  function submitPrompt(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    const value = prompt.trim();
    if (!value) return;
    setSubmittedPrompt(value);
    setPrompt("");
  }

  function handleComposerKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submitPrompt();
    }
  }

  return (
    <div className={`app-shell ${sidebarOpen ? "sidebar-visible" : "sidebar-hidden"}`}>
      <aside className="sidebar" aria-label="Primary navigation">
        <div className="sidebar-top">
          <div className="brand-mark" aria-label="Frontier Arena home">
            <span className="brand-icon" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>Frontier</span>
          </div>
          <button className="icon-button" onClick={() => setSidebarOpen(false)} aria-label="Collapse sidebar">
            <PanelLeftClose size={18} />
          </button>
        </div>

        <nav className="nav-stack">
          <button className="nav-item active">
            <MessageSquarePlus size={17} />
            <span>New chat</span>
          </button>
          <button className="nav-item">
            <Trophy size={17} />
            <span>Leaderboard</span>
          </button>
          <button className="nav-item">
            <Search size={17} />
            <span>Search</span>
          </button>
        </nav>

        <div className="history-block">
          <p className="eyebrow">Today</p>
          <button className="history-item">Explore multimodal model UX</button>
          <button className="history-item">Build a modern analytics view</button>
        </div>

        <div className="sidebar-footer">
          <button className="profile-button">
            <CircleUserRound size={20} />
            <span>
              <strong>Guest workspace</strong>
              <small>Sign in to save chats</small>
            </span>
          </button>
        </div>
      </aside>

      <main className="workspace">
        <header className="topbar">
          <div className="topbar-left">
            {!sidebarOpen && (
              <button className="icon-button" onClick={() => setSidebarOpen(true)} aria-label="Open sidebar">
                <Menu size={19} />
              </button>
            )}
            <button className="mode-menu" aria-label="Select workspace mode">
              <span>{mode} Mode</span>
              <ChevronDown size={15} />
            </button>
          </div>

          <div className="mode-switch" role="group" aria-label="Chat mode">
            <button className={mode === "Battle" ? "selected" : ""} onClick={() => setMode("Battle")}>
              <Columns2 size={15} />
              Battle
            </button>
            <button className={mode === "Direct" ? "selected" : ""} onClick={() => setMode("Direct")}>
              <Sparkles size={15} />
              Direct
            </button>
          </div>
        </header>

        <section className="home-stage">
          {bannerVisible && (
            <div className="news-banner" role="status">
              <span>Follow the latest model releases and AI research updates</span>
              <div className="banner-actions" aria-label="Social shortcuts">
                <button aria-label="Website">
                  <Globe2 size={15} />
                </button>
                <button aria-label="Close announcement" onClick={() => setBannerVisible(false)}>
                  <X size={15} />
                </button>
              </div>
            </div>
          )}

          <div className="hero-copy">
            <div className="hero-brand" aria-hidden="true">
              <span className="brand-icon large">
                <i />
                <i />
                <i />
              </span>
              <span>Frontier</span>
            </div>
            <h1>
              Experience the <em>frontier</em>
            </h1>
            <p>Compare ideas, explore model behavior, and turn a prompt into a working direction.</p>
          </div>

          <form className="composer" onSubmit={submitPrompt}>
            <textarea
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              onKeyDown={handleComposerKeyDown}
              placeholder="Ask anything..."
              rows={3}
              aria-label="Prompt"
            />
            <div className="composer-toolbar">
              <div className="tool-group">
                <button type="button" className="attach-button">
                  <FilePlus2 size={16} />
                  <span>Add files</span>
                </button>
                <button type="button" className="tool-button" aria-label="Web research">
                  <Globe2 size={16} />
                </button>
                <button type="button" className="tool-button" aria-label="Image input">
                  <ImageIcon size={16} />
                </button>
                <button type="button" className="tool-button" aria-label="Code workspace">
                  <Code2 size={16} />
                </button>
              </div>
              <button type="submit" className="send-button" disabled={!canSubmit} aria-label="Send prompt">
                <ArrowUp size={17} strokeWidth={2.4} />
              </button>
            </div>
          </form>

          {submittedPrompt ? (
            <section className="demo-result" aria-live="polite">
              <div>
                <span className="result-label">Demo request</span>
                <strong>{submittedPrompt}</strong>
              </div>
              <p>
                This static recreation demonstrates the interface only. Connect your own model API to turn the composer into a real battle workflow.
              </p>
            </section>
          ) : (
            <div className="prompt-grid" aria-label="Prompt suggestions">
              {promptCards.map((card) => {
                const Icon = card.icon;
                return (
                  <button key={card.title} type="button" className="prompt-card" onClick={() => setPrompt(card.prompt)}>
                    <Icon size={17} strokeWidth={1.8} />
                    <span>
                      <strong>{card.title}</strong>
                      <small>{card.description}</small>
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          <p className="disclaimer">
            Demo interface only. Do not submit personal or sensitive information. Model responses may be inaccurate.
          </p>
        </section>
      </main>
    </div>
  );
}
