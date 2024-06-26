export default function Card({
  title = "untitled",
  description = "no description",
}) {
  return (
    <div>
      <button>
        <div className="group relative mx-auto w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[2px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
          <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
          <div className="relative rounded-[15px] bg-white p-6">
            <div className="space-y-4">
              <p className="text-lg font-semibold text-slate-800">{title}</p>
              <p className="font-md text-slate-500">{description}</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
