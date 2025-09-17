import Link from "next/link";

type NavItem = {
  label: string;
  icon: string;
};

type SubscriptionItem = {
  label: string;
  avatar: string;
};

type Video = {
  id: string;
  title: string;
  channel: string;
  views: string;
  publishedAt: string;
  duration: string;
  description?: string;
  badge?: string;
  gradient: string;
};

const primaryNav: NavItem[] = [
  { label: "首页", icon: "🏠" },
  { label: "Shorts", icon: "⚡" },
  { label: "订阅", icon: "📺" },
];

const libraryNav: NavItem[] = [
  { label: "历史记录", icon: "🕒" },
  { label: "播放列表", icon: "🎞️" },
  { label: "我的视频", icon: "🎬" },
  { label: "稍后观看", icon: "📝" },
  { label: "赞过的视频", icon: "👍" },
];

const subscriptions: SubscriptionItem[] = [
  { label: "Income stream s…", avatar: "I" },
  { label: "Matthew Berman", avatar: "M" },
  { label: "Bijan Bowen", avatar: "B" },
  { label: "王志安", avatar: "王" },
  { label: "wow", avatar: "W" },
  { label: "在台101", avatar: "在" },
];

const videos: Video[] = [
  {
    id: "openai-codex",
    title: "OpenAI Codex用人工智能解释编码的未来",
    channel: "wow",
    views: "69万次观看",
    publishedAt: "3小时前",
    duration: "22:01",
    badge: "CC",
    gradient: "from-[#3b3b5b] via-[#1f1f38] to-[#0f0f0f]",
  },
  {
    id: "ramen-xibei",
    title: "贾国龙大战罗永浩，我们该如何看待预制菜？",
    channel: "西贝 | 华与华 | 网络黑社会",
    views: "35万次观看",
    publishedAt: "14小时前",
    duration: "38:37",
    gradient: "from-[#68392c] via-[#2b1a16] to-[#0f0f0f]",
  },
  {
    id: "ios26",
    title: "iPhone用户必看：一定要升级到 iOS26 正版！300+ 新功能",
    channel: "大耳朵TV",
    views: "20万次观看",
    publishedAt: "1天前",
    duration: "39:02",
    gradient: "from-[#2d234f] via-[#171230] to-[#0f0f0f]",
  },
  {
    id: "toolkit",
    title: "Microsoft's VS Code AI Toolkit 2.0: This Extension is AWESOME for AI Coding!",
    channel: "AICodeKing",
    views: "12万次观看",
    publishedAt: "1天前",
    duration: "19:50",
    gradient: "from-[#132644] via-[#0f1627] to-[#0f0f0f]",
  },
  {
    id: "gemini",
    title: "Google Gemini 2.5：当AI开始思考，多模态的边界在哪里？",
    channel: "科学之眼",
    views: "23万次观看",
    publishedAt: "17小时前",
    duration: "15:07",
    gradient: "from-[#28407a] via-[#1d2c4c] to-[#0f0f0f]",
  },
  {
    id: "cpx",
    title: "英伟达Rubin CPX：AI推理基础设施的又一次巨大战略跃迁",
    channel: "量佳信",
    views: "7.2万次观看",
    publishedAt: "17小时前",
    duration: "22:54",
    gradient: "from-[#453015] via-[#22170c] to-[#0f0f0f]",
  },
];

function VideoCard({ video }: { video: Video }) {
  return (
    <article className="flex flex-col gap-3">
      <div
        className={`group relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br ${video.gradient}`}
      >
        <span className="absolute right-2 bottom-2 rounded px-1.5 py-0.5 text-xs font-medium text-white/90 bg-black/70">
          {video.duration}
        </span>
        {video.badge ? (
          <span className="absolute left-2 top-2 rounded px-1.5 py-0.5 text-xs font-medium text-white/80 bg-black/60">
            {video.badge}
          </span>
        ) : null}
        <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white">
            ▶ 继续观看
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-medium">
          {video.channel.slice(0, 1)}
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-medium leading-snug text-white">
            {video.title}
          </h3>
          <p className="text-sm text-white/70">{video.channel}</p>
          <p className="text-xs text-white/50">
            {video.views} · {video.publishedAt}
          </p>
        </div>
      </div>
    </article>
  );
}

function SidebarSection({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <div className="space-y-1">
      <p className="px-3 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
        {title}
      </p>
      <nav className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.label}
            href="#"
            className="flex items-center gap-4 rounded-xl px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <span className="text-lg" aria-hidden>
              {item.icon}
            </span>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="flex min-h-screen flex-col">
        <header className="flex items-center justify-between gap-4 border-b border-white/5 bg-black/40 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-lg"
              aria-label="展开菜单"
            >
              ☰
            </button>
            <Link href="#" className="flex items-center gap-1 text-2xl font-semibold">
              <span className="text-red-500">zhenghong</span>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-center gap-3">
            <div className="hidden w-full max-w-xl items-center overflow-hidden rounded-full border border-white/10 bg-white/10 transition focus-within:border-white/40 sm:flex">
              <input
                type="search"
                placeholder="搜索"
                className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
              <button
                type="button"
                className="flex h-10 w-12 items-center justify-center bg-white/10 text-lg"
                aria-label="搜索"
              >
                🔍
              </button>
            </div>
            <button
              type="button"
              className="hidden h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg sm:flex"
              aria-label="语音搜索"
            >
              🎤
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg"
              aria-label="创建"
            >
              ⊕
            </button>
            <button
              type="button"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg"
              aria-label="通知"
            >
              🔔
              <span className="absolute right-1 top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-500 px-1 text-xs font-semibold">
                9+
              </span>
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-pink-500 text-sm font-semibold"
              aria-label="个人账户"
            >
              h
            </button>
          </div>
        </header>

        <div className="flex flex-1">
          <aside className="hidden w-[260px] border-r border-white/5 bg-black/20 xl:flex xl:flex-col xl:gap-6 xl:px-4 xl:py-6">
            <SidebarSection title="" items={primaryNav} />
            <SidebarSection title="我的" items={libraryNav} />
            <div className="space-y-2">
              <p className="px-3 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                订阅
              </p>
              <nav className="space-y-1">
                {subscriptions.map((item) => (
                  <Link
                    key={item.label}
                    href="#"
                    className="flex items-center gap-4 rounded-xl px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold">
                      {item.avatar}
                    </span>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              {[
                "全部",
                "科技",
                "AI",
                "编程",
                "Apple",
                "播客",
                "即时",
                "财经",
              ].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 transition hover:bg-white/15"
                >
                  {tag}
                </button>
              ))}
            </div>

            <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
