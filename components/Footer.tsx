export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10">
      <div className="container grid md:grid-cols-3 gap-8 items-center">
        <div>
          <div className="font-bold">SGN Transport Inc.</div>
          <p className="text-sm text-slate-400 mt-1">Brampton, Ontario • GTA & Southwestern Ontario</p>
        </div>
        <ul className="text-sm text-slate-300 space-y-1">
          <li>Dispatch: <a href="tel:+14165550123" className="underline">+1 (647) 968‑4422</a></li>
          <li>Email: <a href="mailto:sgntransport94@gmail.com" className="underline">sgntransport94@gmail.com</a></li>
          <li>Hours: Mon–Sat • Day & Night</li>
        </ul>
        <ul className="text-sm text-slate-300 space-y-1">
          <li>Instagram: <a href="https://instagram.com/sgntransportinc" className="underline" target="_blank" rel="noreferrer">@sgntransportinc</a></li>
        </ul>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} SGN Transport Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
