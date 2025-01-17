const Loading = () => {
  return (
    <div className="w-full bg-transparent py-5">
      <div className="flex w-full items-center justify-center">
        <div className="relative h-12 w-12">
          <div className="absolute h-12 w-12 rounded-full border-8 border-slate-300"></div>
          <div className="absolute h-12 w-12 animate-spin rounded-full border-8 border-indigo-500 border-b-transparent"></div>
        </div>
      </div>
      <div className="mt-4 text-center text-xl font-semibold">
        Collecting data
      </div>
      <p className="mx-auto max-w-[80%] text-pretty text-center text-slate-500">
        It may take a moment
      </p>
    </div>
  );
};

export default Loading;
