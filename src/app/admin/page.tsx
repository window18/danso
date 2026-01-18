"use client";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Plus } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectValue,
} from "../../components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { AsideAdminCamera } from "../../components/shared/adminShared/asideCamera";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "../../components/ui/field";
import { Textarea } from "../../components/ui/textarea";

export default function Admin() {
  const [activeTab, setActiveTab] = useState(1);

  const listNav = [
    { id: 1, title: "Общие" },
    { id: 2, title: "Подключения" },
    { id: 3, title: "Потоки" },
    { id: 4, title: "Запись" },
    { id: 5, title: "Модули" },
    { id: 6, title: "Дополнительно" },
  ];

  return (
    <div className="pl-26 flex gap-7 admin">
      <div className="w-full flex flex-col gap-4 py-5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-[175px] h-[45px] bg-[#3060FE] hover:bg-[#3060FE]/90 text-white font-black text-[14px] flex items-center gap-2 cursor-pointer">
              <Plus className="w-5 h-5" />
              Добавить камеру
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-[1400px] h-[730px] p-10 bg-transparent border-0 shadow-none"
            align="start"
            sideOffset={10}
          >
            <div className="flex h-full gap-10">
              <nav className="relative w-[200px] bg-[#DBDBDB] dark:bg-transparent rounded-lg p-6 flex flex-col gap-1">
                {listNav.map((item) => {
                  const isActive = activeTab === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={cn(
                        "relative text-left px-5 py-3.5 rounded-md text-sm font-medium transition-all duration-200 text-[#4A4A4A] dark:text-white cursor-pointer",
                        isActive &&
                          "text-[#3060FE] dark:text-[#3060FE] font-bold",
                      )}
                    >
                      {item.title}

                      {/* Синяя полоска слева — только у активного */}
                      {isActive && (
                        <motion.div
                          layoutId="sidebar-underline"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-[#3060FE] rounded-r-full"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Правая часть — контент */}
              <div className="flex-1 rounded-lg p-5 flex flex-col">
                <div className="flex-1">
                  <div className="text-gray-600 ">
                    {activeTab === 1 && (
                      <div className="flex flex-col w-full">
                        <div className="flex flex-col gap-6">
                          <div className="grid items-center gap-3">
                            <Label htmlFor="1" className="dark:text-white">
                              Название
                            </Label>
                            <Input type="text" id="1" className="bg-white" />
                          </div>
                          <div className="flex justify-between gap-8">
                            <div className="grid items-center gap-3 w-full">
                              <Label htmlFor="2" className="dark:text-white">
                                Основой сервер:
                              </Label>
                              <Input type="text" id="2" className="bg-white" />
                            </div>
                            <div className="grid items-center gap-3 w-full">
                              <Label htmlFor="3" className="dark:text-white">
                                Резервный сервер:
                              </Label>
                              <Input type="text" id="3" className="bg-white" />
                            </div>
                          </div>
                          <div className="flex flex-col gap-3">
                            <Label htmlFor="5" className="dark:text-white">
                              Группа
                            </Label>
                            <Select>
                              <SelectTrigger className="w-full bg-white cursor-pointer">
                                <SelectValue placeholder="<нет>" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem
                                  value="light"
                                  className="cursor-pointer"
                                >
                                  pass
                                </SelectItem>
                                <SelectItem
                                  value="dark"
                                  className="cursor-pointer"
                                >
                                  pass
                                </SelectItem>
                                <SelectItem
                                  value="system"
                                  className="cursor-pointer"
                                >
                                  pass
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="mt-10">
                          <FieldSet>
                            <FieldGroup>
                              <Field>
                                <FieldLabel
                                  htmlFor="feedback"
                                  className="dark:text-white"
                                >
                                  Описание
                                </FieldLabel>
                                <Textarea
                                  id="feedback"
                                  rows={4}
                                  className="bg-white h-[115px] dark:text-white"
                                />
                              </Field>
                            </FieldGroup>
                          </FieldSet>
                          <div className="flex items-center gap-3 mt-5">
                            <Checkbox
                              id="terms"
                              className="bg-[#9D9D9D] cursor-pointer"
                            />
                            <Label
                              htmlFor="terms"
                              className=" cursor-pointer dark:text-white"
                            >
                              Отключить камеру
                            </Label>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === 2 && (
                      <div className="flex flex-col w-full">
                        <div className="grid grid-cols-2 gap-5">
                          <div className="grid items-center gap-3">
                            <Label htmlFor="asd" className="dark:text-white">
                              IP Адрес:
                            </Label>
                            <Input
                              type="text"
                              id="asd"
                              className="bg-white dark:text-white"
                            />
                          </div>
                          <div className="grid items-center gap-3">
                            <Label htmlFor="qwe" className="dark:text-white">
                              Порт:
                            </Label>
                            <Input
                              type="text"
                              id="qwe"
                              className="bg-white dark:text-white"
                            />
                          </div>
                          <div className="grid items-center gap-3">
                            <Label htmlFor="fgh" className="dark:text-white">
                              Пользыватель:
                            </Label>
                            <Select>
                              <SelectTrigger className="w-full bg-white  cursor-pointer">
                                <SelectValue placeholder="Выбрать пользователя" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="admin">admin</SelectItem>
                                  <SelectItem value="root">root</SelectItem>
                                  <SelectItem value="service">
                                    service
                                  </SelectItem>
                                  <SelectItem value="supervisor">
                                    supervisor
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid items-center gap-3">
                            <Label htmlFor="xvb" className="dark:text-white">
                              Пороль:
                            </Label>
                            <Input
                              type="text"
                              id="xvb"
                              className="bg-white dark:text-white"
                            />
                          </div>
                        </div>

                        <div className="mt-10">
                          <div className="grid items-center gap-3">
                            <Label htmlFor="vbn" className="dark:text-white">
                              Модель
                            </Label>
                            <Select>
                              <SelectTrigger className="w-full bg-white  cursor-pointer">
                                <SelectValue placeholder="Выбрать модель" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="admin">
                                    Screen Capture
                                  </SelectItem>
                                  <SelectItem value="root">
                                    Universal HTTP/RTSP
                                  </SelectItem>
                                  <SelectItem value="service">
                                    Universal ONVIF
                                  </SelectItem>
                                  <SelectItem value="supervisor">
                                    Universal PSIA
                                  </SelectItem>
                                  <SelectItem value="universal">
                                    Universal Web camera
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex gap-5">
                            <div className="flex items-center gap-3 mt-5">
                              <Checkbox
                                id="termsasaa"
                                className="bg-[#9D9D9D] cursor-pointer rounded-none"
                              />
                              <Label
                                htmlFor="termsasaa"
                                className=" cursor-pointer dark:text-white"
                              >
                                Подключить аудио
                              </Label>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                              <Checkbox
                                id="termsbbbb"
                                className="bg-[#9D9D9D] cursor-pointer rounded-none"
                              />
                              <Label
                                htmlFor="termsbbbb"
                                className=" cursor-pointer dark:text-white"
                              >
                                Передать аудио
                              </Label>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === 3 && (
                      <div>
                        {/*table*/}
                        <div className="flex flex-col gap-5">
                          <div className="w-full bg-white rounded-md h-[200px] px-8 dark:bg-[#070F19]">
                            {/*thead*/}
                            <div className="flex justify-between h-8 items-center dark:text-white">
                              <span className=" h-full py-1">Название</span>
                              <span className="border-l-4 px-5 border-[#E3E3E3] h-full py-1">
                                Протокол
                              </span>
                              <span className="border-l-4 px-5 border-[#E3E3E3] h-full py-1">
                                Розришение
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-5">
                            <Button className=" cursor-pointer bg-white hover:bg-white text-black dark:bg-[#070F19] dark:text-white">
                              Добавить
                            </Button>
                            <Button className="bg-white hover:bg-white text-black cursor-pointer dark:bg-[#070F19] dark:text-white">
                              Удалить
                            </Button>
                          </div>
                        </div>
                        <div className="mt-5">
                          <span className="text-[#6C6C6C] dark:text-white text-[15px] font-bold inline-block mb-4">
                            Изменения потока
                          </span>
                          <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-3">
                              <Label
                                htmlFor="zzzxx"
                                className="dark:text-white"
                              >
                                Протокол получение видио:
                              </Label>
                              <Select>
                                <SelectTrigger className="w-full bg-white cursor-pointer">
                                  <SelectValue placeholder="<нет>" />
                                </SelectTrigger>
                                <SelectContent id="zzzxx">
                                  <SelectItem
                                    value="light"
                                    className="cursor-pointer"
                                  >
                                    pass
                                  </SelectItem>
                                  <SelectItem
                                    value="dark"
                                    className="cursor-pointer"
                                  >
                                    pass
                                  </SelectItem>
                                  <SelectItem
                                    value="system"
                                    className="cursor-pointer"
                                  >
                                    pass
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            {/*33*/}
                            <div className="grid grid-cols-3 gap-5">
                              <div className="flex flex-col gap-3">
                                <Label
                                  htmlFor="zzzxx"
                                  className="dark:text-white"
                                >
                                  Разришения:
                                </Label>
                                <Select>
                                  <SelectTrigger className="w-full bg-white cursor-pointer">
                                    <SelectValue placeholder="<нет>" />
                                  </SelectTrigger>
                                  <SelectContent id="zzzxx">
                                    <SelectItem
                                      value="light"
                                      className="cursor-pointer"
                                    >
                                      pass
                                    </SelectItem>
                                    <SelectItem
                                      value="dark"
                                      className="cursor-pointer"
                                    >
                                      pass
                                    </SelectItem>
                                    <SelectItem
                                      value="system"
                                      className="cursor-pointer"
                                    >
                                      pass
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="flex flex-col gap-3">
                                <Label
                                  htmlFor="zzzxx"
                                  className="dark:text-white"
                                >
                                  Степень компресии:
                                </Label>
                                <Select>
                                  <SelectTrigger className="w-full bg-white cursor-pointer">
                                    <SelectValue placeholder="<нет>" />
                                  </SelectTrigger>
                                  <SelectContent id="zzzxx">
                                    <SelectItem
                                      value="light"
                                      className="cursor-pointer"
                                    >
                                      pass
                                    </SelectItem>
                                    <SelectItem
                                      value="dark"
                                      className="cursor-pointer"
                                    >
                                      pass
                                    </SelectItem>
                                    <SelectItem
                                      value="system"
                                      className="cursor-pointer"
                                    >
                                      pass
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="flex flex-col gap-3">
                                <Label
                                  htmlFor="zzzxx"
                                  className="dark:text-white"
                                >
                                  Кадров в секунду:
                                </Label>
                                <Select>
                                  <SelectTrigger className="w-full bg-white cursor-pointer">
                                    <SelectValue placeholder="<нет>" />
                                  </SelectTrigger>
                                  <SelectContent id="zzzxx">
                                    <SelectItem
                                      value="light"
                                      className="cursor-pointer"
                                    >
                                      pass
                                    </SelectItem>
                                    <SelectItem
                                      value="dark"
                                      className="cursor-pointer"
                                    >
                                      pass
                                    </SelectItem>
                                    <SelectItem
                                      value="system"
                                      className="cursor-pointer"
                                    >
                                      pass
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <div className="flex flex-col gap-3">
                              <Label
                                htmlFor="zzzxx"
                                className="dark:text-white"
                              >
                                Дополнительные параметры строки подключения:
                              </Label>
                              <Select>
                                <SelectTrigger className="w-full bg-white cursor-pointer">
                                  <SelectValue placeholder="<нет>" />
                                </SelectTrigger>
                                <SelectContent id="zzzxx">
                                  <SelectItem
                                    value="light"
                                    className="cursor-pointer"
                                  >
                                    pass
                                  </SelectItem>
                                  <SelectItem
                                    value="dark"
                                    className="cursor-pointer"
                                  >
                                    pass
                                  </SelectItem>
                                  <SelectItem
                                    value="system"
                                    className="cursor-pointer"
                                  >
                                    pass
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === 4 && (
                      <div className="flex flex-col gap-5">
                        <span className="text-[#6C6C6C] text-[15px] font-medium dark:text-white">
                          Запись
                        </span>
                        <div className="flex flex-col gap-3">
                          <Label
                            htmlFor="zzzxx"
                            className="text-black text-[15px] font-bold dark:text-white"
                          >
                            Профиль записи
                          </Label>
                          <Select>
                            <SelectTrigger className="w-full bg-white cursor-pointer">
                              <SelectValue placeholder="<нет>" />
                            </SelectTrigger>
                            <SelectContent id="zzzxx">
                              <SelectItem
                                value="asd"
                                className="cursor-pointer"
                              >
                                &lt;нет&gt;
                              </SelectItem>
                              <SelectItem
                                value="vvv"
                                className="cursor-pointer"
                              >
                                Запись по движению
                              </SelectItem>
                              <SelectItem
                                value="nnn"
                                className="cursor-pointer"
                              >
                                Запись по требыванию
                              </SelectItem>
                              <SelectItem
                                value="zzz"
                                className="cursor-pointer"
                              >
                                Постоянная запись
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <p className="text-[9px] font-medium w-[398px] mt-5 dark:text-white">
                            Выберите необходимый профиль для включения записи в
                            архив. Вы можите создать профиль в разделе ‘’Профили
                            записи’’ конфигуратора, чтоб определиться Расписание
                            записи,настроить пораметры прожевания и выберите
                            необходимый поток для записи.
                          </p>
                        </div>
                        <div className="mt-10">
                          <p className="text-black text-[15px] font-bold dark:text-white">
                            Хранение архива
                          </p>
                          <div>
                            <div className="flex items-center gap-3 mt-5">
                              <Checkbox
                                id="cxvbxcdddvb"
                                className="bg-[#9D9D9D] cursor-pointer rounded-none"
                              />
                              <Label
                                htmlFor="cxvbxcdddvb"
                                className=" cursor-pointer dark:text-white"
                              >
                                Хранить архив не менее
                              </Label>
                              <input
                                type="number"
                                className="bg-white rounded-md w-[50px] h-[25px] dark:bg-[#070F19]"
                              />
                              <p className="dark:text-white">Дней</p>
                              <input
                                type="number"
                                className="bg-white rounded-md w-[50px] h-[25px] dark:bg-[#070F19]"
                              />
                              <p className="dark:text-white">Часов</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                              <Checkbox
                                id="cxvbxghlgkcvb"
                                className="bg-[#9D9D9D] cursor-pointer rounded-none"
                              />
                              <Label
                                htmlFor="cxvbxghlgkcvb"
                                className=" cursor-pointer dark:text-white"
                              >
                                Хранить архив не более
                              </Label>
                              <input
                                type="number"
                                className="bg-white rounded-md w-[50px] h-[25px] dark:bg-[#070F19]"
                              />
                              <p className="dark:text-white">Дней</p>
                              <input
                                type="number"
                                className="bg-white rounded-md w-[50px] h-[25px] dark:bg-[#070F19]"
                              />
                              <p className="dark:text-white">Часов</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 mt-[50px]">
                            <Checkbox
                              id="cxvbxvxcvxcvvvvcvb"
                              className="bg-[#9D9D9D] cursor-pointer rounded-none"
                            />
                            <Label
                              htmlFor="cxvbxvxcvxcvvvvcvb"
                              className=" cursor-pointer dark:text-white"
                            >
                              Использывать архив устройства
                            </Label>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === 5 && (
                      <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-5">
                          <Label
                            htmlFor="cxvbxvxcvxccvb"
                            className=" cursor-pointer font-bold text-black dark:text-white"
                          >
                            Профиль записи
                          </Label>
                          <div className="flex gap-5">
                            <Select>
                              <SelectTrigger className="w-full bg-white cursor-pointer">
                                <SelectValue placeholder="Выключить" />
                              </SelectTrigger>
                              <SelectContent id="zzzxx">
                                <SelectItem
                                  value="asd"
                                  className="cursor-pointer"
                                >
                                  Выключить
                                </SelectItem>
                                <SelectItem
                                  value="vvv"
                                  className="cursor-pointer"
                                >
                                  Серверный детектор движения
                                </SelectItem>
                                <SelectItem
                                  value="nnn"
                                  className="cursor-pointer"
                                >
                                  Детектор движения камеры
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <Button className="bg-white text-black hover:bg-white cursor-pointer dark:bg-[#070F19] dark:text-white">
                              Настроить
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5">
                          <label className="text-black font-bold text-[14px] dark:text-white">
                            Модули анолитики
                          </label>
                          <div className="w-full h-[270px] bg-white dark:bg-[#070F19] dark:text-white rounded-md px-10 py-5 flex flex-col gap-5 overflow-y-auto">
                            {/*1*/}
                            <div className="w-full grid items-center grid-cols-[0fr_1fr_0fr] gap-10">
                              <Checkbox
                                id="bbbsqwerqewr"
                                className="bg-[#9D9D9D] cursor-pointer"
                              />
                              <Label
                                htmlFor="bbbsqwerqewr"
                                className="cursor-pointer"
                              >
                                Акустичиский детектор
                              </Label>
                              <Button className="w-20 h-5 bg-[#E3E3E3] hover:bg-[#E3E3E3] text-black cursor-pointer dark:bg-[#0F1827] dark:text-white">
                                Настройки
                              </Button>
                            </div>
                            {/*1*/}
                            <div className="w-full grid items-center grid-cols-[0fr_1fr_0fr] gap-10">
                              <Checkbox
                                id="bbbsqwevblgjkrqewr"
                                className="bg-[#9D9D9D] cursor-pointer"
                              />
                              <Label
                                htmlFor="bbbsqwevblgjkrqewr"
                                className="cursor-pointer"
                              >
                                Встроинная в камеру видиоаналитика
                              </Label>
                              <Button className="w-20 h-5 bg-[#E3E3E3] hover:bg-[#E3E3E3] text-black cursor-pointer dark:bg-[#0F1827] dark:text-white">
                                Настройки
                              </Button>
                            </div>
                            {/*1*/}
                            <div className="w-full grid items-center grid-cols-[0fr_1fr_0fr] gap-10">
                              <Checkbox
                                id="bbbsqwexnaweqqrqewr"
                                className="bg-[#9D9D9D] cursor-pointer"
                              />
                              <Label
                                htmlFor="bbbsqwexnaweqqrqewr"
                                className="cursor-pointer"
                              >
                                Встроенная в камеру роширенная видиоаналитика
                              </Label>
                              <Button className="w-20 h-5 bg-[#E3E3E3] hover:bg-[#E3E3E3] text-black cursor-pointer dark:bg-[#0F1827] dark:text-white">
                                Настройки
                              </Button>
                            </div>
                            {/*2*/}
                            {/*1*/}
                            <div className="w-full grid items-center grid-cols-[0fr_1fr_0fr] gap-10">
                              <Checkbox
                                id="bbbsqweeweJJAafasdrqewr"
                                className="bg-[#9D9D9D] cursor-pointer"
                              />
                              <Label
                                htmlFor="bbbsqweeweJJAafasdrqewr"
                                className="cursor-pointer"
                              >
                                Детектор QR кодов
                              </Label>
                              <Button className="w-20 h-5 bg-[#E3E3E3] hover:bg-[#E3E3E3] text-black cursor-pointer dark:bg-[#0F1827] dark:text-white">
                                Настройки
                              </Button>
                            </div>
                            {/*2*/}
                            {/*1*/}
                            <div className="w-full grid items-center grid-cols-[0fr_1fr_0fr] gap-10">
                              <Checkbox
                                id="bbbsqjgjkeeewerqewr"
                                className="bg-[#9D9D9D] cursor-pointer"
                              />
                              <Label
                                htmlFor="bbbsqjgjkeeewerqewr"
                                className="cursor-pointer"
                              >
                                Детектор громкого звука
                              </Label>
                              <Button className="w-20 h-5 bg-[#E3E3E3] hover:bg-[#E3E3E3] text-black cursor-pointer dark:bg-[#0F1827] dark:text-white">
                                Настройки
                              </Button>
                            </div>
                            {/*2*/}
                            {/*1*/}
                            <div className="w-full grid items-center grid-cols-[0fr_1fr_0fr] gap-10">
                              <Checkbox
                                id="asdbbbcFDDFOKLUOYU"
                                className="bg-[#9D9D9D] cursor-pointer"
                              />
                              <Label
                                htmlFor="asdbbbcFDDFOKLUOYU"
                                className="cursor-pointer"
                              >
                                Детектор лиц
                              </Label>
                              <Button className="w-20 h-5 bg-[#E3E3E3] hover:bg-[#E3E3E3] text-black cursor-pointer dark:bg-[#0F1827] dark:text-white">
                                Настройки
                              </Button>
                            </div>
                            {/*2*/}
                            {/*1*/}
                            <div className="w-full grid items-center grid-cols-[0fr_1fr_0fr] gap-10">
                              <Checkbox
                                id="vbnWTEWUFKAS"
                                className="bg-[#9D9D9D] cursor-pointer"
                              />
                              <Label
                                htmlFor="vbnWTEWUFKAS"
                                className="cursor-pointer"
                              >
                                Детектор огня
                              </Label>
                              <Button className="w-20 h-5 bg-[#E3E3E3] hover:bg-[#E3E3E3] text-black cursor-pointer dark:bg-[#0F1827] dark:text-white">
                                Настройки
                              </Button>
                            </div>
                            {/*2*/}
                            {/*1*/}
                            <div className="w-full grid items-center grid-cols-[0fr_1fr_0fr] gap-10">
                              <Checkbox
                                id="asdfcvnwe345"
                                className="bg-[#9D9D9D] cursor-pointer"
                              />
                              <Label
                                htmlFor="asdfcvnwe345"
                                className="cursor-pointer"
                              >
                                Детектор остальных придметов
                              </Label>
                              <Button className="w-20 h-5 bg-[#E3E3E3] hover:bg-[#E3E3E3] text-black cursor-pointer dark:bg-[#0F1827] dark:text-white">
                                Настройки
                              </Button>
                            </div>
                            <div className="w-full grid items-center grid-cols-[0fr_1fr_0fr] gap-10">
                              <Checkbox
                                id="678ссссыва"
                                className="bg-[#9D9D9D] cursor-pointer"
                              />
                              <Label
                                htmlFor="678ссссыва"
                                className="cursor-pointer"
                              >
                                Детектор очереди
                              </Label>
                              <Button className="w-20 h-5 bg-[#E3E3E3] hover:bg-[#E3E3E3] text-black cursor-pointer dark:bg-[#0F1827] dark:text-white">
                                Настройки
                              </Button>
                            </div>
                            {/*2*/}
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === 6 && (
                      <div className="flex flex-col gap-10">
                        <h3 className="text-black font-bold text-[15px] dark:text-white">
                          Профиль записи
                        </h3>
                        <div className="w-full bg-white rounded-md px-8 py-5 dark:bg-[#070F19]">
                          <Accordion
                            type="single"
                            collapsible
                            className="w-full bg-[#DBDBDB] text-black px-10 rounded-md dark:bg-[#0F1827] dark:text-white"
                            defaultValue="item-1"
                          >
                            <AccordionItem value="item-1">
                              <AccordionTrigger className="text-[16px] text-black font-bold hover:no-underline cursor-pointer dark:text-white">
                                RTSP
                              </AccordionTrigger>
                              <AccordionContent className="flex flex-col text-balance">
                                <span className="inline-block w-full h-0.5 bg-[#BABABA] rounded-md"></span>
                                <p>Порт RTSP</p>
                                <span className="inline-block w-full h-0.5 bg-[#BABABA] rounded-md mt-1"></span>
                                <p>Протокол RTSP</p>
                                <span className="inline-block w-full h-0.5 bg-[#BABABA] rounded-md mt-1"></span>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                              <AccordionTrigger className="text-[16px] text-black font-bold hover:no-underline cursor-pointer dark:text-white">
                                Аудиопоток
                              </AccordionTrigger>
                              <AccordionContent className="flex flex-col text-balance">
                                <span className="inline-block w-full h-0.5 bg-[#BABABA] rounded-md"></span>
                                <p>
                                  Url внешнего аудиопотока режим получения
                                  аудио{" "}
                                </p>
                                <span className="inline-block w-full h-0.5 bg-[#BABABA] rounded-md mt-1"></span>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                              <AccordionTrigger className="text-[16px] text-black font-bold hover:no-underline cursor-pointer dark:text-white">
                                Видиосервер
                              </AccordionTrigger>
                              <AccordionContent className="flex flex-col text-balance">
                                <span className="inline-block w-full h-0.5 bg-[#BABABA] rounded-md"></span>
                                <p>номер канала</p>
                                <span className="inline-block w-full h-0.5 bg-[#BABABA] rounded-md mt-1"></span>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                              <AccordionTrigger className="text-[16px] text-black font-bold hover:no-underline cursor-pointer dark:text-white">
                                Декорирование
                              </AccordionTrigger>
                              <AccordionContent className="flex flex-col text-balance">
                                <span className="inline-block w-full h-0.5 bg-[#BABABA] rounded-md"></span>
                                <p>Декорирование видио</p>
                                <span className="inline-block w-full h-0.5 bg-[#BABABA] rounded-md mt-1"></span>
                                <p>Повтор изображения</p>
                                <span className="inline-block w-full h-0.5 bg-[#BABABA] rounded-md mt-1"></span>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                              <AccordionTrigger className="text-[16px] text-black font-bold hover:no-underline cursor-pointer dark:text-white">
                                Разное
                              </AccordionTrigger>
                              <AccordionContent className="flex flex-col text-balance">
                                <span className="inline-block w-full h-0.5 bg-[#BABABA] rounded-md"></span>
                                <p>ID</p>
                                <span className="inline-block w-full h-0.5 bg-[#BABABA] rounded-md mt-1"></span>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Кнопки внизу */}
                <div className="flex justify-end gap-4 mt-2">
                  <Button
                    onClick={(e) => e.stopPropagation()}
                    className=" cursor-pointer dark:bg-[#070F19] dark:text-white bg-white text-black"
                  >
                    ОК
                  </Button>
                  <Button className="bg-white hover:bg-white text-black cursor-pointer dark:bg-[#070F19] dark:text-white">
                    Отменить
                  </Button>
                </div>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="w-full h-full bg-[#E3E3E3] dark:bg-[#0F1827] rounded-md"></div>
      </div>

      <AsideAdminCamera />
    </div>
  );
}
