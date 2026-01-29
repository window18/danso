"use client"
import { useState } from "react";
import { Aside } from "../components/shared/aside";
import Image from "next/image";

export default function Home() {
  const template = [
    {
      id: 1,
      title: "1",
      template: (
        <div className="bg-[#E3E3E3] w-full h-full rounded-md dark:bg-[#0F1827]">
        </div>
      ),
    },
    {
      id: 2,
      title: "4",
      template: (
        <div className="w-full h-full grid grid-cols-2 gap-3">
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
        </div>
      ),
    },
    {
      id: 3,
      title: "6",
      template: (
        <div className="w-full h-full grid grid-cols-[2fr_1fr] gap-3">
          <div className="w-full h-full grid grid-cols-1 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
              <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "7",
      template: (
        <div className="w-full h-full grid grid-cols-2 gap-3">
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
            <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
          </div>
          <div className="bg-[#E3E3E3] rounded-md dark:bg-[#0F1827]"></div>
        </div>
      ),
    },
  ];
  const [addedTemplates, setAddedTemplates] = useState([]);
  const [error, setError] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [changeInput, setChangeInput] = useState("");
  const [activeTemplate, setActiveTemplate] = useState(null);
  const [openTemplate, setOpenTemplate] = useState(false)
  const handleAdd = () => {
    setError("");

    if (!activeTemplate) {
      setError("Выберите раскладку");
      return;
    }

    if (!changeInput.trim()) {
      setError("Введите название");
      return;
    }

    const newTemplate = {
      id: Date.now(),
      title: changeInput.trim(),
      template: activeTemplate.template,
    };

    setAddedTemplates([...addedTemplates, newTemplate]);
    setChangeInput("");
    setActiveTemplate(null);
    setOpenTemplate(false)
  };

  const handleCancel = () => {
    setChangeInput("");
    setActiveTemplate(null);
    setError("");
    setOpenTemplate(false)
  };

  const handleDelete = (id) => {
    setAddedTemplates(addedTemplates.filter((item) => item.id !== id));
    if (selectedTemplate?.id === id) setSelectedTemplate(null);
  };
  return (
    <div className="p-4 flex gap-8 home">
      <Aside />
      <section className="w-full relative flex flex-col gap-6">
        <header className="flex gap-10 h-11">
          <button className="text-[14px] h-full px-[22px] rounded-md bg-black cursor-pointer text-white" onClick={() => setOpenTemplate(prev => !prev)}>Сделать роскладку</button>
          <select
            className="h-full p-2 rounded-md dark:text-white outline-none cursor-pointer dark:bg-[#070F19] bg-[#E3E3E3] text-black"
            value={selectedTemplate?.id || ""}
            onChange={(e) =>
              setSelectedTemplate(
                addedTemplates.find(
                  (t) => t.id === Number(e.target.value),
                ),
              )
            }
          >
            <option value="select">
              Выбрать раскладку
            </option>
            {addedTemplates.map((option) => (
              <option key={option.id} value={option.id}>
                {option.title}
              </option>
            ))}
          </select>
          <button className="dark:bg-[#070F19] dark:text-white text-[14px] px-[22px] py-2 rounded-md bg-[#E3E3E3] text-black cursor-pointer">Добавить камеру</button>
        </header>
        {/* Modals */}
        {openTemplate && (
          <div className="w-[650px] h-[350px] dark:bg-slate-800 absolute top-16 rounded-md flex bg-[#BABABA]">
            <div className="h-full w-[100px] px-2 flex flex-col gap-2 pt-2 cursor-pointer overflow-auto table-scroll">
              {template.map((item) => (
                <div
                  key={item.id}
                  className={`w-full py-1.5 rounded-xl text-center ${activeTemplate?.id === item.id
                    ? "bg-gray-500 text-white"
                    : "dark:bg-[#0F1827] bg-[#E3E3E3]"
                    }`}
                  onClick={() => {
                    setActiveTemplate(item);
                    setError("");
                  }}
                >
                  {item.title}
                </div>
              ))}
            </div>
            <div className="w-full mt-5 mr-5 px-10 pt-5">
              <input
                type="text"
                placeholder="Введите название"
                className="w-full outline-none bg-white/40 rounded-xl text-black dark:text-white px-5 mb-1"
                value={changeInput}
                onChange={(e) => {
                  setChangeInput(e.target.value);
                  setError("");
                }}
              />
              <div className="w-full h-60 overflow-y-auto table-scroll">
                {addedTemplates.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center w-full py-1.5 rounded-xl text-center bg-gray-400 mb-1 px-2 cursor-pointer"
                    onClick={() => handleDelete(item.id)}
                  >
                    <span
                      className="cursor-pointer"
                      onClick={() => setActiveTemplate(item)}
                    >
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
              <div className="w-full flex gap-20 absolute bottom-2 left-80">
                <button
                  className="bg-red-500 text-white px-10 py-1 rounded-xl cursor-pointer"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  disabled={!changeInput.trim() || !activeTemplate}
                  className={`px-10 py-1 rounded-xl text-white ${!changeInput.trim() || !activeTemplate
                    ? "bg-green-500/40 cursor-not-allowed"
                    : "bg-green-500 cursor-pointer"
                    }`}
                  onClick={handleAdd}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
        <section className="h-full">
          {selectedTemplate && (
            <>
              {selectedTemplate.template}
            </>
          )}
          {!selectedTemplate &&
            <div className="bg-[#E3E3E3] w-full h-full rounded-md flex items-center justify-center dark:bg-[#0F1827]">
              <div>
                <Image src="/gra.png" alt="img" width={10} height={10} className="w-[85px] h-[55px]" />
                <p>Выберите Камеру <br />
                  со списка слева
                </p>
              </div>
            </div>}
        </section>
      </section>
    </div>
  );
}
