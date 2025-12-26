const data = {
  works: [
    {
      description: "Jog around the park 3x",
    },
    {
      description: "10 minutes meditation",
    },
    {
      description: "Read for 1 hour",
    },
    {
      description: "Pick up groceries",
    },
    {
      description: "Complete Todo App on Frontend Mentor",
    },
    {
      description: "Kita belom ketemu ayo ketemu ",
    },
    {
      description: "Kita belom ketemu ayo ketemu 2323232323 ",
    },
  ],
};

const Section = () => {
  return (
    <div className="">
      <div className="w-[541px] h-[48px] flex justify-between">
        <h1 className="font-['Josefin_Sans'] text-[40px] font-bold tracking-[15px] text-white">
          TODO
        </h1>
        <img src="Combined_Shape.svg" alt="Bulan" className="w-[26px]" />
      </div>

      <div className="w-[540px] h-[64px] bg-[#C2C3D680] flex items-center  px-4">
        <input type="checkbox" className="w-5 h-5 accent-[#5596FF]" />
        <input
          type="text"
          placeholder="Create a new todo"
          className="flex-1 text-[#232328] text-[18px] font-['Josefin_Sans'] px-3 py-2 outline-none"
        />
      </div>

      <div className="w-[540px] bg-[#C2C3D680] rounded mt-4 p-3">
        {data.works.map((item, index) => (
          <div
            key={index}
            className="h-[64px] flex items-center px-4 border-b last:border-b-0"
          >
            <input type="checkbox" className="w-5 h-5 accent-[#5596FF] mr-4" />
            <p className="font-['Josefin_Sans'] text-[18px] text-[#494C6B]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
