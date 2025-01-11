import { Archive, Trash2 } from "lucide-react";

const NoteCard = () => {
  return (
    <div className="max-w-[320px] basis-auto rounded-lg bg-slate-200 p-4">
      {/* card header */}
      <div className="flex justify-between gap-5">
        <div className="w-full">
          <div className="text-base text-slate-500">3 days ago</div>
          <h6 className="text-xl font-medium">Card title</h6>
        </div>
        <div className="flex h-10 w-10 items-center justify-center bg-transparent">
          <Archive size={20} />
        </div>
      </div>

      <hr />

      {/* card body */}
      <div className="text-pretty text-lg text-slate-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, cum illum
        modi inventore possimus voluptatibus similique blanditiis iure animi?
        Ratione, suscipit facere. Magni molestiae dolore, beatae iure nesciunt
        ea accusamus?
      </div>

      {/* card footer */}
      <div className="flex justify-end">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-200">
          <Trash2 color="#ef4444" size={20} />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
