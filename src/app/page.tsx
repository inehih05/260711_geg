import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen lg:h-screen w-full bg-gradient-to-br from-yellow-50/20 via-white to-blue-50/20 flex flex-col justify-between overflow-x-hidden font-sans select-none text-slate-800">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-yellow-300/15 blur-[80px] md:blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-blue-300/15 blur-[80px] md:blur-[120px] -z-10 animate-pulse-slow delay-300" />
      
      {/* Background patterns: Dots & Sparks */}
      <div className="absolute top-[20%] left-[5%] opacity-20 -z-10 hidden md:block">
        {/* Light Blue Sparkle / Star */}
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-blue-400 animate-pulse">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-[25%] right-[8%] opacity-25 -z-10 hidden md:block">
        {/* Yellow Lightning Bolt */}
        <svg width="35" height="50" viewBox="0 0 24 36" fill="none" className="text-yellow-400 animate-bounce" style={{ animationDuration: '3s' }}>
          <path d="M14 0L0 20H10L6 36L24 14H12L14 0Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-[15%] right-[35%] opacity-15 -z-10 hidden lg:block">
        {/* Decorative Grid of Dots */}
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          ))}
        </div>
      </div>

      {/* Header Section */}
      <header className="w-full max-w-7xl mx-auto px-6 py-5 md:py-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-yellow-400 to-amber-500 flex items-center justify-center shadow-md shadow-yellow-200">
            {/* Pokéball-like icon */}
            <div className="w-4 h-4 rounded-full border-2 border-white bg-blue-600" />
          </div>
          <span className="font-extrabold text-xl md:text-2xl tracking-tight bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
            포켓몬 탐험대
          </span>
        </div>
        <nav className="flex items-center gap-3 sm:gap-6">
          <a
            href="#"
            className="text-sm md:text-base font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 px-3 py-1.5 rounded-full transition-colors"
          >
            포켓몬 소개
          </a>
          <a
            href="#"
            className="text-sm md:text-base font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 px-3 py-1.5 rounded-full transition-colors"
          >
            포켓몬 도감
          </a>
          <a
            href="#"
            className="text-sm md:text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 px-4 py-1.5 rounded-full shadow-md shadow-blue-200 transition-all hover:scale-105 active:scale-95"
          >
            모험 시작
          </a>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto flex-1 flex flex-col lg:flex-row items-center justify-center px-6 py-8 lg:py-0 gap-10 lg:gap-16 z-10">
        
        {/* Left Column: Text Content and Action Buttons */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left animate-fade-in-up max-w-xl lg:max-w-none">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-100 text-yellow-800 font-bold text-xs md:text-sm mb-5 shadow-sm">
            ⚡ 모험을 함께할 파트너를 찾아서
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black leading-tight md:leading-tight lg:leading-[1.15] text-slate-900 tracking-tight">
            오늘, 어떤 포켓몬을 <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 bg-clip-text text-transparent">
              만나 볼래?
            </span>
          </h1>
          
          <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-md lg:max-w-lg delay-100">
            서로 다른 모습과 특별한 능력을 가진 포켓몬을 만나 보세요. 
            새로운 포켓몬과 함께 신나는 모험을 시작해요!
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto delay-200">
            <button className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-slate-900 font-bold text-base md:text-lg px-8 py-4 rounded-full shadow-lg shadow-yellow-200/50 transform hover:scale-105 active:scale-95 transition-all cursor-pointer">
              포켓몬 만나기
            </button>
            <button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-blue-600 border-2 border-blue-500 font-bold text-base md:text-lg px-8 py-3.5 rounded-full shadow-md shadow-slate-100/50 transform hover:scale-105 active:scale-95 transition-all cursor-pointer">
              포켓몬 알아보기
            </button>
          </div>
        </div>

        {/* Right Column: Hero Pokemon Image Area */}
        <div className="flex-1 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] flex items-center justify-center animate-fade-in-up delay-200">
          <div className="relative w-full aspect-square bg-gradient-to-br from-yellow-100/30 to-blue-100/30 rounded-[3rem] p-6 sm:p-8 md:p-10 shadow-xl border border-white/60 animate-float backdrop-blur-sm">
            
            {/* Soft yellow glow behind character */}
            <div className="absolute inset-0 m-auto w-3/4 h-3/4 bg-yellow-300/30 rounded-full blur-2xl -z-10 animate-pulse" />
            
            {/* Decorative background shape in the card */}
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-yellow-200/40 bg-yellow-50/20 flex items-center justify-center text-yellow-500 font-bold animate-pulse">
              ★
            </div>

            {/* Representative Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner bg-white/40 flex items-center justify-center">
              <Image
                src="/pokemon_landing.jpg"
                alt="포켓몬 이미지"
                width={500}
                height={500}
                className="object-contain transform hover:scale-[1.03] transition-transform duration-500"
                priority
              />
            </div>
            
            <div className="absolute -bottom-4 -right-2 md:bottom-2 md:right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs md:text-sm font-bold text-slate-700">모험 파트너 검색 중</span>
            </div>
          </div>
        </div>

      </main>

      {/* Footer Section */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-4 md:py-5 flex flex-col sm:flex-row items-center justify-between text-xs md:text-sm text-slate-400 gap-2 border-t border-slate-100/50 mt-4 lg:mt-0">
        <p>© 2026 포켓몬 탐험대. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <span className="text-rose-500">♥</span> for adventure
        </p>
      </footer>

    </div>
  );
}
